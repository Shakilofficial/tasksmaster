import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  return (
    <div className="border px-5 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-4">
      {/* Header Section */}
      <div className="flex justify-between items-start sm:items-center flex-wrap gap-4">
        <div className="flex gap-3 items-center">
          {/* Priority Indicator */}
          <div
            className={cn("w-4 h-4 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>

          {/* Task Title */}
          <h1
            className={cn("font-semibold", {
              "line-through text-gray-400": task.isCompleted,
            })}
          >
            {task.title}
          </h1>
        </div>

        {/* Actions */}
        <div className="flex gap-3 items-center">
          {/* Checkbox to Toggle Completion */}
          <Checkbox checked={task.isCompleted} className="cursor-pointer" />
          {/* Delete Button */}
          <Button
            variant="ghost"
            className="p-2 text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">{task.description}</p>
    </div>
  );
};

export default TaskCard;
