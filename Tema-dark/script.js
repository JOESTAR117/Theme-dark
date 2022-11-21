const button = document.getElementById('button')
const page = document.querySelector("body")

button.addEventListener("click", ()=>{
    page.classList.toggle("modo-noturno")
    page.style.transition = "0.5s";
    if(page.className == "modo-noturno"){
        button.textContent = "Desativar"
    }else{
        button.textContent = "Ativar"
    }
    })
