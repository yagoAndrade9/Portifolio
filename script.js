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

gsap.registerPlugin(ScrollTrigger)

gsap.from("#about img", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
})

gsap.from(".about-text", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
})

gsap.utils.toArray(".section-content h2").forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  })
})

gsap.utils.toArray(".card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    y: 60,
    opacity: 0,
    duration: 0.6,
    delay: index * 0.2,
    ease: "power3.out"
  })
})

gsap.utils.toArray(".skill").forEach((skill, index) => {
  gsap.from(skill, {
    scrollTrigger: {
      trigger: skill,
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    scale: 0,
    opacity: 0,
    duration: 0.4,
    delay: index * 0.1,
    ease: "back.out(1.7)"
  })
})

gsap.from(".contact-content", {
  scrollTrigger: {
    trigger: ".contact-content",
    start: "top 85%",
    toggleActions: "play reverse play reverse"
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
})

const cursor = document.getElementById("cursor")
const cursorDot = document.getElementById("cursor-dot")

window.addEventListener("mousemove", e => {
  // O círculo grande segue com delay
  gsap.to(cursor, {
    x: e.clientX - 10,
    y: e.clientY - 10,
    duration: 0.15
  })

  // O ponto pequeno segue instantaneamente
  gsap.to(cursorDot, {
    x: e.clientX - 3,
    y: e.clientY - 3,
    duration: 0
  })
})

// Efeito ao passar em cima de links e botões
document.querySelectorAll("a, button, .skill").forEach(el => {
  el.addEventListener("mouseenter", () => {
    gsap.to(cursor, { scale: 2, duration: 0.2 })
  })
  el.addEventListener("mouseleave", () => {
    gsap.to(cursor, { scale: 1, duration: 0.2 })
  })
})

const progressBar = document.getElementById("progress-bar")

window.addEventListener("scroll", () => {
  // Calcula quantos % da página já foi rolado
  const scrollTop = window.scrollY
  const docHeight = document.body.scrollHeight - window.innerHeight
  const progress = (scrollTop / docHeight) * 100

  progressBar.style.width = progress + "%"
})