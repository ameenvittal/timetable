import { CheckCircle2, Clock, AlertTriangle, Sparkles, Layers } from "lucide-react";
import type { Task } from "../../data/tasksData";
import { TASK_SIZES_INFO } from "../../data/tasksData";

interface TaskTimelineProps {
  tasks: Task[];
  onToggleStatus: (taskId: string) => void;
}

export default function TaskTimeline({ tasks, onToggleStatus }: TaskTimelineProps) {
  // Group tasks by assignee
  const assignees = Array.from(new Set(tasks.map((t) => t.assignee)));

  const getStatusBadge = (status: Task["status"]) => {
    switch (status) {
      case "done":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
            <CheckCircle2 className="h-3 w-3" /> Done
          </span>
        );
      case "in_progress":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
            <Clock className="h-3 w-3 animate-spin" /> In Progress
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
            To Do
          </span>
        );
    }
  };

  return (
    <div className="space-y-8">
      {assignees.map((assignee) => {
        const personTasks = tasks.filter((t) => t.assignee === assignee);
        // Group person tasks by batch
        const batches = Array.from(new Set(personTasks.map((t) => t.batchId)));

        return (
          <div
            key={assignee}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
          >
            {/* Header for Assignee */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  {assignee.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {assignee}
                    <span className="text-xs font-normal text-gray-400">
                      ({personTasks.filter((t) => t.status === "done").length}/{personTasks.length} Completed)
                    </span>
                  </h3>
                  <p className="text-xs text-cyan-400/80">
                    Schedule with 5m task buffers & merged milestone deadlines
                  </p>
                </div>
              </div>

              {/* Progress pill */}
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs">
                <span className="text-gray-400">Milestone Batches:</span>
                <span className="font-semibold text-cyan-300">{batches.length}</span>
              </div>
            </div>

            {/* Timeline Stream */}
            <div className="mt-6 space-y-8">
              {batches.map((batchId, batchIdx) => {
                const batchTasks = personTasks.filter((t) => t.batchId === batchId);
                const batchName = batchTasks[0]?.batchName || "Sprint Batch";
                const batchDeadline = batchTasks[0]?.batchDeadline || "Pending";
                const allBatchDone = batchTasks.every((t) => t.status === "done");

                return (
                  <div key={batchId} className="relative pl-6 border-l-2 border-cyan-500/20 space-y-4">
                    {/* Batch marker */}
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-[#030712] border-2 border-cyan-400" />

                    <div className="flex flex-wrap items-center justify-between gap-2 pb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5" />
                        Batch {batchIdx + 1}: {batchName}
                      </span>
                      <span className="text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                        Merged Deadline: {batchDeadline}
                      </span>
                    </div>

                    {/* Tasks in this batch */}
                    <div className="space-y-3">
                      {batchTasks.map((task, idx) => {
                        const sizeConfig = TASK_SIZES_INFO[task.size];
                        const isDone = task.status === "done";

                        return (
                          <div
                            key={task.id}
                            className={`group relative rounded-2xl border p-4 transition-all duration-300 ${
                              isDone
                                ? "bg-white/[0.01] border-white/5 opacity-70"
                                : "bg-white/5 border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.07]"
                            }`}
                          >
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div className="space-y-1.5 flex-1 min-w-[240px]">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-xs font-semibold text-gray-400">
                                    #{task.priority}
                                  </span>
                                  <span
                                    className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${sizeConfig.bg} ${sizeConfig.color} ${sizeConfig.border}`}
                                  >
                                    {sizeConfig.label} ({task.durationLabel})
                                  </span>
                                  {getStatusBadge(task.status)}
                                </div>

                                <h4
                                  className={`text-sm font-semibold transition-colors ${
                                    isDone ? "text-gray-400 line-through" : "text-white group-hover:text-cyan-300"
                                  }`}
                                >
                                  {task.title}
                                </h4>

                                {/* Scheduled slot */}
                                {task.scheduledSlot && (
                                  <p className="text-xs text-gray-400 flex items-center gap-1">
                                    <Clock className="h-3 w-3 text-cyan-400" />
                                    <span>Assigned Slot: <span className="text-gray-200 font-medium">{task.scheduledSlot}</span></span>
                                  </p>
                                )}

                                {/* Subtasks items */}
                                {task.subtasks.length > 0 && (
                                  <ul className="mt-2 space-y-1 pt-1 border-t border-white/5">
                                    {task.subtasks.map((sub, i) => (
                                      <li key={i} className="text-xs text-gray-300 flex items-start gap-1.5">
                                        <span className="text-cyan-400 font-bold leading-none mt-1">•</span>
                                        <span>{sub}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}

                                {/* Dependencies */}
                                {task.dependsOn && task.dependsOn.length > 0 && (
                                  <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-xl">
                                    <AlertTriangle className="h-3 w-3 text-amber-400 shrink-0" />
                                    <span className="font-semibold">Prerequisite:</span>
                                    {task.dependsOn.map((dep, dIdx) => (
                                      <span key={dIdx} className="underline underline-offset-2">
                                        {dep.assignee} ({dep.title})
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {/* Action button to change status */}
                              <button
                                onClick={() => onToggleStatus(task.id)}
                                className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                                  task.status === "done"
                                    ? "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                                    : task.status === "in_progress"
                                    ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30"
                                    : "bg-cyan-500/20 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30"
                                }`}
                              >
                                {task.status === "todo" && "Start Task"}
                                {task.status === "in_progress" && "Mark Done"}
                                {task.status === "done" && "Reopen"}
                              </button>
                            </div>

                            {/* 5-min buffer hint between sequential small tasks */}
                            {idx < batchTasks.length - 1 && (
                              <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-wider text-cyan-400/70 border-t border-dashed border-white/10 pt-2">
                                <Sparkles className="h-3 w-3" />
                                <span>+ {task.bufferMinutes}m buffer gap before next task</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Batch completion milestone card */}
                    <div
                      className={`p-3 rounded-2xl border text-xs flex items-center justify-between gap-3 ${
                        allBatchDone
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                          : "bg-white/[0.02] border-white/5 text-gray-400"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          className={`h-4 w-4 ${allBatchDone ? "text-emerald-400" : "text-gray-500"}`}
                        />
                        <span className="font-semibold">
                          {allBatchDone ? "Milestone Batch Completed!" : `Batch Target: ${batchDeadline}`}
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-400">
                        {batchTasks.filter((t) => t.status === "done").length} of {batchTasks.length} tasks
                      </span>
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
