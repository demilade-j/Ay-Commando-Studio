import { useNavigate } from "react-router-dom"

export default function HomeModal() {
  const navigate = useNavigate()
  return (
    <div className="bg-white text-black w-70 text-[0.99rem] ps-8 font-[sans-serif] -ml-10 rounded-sm shadow-md">
        <ul className="flex flex-col gap-2 py-7 cursor-pointer">
            <li onClick={() => navigate("/")} className="transform duration-800 hover:text-[green] hover:translate-x-3">Home 1</li>
            {/* <li className="transform duration-800 hover:text-[green] hover:translate-x-3">Home 2</li>
            <li className="transform duration-800 hover:text-[green] hover:translate-x-3">Home 3</li>
            <li className="transform duration-800 hover:text-[green] hover:translate-x-3">Home 4</li>
            <li className="transform duration-800 hover:text-[green] hover:translate-x-3">Home 5</li>
            <li className="transform duration-800 hover:text-[green] hover:translate-x-3">Home 6</li>
            <li className="transform duration-800 hover:text-[green] hover:translate-x-3">Home 7</li>
            <li className="transform duration-800 hover:text-[green] hover:translate-x-3">Home 8</li>
            <li className="transform duration-800 hover:text-[green] hover:translate-x-3">Home 9</li>
            <li className="transform duration-800 hover:text-[green] hover:translate-x-3">Home 10</li> */}
            <li onClick={() => navigate("/homeVideo")} className="transform duration-800 hover:text-[green] hover:translate-x-3">Home Video</li>
        </ul>
    </div>
  )
}
