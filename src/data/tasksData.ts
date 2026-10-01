export type TaskSize =
  | "very_small"
  | "small"
  | "medium"
  | "big"
  | "very_big";

export type TaskStatus = "todo" | "in_progress" | "done";

export interface TaskDependency {
  taskId: string;
  title: string;
  assignee: string;
}

export interface Task {
  id: string;
  title: string;
  assignee: string;
  size: TaskSize;
  sizeLabel: string;
  durationLabel: string;
  priority: number;
  batchId: string;
  batchName: string;
  batchDeadline: string;
  scheduledSlot?: string;
  bufferMinutes: number;
  subtasks: string[];
  dependsOn?: TaskDependency[];
  status: TaskStatus;
}

export interface TaskBatch {
  id: string;
  name: string;
  assignee: string;
  taskIds: string[];
  deadline: string;
  description: string;
}

export const TASK_SIZES_INFO: Record<
  TaskSize,
  { label: string; duration: string; color: string; bg: string; border: string }
> = {
  very_small: {
    label: "Very Small",
    duration: "~15 mins",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
  },
  small: {
    label: "Small",
    duration: "~2–3 hours",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
  },
  medium: {
    label: "Medium",
    duration: "1 day",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
  },
  big: {
    label: "Big",
    duration: "2 days",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
  },
  very_big: {
    label: "Very Big",
    duration: "4 days",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
  },
};

