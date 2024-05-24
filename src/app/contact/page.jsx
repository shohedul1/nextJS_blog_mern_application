'use client';

import React, { useState } from "react";
import Image from "next/image";
import Button from "../../components/Button/Button";
import { useRouter } from "next/navigation";


const initialState = {
  name: "",
  email: "",
  message: ""
}

const Contact = () => {
  const [state, setState] = useState(initialState);
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, message} = state;

    if (!name || !email || !message ) {
      setError("Please fill out all required fields.");
      return;
    };

    try {
      const newBlog = {
       name,email,message
      }

      const response = await fetch("/api/usermessage", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newBlog)

      });

      if (response.ok) {
       
        setTimeout(() => {
          router.push("/");
        }, 1500)
      } else {
        setError("Error occurred white createing blog.")
      }

    } catch (error) {
      console.log(error)
    } finally {
     setState(initialState);
    }
  }



  return (
    <div className="mt-40 px-5">
      <h1 className={"text-6xl mb-[100px] text-center"}>Let&copy;s Keep in Touch</h1>
      <div className={"flex items-center gap-[100px] flex-col lg:flex-row"}>
        <div className={"flex-1 h-[500px] relative"}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={"object-contain"}
          />
        </div>
        <form className={"flex-1 flex flex-col gap-5 "} onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={state.name} name="name" placeholder="name" 
          className={"p-5 bg-gray-500 border-none outline-none text-[#bbb] border-gray-300 text-xl font-bold"} />
          <input type="email" onChange={handleChange} value={state.email} name="email" placeholder="email"
           className={"p-5 bg-gray-500 border-none outline-none text-[#bbb] border-gray-300 text-xl font-bold "} />
          <textarea
            className={"p-5 bg-gray-500 border-none  outline-none text-[#bbb] border-gray-300 text-xl font-bold"}
            placeholder="message"
            value={state.message}
            onChange={handleChange}
            name="message"
            cols="30"
            rows="10"
          ></textarea>
         <button className="py-2 px-3 bg-blue-400 text-black hover:bg-blue-700 hover:text-white" type="submit">
          Send
         </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
