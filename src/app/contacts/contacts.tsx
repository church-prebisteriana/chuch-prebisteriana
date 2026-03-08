"use client";
import ButtonComponent from "@/src/components/form/Button";
import FormFields from "@/src/components/form/FormInput";
import SocialButtons from "@/src/components/ui/social_icons";
import { motion } from "framer-motion";
import {  useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

type typeFormData = {
  name: string;
  email: string;
  message: string;
};

export default function PageContacts() {
  const formFields: {
    name: keyof typeFormData;
    placeholder: string;
    type: string;
    required: boolean;
  }[] = [
    {
      name: "name",
      placeholder: "Digite seu nome",
      type: "text",
      required: true,
    },
    {
      name: "email",
      placeholder: "Digite seu email",
      type: "email",
      required: true,
    },
    {
      name: "message",
      placeholder: "Digite sua mensagem",
      type: "textarea",
      required: true,
    },
  ];

  const [formData, setFormData] = useState<typeFormData>({
    name: "",
    email: "",
    message: "",
  });

  const HandleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const isField = e.target.value;
    const name = e.target.name;
    setFormData((prev) => ({ ...prev, [name]: isField }));
  };

  return (
    
    <div className="flex flex-col  lg:flex-row items-center lg:items-start justify-center bg-gray-50 py-16 px-6 md:py-32 lg:py-40 gap-16 lg:gap-24">
     
      <div className="flex mt-10 mb-20 flex-col items-center md:items-start text-center md:text-left w-full max-w-2xl gap-6">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-igreja-dourado font-bold uppercase tracking-widest text-sm md:text-base">
            Venha nos visitar
          </h2>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-igreja-teal leading-tight">
            Nossa Missão
          </h1>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Ajuste: text-lg no mobile e text-2xl no desk para não ficar exagerado */}
          <p className="text-gray-600 leading-relaxed text-lg lg:text-2xl text-justify md:text-left">
            Convidamos você a vir exatamente como você é e a fazer parte da
            nossa comunidade de pessoas que se esforçam juntas para descobrir o
            propósito e o plano de Deus para suas vidas.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-5 mt-4 w-full mb-25"
        >
          <div className="group">
            <a
              href="https://maps.google.com/?q=Av.+Vinte+Um+de+Junho,+Imbituba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 md:gap-4"
              title="Ir para o mapa"
            >
              <FaMapMarkerAlt
                size={18}
                className="text-gray-600 group-hover:text-igreja-dourado transition-colors md:w-5 md:h-5 shrink-0"
              />
              <p className="text-sm md:text-lg group-hover:text-igreja-dourado leading-tight">
                Av. Vinte Um de Junho, s/n - Centro, Imbituba - SC.
              </p>
            </a>
          </div>

          <div className="group">
            <a
              href="https://wa.me/5548998680229"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 md:gap-4"
              title="Ir para o whatsapp"
            >
              <FaWhatsapp
                size={18}
                className="text-gray-600 group-hover:text-igreja-dourado md:w-5 md:h-5 shrink-0"
              />
              <p className="text-lg md:text-2xl group-hover:text-igreja-dourado font-bold text-green-900">
                (48) 99868-0229
              </p>
            </a>
          </div>

          <div className="group">
            <a
              href="mailto:ipbimbituba@gmail.com"
              className="flex items-center justify-center md:justify-start gap-3 md:gap-4"
              title="Enviar email"
            >
              <FaEnvelope
                size={18}
                className="text-gray-600 md:w-5 md:h-5 transition-colors shrink-0"
              />
              <p className="text-sm md:text-lg leading-tight">
                <span className="text-igreja-dourado-dark font-bold hover:text-igreja-teal break-all">
                  ipbimbituba@gmail.com
                </span>
              </p>
            </a>
          </div>

          <div className="mt-4 flex flex-col items-center md:items-start">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">
              Siga-nos
            </p>
            <SocialButtons
              className="justify-center md:justify-start gap-5"
              hoverColor="hover:text-igreja-dourado"
              size={24}
            />
          </div>
        </motion.div>
      </div>

     
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 w-full">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-igreja-dourado font-bold uppercase tracking-widest text-sm md:text-base">
              ENTRE EM CONTATO
            </h2>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-igreja-teal leading-tight">
              Nós queremos ouvir você
            </h1>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-gray-600 leading-relaxed text-lg lg:text-2xl text-justify md:text-left">
              Se você tiver alguma pergunta, solicitação ou história para
              compartilhar conosco, adoraríamos ouvir você.
            </p>
          </motion.div>

          <form action="" className="flex flex-col w-full mt-5 gap-2">
            {formFields.map((field) => (
              <FormFields
                key={field.name}
                name={field.name}
                type={field.type}
                error="Esse campo é obrigatório"
                placeholder={field.placeholder}
                onChange={HandleChange}
                value={formData[field.name]}
              />
            ))}
            <div className="w-full mt-4">
              <ButtonComponent mensagem="Enviar mensagem" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
