import { handleGithubLogin } from "@/lib/action";

const LoginPage = () => {
  return (
    <div>
      <div>
        <form action={handleGithubLogin}>
          <button>Login with Github</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
