import { Button } from "../ui/button";
import { motion } from "framer-motion";
type typeMensagem = {
  mensagem: string;
};

export default function ButtonComponent({ mensagem }: typeMensagem) {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
    >
      <div className="pt-4 flex justify-center md:justify-start">
        <Button
          asChild
          className="bg-igreja-teal hover:bg-[#1a4a4f] rounded-none text-white w-full md:w-60 h-16 text-lg cursor-pointer shadow-lg transition-all"
        >
          <button
            type="submit"
            className="flex justify-center items-center gap-3"
          >
            {mensagem}
            <svg width="18" height="10" viewBox="0 0 18 10" fill="currentColor">
              <path d="M13 10V6H0V4H13V0L18 5L13 10Z" />
            </svg>
          </button>
        </Button>
      </div>
    </motion.div>
  );
}
