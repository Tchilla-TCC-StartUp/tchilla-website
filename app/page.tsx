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
} from "lucide-react"
import Image from "next/image"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

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

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 font-sans">
      <Particles
        id="tsparticles"
        init={particlesInit}
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
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-sm">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4kkYkastOdLpSPvzoDGfRSpdpc6q8u.png"
            alt="Tchilla Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <div className="flex space-x-4">
            <a href="#for-business" className="text-sm text-gray-600 hover:text-gray-900">
              Para Empresas
            </a>
            <button className="bg-gradient-to-r from-[#002B4C] to-[#005694] text-white px-4 py-2 rounded-full text-sm hover:from-[#003a66] hover:to-[#0077CC] transition-all duration-300 transform hover:scale-105">
              Baixe Agora
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16 px-4">
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
        Transforme Sonhos em Eventos Inesquecíveis
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
          src="/homepage.png?height=600&width=300"
          alt="Tchilla App Interface"
          className="w-64 h-auto mx-auto rounded-3xl shadow-2xl"
          // animate={{
          //   rotateY: [0, 360],
          //   boxShadow: [
          //     "0 25px 50px -12px rgba(0, 43, 76, 0.25)",
          //     "0 25px 50px -12px rgba(0, 86, 148, 0.25)",
          //     "0 25px 50px -12px rgba(0, 43, 76, 0.25)",
          //   ],
          // }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          <Party size={48} className="text-[#002B4C]" />
        </motion.div>
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
  const features = [
    {
      icon: Calendar,
      title: "Plataforma Integrada",
      description: "Conecte-se a locais, fornecedores e agências de eventos em um só lugar mágico.",
    },
    {
      icon: DollarSign,
      title: "Pagamento Unificado",
      description: "Simplifique com um único pagamento para todos os serviços.",
    },
    {
      icon: Zap,
      title: "Gerenciamento em Tempo Real",
      description: "Controle total com ferramentas para gerenciar atividades, eventos e lucros instantaneamente.",
    },
  ]

  return (
    <div className="space-y-16">
      <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#002B4C] to-[#005694]">
        Recursos Mágicos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <feature.icon size={48} className="mx-auto text-[#002B4C] mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function AppShowcase() {
  const [activeScreen, setActiveScreen] = useState(0)
  const screens = [
    {
      title: "Painel de Eventos",
      image: "/placeholder.svg?height=500&width=230",
      description: "Visualize e gerencie todos os seus eventos em um único lugar.",
    },
    {
      title: "Lista de Convidados",
      image: "/placeholder.svg?height=500&width=230",
      description: "Gerencie convidados, RSVPs e detalhes com facilidade.",
    },
    {
      title: "Linha do Tempo",
      image: "/placeholder.svg?height=500&width=230",
      description: "Planeje cada momento do seu evento com precisão.",
    },
  ]

  return (
    <div className="space-y-16">
      <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#002B4C] to-[#005694]">
        Experiência Encantadora
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="w-full md:w-1/2">
          <motion.img
            key={activeScreen}
            src={screens[activeScreen].image || "/placeholder.svg"}
            alt={screens[activeScreen].title}
            className="w-[230px] h-auto mx-auto rounded-xl shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold">{screens[activeScreen].title}</h3>
          <p className="text-gray-600">{screens[activeScreen].description}</p>
          <div className="flex justify-center gap-2">
            {screens.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeScreen ? "bg-[#002B4C]" : "bg-gray-300"}`}
                onClick={() => setActiveScreen(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SuccessStories() {
  const stories = [
    {
      title: "Casamento dos Sonhos",
      description: "Sara e João realizaram o casamento perfeito com a ajuda do Tchilla.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Conferência Empresarial de Sucesso",
      description: "A empresa XYZ organizou uma conferência para 500 pessoas sem estresse.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Festival de Música Memorável",
      description: "O Festival Sonoro atraiu 10.000 fãs com uma organização impecável.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="space-y-16">
      <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#002B4C] to-[#005694]">
        Histórias de Sucesso
      </h2>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {stories.map((story, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={story.image || "/placeholder.svg"}
              alt={story.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
            <p className="text-gray-600">{story.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

function MarketOpportunity() {
  return (
    <div id="for-business" className="space-y-16">
      <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#002B4C] to-[#005694]">
        Oportunidade de Mercado
      </h2>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"
          >
            <Globe size={48} className="text-[#002B4C] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Mercado Global</h3>
            <p className="text-gray-700">
              O mercado global de organização de eventos é avaliado em mais de US$ 800 bilhões, com crescimento
              contínuo.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-lg"
          >
            <Users size={48} className="text-[#002B4C] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Crescimento em Angola</h3>
            <p className="text-gray-700">
              Angola apresenta uma crescente demanda por soluções inovadoras para eventos corporativos, sociais e
              culturais.
            </p>
          </motion.div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl text-gray-700 font-semibold">
            Junte-se a nós na missão de revolucionar o planejamento de eventos e transformar experiências em memórias
            inesquecíveis!
          </p>
        </div>
      </div>
    </div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Como a Tchilla torna o planejamento de eventos mais mágico?",
      answer:
        "A Tchilla transforma o planejamento de eventos em uma experiência encantadora, oferecendo uma plataforma integrada que conecta organizadores, fornecedores e locais em um só lugar. Com ferramentas intuitivas e recursos inovadores, tornamos cada etapa do processo mais simples, eficiente e emocionante.",
    },
    {
      question: "Quais são os benefícios para fornecedores e prestadores de serviços?",
      answer:
        "Os fornecedores ganham acesso a um mundo de oportunidades com a Tchilla. Nossa plataforma oferece ferramentas poderosas para gerenciar atividades, eventos e lucros em tempo real, além de aumentar a visibilidade para novos clientes. É como ter uma varinha mágica para expandir seus negócios!",
    },
    {
      question: "A Tchilla é adequada para eventos de todos os tamanhos?",
      answer:
        "Absolutamente! A Tchilla foi projetada para atender desde pequenas reuniões íntimas até grandes conferências e festivais. Nossa plataforma escala magicamente para se adaptar às necessidades de qualquer evento, garantindo uma experiência perfeita para todos os usuários.",
    },
  ]

  return (
    <div className="space-y-16">
      <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#002B4C] to-[#005694]">
        Perguntas Frequentes
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-200 pb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold text-lg text-[#002B4C]">{faq.question}</span>
              {openIndex === index ? (
                <Minus size={20} className="text-[#002B4C]" />
              ) : (
                <Plus size={20} className="text-[#002B4C]" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function CTA() {
  return (
    <motion.div
      className="text-center space-y-8 bg-gradient-to-r from-[#002B4C] to-[#005694] p-12 rounded-3xl shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white">Pronto para Encantar seus Convidados?</h2>
      <p className="text-xl text-blue-100 max-w-2xl mx-auto">
        Junte-se a milhares de criadores de eventos mágicos que confiam na Tchilla para transformar sonhos em realidade.
      </p>
      <motion.button
        className="bg-white text-[#002B4C] px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Comece sua Jornada Mágica
      </motion.button>
      <div className="flex justify-center space-x-4 mt-6">
        <motion.div whileHover={{ scale: 1.1 }} className="text-white">
          <Gift size={32} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="text-white">
          <Music size={32} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="text-white">
          <Party size={32} />
        </motion.div>
      </div>
    </motion.div>
  )
}

