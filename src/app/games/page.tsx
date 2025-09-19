"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Trophy, Clock, Users, Play, RotateCcw } from "lucide-react"
import { useState, useEffect } from "react"

export default function GamesPage() {
  const [currentGame, setCurrentGame] = useState<string | null>(null)
  const [gameState, setGameState] = useState<any>(null)

  // Number Guessing Game
  const NumberGuessingGame = () => {
    const [target, setTarget] = useState(Math.floor(Math.random() * 100) + 1)
    const [guess, setGuess] = useState("")
    const [attempts, setAttempts] = useState(0)
    const [message, setMessage] = useState("Tebak angka antara 1-100!")
    const [gameOver, setGameOver] = useState(false)

    const handleGuess = () => {
      const num = parseInt(guess)
      if (isNaN(num)) return

      const newAttempts = attempts + 1
      setAttempts(newAttempts)

      if (num === target) {
        setMessage(`🎉 Selamat! Kamu menebak dengan benar dalam ${newAttempts} percobaan!`)
        setGameOver(true)
      } else if (num < target) {
        setMessage("Terlalu rendah! Coba lagi.")
      } else {
        setMessage("Terlalu tinggi! Coba lagi.")
      }

      setGuess("")
    }

    const resetGame = () => {
      setTarget(Math.floor(Math.random() * 100) + 1)
      setGuess("")
      setAttempts(0)
      setMessage("Tebak angka antara 1-100!")
      setGameOver(false)
    }

    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5" />
            Number Guessing Game
          </CardTitle>
          <CardDescription>
            Tebak angka yang dipilih komputer antara 1-100
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="font-semibold text-lg">{message}</p>
            <p className="text-sm text-muted-foreground mt-1">
              Percobaan: {attempts}
            </p>
          </div>
          
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              max="100"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              disabled={gameOver}
              className="flex-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan tebakan..."
            />
            <Button onClick={handleGuess} disabled={gameOver}>
              Tebak
            </Button>
          </div>
          
          {gameOver && (
            <Button onClick={resetGame} variant="outline" className="w-full">
              <RotateCcw className="w-4 h-4 mr-2" />
              Main Lagi
            </Button>
          )}
        </CardContent>
      </Card>
    )
  }

  // Rock Paper Scissors Game
  const RockPaperScissorsGame = () => {
    const choices = ["✊", "✋", "✌️"]
    const [playerChoice, setPlayerChoice] = useState<string | null>(null)
    const [computerChoice, setComputerChoice] = useState<string | null>(null)
    const [result, setResult] = useState<string>("Pilih jagoanmu!")
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)

    const playGame = (choice: string) => {
      const computer = choices[Math.floor(Math.random() * choices.length)]
      setPlayerChoice(choice)
      setComputerChoice(computer)

      if (choice === computer) {
        setResult("Seri!")
      } else if (
        (choice === "✊" && computer === "✌️") ||
        (choice === "✋" && computer === "✊") ||
        (choice === "✌️" && computer === "✋")
      ) {
        setResult("Kamu Menang! 🎉")
        setPlayerScore(playerScore + 1)
      } else {
        setResult("Komputer Menang! 🤖")
        setComputerScore(computerScore + 1)
      }
    }

    const resetGame = () => {
      setPlayerChoice(null)
      setComputerChoice(null)
      setResult("Pilih jagoanmu!")
      setPlayerScore(0)
      setComputerScore(0)
    }

    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5" />
            Rock Paper Scissors
          </CardTitle>
          <CardDescription>
            Lawan komputer dalam permainan jagoan klasik
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Kamu</p>
              <p className="text-2xl font-bold text-primary">{playerScore}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">VS</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Komputer</p>
              <p className="text-2xl font-bold text-primary">{computerScore}</p>
            </div>
          </div>

          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="font-semibold text-lg">{result}</p>
            {playerChoice && computerChoice && (
              <div className="flex justify-center items-center gap-4 mt-2">
                <span className="text-3xl">{playerChoice}</span>
                <span className="text-muted-foreground">vs</span>
                <span className="text-3xl">{computerChoice}</span>
              </div>
            )}
          </div>

          <div className="flex justify-center gap-4">
            {choices.map((choice) => (
              <Button
                key={choice}
                variant="outline"
                size="lg"
                className="text-3xl w-16 h-16"
                onClick={() => playGame(choice)}
              >
                {choice}
              </Button>
            ))}
          </div>

          <Button onClick={resetGame} variant="outline" className="w-full">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Skor
          </Button>
        </CardContent>
      </Card>
    )
  }

  // Memory Card Game
  const MemoryCardGame = () => {
    const symbols = ["🎮", "🎯", "🎲", "🎪", "🎨", "🎭", "🎪", "🎯"]
    const [cards, setCards] = useState<string[]>([])
    const [flipped, setFlipped] = useState<number[]>([])
    const [matched, setMatched] = useState<number[]>([])
    const [moves, setMoves] = useState(0)

    useEffect(() => {
      resetGame()
    }, [])

    const resetGame = () => {
      const shuffled = [...symbols, ...symbols].sort(() => Math.random() - 0.5)
      setCards(shuffled)
      setFlipped([])
      setMatched([])
      setMoves(0)
    }

    const flipCard = (index: number) => {
      if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return

      const newFlipped = [...flipped, index]
      setFlipped(newFlipped)

      if (newFlipped.length === 2) {
        setMoves(moves + 1)
        const [first, second] = newFlipped
        if (cards[first] === cards[second]) {
          setMatched([...matched, first, second])
          setFlipped([])
        } else {
          setTimeout(() => setFlipped([]), 1000)
        }
      }
    }

    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5" />
            Memory Card Game
          </CardTitle>
          <CardDescription>
            Cocokkan pasangan kartu dengan ingatanmu
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="font-semibold">Moves: {moves}</p>
            <p className="text-sm text-muted-foreground">
              Matched: {matched.length / 2} / {symbols.length}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {cards.map((symbol, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full h-16 text-2xl"
                onClick={() => flipCard(index)}
                disabled={flipped.length === 2}
              >
                {flipped.includes(index) || matched.includes(index) ? symbol : "❓"}
              </Button>
            ))}
          </div>

          {matched.length === cards.length && (
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <p className="font-semibold text-lg">🎉 Selamat! Kamu menang!</p>
              <p className="text-sm text-muted-foreground">Total moves: {moves}</p>
            </div>
          )}

          <Button onClick={resetGame} variant="outline" className="w-full">
            <RotateCcw className="w-4 h-4 mr-2" />
            Main Lagi
          </Button>
        </CardContent>
      </Card>
    )
  }

  const games = [
    {
      id: "number-guessing",
      title: "Number Guessing",
      description: "Tebak angka yang dipilih komputer",
      difficulty: "Mudah",
      component: <NumberGuessingGame />
    },
    {
      id: "rock-paper-scissors",
      title: "Rock Paper Scissors",
      description: "Lawan komputer dalam permainan klasik",
      difficulty: "Mudah",
      component: <RockPaperScissorsGame />
    },
    {
      id: "memory-card",
      title: "Memory Card",
      description: "Uji ingatanmu dengan mencocokkan kartu",
      difficulty: "Sedang",
      component: <MemoryCardGame />
    }
  ]

  if (currentGame) {
    const game = games.find(g => g.id === currentGame)
    return (
      <div className="min-h-screen">
        <Navigation />
        
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentGame(null)}
                  className="mb-4"
                >
                  ← Kembali ke Game List
                </Button>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{game?.title}</h1>
                <p className="text-lg text-muted-foreground">{game?.description}</p>
              </div>
              
              {game?.component}
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Games & Entertainment
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Game Interaktif Trinity
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Mainkan berbagai game seru yang dikembangkan oleh anggota Trinity Club
            </p>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Koleksi Game</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilih game yang ingin kamu mainkan dan uji kemampuanmu!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {games.map((game) => (
              <Card key={game.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Gamepad2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{game.title}</CardTitle>
                    <Badge variant={game.difficulty === "Mudah" ? "default" : "secondary"}>
                      {game.difficulty}
                    </Badge>
                  </div>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => setCurrentGame(game.id)}
                    className="w-full group-hover:bg-primary/90 transition-colors"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Mainkan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Bermain Game Kami?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Game-game ini tidak hanya untuk hiburan, tapi juga untuk mengasah kemampuan logika dan pemrograman
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Mengasah Logika</h3>
              <p className="text-muted-foreground">
                Game dirancang untuk melatih pemikiran logis dan problem solving
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Interaktif</h3>
              <p className="text-muted-foreground">
                Pengalaman bermain yang menarik dan responsif
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Edukatif</h3>
              <p className="text-muted-foreground">
                Belajar konsep programming melalui permainan yang menyenangkan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}