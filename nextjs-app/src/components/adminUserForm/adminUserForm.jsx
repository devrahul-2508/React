"use client";

import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form className="flex flex-col gap-3" action={formAction}>
      <h1 className="text-2xl font-bold">Add New User</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        className="bg-slate-800 p-2 rounded-md"
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        className="bg-slate-800 p-2 rounded-md"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="bg-slate-800 p-2 rounded-md"
      />
      <input
        type="text"
        name="img"
        placeholder="img"
        className="bg-slate-800 p-2 rounded-md"
      />
      <select className="bg-slate-800 p-2 rounded-md" name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button className="bg-blue-700 text-white p-2 rounded">Add</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
