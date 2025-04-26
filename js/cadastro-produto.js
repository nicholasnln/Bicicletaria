document.addEventListener("DOMContentLoaded", () => {
    // Verificar se o usuário está logado
    const isLoggedIn = localStorage.getItem("loggedIn")
    if (!isLoggedIn || isLoggedIn !== "true") {
      // Redirecionar para a página de login se não estiver logado
      window.location.href = "login.html"
      return
    }
  
    // Funcionalidade de upload de imagem
    const imageUploadContainer = document.getElementById("image-upload-container")
    const productImageInput = document.getElementById("product-image")
    const imagePreview = document.getElementById("image-preview")
  
    if (imageUploadContainer && productImageInput && imagePreview) {
      // Abrir o seletor de arquivo ao clicar no container
      imageUploadContainer.addEventListener("click", () => {
        productImageInput.click()
      })
  
      // Exibir preview da imagem quando selecionada
      productImageInput.addEventListener("change", function () {
        const file = this.files[0]
        if (file) {
          const reader = new FileReader()
  
          reader.onload = (e) => {
            imagePreview.src = e.target.result
            imagePreview.style.display = "block"
          }
  
          reader.readAsDataURL(file)
        }
      })
  
      // Funcionalidade de arrastar e soltar
      ;["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
        imageUploadContainer.addEventListener(eventName, preventDefaults, false)
      })
  
      function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
      }
      ;["dragenter", "dragover"].forEach((eventName) => {
        imageUploadContainer.addEventListener(eventName, highlight, false)
      })
      ;["dragleave", "drop"].forEach((eventName) => {
        imageUploadContainer.addEventListener(eventName, unhighlight, false)
      })
  
      function highlight() {
        imageUploadContainer.classList.add("highlight")
      }
  
      function unhighlight() {
        imageUploadContainer.classList.remove("highlight")
      }
  
      imageUploadContainer.addEventListener("drop", handleDrop, false)
  
      function handleDrop(e) {
        const dt = e.dataTransfer
        const file = dt.files[0]
  
        if (file && file.type.match("image.*")) {
          productImageInput.files = dt.files
  
          const reader = new FileReader()
          reader.onload = (e) => {
            imagePreview.src = e.target.result
            imagePreview.style.display = "block"
          }
          reader.readAsDataURL(file)
        }
      }
    }
  
    // Funcionalidade do formulário de cadastro
    const productForm = document.getElementById("product-form")
    const cancelBtn = document.getElementById("cancel-btn")
  
    if (productForm) {
      productForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Coletar dados do formulário
        const productData = {
          description: document.getElementById("description").value,
          manufacturer: document.getElementById("manufacturer").value,
          salePrice: document.getElementById("sale-price").value,
          costPrice: document.getElementById("cost-price").value,
          category: document.getElementById("category").value,
          stock: document.getElementById("stock").value,
          image: productImageInput.files[0] ? productImageInput.files[0].name : null,
        }
  
        // Em um sistema real, você enviaria esses dados para um servidor
        // Para este exemplo, vamos apenas simular o salvamento
  
        // Armazenar no localStorage para simular um banco de dados
        const products = JSON.parse(localStorage.getItem("products")) || []
        products.push(productData)
        localStorage.setItem("products", JSON.stringify(products))
  
        // Exibir mensagem de sucesso
        alert("Produto cadastrado com sucesso!")
  
        // Limpar o formulário
        productForm.reset()
        imagePreview.style.display = "none"
      })
    }
  
    if (cancelBtn) {
      cancelBtn.addEventListener("click", () => {
        // Limpar o formulário
        productForm.reset()
        imagePreview.style.display = "none"
  
        // Voltar para a página anterior ou para o dashboard
        window.location.href = "dashboard.html"
      })
    }
  })
  