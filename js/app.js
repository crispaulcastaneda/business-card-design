// for the mouse cursor
let mouseCursor = document.querySelector('.cursor');
let links = document.querySelectorAll('.personal .for-cursor span a');
console.log(links);


window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

links.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classlist.remove("link-grow");
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classlist.add("link-grow");
    });
});