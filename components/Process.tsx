"use client";

import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Contacto Inicial",
    description: "Solicitar una asesoría para que Valto conozca tu consulta, tus necesidades y que aporte de valor esperas recibir de nuestro equipo de trabajo.",
  },
  {
    number: "02",
    title: "Evaluación",
    description: "Diagnostico y análisis detallado de los puntos a tener en cuenta para proceder a realizar la asesoría y los tiempos que tomara la misma.",
  },
  {
    number: "03",
    title: "Propuesta",
    description: "Presentación de la propuesta de Valor teniendo en cuenta las estrategias y la manera adecuada de implementar las soluciones adaptadas a las necesidades específicas del cliente.ades específicas.",
  },
  {
    number: "04",
    title: "Implementación",
    description: "Puesta en marcha del plan de trabajo y acompañamiento continuo en todo el proceso de materialización de la asesoría desarrollada",
  },
    {
    number: "05",
    title: "Informe final",
    description: "Cuantificación de los resultados obtenidos luego de llevar a cabo la asesoría y especificaciones para futuras consultorías y capacitaciones.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  console.log('hoveredStep:', hoveredStep);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f8fafc 100%)'
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,71,187,0.1) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,86,214,0.1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
                      <span className="px-4 py-2 bg-[#0047BB]/10 text-[#0047BB] rounded-full text-sm font-bold" style={{ fontFamily: 'Futura, sans-serif' }}>
              Tu éxito es nuestra máxima prioridad
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-500 mb-4 mt-6">
            ¿Como nosotros <span className="font-bold text-white bg-[#0056D6] px-3 py-1 rounded-lg inline-block" style={{ fontFamily: 'Futura, sans-serif' }}>
                  Trabajamos?
                </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
            Un proceso simple y efectivo para impulsar tu negocio
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Connecting line - Desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-2">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30 rounded-full" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#002677] via-[#0047BB] to-[#0056D6] rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
          </div>

          {/* Steps Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 ">
              {steps.slice(0, 3).map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + (index * 0.2),
                  type: "spring",
                  stiffness: 100
                }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className="relative"
              >
                {/* Card */}
                <motion.div
                  className={`relative bg-white rounded-2xl p-6 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 border-[3px] border-solid h-[400px] flex flex-col ${
                    hoveredStep === index ? 'border-[#0047BB]' : 'border-transparent'
                  }`}
                  style={{ zIndex: 1 }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.03,
                    boxShadow: "0 25px 50px rgba(0,71,187,0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-0"
                    animate={{
                      opacity: hoveredStep === index ? 0.05 : 0
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #0047BB 0%, #0056D6 100%)'
                    }}
                  />

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <div className="absolute top-0 right-0 w-full h-full bg-[#0047BB] rounded-bl-full" />
                  </div>

                  {/* Number Badge */}
                  <motion.div
                    className="relative z-10 mb-4"
                    animate={{
                      scale: hoveredStep === index ? 1.1 : 1,
                      rotate: hoveredStep === index ? [0, -5, 5, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#002677] via-[#0047BB] to-[#0056D6] rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: hoveredStep === index ? ['-100%', '200%'] : '-100%'
                        }}
                        transition={{
                          duration: 1,
                          repeat: hoveredStep === index ? Infinity : 0,
                          repeatDelay: 0.5
                        }}
                      />
                      
                      <span className="text-3xl font-black text-white relative z-10" style={{ fontFamily: 'Futura, sans-serif' }}>
                        {step.number}
                      </span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold text-center mb-3 relative z-10"
                    style={{ 
                      fontFamily: 'Futura, sans-serif',
                      color: hoveredStep === index ? '#0047BB' : '#002677'
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-gray-600 text-justify leading-relaxed mb-4 relative z-10 flex-1"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  >
                    {step.description}
                  </p>

                  {/* Check Icon */}
                  <motion.div 
                    className="flex justify-center relative z-10"
                    animate={{
                      scale: hoveredStep === index ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0047BB] to-[#002677] rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={3} />
                    </div>
                  </motion.div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-[#0047BB] to-[#0056D6] rounded-3xl opacity-0 blur-xl"
                    animate={{
                      opacity: hoveredStep === index ? 0.3 : 0
                    }}
                    style={{ zIndex: -1 }}
                  />
                </motion.div>

                {/* Connecting Arrow - Mobile */}
                {index < 2 && (
                  <div className="lg:hidden flex justify-center py-6">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 + (index * 0.2) }}
                    >
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path 
                          d="M20 10 L20 30 M15 25 L20 30 L25 25" 
                          stroke="#0047BB" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
            </div>

            {/* Segunda fila con 2 tarjetas centradas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-6 mt-8 lg:mt-6 max-w-2xl mx-auto">
              {steps.slice(3, 5).map((step, index) => {
                const actualIndex = index + 3;
                return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + (actualIndex * 0.2),
                  type: "spring",
                  stiffness: 100
                }}
                onMouseEnter={() => setHoveredStep(actualIndex)}
                onMouseLeave={() => setHoveredStep(null)}
                className="relative"
              >
                {/* Card */}
                <motion.div
                  className={`relative bg-white rounded-2xl p-6 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 border-[3px] border-solid h-[400px] flex flex-col ${
                    hoveredStep === actualIndex ? 'border-[#0047BB]' : 'border-transparent'
                  }`}
                  style={{ zIndex: 1 }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.03,
                    boxShadow: "0 25px 50px rgba(0,71,187,0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-0"
                    animate={{
                      opacity: hoveredStep === actualIndex ? 0.05 : 0
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #0047BB 0%, #0056D6 100%)'
                    }}
                  />

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <div className="absolute top-0 right-0 w-full h-full bg-[#0047BB] rounded-bl-full" />
                  </div>

                  {/* Number Badge */}
                  <motion.div
                    className="relative z-10 mb-4"
                    animate={{
                      scale: hoveredStep === index ? 1.1 : 1,
                      rotate: hoveredStep === index ? [0, -5, 5, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#002677] via-[#0047BB] to-[#0056D6] rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: hoveredStep === index ? ['-100%', '200%'] : '-100%'
                        }}
                        transition={{
                          duration: 1,
                          repeat: hoveredStep === index ? Infinity : 0,
                          repeatDelay: 0.5
                        }}
                      />
                      
                      <span className="text-3xl font-black text-white relative z-10" style={{ fontFamily: 'Futura, sans-serif' }}>
                        {step.number}
                      </span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold text-center mb-3 relative z-10"
                    style={{ 
                      fontFamily: 'Futura, sans-serif',
                      color: hoveredStep === index ? '#0047BB' : '#002677'
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-gray-600 text-justify leading-relaxed mb-4 relative z-10 flex-1"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  >
                    {step.description}
                  </p>

                  {/* Check Icon */}
                  <motion.div 
                    className="flex justify-center relative z-10"
                    animate={{
                      scale: hoveredStep === index ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0047BB] to-[#002677] rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={3} />
                    </div>
                  </motion.div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-[#0047BB] to-[#0056D6] rounded-3xl opacity-0 blur-xl"
                    animate={{
                      opacity: hoveredStep === actualIndex ? 0.3 : 0
                    }}
                    style={{ zIndex: -1 }}
                  />
                </motion.div>

                {/* Connecting Arrow - Mobile */}
                {index < 1 && (
                  <div className="lg:hidden flex justify-center py-6">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 + (actualIndex * 0.2) }}
                    >
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path 
                          d="M20 10 L20 30 M15 25 L20 30 L25 25" 
                          stroke="#0047BB" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
              );
            })}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/agendar-cita"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#002677] via-[#0047BB] to-[#0056D6] text-white text-lg font-bold rounded-full shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,71,187,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>¡Comienza Ahora!</span>
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              animate={{
                x: [0, 5, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
