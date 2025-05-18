document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form")
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const username = document.getElementById("username").value
      const password = document.getElementById("password").value
  
      // Validação simples
      if (!username || !password) {
        alert("Por favor, preencha todos os campos!")
        return
      }
  
      // Em um sistema real, você enviaria esses dados para um servidor
      // Para este exemplo, vamos apenas simular um login bem-sucedido
  
      // Simulando verificação de credenciais (em produção, isso seria feito no servidor)
      if (username === "admin" && password === "admin123") {
        // Armazenar informação de login (em produção, usaria tokens JWT ou similar)
        localStorage.setItem("loggedIn", "true")
        localStorage.setItem("username", username)
  
        // Redirecionar para o dashboard
        window.location.href = "dashboard.html"
      } else {
        alert("Credenciais inválidas. Tente novamente.")
      }
    })
  })
  