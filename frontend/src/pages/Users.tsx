import UserCard from "@/components/module/users/UserCard";
import { UserModal } from "@/components/module/users/UserModal";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const Users = () => {
  const users = useAppSelector(selectUsers);
  console.log(users);

  return (
    <div className="flex flex-col gap-6 my-8 mx-4 md:mx-8 lg:mx-16">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        {/* Heading */}
        <div className="flex flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-lg ">Users Manager</h1>
          <UserModal />
        </div>
      </div>

      {/* Users List Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.length > 0 ? (
          users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No users available
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
