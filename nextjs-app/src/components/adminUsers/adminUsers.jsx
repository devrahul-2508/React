import { getUsers } from "@/lib/data";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">Users</h1>
      {users.map((user) => (
        <div
          className="flex flex-row justify-between items-center"
          key={user.id}
        >
          <div>
            <Image
              src={user.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className="bg-red-700 p-1 text-white rounded ">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
