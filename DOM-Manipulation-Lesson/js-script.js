const container = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);

const blue = document.createElement('h3');
blue.textContent = "I'm a blue h3!";
blue.style.color = "blue";

container.appendChild(blue);

const div = document.createElement('div');
div.setAttribute('style', 'border: black; background: pink');

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);

const divPara = document.createElement('p');
divPara.textContent = "ME TOO!";
div.appendChild(divPara);
//div.appendChild(p.textContent = "ME TOO!");

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World 2");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World 3");
});

btn.addEventListener('click', function (e) {
    console.log(e);
  });

  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });