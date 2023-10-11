const $name = document.querySelector("h1");
$name.innerText = "Luis Alfonso Martin Velázquez";
//ESTILOS ETIQUETA H1
$name.style.color = "#FF0000";
$name.style.fontFamily = "verdana";
$name.style.textAlign = "center";

const $foto = document.querySelector("img");
$foto.src = "https://media.discordapp.net/attachments/1025054668038090855/1025073197588172942/foto-Dante.png?ex=6531514f&is=651edc4f&hm=ba5f9c41afa2edb3965c9344869e3b1b47fc51a6709dd2f410df958e5551fc00&=&width=443&height=443";
$foto.alt = "Una foto mia";
//ESTILOS FOTO
$foto.style.width = "100%";
$foto.style.borderRadius = "1rem";
$foto.style.height = "auto";

const $bio = document.querySelector("p");
$bio.innerText = "Me llamo dante, un chico de 20 años que le gusta programar en C#, me encanta la logica detrás del mito y el resolver algoritmos sencilllos que me hagan sentir inteligente";
//ESTILOS BIO
$bio.style.fontSize = "22px";
$bio.style.color = "#FFFFFF"
$bio.style.backgroundColor = "#802F80"

const $pasatiempos = document.querySelector("ol");
$pasatiempos.innerHTML = 
"<li>Cocinar</li>" +
"<li>Programar</li>" +
"<li>Papiroflexia</li>"
//ESTILOS PASATIEMPOS
$pasatiempos.style.paddingLeft = "3rem";
$pasatiempos.style.backgroundColor = "#802F80";
$pasatiempos.style.color = "#fffFff";

const $contacto = document.querySelector("ul");
$contacto.innerHTML = ` 
<li>Correo: luigialfmartin@gmail.com</li>
<li>Celular: +52 5583388538</li>
<li>Github: github.com/Wicho115</li>
<li>Discord: danteracoon</li>`
//ESTILOS CONTACTO
$contacto.style.border = "10px"
$contacto.style.borderBlock = "solid"
$contacto.style.borderColor = "blue"


