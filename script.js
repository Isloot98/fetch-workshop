const listResults = document.querySelector('.repo-result');

const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let query = e.target;
    search(query);
})


const search = async (queryParam) => {
let response = await fetch(`https://api.github.com/repos/Isloot98/week-1-project`)
console.log(response);
let data = await response.json();
console.log(data);

let list = document.createElement('ul');
let listItem1 = document.createElement('li');
let listItem2 = document.createElement('li');
listItem1.textContent =`Stargazers count: ${data.stargazers_count}`;
listItem2.textContent =`https://github.com/Isloot98/week-1-project`;

list.appendChild(listItem1);

list.appendChild(listItem2);

listResults.appendChild(list);



}