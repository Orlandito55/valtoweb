"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, DollarSign, RefreshCw, ArrowLeft, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface ExchangeRate {
  compra: number;
  venta: number;
  fecha: string;
}

export default function TipoCambioPage() {
  const [exchangeRate, setExchangeRate] = useState<ExchangeRate | null>(null);
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState<ExchangeRate[]>([]);
  
  // Estados para la calculadora de conversión
  const [conversionType, setConversionType] = useState<'USD_TO_PEN' | 'PEN_TO_USD'>('USD_TO_PEN');
  const [amountToConvert, setAmountToConvert] = useState('100');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  
  // Estado para filtro de tiempo del gráfico
  const [timeFilter, setTimeFilter] = useState<'1D' | '1W' | '1M' | '3M' | '6M' | '1Y'>('1M');

  const fetchExchangeRate = async () => {
    setLoading(true);
    try {
      // Usar nuestra API route con el período seleccionado
      const response = await fetch(`/api/tipo-cambio?period=${timeFilter}`);
      const data = await response.json();
      
      // Si es un array, es data histórica
      if (Array.isArray(data)) {
        setHistory(data);
        // El último elemento es el más reciente
        const latestRate = data[data.length - 1];
        setExchangeRate(latestRate);
      } else {
        // Si es un objeto, es solo el valor actual
        setExchangeRate(data);
        setHistory([data]);
      }
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      // Datos de respaldo en caso de error
      setExchangeRate({
        compra: 3.75,
        venta: 3.78,
        fecha: new Date().toISOString().split('T')[0]
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRate();
    
    // Función para verificar si estamos en horario de operación
    const isOperatingHours = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Domingo, 6 = Sábado
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes; // Tiempo en minutos
      
      // Domingo no opera
      if (day === 0) return false;
      
      // Sábado: 9:00 am - 2:30 pm
      if (day === 6) {
        const startTime = 9 * 60; // 9:00 am
        const endTime = 14 * 60 + 30; // 2:30 pm
        return currentTime >= startTime && currentTime <= endTime;
      }
      
      // Lunes - Viernes: 8:30 am - 7:30 pm
      const startTime = 8 * 60 + 30; // 8:30 am
      const endTime = 19 * 60 + 30; // 7:30 pm
      return currentTime >= startTime && currentTime <= endTime;
    };
    
    // Actualizar cada 1 minuto solo durante horario de operación
    const interval = setInterval(() => {
      if (isOperatingHours()) {
        fetchExchangeRate();
      }
    }, 60000); // 60 segundos
    
    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [timeFilter]);

  const formatCurrency = (value: number, currency: string) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    }).format(value);
  };

  const getTrend = () => {
    if (history.length < 2) return null;
    const current = history[0].venta;
    const previous = history[1].venta;
    return current > previous ? 'up' : current < previous ? 'down' : 'stable';
  };

  const handleConversion = () => {
    if (!exchangeRate || !amountToConvert) return;
    
    const amount = parseFloat(amountToConvert);
    if (isNaN(amount) || amount <= 0) return;
    
    if (conversionType === 'USD_TO_PEN') {
      // Dólares a Soles (usar precio de venta)
      setConvertedAmount(amount * exchangeRate.venta);
    } else {
      // Soles a Dólares (usar precio de compra)
      setConvertedAmount(amount / exchangeRate.compra);
    }
  };

  // Auto-convertir cuando cambia el monto
  useEffect(() => {
    if (amountToConvert && exchangeRate) {
      handleConversion();
    }
  }, [amountToConvert, conversionType, exchangeRate]);

  const trend = getTrend();
  
  // Los datos ya vienen filtrados de la API según el período seleccionado
  const getFilteredHistory = () => {
    return history;
  };

  return (
    <>
      <Navbar />
      <FloatingSocial />
      <WhatsAppButton />
      <div className="min-h-screen relative pt-28 md:pt-32 pb-20 overflow-hidden">
        {/* Background blanco */}
        <div className="absolute inset-0 z-0" style={{ background: 'white' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-10 lg:px-12 xl:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block mb-4"
              >
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #0047BB 0%, #002677 100%)'
                  }}
                >
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
              </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-500 mb-4 mt-6">
            Tipo de cambio del dolar <span className="font-bold text-white bg-[#0056D6] px-3 py-1 rounded-lg inline-block" style={{ fontFamily: 'Futura, sans-serif' }}>
                   Americano
                </span>
          </h2>
              <p className="text-xl text-gray-700">
                Dólar estadounidense (USD) - Sol peruano (PEN)
              </p>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            {/* Compra */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#0047BB]">Compra</h3>
                {trend === 'up' && <TrendingUp className="w-8 h-8 text-green-500" />}
                {trend === 'down' && <TrendingDown className="w-8 h-8 text-red-500" />}
              </div>
              {loading ? (
                <div className="animate-pulse">
                  <div className="h-20 bg-gray-200 rounded-xl"></div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-6xl font-bold text-[#0047BB] mb-2">
                    {exchangeRate?.compra.toFixed(3)}
                  </p>
                  <p className="text-gray-700 text-lg">Soles por Dólar</p>
                </div>
              )}
            </div>

            {/* Venta */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#0047BB]">Venta</h3>
                {trend === 'up' && <TrendingUp className="w-8 h-8 text-green-500" />}
                {trend === 'down' && <TrendingDown className="w-8 h-8 text-red-500" />}
              </div>
              {loading ? (
                <div className="animate-pulse">
                  <div className="h-20 bg-gray-200 rounded-xl"></div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-6xl font-bold text-[#0047BB] mb-2">
                    {exchangeRate?.venta.toFixed(3)}
                  </p>
                  <p className="text-gray-700 text-lg">Soles por Dólar</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Calculadora de Conversión */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-2xl mb-8"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0047BB] mb-3">
                Tipo de Cambio del dólar hoy en Perú
              </h3>
              <div className="flex items-center justify-center gap-6 text-lg">
                <div className="bg-white px-5 py-2 rounded-xl border border-gray-300 shadow-lg">
                  <span className="text-gray-700 text-sm">Compra:</span>{' '}
                  <span className="font-bold text-[#0047BB] text-xl">{exchangeRate?.compra.toFixed(3)}</span>
                </div>
                <div className="bg-white px-5 py-2 rounded-xl border border-gray-300 shadow-lg">
                  <span className="text-gray-700 text-sm">Venta:</span>{' '}
                  <span className="font-bold text-[#0047BB] text-xl">{exchangeRate?.venta.toFixed(3)}</span>
                </div>
              </div>
            </div>

            {/* Conversion Container */}
            <div className="bg-white rounded-3xl p-3 md:p-8 shadow-2xl">
              {/* Input Superior */}
              <div className="relative mb-4 md:mb-6">
                <label className="text-xs md:text-sm font-bold text-gray-700 mb-2 md:mb-3 block tracking-wide">
                  {conversionType === 'PEN_TO_USD' ? 'Tú Envías' : 'Tú Recibes'}
                </label>
                <div className="flex items-center gap-2 md:gap-3">
                  <input
                    type="number"
                    value={conversionType === 'PEN_TO_USD' ? amountToConvert : convertedAmount?.toFixed(2) || '0.00'}
                    onChange={(e) => {
                      if (conversionType === 'PEN_TO_USD') {
                        setAmountToConvert(e.target.value);
                      }
                    }}
                    className="flex-1 text-xl md:text-5xl font-bold text-gray-900 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl px-2 md:px-6 py-2 md:py-5 focus:outline-none focus:ring-2 md:focus:ring-4 focus:ring-[#0047BB]/30 focus:from-white focus:to-blue-50 transition-all border-2 border-blue-100 hover:border-blue-200"
                    placeholder="100"
                    min="0"
                    step="0.01"
                  />
                  <div className="bg-gradient-to-br from-[#0047BB] to-[#0056D6] text-white px-2 md:px-8 py-2 md:py-5 rounded-xl md:rounded-2xl font-bold text-xs md:text-lg flex items-center justify-center shadow-lg w-[65px] md:min-w-[140px] shrink-0">
                    Soles
                  </div>
                </div>
              </div>

              {/* Botón de Intercambio */}
              <div className="flex justify-center -my-3 relative z-10">
                <button
                  onClick={() => {
                    setConversionType(conversionType === 'USD_TO_PEN' ? 'PEN_TO_USD' : 'USD_TO_PEN');
                    setConvertedAmount(null);
                  }}
                  className="bg-white border-4 border-blue-100 rounded-full p-4 hover:bg-blue-50 hover:border-blue-200 transition-all shadow-xl hover:shadow-2xl transform hover:scale-110 hover:rotate-180 duration-300 group"
                >
                  <svg className="w-6 h-6 text-[#0047BB] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </button>
              </div>

              {/* Input Inferior */}
              <div className="relative mt-4 md:mt-6">
                <label className="text-xs md:text-sm font-bold text-gray-700 mb-2 md:mb-3 block tracking-wide">
                  {conversionType === 'PEN_TO_USD' ? 'Tú Recibes' : 'Tú Envías'}
                </label>
                <div className="flex items-center gap-2 md:gap-3">
                  <input
                    type="number"
                    value={conversionType === 'USD_TO_PEN' ? amountToConvert : convertedAmount?.toFixed(2) || '0.00'}
                    onChange={(e) => {
                      if (conversionType === 'USD_TO_PEN') {
                        setAmountToConvert(e.target.value);
                      }
                    }}
                    className="flex-1 text-xl md:text-5xl font-bold text-gray-900 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl px-2 md:px-6 py-2 md:py-5 focus:outline-none focus:ring-2 md:focus:ring-4 focus:ring-[#0047BB]/30 focus:from-white focus:to-blue-50 transition-all border-2 border-blue-100 hover:border-blue-200"
                    placeholder="29.46"
                    min="0"
                    step="0.01"
                  />
                  <div className="bg-gradient-to-br from-[#0047BB] to-[#0056D6] text-white px-2 md:px-8 py-2 md:py-5 rounded-xl md:rounded-2xl font-bold text-xs md:text-lg flex items-center justify-center shadow-lg w-[65px] md:min-w-[140px] shrink-0">
                    Dólares
                  </div>
                </div>
              </div>

              {/* Info del tipo de cambio usado */}
              <div className="mt-6 pt-6 border-t border-blue-100">
                <p className="text-center text-gray-600 text-sm">
                  Tipo de cambio usado:{' '}
                  <span className="font-bold text-[#0047BB]">
                    S/ {conversionType === 'USD_TO_PEN' 
                      ? exchangeRate?.venta.toFixed(3)
                      : exchangeRate?.compra.toFixed(3)
                    }
                  </span>
                  {' '}({conversionType === 'USD_TO_PEN' ? 'venta' : 'compra'})
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-gray-600 text-sm mt-6 max-w-2xl mx-auto">
              * Los tipos de cambio se actualizan en tiempo real y pueden variar según la entidad financiera.
            </p>
          </motion.div>

          {/* Historial */}
          {history.length > 1 && (
            <>
              {/* Gráfico */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-2xl mb-8"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-[#0047BB]" />
                    <h3 className="text-2xl font-bold text-[#0047BB]">Evolución del Tipo de Cambio</h3>
                  </div>
                  
                  {/* Filtros de tiempo */}
                  <div className="flex gap-2 bg-white p-1 rounded-xl border border-gray-200">
                    <button
                      onClick={() => setTimeFilter('1D')}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        timeFilter === '1D'
                          ? 'bg-[#0047BB] text-white shadow-lg'
                          : 'text-gray-700 hover:text-[#0047BB] hover:bg-gray-100'
                      }`}
                    >
                      1D
                    </button>
                    <button
                      onClick={() => setTimeFilter('1W')}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        timeFilter === '1W'
                          ? 'bg-[#0047BB] text-white shadow-lg'
                          : 'text-gray-700 hover:text-[#0047BB] hover:bg-gray-100'
                      }`}
                    >
                      1S
                    </button>
                    <button
                      onClick={() => setTimeFilter('1M')}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        timeFilter === '1M'
                          ? 'bg-[#0047BB] text-white shadow-lg'
                          : 'text-gray-700 hover:text-[#0047BB] hover:bg-gray-100'
                      }`}
                    >
                      1M
                    </button>
                    <button
                      onClick={() => setTimeFilter('3M')}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        timeFilter === '3M'
                          ? 'bg-[#0047BB] text-white shadow-lg'
                          : 'text-gray-700 hover:text-[#0047BB] hover:bg-gray-100'
                      }`}
                    >
                      3M
                    </button>
                    <button
                      onClick={() => setTimeFilter('6M')}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        timeFilter === '6M'
                          ? 'bg-[#0047BB] text-white shadow-lg'
                          : 'text-gray-700 hover:text-[#0047BB] hover:bg-gray-100'
                      }`}
                    >
                      6M
                    </button>
                    <button
                      onClick={() => setTimeFilter('1Y')}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        timeFilter === '1Y'
                          ? 'bg-[#0047BB] text-white shadow-lg'
                          : 'text-gray-700 hover:text-[#0047BB] hover:bg-gray-100'
                      }`}
                    >
                      1A
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6">
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart
                      data={getFilteredHistory()}
                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                      <XAxis 
                        dataKey="fecha" 
                        stroke="#9ca3af"
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                        tickLine={false}
                        axisLine={{ stroke: '#e5e7eb' }}
                        tickFormatter={(value) => new Date(value).toLocaleDateString('es-PE', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      />
                      <YAxis 
                        stroke="#9ca3af"
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                        tickLine={false}
                        axisLine={{ stroke: '#e5e7eb' }}
                        domain={['dataMin - 0.02', 'dataMax + 0.02']}
                        tickFormatter={(value) => value.toFixed(3)}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#fff', 
                          border: 'none',
                          borderRadius: '12px',
                          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                          padding: '12px'
                        }}
                        labelStyle={{ 
                          color: '#374151',
                          fontWeight: 'bold',
                          marginBottom: '4px'
                        }}
                        labelFormatter={(value) => new Date(value).toLocaleDateString('es-PE', { 
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric' 
                        })}
                        formatter={(value: any) => [`S/ ${value.toFixed(3)}`, '']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="venta" 
                        stroke="#0047BB" 
                        strokeWidth={2.5}
                        dot={false}
                        activeDot={{ r: 6, fill: '#0047BB', strokeWidth: 2, stroke: '#fff' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  
                  {/* Valor actual debajo del gráfico */}
                  {exchangeRate && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-2xl font-bold text-[#0047BB]">
                        S/ {exchangeRate.venta.toFixed(4)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(exchangeRate.fecha).toLocaleDateString('es-PE', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}, {new Date(exchangeRate.fecha).toLocaleTimeString('es-PE', {
                          hour: '2-digit',
                          minute: '2-digit',
                          timeZone: 'UTC'
                        })} UTC
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Tabla de Historial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-[#0047BB] mb-6">Historial Detallado</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left text-[#0047BB] font-semibold py-3 px-4">Fecha</th>
                      <th className="text-right text-[#0047BB] font-semibold py-3 px-4">Compra</th>
                      <th className="text-right text-[#0047BB] font-semibold py-3 px-4">Venta</th>
                      <th className="text-right text-[#0047BB] font-semibold py-3 px-4">Tendencia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.slice(0, 20).map((rate, index) => {
                      const prevRate = history[index + 1];
                      const localTrend = prevRate 
                        ? rate.venta > prevRate.venta ? 'up' : rate.venta < prevRate.venta ? 'down' : 'stable'
                        : 'stable';
                      
                      return (
                        <tr key={rate.fecha} className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                          <td className="text-gray-700 py-3 px-4">
                            {new Date(rate.fecha).toLocaleDateString('es-PE')}
                          </td>
                          <td className="text-gray-900 text-right py-3 px-4 font-mono">
                            {rate.compra.toFixed(3)}
                          </td>
                          <td className="text-gray-900 text-right py-3 px-4 font-mono">
                            {rate.venta.toFixed(3)}
                          </td>
                          <td className="text-right py-3 px-4">
                            {localTrend === 'up' && <TrendingUp className="w-5 h-5 text-green-500 inline" />}
                            {localTrend === 'down' && <TrendingDown className="w-5 h-5 text-red-500 inline" />}
                            {localTrend === 'stable' && <span className="text-gray-500">-</span>}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
            </>
          )}

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 text-sm">
              Tipo de cambio referencial de BCRP.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200 text-center shadow-2xl"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-[#0047BB] mb-4">
              ¿Necesitas una asesoría o consultoría financiera?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Contáctanos ahora y recibe orientación personalizada sobre tus inversiones, finanzas y negocios
            </p>
            <motion.a
              href="https://wa.me/51920000848?text=Hola%20%F0%9F%91%8B%2C%20quiero%20solicitar%20una%20asesoria%20financiera%20%F0%9F%92%BC%F0%9F%92%B0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 text-white rounded-xl font-bold text-xl hover:bg-green-600 transition-all shadow-2xl hover:shadow-green-500/50"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contáctanos por WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
