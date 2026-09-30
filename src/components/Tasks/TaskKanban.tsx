import { AlertTriangle, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import type { Task, TaskStatus } from "../../data/tasksData";
import { TASK_SIZES_INFO } from "../../data/tasksData";

interface TaskKanbanProps {
  tasks: Task[];
  onUpdateStatus: (taskId: string, newStatus: TaskStatus) => void;
}

export default function TaskKanban({ tasks, onUpdateStatus }: TaskKanbanProps) {
  const columns: { id: TaskStatus; title: string; color: string; badge: string }[] = [
    {
      id: "todo",
      title: "To Do",
      color: "border-white/10",
      badge: "bg-white/10 text-gray-300",
    },
    {
      id: "in_progress",
      title: "In Progress",
      color: "border-amber-500/30",
      badge: "bg-amber-500/20 text-amber-300",
    },
    {
      id: "done",
      title: "Completed",
      color: "border-emerald-500/30",
      badge: "bg-emerald-500/20 text-emerald-300",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {columns.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col.id);

        return (
          <div
            key={col.id}
            className="flex flex-col rounded-3xl bg-white/[0.02] border border-white/10 p-4 min-h-[500px]"
          >
            {/* Column Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <span>{col.title}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${col.badge}`}>
                  {colTasks.length}
                </span>
              </h3>
            </div>

            {/* Cards container */}
            <div className="flex-1 space-y-3 overflow-y-auto pr-1">
              {colTasks.length === 0 && (
                <div className="h-40 flex items-center justify-center text-xs text-gray-500 border border-dashed border-white/10 rounded-2xl">
                  No tasks in this column
                </div>
              )}

              {colTasks.map((task) => {
                const sizeInfo = TASK_SIZES_INFO[task.size];

                return (
                  <div
                    key={task.id}
                    className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 p-4 space-y-3 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                  >
                    {/* Top Row: Assignee & Size */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                          {task.assignee.slice(0, 2).toUpperCase()}
                        </div>
                        <span className="text-xs font-semibold text-gray-200">
                          {task.assignee}
                        </span>
                      </div>

                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${sizeInfo.bg} ${sizeInfo.color} ${sizeInfo.border}`}
                      >
                        {sizeInfo.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {task.title}
                    </h4>

                    {/* Subtasks brief */}
                    {task.subtasks.length > 0 && (
                      <p className="text-xs text-gray-400 line-clamp-2">
                        {task.subtasks.join(" • ")}
                      </p>
                    )}

                    {/* Deadline & Dependency */}
                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <div className="flex items-center gap-1.5 text-[11px] text-amber-300/80">
                        <Clock className="h-3 w-3 text-amber-400 shrink-0" />
                        <span className="truncate">{task.batchDeadline}</span>
                      </div>

                      {task.dependsOn && task.dependsOn.length > 0 && (
                        <div className="flex items-center gap-1.5 text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                          <AlertTriangle className="h-2.5 w-2.5 shrink-0" />
                          <span className="truncate">
                            Needs {task.dependsOn[0].assignee}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Quick Move controls */}
                    <div className="pt-2 flex items-center justify-between border-t border-white/5 gap-2">
                      {col.id !== "todo" && (
                        <button
                          onClick={() => {
                            const prev: TaskStatus = col.id === "done" ? "in_progress" : "todo";
                            onUpdateStatus(task.id, prev);
                          }}
                          className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-white px-2 py-1 rounded-lg bg-white/5 border border-white/10 transition-colors cursor-pointer"
                        >
                          <ArrowLeft className="h-3 w-3" />
                          <span>Move Back</span>
                        </button>
                      )}

                      {col.id !== "done" && (
                        <button
                          onClick={() => {
                            const next: TaskStatus = col.id === "todo" ? "in_progress" : "done";
                            onUpdateStatus(task.id, next);
                          }}
                          className="ml-auto flex items-center gap-1 text-[11px] text-cyan-300 hover:text-cyan-200 px-2.5 py-1 rounded-lg bg-cyan-500/20 border border-cyan-500/30 transition-colors cursor-pointer"
                        >
                          <span>{col.id === "todo" ? "Start" : "Done"}</span>
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
