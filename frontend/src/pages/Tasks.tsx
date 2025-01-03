import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector((state) => state.todo.tasks);
  console.log(tasks);

  return (
    <div>
      <h2>Tasks Page</h2>
      <Button className="primary">Click me</Button>
    </div>
  );
};

export default Tasks;
