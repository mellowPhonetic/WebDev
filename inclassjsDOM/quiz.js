let image = document.querySelector('img');
const para = document.querySelector('p');
const input = document.querySelector('#inputtext');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    para.textContent = para.textContent + " " + input.value;

    image.src = "LoveJS.jpg";

    //setTimeout(() => image.src = "NoJS.jpg", 3000);
});