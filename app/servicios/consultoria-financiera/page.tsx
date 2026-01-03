"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, PieChart, BarChart3, Calculator, ArrowRight, DollarSign, LineChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import FloatingSocial from "@/components/FloatingSocial";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ConsultoriaFinanciera() {
  const servicios = [
    "Plan de inversiones.",
    "Plan de financiamiento y estructuración de capital.",
    "Flujo de caja libre para la firma",
    "Flujo de caja libre para el accionista.",
    "Evaluación por medio de indicadores financieros.",
    "Análisis de sensibilidad y de escenarios bajo probabilidades de ocurrencia. ",
    "Planificación financiera.",
    "Portafolio de inversiones.",
    "Valorización de activos financieros.",

  ];

  const areas = [
    {
      icon: DollarSign,
      titulo: "Finanzas corporativas",
      descripcion: "Las finanzas corporativas permiten a las empresas crecer de manera sostenible mediante decisiones financieras inteligentes."
    },
    {
      icon: Calculator,
      titulo: "Gestión Financiera",
      descripcion: "La gestión financiera asegura el uso eficiente de los recursos económicos para cumplir los objetivos de la organización en el corto y largo plazo."
    },
    {
      icon: LineChart,
      titulo: "Valuación de inversiones",
      descripcion: "Mide el valor actual de tus inversiones por medio de tecnicas financieras aplicadas en el mundo empresarial."
    },
    {
      icon: BarChart3,
      titulo: "M&A - Mergers and Acquisitions",
      descripcion: "El M&A permite a las empresas aumentar su valor mediante sinergias operativas y financieras, para ello requieren una valuación precisa y una gestión adecuada del riesgo."
    }
  ];

  return (
    <>
      <Navbar />
      <FloatingSocial />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0047BB 0%, #002677 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-3xl mx-auto px-8 sm:px-10 lg:px-12 xl:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-8"
              style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}
            >
              <Image src="/iconos/icono11.png" alt="Asesoría Académica" width={150} height={150} className="opacity-90" />
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Asesoría Financiera
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Toma decisiones financieras estratégicas para el crecimiento sostenible de tus inversiones
            </p>

            <motion.a
              href="https://wa.me/51920000848?text=Hola%20%F0%9F%91%8B%2C%20quisiera%20solicitar%20una%20Asesoría%20Financiera%20%F0%9F%92%B0%F0%9F%93%88%F0%9F%92%BC"
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}
            >
              Solicitar Asesoría
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Descripción con Carrusel */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-5xl mx-auto px-8 sm:px-10 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                Las Finanzas: El Corazón de tu Empresa
              </h2>
              <p className="text-lg mb-6 text-justify" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
                 Tomar decisiones en base a los números que brinda tu empresa; proyectando los futuros ingresos y gastos, bajo distintos escenarios, es el camino correcto para generar valor en las inversiones que realizas.
              </p>
              <p className="text-lg mb-6 text-justify" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
                Con nuestra asesoría; tus decisiones de inversión y de financiamiento tienen una base sólida en principios como el Valor del dinero en el tiempo y otros postulados de la Economía moderna que mantienen tus finanzas a buen recaudo, siempre tomando en cuenta la relación entre el riesgo y rendimiento que estás dispuesto a aceptar en la industria en la que actualmente te encuentras.
              </p>
              <div className="flex items-center p-6 rounded-xl" style={{ backgroundColor: '#0047BB10' }}>
                <PieChart className="w-12 h-12 mr-4" style={{ color: '#0047BB' }} />
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                    Diagnóstico Financiero
                  </h3>
                  <p style={{ color: '#6B7280', fontFamily: 'Arial' }}>
                    Análisis integral en base a tus estados financieros.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageCarousel
                images={[
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
                  "/gallery/capacitacion1.png",
                  "https://gerens.pe/blog/wp-content/uploads/2016/04/consultor-financiero.jpg"
                ]}
                autoPlay={true}
                interval={5000}
              />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                Nuestros servicios de Asesoría financiera incluyen:
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {servicios.map((servicio, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#0047BB' }} />
                    <span style={{ color: '#374151', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      {servicio}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section className="py-20" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto px-8 sm:px-10 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Áreas de Especialización
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Soluciones financieras para cada aspecto de tu empresa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 text-justify">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2"
                style={{ borderColor: '#E5E7EB' }}
              >
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0047BB' }}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                      {area.titulo}
                    </h3>
                    <p style={{ color: '#6B7280', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.6' }}>
                      {area.descripcion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #002677 0%, #0047BB 100%)' }}>
        <div className="max-w-3xl mx-auto px-8 sm:px-10 lg:px-12 xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Toma el Control de tus Finanzas
            </h2>
            <p className="text-xl text-blue-100 mb-8" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Trabaja con especialistas que entienden el valor del dinero en el tiempo y su implicancia en las finanzas empresariales de tu empresa.
            </p>
            <motion.a
              href="https://wa.me/51920000848?text=Hola%20%F0%9F%91%8B%2C%20quisiera%20solicitar%20una%20Asesoría%20Financiera%20%F0%9F%92%B0%F0%9F%93%88%F0%9F%92%BC"
              target="_blank"
              rel="noopener noreferrer"
             animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}
            >
              Solicitar Asesoría
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
