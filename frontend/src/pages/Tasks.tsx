import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);

  return (
    <div className="flex flex-col gap-4 my-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Task Manager</h1>
        <AddTaskModal />
      </div>

      {/* Task List Section */}
      <div className="mt-8 space-y-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
