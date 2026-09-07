# Feature status — Clinical research & life sciences

| Capability | Status |
| --- | --- |
| Native sidebar and canonical feature registry | Built; 268 pages |
| Shared records, validation, relationships, persistence | Implemented in shared runtime |
| Clickable table rows with centered details popup | Implemented; Edit, Delete, Cancel, keyboard access and mobile layout |
| Domain field forms and source traceability | Imported from static source definitions; historical routes are labeled in mapping |
| CSV exports, attachments, audit and report totals | Implemented |
| At least 15 fictional rows per editable feature | Seeded by startup; measured in reports/seed-verification.json |
| AI question-and-answer workspace | Replaces AI feature tables; questions, context fields, formatted answers, follow-ups and saved history; live provider configuration required |
| Source calculation adapters | Available for explicitly registered calculation variants only |
| Source business-rule and state-machine parity | Incomplete beyond registered adapters and native records; verify each source journey |
| Original account/business data migration | Not performed; source data preserved |
| Provider integrations and external delivery | Not connected; request preparation only |
| Hosted authentication, independent-review roles and tenant isolation | Not migrated; local single-user boundary |

A successful build or populated table is not evidence of full source workflow parity. The source-to-feature map records every extracted definition and route, with explicit exclusions and migration warnings. Test/build reports distinguish checked behavior from remaining work.

