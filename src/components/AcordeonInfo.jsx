import { useState } from 'react';

export default function AcordeonInfo() {
  // use el hook useState para guardar el indice de la sección que está abierta
  // arranca en 'null' porque al cargar la página no quiero que ninguna esté desplegada
  const [abierto, setAbierto] = useState(null);

  // arme este array de objetos con mis preguntas y respuestas 
  // para tener los datos ordenados y no hacerlos en el html
  const items = [
    {
      pregunta: "¿Cuál es mi enfoque de diseño?",
      respuesta: "Me enfoco en crear experiencias visuales limpias, funcionales y con fuerte identidad estética, priorizando la claridad y la conexión con el usuario."
    },
    {
      pregunta: "¿Qué herramientas utilizo?",
      respuesta: "Trabajo principalmente con Figma para UI/UX, Adobe Illustrator y Photoshop para diseño gráfico, y After Effects para motion graphics y animación avanzada."
    },
    {
      pregunta: "¿Cuál es mi disponibilidad?",
      respuesta: "Actualmente me encuentro disponible para proyectos freelance, propuestas laborales o colaboraciones en el área de diseño y multimedial."
    }
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* recorro el array con el método .map para generar la estructura de cada ítem 
          de forma dinámica, pasándole un 'index' como identificador único (key) */}
      {items.map((item, index) => (
        <div key={index} className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          
          {/* con el evento onClick aplico la lógica de cierre/apertura: 
              si hago clic en el que ya está abierto, lo cierro (vuelve a null); 
              si está cerrado, guardo su 'index' para abrirlo */}
          <button
            onClick={() => setAbierto(abierto === index ? null : index)}
            className="w-full text-left p-4 md:p-5 font-black uppercase text-base md:text-lg flex justify-between items-center cursor-pointer hover:bg-[#f4ebf2] transition-colors"
          >
            <span>{item.pregunta}</span>
            {/* cambio el signo de '+' a '−' según el estado actual */}
            <span className="text-2xl font-black ml-2">{abierto === index ? "−" : "+"}</span>
          </button>
          
          {/* utilizo un renderizado condicional con && para mostrar el cuadro de respuesta 
              unicamente cuando el estado abierto coincide con el índice de este item */}
          {abierto === index && (
            <div className="p-4 md:p-5 border-t-[3px] border-black bg-[#fff] font-medium text-gray-800 text-base leading-relaxed">
              {item.respuesta}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}