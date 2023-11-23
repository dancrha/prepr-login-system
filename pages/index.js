import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useSession, signIn } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const { data: session } = useSession();

  // Redirect to /success if the user is already logged in
  if (session) {
    router.push("/success");
  }

  // Listen for changes in the user session
  const { data: newSession } = useSession({ onSession: handleSession });

  // Handle session changes
  function handleSession() {
    // If the session is present, redirect to /success
    if (newSession) {
      router.push("/success");
    }
  }

  const handleLogin = () => {
    // Perform login logic here, e.g., validate username and password
    // If login is successful, navigate to the success page
    if (username && password) {
      // Redirect to the success page
      router.push("/usersuccess");
    } else {
      // Handle invalid credentials or other login logic
      console.log("Invalid credentials");

      toast.error("Invalid credentials");
    }
  };

  return (
    <main className='bg-[#afdb88] w-full h-screen flex justify-center items-center gap-4'>
      <div className='grid grid-cols-2 grid-rows-2 gap-2'>
        <Toaster />
        <Image
          className='rounded-md hover:scale-125 transition-transform'
          src='/assets/blue.png'
          width={500}
          height={300}
          alt='logo'
        />
        <Image
          className='rounded-md hover:scale-125 transition-transform'
          src='/assets/gold.png'
          width={500}
          height={300}
          alt='logo'
        />
        <Image
          className='rounded-md hover:scale-125 transition-transform'
          src='/assets/green.png'
          width={500}
          height={300}
          alt='logo'
        />
        <Image
          className='rounded-md hover:scale-125 transition-transform'
          src='/assets/purple.png'
          width={500}
          height={300}
          alt='logo'
        />
      </div>

      {/* Login form */}
      <div className='w-[400px] h-[500px] bg-white flex flex-col justify-center items-center p-8 rounded-md'>
        {/* Logo */}
        <Image
          className='pb-12'
          src='/assets/logo.png'
          width={100}
          height={300}
          alt='logo'
        />
        {/* Login form */}
        <p className='text-gray-800 font-semibold pb-4'>Login to Prepr</p>
        <form
          action='submit'
          className='flex flex-col justify-center max-w-sm mx-auto text-black'
        >
          <input
            type='text'
            placeholder='Username or Email'
            className='border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:border-[#afdb88] hover:scale-105 transition-transform'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            className='border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:border-[#afdb88] hover:scale-105 transition-transform'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        {/* Login button */}
        <button
          onClick={handleLogin}
          className={
            "bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 hover:scale-105 transition-transform onclick:animate-bounce"
          }
        >
          Login
        </button>

        <button
          onClick={() => signIn("google")}
          className='bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 flex  hover:scale-105 transition-transform'
        >
          <Image
            src='/assets/google.png'
            alt='google'
            width={20}
            height={50}
            className='mr-2'
          />{" "}
          Login with Google
        </button>

        {/* Sign up link */}
        <p className='text-black pb-2 text-xs'>Don&apos;t have an account?</p>
        <Link
          href='/sign-up'
          className='text-blue-500 text-xs hover:text-blue-800 focus:outline-none'
        >
          Sign Up
        </Link>
      </div>
    </main>
  );
}
