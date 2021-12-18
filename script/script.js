/* eslint-disable prefer-destructuring */
const menuBtn = document.querySelector('.menu');
const menuList = document.querySelector('.navlinks');
const menuItems = Array.from(document.querySelectorAll('.navlink-items'));
const menuIcon = document.querySelector('.menu-icons');
const body = document.querySelector('.page-container');
const pB = document.querySelector('.modal-body');
const projectCards = document.querySelector('#Works-grid');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menuList.classList.toggle('active');

  if (menuBtn.classList.contains('active')) {
    menuIcon.src = './style/images/Disabled.svg';
  } else {
    window.location.reload();
  }
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuList.classList.remove('active');
    menuIcon.src = './style/images/Menu.svg';
  });
});

window.addEventListener('resize', () => {
  if (body.clientWidth >= 992 && menuList.classList.contains('active')) {
    window.location.reload();
  }
});

// Data collection
const PopUp = [
  {
    Card_title: 'Keeping track of hundreds of components',
    project_img: './style/images/Disabled.svg',
    x_image: './style/images/home-page.png',
    button_image1: './style/images/P-github-icon.svg',
    button_image2: './style/images/see-live-icon.svg',
    tags: ['HTML', 'CSS', 'Javascript', 'NPM'],
    button_name1: 'See Live',
    button_name2: 'See Source',
    title1: 'Conference page',
    title2: 'Microverse Project',
    btnName: 'See Project',
    project_description: 'This is a conference page for a beer company, that has a home and an about me page. The page announces the next beer conference hosted by the company. Javascript, CSS, and HTML were used for this project.',
    key: 0,
    web_link: 'https://hamid-murambiwa.github.io/JavaScript-capstone-project---Conference-page/',
    github_link: 'https://github.com/hamid-murambiwa/JavaScript-capstone-project---Conference-page',
  },
  {
    Card_title: 'Keeping track of hundreds of components',
    project_img: './style/images/Disabled.svg',
    x_image: './style/images/Screenshot 2021-10-25 at 10.24.20.png',
    button_image1: './style/images/P-github-icon.svg',
    button_image2: './style/images/see-live-icon.svg',
    tags: ['Webpack', 'CSS', 'Javascript', 'HTML'],
    button_name1: 'See Live',
    button_name2: 'See Source',
    title1: 'To Do list',
    title2: 'Microverse Project',
    btnName: 'See Project',
    project_description: 'A simple page with a list of To-Do tasks. Users can add, check, clear, and delete tasks. Built with Webpack, and Javascript.',
    key: 1,
    web_link: 'https://hamid-murambiwa.github.io/To-Do-list/',
    github_link: 'https://github.com/hamid-murambiwa/To-Do-list',
  },
  {
    Card_title: 'Keeping track of hundreds of components',
    project_img: './style/images/Disabled.svg',
    x_image: './style/images/133600920-7d09cc35-cc77-427f-b8e6-cb2cdcb7f211.png',
    button_image1: './style/images/P-github-icon.svg',
    button_image2: './style/images/see-live-icon.svg',
    tags: ['NPM', 'CSS', 'Javascript', 'HTML'],
    button_name1: 'See Live',
    button_name2: 'See Source',
    title1: 'Awesome books',
    title2: 'Microverse Project',
    btnName: 'See Project',
    project_description: 'A simple website application where the user can add and remove books from a list. Built with Html/CSS and JavaScript.',
    key: 2,
    web_link: 'https://hamid-murambiwa.github.io/Awesome-books/',
    github_link: 'https://github.com/hamid-murambiwa/Awesome-books',
  },
  {
    Card_title: 'Keeping track of hundreds of components',
    project_img: './style/images/Disabled.svg',
    x_image: './style/images/Screenshot 2021-12-01 at 10.31.09.png',
    button_image1: './style/images/P-github-icon.svg',
    button_image2: './style/images/see-live-icon.svg',
    tags: ['React', 'CSS', 'Javascript', 'HTML'],
    button_name1: 'See Live',
    button_name2: 'See Source',
    title1: 'Math magicians Project',
    title2: 'Microverse Project',
    btnName: 'See Project',
    project_description: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote. Javascript, React, CSS, and HTML were used for this project.',
    key: 3,
    web_link: 'https://mm-calculator.herokuapp.com/',
    github_link: 'https://github.com/hamid-murambiwa/Magic-Calculator',
  },
  {
    Card_title: 'Keeping track of hundreds of components',
    project_img: './style/images/Disabled.svg',
    x_image: './style/images/Screenshot 2021-11-12 at 15.11.09.png',
    button_image1: './style/images/P-github-icon.svg',
    button_image2: './style/images/see-live-icon.svg',
    tags: ['Webpack', 'CSS', 'Javascript', 'HTML'],
    button_name1: 'See Live',
    button_name2: 'See Source',
    title1: 'Leaderboard',
    title2: 'Microverse Project',
    btnName: 'See Project',
    project_description: 'This web page displays a list of scores that are retrieved from an API then displayed in the web DOM elements. I used Javascript, CSS, HTML, and Webpack for this project.',
    key: 4,
    web_link: 'https://hamid-murambiwa.github.io/Leaderboard/',
    github_link: 'https://github.com/hamid-murambiwa/Leaderboard',
  },
  {
    Card_title: 'Keeping track of hundreds of components',
    project_img: './style/images/Disabled.svg',
    x_image: './style/images/Screenshot 2021-12-12 at 14.55.30.png',
    button_image1: './style/images/P-github-icon.svg',
    button_image2: './style/images/see-live-icon.svg',
    tags: ['React', 'Redux', 'Javascript', 'CSS'],
    button_name1: 'See Live',
    button_name2: 'See Source',
    title1: 'Bookstore',
    title2: 'Microverse Project',
    btnName: 'See Project',
    project_description: 'This is a web application for all fans of books. It is a Single Page App (SPA) that allows users to create and remove a book. Javascript, Redux, React, and HTML were used for this project.',
    key: 5,
    web_link: 'https://b--k-store.herokuapp.com/',
    github_link: 'https://github.com/hamid-murambiwa/book_store',
  },
];
console.log(PopUp[1].project_description);
// Modal content
function addPopUp(key) {
  console.log(PopUp[key].project_description);
  const PopUpPage = `<div class="db-con">
  <button class="disable-con" id="btn-hide">
      <img src="${PopUp[key].project_img}" alt="Pop up exit button">
  </button>
  </div>
  <img src="${PopUp[key].x_image}" alt="Modal project image" class="P-img">
  <div class="modal-details">
  <h1>${PopUp[key].Card_title}</h1>
  <ul class="flex">
  <li class="flex tags">
    ${PopUp[key].tags[0]}
  </li>
  <li class="flex tags">
    ${PopUp[key].tags[1]}
  </li>
  <li class="flex tags">
    ${PopUp[key].tags[2]}
  </li>
  </ul>
  <p>
  ${PopUp[key].project_description}
  </p>
  <div class="button-con">
  <a href="${PopUp[key].web_link}" class="P-button">
      ${PopUp[key].button_name1}
      <img src="${PopUp[key].button_image1}" alt="See live icon" class="btn-img">
  </a>
  <a href="${PopUp[key].github_link}"class="P-button">
      ${PopUp[key].button_name2}
      <img src="${PopUp[key].button_image2}" alt="Github icon" class="btn-img">
  </a>
  </div>
  </div>
  `;

  pB.innerHTML = PopUpPage;

  document.getElementById('btn-hide').addEventListener('click', () => {
    document.getElementById('modal').style = 'display: none';
  });
}

