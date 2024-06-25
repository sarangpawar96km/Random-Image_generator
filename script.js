const images=["/images/img-1.jpg",
"/images/img-2.jpg",
"/images/img-3.jpg",
"/images/img-4.jpg",
"/images/bg.jpg"];

const btn=document.querySelector('.button button');
const imagecontainer=document.querySelector('.image-container');
const randomnumbertext=document.querySelector(".random-number h4");
const body=document.querySelector('body');
const mode=document.querySelector('.mode');
const footer=document.querySelector('.footer h2');
let createimage=document.createElement("img");
imagecontainer.innerHTML="";
randomnumbertext.innerText="";
btn.addEventListener('click',()=>{
   let randomnumber=Math.floor(Math.random()*images.length);
   randomnumbertext.innerText=randomnumber;
   let randomimage=images[randomnumber];
   createimage.src=randomimage;
   imagecontainer.appendChild(createimage);
})
mode.addEventListener('click',()=>{
    if(mode.innerText==="Dark Mode"){
        body.style.backgroundColor="black";
        randomnumbertext.style.color="white";
        footer.style.color="white";
        mode.innerText="Light Mode"
        mode.classList.add('light');
    }
    else{
        body.style.backgroundColor="White";
        randomnumbertext.style.color="black";
        footer.style.color="black";
        mode.innerText="Dark Mode"
        mode.classList.remove('light');
    }
})

