import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

function Success() {
  const router = useRouter();

  const handleLogout = async () => {
    router.push("/");
  };

  return (
    <div className='bg-[#afdb88] w-full h-screen flex justify-center items-center gap-4'>
      <div className='bg-white text-black p-8 rounded-md flex flex-col justify-center items-center'>
        <Image
          className='pb-4'
          src='/assets/logo2.png'
          width={150}
          height={300}
          alt='logo'
        />
        You have successfully logged in.
        <button
          onClick={handleLogout}
          className='bg-red-500 flex gap-2 text-white p-2 rounded-md mt-4 hover:scale-105 active:scale-95 transition duration-150 shadow-md ease-out'
        >
          <img
            src='/assets/logout.png'
            alt='logout'
            width={25}
            className='mt-1'
          />
          Log out
        </button>
      </div>
    </div>
  );
}

export default Success;
