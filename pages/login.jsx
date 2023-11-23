import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className='bg-white p-4 h-screen w-full'>
      {session ? (
        <div>
          <p className='text-black'>Welcome, {session.user.email}</p>
          <img className='rounded-full' src={session.user.image} alt='' />
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <p className='text-black'>You are not signed in.</p>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
};

export default login;
