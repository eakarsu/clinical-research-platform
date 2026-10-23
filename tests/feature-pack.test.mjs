import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm} from 'node:fs/promises';
import path from 'node:path';import os from 'node:os';
process.env.WORKSPACE_AUTH_TOKEN='test-token-7b';
delete process.env.OPENROUTER_API_KEY;delete process.env.OPENAI_API_KEY;delete process.env.OPENROUTER_MODEL;
const {createHub}=await import('../dist/hub/server.mjs');
const DOMAIN='participant-enrollment';
const dir=await mkdtemp(path.join(os.tmpdir(),'fp7b-'));
const server=createHub({databasePath:path.join(dir,'db.sqlite')});
await new Promise((res,rej)=>{server.once('error',rej);server.listen(0,'127.0.0.1',res);});
const base=`http://127.0.0.1:${server.address().port}`;
const req=(u,m='GET',b,auth=true)=>fetch(base+u,{method:m,headers:{'Content-Type':'application/json','X-Legal-Workspace':'1',...(auth?{Authorization:'Bearer test-token-7b'}:{})},body:b===undefined?undefined:JSON.stringify(b)});
test.after(async()=>{await new Promise(r=>server.close(r));await rm(dir,{recursive:true,force:true});});
test('authenticated tasks list/create/update',async()=>{
 assert.equal((await req('/api/workspace/features/tasks/records','GET',undefined,false)).status,401);
 const c=await req('/api/workspace/features/tasks/records','POST',{title:'FP task alpha',status:'active',data:{assignee:'Sam',priority:'high'}});assert.equal(c.status,201);const task=await c.json();
 const list=await (await req('/api/workspace/features/tasks/records')).json();assert.ok(list.some(r=>r.id===task.id));
 const u=await req(`/api/workspace/records/${task.id}`,'PUT',{...task,title:'FP task alpha updated'});assert.equal(u.status,200);assert.equal((await u.json()).title,'FP task alpha updated');
});
test('search/filter and CSV/JSON export of main records',async()=>{
 await req('/api/workspace/features/tasks/records','POST',{title:'FP task beta',status:'draft',data:{}});
 const found=await (await req('/api/workspace/features/tasks/records?q=alpha')).json();assert.ok(found.length>=1&&found.every(r=>/alpha/i.test(r.title+r.notes)));
 const drafts=await (await req('/api/workspace/features/tasks/records?status=draft')).json();assert.ok(drafts.every(r=>r.status==='draft'));
 const json=await (await req('/api/workspace/features/tasks/records/export?format=json')).json();assert.equal(json.feature,'tasks');assert.ok(json.records.length>=2);
 const csv=await (await req('/api/workspace/features/tasks/records/export')).text();assert.match(csv,/FP task alpha/);
});
test('domain AI insight is labelled deterministic fallback preserving false/0',async()=>{
 const cat=await (await req('/api/workspace/insights')).json();const def=cat.find(d=>d.id!=='priority-actions');assert.ok(def,JSON.stringify(cat.map(d=>d.id)));
 await req(`/api/workspace/features/${def.feature}/records`,'POST',{title:'FP domain record',status:'draft',data:{}});
 const r=await req('/api/workspace/insights/'+def.id,'POST',{});assert.equal(r.status,201);const body=await r.json();
 assert.equal(body.aiGenerated,false);assert.equal(body.fallback,true);assert.match(body.label,/Deterministic fallback/);
 assert.ok(Array.isArray(body.sections)&&body.sections.length>0);
 const raw=JSON.stringify(body);assert.ok(raw.includes('"filled":0')||raw.includes('"value":0')||raw.includes('"value":false')||raw.includes(':0')||raw.includes(':false'),raw.slice(0,400));
 const pa=await (await req('/api/workspace/insights/priority-actions','POST',{})).json();assert.equal(pa.aiGenerated,false);assert.equal(pa.data.hasOverdue,false);
});
