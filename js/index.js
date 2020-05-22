let data = new Date();
let hora = data.getHours();
let minutos = data.getMinutes();

let texto = document.querySelector("#mudanca-info p");
texto.innerText = `São exatamente ${hora}:${minutos}`;
