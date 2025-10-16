import { useState, useRef } from "react";
import Input from "../../../../../Reusables/Input/Input"
import TextArea from "../../../../../Reusables/TextArea/TextArea"
import Button from "../../../../../Reusables/Button/Button"

export default function HomeVidContact() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [message,setMessage] = useState("");
    const [modal,setModal] = useState("");
    const [modal1,setModal1] = useState("");
    const gmailRegex = /^(?=.{1,64}@)(?!.*\.\.)[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@gmail\.com$/i;
    const formRef = useRef<HTMLFormElement | null>(null);

    return (
    <div className="flex flex-col w-full items-center justify-center py-27 gap-7">
        <p className="text-md font-semibold underline decoration-wavy decoration-[1.3px] text-[#4A7D6D] decoration-[#4A7D6D] underline-offset-10">
            Contact Us
          </p>
          <h1 className="font-semibold text-5xl">Get in Touch</h1>
          <br />
          <form ref={formRef} className="lg:w-[70%] flex flex-col gap-7 md:w-[60%] sm:w-[85%] w-[90%]" action="">
            <main className="lg:flex grid gap-4">
                <Input classname="lg:w-[33%] w-full" onChange={(e) =>{
                    setName(e.target.value)
                    console.log(name);                    
                }} placeholder="Name"/>
                <Input classname="lg:w-[33%] w-full" onChange={(e) =>{
                    setEmail(e.target.value)
                    console.log(email);                    
                }} placeholder="Email"/>
                <Input classname="lg:w-[33%] w-full" onChange={(e) =>{
                    setPhone(e.target.value)
                    console.log(phone);                    
                }} placeholder="Phone"/>
            </main>
            <TextArea onChange={(e) =>{
                    setMessage(e.target.value)
                    console.log(message);                    
                }} placeholder="Enter your message here" classname="w-full border h-50 rounded-lg border-gray-500 ps-7 pt-5 outline-0"/>
            <Button label='Send Message' className="cursor-pointer" onclick={(e) =>{
                e.preventDefault()

                if(name === ""){
                    setModal("Please enter your name")
                    setModal1("")
                }else if(email === ""){
                    setModal("Please enter your email")
                    setModal1("")
                }else if(!gmailRegex.test(email)){
                    setModal("Please enter a valid email")
                    setModal1("")
                }else if(phone === ""){
                    setModal("Please enter your phone number")
                    setModal1("")
                }else if(message === ""){
                    setModal("Please enter a message")
                    setModal1("")
                }else{
                    setEmail("")
                    setMessage("")
                    setName("")
                    setPhone("")
                    setModal("")
                    setModal1("Message sent successfully")
                    setTimeout(() => {
                    setModal1('')
                    }, 2000);
                    formRef.current?.reset()
                }
            }} />
            {modal !== "" && <p className="text-red-500 w-full border border-red-500 py-4 ps-7 rounded-md">{modal}</p>}
            {modal1 !== "" && <p className="text-green-500">{modal1}</p>}
          </form>
    </div>
  )
}
