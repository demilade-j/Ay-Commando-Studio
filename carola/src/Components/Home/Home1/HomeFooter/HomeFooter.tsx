import { Mail, MapPin, Smartphone } from "lucide-react";

export default function HomeFooter() {
  return (
    <>
    <div className="lg:flex grid md:grid-cols-2 grid-cols-1  px-20 gap-10 pt-30">
      <main className="text-gray-700 flex lg:w-[120%] w-full flex-col gap-7">
        <p className="text-md text-black text-xl font-bold underline decoration-wavy decoration-[1.3px] decoration-green-700 underline-offset-10">
          About Us
        </p>
        <p className="text-[1.009rem] leading-[25px]">
          We're AyCommando, a team of photographers & videographers. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium. Est sale definitiones id. Ut quo quem harum
          munere, eu labore voluptatum mei.
        </p>
      </main>

      <main className="text-gray-700 w-[90%] flex flex-col gap-7">
        <p className="text-md text-black text-xl font-bold underline decoration-wavy decoration-[1.3px] decoration-green-700 underline-offset-10">
          Contact Us
        </p>
        <p className="text-[1rem] flex flex-col gap-4">
          <article className="flex gap-2 items-center ">
            <span>
              <MapPin size={18} className="text-green-700" />
            </span>
            40 Park Ave, Brooklyn, New York
          </article>
          <article className="flex gap-2 items-center ">
            <span>
              <Smartphone size={18} className="text-green-700" />
            </span>
            1-800-111-2222
          </article>
          <article className="flex gap-2 items-center ">
            <span>
              <Smartphone size={18} className="text-green-700" />
            </span>
            1-800-111-3333
          </article>
          <article className="flex gap-2 items-center ">
            <span>
              <Mail size={18} className="text-green-700" />
            </span>
            contact@example.com
          </article>
        </p>
      </main>

      <main className="text-gray-700 w-[75%] flex flex-col gap-7">
        <p className="text-md text-black text-xl font-bold underline decoration-wavy decoration-[1.3px] decoration-green-700 underline-offset-10">
          Quick Links
        </p>
        <p className="text-[1rem] flex flex-col gap-2 list-none">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>FAQ</li>
          <li>Contact</li>
        </p>
      </main>

      <main className="text-gray-700 w-[75%] flex flex-col gap-7">
        <p className="text-md text-black text-xl font-bold underline decoration-wavy decoration-[1.3px] decoration-green-700 underline-offset-10">
          Follow
        </p>
        <p className="text-[1rem] flex flex-col gap-2 list-none">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Youtube</li>
          <li>Vimeo</li>
        </p>
      </main>    
    </div>

    <div className="w-full flex items-center justify-center pt-25 pb-18">2025 © AjCommando. Designed by Coder John.</div>
    </>
  );
}
