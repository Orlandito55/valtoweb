"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CreditCard, TrendingUp, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Lenis from '@studio-freight/lenis';

const services = [
  {
    icon: TrendingUp,
    title: "ASESORÍA FINANCIERA",
    description:
      "Tomar decisiones en base a los números que brinda tu empresa; proyectando los futuros ingresos y gastos, bajo distintos escenarios, es el camino correcto para generar valor en las inversiones que realizas. ",
    image: "/gallery/capacitacion1.png",
    features: [
    ],
    color: "from-[#002677] to-[#0047BB]",
    bgColor: "#E8F0FE",
    link: "/servicios/consultoria-financiera"
  },
  {
    icon: TrendingUp,
    title: "ASESORIA ACADÉMICA PARA ESTUDIANTES DE PRE Y POSTGRADO",
    description:
      "Llevar cursos de Contabilidad, Economía y Finanzas a nivel superior se ha convertido en el día a día de una gran cantidad de estudiantes de universidades e institutos, pero los alumnos carecen de una base sólida en estos temas, es por ello que implementamos nuestro servicio de asesoría académica con el cual podrás comprender de manera detallada, paso a paso los conceptos de estas materias y su respectiva aplicación en el mundo práctico. ",
    image: "/gallery/chosica.jpg",
    features: [
    ],
    color: "from-[#002677] to-[#0047BB]",
    bgColor: "#E8F0FE",
    link: "/servicios/consultoria-financiera"
  },
  {
    icon: CreditCard,
    title: "CAPACITACIÓN EMPRESARIAL",
    description:
      "Estamos convencidos que el éxito de una Empresa depende mucho del conocimiento adquirido por las personas que toman decisiones en el negocio. Es por ello que los instruimos y capacitamos con material teórico y práctico tomado de las mejores escuelas de negocios. ",
    image: "/gallery/image2.png",
    features: [
    ],
    color: "from-[#002677] to-[#0047BB]",
    bgColor: "#F0F4F8",
    link: "/servicios/consultoria-negocios"
  },
  {
    icon: GraduationCap,
    title: "CONSULTORÍA DE NEGOCIOS",
    description:
      "Hacer una Empresa va desde elegir el nombre o la razón social, ver los objetos sociales que más se acomodan a tu negocio, inscripción en Registros públicos, buscar el público objetivo, desarrollar las estrategias para obtener los resultados propuestos y todo lo que conlleva tener un negocio listo para empezar a generar ingresos económicos.",
    image: "/gallery/negocio.jpg",
    features: [
    ],
    color: "from-[#002677] to-[#0047BB]",
    bgColor: "#E8F0FE",
    link: "/servicios/capacitacion-empresarial"
  },
  {
    icon: GraduationCap,
    title: "FORMACIÓN DE EMPRENDEDORES Y EMPRESARIOS",
    description:
      "Ser Emprendedor es muy distinto a ser empresario. El emprendedor es aquella persona que tiene las ganas de hacer algo propio, algo diferente, pero esto no basta para tener éxito en el enmarañado mundo de los negocios. A ello es necesario sumarle conocimiento, habilidades financieras, planificación y diferentes soft skills que marcarán la diferencia en el ecosistema empresarial. ",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    features: [
    ],
    color: "from-[#002677] to-[#0047BB]",
    bgColor: "#F0F4F8",
    link: "/servicios/formacion-emprendedores"
  },
  
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  // Alternar layout: par a la izquierda, impar a la derecha
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        opacity, 
        y,
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}
      className="mb-0"
    >
      <div 
        className="grid md:grid-cols-2 min-h-[320px] md:min-h-[440px]"
        style={{ backgroundColor: service.bgColor }}
      >
        <div className={`relative overflow-hidden min-h-[240px] md:min-h-[440px] ${!isEven ? 'md:order-2' : ''}`}>
          <div className="absolute inset-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              style={service.image === "/gallery/chosica.jpg" ? { objectPosition: '00% center' } : {}}
            />
            <div className="absolute inset-0" style={{ 
              background: 'linear-gradient(135deg, rgba(0,38,119,0.7) 0%, rgba(0,71,187,0.5) 100%)'
            }} />
          </div>
        </div>

        {/* Contenido - Derecha en pares, izquierda en impares */}
        <div className={`flex flex-col justify-center p-5 md:p-6 lg:p-8 ${!isEven ? 'md:order-1' : ''}`}>
          <motion.h3 
            className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-5 uppercase"
            style={{ color: '#0047BB', fontFamily: 'Futura, Arial, sans-serif' }}
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {service.title}
          </motion.h3>

          <motion.p
            className="text-sm md:text-base lg:text-lg text-gray-700 mb-5 md:mb-6 leading-relaxed text-justify"
            style={{ fontFamily: 'Arial, sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {service.description}
          </motion.p>

          {/* Features List */}
          <motion.div
            className="space-y-2 mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start text-gray-700">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-[#0047BB] mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs md:text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>{feature}</span>
              </div>
            ))}
          </motion.div>

          <Link href={service.link}>
            <motion.button
              className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 rounded-full text-white font-bold text-sm md:text-base shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: '#0047BB', fontFamily: 'Futura, Arial, sans-serif' }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Más información
              <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  // Inicializar Lenis para smooth scrolling
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
    <section className="py-20 relative" style={{ background: '#F5F7FA' }} id="servicios">
      
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-[#0047BB]/10 text-[#0047BB] rounded-full text-sm font-bold" style={{ fontFamily: 'Futura, sans-serif' }}>
              Tu éxito es nuestra máxima prioridad
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-500 mb-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontFamily: 'Futura, sans-serif' }}
          >
            Nuestros <span className="font-bold text-white bg-[#0056D6] px-3 py-1 rounded-lg inline-block" style={{ fontFamily: 'Futura, sans-serif' }}>
                  Servicios
                </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Crecimiento y desarrollo con estrategias personalizadas
          </motion.p>
        </motion.div>

        {/* Services Stack - Cards horizontales con scroll */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA Button */}

      </div>
    </section>
  );
}
