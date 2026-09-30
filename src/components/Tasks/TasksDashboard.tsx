import { useState, useMemo } from "react";
import {
  Filter,
  Search,
  Users,
  LayoutGrid,
  ListTodo,
  CalendarRange,
  RotateCcw,
  Sparkles,
  Download,
  Upload,
  CheckCircle2,
} from "lucide-react";
import {
  loadSavedTasks,
  saveTasks,
  TEAM_MEMBERS,
} from "../../data/tasksData";
import type { Task, TaskStatus } from "../../data/tasksData";
import TaskTimeline from "./TaskTimeline";
import TaskKanban from "./TaskKanban";
import TaskList from "./TaskList";

type ViewTab = "timeline" | "kanban" | "list";

export default function TasksDashboard() {
  const [tasks, setTasks] = useState<Task[]>(loadSavedTasks);
  const [activeTab, setActiveTab] = useState<ViewTab>("timeline");
  const [selectedPerson, setSelectedPerson] = useState<string>("all");
  const [selectedSize, setSelectedSize] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Persist state changes
  const handleUpdateStatus = (taskId: string, newStatus: TaskStatus) => {
    const updated = tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t));
    setTasks(updated);
    saveTasks(updated);
  };

  const handleToggleStatus = (taskId: string) => {
    const target = tasks.find((t) => t.id === taskId);
    if (!target) return;
    const nextStatus: TaskStatus =
      target.status === "todo"
        ? "in_progress"
        : target.status === "in_progress"
        ? "done"
        : "todo";
    handleUpdateStatus(taskId, nextStatus);
  };

  const handleResetTasks = () => {
    if (confirm("Reset all task statuses to default?")) {
      localStorage.removeItem("timetable_tasks_state_v1");
      const reloaded = loadSavedTasks();
      setTasks(reloaded);
    }
  };

  const handleExportTasks = () => {
    const payload = tasks.map((t) => ({
      id: t.id,
      title: t.title,
      assignee: t.assignee,
      status: t.status,
    }));
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `sibaq-tasks-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportTasks = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed)) {
          const statusMap = new Map<string, TaskStatus>();
          parsed.forEach((item: { id: string; status: TaskStatus }) => {
            if (item.id && item.status) statusMap.set(item.id, item.status);
          });
          const updated = tasks.map((t) => ({
            ...t,
            status: statusMap.get(t.id) || t.status,
          }));
          setTasks(updated);
          saveTasks(updated);
          alert("Progress loaded successfully!");
        }
      } catch (err) {
        alert("Invalid JSON backup file: " + err);
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  // Filter tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (selectedPerson !== "all" && task.assignee !== selectedPerson) {
        return false;
      }
      if (selectedSize !== "all" && task.size !== selectedSize) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesTitle = task.title.toLowerCase().includes(q);
        const matchesSubtask = task.subtasks.some((s) => s.toLowerCase().includes(q));
        const matchesAssignee = task.assignee.toLowerCase().includes(q);
        const matchesBatch = task.batchName.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSubtask && !matchesAssignee && !matchesBatch) {
          return false;
        }
      }
      return true;
    });
  }, [tasks, selectedPerson, selectedSize, searchQuery]);

  // Overall Statistics
  const totalCount = tasks.length;
  const doneCount = tasks.filter((t) => t.status === "done").length;
  const inProgressCount = tasks.filter((t) => t.status === "in_progress").length;
  const todoCount = tasks.filter((t) => t.status === "todo").length;
  const percentComplete = Math.round((doneCount / (totalCount || 1)) * 100);

  return (
    <div className="space-y-6">
      {/* Top Banner & Overall Progress */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-900/40 via-indigo-950/40 to-purple-950/40 border border-white/10 p-5 sm:p-6 backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
                <Sparkles className="h-3 w-3" />
                Team Sprint Roadmap
              </span>
              <span className="text-xs text-gray-400">Oct 1 – Oct 13, 2026</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Tasks & Milestones Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl">
              Coordinated workflow: Salim plans $\rightarrow$ Salman designs $\rightarrow$ Devs code.
              Scheduled into available timetable slots with 5-minute buffers and merged milestone deadlines.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>Auto-saved</span>
            </div>

            <button
              onClick={handleExportTasks}
              className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-xl transition-all cursor-pointer"
              title="Download backup file of your progress"
            >
              <Download className="h-3.5 w-3.5 text-cyan-400" />
              <span>Export</span>
            </button>

            <label
              className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-xl transition-all cursor-pointer"
              title="Import progress from a JSON backup file"
            >
              <Upload className="h-3.5 w-3.5 text-indigo-400" />
              <span>Import</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImportTasks}
                className="hidden"
              />
            </label>

            <button
              onClick={handleResetTasks}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-xl transition-all cursor-pointer"
              title="Reset task statuses"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Progress Bar & Stat Chips */}
        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-300">
            <span className="font-semibold">Sprint Completion: {percentComplete}%</span>
            <span>
              {doneCount} of {totalCount} tasks completed
            </span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-black/40 border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 transition-all duration-500 rounded-full"
              style={{ width: `${percentComplete}%` }}
            />
          </div>
        </div>

        {/* Stat Cards */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
            <div className="text-xs text-gray-400">Total Tasks</div>
            <div className="text-xl font-bold text-white">{totalCount}</div>
          </div>
          <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-3">
            <div className="text-xs text-amber-300">In Progress</div>
            <div className="text-xl font-bold text-amber-300">{inProgressCount}</div>
          </div>
          <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-3">
            <div className="text-xs text-emerald-300">Completed</div>
            <div className="text-xl font-bold text-emerald-300">{doneCount}</div>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
            <div className="text-xs text-gray-400">Remaining To Do</div>
            <div className="text-xl font-bold text-gray-200">{todoCount}</div>
          </div>
        </div>
      </div>

      {/* Person Filter Pills */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-gray-400 font-semibold uppercase tracking-wider px-1">
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-cyan-400" />
            Filter by Assignee
          </span>
          {selectedPerson !== "all" && (
            <button
              onClick={() => setSelectedPerson("all")}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              Show All Members
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button
            onClick={() => setSelectedPerson("all")}
            className={`px-3.5 py-1.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              selectedPerson === "all"
                ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10"
            }`}
          >
            All Members ({tasks.length})
          </button>

          {TEAM_MEMBERS.map((member) => {
            const memberTasks = tasks.filter((t) => t.assignee === member.name);
            const memberDone = memberTasks.filter((t) => t.status === "done").length;
            const isSelected = selectedPerson === member.name;

            return (
              <button
                key={member.name}
                onClick={() => setSelectedPerson(member.name)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? "bg-white/15 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                }`}
              >
                <div
                  className={`h-4 w-4 rounded-full bg-gradient-to-tr ${member.avatarColor} flex items-center justify-center text-[9px] text-white font-bold`}
                >
                  {member.name.charAt(0)}
                </div>
                <span>{member.name}</span>
                <span className="text-[10px] text-gray-400 bg-black/30 rounded-full px-1.5 py-0.2">
                  {memberDone}/{memberTasks.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Control Bar: Search, Size Filter & View Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/[0.03] border border-white/10 p-3 rounded-2xl">
        {/* Search & Size Filter */}
        <div className="flex flex-wrap items-center gap-2 flex-1 min-w-[260px]">
          <div className="relative flex-1 min-w-[180px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks, items, or batches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <Filter className="h-3.5 w-3.5 text-gray-400" />
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="bg-black/60 border border-white/10 text-gray-300 text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-cyan-400 cursor-pointer"
            >
              <option value="all">All Sizes</option>
              <option value="very_small">Very Small (~15m)</option>
              <option value="small">Small (~2–3h)</option>
              <option value="medium">Medium (1 day)</option>
              <option value="big">Big (2 days)</option>
              <option value="very_big">Very Big (4 days)</option>
            </select>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center rounded-xl bg-black/40 border border-white/10 p-1">
          <button
            onClick={() => setActiveTab("timeline")}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === "timeline"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <CalendarRange className="h-3.5 w-3.5" />
            <span>Timeline</span>
          </button>
          <button
            onClick={() => setActiveTab("kanban")}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === "kanban"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            <span>Kanban</span>
          </button>
          <button
            onClick={() => setActiveTab("list")}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === "list"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <ListTodo className="h-3.5 w-3.5" />
            <span>List</span>
          </button>
        </div>
      </div>

      {/* Main Tab View Display */}
      <div>
        {activeTab === "timeline" && (
          <TaskTimeline tasks={filteredTasks} onToggleStatus={handleToggleStatus} />
        )}
        {activeTab === "kanban" && (
          <TaskKanban tasks={filteredTasks} onUpdateStatus={handleUpdateStatus} />
        )}
        {activeTab === "list" && (
          <TaskList tasks={filteredTasks} onToggleStatus={handleToggleStatus} />
        )}
      </div>
    </div>
  );
}
