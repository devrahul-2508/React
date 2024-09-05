import { getPosts } from "@/lib/data";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">Posts</h1>
      {posts.map((post) => (
        <div
          className="flex flex-row justify-between items-center"
          key={post.id}
        >
          <div>
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className="bg-red-700 p-1 text-white rounded ">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
