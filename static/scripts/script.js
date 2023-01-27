// JavaScript Document
const btns = document.getElementsByClassName('btn'); // GET ANY ELEMENT WITH A CLASS OF BTN FOR MODAL
const close = document.getElementsByClassName('close'); // GET ANY ELEMENT WITH CLASS OF CLOSE
const modals = document.getElementsByClassName('modal'); // GET ANY ELEMENT WITH CLASS OF MODAL

//OPEN AND CLOSE MULTIPLE MODALS
[...btns].forEach((btn, ind) => {
  btn.onclick = () => (modals[ind].style.display = 'block');
});

[...close].forEach((close, ind) => {
  close.onclick = () => (modals[ind].style.display = 'none');
});


// CLOSE MODAL ON CLICK OUTSIDE MODAL CONTENT. WORKS BY ADDING THE CLASS 'MODAL' TO THE CONTAINER ELEMENT (THAT HOLDS THE MODAL CONTENT), AND SETTING THIS TO THE FULL SIZE OF THE PAGE, SO CLICKING ANYWHERE OUTSIDE OF THE ELEMENT WITH THE MODAL CONTENT IS CLICKING ON THE ELEMENT WITH THE CLASS OF MODAL
window.onclick = (e) => {
 [...modals].forEach((modals) => {
    if (e.target == modals) {
      modals.style.display = 'none';
    }
  });
};