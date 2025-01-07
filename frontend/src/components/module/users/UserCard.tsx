import { IUser } from "@/types";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  return (
    <div className="border px-5 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          {/* User Name */}
          <h1 className="text-base font-semibold">{user.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
