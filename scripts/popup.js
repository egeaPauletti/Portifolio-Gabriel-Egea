let targetElement = document.getElementById('popup');
let whatsappElement = document.getElementById('socialMedias__whatsapp');

whatsappElement.addEventListener('click', () =>{
    if(targetElement.style.display =="none"){
        targetElement.style.display = "block";
    }else{
        targetElement.style.display = "none"
    }
});