"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Zap, Users, BookOpen, Award, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Lenis from '@studio-freight/lenis';

const differentiators = [
  {
    icon: Shield,
    title: "Claridad",
    description: "Transparencia total en servicios y costos.",
    leftDescription: "Establecemos con total <span class='font-bold text-[#0047BB]'>claridad y transparencia</span> los servicios de asesoría o consultoría que se proporcionará y el costo de dichos servicios, en base a las horas de trabajo. Al final de la asesoría se entrega un informe detallado con todo lo realizado y las alternativas de solución más viables para la Empresa.",
    features: [
      "Servicios y costos claros",
      "Informes detallados",
      "Alternativas de solución viables"
    ],
    color: "#0047BB",
  },
  {
    icon: Zap,
    title: "Competencia",
    description: "Profesionales expertos volcados en tu éxito.",
    leftDescription: "Contamos con un equipo de <span class='font-bold text-[#0047BB]'>profesionales competentes</span> para la asesoría, consultoría y capacitación empresarial dispuestos a volcar toda su experiencia y conocimiento para la consecución de los objetivos financieros de nuestros clientes.",
    features: [
      "Equipo profesional competente",
      "Amplia experiencia",
      "Enfoque en objetivos financieros"
    ],
    color: "#0047BB",
  },
  {
    icon: Users,
    title: "Diligencia",
    description: "Investigación incisiva y objetivos claros.",
    leftDescription: "Realizamos una <span class='font-bold text-[#0047BB]'>investigación incisiva</span> a los documentos entregados por el cliente para la ejecución de la asesoría. En base a ello explicamos los objetivos que se espera alcanzar con nuestra consultoría y que impacto tendrán nuestras recomendaciones y sugerencias en la operatividad de la Empresa bajo estos nuevos escenarios.",
    features: [
      "Análisis exhaustivo",
      "Objetivos claros",
      "Impacto medible"
    ],
    color: "#0047BB",
  },
  {
    icon: BookOpen,
    title: "Integridad",
    description: "Seriedad, responsabilidad y comunicación efectiva.",
    leftDescription: "Tomamos con total <span class='font-bold text-[#0047BB]'>seriedad y responsabilidad</span> las labores de consultoría que realizaremos basando todo el proceso en una comunicación efectiva, honesta y profesional, incorporando principios éticos para la consecución de los objetivos en la asesoría.",
    features: [
      "Comunicación efectiva",
      "Principios éticos",
      "Profesionalismo total"
    ],
    color: "#0047BB",
  },
  {
    icon: Award,
    title: "Objetividad",
    description: "Las necesidades del cliente en el centro.",
    leftDescription: "Las necesidades del cliente están en el <span class='font-bold text-[#0047BB]'>centro de nuestras consultorías</span>, para ello, en una reunión inicial, fijamos los objetivos y cuantificamos los resultados esperados. Todo en base a la situación real y cuidando pecar de optimistas al momento de desarrollar las proyecciones futuras.",
    features: [
      "Enfoque en necesidades reales",
      "Objetivos cuantificables",
      "Proyecciones realistas"
    ],
    color: "#0047BB",
  },
  {
    icon: HeartHandshake,
    title: "Privacidad",
    description: "Tu información bajo estricta confidencialidad.",
    leftDescription: "Tomamos toda la información financiera y empresarial como uno de nuestros <span class='font-bold text-[#0047BB]'>secretos mejor guardados</span>, manteniendo todo en estricta confidencialidad, pudiendo, en algún momento, utilizarlos para negociaciones en su representación y bajo consentimiento del cliente.",
    features: [
      "Confidencialidad absoluta",
      "Información protegida",
      "Consentimiento del cliente"
    ],
    color: "#0047BB",
  },
];