export const INITIAL_TASKS: Task[] = [
  // ==========================================
  // SALIM (Ameen) — Planning (Medium = 1 day full)
  // ==========================================
  {
    id: "salim-1",
    title: "Works in: Schedule Rethink",
    assignee: "Salim",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 1,
    batchId: "salim-b1",
    batchName: "Core Architecture Planning",
    batchDeadline: "Sat, Oct 3, 2026 • 11:00 PM",
    scheduledSlot: "Thu, Oct 1 (Full Day)",
    bufferMinutes: 5,
    subtasks: [
      "Event sessions, talks vs programmes",
      "Phase based structure",
      "Candidate count * participation count logic",
    ],
    status: "todo",
  },
  {
    id: "salim-2",
    title: "Works in: Toppers Redesign",
    assignee: "Salim",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 2,
    batchId: "salim-b1",
    batchName: "Core Architecture Planning",
    batchDeadline: "Sat, Oct 3, 2026 • 11:00 PM",
    scheduledSlot: "Fri, Oct 2 (Full Day)",
    bufferMinutes: 5,
    subtasks: [
      "Section as topper (key fix)",
      "Change layout",
      "Topper limit by ranks",
      "Topper limit in the subscription plan rethink",
      "Topper regeneration (needs regeneration label flow fix)",
    ],
    status: "todo",
  },
  {
    id: "salim-3",
    title: "Works in: Curb Rethink",
    assignee: "Salim",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 3,
    batchId: "salim-b1",
    batchName: "Core Architecture Planning",
    batchDeadline: "Sat, Oct 3, 2026 • 11:00 PM",
    scheduledSlot: "Sat, Oct 3 (Full Day)",
    bufferMinutes: 5,
    subtasks: ["Sectioning curbs"],
    status: "todo",
  },
  {
    id: "salim-4",
    title: "Works in: Candidate & Subfest Candidate Override",
    assignee: "Salim",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 4,
    batchId: "salim-b2",
    batchName: "Data Model & Category Logic",
    batchDeadline: "Tue, Oct 6, 2026 • 11:00 PM",
    scheduledSlot: "Sun, Oct 4 (Full Day)",
    bufferMinutes: 5,
    subtasks: ["Candidate and subfest candidate override rethink"],
    status: "todo",
  },
  {
    id: "salim-5",
    title: "Works in: Grade & Points Defaults",
    assignee: "Salim",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 5,
    batchId: "salim-b2",
    batchName: "Data Model & Category Logic",
    batchDeadline: "Tue, Oct 6, 2026 • 11:00 PM",
    scheduledSlot: "Mon, Oct 5 (Full Day)",
    bufferMinutes: 5,
    subtasks: [
      "Default will be separate for individual and group",
    ],
    status: "todo",
  },
  {
    id: "salim-6",
    title: "Works in: Category Common",
    assignee: "Salim",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 6,
    batchId: "salim-b2",
    batchName: "Data Model & Category Logic",
    batchDeadline: "Tue, Oct 6, 2026 • 11:00 PM",
    scheduledSlot: "Tue, Oct 6 (Full Day)",
    bufferMinutes: 5,
    subtasks: ["Unified category common logic"],
    status: "todo",
  },
  {
    id: "salim-7",
    title: "Works in: Customer Data Requirements",
    assignee: "Salim",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 7,
    batchId: "salim-b3",
    batchName: "Client Polish & Implementation",
    batchDeadline: "Fri, Oct 9, 2026 • 11:00 PM",
    scheduledSlot: "Wed, Oct 7 (Full Day)",
    bufferMinutes: 5,
    subtasks: ["Data to ask with customer"],
    status: "todo",
  },
  {
    id: "salim-8",
    title: "Works in: Filter Pills & UI Blinking Fix",
    assignee: "Salim",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 8,
    batchId: "salim-b3",
    batchName: "Client Polish & Implementation",
    batchDeadline: "Fri, Oct 9, 2026 • 11:00 PM",
    scheduledSlot: "Thu, Oct 8 (Full Day)",
    bufferMinutes: 5,
    subtasks: ["Filters pill blinking everywhere"],
    status: "todo",
  },
  {
    id: "salim-9",
    title: "Works in: Data Table Redesign Coding",
    assignee: "Salim",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 9,
    batchId: "salim-b3",
    batchName: "Client Polish & Implementation",
    batchDeadline: "Fri, Oct 9, 2026 • 11:00 PM",
    scheduledSlot: "Fri, Oct 9 (Full Day)",
    bufferMinutes: 5,
    subtasks: ["Data table redesign coding (after Salman do it)"],
    dependsOn: [
      {
        taskId: "salman-7",
        title: "Works in: Data Table (Saved View Fix)",
        assignee: "Salman",
      },
    ],
    status: "todo",
  },

  // ==========================================
  // SALMAN — Design
  // ==========================================
  {
    id: "salman-1",
    title: "Works in: Programme Detail Page",
    assignee: "Salman",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2.5 hrs",
    priority: 1,
    batchId: "salman-b1",
    batchName: "Registration & Candidate Pages",
    batchDeadline: "Fri, Oct 2, 2026 • 2:20 PM",
    scheduledSlot: "Thu, Oct 1 • 13:15–14:20 & 16:00–17:00",
    bufferMinutes: 5,
    subtasks: ["Programme detail page"],
    status: "todo",
  },
  {
    id: "salman-2",
    title: "Works in: Topic Registration Page",
    assignee: "Salman",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2.5 hrs",
    priority: 2,
    batchId: "salman-b1",
    batchName: "Registration & Candidate Pages",
    batchDeadline: "Fri, Oct 2, 2026 • 2:20 PM",
    scheduledSlot: "Thu, Oct 1 • 18:00–20:30",
    bufferMinutes: 5,
    subtasks: ["Topic registration page", "No topic added etc designs"],
    status: "todo",
  },
  {
    id: "salman-3",
    title: "Works in: Create Candidate Page",
    assignee: "Salman",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2.5 hrs",
    priority: 3,
    batchId: "salman-b1",
    batchName: "Registration & Candidate Pages",
    batchDeadline: "Fri, Oct 2, 2026 • 2:20 PM",
    scheduledSlot: "Fri, Oct 2 • 07:35–08:25 & 13:15–14:20",
    bufferMinutes: 5,
    subtasks: ["Create candidate page"],
    status: "todo",
  },
  {
    id: "salman-4",
    title: "Works in: Candidate Detail Page",
    assignee: "Salman",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2.5 hrs",
    priority: 4,
    batchId: "salman-b2",
    batchName: "Programmes & Schedule Design",
    batchDeadline: "Sun, Oct 4, 2026 • 11:00 PM",
    scheduledSlot: "Fri, Oct 2 • 16:00–17:00 & 18:00–19:30",
    bufferMinutes: 5,
    subtasks: ["Candidate detail page"],
    status: "todo",
  },
  {
    id: "salman-5",
    title: "Works in: Create/Edit Programme Page",
    assignee: "Salman",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 5,
    batchId: "salman-b2",
    batchName: "Programmes & Schedule Design",
    batchDeadline: "Sun, Oct 4, 2026 • 11:00 PM",
    scheduledSlot: "Sat, Oct 3 (Full Day)",
    bufferMinutes: 5,
    subtasks: [
      "Move concept not after name",
      "Basic details only when adding",
      "Phase based schedule",
    ],
    status: "todo",
  },
  {
    id: "salman-6",
    title: "Works in: Schedule Design",
    assignee: "Salman",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 6,
    batchId: "salman-b2",
    batchName: "Programmes & Schedule Design",
    batchDeadline: "Sun, Oct 4, 2026 • 11:00 PM",
    scheduledSlot: "Sun, Oct 4 (Full Day)",
    bufferMinutes: 5,
    subtasks: [
      "Schedule design",
      "Talks, session, then programmes visualization",
    ],
    dependsOn: [
      {
        taskId: "salim-1",
        title: "Works in: Schedule Rethink",
        assignee: "Salim",
      },
    ],
    status: "todo",
  },
  {
    id: "salman-7",
    title: "Works in: Data Table (Saved View Fix)",
    assignee: "Salman",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 7,
    batchId: "salman-b3",
    batchName: "Data Views & Broadcast Screens",
    batchDeadline: "Tue, Oct 6, 2026 • 11:00 PM",
    scheduledSlot: "Mon, Oct 5 (Full Day)",
    bufferMinutes: 5,
    subtasks: ["Data table (Saved view confusion fix)"],
    status: "todo",
  },
  {
    id: "salman-8",
    title: "Works in: Screen Design",
    assignee: "Salman",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 8,
    batchId: "salman-b3",
    batchName: "Data Views & Broadcast Screens",
    batchDeadline: "Tue, Oct 6, 2026 • 11:00 PM",
    scheduledSlot: "Tue, Oct 6 (Full Day)",
    bufferMinutes: 5,
    subtasks: ["screen"],
    status: "todo",
  },

  // ==========================================
  // NABHAN — Features & Templates (Updated Order)
  // 1. Chest No Auto generation (small)
  // 2. Auto select programmes to make a team first (small)
  // 3. Charts (small)
  // 4. Templates (big)
  // ==========================================
  {
    id: "nabhan-1",
    title: "Works in: Chest Number Auto-Generation",
    assignee: "Nabhan",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2.5 hrs",
    priority: 1,
    batchId: "nabhan-b1",
    batchName: "Chest Numbers & Team Selection",
    batchDeadline: "Fri, Oct 2, 2026 • 9:00 PM",
    scheduledSlot: "Thu, Oct 1 • 13:15–14:20 & 16:00–17:25",
    bufferMinutes: 5,
    subtasks: ["Chest No Auto generation"],
    status: "todo",
  },
  {
    id: "nabhan-2",
    title: "Works in: Team Programme Auto-Selection",
    assignee: "Nabhan",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2.5 hrs",
    priority: 2,
    batchId: "nabhan-b1",
    batchName: "Chest Numbers & Team Selection",
    batchDeadline: "Fri, Oct 2, 2026 • 9:00 PM",
    scheduledSlot: "Thu, Oct 1 • 18:00–20:30",
    bufferMinutes: 5,
    subtasks: ["Auto select programmes to make a team first"],
    status: "todo",
  },
  {
    id: "nabhan-3",
    title: "Works in: Charts & Data State",
    assignee: "Nabhan",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2 hrs",
    priority: 3,
    batchId: "nabhan-b1",
    batchName: "Chest Numbers & Team Selection",
    batchDeadline: "Fri, Oct 2, 2026 • 9:00 PM",
    scheduledSlot: "Fri, Oct 2 • 13:15–14:20 & 16:00–16:55",
    bufferMinutes: 5,
    subtasks: ["Show no enough data to show charts"],
    status: "todo",
  },
  {
    id: "nabhan-4",
    title: "Works in: Templates Engine & Certificates",
    assignee: "Nabhan",
    size: "big",
    sizeLabel: "Big",
    durationLabel: "2 days",
    priority: 4,
    batchId: "nabhan-b2",
    batchName: "Certificate & Template Engine",
    batchDeadline: "Sun, Oct 4, 2026 • 11:00 PM",
    scheduledSlot: "Sat, Oct 3 & Sun, Oct 4 (2 Full Days)",
    bufferMinutes: 5,
    subtasks: [
      "Template generation first",
      "Public certificate download option",
      "Height and width linking",
      "After x results variable add",
    ],
    status: "todo",
  },

  // ==========================================
  // HASHIR — Media, Reports, Topper & Schedule (Updated Order)
  // 1. News, downloads (make default cards) (very small)
  // 2. Move downloads etc to the website section & media library (small)
  // 3. Reports (medium)
  // 4. Topper placeholder design edit (small)
  // 5. Schedule (to code) (big)
  // ==========================================
  {
    id: "hashir-1",
    title: "Works in: News & Downloads Cards",
    assignee: "Hashir",
    size: "very_small",
    sizeLabel: "Very Small",
    durationLabel: "15 mins",
    priority: 1,
    batchId: "hashir-b1",
    batchName: "Media, Downloads & Reports",
    batchDeadline: "Fri, Oct 2, 2026 • 11:00 PM",
    scheduledSlot: "Thu, Oct 1 • 13:15–13:30",
    bufferMinutes: 5,
    subtasks: ["News, downloads (make default cards)"],
    status: "todo",
  },
  {
    id: "hashir-2",
    title: "Works in: Downloads & Media Library Migration",
    assignee: "Hashir",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2.5 hrs",
    priority: 2,
    batchId: "hashir-b1",
    batchName: "Media, Downloads & Reports",
    batchDeadline: "Fri, Oct 2, 2026 • 11:00 PM",
    scheduledSlot: "Thu, Oct 1 • 13:35–14:20 & 16:00–17:45",
    bufferMinutes: 5,
    subtasks: [
      "Move downloads etc to the website section",
      "Moving Move files to media library",
    ],
    status: "todo",
  },
  {
    id: "hashir-3",
    title: "Works in: Reports Engine",
    assignee: "Hashir",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 3,
    batchId: "hashir-b1",
    batchName: "Media, Downloads & Reports",
    batchDeadline: "Fri, Oct 2, 2026 • 11:00 PM",
    scheduledSlot: "Fri, Oct 2 (Full Day)",
    bufferMinutes: 5,
    subtasks: [
      "Model change. Tick option change",
      "In candidate report: also to come the candidate who have no points",
    ],
    status: "todo",
  },
  {
    id: "hashir-4",
    title: "Works in: Topper Placeholder Design Edit",
    assignee: "Hashir",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2.5 hrs",
    priority: 4,
    batchId: "hashir-b2",
    batchName: "Topper & Live Schedule",
    batchDeadline: "Tue, Oct 6, 2026 • 11:00 PM",
    scheduledSlot: "Sat, Oct 3 • 13:15–14:20 & 16:00–17:25",
    bufferMinutes: 5,
    subtasks: [
      "Topper placeholder design edit (dependent on Salim’s topper planning)",
      "When limit change need to refresh",
    ],
    dependsOn: [
      {
        taskId: "salim-2",
        title: "Works in: Toppers Redesign",
        assignee: "Salim",
      },
    ],
    status: "todo",
  },
  {
    id: "hashir-5",
    title: "Works in: Schedule (to Code)",
    assignee: "Hashir",
    size: "big",
    sizeLabel: "Big",
    durationLabel: "2 days",
    priority: 5,
    batchId: "hashir-b2",
    batchName: "Topper & Live Schedule",
    batchDeadline: "Tue, Oct 6, 2026 • 11:00 PM",
    scheduledSlot: "Sun, Oct 4 & Mon, Oct 5 (2 Full Days)",
    bufferMinutes: 5,
    subtasks: [
      "Add to google calendar",
      "Talks, Session, than programmes",
      "Phase based",
      "Candidate count * Participation count",
    ],
    dependsOn: [
      {
        taskId: "salim-1",
        title: "Works in: Schedule Rethink",
        assignee: "Salim",
      },
      {
        taskId: "salman-6",
        title: "Works in: Schedule Design",
        assignee: "Salman",
      },
    ],
    status: "todo",
  },

  // ==========================================
  // MUNAVAR — Quick Fixes, UI Simplification & Layouts (Updated Order)
  // 1. Registration ui simplification (small)
  // 2. Edit candidate cleared input not saved (very small)
  // 3. Registrations program sort based on program not sorted (very small)
  // 4. Topic registration layout (small)
  // 5. Program’s category filtered (very small)
  // 6. Key in section and collection change term: classification (small)
  // 7. Appeals: add who requested it also (very small)
  // 8. Assign avatar page remove option (very small)
  // 9. Remove 3 dot from festivals page (very small)
  // 10. Remove result in results page: move to more 3 dot (very small)
  // ==========================================
  {
    id: "munavar-1",
    title: "Works in: Registration UI Simplification",
    assignee: "Munavar",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2.5 hrs",
    priority: 1,
    batchId: "munavar-b1",
    batchName: "Registration & Core Form Fixes",
    batchDeadline: "Thu, Oct 1, 2026 • 9:00 PM",
    scheduledSlot: "Thu, Oct 1 • 13:15–14:20 & 16:00–17:25",
    bufferMinutes: 5,
    subtasks: ["Registration ui simplification"],
    status: "todo",
  },
  {
    id: "munavar-2",
    title: "Works in: Candidate Cleared Input Save Bug",
    assignee: "Munavar",
    size: "very_small",
    sizeLabel: "Very Small",
    durationLabel: "15 mins",
    priority: 2,
    batchId: "munavar-b1",
    batchName: "Registration & Core Form Fixes",
    batchDeadline: "Thu, Oct 1, 2026 • 9:00 PM",
    scheduledSlot: "Thu, Oct 1 • 17:30–17:45",
    bufferMinutes: 5,
    subtasks: ["Edit candidate cleared input not saved"],
    status: "todo",
  },
  {
    id: "munavar-3",
    title: "Works in: Registrations Programme Sort",
    assignee: "Munavar",
    size: "very_small",
    sizeLabel: "Very Small",
    durationLabel: "15 mins",
    priority: 3,
    batchId: "munavar-b1",
    batchName: "Registration & Core Form Fixes",
    batchDeadline: "Thu, Oct 1, 2026 • 9:00 PM",
    scheduledSlot: "Thu, Oct 1 • 17:50–18:05",
    bufferMinutes: 5,
    subtasks: ["Registrations program sort based on program not sorted"],
    status: "todo",
  },
  {
    id: "munavar-4",
    title: "Works in: Topic Registration Layout",
    assignee: "Munavar",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2.5 hrs",
    priority: 4,
    batchId: "munavar-b2",
    batchName: "Topic Layout & Classifications",
    batchDeadline: "Fri, Oct 2, 2026 • 9:00 PM",
    scheduledSlot: "Fri, Oct 2 • 13:15–14:20 & 16:00–17:25",
    bufferMinutes: 5,
    subtasks: ["Topic registration layout (After Salman design it)"],
    dependsOn: [
      {
        taskId: "salman-2",
        title: "Works in: Topic Registration Page",
        assignee: "Salman",
      },
    ],
    status: "todo",
  },
  {
    id: "munavar-5",
    title: "Works in: Programme Category Filter",
    assignee: "Munavar",
    size: "very_small",
    sizeLabel: "Very Small",
    durationLabel: "15 mins",
    priority: 5,
    batchId: "munavar-b2",
    batchName: "Topic Layout & Classifications",
    batchDeadline: "Fri, Oct 2, 2026 • 9:00 PM",
    scheduledSlot: "Fri, Oct 2 • 17:30–17:45",
    bufferMinutes: 5,
    subtasks: ["Program’s category filtered (it’s base category only)"],
    status: "todo",
  },
  {
    id: "munavar-6",
    title: "Works in: Classification & Collection Terminology",
    assignee: "Munavar",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2.5 hrs",
    priority: 6,
    batchId: "munavar-b2",
    batchName: "Topic Layout & Classifications",
    batchDeadline: "Fri, Oct 2, 2026 • 9:00 PM",
    scheduledSlot: "Fri, Oct 2 • 18:00–20:30",
    bufferMinutes: 5,
    subtasks: [
      "Key in section and collection change term: classification",
      "Change adding layout. And change term. (Classifications and items)",
    ],
    status: "todo",
  },
  {
    id: "munavar-7",
    title: "Works in: Appeals Requester Metadata",
    assignee: "Munavar",
    size: "very_small",
    sizeLabel: "Very Small",
    durationLabel: "15 mins",
    priority: 7,
    batchId: "munavar-b3",
    batchName: "Appeals, Avatars & UI Cleanups",
    batchDeadline: "Sat, Oct 3, 2026 • 5:00 PM",
    scheduledSlot: "Sat, Oct 3 • 13:15–13:30",
    bufferMinutes: 5,
    subtasks: ["Appeals: add who requested it also"],
    status: "todo",
  },
  {
    id: "munavar-8",
    title: "Works in: Assign Avatar Removal",
    assignee: "Munavar",
    size: "very_small",
    sizeLabel: "Very Small",
    durationLabel: "15 mins",
    priority: 8,
    batchId: "munavar-b3",
    batchName: "Appeals, Avatars & UI Cleanups",
    batchDeadline: "Sat, Oct 3, 2026 • 5:00 PM",
    scheduledSlot: "Sat, Oct 3 • 13:35–13:50",
    bufferMinutes: 5,
    subtasks: ["Assign avatar page remove option"],
    status: "todo",
  },
  {
    id: "munavar-9",
    title: "Works in: Festivals Page 3-Dot Removal",
    assignee: "Munavar",
    size: "very_small",
    sizeLabel: "Very Small",
    durationLabel: "15 mins",
    priority: 9,
    batchId: "munavar-b3",
    batchName: "Appeals, Avatars & UI Cleanups",
    batchDeadline: "Sat, Oct 3, 2026 • 5:00 PM",
    scheduledSlot: "Sat, Oct 3 • 13:55–14:10",
    bufferMinutes: 5,
    subtasks: ["Remove 3 dot from festivals page"],
    status: "todo",
  },
  {
    id: "munavar-10",
    title: "Works in: Results Page Action Menu Cleanup",
    assignee: "Munavar",
    size: "very_small",
    sizeLabel: "Very Small",
    durationLabel: "15 mins",
    priority: 10,
    batchId: "munavar-b3",
    batchName: "Appeals, Avatars & UI Cleanups",
    batchDeadline: "Sat, Oct 3, 2026 • 5:00 PM",
    scheduledSlot: "Sat, Oct 3 • 14:15–14:30",
    bufferMinutes: 5,
    subtasks: ["Remove result in results page: move to more 3 dot"],
    status: "todo",
  },

  // ==========================================
  // HISHAM — Security, Results & Core Models
  // 1. Forgot Password Button in change password place (very small)
  // 2. Program not found in public page if result not published (very small)
  // 3. Subfest Navigation to left move in mobile (very small)
  // 4. Make sure score setting change regenerates automatically (small)
  // 5. Regenerate result (already generated again bulk and normal) (small)
  // 6. Subscription & Freemium Models (very big)
  // 7. screens (very big)
  // ==========================================
  {
    id: "hisham-1",
    title: "Works in: Password Reset Button",
    assignee: "Hisham",
    size: "very_small",
    sizeLabel: "Very Small",
    durationLabel: "15 mins",
    priority: 1,
    batchId: "hisham-b1",
    batchName: "Quick Account & Navigation Fixes",
    batchDeadline: "Thu, Oct 1, 2026 • 1:15 PM",
    scheduledSlot: "Thu, Oct 1 • 07:35–07:50",
    bufferMinutes: 5,
    subtasks: ["Forgot Password Button in change password place"],
    status: "todo",
  },
  {
    id: "hisham-2",
    title: "Works in: Public Page Unpublished Result Status",
    assignee: "Hisham",
    size: "very_small",
    sizeLabel: "Very Small",
    durationLabel: "15 mins",
    priority: 2,
    batchId: "hisham-b1",
    batchName: "Quick Account & Navigation Fixes",
    batchDeadline: "Thu, Oct 1, 2026 • 1:15 PM",
    scheduledSlot: "Thu, Oct 1 • 07:55–08:10",
    bufferMinutes: 5,
    subtasks: ["Program not found in public page if result not published"],
    status: "todo",
  },
  {
    id: "hisham-3",
    title: "Works in: Mobile Subfest Navigation",
    assignee: "Hisham",
    size: "very_small",
    sizeLabel: "Very Small",
    durationLabel: "15 mins",
    priority: 3,
    batchId: "hisham-b1",
    batchName: "Quick Account & Navigation Fixes",
    batchDeadline: "Thu, Oct 1, 2026 • 1:15 PM",
    scheduledSlot: "Thu, Oct 1 • 08:15–08:30",
    bufferMinutes: 5,
    subtasks: ["Subfest Navigation to left move in mobile"],
    status: "todo",
  },
  {
    id: "hisham-4",
    title: "Works in: Score Setting Auto-Regeneration",
    assignee: "Hisham",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2.5 hrs",
    priority: 4,
    batchId: "hisham-b2",
    batchName: "Result Regeneration Engine",
    batchDeadline: "Fri, Oct 2, 2026 • 9:00 PM",
    scheduledSlot: "Thu, Oct 1 • 13:15–14:20 & 16:00–17:25",
    bufferMinutes: 5,
    subtasks: ["Make sure score setting change regenerates automatically"],
    status: "todo",
  },
  {
    id: "hisham-5",
    title: "Works in: Result Regeneration Pipeline",
    assignee: "Hisham",
    size: "small",
    sizeLabel: "Small",
    durationLabel: "2.5 hrs",
    priority: 5,
    batchId: "hisham-b2",
    batchName: "Result Regeneration Engine",
    batchDeadline: "Fri, Oct 2, 2026 • 9:00 PM",
    scheduledSlot: "Fri, Oct 2 • 13:15–14:20 & 16:00–17:25",
    bufferMinutes: 5,
    subtasks: ["Regenerate result (already generated again bulk and normal)"],
    status: "todo",
  },
  {
    id: "hisham-6",
    title: "Works in: Subscription & Freemium Models",
    assignee: "Hisham",
    size: "very_big",
    sizeLabel: "Very Big",
    durationLabel: "4 days",
    priority: 6,
    batchId: "hisham-b3",
    batchName: "SaaS Freemium Engine",
    batchDeadline: "Tue, Oct 6, 2026 • 11:00 PM",
    scheduledSlot: "Sat, Oct 3 to Tue, Oct 6 (4 Full Days)",
    bufferMinutes: 5,
    subtasks: ["Subscription & Freemium Models"],
    status: "todo",
  },
  {
    id: "hisham-7",
    title: "Works in: Screens Engine",
    assignee: "Hisham",
    size: "very_big",
    sizeLabel: "Very Big",
    durationLabel: "4 days",
    priority: 7,
    batchId: "hisham-b4",
    batchName: "Broadcast Screens Infrastructure",
    batchDeadline: "Sat, Oct 10, 2026 • 11:00 PM",
    scheduledSlot: "Wed, Oct 7 to Sat, Oct 10 (4 Full Days)",
    bufferMinutes: 5,
    subtasks: ["screens"],
    dependsOn: [
      {
        taskId: "salman-8",
        title: "Works in: Screen Design",
        assignee: "Salman",
      },
    ],
    status: "todo",
  },

  // ==========================================
  // MAJID — WhatsApp, API, Cron & Auth (Updated Order)
  // 1. WhatsApp Integration (very big)
  // 2. API Isolation (big)
  // 3. Activity Log and deleted at fixes (medium)
  // 4. Cron Jobs in Templates, activity log (medium)
  // 5. Web push notification (medium)
  // 6. Public page result layout left panel stuck (very small)
  // 7. Public page Login system (big)
  // 8. Topper placeholder leaderboard connection (medium)
  // ==========================================
  {
    id: "majid-1",
    title: "Works in: WhatsApp Integration",
    assignee: "Majid",
    size: "very_big",
    sizeLabel: "Very Big",
    durationLabel: "4 days",
    priority: 1,
    batchId: "majid-b1",
    batchName: "WhatsApp Enterprise Pipeline",
    batchDeadline: "Sun, Oct 4, 2026 • 11:00 PM",
    scheduledSlot: "Thu, Oct 1 to Sun, Oct 4 (4 Full Days)",
    bufferMinutes: 5,
    subtasks: ["WhatsApp Integration"],
    status: "todo",
  },
  {
    id: "majid-2",
    title: "Works in: API Isolation",
    assignee: "Majid",
    size: "big",
    sizeLabel: "Big",
    durationLabel: "2 days",
    priority: 2,
    batchId: "majid-b2",
    batchName: "API Security & Activity Log",
    batchDeadline: "Wed, Oct 7, 2026 • 11:00 PM",
    scheduledSlot: "Mon, Oct 5 & Tue, Oct 6 (2 Full Days)",
    bufferMinutes: 5,
    subtasks: [
      "Published results only to come",
      "Notifications should go to the student also",
    ],
    status: "todo",
  },
  {
    id: "majid-3",
    title: "Works in: Activity Log & Deleted At Fixes",
    assignee: "Majid",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 3,
    batchId: "majid-b2",
    batchName: "API Security & Activity Log",
    batchDeadline: "Wed, Oct 7, 2026 • 11:00 PM",
    scheduledSlot: "Wed, Oct 7 (Full Day)",
    bufferMinutes: 5,
    subtasks: ["Activity Log and deleted at fixes"],
    status: "todo",
  },
  {
    id: "majid-4",
    title: "Works in: Cron Jobs (Templates & Activity Log)",
    assignee: "Majid",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 4,
    batchId: "majid-b3",
    batchName: "Cron, Push & Layout Fixes",
    batchDeadline: "Fri, Oct 9, 2026 • 11:00 PM",
    scheduledSlot: "Thu, Oct 8 (Full Day)",
    bufferMinutes: 5,
    subtasks: ["Cron Jobs in Templates, activity log"],
    status: "todo",
  },
  {
    id: "majid-5",
    title: "Works in: Web Push Notifications",
    assignee: "Majid",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 5,
    batchId: "majid-b3",
    batchName: "Cron, Push & Layout Fixes",
    batchDeadline: "Fri, Oct 9, 2026 • 11:00 PM",
    scheduledSlot: "Fri, Oct 9 (Full Day)",
    bufferMinutes: 5,
    subtasks: ["Web push notification"],
    status: "todo",
  },
  {
    id: "majid-6",
    title: "Works in: Public Page Result Layout Left Panel",
    assignee: "Majid",
    size: "very_small",
    sizeLabel: "Very Small",
    durationLabel: "15 mins",
    priority: 6,
    batchId: "majid-b3",
    batchName: "Cron, Push & Layout Fixes",
    batchDeadline: "Fri, Oct 9, 2026 • 11:00 PM",
    scheduledSlot: "Fri, Oct 9 • 13:15–13:30",
    bufferMinutes: 5,
    subtasks: ["Public page result layout left panel stuck"],
    status: "todo",
  },
  {
    id: "majid-7",
    title: "Works in: Public Page Login System",
    assignee: "Majid",
    size: "big",
    sizeLabel: "Big",
    durationLabel: "2 days",
    priority: 7,
    batchId: "majid-b4",
    batchName: "Public Login & Leaderboard",
    batchDeadline: "Mon, Oct 12, 2026 • 11:00 PM",
    scheduledSlot: "Sat, Oct 10 & Sun, Oct 11 (2 Full Days)",
    bufferMinutes: 5,
    subtasks: ["Public page Login system"],
    status: "todo",
  },
  {
    id: "majid-8",
    title: "Works in: Topper Placeholder Leaderboard Connection",
    assignee: "Majid",
    size: "medium",
    sizeLabel: "Medium",
    durationLabel: "1 day",
    priority: 8,
    batchId: "majid-b4",
    batchName: "Public Login & Leaderboard",
    batchDeadline: "Mon, Oct 12, 2026 • 11:00 PM",
    scheduledSlot: "Mon, Oct 12 (Full Day)",
    bufferMinutes: 5,
    subtasks: ["Topper placeholder leaderboard connection"],
    dependsOn: [
      {
        taskId: "salim-2",
        title: "Works in: Toppers Redesign",
        assignee: "Salim",
      },
      {
        taskId: "hashir-4",
        title: "Works in: Topper Placeholder Design Edit",
        assignee: "Hashir",
      },
    ],
    status: "todo",
  },
];

