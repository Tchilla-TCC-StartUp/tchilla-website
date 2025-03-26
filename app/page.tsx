"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  Users,
  ChevronDown,
  Download,
  Plus,
  Minus,
  Globe,
  DollarSign,
  Zap,
  PartyPopperIcon as Party,
  Gift,
  Music,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import Image from "next/image"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { FaApple, FaArrowLeft, FaArrowRight, FaGooglePlay } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "react-day-picker"
import "react-day-picker/dist/style.css";


export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [showFAB, setShowFAB] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowFAB(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <div id="Inicio" className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 font-sans">
      <Particles
        id="tsparticles"

        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            color: { value: "#002B4C" },
            links: { enable: false },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
        className="absolute inset-0 pointer-events-none"
      />


      <header className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-sm">
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-2 ">
          <Image
            src="logotipo3xPNG.png"
            alt="Tchilla Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />

          <div className="flex space-x-10 px-10">
            <a href="#Inicio" className="text-sm font-semibold text-gray-600 hover:text-gray-900 relative after:block after:w-full after:h-[2px] after:bg-gradient-to-r after:from-teal-400 after:to-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Inicio</a>

            <a href="#Sobre" className="text-sm font-semibold text-gray-600 hover:text-gray-900 relative after:block after:w-full after:h-[2px] after:bg-gradient-to-r after:from-teal-400 after:to-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Sobre Nós</a>

            <a href="#Servicos" className="text-sm font-semibold text-gray-600 hover:text-gray-900 relative after:block after:w-full after:h-[2px] after:bg-gradient-to-r after:from-teal-400 after:to-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Nossos Serviços</a>

            <a href="#Plataforma" className="text-sm font-semibold text-gray-600 hover:text-gray-900 relative after:block after:w-full after:h-[2px] after:bg-gradient-to-r after:from-teal-400 after:to-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Como posso agendar</a>

            <a href="#Galeria" className="text-sm font-semibold text-gray-600 hover:text-gray-900 relative after:block after:w-full after:h-[2px] after:bg-gradient-to-r after:from-teal-400 after:to-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Nossa geleria</a>
            <a href="#Perguntas" className="text-sm font-semibold text-gray-600 hover:text-gray-900 relative after:block after:w-full after:h-[2px] after:bg-gradient-to-r after:from-teal-400 after:to-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">FaQ`s</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-gray-900 font-medium">Login</a>

            <a href="/signup" className="bg-gradient-to-r from-teal-400 to-gray-900 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105">
              Junte-se a nós
            </a>
          </div>

        </nav>

      </header>

      <main className="pt-24 pb-16 px-">
        <section className="max-w-6xl mx-auto space-y-32">
          <Hero scrollY={scrollY} />
          <Features />
          <AppShowcase />
          <SuccessStories />
          <MarketOpportunity />
          <FAQ />
          <CTA />
        </section>
      </main>

      <footer className="text-center p-4 text-sm text-gray-500">© 2024 Tchilla. Todos os direitos reservados.</footer>

      <AnimatePresence>
        {showFAB && (
          <motion.button
            className="fixed bottom-8 right-8 bg-gradient-to-r from-[#002B4C] to-[#005694] text-white p-4 rounded-full shadow-lg pulse"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Download size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

function Hero({ scrollY }: { scrollY: number }) {
  return (
    <motion.div
      className="text-center space-y-8 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#002B4C] to-[#005694]"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      >
        Nós Realizamos o Evento, Voce vive o Momento
      </motion.h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Com Tchilla, planeje, organize e execute eventos extraordinários. Simples, prático e democrático - tudo em um só
        lugar mágico.
      </p>
      <motion.div
        className="relative"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: 1 - scrollY * 0.002,
        }}
      >
        <motion.img
          src="/mobile-app.gif"
          alt="Tchilla App Interface"
          className="w-[48rem] h-auto mx-auto rounded-3xl"
          // animate={{
          //   rotateY: [0, 360],
          //   boxShadow: [
          //     "0 25px 50px -12px rgba(0, 43, 76, 0.25)",
          //     "0 25px 50px -12px rgba(0, 86, 148, 0.25)",
          //     "0 25px 50px -12px rgba(0, 43, 76, 0.25)",
          //   ],
          // }}
          //animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="cursor-pointer"
      >
        <ChevronDown size={32} className="mx-auto text-[#002B4C]" />
      </motion.div>
    </motion.div>
  )
}

function Features() {

  return (
    <section id="Sobre" className="flex items-center justify-center py-24 px-7">
      <div className="max-w-6xl grid grid-cols-2 gap-16">
        {/* Lado Esquerdo */}
        <div className="flex flex-col items-start">
          <span className="font-inter bg-cyan-100 border border-cyan-500 text-cyan-600 px-8 py-2 text-sm rounded-full font-medium tracking-wide shadow-md">
            O aplicativo que transforma sonhos
          </span>
          <h2 className="font-bold text-4xl mt-6">
            Quem somos nós?
          </h2>
        </div>

        {/* Lado Direito */}
        <div>
          <p className="text-gray-700 text-3xl leading-relaxed font-museo ">
            Somos uma empresa inovadora focada em facilitar a organização de eventos, conectando usuários aos locais
            ideais para suas necessidades. Com tecnologia de ponta e um design intuitivo, nosso objetivo é tornar a
            busca por espaços para eventos mais eficiente, prática e personalizada.
          </p>
        </div>
      </div>
    </section>
  );
}



function AppShowcase() {
  const services = [
    {
      title: "Local para \n  Evento",
      description:
        "É simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos."
    },
    {
      title: "Local para \n  Evento",
      description:
        "É simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos."
    },
    {
      title: "Local para \n  Evento",
      description:
        "É simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos."
    },
    {
      title: "Local para \n Evento",
      description:
        "É simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos."
    }
  ];
  return (
    <section id="Servicos" className="text-center py-12">
      <div className="bg-cyan-100 mb-4 inline-block px-4 py-1 text-sm font-medium text-cyan-600 border border-cyan-400 rounded-full">
        Temos os melhores do mercado
      </div>
      <h2 className="text-3xl font-bold font-inter">Nossos serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 justify-start">
        {services.map((service, index) => (
          <Card key={index} className="p-6 text-left shadow-none border-none w-full lg:w-80">
            <CardContent className="space-y-4">
              <MapPin className="text-cyan-600 w-8 h-8" />
              <h3 className="text-lg font-bold whitespace-pre-line">{service.title}</h3>
              <p className="text-gray-600 text-xs">{service.description}</p>
              <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-900 font-medium flex items-center gap-1 text-lg">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-900">View more</span>
                <ArrowRight className="w-5 h-5 text-cyan-600" style={{ fill: "url(#gradient)" }} />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


function SuccessStories() {


  const images = [
    "phone1.png", // Imagem do primeiro painel
    "phone2.png", // Imagem do segundo painel (deve estar na parte superior)
    "phone3.png" // Imagem do terceiro painel
  ];

  return (
    <div id="Plataforma" className="flex flex-col items-center p-10">
      <div className="bg-cyan-100 border border-cyan-500 text-cyan-600 px-2 rounded-full mb-1">
        Agendamento prático e fácil
      </div>
      <h2 className="text-2xl font-bold font-inter">Como posso Agendar</h2>
      <p className="text-gray-500 text-center max-w-2xl my-4">
        Fazer o agendamento é muito simples e prático, com apenas alguns cliques
        terás o seu evento agendado e sem motivos para preocupações.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {images.map((image, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg relative flex flex-col items-center text-center">
            {index === 1 ? (
              <>
                <img
                  src={image}
                  alt="Mobile App Preview"
                  className="w-52 mb-4"
                />
                <h3 className="font-bold text-lg font-inter">Fornecer podcasts construtivos toda semana</h3>
                <p className="text-gray-500 mt-2">
                  Agora podes acompanhar as nossas atividades a partir do conforto de
                  sua casa e não ficar de fora, como também rever os eventos passados.
                </p>
              </>
            ) : (
              <>
                <h3 className="font-bold text-lg font-inter">Fornecer podcasts construtivos toda semana</h3>
                <p className="text-gray-500 mt-2">
                  Agora podes acompanhar as nossas atividades a partir do conforto de
                  sua casa e não ficar de fora, como também rever os eventos passados.
                </p>
                <img
                  src={image}
                  alt="Mobile App Preview"
                  className="mt-4 w-52"
                />
              </>
            )}
            <div className="w-full h-1 mt-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-gray-800"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

const imageSets = [
  [
    { src: "/gene.png", width: 220, height: 215, clip: "polygon(5% 20%, 95% 0%, 95% 100%, 5% 85%)" },
    { src: "/gene.png", width: 250, height: 310, clip: "polygon(0% 13%, 95% 0%, 95% 100%, 0% 87%)" },
    { src: "/gene.png", width: 400, height: 310 },
    { src: "/gene.png", width: 250, height: 310, clip: "polygon(5% 0%, 100% 13%, 100% 87%, 5% 100%)" },
    { src: "/gene.png", width: 220, height: 215, clip: "polygon(5% 0%, 95% 17%, 95% 83%, 5% 100%)" },
  ],
  [
    { src: "/gene.png", width: 250, height: 310, clip: "polygon(5% 0%, 95% 0%, 95% 100%, 5% 100%)" },
    { src: "/gene.png", width: 250, height: 310, clip: "polygon(5% 0%, 95% 0%, 95% 100%, 5% 100%)" },
    { src: "/gene.png", width: 400, height: 310, clip: "polygon(5% 0%, 95% 0%, 95% 100%, 5% 100%)" },
    { src: "/gene.png", width: 250, height: 310, clip: "polygon(5% 0%, 95% 0%, 95% 100%, 5% 100%)" },
    { src: "/gene.png", width: 250, height: 310, clip: "polygon(5% 0%, 95% 0%, 95% 100%, 5% 100%)" },
  ],
];



function MarketOpportunity() {
  const [currentSet, setCurrentSet] = useState(0);

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % imageSets.length);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + imageSets.length) % imageSets.length);
  };

  return (
    <div id="Galeria" className="flex flex-col items-center p-4">
      <div className="bg-cyan-100 border border-cyan-500 text-cyan-600 px-4 py-1 rounded-full mb-2 text-sm font-semibold font-inter">
        Atividades em destaques
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center font-inter">Confira algumas imagens dos colaboradores</h2>
      <div className="relative flex flex-col items-center w-full max-w-5xl">
        <div className="flex gap-1 w-full justify-center overflow-hidden items-center h-[400px]">
          {imageSets[currentSet].map((image, index) => (
            <div
              key={index}
              style={{
                width: `${image.width}px`,
                height: `${image.height}px`,
                clipPath: image.clip,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px", // Bordas arredondadas
                overflow: "hidden"
              }}
              className="shadow-lg"
            >
              <img
                src={image.src}
                alt={`Imagem ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <button
            onClick={prevSet}
            className="p-3 bg-gradient-to-b from-[#0D7377] to-[#071A2D] text-white rounded-full shadow-lg hover:from-[#09565A] hover:to-[#050E1A] flex items-center justify-center w-12 h-12"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>
          <button
            onClick={nextSet}
            className="p-3 bg-gradient-to-b from-[#0D7377] to-[#071A2D] text-white rounded-full shadow-lg hover:from-[#09565A] hover:to-[#050E1A] flex items-center justify-center w-12 h-12"
          >
            <ChevronRight size={28} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}







