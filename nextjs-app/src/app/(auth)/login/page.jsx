import { handleGithubLogin, login } from "@/lib/action";

const LoginPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-1">
        <form action={handleGithubLogin}>
          <button className="bg-black text-white px-5 py-2 rounded-md">
            Login with Github
          </button>
        </form>
        <form className="flex flex-col gap-3" action={login}>
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
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
