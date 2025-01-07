import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectFilter, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const dispatch = useAppDispatch();
  const filteredTasks = useAppSelector(selectFilter);

  return (
    <div className="flex flex-col gap-6 my-8 mx-4 md:mx-8 lg:mx-16">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        {/* Heading and AddTaskModal */}
        <div className="flex flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl ">
            Task Manager
          </h1>
          <AddTaskModal />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-[300px] mx-auto">
          <TabsList className="grid grid-cols-4 sm:flex gap-1">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
              className="px-2 py-1 text-sm flex-1"
            >
              ALL
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
              className="px-2 py-1 text-sm flex-1"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
              className="px-2 py-1 text-sm flex-1"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              value="high"
              className="px-2 py-1 text-sm flex-1"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Task List Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No tasks available
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
