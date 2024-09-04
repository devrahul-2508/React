import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost, getUser } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

// export const generateMetadata = async ({ params }) => {
//   const { slug } = params;

//   const post = await getPost(slug);

//   return {
//     title: post.title,
//     description: post.desc,
//   };
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITH AN API
  // const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  const post = await getData(slug);
  console.log(post, "Post");

  return (
    <div className="container flex flex:col sm:flex-row justify-start items-center">
      {
        <div className="w-80 h-80 relative">
          <Image src={post.img} alt="" fill objectFit="contain" />
        </div>
      }
      <div>
        <h1>{post.title}</h1>
        <div>
          {/* {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userid={post.userid} />
            </Suspense>
          )} */}
          <div>
            <span>Published</span>
            {/* <span>{post.createdAt.toString().slice(4, 16)}</span> */}
          </div>
        </div>
        <div>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
