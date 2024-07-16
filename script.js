// slidebar navItems functionality. 
// i added a functionality (hover effect) in css
// but when you are active, you need this javascript code and a css class .active;


let navLinks = document.querySelectorAll('.slide-nav .item');

navLinks.forEach(item => {
    item.addEventListener('click',()=>{
        navLinks.forEach((link)=>{
            link.classList.remove('active');
        })  
        item.classList.add('active')
    })
});















// bell icon functionality.
// on click i want to fill the bell icon
// boxicon has bx class for lite-element (only bordered) and bxs class for filled-elements


let bellIcon = document.querySelector('#bell-icon');

bellIcon.addEventListener('click',()=>{
    bellIcon.classList.toggle('bxs-bell');
    bellIcon.classList.toggle('bx-bell');
    console.log(bellIcon.style.color)
})










// when you click the menu button 

let menuToggle = document.querySelector('#menuToggle');
let slideBar = document.querySelector('.slidebar');

menuToggle.addEventListener('click',()=>{
    slideBar.style.translate = '0px';
})



// but if you want to send it back (translate:-100%)
// we did not use a sepcial 'cancle button' for sending it back, either we used the whole document
// if user clicks on document (expect menu button or slidebar), slidebar gets back
