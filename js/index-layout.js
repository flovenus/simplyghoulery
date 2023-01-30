const pinFlex = document.querySelector('.pin-flex');
const pinFlexWidth = pinFlex.getBoundingClientRect().width;
console.log(pinFlexWidth);

if(pinFlexWidth < 171.5){
    pinFlex.style.display = 'none';
}


//textbox animation
const text_box = document.querySelector('.box-text');
text_box.style.height = '350px';



//opening a popup when clicking on a post-pic.
//const post_pics = Array.from(document.querySelectorAll('.post-pic'));
//console.log(post_pics);










const stream = document.querySelector('.middle-content');

stream.addEventListener('click', e => {
    //what have we clicked on?
    const targetPic = e.target.closest(`img`);
    if(!targetPic) return
    
    //open popup and display targetPic; remember: targetpic is an html element.
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    console.log(modal)

    modal.appendChild(targetPic);
    

    openModal(modal);
});

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');

    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', e => {
        closeModal(modal);
    });
}

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}