// Project section of the page.
const projects = `<div class="Card">
<section class="flex card-content">
    <div>
    </div>
    <ul class="flex">
    </ul>
</section>
</div>
`;

// Insert child elemements into project section.
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 6; i++) {
  projectCards.innerHTML += projects;
  const h1 = document.createElement('h1');
  h1.innerHTML = PopUp[i].title1;

  const wIcon = document.createElement('div');
  wIcon.id = 'wIcon';
  const wImg = document.createElement('img');
  wImg.id = 'wImg';
  wImg.src = PopUp[i].x_image;

  wIcon.appendChild(wImg);

  const webImg = Array.from(document.querySelectorAll('.Card'));
  webImg.forEach((Card) => {
    Card.appendChild(wIcon);
  });

  const headings = Array.from(document.querySelectorAll('.card-content div'));
  headings.forEach((Card) => {
    Card.appendChild(h1);
  });

  const h2 = document.createElement('h4');
  h2.id = 'h2t';
  h2.innerHTML = PopUp[i].title2;

  const headings2 = Array.from(document.querySelectorAll('.card-content div'));
  headings2.forEach((Card2) => {
    Card2.appendChild(h2);
  });

  const list = document.createElement('li');
  list.className = 'flex tags';
  list.innerHTML = PopUp[i].tags[0];

  const li = Array.from(document.querySelectorAll('.card-content ul'));
  li.forEach((lis) => {
    lis.appendChild(list);
  });

  const list2 = document.createElement('li');
  list2.className = 'flex tags';
  list2.innerHTML = PopUp[i].tags[1];

  const li2 = Array.from(document.querySelectorAll('.card-content ul'));
  li2.forEach((lis2) => {
    lis2.appendChild(list2);
  });

  const list3 = document.createElement('li');
  list3.className = 'flex tags';
  list3.innerHTML = PopUp[i].tags[2];

  const li3 = Array.from(document.querySelectorAll('.card-content ul'));
  li3.forEach((lis3) => {
    lis3.appendChild(list3);
  });

  const list4 = document.createElement('li');
  list4.className = 'flex tags';
  list4.innerHTML = PopUp[i].tags[3];

  const li4 = Array.from(document.querySelectorAll('.card-content ul'));
  li4.forEach((lis4) => {
    lis4.appendChild(list4);
  });

  const button = document.createElement('button');
  button.className = 'flex btn btn-e';
  button.id = PopUp[i].key;
  button.innerHTML = PopUp[i].btnName;

  const btn = Array.from(document.querySelectorAll('.card-content'));
  btn.forEach((b) => {
    b.appendChild(button);
  });
}

