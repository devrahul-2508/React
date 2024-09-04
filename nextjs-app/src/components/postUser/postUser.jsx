import Image from "next/image";
import { getUser } from "@/lib/data";
// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` ,{cache:"no-store"});

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const PostUser = async ({ userid }) => {
  // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  console.log(userid, "userId");

  const user = await getUser(userid);
  console.log(user, "User");

  return (
    <div>
      {/* <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      /> */}
      <div>
        <span>Author</span>
        <span>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
