"use client";

import { motion } from "framer-motion";
import { GraduationCap, CheckCircle, BookOpen, FileText, Calculator, ArrowRight, Award, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import FloatingSocial from "@/components/FloatingSocial";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AsesoriaAcademica() {
  const servicios = [
    "Contabilidad general.",
    "Contabilidad financiera.",
    "Costos y presupuestos.",
    "Derivados financieros.",
    "Evaluación de proyectos de inversión.",
    "Finanzas corporativas.",
    "Gestión financiera.",
    "Ingeniería económica.",
    "Instrumentos financieros.",
    "Inversiones.",
    "Planificación financiera.",
    "Renta fija y renta variable.",
    "Valorización de empresas."
  ];

  const areas = [
    {
      icon: BookOpen,
      titulo: "Contabilidad",
      descripcion: "Comprende desde lo básico hasta temas avanzados de contabilidad general y financiera"
    },
    {
      icon: Calculator,
      titulo: "Finanzas",
      descripcion: "Domina conceptos de finanzas corporativas, inversiones y valorización de empresas"
    },
    {
      icon: FileText,
      titulo: "Costos y Presupuestos",
      descripcion: "Aprende gestión de costos, presupuestos y evaluación de proyectos de inversión"
    },
    {
      icon: Award,
      titulo: "Instrumentos Financieros",
      descripcion: "Conoce derivados financieros, renta fija, renta variable y más"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <Image src="/iconos/icono22.png" alt="Asesoría Académica" width={150} height={150} className="opacity-90" />
            </motion.div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Asesoría académica para estudiantes de pre y postgrado
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Domina Contabilidad, Economía y Finanzas con apoyo personalizado
            </p>

            <motion.a
              href="https://wa.me/51920000848?text=Hola,%20quisiera%20información%20sobre%20Asesoría%20Académica"
              target="_blank"
              rel="noopener noreferrer"
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

      {/* Descripción con Carrusel */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                Domina Contabilidad, Economía y Finanzas
              </h2>
              <p className="text-lg text-justify mb-6 text-justify" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
                Llevar cursos de Contabilidad, Economía y Finanzas a nivel superior se ha convertido en el día a día de una gran cantidad de estudiantes de universidades e institutos, pero los alumnos carecen de una base sólida en estos temas, es por ello que implementamos nuestro servicio de asesoría académica con el cual podrás comprender de manera detallada, paso a paso los conceptos de estas materias y su respectiva aplicación en el mundo práctico.
              </p>
              <p className="text-lg text-justify mb-6 text-justify" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
                Tendrás acceso a nuestro centro de aprendizaje con videos tutoriales prácticos sobre los temas que requieran tu atención.
              </p>
              <div className="flex items-center p-6 rounded-xl" style={{ backgroundColor: '#0047BB10' }}>
                <Users className="w-12 h-12 mr-4" style={{ color: '#0047BB' }} />
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                    Atención Personalizada
                  </h3>
                  <p style={{ color: '#6B7280', fontFamily: 'Arial' }}>
                    Asesoría uno a uno adaptada a tu nivel
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
                  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
                  "/gallery/chosica.jpg",
                  "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200&q=80"
                ]}
                imagePositions={[
                  "center",
                  "left center",
                  "center"
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
                Nuestros servicios de asesoría académica incluyen:
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Áreas de Especialización
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Cobertura completa de materias financieras y contables
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Alcanza la Excelencia Académica
            </h2>
            <p className="text-xl text-blue-100 mb-8" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              No dejes que las dudas frenen tu progreso académico. Trabaja con especialistas que entienden los desafíos de estudiantes como tú y pueden ayudarte a dominar estos conceptos paso a paso.
            </p>
            <motion.a
              href="https://wa.me/51920000848?text=Hola,%20necesito%20asesoría%20académica"
              target="_blank"
              rel="noopener noreferrer"
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
