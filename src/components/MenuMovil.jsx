import { useState } from 'react';

export default function MenuMovil() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="relative">
      {/* Botón hamburguesa con estilo brutalista */}
      <button 
        onClick={() => setAbierto(!abierto)}
        className="bg-white border-[3px] border-black p-2 font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer flex items-center justify-center"
        aria-label="Abrir menú"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {abierto ? (
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menú desplegable cuando se hace clic */}
      {abierto && (
        <div className="absolute right-0 mt-3 w-48 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col p-4 gap-3 z-50">
          <a href="/sobre-mi" onClick={() => setAbierto(false)} className="font-black uppercase tracking-tight hover:text-[#8b5cf6] transition-colors">Sobre mí</a>
          <a href="/proyectos" onClick={() => setAbierto(false)} className="font-black uppercase tracking-tight hover:text-[#8b5cf6] transition-colors">Proyectos</a>
          <a href="/contacto" onClick={() => setAbierto(false)} className="font-black uppercase tracking-tight hover:text-[#8b5cf6] transition-colors">Contacto</a>
        </div>
      )}
    </div>
  );
}