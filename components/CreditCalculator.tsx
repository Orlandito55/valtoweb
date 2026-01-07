"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, TrendingUp, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CreditCalculator() {
  const [amount, setAmount] = useState("10,000");
  const [rate, setRate] = useState("15");
  const [months, setMonths] = useState("12");
  const [currency, setCurrency] = useState<"PEN" | "USD">("PEN");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
  } | null>(null);

  // Función para formatear número con separador de miles
  const formatNumber = (value: string): string => {
    // Remover todo excepto dígitos
    const numbers = value.replace(/\D/g, '');
    // Agregar separador de miles
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Función para obtener el valor numérico
  const getNumericValue = (value: string): number => {
    return parseFloat(value.replace(/,/g, '')) || 0;
  };

  // Función para formatear porcentaje
  const formatPercentage = (value: string): string => {
    // Remover todo excepto dígitos y punto decimal
    const cleaned = value.replace(/[^\d.]/g, '');
    // Limitar a un solo punto decimal
    const parts = cleaned.split('.');
    if (parts.length > 2) {
      return parts[0] + '.' + parts.slice(1).join('');
    }
    return cleaned;
  };

  const calculateCredit = () => {
    const P = getNumericValue(amount);
    const annualRate = parseFloat(rate.replace('%', ''));
    const n = parseInt(months);

    if (P <= 0 || annualRate <= 0 || n <= 0) return;

    // Convertir tasa anual efectiva a tasa mensual efectiva
    // Fórmula: i = (1 + r)^(1/12) - 1
    const i = Math.pow(1 + (annualRate / 100), 1 / 12) - 1;

    // Fórmula de cuota francesa
    const monthlyPayment = P * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - P;

    setResult({
      monthlyPayment,
      totalPayment,
      totalInterest,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(currency === "PEN" ? "es-PE" : "en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 71, 187, 0.1)' }}>
            <Calculator className="w-8 h-8" style={{ color: '#0047BB' }} />
          </div>

          <h1>
            <span className="px-4 py-2 bg-[#0047BB]/10 text-[#0047BB] rounded-full text-sm font-bold" style={{ fontFamily: 'Futura, sans-serif' }}>
             Calculadora de Créditos
            </span>
          </h1>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-500 mb-4 mt-6">
            ¿Buscas financiamiento para tu <span className="font-bold text-white bg-[#0056D6] px-3 py-1 rounded-lg inline-block" style={{ fontFamily: 'Futura, sans-serif' }}>
                  Empresa?
                </span>
          </h2>
                                       
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Ingresa el importe de tu crédito, la tasa de interés efectiva y el periodo de pago para obtener la cuota exacta de tu financiamiento.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Form */}
            <div className="p-8 md:p-10" style={{ background: 'linear-gradient(to bottom right, #0047BB, #1d4ed8)' }}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Datos del Crédito
              </h3>

              {/* Selector de Moneda */}
              <div className="mb-6">
                <label className="flex items-center text-white mb-2 text-sm font-medium">
                  <span className="w-4 h-4 mr-2 flex items-center justify-center font-bold">
                    {currency === "PEN" ? "S/" : "$"}
                  </span>
                  Moneda
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCurrency("PEN")}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                      currency === "PEN"
                        ? "bg-white text-[#0047BB] shadow-lg"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    S/ Soles
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency("USD")}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                      currency === "USD"
                        ? "bg-white text-[#0047BB] shadow-lg"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    $ Dólares
                  </button>
                </div>
              </div>

              {/* Monto del Préstamo */}
              <div className="mb-6">
                <label className="flex items-center text-white mb-2 text-sm font-medium">
                  <span className="w-4 h-4 mr-2 flex items-center justify-center font-bold">
                    {currency === "PEN" ? "S/" : "$"}
                  </span>
                  Monto del Préstamo
                </label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(formatNumber(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  placeholder="10,000"
                />
                <div className="mt-2 text-white/70 text-sm">
                  {formatCurrency(getNumericValue(amount))}
                </div>
              </div>

              {/* Tasa de Interés */}
              <div className="mb-6">
                <label className="flex items-center text-white mb-2 text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Tasa de Interés Efectiva (%)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={rate + '%'}
                    onChange={(e) => setRate(formatPercentage(e.target.value.replace('%', '')))}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    placeholder="15%"
                  />
                </div>
                <div className="mt-2 text-white/70 text-sm">{rate}% Efectiva</div>
              </div>

              {/* Plazo */}
              <div className="mb-8">
                <label className="flex items-center text-white mb-2 text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-2" />
                  Plazo del Crédito
                </label>
                <input
                  type="number"
                  value={months}
                  onChange={(e) => setMonths(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  placeholder="12"
                />
                <div className="mt-2 text-white/70 text-sm">
                  {months} {parseInt(months) === 1 ? "Periodo" : "Periodos"}
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateCredit}
                className="w-full bg-white text-valto-blue font-bold py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Calcular Cuota
              </button>
            </div>

            {/* Right Side - Results */}
            <div className="p-8 md:p-10 bg-white border-l-4 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Resultado
              </h3>

              {result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Monthly Payment */}
                  <div className="rounded-xl p-6 mb-6 text-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #0047BB, #1d4ed8)' }}>
                    <p className="text-white/80 text-sm mb-2 font-medium">
                      Cuota Mensual
                    </p>
                    <p className="text-4xl md:text-5xl font-bold text-white">
                      {formatCurrency(result.monthlyPayment)}
                    </p>
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-5 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-semibold text-base">
                          Total a Pagar
                        </span>
                        <span className="text-2xl font-bold text-gray-500">
                          {formatCurrency(result.totalPayment)}
                        </span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-white rounded-lg p-5 border-2 border-orange-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-semibold text-base">
                          Total Intereses
                        </span>
                        <span className="text-2xl font-bold text-orange-600">
                          {formatCurrency(result.totalInterest)}
                        </span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-white rounded-lg p-5 border-2 border-green-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-semibold text-base">
                          Capital Prestado
                        </span>
                        <span className="text-2xl font-bold text-green-600">
                          {formatCurrency(getNumericValue(amount))}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <a
                      href="#contacto"
                      className="block w-full text-white text-center font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                      style={{ backgroundColor: '#0047BB' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003088'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0047BB'}
                    >
                      Solicitar Asesoría
                    </a>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <Calculator className="w-20 h-20 text-gray-300 mb-4" />
                  <p className="text-gray-400 text-lg">
                    Ingresa los datos y presiona
                  </p>
                  <p className="text-gray-400 text-lg font-bold">
                    "Calcular Cuota"
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
