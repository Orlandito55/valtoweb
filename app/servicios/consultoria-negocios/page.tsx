"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle, Target, Building, FileText, ArrowRight, Users, TrendingUp, Handshake } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import FloatingSocial from "@/components/FloatingSocial";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ConsultoriaNegocios() {
  const servicios = [
    "Asesoría contable, financiera, legal y tributaria. ",
    "Branding y Marketing digital.",
    "Constitución de empresas.",
    "Inscripción en Registros públicos.",
    "Plan económico y financiero de la Empresa.",
    "Plan de negocios.",
    "Registro de marca y patentes en Indecopi.",
    "Fusiones y adquisiciones."
  ];

  const fases = [
    {
      icon: FileText,
      titulo: "Creación y formación de la Empresa",
      descripcion: "Tener una Empresa es mucho más que comprar y vender, es generar una fuente de ingresos sostenible en el tiempo, que se anticipe a los cambios en el mercado y genere utilidades para reinvertirlas en el negocio. Hacer Empresa es un proyecto de vida que toma tiempo e inversión.s"
    },
    {
      icon: Target,
      titulo: "Fuentes de financiamiento del negocio",
      descripcion: "Al principio los negocios son creados con capital de los accionistas, luego de un periodo y si las cosas van por buen camino la empresa puede solicitar financiamiento externo. Este puede ser a corto y largo plazo, dependiendo mucho de qué tipo de inversión desea realizar y como va a generar los flujos para hacer frente a dicha inversión."
    },
    {
      icon: Building,
      titulo: "Proyecciones de crecimiento y reinversión de utilidades",
      descripcion: "El crecimiento de las ventas en un negocio está muy relacionado con la reinversión de utilidades. Cuando no existe reinversión, el negocio tendrá que solicitar crédito a terceros y este financiamiento viene de la mano con el costo de la deuda. Con nuestra consultoría te guiaremos en la optimización de capital y el conocimiento del financiamiento requerido externo para el negocio."
    },
    {
      icon: TrendingUp,
      titulo: "Nuevas líneas de negocio y proyectos de inversión",
      descripcion: "Crecer es parte de generar nuevas líneas de negocio en tu Empresa. Pero ¿Qué líneas de negocio generan valor para tu Empresa? Nuestra asesoría se enfoca en brindarte información sobre nuevos proyectos que generen utilidades y por ende, mayores beneficios económicos para la caja de tu Empresa. "
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
              <Handshake className="w-16 h-16 text-white" strokeWidth={1.5} />
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Consultoría de Negocios
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-50 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Tu aliado estratégico desde la creación hasta el crecimiento de tu empresa
            </p>

            <motion.a
              href="https://wa.me/51920000848?text=Hola,%20quiero%20solicitar%20una%20Consultoría%20de%20Negocios%20💸"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}              className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}
            >
              Iniciar mi Negocio
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
                De la Idea a la Empresa Exitosa
              </h2>
              <p className="text-lg text-justify mb-6" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
Hacer una Empresa va desde elegir el nombre o la razón social, ver los objetos sociales que más se acomodan a tu negocio, inscripción en Registros públicos, buscar el público objetivo, desarrollar las estrategias para obtener los resultados propuestos y todo lo que conlleva tener un negocio listo para empezar a generar ingresos económicos.            </p>
              <p className="text-lg text-justify mb-6" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
Con nuestra propuesta te llevamos, por cada una de estas etapas, de la mano de expertos que te guiarán y te mantendrán a buen recaudo, teniendo como objetivo principal tu salud financiera y el desarrollo de tus objetivos empresariales.              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageCarousel
                images={[
                  "https://blog.edutin.com/wp-content/uploads/2024/11/freepik__candid-image-photography-natural-textures-highly-r__16537-2-min.webp",
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
                  "https://www.corporacionlideres.com/wp-content/uploads/2023/03/arq-63d26e881b910-scaled.jpg"
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
                Nuestros servicios de consultoría de negocios incluyen: 

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

      {/* Fases */}
      <section className="py-20" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto px-8 sm:px-10 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Nuestro Proceso de Consultoría
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Un camino estructurado hacia el éxito empresarial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {fases.map((fase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 text-justify"
                style={{ borderColor: '#E5E7EB' }}
              >
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0047BB' }}>
                    <fase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                      {fase.titulo}
                    </h3>
                    <p style={{ color: '#6B7280', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.6' }}>
                      {fase.descripcion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0047BB 0%, #002677 100%)' }}>
        <div className="max-w-3xl mx-auto px-8 sm:px-10 lg:px-12 xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Comienza tu Empresa con el Pie Derecho
            </h2>
            <p className="text-xl text-blue-50 mb-8" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              No dejes al azar el futuro de tu negocio. Trabaja con expertos que han ayudado a decenas de empresas a establecerse y crecer exitosamente.
            </p>
            <motion.a
              href="https://wa.me/51920000848?text=Hola,%20quiero%20solicitar%20una%20Consultoría%20de%20Negocios%20💸"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}
            >
              Iniciar mi Negocio
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
