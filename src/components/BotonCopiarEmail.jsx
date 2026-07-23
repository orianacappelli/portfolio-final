import { useState } from 'react';

export default function BotonCopiarEmail() {
  const [copiado, setCopiado] = useState(false);
  const email = "orianacappelli1@gmail.com";

  const copiar = () => {
    navigator.clipboard.writeText(email);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  return (
    <button 
      onClick={copiar}
      className="group block w-full bg-[#8b5cf6] border-[3px] border-black p-6 md:p-8 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer text-left"
    >
      <div className="flex justify-between items-center">
        <span className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          {copiado ? "¡Mail copiado!" : "Copiar mail"}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </button>
  );
}