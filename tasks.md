# Team Tasks, Planning & Scheduling

This document details all prioritized tasks, estimates, dependencies, scope items, and merged milestone deadlines for the team. All tasks are structured as **Works in: [Area / Feature]** with their respective scope items, arranged in exact priority order.

## Overview & Roles
- **Salim (Ameen)**: Planning, architecture, thinking & backend logic.
- **Salman**: UI/UX Design & wireframes (precedes developer implementation).
- **Development Team**: Nabhan, Hashir, Munavar, Hisham, Majid.
- **Scheduling Rules**:
  - **Very Small** (~15 min) & **Small** (~2–3h) are scheduled into available free periods (free timetable slots + 1:15–2:20 PM + 4:00–5:00 PM + 6:00–9:00 PM + 9:00–11:00 PM) with a **5-minute buffer** between tasks.
  - **Medium** (~1 day), **Big** (~2 days), and **Very Big** (~4 days) occupy full dedicated calendar days.
  - **Merged Deadlines**: Grouped every ~3 tasks so individual task variance does not break deadlines.
  - **Timeline Start**: Thursday, Oct 1, 2026. Continuous work days.

---

## 1. Salim (Ameen) — Planning & Strategy

Salim plans first. The team's downstream design and coding depend on Salim's specifications.

| # | Task | Size | Est. Time | Depends On | Scope Items |
|---|------|------|-----------|------------|-------------|
| 1 | **Works in: Schedule Rethink** | Medium | 1 day | None | • Event sessions, talks vs programmes<br>• Phase-based structure<br>• Candidate count * participation count logic |
| 2 | **Works in: Toppers Redesign** | Medium | 1 day | None | • Section as topper (key fix)<br>• Change layout<br>• Topper limit by ranks<br>• Topper limit in subscription plan rethink<br>• Topper regeneration (needs regeneration label flow fix) |
| 3 | **Works in: Curb Rethink** | Medium | 1 day | None | • Sectioning curbs |
| 4 | **Works in: Candidate & Subfest Candidate Override** | Medium | 1 day | None | • Candidate and subfest candidate override rethink |
| 5 | **Works in: Grade & Points Defaults** | Medium | 1 day | None | • Grade and points default will be separate for individual and group |
| 6 | **Works in: Category Common** | Medium | 1 day | None | • Category common logic rethink |
| 7 | **Works in: Customer Data Requirements** | Medium | 1 day | None | • Data to ask with customer |
| 8 | **Works in: Filter Pills & UI Blinking Fix** | Medium | 1 day | None | • Filters pill blinking everywhere |
| 9 | **Works in: Data Table Redesign Coding** | Medium | 1 day | Salman (Data Table Design) | • Data table redesign coding (after Salman do it) |

### Salim's Merged Milestone Deadlines
- **Batch 1 (Tasks 1–3)**: *Schedule Rethink*, *Toppers Redesign*, *Curb Rethink*  
  🎯 **Deadline**: Saturday, Oct 3, 2026, 11:00 PM (Unblocks Hashir & Salman)
- **Batch 2 (Tasks 4–6)**: *Candidate Override*, *Grade & Points*, *Category Common*  
  🎯 **Deadline**: Tuesday, Oct 6, 2026, 11:00 PM
- **Batch 3 (Tasks 7–9)**: *Customer Data*, *Filters Pill Fix*, *Data Table Redesign Coding*  
  🎯 **Deadline**: Friday, Oct 9, 2026, 11:00 PM

---

## 2. Salman — UI/UX Design

Salman designs the interfaces that developers will implement.

| # | Task | Size | Est. Time | Depends On | Scope Items |
|---|------|------|-----------|------------|-------------|
| 1 | **Works in: Programme Detail Page** | Small | 2.5 hrs | None | • Programme detail page layout & guidelines |
| 2 | **Works in: Topic Registration Page** | Small | 2.5 hrs | None | • Topic registration page<br>• No topic added etc designs |
| 3 | **Works in: Create Candidate Page** | Small | 2.5 hrs | None | • Create candidate page layout & fields |
| 4 | **Works in: Candidate Detail Page** | Small | 2.5 hrs | None | • Candidate detail page & points view |
| 5 | **Works in: Create/Edit Programme Page** | Medium | 1 day | None | • Move concept not after name<br>• Basic details only when adding<br>• Phase based schedule |
| 6 | **Works in: Schedule Design** | Medium | 1 day | Salim (Schedule Rethink) | • Schedule visual design & sessions layout |
| 7 | **Works in: Data Table (Saved View Fix)** | Medium | 1 day | None | • Data table saved view confusion fix |
| 8 | **Works in: Screen Design** | Medium | 1 day | None | • Screen design for displays & live boards |

### Salman's Merged Milestone Deadlines
- **Batch 1 (Tasks 1–3)**: *Programme Detail Page*, *Topic Registration Page*, *Create Candidate Page*  
  🎯 **Deadline**: Friday, Oct 2, 2026, 2:20 PM (Unblocks Munavar)
