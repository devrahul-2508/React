import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";

const LoginPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-1">
        <form action={handleGithubLogin}>
          <button className="bg-black text-white px-5 py-2 rounded-md">
            Login with Github
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
