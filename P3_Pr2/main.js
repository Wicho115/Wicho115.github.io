const imageController = {
    currentIndex : 0,

    getNextImage : function(){
        
        if(this.currentIndex >= 2){
            this.currentIndex = 0;
        }
        return this.imageUrls[this.currentIndex++];
    },

    imageUrls : [
        "https://media.discordapp.net/attachments/1025054668038090855/1025073197588172942/foto-Dante.png?ex=6531514f&is=651edc4f&hm=ba5f9c41afa2edb3965c9344869e3b1b47fc51a6709dd2f410df958e5551fc00&=&width=443&height=443",
        "https://media.discordapp.net/attachments/1025054668038090855/1163672275426476042/remix-e61e3bc9-4e9c-4806-b6d2-1a83c5296e01.png?ex=65406d42&is=652df842&hm=40669ba9b29b23e8fe55b7a02bcdb47fccee7538b22c81e1cc68abb2a7eb32e5&=&width=675&height=675"
    ]
}

const $name = document.querySelector("h1");
$name.innerText = "Luis Alfonso Martin Velázquez";
//ESTILOS ETIQUETA H1
$name.style.color = "#FF0000";
$name.style.fontFamily = "verdana";
$name.style.textAlign = "center";

$name.addEventListener("mouseenter", function(e){
    this.style.color = "#0FFF00"
})

$name.addEventListener("mouseleave", function(e){
    this.style.color = "#FF0000"
})

const $foto = document.querySelector("img");
$foto.src = imageController.getNextImage();
$foto.alt = "Una foto mia";
//ESTILOS FOTO
$foto.style.width = "100%";
$foto.style.borderRadius = "1rem";
$foto.style.height = "auto";

$foto.addEventListener("click", function(event){
    this.src = imageController.getNextImage();
})

const $bio = document.querySelector("p");
$bio.innerText = "Me llamo dante, un chico de 20 años que le gusta programar en C#, me encanta la logica detrás del mito y el resolver algoritmos sencilllos que me hagan sentir inteligente";
//ESTILOS BIO
$bio.style.fontSize = "22px";
$bio.style.color = "#FFFFFF"
$bio.style.backgroundColor = "#802F80"

const $pasatiempos = document.querySelector("ol");
$pasatiempos.innerHTML = 
"<li class='meGusta'>Cocinar</li>" +
"<li class='meGusta'>Programar</li>" +
"<li class='meGusta'>La Papiroflexia</li>"
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

document.addEventListener("click", e =>{
    if(e.target.matches(".meGusta")){
        alert(`Me gusta bastante ${e.target.innerText}`);
    }
})