- **Batch 2 (Tasks 4–6)**: *Candidate Detail Page*, *Create/Edit Programme Page*, *Schedule Design*  
  🎯 **Deadline**: Sunday, Oct 4, 2026, 11:00 PM (Unblocks Hashir)
- **Batch 3 (Tasks 7–8)**: *Data Table Saved View*, *Screen Design*  
  🎯 **Deadline**: Tuesday, Oct 6, 2026, 11:00 PM (Unblocks Salim & Hisham)

---

## 3. Nabhan — Features & Templates

| # | Task | Size | Est. Time | Depends On | Scope Items |
|---|------|------|-----------|------------|-------------|
| 1 | **Works in: Chest Number Auto-Generation** | Small | 2.5 hrs | None | • Chest No Auto generation |
| 2 | **Works in: Team Programme Auto-Selection** | Small | 2.5 hrs | None | • Auto select programmes to make a team first |
| 3 | **Works in: Charts & Data State** | Small | 2 hrs | None | • Show no enough data to show charts |
| 4 | **Works in: Templates Engine & Certificates** | Big | 2 days | None | • Template generation first<br>• Public certificate download option<br>• Height and width linking<br>• After x results variable add |

### Nabhan's Merged Milestone Deadlines
- **Batch 1 (Tasks 1–3)**: *Chest Number Auto-Generation*, *Auto Select Team Programmes*, *Charts Empty State*  
  🎯 **Deadline**: Friday, Oct 2, 2026, 9:00 PM
- **Batch 2 (Task 4)**: *Templates Engine & Certificates*  
  🎯 **Deadline**: Sunday, Oct 4, 2026, 11:00 PM

---

## 4. Hashir — Media, Reports, Topper & Schedule

| # | Task | Size | Est. Time | Depends On | Scope Items |
|---|------|------|-----------|------------|-------------|
| 1 | **Works in: News & Downloads Cards** | Very Small | 15 mins | None | • News, downloads (make default cards) |
| 2 | **Works in: Downloads & Media Library Migration** | Small | 2.5 hrs | None | • Move downloads etc to the website section<br>• Moving Move files to media library |
| 3 | **Works in: Reports Engine** | Medium | 1 day | None | • Model change. Tick option change<br>• In candidate report: also to come the candidate who have no points |
| 4 | **Works in: Topper Placeholder Design Edit** | Small | 2.5 hrs | Salim (Toppers Redesign) | • Topper placeholder design edit<br>• When limit change need to refresh |
| 5 | **Works in: Schedule (to Code)** | Big | 2 days | Salim (Schedule Rethink) & Salman (Schedule Design) | • Add to google calendar<br>• Talks, Session, than programmes<br>• Phase based<br>• Candidate count * Participation count |

### Hashir's Merged Milestone Deadlines
- **Batch 1 (Tasks 1–3)**: *News/Downloads Cards*, *Media Library Migration*, *Reports Engine*  
  🎯 **Deadline**: Friday, Oct 2, 2026, 11:00 PM
- **Batch 2 (Tasks 4–5)**: *Topper Placeholder Design Edit*, *Schedule to Code*  
  🎯 **Deadline**: Tuesday, Oct 6, 2026, 11:00 PM (Wait for Salim & Salman)

---

## 5. Munavar — Quick Fixes, UI Simplification & Layouts

| # | Task | Size | Est. Time | Depends On | Scope Items |
|---|------|------|-----------|------------|-------------|
| 1 | **Works in: Registration UI Simplification** | Small | 2.5 hrs | None | • Registration ui simplification |
| 2 | **Works in: Candidate Cleared Input Save Bug** | Very Small | 15 mins | None | • Edit candidate cleared input not saved |
| 3 | **Works in: Registrations Programme Sort** | Very Small | 15 mins | None | • Registrations program sort based on program not sorted |
| 4 | **Works in: Topic Registration Layout** | Small | 2.5 hrs | Salman (Topic Registration Page) | • Topic registration layout (After Salman design it) |
| 5 | **Works in: Programme Category Filter** | Very Small | 15 mins | None | • Program’s category filtered (it’s base category only) |
| 6 | **Works in: Classification & Collection Terminology** | Small | 2.5 hrs | None | • Key in section and collection change term: classification<br>• Change adding layout. And change term. (Classifications and items) |
| 7 | **Works in: Appeals Requester Metadata** | Very Small | 15 mins | None | • Appeals: add who requested it also |
| 8 | **Works in: Assign Avatar Removal** | Very Small | 15 mins | None | • Assign avatar page remove option |
| 9 | **Works in: Festivals Page 3-Dot Removal** | Very Small | 15 mins | None | • Remove 3 dot from festivals page |
| 10 | **Works in: Results Page Action Menu Cleanup** | Very Small | 15 mins | None | • Remove result in results page: move to more 3 dot |

