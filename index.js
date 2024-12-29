
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('navbar');

    menuIcon.addEventListener('click', function() {
        // Toggle the 'active' class on the navigation menu
        navMenu.classList.toggle('active');
    });
});

let sections = document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');
document.getElementById('download').addEventListener
('click',function(){
    const a=document.createElement('a');
    a.href="ayushdata.pdf";
    a.download='my_resume.pdf';
    a.click();
});
window.onscroll =()=>{
 sections.forEach(sec =>{
    let top=window.scrollY;
    let offset =sec.offsetTop - 150;
    let height= sec.offsetHeight;
    let id= sec.getAttribute('id');
 if(top >= offset && top < offset + height){
    navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a [href* =' + id + ']').classList.add
        ('active')
    })
 }
 })
}

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

