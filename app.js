// import functions and grab DOM elements
//images
const catImg = document.getElementById('cat');
const dogImg = document.getElementById('dog');
const horseImg = document.getElementById('horse');

//audio
const catWav = document.getElementById('cat-wav');
const dogWav = document.getElementById('dog-wav');
const horseWav = document.getElementById('horse-wav');

// initialize global state

// set event listeners 
catImg.addEventListener('click', ()=> {
    catWav.play();
    catImg.classList.remove('rotate');
    setInterval(()=> {
        catImg.classList.add('rotate');
    }, 1);
});

dogImg.addEventListener('click', ()=> {
    dogWav.play();
    dogImg.classList.remove('rotate');
    setInterval(()=> {
        dogImg.classList.add('rotate');
    }, 1);
});

horseImg.addEventListener('click', ()=> {
    horseWav.play();
    horseImg.classList.remove('rotate');
    setInterval(()=> {
        horseImg.classList.add('rotate');
    }, 1);
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
        catWav.play();
    }
    if (event.key === 'd') {
        dogWav.play();
    }
    if (event.key === 'h') {
        horseWav.play();
    }
});


//function rotate(img) {
//    img.classList.remove('rotate');
//    setInterval(()=> {
//        catImg.classList.add('rotate');
//    }, 1);  
//}