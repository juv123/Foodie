import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='flex bg-gray-500 text-white my-0 mx-9 py-5 justify-center items-center'>
    <form method='POST' action="https://getform.io/f/104da966-6f86-436f-996a-cb660f8056e2" className='flex flex-col'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact US</p>
            <p className='text-gray-300 py-4'>Contact us by filling the form below </p>
        </div>
        <input className='bg-white p-2 cursor-auto text-blue-700 placeholder:text-white' type="text" placeholder='Name' name='name' />
        <input className='my-4 bg-[#7f96e1]  p-2 cursor-auto text-blue-700 placeholder:text-black' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#7f96e1]  p-2 cursor-auto text-blue-700 placeholder:text-black' name="message" rows="5" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-blue-700 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
    </form>
</div>
  )
}

export default Contact;