export default function ValueProposition() {
  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 50%, #FFFFFF 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(0, 71, 187, 0.05)' }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(99, 102, 241, 0.05)' }}
        />
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-block mb-4"
          >
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold text-gray-900 mb-6 font-futura-lux">
            <span style={{ color: '#0047BB ' }}>¿Por que confiar en</span> <span className="font-bold text-white bg-[#0056D6] px-4 py-2 rounded-lg inline-block" style={{ fontFamily: 'Futura, sans-serif' }}>
                  NOSOTROS?
                </span>
          </h2>
          <p className="text-xl text-justify md:text-xl text-gray-600 max-w-4xl mx-auto font-futura-book">
            Contamos con una experiencia de más de nueve (09) años en el campo empresarial y hemos 
            sido testigos de situaciones difíciles a nivel mundial como el Covid 2019, en base a ello, 
            ofrecemos soluciones en asesoría, consultoría y capacitación que permitirán a tu negocio a seguir
            operando bajo distintos escenarios.
          </p>
        </motion.div>

        {/* Differentiators Grid - Estilo de la imagen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-16 items-stretch">
          {differentiators.map((item, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardRef = useRef<HTMLDivElement>(null);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { scrollYProgress } = useScroll({
              target: cardRef,
              offset: ["start 0.9", "end 0.1"]
            });

            // Alternamos entre izquierda y derecha según el índice
            const isLeft = index % 2 === 0;
            // Para desktop: parallax horizontal - se acercan más al centro
            const xDesktop = useTransform(scrollYProgress, [0, 1], [isLeft ? -120 : 120, isLeft ? 30 : -30]);
            // Para móvil: fade in desde abajo
            const yMobile = useTransform(scrollYProgress, [0, 1], [50, 0]);
            const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
            
            return (
              <motion.div
                key={index}
                ref={cardRef}
                className="group w-full h-full flex"
              >
                {/* Desktop wrapper - con parallax horizontal */}
                <motion.div
                  style={{ 
                    x: xDesktop,
                    opacity 
                  }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="hidden md:block w-full"
                >
                  <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full bg-white min-h-[400px]">
                    <div className="grid grid-cols-2 h-full">
                      {/* Left side - White background */}
                      <div className="p-6 lg:p-8 bg-white flex flex-col justify-between min-h-full">
                        <p className="text-gray-700 text-sm lg:text-base mb-4 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: item.leftDescription }} />
                        
                        {/* Features list */}
                        <div className="space-y-2">
                          {item.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-3">
                              <div className="w-6 h-6 rounded-full bg-[#0047BB] flex items-center justify-center flex-shrink-0">
                                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-700 text-xs lg:text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right side - Blue VALTO background with gradient */}
                      <div className="p-6 lg:p-8 bg-gradient-to-br from-[#002677] to-[#0047BB] flex flex-col justify-center items-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 bg-white/10 backdrop-blur-sm"
                        >
                          <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                        </motion.div>
                        
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 text-center" style={{ fontFamily: 'Futura, sans-serif' }}>
                          {item.title}
                        </h3>
                        
                        <p className="text-white/90 text-sm lg:text-base leading-relaxed text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile wrapper - con fade desde abajo */}
                <motion.div
                  style={{ 
                    y: yMobile,
                    opacity 
                  }}
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                  className="block md:hidden"
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full bg-white">
                    <div className="grid grid-cols-1">
                      {/* Left side - White background */}
                      <div className="p-5 bg-white">
                        <p className="text-gray-700 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: item.leftDescription }} />
                        
                        {/* Features list */}
                        <div className="space-y-2">
                          {item.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-5 h-5 rounded-full bg-[#0047BB] flex items-center justify-center flex-shrink-0">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-700 text-xs font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right side - Blue VALTO background with gradient */}
                      <div className="p-5 bg-gradient-to-br from-[#002677] to-[#0047BB] flex flex-col justify-center">
                        <motion.div
                          className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-white/10 backdrop-blur-sm mx-auto"
                        >
                          <item.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 text-center" style={{ fontFamily: 'Futura, sans-serif' }}>
                          {item.title}
                        </h3>
                        
                        <p className="text-white/90 text-sm leading-relaxed text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
