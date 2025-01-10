import { signIn } from "next-auth/react";

const SocialLoginButtons = () => (
  <div className="mt-4 flex items-center justify-center gap-4 cursor-pointer">
    <buttonon
      Click={() => signIn("google")}
      className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
    >
      Google
    </buttonon>
  </div>
);

export default SocialLoginButtons;
