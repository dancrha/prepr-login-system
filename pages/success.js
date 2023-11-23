import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

function Success() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      // If there is no active session, redirect to the index page
      router.push("/");
    }
  }, [session, router]);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className='bg-[#afdb88] w-full h-screen flex justify-center items-center gap-4'>
      <div className='bg-white text-black p-8 rounded-md flex flex-col justify-center items-center'>
        <Image
          className='pb-4'
          src='/assets/logo.png'
          width={100}
          height={300}
          alt='logo'
        />
        You have successfully logged in with Google.
        <button
          onClick={handleLogout}
          className='bg-gray-500 p-2 rounded-md mt-4'
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Success;
