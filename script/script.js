document.getElementById('i').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('ti lox');
});
const content = document.getElementById('content');
const paragraphs = content.querySelectorAll('p');
paragraphs.forEach((p) => {
    p.style.color = 'red';
});
const block = document.querySelector('.content');
block.style.display = 'none';