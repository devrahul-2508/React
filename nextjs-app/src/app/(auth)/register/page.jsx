import { register } from "@/lib/action";

function RegisterPage() {
  return (
    <div>
      <form className="flex flex-col gap-3" action={register}>
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
          name="password"
          placeholder="passwordRepeat"
        />

        <button className="bg-blue-700 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
