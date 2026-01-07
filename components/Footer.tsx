"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white" style={{ 
      backgroundColor: '#002677',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div className="max-w-5xl mx-auto px-8 sm:px-10 lg:px-12 xl:px-16 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {/* Brand */}
          <div>
            <div className="mb-2">
              <img 
                src="/logo222.png" 
                alt="VALTO Management Consulting" 
                className="h-16 md:h-22 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 text-sm">
              Construyendo valor para tus inversiones.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold mb-2">Servicios</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/servicios/consultoria-financiera" className="text-white/80 hover:text-white transition-colors">
                  Asesoría Financiera
                </Link>
              </li>
              <li>
                <Link href="/servicios/asesoria-academica-universitaria" className="text-white/80 hover:text-white transition-colors">
                  Asesoría Académica Universitaria
                </Link>
              </li>
              <li>
                <Link href="/servicios/capacitacion-empresarial" className="text-white/80 hover:text-white transition-colors">
                  Capacitación Empresarial
                </Link>
              </li>
              <li>
                <Link href="/servicios/consultoria-negocios" className="text-white/80 hover:text-white transition-colors">
                  Consultoría de Negocios
                </Link>
              </li>
              <li>
                <Link href="/servicios/formacion-emprendedores" className="text-white/80 hover:text-white transition-colors">
                  Formación de emprendedores y empresarios
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/terminos-y-condiciones" className="text-white/80 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidad" className="text-white/80 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/libro-de-reclamaciones" className="text-white/80 hover:text-white transition-colors">
                  Libro de Reclamaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-2">Contacto</h3>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-center text-white/80">
                <Phone className="w-4 h-4 mr-2" />
                +51 920 000 848
              </li>
              <li className="flex items-center text-white/80">
                <Mail className="w-4 h-4 mr-2" />
                glatorre@valto.com.pe
              </li>
              <li className="flex items-start text-white/80">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                Lima – Perú.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
          <p>© 2026 VALTO Management Consulting. Todos los derechos reservados.</p>
                          <div className="flex items-center">
                  <ShieldCheck className="w-4 h-6 mr-3" />
                  <span className="text-sm">Marca registrada en Indecopi.</span>
                </div>
          <p>
            Diseñado por{' '}
            <a 
              href="https://www.facebook.com/moderstudioo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors font-semibold"
            >
              ModerStudio
            </a>
            {''}💙
          </p>
        </div>
      </div>
    </footer>
  );
}
