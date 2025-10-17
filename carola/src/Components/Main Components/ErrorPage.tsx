import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(9);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const redirect = setTimeout(() => {
      navigate("/");
    }, 9000);

    return () => {
      clearInterval(countdown);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white font-[Poppins] text-center p-5">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-8xl font-extrabold mb-6 drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        Oops! Page Not Found 😅
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg mb-6 max-w-md"
      >
        Don’t worry! We’ll take you back home in{" "}
        <span className="font-bold text-yellow-300">{seconds}</span> seconds.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-100 transition"
      >
        Go Home Now
      </motion.button>

      <motion.div
        className="absolute bottom-10 text-sm opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Redirecting automatically...
      </motion.div>
    </div>
  );
}
