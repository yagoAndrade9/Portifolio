const canvas = document.getElementById("stars")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const stars = []
const totalStars = 150

for (let i = 0; i < totalStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.1
  })
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  stars.forEach(star => {
    ctx.beginPath()
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
    ctx.fillStyle = "white"
    ctx.fill()

    star.y += star.speed

    if (star.y > canvas.height) {
      star.y = 0
      star.x = Math.random() * canvas.width
    }
  })

  requestAnimationFrame(drawStars)
}

drawStars()

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

// Registra o plugin ScrollTrigger no GSAP
gsap.registerPlugin(ScrollTrigger)

// Animação da seção "Sobre mim"
// A foto vem da esquerda
gsap.from("#about img", {
  x: -100,        // começa 100px para a esquerda
  opacity: 0,     // começa invisível
  duration: 1,    // dura 1 segundo
  ease: "power3.out"  // tipo de suavização
})

// O texto vem da direita
gsap.from(".about-text", {
  x: 100,         // começa 100px para a direita
  opacity: 0,
  duration: 1,
  ease: "power3.out"
})

// Animação dos títulos das seções ao rolar
gsap.utils.toArray(".section-content h2").forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,   // dispara quando esse elemento aparecer na tela
      start: "top 85%"  // começa quando chegar a 85% da tela
    },
    y: 50,          // vem de baixo
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  })
})

// Animação dos cards de projeto ao rolar
gsap.utils.toArray(".card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    },
    y: 60,
    opacity: 0,
    duration: 0.6,
    delay: index * 0.2,  // cada card entra com um pequeno atraso
    ease: "power3.out"
  })
})

// Animação das habilidades ao rolar
gsap.utils.toArray(".skill").forEach((skill, index) => {
  gsap.from(skill, {
    scrollTrigger: {
      trigger: skill,
      start: "top 90%"
    },
    scale: 0,       // começa com tamanho zero
    opacity: 0,
    duration: 0.4,
    delay: index * 0.1,
    ease: "back.out(1.7)"  // efeito de "quicar"
  })
})

// Animação da seção contato
gsap.from(".contact-content", {
  scrollTrigger: {
    trigger: ".contact-content",
    start: "top 85%"
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
})