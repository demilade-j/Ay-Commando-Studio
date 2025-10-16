import { useRef, useState } from "react";
import Button from "../../../../Reusables/Button/Button";
import Input from "../../../../Reusables/Input/Input";
import TextArea from "../../../../Reusables/TextArea/TextArea";

export default function ContactAfterHero() {
    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [message,setMessage] = useState("");
    const [modal,setModal] = useState("");
    const [modal1,setModal1] = useState("");
    const gmailRegex = /^(?=.{1,64}@)(?!.*\.\.)[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@gmail\.com$/i;
    const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <div className="flex lg:flex-row flex-col justify-between items-center py-20 lg:px-17 md:px-12 px-5 lg:gap-0 gap-5">
      <main className="lg:w-[45%] flex flex-col gap-13">
        <h1 className="font-semibold text-5xl">
          We're Ready to Work with You. Get in Touch
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.9965026827563!2d-73.98115802393897!3d40.696074671395984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bca135458e1%3A0x41872f867a06b591!2s40%20Park%20Ave%2C%20Brooklyn%2C%20NY%2011205%2C%20USA!5e0!3m2!1sen!2sng!4v1760635302365!5m2!1sen!2sng"
          className="w-full h-120 rounded-lg"
        //   allowfullscreen=""
          loading="lazy"
        //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>

        <form ref={formRef} className="lg:w-[45%] flex flex-col gap-7  w-full" action="">
            <main className="flex flex-col gap-6">
                <Input classname="w-full" onChange={(e) =>{
                    setName(e.target.value)
                    console.log(name);                    
                }} placeholder="Name"/>
                <Input classname="w-full" onChange={(e) =>{
                    setEmail(e.target.value)
                    console.log(email);                    
                }} placeholder="Email"/>
                <Input classname="w-full" onChange={(e) =>{
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
  );
}
