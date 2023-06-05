import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-gray-100 h-screen flex items-center justify-center'>
      {/* Left Side */}
      <div className='text-2xl w-1/2 p-20 mb-10'>
        <Image src={"/Assets/faceBook.svg"} width={300} height={100} alt='facebook logo'/>
        <p className='ml-8 -mt-3'>Facebook helps you connect and share with the people in your life.</p>
      </div>
      {/* Right Side */}
      <div className='bg-white flex flex-col p-2 rounded-xl w-1/3 shadow-lg'>
       <input className='focus:outline outline-blue-600 mx-2 my-2 border border-1 border-gray-100 p-3 rounded-md' type="text" placeholder='Email address or phone number' />
       <input className='focus:outline outline-blue-600 mx-2 my-2 border border-1 border-gray-100 p-3 rounded-md' type="password" placeholder='Password' />
       <button className='mx-2 bg-blue-600 my-2 p-3 rounded-md font-lg font-bold text-white hover:bg-blue-700'>Log in</button>
       <p className='cursor-pointer text-center p-2 text-sm text-blue-600 hover:underline '>Forgotten password?</p>
       <span className='my-3 mx-2'>
        <hr />
       </span>
       <button className='my-3 mx-2 bg-green-500 mb-5 p-3 rounded-md font-bold text-white hover:bg-green-600 w-fit mx-auto'>Create new account</button>
      </div>
    </div>
  );
}
