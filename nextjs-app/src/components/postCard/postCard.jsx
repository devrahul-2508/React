import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div>
      <div>
        {post.img && (
          <div>
            <Image src={post.img} alt="" fill />
          </div>
        )}
        <span>
          {post.createdAt?.toString().slice(4, 16)}
        </span>
      </div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link  href={`/blog/title`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
