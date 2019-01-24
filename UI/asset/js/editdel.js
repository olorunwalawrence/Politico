
/**
 ===========================================
RESPONSIVENESS FUNCTION
 ===========================================
 */
const myFunction = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/**
 ===========================================
 OPEN EDIT MODAL
 ===========================================
 */
  const list = document.querySelector('.edit');
  const display = () =>{
    document.querySelector('.modal').style.display='block'
  }
  list.addEventListener('click', display);
/**
 ===========================================
 CLOSE EDIT MODAL
 ===========================================
 */
const close = document.querySelector('.close');

  const closeModal = () =>{
    document.querySelector('.modal').style.display='none'
  }

  close.addEventListener('click', closeModal)




