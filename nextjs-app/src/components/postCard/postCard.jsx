import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div>
        {post.img && (
          <div className="imageContainer">
            <div className="relative w-96 h-96">
              <Image
                src={post.img}
                alt="About Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        )}
        {/* <span>{post.createdAt?.toString().slice(4, 16)}</span> */}
      </div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
