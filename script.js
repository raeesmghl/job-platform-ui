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


let bellIcon = document.querySelector('#bell-icon');

bellIcon.addEventListener('click',()=>{
    bellIcon.classList.toggle('bxs-bell');
    bellIcon.classList.toggle('bx-bell');
    console.log(bellIcon.style.color)
})
