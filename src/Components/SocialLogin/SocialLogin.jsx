import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleLogin().then((result) => {
      if (result) {
        toast.success("Login Successfull");
        navigate(location?.state || "/");
      }
    });
  };

  const handleGitHubSignIn = () => {
    githubLogin().then((result) => {
      if (result) {
        toast.success("Login Successfull");
        navigate(location?.state || "/");
      }
    });
  };

  return (
    <div className="flex justify-between">
      <button
        onClick={handleGoogleSignIn}
        className="-2 mt-8 flex font-roboto items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-[#2C3892] hover:text-white"
      >
        {" "}
        <FcGoogle className="mr-2 h-5 rounded-lg"></FcGoogle> Log in with Google
      </button>
      <button
        onClick={handleGitHubSignIn}
        className="-2 mt-8 flex font-roboto items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-[#2C3892] hover:text-white"
      >
        {" "}
        <FaGithub className="mr-2 h-5 rounded-lg"></FaGithub> Log in with Github
      </button>
    </div>
  );
};

export default SocialLogin;
