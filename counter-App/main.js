let increase = document.querySelector('.btn-inc');
let decrease = document.querySelector('.btn-dec');
let reset = document.querySelector('.btn-reset');
let counter = document.getElementById('counter');
var count = 0;
counter.innerHTML = count;

increase.addEventListener('click',function(){
  count++;
  counter.innerHTML = count;
})

decrease.addEventListener('click',function(){
  count--;
  counter.innerHTML = count;
})

reset.addEventListener('click',function(){
  count = 0;
  counter.innerHTML = count;
})




