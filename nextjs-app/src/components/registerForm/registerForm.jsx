"use client";

import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <div>
      <form className="flex flex-col gap-3" action={formAction}>
        <input
          className="bg-slate-800 p-2 rounded-md"
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          className="bg-slate-800 p-2 rounded-md"
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          className="bg-slate-800 p-2 rounded-md"
          type="password"
          name="password"
          placeholder="password"
        />
        <input
          className="bg-slate-800 p-2 rounded-md"
          type="password"
          name="passwordRepeat"
          placeholder="passwordRepeat"
        />

        <button className="bg-blue-700 text-white p-2 rounded">Register</button>
        {state?.error}
        <Link href={"/login"}>
          Have an account? <b>Login</b>{" "}
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
