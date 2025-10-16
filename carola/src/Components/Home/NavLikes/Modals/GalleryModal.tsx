import { useNavigate } from "react-router-dom"

export default function GalleryModal() {
  const navigate = useNavigate()
  return (
    <div className="bg-white text-black w-70 ps-8 font-[sans-serif] text-[0.99rem] cursor-pointer -ml-10 rounded-sm shadow-md">
        <ul className="flex flex-col gap-2 py-7">
            <li onClick={() => navigate("/masonaryCols2")} className="transform duration-800 hover:text-[green] hover:translate-x-3">Masonry 2 Cols</li>
            <li onClick={() => navigate("/masonaryCols3")} className="transform duration-800 hover:text-[green] hover:translate-x-3">Masonry 3 Cols</li>
            <li onClick={() => navigate("/masonaryCols4")} className="transform duration-800 hover:text-[green] hover:translate-x-3">Masonry 4 Cols</li>
            <li onClick={() => navigate("/grid3GalleryCols")} className="transform duration-800 hover:text-[green] hover:translate-x-3">Grid 3 Cols</li>
            <li onClick={() => navigate("/grid4GalleryCols")} className="transform duration-800 hover:text-[green] hover:translate-x-3">Grid 4 Cols</li>
            <li className="transform duration-800 hover:text-[green] hover:translate-x-3">Gallery Slider</li>
        </ul>
    </div>
  )
}