| Canonical feature | Native mode | Source entries | Calculators | Status |
| --- | --- | ---: | ---: | --- |
| Clients & customers | records | 0 | 0 | Native records/view |
| Work items & projects | records | 0 | 0 | Native records/view |
| Contacts & parties | records | 0 | 0 | Native records/view |
| Tasks | records | 0 | 0 | Native records/view |
| Calendar | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Deadlines & reminders | records | 0 | 0 | Native records/view |
| Notes | records | 0 | 0 | AI question-and-answer workspace; records available as context |
| Documents | records | 0 | 0 | AI question-and-answer workspace; records available as context |
| Templates | records | 0 | 0 | AI question-and-answer workspace; records available as context |
| Invoices & billing | records | 1 | 0 | Native records/view |
| Time tracking | records | 0 | 0 | Native records/view |
| Messages & communications | records | 1 | 0 | Native records/view |
| Reports & analytics | report | 7 | 0 | Native records/view |
| Activity & audit trail | audit | 3 | 0 | Native records/view |
| Provider connections | integration | 3 | 0 | Provider request records only |
| Study protocol registry | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Coverage analysis | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| National coverage rule mapping | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Sponsor budget mapping | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Participant enrollment | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Encounter order linking | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Routine cost determination | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Sponsor-paid service detection | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Q0 Q1 modifier control | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Diagnosis code validation | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Claim prebill review | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Sponsor invoice reconciliation | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Double-bill detection | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Correction refund workflow | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Study billing analytics | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| CTA and budget-grid library | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Protocol and site registry | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Subject enrollment reconciliation | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Visit and procedure earnings | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Screen-failure payment validation | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Milestone payment tracking | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Start-up fee reconciliation | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Pass-through cost recovery | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Holdback and retainage control | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Amendment and rate effective dates | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Invoice generation and support | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Sponsor payment matching | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Payment query and dispute workflow | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Receivable aging and forecasting | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Study profitability analytics | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Clinical Workflow | records | 1 | 0 | Native records/view |
| Patients | records | 5 | 0 | Native records/view |
| Health Records | records | 1 | 0 | Native records/view |
| Genome Markers | records | 1 | 0 | Native records/view |
| Medications | records | 1 | 0 | Native records/view |
| Lab Results | records | 2 | 0 | Native records/view |
| Treatment Plans | records | 1 | 0 | Native records/view |
| CPIC PGx | records | 1 | 0 | Native records/view |
| ACMG Variants | records | 1 | 0 | Native records/view |
| Polygenic Risk | records | 1 | 0 | Native records/view |
| Trial Matcher | records | 1 | 0 | Native records/view |
| Warfarin IWPC | records | 1 | 0 | Native records/view |
| Lab Trend Detector | records | 1 | 0 | Native records/view |
| Dose Personalizer | records | 1 | 0 | Native records/view |
| Wearable Stream | records | 1 | 0 | Native records/view |
| Genome Therapy | integration | 1 | 0 | Provider request records only |
| EHR Summarize | records | 1 | 0 | Native records/view |
| Wearables Integration | integration | 1 | 0 | Provider request records only |
| FHIR Connector | integration | 1 | 0 | Provider request records only |
| HIPAA Audit | records | 1 | 0 | Native records/view |
| Consent Mgmt | records | 1 | 0 | Native records/view |
| Clinician Roles | records | 1 | 0 | Native records/view |
| mRNA n-of-1 | records | 1 | 0 | Native records/view |
| Wearable Fusion | records | 1 | 0 | Native records/view |
| Trial Autofill | records | 1 | 0 | Native records/view |
| PGx-Aware Rx | records | 1 | 0 | Native records/view |
| Digital Twin | records | 1 | 0 | Native records/view |
| Consents | records | 1 | 0 | Native records/view |
| Field Access Log | records | 1 | 0 | Native records/view |
| Adverse Events | records | 4 | 0 | Native records/view |
| Tools | records | 1 | 0 | Native records/view |
| Protein Design | integration | 4 | 0 | Provider request records only |
| Drug Targets | records | 2 | 0 | Native records/view |
| Drug Candidates | records | 2 | 0 | Native records/view |
| Molecular Screening | records | 2 | 0 | Native records/view |
| Binding Affinities | records | 2 | 0 | Native records/view |
| Toxicity Predictions | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Protein Structures | records | 2 | 0 | Native records/view |
| Clinical Trials | records | 3 | 0 | Native records/view |
| Compound Library | records | 2 | 0 | Native records/view |
| Research Projects | records | 2 | 0 | Native records/view |
| Lab Experiments | records | 2 | 0 | Native records/view |
| Drug Interactions | records | 3 | 0 | Native records/view |
| ADMET Properties | records | 2 | 0 | Native records/view |
| Literature & Research | records | 1 | 0 | Native records/view |
| AI Drug Designer | integration | 2 | 0 | AI question-and-answer workspace; records available as context |
| AI Binding Affinity Prediction | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| AI Toxicity Prediction | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| AI Structure Prediction | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| AI Drug Interaction Check | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| AI ADMET Prediction | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| AI Literature Analysis | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Sequence Validator | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Candidate Ranker | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Solubility Predictor | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Docking Integrator | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Off-Target Predictor | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Formulation Recommender | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Patent Landscape | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Virtual HTS Simulator | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| SAR Analyzer | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Clinical Trial Designer | integration | 1 | 0 | Provider request records only |
| Competitive Intelligence | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Regulatory Pathway Advisor | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Virtual Screening Pipeline | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| PubChem Lookup | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Predictive Trial Success | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Lab Automation Planner | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Multi-Objective Optimizer | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Scientific Workbench | records | 1 | 0 | Native records/view |
| Advanced Discovery | records | 1 | 0 | Native records/view |
| Toxicity Data | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Literature | records | 2 | 0 | Native records/view |
| AI Binding Affinity | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| AI Structure Predict | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| AI Drug Interaction | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| AI ADMET Predict | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Solubility Predict | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Off-Target Predict | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Formulation Recom | records | 1 | 0 | Native records/view |
| Virtual HTS Sim | records | 1 | 0 | Native records/view |
| Trial Designer | integration | 1 | 0 | Provider request records only |
| Regulatory Advisor | records | 1 | 0 | Native records/view |
| AI History | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Virtual Screening | records | 1 | 0 | Native records/view |
| Lab Automation | records | 1 | 0 | Native records/view |
| Multi-Obj Optimize | records | 1 | 0 | Native records/view |
| Assay batch reproducibility | records | 1 | 0 | Native records/view |
| Compliance trends | records | 1 | 0 | Native records/view |
| Analyze | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Prompt templates | records | 1 | 0 | Native records/view |
| Preview | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Audit trail | records | 3 | 0 | AI question-and-answer workspace; records available as context |
| Regulatory calendar | records | 1 | 0 | Native records/view |
| Predict | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Cross document analysis | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Cost analytics | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Log | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Batch | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Trends | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Prompts | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Cross doc | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Export | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Cost | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Extra | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Extensions | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Capa readiness board | records | 1 | 0 | Native records/view |
| AI Matching | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Eligibility | records | 1 | 0 | Native records/view |
| Sites | records | 3 | 0 | Native records/view |
| Enrollments | records | 1 | 0 | Native records/view |
| Retention Risk | records | 1 | 0 | Native records/view |
| Protocols | records | 3 | 0 | Native records/view |
| Biomarkers | records | 1 | 0 | Native records/view |
| Outcomes | records | 1 | 0 | Native records/view |
| Regulatory | records | 1 | 0 | Native records/view |
| Webhooks | integration | 3 | 0 | Provider request records only |
| Patient-Trial Matching | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Eligibility Screening | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Biomarker Analysis | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Drug Interaction Checker | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Outcome Prediction | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Protocol Analysis | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Adverse Event Analysis | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Regulatory Compliance Check | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Report Generation | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Enrollment Optimization | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Cohort Analysis | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Protocol Optimizer | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Consent Simplifier | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Pre-Screening Batch | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Biomarker Trend Predictor | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Site Feasibility Ranker | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Protocol Version Diff | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Multi-Trial Cohort Builder | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Outcome Ensemble | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Regulatory Readiness Dashboard | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Dropout Risk Predictor | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Site Network Optimizer | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Trials | records | 2 | 0 | Native records/view |
| Investigators | records | 2 | 0 | Native records/view |
| Recruitment matching | records | 1 | 0 | Native records/view |
| Compounds | records | 2 | 0 | Native records/view |
| Endpoints | records | 2 | 0 | Native records/view |
| Amendments | records | 2 | 0 | Native records/view |
| Deviations | records | 2 | 0 | Native records/view |
| Monitoring visits | records | 2 | 0 | Native records/view |
| Site activation risk | records | 2 | 0 | Native records/view |
| Queries | records | 2 | 0 | Native records/view |
| Data locks | records | 2 | 0 | Native records/view |
| Milestones | records | 2 | 0 | Native records/view |
| Budgets | records | 2 | 0 | Native records/view |
| Vendors cro | records | 2 | 0 | Native records/view |
| Regulatory submissions | records | 2 | 0 | Native records/view |
| Supply shipments | records | 2 | 0 | Native records/view |
| Draft protocol | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Recommend endpoints | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Size cohort | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Select sites | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Model risk | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Generate brief | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Deviation classifier | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Dsmb alert | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Edc anomaly | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Statistical imbalance | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Expected vs actual | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Irb pkg drafter | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Query resolver | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Milestone forecaster | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Budget burn | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Regulatory impact | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Bulk import | records | 2 | 0 | Native records/view |
| Power calc explain | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Patient burden | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Ie optimizer | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Ind nda section | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Dropout predictor | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Adaptive sim | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Rwe match | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Comparable trials | records | 2 | 0 | Native records/view |
| Protocol version graph | records | 2 | 0 | Native records/view |
| Irb workflows | records | 2 | 0 | Native records/view |
| Randomization | records | 2 | 0 | Native records/view |
| Sdtm export | records | 2 | 0 | Native records/view |
| Dsmb packet | records | 2 | 0 | Native records/view |
| Enrollment forecast | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Meddra code | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Safety narrative | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Form 1572 | records | 2 | 0 | Native records/view |
| Delegation log | records | 2 | 0 | Native records/view |
| Training records | records | 2 | 0 | AI question-and-answer workspace; records available as context |
| Ctgov search | records | 2 | 0 | Native records/view |
| Design sim | integration | 2 | 0 | Provider request records only |
| Econsent | records | 2 | 0 | Native records/view |
| Production readiness | records | 2 | 0 | Native records/view |
| Cycles | records | 1 | 0 | Native records/view |
| Embryos | records | 1 | 0 | Native records/view |
| Scores | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Predictions | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Doctors | records | 1 | 0 | Native records/view |
| Genetic screenings | records | 1 | 0 | Native records/view |
| Transfer plans | records | 1 | 0 | Native records/view |
| Quality control | records | 1 | 0 | Native records/view |
| Lab anomaly detect | records | 1 | 0 | Native records/view |
| Genetic risk assess | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| Appointments | records | 1 | 0 | Native records/view |
| agentic embryo selection | records | 1 | 0 | Native records/view |
| computer vision embryo grading | records | 1 | 0 | Native records/view |
| implantation probability | records | 1 | 0 | Native records/view |
| genetic disease screening assistant | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| cycle protocol optimization | records | 1 | 0 | Native records/view |
| ai route stubs ai | records | 1 | 0 | AI question-and-answer workspace; records available as context |
| embryos without exposed embryo | records | 1 | 0 | Native records/view |
| genetic | records | 1 | 0 | Native records/view |
| lab | records | 1 | 0 | Native records/view |
| lims and ehr modules exist but real adapters not v | records | 1 | 0 | Native records/view |
| limited regulatory compliance tracking depth cap c | records | 1 | 0 | Native records/view |
| webhooks for lab events | integration | 1 | 0 | Provider request records only |
| notifications module grep 0 | records | 1 | 0 | Native records/view |
| mobile app for embryologists | records | 1 | 0 | Native records/view |
| limited frontend pages 15 for 21 | records | 1 | 0 | Native records/view |
| Rules & Jobs | records | 2 | 0 | Native records/view |
| Tetrascience work | records | 1 | 0 | AI question-and-answer workspace; records available as context |

