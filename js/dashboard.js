document.addEventListener("DOMContentLoaded", () => {
    // Verificar se o usuário está logado
    const isLoggedIn = localStorage.getItem("loggedIn")
    if (!isLoggedIn || isLoggedIn !== "true") {
      // Redirecionar para a página de login se não estiver logado
      window.location.href = "login.html"
      return
    }
  
    // Exibir nome do usuário
    const username = localStorage.getItem("username")
    const usernameDisplay = document.getElementById("username-display")
    if (usernameDisplay && username) {
      usernameDisplay.textContent = username
    }
  
    // Funcionalidade de toggle do menu para dispositivos móveis
    const toggleMenu = document.getElementById("toggle-menu")
    const sidebar = document.getElementById("sidebar")
  
    if (toggleMenu && sidebar) {
      toggleMenu.addEventListener("click", () => {
        sidebar.classList.toggle("active")
      })
    }
  
    // Funcionalidade de logout
    const logoutBtn = document.getElementById("logout-btn")
    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault()
  
        // Limpar dados de login
        localStorage.removeItem("loggedIn")
        localStorage.removeItem("username")
  
        // Redirecionar para a página de login
        window.location.href = "login.html"
      })
    }
  
    // Adicionar classe active ao item de menu atual
    const currentPage = window.location.pathname.split("/").pop()
    const menuItems = document.querySelectorAll(".menu-item")
  
    menuItems.forEach((item) => {
      const itemHref = item.getAttribute("href")
      if (itemHref === currentPage) {
        item.classList.add("active")
      } else if (currentPage === "" && itemHref === "dashboard.html") {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })
  })
  