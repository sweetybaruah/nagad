var slide_1 = document.querySelector('.slide_1');
var element4 = document.querySelector('.element4')
var slide_2 = document.querySelector('.slide_2')
var element4 = document.querySelector('.element4');
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var img3 = document.querySelector('.img3');
var img4 = document.querySelector('.img4');
var img5 = document.querySelector('.img5');
var img6 = document.querySelector('.img6');
var img7 = document.querySelector('.img7');
var img8 = document.querySelector('.img8');
var img9 = document.querySelector('.img9');
var img10 = document.querySelector('.img10');
gsap.to('.element1',{scaleX: 1.1, scaleY: 1.1, duration: .5, repeat: -1, yoyo: true })
TweenMax.to('.element5',8, {
        attr:{"baseFrequency":0.01},
        repeat:-1,
        yoyo:true})
var random = 0, temp='', clicked=0;

// slide_1.addEventListener('click', ()=>{
//     var num=0;
//     spin_wheel()
// function spin_wheel() {
//     num= Math.floor(Math.random() * 9) + 1;
//     console.log(num)
//     random+=3600;
//     console.log(random)
//     var value = random + [36, 72, 108, 144, 180, 216, 252, 288, 324, 360][num];
//     console.log(value)
//     element4.style.transform = "rotate(" +  value + "deg)";
//     luckyDraw(num);
// }
// var element1= document.querySelector('.element1')
// var element2= document.querySelector('.element2')
// var element3= document.querySelector('.element3')
// var element5= document.querySelector('.element4')
// var slideimg= document.querySelector('.slideimg')

// function loadGb(value) {
//     value.style.width = "300px";
//     value.style.height = "250px";
//     // value.className = value.className.replace("hidden", "zoomIn");
//     setTimeout(()=>{
//         element4.classList.add('hidden')
//         slide_2.classList.remove('hidden')
//     },6000)

// }
  

// function luckyDraw(value){
//     console.log("lucky ")
//     switch (value) {
//         case 1:loadGb(img1);break;
//         case 2:loadGb(img2);break;
//         case 3:loadGb(img3);break;
//         case 4:loadGb(img4);break;
//         case 5:loadGb(img5);break;
//         case 6:loadGb(img6);break;
//         case 7:loadGb(img7);break;
//         case 8:loadGb(img8);break;
//         case 9:loadGb(img9);break;
//         case 10:loadGb(img10);break;
//         default:console.log("try again!"); break;
//       }
// }

// })
animation = gsap.timeline();
animation.from('.element8', {top: -91, duration: 1,  repeat: 0})
        .from('.element9', {scale:.3, opacity: .6})
        .from('.element11', {left: 300,duration: .7})