"use client";

import { motion } from "framer-motion";
import { Play, ChevronRight, BookOpen, TrendingUp, Users, Scale, AlertTriangle, DollarSign, FileText } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import WhatsAppButton from "@/components/WhatsAppButton";

const categories = [
  {
    id: "todos",
    name: "Todos",
    icon: BookOpen,
    description: "Todos nuestros videos educativos",
    color: "#0047BB",
    videos: []
  },
  {
    id: "finanzas",
    name: "Finanzas para emprendedores",
    icon: TrendingUp,
    description: "Gestión financiera para empresariales",
    color: "#0056D6",
    videos: [
      {
        id: 1,
        title: "Estado de situación financiera o Balance general. Caso práctico en Excel. Parte I.",
        thumbnail: "https://i.ytimg.com/vi/2bcJMosPcDk/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDwrtVKFuin8H3CteVumbshsHGtIw",
        duration: "Serie completa",
        playlistUrl: "https://www.youtube.com/embed/2bcJMosPcDk",
        url: "https://www.youtube.com/embed/2bcJMosPcDk"
      },
      {
        id: 2,
        title: "Estado de resultados o Estado de Ganancias y Pérdidas. Caso práctico en Excel. parte II.",
        thumbnail: "https://i.ytimg.com/vi/goH4O7EfZf8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLChzCGBIVz1Vz97UAsNAgp8K5xzYg",
        duration: "13:43",
        url: "https://www.youtube.com/embed/goH4O7EfZf8"
      },
      {
        id: 3,
        title: "Finanzas para emprendedores. Parte III. Estado de flujos de efectivo. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/YYXupELbzkc/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBeOBSLNTHxWgvZL_-_k2WmuEkyIA",
        duration: "19:21",
        url: "https://www.youtube.com/embed/YYXupELbzkc"
      },
      {
        id: 4,
        title: "Finanzas para emprendedores. Parte IV. Estado de Flujos de efectivo. Método indirecto. Caso en Excel",
        thumbnail: "https://i.ytimg.com/vi/848oP7SuD4A/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDDJB2KbUP-pZ9tSEtdKympbbO4Kg",
        duration: "11:11",
        url: "https://www.youtube.com/embed/848oP7SuD4A"
      },
      {
        id: 5,
        title: "Finanzas para emprendedores. Parte V. Presupuesto de efectivo. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/56LB_rAhkgw/hqdefault.jpg",
        duration: "12:25",
        url: "https://www.youtube.com/embed/56LB_rAhkgw"
      }
    ]
  },
  {
    id: "presupuesto",
    name: "Presupuesto de efectivo",
    icon: Users,
    description: "Presupuesto de efectivo, casos practicos de excel.",
    color: "#003088",
    videos: [
      {
        id: 1,
        title: "Presupuesto de efectivo. Parte I. Estado de situación financiera y de resultados. Caso en Excel.",
        thumbnail: "https://i.ytimg.com/vi/8PHV5CI2DtU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLC_UsIQVZDvUDxgZg24tjOMZeBpTw",
        duration: "16:45",
        url: "https://www.youtube.com/embed/8PHV5CI2DtU"
      },
      {
        id: 2,
        title: "Presupuesto de efectivo. Parte II. Proyección de estados financieros.Caso práctico en Excel",
        thumbnail: "https://i.ytimg.com/vi/VnFHWDIFmus/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDnXPj_BUzzdhOTFOqxbULIwZn9tw",
        duration: "21:58",
        url: "https://www.youtube.com/embed/VnFHWDIFmus"
      },
      {
        id: 3,
        title: "Presupuesto de efectivo. Parte III. Supuestos para proyectar el Activo. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/YAbrym4Jm4o/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAaPfJlW4D61eLLbIfQABPSU1dHIA",
        duration: "18:34",
        url: "https://www.youtube.com/embed/YAbrym4Jm4o"
      },
      {
        id: 4,
        title: "Presupuesto de efectivo. Parte IV. Proyección del Pasivo y Patrimonio. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/VbGMtB9obzI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCcD06SuuZFP8siVq96aBuwdXeFvg",
        duration: "17:09",
        url: "https://www.youtube.com/embed/VbGMtB9obzI"
      },
      {
        id: 5,
        title: "Presupuesto de efectivo. Parte V. Proyección del estado de resultados. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/SaQmg9CRLwA/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDZEZ_5XyjTicj4600o7SlxXWPvAw",
        duration: "17:43",
        url: "https://www.youtube.com/embed/SaQmg9CRLwA"
      }
    ]
  },
  {
    id: "planificacion",
    name: "Planificacion financiera",
    icon: Users,
    description: "Mejora la gestión operativa de tu empresa",
    color: "#0047BB",
    videos: [
      {
        id: 1,
        title: "Planificación Financiera Parte I. Ingresos y egresos del modelo financiero. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/Qw8eQVKcxqE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA8JWVG5SG8-9_YbKEy7Y5XwnY-Tw",
        duration: "24:11",
        url: "https://www.youtube.com/embed/Qw8eQVKcxqE"
      },
      {
        id: 2,
        title: "Planificación Financiera Parte II. Plan de Inversión Total. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/pkr9ojYArYk/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCPQvwFWgRMLVGGIwFdRF3Y0AvuAg",
        duration: "18:25",
        url: "https://www.youtube.com/embed/pkr9ojYArYk"
      },
      {
        id: 3,
        title: "Planificación Financiera Parte III. WACC o CPPC y Perpetuidad. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/3GYwlQUFtCE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBcnfSbMH0ksvgwJhJvAANilTslaQ",
        duration: "17:52",
        url: "https://www.youtube.com/embed/3GYwlQUFtCE"
      },
      {
        id: 4,
        title: "Planificación Financiera Parte IV. Capital de trabajo, Capex y Depreciación. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/BkOdqt1WEx4/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCxMF062jhBXNsN6KVAF9-DXK63qQ",
        duration: "21:25",
        url: "https://www.youtube.com/embed/BkOdqt1WEx4"
      },
      {
        id: 5,
        title: "Planificación Financiera Parte V. Financiamiento y Proyecciones financieras. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/NvqoZ7PWPYk/maxresdefault.jpg",
        duration: "23:52",
        url: "https://www.youtube.com/embed/NvqoZ7PWPYk"
      },
      {
        id: 6,
        title: "Planificación Financiera Parte VI. Proyección de Estados financieros. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/1q8YUIhlsyw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBS_bj0aQuvVSDjTGCjsxXO6w-sWg",
        duration: "21:02",
        url: "https://www.youtube.com/embed/1q8YUIhlsyw"
      },
      {
        id: 7,
        title: "Planificación Financiera Parte VII. Presupuesto y Estado de flujos de efectivo. Caso práctico Excel.o en Excel.",
        thumbnail: "https://i.ytimg.com/vi/VItB9Qq4KPk/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCtTAHkXFOVpL8bngnYE9aWo7Kofg",
        duration: "25:51",
        url: "https://www.youtube.com/embed/VItB9Qq4KPk"
      }
    ]
  },
  {
    id: "rentafija",
    name: "Renta fija y bonos",
    icon: Scale,
    description: "Aspectos legales y formalización empresarial",
    color: "#002677",
    videos: [
      {
        id: 1,
        title: "Renta fija o Bonos sin cupón. Casos prácticos en Excel.",
        thumbnail: "https://i.ytimg.com/vi/znLqGA9a-YI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6RCUqXIYwR7hr46JrVmDPWzT4sg",
        duration: "13:06",
        url: "https://www.youtube.com/embed/znLqGA9a-YI"
      },
      {
        id: 2,
        title: "Precio limpio y precio sucio de un bono. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/W9XaAkGBIB0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBgp8mEAf1VRIo2y2SX1HhLvE-ubw",
        duration: "21:19",
        url: "https://www.youtube.com/embed/W9XaAkGBIB0"
      },
      {
        id: 3,
        title: "Renta fija. Bonos con probabilidad de impago. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/VvISbFdFXxY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBI-Y4NQ_c_1oJtY1ns0f-tuuVIaA",
        duration: "15:15",
        url: "https://www.youtube.com/embed/VvISbFdFXxY"
      },
      {
        id: 4,
        title: "Bonos indexados a la inflación. Renta fija. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/SDBjfqr03EM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLD9D5qtqbaS5beCeyMIfqZJhoUntQ",
        duration: "13:18",
        url: "https://www.youtube.com/embed/SDBjfqr03EM"
      },
      {
        id: 5,
        title: "Renta fija o Bono con cupón. Casos prácticos en Excel.",
        thumbnail: "https://i.ytimg.com/vi/CoWO47s1_dQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFRbjiFuxzT-6yHJp8-7GKuEBZMA",
        duration: "15:15",
        url: "https://www.youtube.com/embed/CoWO47s1_dQ"
      },
      {
        id: 6,
        title: "Valorización de Bonos en diferentes periodos y composición de la tasa de rendimiento (YTM)",
        thumbnail: "https://i.ytimg.com/vi/28QP_c6EMrI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDwUCV6nTYDNF7_-NzDlwMdqW_VTQ",
        duration: "17:23",
        url: "https://www.youtube.com/embed/28QP_c6EMrI"
      }
    ]
  },
  {
    id: "estados",
    name: "Estados financieros",
    icon: FileText,
    description: "Estados financieros y análisis contable",
    color: "#002677",
    videos: [
      {
        id: 1,
        title: "Estados Financieros Parte I. Conceptos básicos y flujos del dinero. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/rAywuOiH3b8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLC-j0CAoGRVhU1UGTM8sQYDn6zF5A",
        duration: "25:29",
        url: "https://www.youtube.com/embed/rAywuOiH3b8"
      },
      {
        id: 2,
        title: "Estados Financieros Parte II. Utilidades, pago de dividendos y reinversión. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/5C3Hu3Xm6oM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAM8pOTFBMpUiEWK59uCacbca51Aw",
        duration: "17:39",
        url: "https://www.youtube.com/embed/5C3Hu3Xm6oM"
      },
      {
        id: 3,
        title: "Estados Financieros Parte III. Estructura de reinversión de utilidades. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/cQCCIAyJToo/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAqxvtXojR4MayrMKpugw4l5eG7PA",
        duration: "19:09",
        url: "https://www.youtube.com/embed/cQCCIAyJToo"
      },
      {
        id: 4,
        title: "Estados Financieros Parte IV. Análisis horizontal, vertical y ratios. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/_0PuLCqtvHg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAePmfaaU4R_0Z1nhnq1eyLJUHUZg",
        duration: "24:11",
        url: "https://www.youtube.com/embed/_0PuLCqtvHg"
      },
      {
        id: 5,
        title: "Estados Financieros Parte V. Análisis del capital de trabajo y Du Pont. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/_PWXVptNtos/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBGanHhwCxfrjnl8ADUNJ8F0CmlNg",
        duration: "20:06",
        url: "https://www.youtube.com/embed/_PWXVptNtos"
      },
      {
        id: 6,
        title: "Estados Financieros Parte VI. Análisis del crecimiento sostenible. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/4FXgyq2ArTw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAo_Dg47lDA9JNvLRAe2jXoyWmf3A",
        duration: "19:19",
        url: "https://www.youtube.com/embed/4FXgyq2ArTw"
      }
    ]
  },
  {
    id: "riesgos",
    name: "Riesgos y rendimiento",
    icon: AlertTriangle,
    description: "Riesgos financieros y gestión de rendimiento",
    color: "#002677",
    videos: [
      {
        id: 1,
        title: "Riesgo y Rendimiento Parte I. Relación entre ambos conceptos. Casos prácticos en Excel",
        thumbnail: "https://i.ytimg.com/vi/YXwdWHDxwnY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDzPSxbOOgNMc5JZalYxV9n5CJ8hQ",
        duration: "16:05",
        url: "https://www.youtube.com/embed/YXwdWHDxwnY"
      },
      {
        id: 2,
        title: "Riesgo y Rendimiento Parte II. Riesgo sistémico y diversificable. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/6GovevktoYA/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBWdx4VcTjDfKd-ImcqkJtk7kuYOA",
        duration: "20:09",
        url: "https://www.youtube.com/embed/6GovevktoYA"
      },
      {
        id: 3,
        title: "Riesgo y Rendimiento Parte III. Otra forma de estimar el rendimiento esperado. Caso en Excel.",
        thumbnail: "https://i.ytimg.com/vi/KO0992k77iA/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLC7Qri2gXXmArTedNR5-acVzNepvw",
        duration: "18:26",
        url: "https://www.youtube.com/embed/KO0992k77iA"
      },
      {
        id: 4,
        title: "Riesgo y Rendimiento Parte IV. Cómo se relaciona el riesgo y el costo de capital??? Caso en Excel.",
        thumbnail: "https://i.ytimg.com/vi/72_p-NEYrbs/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCYrk-mgHeiiiize_5Ofcj7sIHRYQ",
        duration: "18:49",
        url: "https://www.youtube.com/embed/72_p-NEYrbs"
      },
      {
        id: 5,
        title: "Riesgo y Rendimiento Parte V. Cartera de inversión de 02 Acciones distintas. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/F5hi82D7ZfY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLC7-vXYHIeWqeIvhUO0v4-TocmQCw",
        duration: "16:33",
        url: "https://www.youtube.com/embed/F5hi82D7ZfY"
      },
      {
        id: 6,
        title: "Riesgo y Rendimiento Parte VI. Mínima varianza de una cartera de 2 activos Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/k1SWwgFQzzo/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAlDWPCSHF1cv___oa1SL2QKkQhgw",
        duration: "13:50",
        url: "https://www.youtube.com/embed/k1SWwgFQzzo"
      },
      {
        id: 7,
        title: "Riesgo y Rendimiento. Parte VII. Cartera óptima de varios activos. Caso práctico en Excel",
        thumbnail: "https://i.ytimg.com/vi/UKjOGUiTZYA/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA5l5HgFKz09kp8vj9oKOb_rYhPAg",
        duration: "18:09",
        url: "https://www.youtube.com/embed/UKjOGUiTZYA"
      },
      {
        id: 8,
        title: "Riesgo y Rendimiento Parte VIII. Portafolio de mínima varianza con Solver. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/PGLlLXChRNM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDriLZ3WDK0jM_PCrtVPUQiaxtJkQ",
        duration: "16:56",
        url: "https://www.youtube.com/embed/PGLlLXChRNM"
      },
    ]
  },
  {
    id: "costopromedio",
    name: "Costo promedio ponderado",
    icon: DollarSign,
    description: "Costo promedio ponderado de capital (WACC)",
    color: "#002677",
    videos: [
      {
        id: 1,
        title: "Costo de capital. Parte I. Acciones preferentes y Costo de la deuda. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/4mK3QnEA0a0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCMOugJUbOoCl0TeZ9yIVPpLgIaMA",
        duration: "15:52",
        url: "https://www.youtube.com/embed/4mK3QnEA0a0"
      },
      {
        id: 2,
        title: "Costo de capital. Parte II. Costo de las acciones comunes. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/22ZNnHRedzc/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDNAYo1kKSivEFYIWcdsDxNsRZGBg",
        duration: "16:48",
        url: "https://www.youtube.com/embed/22ZNnHRedzc"
      },
      {
        id: 3,
        title: "Costo de capital. Parte III. Factores que influyen en su determinación. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/hk3h3joHg4E/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAhnmXYmv7yaSUaoTFg1hwPWB-kZQ",
        duration: "17:16",
        url: "https://www.youtube.com/embed/hk3h3joHg4E"
      },
      {
        id: 4,
        title: "Costo de capital. Parte IV. Mix de la estructura de capital. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/vnnaGRf8Sk4/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA5J53Xk1zRZEj1cUuCbn7VglpIsg",
        duration: "15:47",
        url: "https://www.youtube.com/embed/vnnaGRf8Sk4"
      },
      {
        id: 5,
        title: "Costo de capital. Parte V. Valuación de nuevas lineas de negocio por medio del WACC. Caso en Excel.",
        thumbnail: "https://i.ytimg.com/vi/Y2MKRA1PqeY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBhb1y84ulRkjDTX79tayd3L8k0vw",
        duration: "16:08",
        url: "https://www.youtube.com/embed/Y2MKRA1PqeY"
      },
      {
        id: 6,
        title: "Costo de capital. Parte VI. Tipos de deuda en la estructura de capital. Caso práctico en Excel.",
        thumbnail: "https://i.ytimg.com/vi/EjeVQGGY5A8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDQQGDzeuswQTg5RmOoZdalZpYDqA",
        duration: "16:35",
        url: "https://www.youtube.com/embed/EjeVQGGY5A8"
      },
    ]
  },
];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  // Get all videos or filtered by category
  const allVideos = categories.flatMap(cat => 
    cat.videos.map(video => ({ ...video, categoryId: cat.id }))
  );
  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  const displayVideos = selectedCategory === 'todos' ? allVideos : currentCategory?.videos.map(video => ({ ...video, categoryId: selectedCategory })) || [];

  return (
    <>
      <Navbar />
      <FloatingSocial />
      <WhatsAppButton />
      <div className="min-h-screen pt-28 md:pt-32 pb-20 relative overflow-hidden">
        {/* Background con colores VALTO sin detalles */}
        <div className="absolute inset-0 z-0" style={{
          background: 'white'
        }} />

        {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-10 lg:px-12 xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
                          <motion.div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #0047BB 0%, #002677 100%)' }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white" />
              </motion.div>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-500 mb-4 mt-6">
            Centro de <span className="font-bold text-white bg-[#0056D6] px-3 py-1 rounded-lg inline-block" style={{ fontFamily: 'Futura, sans-serif' }}>
                  Formacion y Aprendizaje
                </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Videos educativos y recursos gratuitos para impulsar tu negocio
          </p>
          <motion.a
            href="https://www.youtube.com/@Valtomanagementconsulting"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
                          animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center mt-6 px-6 py-3 bg-[#0047BB] hover:bg-[#003088] text-white rounded-full font-semibold transition-all shadow-xl hover:shadow-2xl"
          >
            <Play className="w-5 h-5 mr-2" />
            Ver canal de YouTube
            <ChevronRight className="w-5 h-5 ml-1" />
          </motion.a>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedVideo(null);
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-2xl font-semibold transition-all shadow-lg hover:shadow-2xl ${
                  selectedCategory === category.id
                    ? 'bg-[#0047BB] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${
                  selectedCategory === category.id ? 'text-white' : 'text-gray-700'
                }`} />
                <div className="text-sm lg:text-base text-center">{category.name}</div>
                {selectedCategory === category.id && category.id !== 'todos' && (
                  <div className={`text-xs mt-1 text-center ${selectedCategory === category.id ? 'opacity-70' : 'opacity-90'}`}>
                    {category.videos.length} videos
                  </div>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 pt-24 md:pt-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-3xl overflow-hidden max-w-5xl w-full shadow-2xl max-h-[calc(100vh-6rem)] md:max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={selectedVideo.playlistUrl || selectedVideo.url}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-3xl font-bold text-[#0047BB] mb-3">
                  {selectedVideo.title}
                </h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="px-8 py-3 bg-[#0047BB] text-white rounded-xl hover:bg-[#003088] transition-all font-semibold shadow-lg hover:shadow-xl"
                  >
                    Cerrar
                  </button>
                  <a
                    href="https://www.youtube.com/@Valtomanagementconsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white border-2 border-[#0047BB] text-[#0047BB] rounded-xl hover:bg-blue-50 transition-all font-semibold"
                  >
                    Ver más videos
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Videos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-2xl"
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0047BB] mb-3">
              {currentCategory?.name}
            </h2>
            <p className="text-lg text-gray-700">{currentCategory?.description}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayVideos.map((video, index) => (
              <motion.div
                key={`${video.categoryId}-${video.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={(() => {
                      const videoId = video.thumbnail.match(/\/vi\/([^\/\?]+)/)?.[1];
                      return videoId ? `https://i.ytimg.com/vi/${videoId}/sddefault.jpg` : video.thumbnail;
                    })()}
                    onError={(e) => {
                      const videoId = video.thumbnail.match(/\/vi\/([^\/\?]+)/)?.[1];
                      if (videoId && !e.currentTarget.dataset.fallbackAttempted) {
                        e.currentTarget.dataset.fallbackAttempted = 'true';
                        e.currentTarget.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                      }
                    }}
                    alt={video.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <Play className="w-10 h-10 text-[#0047BB] ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#0047BB] px-3 py-1 rounded-full text-white text-xs font-semibold shadow-lg">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#0047BB] font-bold text-lg mb-3 line-clamp-2 group-hover:text-[#003088] transition-colors">
                    {video.title}
                  </h3>
                  <button className="text-[#0047BB] text-sm font-semibold flex items-center group-hover:gap-2 transition-all">
                    Ver ahora
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {displayVideos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Play className="w-12 h-12 text-[#0047BB]" />
              </div>
              <p className="text-[#0047BB] text-xl font-semibold mb-2">
                Próximamente
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Estamos preparando contenido educativo para esta categoría
              </p>
              <a
                href="https://www.youtube.com/@Valtomanagementconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#0047BB] text-white rounded-xl font-semibold hover:bg-[#003088] transition-all shadow-xl hover:shadow-2xl"
              >
                Visitar nuestro canal
                <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </motion.div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200 text-center shadow-2xl"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-[#0047BB] mb-4">
            ¿Necesitas asesoría personalizada?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a llevar tu negocio al siguiente nivel
          </p>
          <motion.a
            href="https://wa.me/51920000848?text=Hola%20%F0%9F%91%8B%2C%20quiero%20solicitar%20una%20asesoria%20para%20mi%20negocio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-flex items-center px-8 py-4 bg-[#0047BB] text-white rounded-xl font-bold text-lg hover:bg-[#003088] transition-all shadow-xl"
          >
            Consulta con nosotros
            <ChevronRight className="w-6 h-6 ml-2" />
          </motion.a>
        </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}

