import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    // Perform registration logic here
    // Redirect to the success page and pass the form data as query parameters
    const queryParams = new URLSearchParams(formData).toString();
    router.push(`/signupsuccess?${queryParams}`);
  };

  function collectData() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userType = document.getElementById("userType").value;
    // ... add more input fields as needed

    // Redirect to the target page and pass the data as URL parameters
    window.location.href =
      "signupsuccess.html?firstName=" +
      firstName +
      "&lastName=" +
      lastName +
      "&username=" +
      username +
      "&password=" +
      password +
      "&phoneNumber=" +
      phoneNumber +
      "&userType=" +
      userType;
  }

  return (
    <div className='bg-[#afdb88] w-full h-screen flex justify-center items-center gap-4'>
      {/* Images grid */}
      <div className='grid grid-cols-2 grid-rows-2 gap-2'>
        {/* Images */}
        <Image
          className='rounded-md'
          src='/assets/blue.png'
          width={400}
          height={300}
          alt='logo'
        />
        <Image
          className='rounded-md'
          src='/assets/gold.png'
          width={400}
          height={300}
          alt='logo'
        />
        <Image
          className='rounded-md'
          src='/assets/green.png'
          width={400}
          height={300}
          alt='logo'
        />
        <Image
          className='rounded-md'
          src='/assets/purple.png'
          width={400}
          height={300}
          alt='logo'
        />
      </div>

      {/* Registration form */}
      <div className='w-[500px] h-[700px] bg-white flex flex-col justify-center items-center p-8 rounded-md'>
        {/* Logo */}
        <Image
          className='pb-4'
          src='/assets/logo.png'
          width={100}
          height={300}
          alt='logo'
        />
        {/* Form inputs */}
        <p className='text-black font-semibold pb-4'>Create a Prepr Account</p>
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='First Name'
          className='border p-2 mb-4 text-black'
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='lastName'
          id='lastName'
          placeholder='Last Name'
          className='border p-2 mb-4 text-black'
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='username'
          id='username'
          placeholder='Username'
          className='border p-2 mb-4 text-black'
          onChange={handleInputChange}
        />
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          className='border p-2 mb-4 text-black'
          onChange={handleInputChange}
        />
        <input
          type='password'
          id='confirmPassword'
          placeholder='Confirm Password'
          className='border p-2 mb-4 text-black'
          onChange={handleInputChange}
        />
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email Address'
          className='border p-2 mb-4 text-black'
          onChange={handleInputChange}
        />
        <input
          type='tel'
          id='phoneNumber'
          name='phoneNumber'
          placeholder='Phone Number'
          className='border p-2 mb-4 text-black'
          onChange={handleInputChange}
        />

        <select
          id='userType'
          name='userType'
          className='border p-4 mb-4 text-black'
          onChange={handleInputChange}
        >
          <option value=''>Select User Type</option>
          <option value='Student'>Student</option>
          <option value='Teacher'>Teacher</option>
          <option value='Applicant'>Applicant</option>
          <option value='Facilitator'>Facilitator</option>
          <option value='Mentor'>Mentor</option>
          <option value='Expert'>Expert</option>
          <option value='Recent Grad'>Recent Grad</option>
          <option value='Employee'>Employee</option>
          <option value='Employer'>Employer</option>
          <option value='Investor'>Investor</option>
          <option value='Job Seeker'>Job Seeker</option>
        </select>
        {/* Other input fields */}
        {/* ... */}
        <button
          onClick={handleRegister}
          id='submitButton'
          type='submit'
          className='bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4'
        >
          Register
        </button>
        <p className='text-black text-xs'>Already have an account?</p>
        <Link
          href='/'
          className='text-blue-500 hover:text-blue-800 focus:outline-none text-xs'
        >
          Login
        </Link>
      </div>
    </div>
  );
}
