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
