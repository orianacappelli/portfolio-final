import { useState } from 'react';

export default function BotonCopiarEmail() {
  // importo el hook usestate para manejar estados dentro de mi componente
  const [copiado, setCopiado] = useState(false);
  
  // guardo mi email en una constante para tenerlo a mano
  const email = "orianacappelli1@gmail.com";

  // creo esta funcion que se ejecuta cuando hago click en el boton
  const manejarCopiar = (e) => {
    e.preventDefault();
    // uso la funcion nativa del navegador para copiar el mail al portapapeles
    navigator.clipboard.writeText(email);
    // cambio el estado a verdadero para que el texto cambie y muestre que se copio
    setCopiado(true);
    // despues de 2.5 segundos vuelvo el estado a falso para que el boton vuelva a la normalidad
    setTimeout(() => {
      setCopiado(false);
    }, 2500);
  };

  return (
    <button 
      type="button"
      onClick={manejarCopiar}
      className="group block w-full bg-[#8b5cf6] border-[3px] border-black p-6 md:p-8 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer text-left"
    >
      {/* agrupo el contenido y uso pointer-events-none para que los clics caigan bien en el boton */}
      <div className="flex justify-between items-center pointer-events-none">
        {/* aca hago un operador ternario para mostrar un texto si ya se copio o el original si no */}
        <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          {copiado ? "✨ ¡Mail copiado!" : "Mandame un Mail"}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </button>
  );
}