### Munavar's Merged Milestone Deadlines
- **Batch 1 (Tasks 1–3)**: *Registration UI Simplification*, *Candidate Cleared Input Bug*, *Registrations Programme Sort*  
  🎯 **Deadline**: Thursday, Oct 1, 2026, 9:00 PM
- **Batch 2 (Tasks 4–6)**: *Topic Registration Layout*, *Programme Category Filter*, *Classification & Collection Terminology*  
  🎯 **Deadline**: Friday, Oct 2, 2026, 9:00 PM
- **Batch 3 (Tasks 7–10)**: *Appeals Author*, *Avatar Removal*, *Festivals 3-Dot Cleanup*, *Results Action Menu Cleanup*  
  🎯 **Deadline**: Saturday, Oct 3, 2026, 5:00 PM

---

## 6. Hisham — Auth, Public Views & Enterprise Models

| # | Task | Size | Est. Time | Depends On | Scope Items |
|---|------|------|-----------|------------|-------------|
| 1 | **Works in: Password Reset Button** | Very Small | 15 mins | None | • Forgot Password Button in change password place |
| 2 | **Works in: Public Page Unpublished Result Status** | Very Small | 15 mins | None | • Program not found in public page if result not published |
| 3 | **Works in: Mobile Subfest Navigation** | Very Small | 15 mins | None | • Subfest Navigation to left move in mobile |
| 4 | **Works in: Score Setting Auto-Regeneration** | Small | 2.5 hrs | None | • Make sure score setting change regenerates automatically |
| 5 | **Works in: Result Regeneration Pipeline** | Small | 2.5 hrs | None | • Regenerate result (already generated again bulk and normal) |
| 6 | **Works in: Subscription & Freemium Models** | Very Big | 4 days | None | • Subscription & Freemium Models |
| 7 | **Works in: Screens Engine** | Very Big | 4 days | Salman (Screen Design) | • screens |

### Hisham's Merged Milestone Deadlines
- **Batch 1 (Tasks 1–3)**: *Forgot Password*, *Public Result 404 Fix*, *Mobile Navigation*  
  🎯 **Deadline**: Thursday, Oct 1, 2026, 1:15 PM
- **Batch 2 (Tasks 4–5)**: *Score Setting Auto Regenerate*, *Regenerate Result Bulk/Normal*  
  🎯 **Deadline**: Friday, Oct 2, 2026, 9:00 PM
- **Batch 3 (Task 6)**: *Subscription & Freemium Models*  
  🎯 **Deadline**: Tuesday, Oct 6, 2026, 11:00 PM
- **Batch 4 (Task 7)**: *Screens Engine*  
  🎯 **Deadline**: Saturday, Oct 10, 2026, 11:00 PM

---

## 7. Majid — WhatsApp, API, Cron & Public Security

| # | Task | Size | Est. Time | Depends On | Scope Items |
|---|------|------|-----------|------------|-------------|
| 1 | **Works in: WhatsApp Integration** | Very Big | 4 days | None | • WhatsApp Integration |
| 2 | **Works in: API Isolation** | Big | 2 days | None | • Published results only to come<br>• Notifications should go to the student also |
| 3 | **Works in: Activity Log & Deleted At Fixes** | Medium | 1 day | None | • Activity Log and deleted at fixes |
| 4 | **Works in: Cron Jobs (Templates & Activity Log)** | Medium | 1 day | None | • Cron Jobs in Templates, activity log |
| 5 | **Works in: Web Push Notifications** | Medium | 1 day | None | • Web push notification |
| 6 | **Works in: Public Page Result Layout Left Panel** | Very Small | 15 mins | None | • Public page result layout left panel stuck |
| 7 | **Works in: Public Page Login System** | Big | 2 days | None | • Public page Login system |
| 8 | **Works in: Topper Placeholder Leaderboard Connection** | Medium | 1 day | Salim (Toppers Redesign) & Hashir (Topper Edit) | • Topper placeholder leaderboard connection |

### Majid's Merged Milestone Deadlines
- **Batch 1 (Task 1)**: *WhatsApp Integration*  
  🎯 **Deadline**: Sunday, Oct 4, 2026, 11:00 PM
- **Batch 2 (Tasks 2–3)**: *API Isolation*, *Activity Log & Deleted At Fixes*  
  🎯 **Deadline**: Wednesday, Oct 7, 2026, 11:00 PM
- **Batch 3 (Tasks 4–6)**: *Cron Jobs*, *Web Push Notifications*, *Public Page Left Panel Fix*  
  🎯 **Deadline**: Friday, Oct 9, 2026, 11:00 PM
- **Batch 4 (Tasks 7–8)**: *Public Page Login System*, *Topper Placeholder Leaderboard Connection*  
  🎯 **Deadline**: Monday, Oct 12, 2026, 11:00 PM
