import { motion } from "framer-motion";
import { useState } from "react";

type FormFieldProps = {
  placeholder: string;
  name: string;
  type: string;
  error: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function FormFields({
  placeholder,
  name,
  type,
  error,
  value,
  onChange,
}: FormFieldProps) {
  const baseClasses = `bg-transparent  border-b-2 w-full border-gray-300 py-2 focus:outline-none focus:border-[#215D63] transition-colors  placeholder:text-xl  placeholder:font-medium sm:text-3xl focus:placeholder-transparent `;
  const errorBase = `bg-transparent border-b-2 w-full py-2 focus:outline-none focus: border-red-500 transition-colors placeholder:text-xl placeholder:font-medium focus:placeholder-transparent `;
  const [touched, setTouched] = useState(false);

  const hasError = value === "";
  const inputClass = hasError && touched ? errorBase : baseClasses;

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-1 group mb-8">
        {type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            rows={4}
            placeholder={placeholder}
            className={inputClass}
            onChange={onChange}
            value={value}
            onBlur={() => setTouched(true)}
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                setTouched(true);
              }
            }}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            className={inputClass}
            onChange={onChange}
            value={value}
            onBlur={() => setTouched(true)}
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                setTouched(true);
              }
            }}
          />
        )}
        {hasError &&
          touched &&(
            <span className="text-red-500 text-[10px] text-right mt-1 italic transition-opacity">
              {error}
            </span>
          )}
      </div>
    </motion.div>
  );
}