export const TEAM_MEMBERS = [
  { name: "Salim", role: "Planning & Architecture", avatarColor: "from-blue-500 to-indigo-600" },
  { name: "Salman", role: "UI/UX Design", avatarColor: "from-purple-500 to-pink-600" },
  { name: "Nabhan", role: "Chest Nos & Templates", avatarColor: "from-teal-400 to-emerald-600" },
  { name: "Hashir", role: "Media, Reports & Schedule", avatarColor: "from-amber-400 to-orange-600" },
  { name: "Munavar", role: "Registration, UI & Cleanups", avatarColor: "from-sky-400 to-blue-600" },
  { name: "Hisham", role: "Security & Subscriptions", avatarColor: "from-red-400 to-rose-600" },
  { name: "Majid", role: "WhatsApp, API & Auth", avatarColor: "from-violet-400 to-fuchsia-600" },
];

const LOCAL_STORAGE_KEY = "timetable_tasks_state_v1";

export function loadSavedTasks(): Task[] {
  if (typeof window === "undefined") return INITIAL_TASKS;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return INITIAL_TASKS;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return INITIAL_TASKS;

    // Merge saved status into initial tasks
    const statusMap = new Map<string, TaskStatus>();
    parsed.forEach((t: { id: string; status: TaskStatus }) => {
      if (t.id && t.status) statusMap.set(t.id, t.status);
    });

    return INITIAL_TASKS.map((task) => ({
      ...task,
      status: statusMap.get(task.id) || task.status,
    }));
  } catch {
    return INITIAL_TASKS;
  }
}

export function saveTasks(tasks: Task[]): void {
  if (typeof window === "undefined") return;
  try {
    const payload = tasks.map((t) => ({ id: t.id, status: t.status }));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.error("Failed to save tasks", e);
  }
}
