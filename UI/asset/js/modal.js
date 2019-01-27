const backdrop = document.querySelector('.backdrop');
const close = document.querySelector('.close');
/**
 ===========================================
 OPEN EDIT MODAL
 ===========================================
 */
const list = document.querySelector('.edit');
const display = () =>{
  document.querySelector('.modal').style.display='block';
  backdrop.style.zIndex = '2';
}
list.addEventListener('click', display);
/**
===========================================
CLOSE EDIT MODAL
===========================================
*/
const closeModal = () =>{
  document.querySelector('.modal').style.display='none'
  backdrop.style.zIndex = '-1';
}

close.addEventListener('click', closeModal)
