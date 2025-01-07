import { Button } from "@/components/ui/button";
import { deleteUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border px-5 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          {/* User Name */}
          <h1 className="text-base font-semibold">{user.name}</h1>
        </div>
        {/* Actions */}
        <Button
          onClick={() => dispatch(deleteUser(user.id))}
          variant="ghost"
          className="p-2 text-red-500 hover:text-red-700 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
