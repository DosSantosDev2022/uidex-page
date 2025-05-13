import {
  FaMicrochip,
  FaHospitalSymbol,
  FaChartLine,
  FaCogs,
  FaTruck,
  FaPalette,
  FaRocket,
  FaLaptopCode,
  FaBullhorn,
  FaChalkboardTeacher,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface Brand {
  name: string;
  icon: IconType;
}

export const brands: Brand[] = [
  {
    name: "NeoTech Solutions",
    icon: FaMicrochip,
  },
  {
    name: "GlobalFin Corp",
    icon: FaChartLine,
  },
  {
    name: "InovaMédica",
    icon: FaHospitalSymbol,
  },
  {
    name: "StartSys Technologies",
    icon: FaCogs,
  },
  {
    name: "VivaLogística",
    icon: FaTruck,
  },
];

export interface Services {
  title: string;
  description: string
  href: string
  icon: IconType;
}

export const services: Services[] = [
  {
    title: "Branding",
    description: "Estratégias visuais para fortalecer a identidade da sua marca no mercado competitivo.",
    href: "/branding",
    icon: FaPalette,
  },
  {
    title: "UX Design",
    description: "Projetamos experiências que encantam usuários e aumentam a conversão do seu produto.",
    href: "/ux-design",
    icon: FaRocket,
  },
  {
    title: "Web Development",
    description: "Desenvolvimento de sites modernos, rápidos e otimizados para resultados reais.",
    href: "/web-development",
    icon: FaLaptopCode,
  },
  {
    title: "Marketing Digital",
    description: "Alavanque sua presença online com campanhas orientadas por dados e criatividade.",
    href: "/marketing-digital",
    icon: FaBullhorn,
  },
  {
    title: "Consultoria",
    description: "Diagnóstico e direcionamento estratégico para transformar desafios em resultados.",
    href: "/consultoria",
    icon: FaChalkboardTeacher,
  },
];

interface Testimonials {
  name: string
  role: string
  testimonial: string
  avatar: string
}

export const testimonials:Testimonials[] = [
  {
    name: 'Lucas Almeida',
    role: 'CEO na NeoTech Solutions',
    testimonial:
      'Trabalhar com esta equipe foi transformador. Entregaram além do esperado com total profissionalismo e agilidade.',
    avatar: '/avatar-01.webp',
  },
  {
    name: 'Juliana Rocha',
    role: 'CTO na InovaMédica',
    testimonial:
      'A qualidade do serviço foi impecável. Superaram nossas expectativas em todos os sentidos.',
    avatar: '/avatar-02.webp',
  },
  {
    name: 'Ricardo Martins',
    role: 'Gerente de Produto na StartSys',
    testimonial:
      'Excelente experiência do início ao fim. Comunicação clara, entregas rápidas e resultado de alta qualidade.',
    avatar: '/avatar-03.webp',
  },
];