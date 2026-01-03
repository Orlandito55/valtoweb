"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Realizan valorizaciones de empresas?",
    answer: "Asi es. En Valto ofrecemos servicios de valorización de empresas bajo diferentes metodologías como: Flujos de caja libre, Múltiplos de empresas comparables que cotizan en Bolsa, valor contable y valor de liquidación. Nos enfocamos en modelos financieros que permiten obtener los valores de mercado de las inversiones realizadas por los accionistas y dueños de la Empresa.  Participamos en las negociaciones de compra y venta de empresas brindando el soporte necesario para la valorización de activos, procesos de Due Diligence y Mergers and Acquisitions.",
  },
  {
    question: "¿Desarrollan proyectos de inversión? ",
    answer: "Si. Contamos con personal altamente cualificado en temas de finanzas y evaluación de proyectos que desarrollarán paso a paso la estimación de flujos de caja en base al plan de inversión, plan económico y el plan financiero, teniendo en cuenta el grado de apalancamiento y la estructura optima de capital para generar valor. Los proyectos de inversión que realizamos son medidos y cuantificados por medio de indicadores financieros como el VAN, la TIR o el IR que demostraran si es aceptable o no la inversión en dicha propuesta empresarial.",
  },
  {
    question: "¿Qué necesito para formalizar mi negocio? ",
    answer: "Lo primero es crear la Empresa e inscribirla en SUNARP en base a una minuta de constitución, determinar el capital aportado por los socios o accionistas y generar el RUC para que empiece a operar en el mercado. Adicional a ello es recomendable revisar los aspectos legales, tributarios, contables, laborales y financieros en los que estará inmersa con el fin de tener una política empresarial definida. Tener en cuenta que ahora las empresas se mueven en entornos digitales, es por ello que recomendamos la presencia en redes sociales y canales de marketing moderno, eso ayudará a formar una comunidad que se convertirá en clientes a futuro.",
  },
  {
    question: "¿Conviene invertir en renta fija o variable? ",
    answer: "Depende mucho del perfil de riesgo que tenga el inversor. Si es una persona con aversión al riesgo o teme invertir por la volatilidad del mercado es recomendable invertir en Renta fija ya que asegura un flujo periódico de efectivo estimado por medio de un contrato legal. En cambio, si es una persona que acepta el riesgo y está dispuesto a obtener mayores beneficios, lo recomendable es mantener inversiones en renta variable. Como su propio nombre lo indica, puede generar flujos de dinero expectantes y de manera variable dependiendo mucho de factores de la economía y de la industria donde se desarrolla.",
  },
  {
    question: "¿Cómo debería financiar la operación de mi negocio?",
    answer: "El crédito financiero es bueno, hasta cierto punto, lo mejor es encontrar una estructura optima de capital compuesta por capital propio y capital de terceros o financiado que permitirá un equilibrio al momento de generar los flujos de caja para la empresa y el accionista. Es necesario recordar que cada uno de estos fondos tiene un coste de capital y la empresa debe cubrir estos costos y generar valor para la Empresa en base al efectivo generado por el negocio.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 71, 187, 0.1)' }}>
            <HelpCircle className="w-8 h-8" style={{ color: '#0047BB' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#9DA5B3] mb-4">
            Preguntas <span className="font-bold text-white bg-[#0056D6] px-2 sm:px-3 py-1 rounded-lg inline-block" style={{ fontFamily: 'Futura, sans-serif' }}>
                  Frecuentes
                </span>
          </h2>
          <p className="text-xl text-[#002677] max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios y procesos
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-gray-50 hover:bg-gray-100 rounded-xl p-6 transition-colors duration-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#0047BB] pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6" style={{ color: '#0047BB' }} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">¿Deseas mayor información sobre estas preguntas o tienes otras preguntas para nosotros? Estamos para ayudarte.</p>
          <a
            href="https://wa.me/51920000848?text=Hola%20%F0%9F%91%8B%2C%20quisiera%20información%20sobre%20su%20servicio%20%F0%9F%93%8A%F0%9F%92%BC"
            className="inline-block px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{ backgroundColor: '#0047BB' }}
          >
            Contáctanos Directamente
          </a>        </motion.div>
      </div>
    </section>
  );
}
