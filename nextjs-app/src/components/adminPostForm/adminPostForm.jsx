"use client";

import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form className="flex flex-col gap-3" action={formAction}>
      <h1 className="text-2xl font-bold">Add New Post</h1>
      <input
        type="hidden"
        name="userId"
        value={userId}
        className="bg-slate-800 p-2 rounded-md"
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="bg-slate-800 p-2 rounded-md"
      />
      <input
        type="text"
        name="slug"
        placeholder="slug"
        className="bg-slate-800 p-2 rounded-md"
      />
      <input
        type="text"
        name="img"
        placeholder="img"
        className="bg-slate-800 p-2 rounded-md"
      />
      <textarea
        type="text"
        name="desc"
        placeholder="desc"
        rows={10}
        className="bg-slate-800 p-2 rounded-md"
      />
      <button className="bg-blue-700 text-white p-2 rounded">Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
