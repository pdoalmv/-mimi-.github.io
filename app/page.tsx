"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

interface Confetti {
  id: number
  left: number
  animationDelay: number
  animationDuration: number
  color: string
}

export default function ValentinePage() {
  const [showMainPage, setShowMainPage] = useState(false)
  const [confetti, setConfetti] = useState<Confetti[]>([])

  useEffect(() => {
    if (showMainPage) {
      // Criar confetes quando a página principal aparecer
      const confettiArray: Confetti[] = []
      const colors = ["#ff69b4", "#ff1493", "#dc143c", "#ff6347", "#ffd700", "#ff69b4"]

      for (let i = 0; i < 50; i++) {
        confettiArray.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 3,
          animationDuration: 3 + Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      setConfetti(confettiArray)
    }
  }, [showMainPage])

  const handleHeartClick = () => {
    setShowMainPage(true)
  }

  if (!showMainPage) {
    // Página inicial com coração
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 relative overflow-hidden flex items-center justify-center">
        {/* Estrelas de fundo */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Coração principal */}
        <div className="text-center relative z-10">
          <div className="relative group cursor-pointer" onClick={handleHeartClick}>
            <Heart
              className="w-32 h-32 md:w-48 md:h-48 text-red-500 fill-current transition-all duration-300 group-hover:scale-110 drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 0 30px rgba(255, 20, 147, 0.8))",
                animation: "heartbeat-intro 2s ease-in-out infinite",
              }}
            />
            <div className="absolute inset-0 w-32 h-32 md:w-48 md:h-48 bg-red-500 rounded-full opacity-20 animate-ping" />

            {/* Texto de instrução */}
            <p className="text-white text-lg md:text-xl mt-8 opacity-80 animate-pulse">Clique no coração ❤️</p>
          </div>

          {/* Corações pequenos flutuando */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <Heart
                key={i}
                className="absolute text-pink-400 opacity-40"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  fontSize: `${8 + Math.random() * 12}px`,
                  animation: `float-intro ${4 + Math.random() * 2}s ease-in-out ${Math.random() * 2}s infinite alternate`,
                }}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes heartbeat-intro {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }

          @keyframes float-intro {
            0% {
              transform: translateY(0px) rotate(0deg);
            }
            100% {
              transform: translateY(-15px) rotate(5deg);
            }
          }
        `}</style>
      </div>
    )
  }

  // Página principal (sua mensagem)
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 relative overflow-hidden animate-fade-in"
      style={{
        animation: "fadeIn 1.5s ease-in-out",
      }}
    >
      {/* Estrelas de fundo */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Confetes */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 opacity-80"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animation: `confetti-fall ${piece.animationDuration}s linear ${piece.animationDelay}s infinite`,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
          }}
        />
      ))}

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Coração animado */}
        <div className="mb-8 relative">
          <Heart
            className="w-24 h-24 text-red-500 fill-current animate-pulse drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 20px rgba(255, 20, 147, 0.8))",
              animation: "heartbeat 1.5s ease-in-out infinite",
            }}
          />
          <div className="absolute inset-0 w-24 h-24 bg-red-500 rounded-full opacity-20 animate-ping" />
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
          <span className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-600 bg-clip-text text-transparent">
            Feliz Dia dos Namorados,
          </span>
          <br />
          <span className="text-5xl md:text-7xl animate-pulse">Mimi ❤️</span>
        </h1>

        {/* Mensagem */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
          <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
            Você é o amor da minha vida, minha princesa, minha paz. Estar com você é o que me faz bem de verdade.
            Obrigado por cada momento, cada sorriso, cada abraço. Eu te amo mais do tamanho do universo e mais do que
            palavras conseguem dizer.
          </p>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
            Obrigado por estar ao meu lado. Te amo infinitamente! 💖
          </p>
          <p className="text-xl md:text-2xl text-pink-300 font-semibold">Do seu amor, Pepê 😘</p>
        </div>

        {/* Corações flutuantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-400 opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${10 + Math.random() * 20}px`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out ${Math.random() * 2}s infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>
    </div>
  )
}
