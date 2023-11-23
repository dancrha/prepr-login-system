import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function SignupSuccess() {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const firstName = queryParams.get("firstName");
    const lastName = queryParams.get("lastName");
    const username = queryParams.get("username");
    const email = queryParams.get("email");
    const phoneNumber = queryParams.get("phoneNumber");
    const userType = queryParams.get("userType");

    setUserData({
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      userType,
    });
  }, []);

  return (
    <div className='bg-[#afdb88] w-full h-screen flex justify-center items-center gap-4'>
      <button
        onClick={() => router.push("/")}
        className='absolute left-5 top-5 text-black bg-white p-4 rounded-md shadow-md hover:scale-105 active:scale-95 transition duration-150 ease-out'
      >
        Back
      </button>
      <div className='w-[400px] h-[330px] bg-white flex flex-col justify-center items-center rounded-md'>
        <Image
          className='pb-4
          '
          src='/assets/logo2.png'
          width={170}
          height={300}
          alt='logo'
        />
        <p className='text-black pb-6 font-semibold'>
          Congrats! You&apos;re now signed up with Prepr.
        </p>
        <p className='text-black font-semibold pb-2'>User Details:</p>
        <p className='text-black'>
          <span className='font-medium'>First Name: </span>
          {userData.firstName}
        </p>
        <p className='text-black'>
          <span className='font-medium'>Last Name: </span>
          {userData.lastName}
        </p>
        <p className='text-black'>
          <span className='font-medium'>Username: </span>
          {userData.username}
        </p>
        <p className='text-black'>
          <span className='font-medium'>Email: </span>
          {userData.email}
        </p>
        <p className='text-black'>
          <span className='font-medium'>Phone Number: </span>
          {userData.phoneNumber}
        </p>
        <p className='text-black'>
          <span className='font-medium'>User Type: </span>
          {userData.userType}
        </p>
      </div>
    </div>
  );
}

export default SignupSuccess;
