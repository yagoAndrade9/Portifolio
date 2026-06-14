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
// GSAP ANIMAÇÕES
// ═══════════════════════════════
gsap.registerPlugin(ScrollTrigger)

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

gsap.utils.toArray(".project-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    y: 60,
    opacity: 0,
    duration: 0.6,
    delay: index * 0.1,
    ease: "power3.out"
  })
})

gsap.utils.toArray(".timeline-item").forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    x: -60,
    opacity: 0,
    duration: 0.6,
    delay: index * 0.15,
    ease: "power3.out"
  })
})

gsap.from(".contact-grid", {
  scrollTrigger: {
    trigger: ".contact-grid",
    start: "top 85%",
    toggleActions: "play reverse play reverse"
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
})

// ═══════════════════════════════
// CONTADORES
// ═══════════════════════════════
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
// EFEITO DE DIGITAÇÃO
// ═══════════════════════════════
const typedName = document.getElementById("typed-name")
if (typedName) {
  const name = "Yago Andrade Oliveira"
  let i = 0
  function type() {
    if (i < name.length) {
      typedName.textContent += name[i]
      i++
      setTimeout(type, 100)
    }
  }
  setTimeout(type, 1000)
}

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