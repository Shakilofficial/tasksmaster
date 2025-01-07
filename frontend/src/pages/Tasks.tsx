import Error from "@/components/Error";
import { Loader } from "@/components/Loader";
import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { ITask } from "@/types";

const Tasks = () => {
  const { data, isLoading, isError } = useGetTasksQuery(undefined);
  const tasks: ITask[] = data?.data || [];

  let content = null;

  if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <Error message="Something went wrong. Please try again later." />;
  } else if (tasks.length === 0) {
    content = <Error message="No tasks found. Create a new one!" />;
  } else {
    content = tasks.map((task: ITask) => (
      <TaskCard key={task._id} task={task} />
    ));
  }

  return (
    <div className="flex flex-col gap-6 my-8 mx-4 md:mx-8 lg:mx-16">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-xl font-bold text-primary">Tasks Manager</h1>
          <AddTaskModal />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-[300px] mx-auto">
          <TabsList className="grid grid-cols-4 sm:flex gap-1">
            <TabsTrigger value="all" className="px-2 py-1 text-sm flex-1">
              ALL
            </TabsTrigger>
            <TabsTrigger value="low" className="px-2 py-1 text-sm flex-1">
              Low
            </TabsTrigger>
            <TabsTrigger value="medium" className="px-2 py-1 text-sm flex-1">
              Medium
            </TabsTrigger>
            <TabsTrigger value="high" className="px-2 py-1 text-sm flex-1">
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Task List Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content}
      </section>
    </div>
  );
};

export default Tasks;
