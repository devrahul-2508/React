"use client";
import { handleGithubLogin, login } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);

  return (
    <form className="flex flex-col gap-3" action={formAction}>
      <input
        className="bg-slate-800 p-2 rounded-md"
        type="text"
        name="username"
        placeholder="username"
      />

      <input
        className="bg-slate-800 p-2 rounded-md"
        type="password"
        name="password"
        placeholder="password"
      />

      <button className="bg-blue-700 text-white p-2 rounded">Login</button>
      {state?.error}
      <Link href={"/register"}>
        Dont an account? <b>Register</b>{" "}
      </Link>
    </form>
  );
};

export default LoginForm;
