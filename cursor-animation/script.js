let mouseCursor = document.querySelector('.cursor');
let navLink = document.querySelectorAll('.nav-ul li');

window.addEventListener('mousemove', cursor);

function cursor(e)  {
    // console.log(e.pageX, e.pageY);
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLink.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('active');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('active');
    });
})