Row popup verification passed: dashboard and feature rows, keyboard/focus, editing and persistence, delete confirmation/cancellation, centered mobile layout and full-record navigation. See `reports/row-popup-verification.json`.

## Verified local build

Build, API, browser and actual `start.sh` checks passed. All 268 feature pages were visited in the browser; 266 editable tables contain at least 15 fictional rows each. CRUD persistence and mobile layout were checked. Evidence is in `reports/verification.json`, `reports/browser-verification.json` and `reports/startup-verification.json`.

These checks cover the native local workspace. Full source-specific business rules, authentication and live provider operations remain incomplete as described above. Test servers were stopped after verification.

## AI workspace verification

All 137 AI feature routes were checked in the browser and show questions and formatted answers instead of the original record table. Existing records are retained as optional context. Questions, follow-ups, saved history across restart, Markdown tables, safe rendering, downloads, provider-failure recovery and mobile layout passed with a mocked provider. See `reports/ai-workspace-verification.json`.

Live answers require `OPENROUTER_API_KEY` and `OPENROUTER_MODEL` in this app's `.env` and an app restart. No live provider call was made during verification. Conversational answers do not execute unmigrated specialist engines, read record attachments automatically or perform external actions.


## AI word limits

Questions support up to 5,000 words with a live counter and server validation. AI responses and record drafts have a 16,000-token output budget and a default 180-second timeout to support answers up to 5,000 words; actual length depends on the request and model. Answers show their word count, and long questions can be expanded. Browser checks passed for 5,000-word questions and answers, saved history, full downloads, mobile layout and rejection of 5,001-word questions. See `reports/word-limit-verification.json` (mock-provider boundary checks).

