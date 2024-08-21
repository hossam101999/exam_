const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');
const instractorButt= document.querySelector(`.goInstractor`)
const studentButt= document.querySelector(`.goStudent`)
console.log(studentButt,instractorButt)
leftSide.addEventListener('mouseover', () => {
  leftSide.style.flex = '1.3';
  rightSide.style.flex = '0.7';
});

leftSide.addEventListener('mouseout', () => {
  leftSide.style.flex = '1';
  rightSide.style.flex = '1';
});

rightSide.addEventListener('mouseover', () => {
  rightSide.style.flex = '1.3';
  leftSide.style.flex = '0.7';
});

rightSide.addEventListener('mouseout', () => {
  rightSide.style.flex = '1';
  leftSide.style.flex = '1';
});
studentButt.addEventListener("click",function(){
  window.location.href="registration.html"
  window.location.href="registration.html"
  window.localStorage.removeItem("instractor")

})
instractorButt.addEventListener("click",function(){
  window.location.href="registration.html"
  window.localStorage.setItem("instractor",true)
})