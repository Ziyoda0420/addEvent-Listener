

let userInput = document.querySelector('input'); 
let numberText = document.querySelector('.father p'); 
let button = document.querySelector('#butter'); 

// Faqat son kiritish uchun event
userInput.addEventListener('input', () => {
    // Faqat raqamlarni qabul qilish
    userInput.value = userInput.value.replace(/[^0-9]/g, '');
});

let images = document.querySelectorAll('.father img'); // Hamma <img> elementlarini olish

images.forEach((img) => {
    img.addEventListener('click', () => {
        let currentValue = parseInt(numberText.textContent, 10); // <p> dagi hozirgi sonni olish
        
        if (img.classList.contains('zz')) {
            // Agar bosilgan rasmda 'zz' classi bo‘lsa, kamaytirish
            numberText.textContent = currentValue - 1 ;
            
        }
        
        //  else if (currentValue > 0) { // Son manfiy bo'lmasligi uchun
        //                 numberText.textContent = currentValue - 1; // 1 ga kamaytirish
        //             }
        else {
            // Aks holda, oshirish
            numberText.textContent = currentValue + 1;
        }
    });
});




// Tugma bosilganda <p> ni yangilash
button.addEventListener('click', () => {
    if (userInput.value !== '') {
        numberText.textContent = userInput.value; // <p> ni yangilash
        // userInput.value = ''; // Inputni tozalash
    }
});


const items = document.querySelectorAll('img'); 

items.forEach((imgElement) => {  
    imgElement.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'green'; 
    });
});
const ziyo = Array.from(document.getElementsByClassName('zz'));

ziyo.forEach((ziyoElement) => {
    ziyoElement.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'red';
    });
});

document.getElementById("color-picker").addEventListener("change", function() {
    document.querySelector(".father p").style.color = this.value;
});


