// "use client";

// import Link from "next/link";
// import SocialLoginButtons from "../UI/SocialLogin";

// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await signIn("credentials", {
//       redirect: false,
//       email,
//       password,
//     });

//     if (response?.error) {
//       setError("Invalid credentials");
//     } else {
//       // Redirect user to home or protected page after successful login
//       router.push("/");
//     }
//   };

//   return (
//     <>
//       <div className="contain py-16 min-h-screen">
//         <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
//           <div className="text-center mb-6">
//             <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
//             <p className="text-gray-600 text-sm">Welcome back customer</p>
//           </div>

//           {error && <p style={{ color: "red" }}>{error}</p>}
//           <form>
//             <div className="space-y-2">
//               <div>
//                 <label htmlFor={"email"} className="text-gray-600 mb-2 block">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email"
//                   className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor={"password"}
//                   className="text-gray-600 mb-2 block"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Password"
//                   className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
//                   required
//                 />
//               </div>
//             </div>
//             {/* submit button  */}
//             <div className="mt-4">
//               <button
//                 type="submit"
//                 className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
//               >
//                 Login
//               </button>
//             </div>
//           </form>

//           <div className="mt-6 flex justify-center relative">
//             <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
//               Or login with
//             </div>
//             <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
//           </div>
//           <SocialLoginButtons />
//           <p className="mt-4 text-center text-gray-600">
//             Don&apos;t have an account?{" "}
//             <Link href="/register" className="text-primary">
//               Register now
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
