import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronRight, Clock, AlertTriangle, Layers } from "lucide-react";
import type { Task } from "../../data/tasksData";
import { TASK_SIZES_INFO } from "../../data/tasksData";

interface TaskListProps {
  tasks: Task[];
  onToggleStatus: (taskId: string) => void;
}

export default function TaskList({ tasks, onToggleStatus }: TaskListProps) {
  const [expandedTasks, setExpandedTasks] = useState<Record<string, boolean>>({});

  const toggleExpand = (taskId: string) => {
    setExpandedTasks((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  return (
    <div className="space-y-3">
      {tasks.length === 0 && (
        <div className="p-12 text-center text-sm text-gray-500 rounded-3xl bg-white/[0.02] border border-white/10">
          No tasks match your filters.
        </div>
      )}

      {tasks.map((task) => {
        const isExpanded = !!expandedTasks[task.id];
        const isDone = task.status === "done";
        const isInProgress = task.status === "in_progress";
        const sizeInfo = TASK_SIZES_INFO[task.size];

        return (
          <div
            key={task.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isDone
                ? "bg-white/[0.02] border-white/5 opacity-75"
                : isInProgress
                ? "bg-amber-500/[0.04] border-amber-500/20"
                : "bg-white/5 border-white/10 hover:border-cyan-500/30"
            }`}
          >
            <div className="p-4 flex flex-wrap items-center justify-between gap-3">
              {/* Left Column: Checkbox, Expand & Title */}
              <div className="flex items-center gap-3 flex-1 min-w-[260px]">
                {/* Complete button */}
                <button
                  onClick={() => onToggleStatus(task.id)}
                  className={`h-6 w-6 rounded-lg border flex items-center justify-center transition-all cursor-pointer ${
                    isDone
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : isInProgress
                      ? "border-amber-400 bg-amber-500/20 text-amber-300"
                      : "border-white/20 bg-white/5 text-transparent hover:border-cyan-400"
                  }`}
                  title={isDone ? "Mark as to-do" : "Toggle status"}
                >
                  <CheckCircle2 className="h-4 w-4" />
                </button>

                <button
                  onClick={() => toggleExpand(task.id)}
                  className="text-gray-400 hover:text-white p-0.5 rounded cursor-pointer"
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-gray-400">
                      #{task.priority}
                    </span>
                    <h4
                      className={`text-sm font-semibold transition-colors ${
                        isDone ? "text-gray-400 line-through" : "text-white"
                      }`}
                    >
                      {task.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
                    <span className="text-cyan-300 font-medium">{task.assignee}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Layers className="h-3 w-3 text-cyan-400" />
                      {task.batchName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Badges & Deadline */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${sizeInfo.bg} ${sizeInfo.color} ${sizeInfo.border}`}
                >
                  {sizeInfo.label} ({task.durationLabel})
                </span>

                <div className="flex items-center gap-1.5 text-xs text-amber-300/80 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                  <Clock className="h-3 w-3 text-amber-400" />
                  <span>{task.batchDeadline}</span>
                </div>

                {task.dependsOn && task.dependsOn.length > 0 && (
                  <div className="hidden sm:flex items-center gap-1 text-[11px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                    <AlertTriangle className="h-3 w-3" />
                    <span>Needs {task.dependsOn[0].assignee}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Expandable Sub-items and slot information */}
            {isExpanded && (
              <div className="px-5 pb-4 pt-2 border-t border-white/5 bg-black/20 space-y-3">
                {task.scheduledSlot && (
                  <div className="text-xs text-gray-300 flex items-center gap-2">
                    <span className="text-cyan-400 font-semibold">Scheduled Slot:</span>
                    <span>{task.scheduledSlot}</span>
                    <span className="text-gray-500">({task.bufferMinutes}m buffer gap)</span>
                  </div>
                )}

                {task.dependsOn && task.dependsOn.length > 0 && (
                  <div className="text-xs text-amber-300 flex items-center gap-2">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    <span className="font-semibold">Prerequisite:</span>
                    <span>
                      {task.dependsOn.map((d) => `${d.assignee} — ${d.title}`).join(", ")}
                    </span>
                  </div>
                )}

                {task.subtasks.length > 0 && (
                  <div>
                    <h5 className="text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                      Work Items & Scope:
                    </h5>
                    <ul className="space-y-1.5 pl-2">
                      {task.subtasks.map((sub, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
