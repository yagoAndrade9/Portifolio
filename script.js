// ═══════════════════════════════
// ESTRELAS
// ═══════════════════════════════
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
    ctx.fillStyle = document.body.classList.contains("light") ? "#111111" : "white"
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

// ═══════════════════════════════
// GSAP — SÓ ANIMAÇÕES DE ENTRADA
// ═══════════════════════════════
gsap.from(".about-image", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
})

gsap.from(".about-text", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
})

// ═══════════════════════════════
// CONTADORES
// ═══════════════════════════════
gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray(".counter").forEach(counter => {
  const target = parseInt(counter.getAttribute("data-target"))
  gsap.to(counter, {
    scrollTrigger: {
      trigger: counter,
      start: "top 90%",
    },
    innerHTML: target,
    duration: 2,
    ease: "power2.out",
    snap: { innerHTML: 1 }
  })
})

// ═══════════════════════════════
// BOTÃO VOLTAR AO TOPO
// ═══════════════════════════════
const backToTop = document.getElementById("back-to-top")
if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("visible")
    } else {
      backToTop.classList.remove("visible")
    }
  })
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
}

// ═══════════════════════════════
// TEMA CLARO/ESCURO
// ═══════════════════════════════
const themeToggle = document.getElementById("theme-toggle")
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light")
    themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙"
  })
}

// ═══════════════════════════════
// ABAS
// ═══════════════════════════════
function showTab(tab, el) {
  document.querySelectorAll('.tab-content').forEach(function(t) {
    t.classList.remove('active')
  })
  document.querySelectorAll('.tab').forEach(function(t) {
    t.classList.remove('active')
  })
  document.getElementById('tab-' + tab).classList.add('active')
  el.classList.add('active')
}

// ═══════════════════════════════
// ANIMAÇÃO DA JORNADA
// ═══════════════════════════════
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    } else {
      entry.target.classList.remove('visible')
    }
  })
}, { threshold: 0.2 })

document.querySelectorAll('.timeline-item').forEach(item => {
  timelineObserver.observe(item)
})