const passInput = document.querySelector
('input[type=password]');
const icon = document.querySelector('i');
passInput.addEventListener('input', function(){
    if (this.value.length > 0){
    icon.classList.add('show');
   }else{
    icon.classList.remove('show');
   }
});

icon.addEventListener('mousedown',function(){
    passInput.setAttribute('type', 'text');
});
icon.addEventListener('mouseup',function(){
    passInput.setAttribute('type', 'password');
});


/*const input = document.querySelector('.myinput'); 
input.addEventListener('input', () => {
  if (input.value.length >= 6) {
    input.classList.add('orange-border');
    if (input.value.length >= 7) {
      input.classList.add('green-border');
      input.classList.remove('orange-border'); 
    }
  } else {
    input.classList.remove('orange-border');
    input.classList.remove('green-border'); 
  }
});*/

const input = document.querySelector('.myinput');

input.addEventListener('input', () => {
  if (input.value.length >= 7) {
    input.classList.add('green-border');
    input.classList.remove('orange-border');
  } else if (input.value.length >= 1) {
    input.classList.add('orange-border');
    input.classList.remove('green-border');
  } else {
    input.classList.remove('orange-border');
    input.classList.remove('green-border');
  }
});


