## Merged AI assistants

137 original AI entries are now grouped into **7 assistants** in the sidebar. Choose up to 8 related capabilities and add up to 10 questions for one provider request and one saved response. Shared context is sent once; repeated questions are removed after trimming and whitespace/case normalization. The total question limit is 5,000 words and the combined answer target is up to 5,000 words.

Original feature URLs still open the appropriate assistant with that capability selected. Existing records and answers stay in place; the assistant history includes answers saved under its member features. Non-AI record tables retain their popup actions. This merges the assistant workflow and navigation; it does not implement previously missing external integrations or specialist engines. See `reports/assistant-merge-map.json` and `reports/assistant-merge-verification.json`.

## Floating Ask AI assistant

Implemented across this workspace. The bottom-right **Ask AI** button opens a persistent chat panel on every page. Use **Ask AI about item** in a row popup or record view, or **Use current item** inside the panel, to supply the selected record.

- Questions about the page, any explicitly chosen app record, and general topics.
- Formatted answers, comparison tables, follow-ups, copy and Markdown download.
- Conversation and question drafts stay intact during in-app navigation. Saved answers persist in SQLite; the last conversation restores in the same browser tab after reload. The latest 50 saved answers are listed; restoring one displays up to 20 turns. Up to four preceding turns are sent as AI context.
- Up to 5,000 input words and a response budget of up to 5,000 words. Output length remains dependent on the provider and the question.
- Page title and description are supplied automatically; record fields and notes are sent only for a selected item. Attachments and unselected records are not included. **New chat** starts without earlier conversation context.
- Existing AI provider configuration, timeout, rate limit and safe response renderer are reused. The assistant answers and drafts; it does not execute record changes or external actions.

Validation: shared backend tests, all 64 app builds/API checks, and all 64 browser checks passed with an injected test provider. Browser checks cover item context, navigation, saved history/reload, follow-ups, new-chat isolation, error recovery, word limits, keyboard controls, mobile bounds, safe Markdown rendering and attachment refresh. See [verification](reports/floating-ai-verification.json).
