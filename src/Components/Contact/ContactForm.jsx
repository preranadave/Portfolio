import React from "react";

function ContactForm() {
  return (
    <div className="ps-3 py-5 w-[98%] flex space-y-10  items-center">
      <form action="" className="">
        <p className='font-["Neue Montreal"] font-semibold md:text-4xl text-2xl my-2'>
          Hi! My Name is
        </p>
        <input
          type="text"
          className='border-b-2 border-zinc-900 mx-2 my-2 bg-[#CDEA68] outline-none font-["Neue Montreal"] placeholder: placeholder:text-zinc-500'
          placeholder="Enter your Name Here"
        />
        <p className='font-["Neue Montreal"] font-semibold md:text-4xl text-2xl my-2'>
          And I am looking for someone do project in
        </p>{" "}
        <input
          type="text"
          className='border-b-2 border-zinc-900 mx-2 my-2 bg-[#CDEA68] outline-none font-["Neue Montreal"] placeholder: placeholder:text-zinc-500'
          placeholder="Enter technology here"
        />
        <p className='font-["Neue Montreal"] font-semibold md:text-4xl text-2xl my-2'>
          I am hoping to stay around a budget range of
        </p>
        <input
          type="number"
          className='border-b-2 border-zinc-900 mx-2 my-2 bg-[#CDEA68] outline-none font-["Neue Montreal"] placeholder: placeholder:text-zinc-500'
          placeholder="Enter budget range here"
        />
        <p className='font-["Neue Montreal"] font-semibold md:text-4xl text-2xl my-2'>
          You can reach me at
        </p>
        <input
          type="email"
          className='border-b-2 border-zinc-900 mx-2 my-2 bg-[#CDEA68] outline-none font-["Neue Montreal"] placeholder: placeholder:text-zinc-500'
          placeholder="Enter Email Here"
        />
        <p className='font-["Neue Montreal"] font-semibold md:text-4xl text-2xl my-2'>
          Here are more thoughts on project:
        </p>
        <input
          type="text"
          className='border-b-2 w-72 border-zinc-900 mx-2 my-2 bg-[#CDEA68] outline-none font-["Neue Montreal"] placeholder: placeholder:text-zinc-500'
          placeholder="Enter other details here"
        />
        <div className="flex justify-end md:px-5 mt-5">
        <button className="inquiry font-['Neue Montreal'] uppercase  leading-none  md:text-[1.5vw] text-[5vw] px-2 py-4 rounded-full  bg-zinc-900 w-52 md:mx-0 mx-auto text-stone-200 text-center">
          <span className="text-center">Send Inquiry</span>
        </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