const buttonDisplay = Array.from(document.querySelectorAll('.btn-e'));
buttonDisplay.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
    addPopUp(button.id);
    document.getElementById('modal').style = 'display: flex';
  });
});

// form validation
const IsLowerCase = (Check) => /[A-Z]/g.test(Check);
const Email = document.querySelector('#eInput');
const form = document.querySelector('#form');
const errorElement = document.querySelector('#ErrorMessages');
const Name = document.querySelector('.fullName');
const Comments = document.querySelector('#Comments');
// Setting up local storage for the form input values
const inputData = {
  nameValue: '',
  emailValue: '',
  commentValue: '',
};
// const Istring = JSON.stringify(inputData);
const returnIstring = localStorage.getItem('InputData');
const returnInputData = JSON.parse(returnIstring);

if (returnInputData !== null) {
  Email.value = returnInputData.emailValue;
  Name.value = returnInputData.nameValue;
  Comments.value = returnInputData.commentValue;
}

Name.addEventListener('change', () => {
  inputData.nameValue = Name.value;
  localStorage.setItem('InputData', JSON.stringify(inputData));
});

Email.addEventListener('change', () => {
  inputData.emailValue = Email.value;
  localStorage.setItem('InputData', JSON.stringify(inputData));
});

Comments.addEventListener('change', () => {
  inputData.commentValue = Comments.value;
  localStorage.setItem('InputData', JSON.stringify(inputData));
});

form.addEventListener('submit', (e) => {
  const errors = [];
  const Evalue = Email.value;

  // check validity of the user's email input data
  if (IsLowerCase(Evalue)) {
    e.preventDefault();
    errors.push('<li>*Please enter a valid email address.</li>');
    errorElement.style.display = 'flex';
    errorElement.innerHTML = errors.join(' ');
    errorElement.style.fontSize = '10px';
    errorElement.style.color = 'red';
    errorElement.style.Gap = '1px';
    Email.style.borderColor = '#900';
    Email.style.boxShadow = '1.5px 1.5px 1.5px rgba(174, 17, 17, 0.509)';
    errorElement.style.fontFamily = "''Inter', sans-serif'";
  } else if (!IsLowerCase(Evalue)) {
    Email.style.borderColor = 'rgb(0, 153, 25)';
    Email.style.boxShadow = 'none';
  }

  // check validity of the user's name input data
  const Fvalue = Name.value;
  if (Fvalue.length < 2) {
    e.preventDefault();
    Name.style.borderColor = '#900';
    errors.push('<li>*Please enter a valid name.</li>');
    errorElement.style = 'display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start';
    errorElement.innerHTML = errors.join(' ');
    errorElement.style.fontSize = '10px';
    errorElement.style.color = 'red';
    errorElement.style.Gap = '1px';
    Name.style.borderColor = '#900';
    Name.style.boxShadow = '1.5px 1.5px 1.5px rgba(174, 17, 17, 0.509)';
  } else if (Fvalue.length > 2) {
    Name.style.borderColor = 'rgb(0, 153, 25)';
    Name.style.boxShadow = 'none';
  }
});