function FAQ() {


  const faqs = [
    {
      question: "Caso o agendamento não se cumprir terei meu dinheiro de volta?",
      answer: "Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos 1500..."
    },
    {
      question: "Caso o agendamento não se cumprir terei meu dinheiro de volta?",
      answer: "Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão..."
    },
    {
      question: "Caso o agendamento não se cumprir terei meu dinheiro de volta?",
      answer: "Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão..."
    },
    {
      question: "Caso o agendamento não se cumprir terei meu dinheiro de volta?",
      answer: "Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão..."
    },
    {
      question: "Caso o agendamento não se cumprir terei meu dinheiro de volta?",
      answer: "Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão..."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="Perguntas" className="max-w-5xl mx-auto p-6">
      <h2 className="text-center text-3xl font-bold mb-6 font-inter">Perguntas frequentes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg transition-all ${openIndex === index ? " bg-gray-100 shadow-md" : "whitespace-normal"}`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className={`font-semibold ${openIndex === index ? "bg-clip-text text-transparent  bg-gradient-to-r  to-[#005694] from-[#002b4c]" : "text-black"}`}>
                {faq.question}
              </span>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: openIndex === index ? 0 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <ArrowDownRight className="text-blue-900" />
                ) : (
                  <ArrowUpRight className="text-gray-500" />
                )}
              </motion.div>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="mt-2 text-gray-700"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-900 to-teal-800 text-white p-8 rounded-2xl shadow-lg">
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <span className="bg-teal-500 px-4 py-1 rounded-full text-sm font-semibold">Esclarecimentos de perguntas</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">
          BAIXE O APP TCHILLA E APROVEITE OS <span className="text-teal-300">NOSSOS SERVIÇOS</span>.
        </h1>
        <p className="mt-4 text-gray-300">
          Fazer o agendamento é muito simples e prático, com apenas alguns cliques terás o seu evento agendado e sem motivos para preocupações.
        </p>
        <div className="flex gap-4 mt-6">
          {/* Botão Google Play */}
          <a href="https://play.google.com/store/apps/details?id=seu.app.id" target="_blank" rel="noopener noreferrer">
            <img src="android.png" alt="Disponível no Google Play" className="w-40 hover:opacity-80 transition-opacity" />
          </a>

          {/* Botão App Store */}
          <a href="https://apps.apple.com/app/id-seu-app-id" target="_blank" rel="noopener noreferrer">
            <img src="iphone.png" alt="Baixar na App Store" className="w-40 hover:opacity-80 transition-opacity" />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-end items-end mt-6 md:mt-0 relative h-full">
        <img src="/appTchilla.png" alt="App Preview" className="w-[800px] h-auto object-contain absolute bottom-[-220px] right-[-140px]" />
      </div>
    </div>
  );
}


