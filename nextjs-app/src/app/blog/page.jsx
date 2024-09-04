import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

async function BlogPage() {
  const posts = await getData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {posts &&
        posts.map((post) => (
          <div className="postItem" key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
    </div>
  );
}

export default BlogPage;
