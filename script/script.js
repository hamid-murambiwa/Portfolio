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
    x_image: './style/images/166466491-1b361f8d-e7a8-4879-a2d9-1712c1cd6a9f.png',
    button_image1: './style/images/P-github-icon.svg',
    button_image2: './style/images/see-live-icon.svg',
    tags: ['React', 'CSS', 'Javascript', 'HTML'],
    button_name1: 'See Live',
    button_name2: 'See Source',
    title1: 'Math magicians Project',
    title2: 'Microverse Project',
    btnName: 'See Project',
    project_description: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote. Javascript, React, CSS, and HTML were used for this project.',
    key: 0,
    web_link: 'https://dev--dainty-sunflower-17208d.netlify.app/',
    github_link: 'https://github.com/hamid-murambiwa/Magic-Calculator',
  },
  {
    Card_title: 'Keeping track of hundreds of components',
    project_img: './style/images/Disabled.svg',
    x_image: './style/images/recipe.png',
    button_image1: './style/images/P-github-icon.svg',
    button_image2: './style/images/see-live-icon.svg',
    tags: ['Ruby on rails', 'Postgresql', 'CSS', 'Ruby'],
    button_name1: 'See Live',
    button_name2: 'See Source',
    title1: 'Recipe App',
    title2: 'Microverse Project',
    btnName: 'See Project',
    project_description: 'The recipe app allows users to view various recipes & prepare good tasty meals.',
    key: 1,
    web_link: 'https://awe-recipe-app.herokuapp.com/',
    github_link: 'https://github.com/hamid-murambiwa/Recipe-app',
  },
  {
    Card_title: 'Keeping track of hundreds of components',
    project_img: './style/images/Disabled.svg',
    x_image: './style/images/166159411-9953ba4e-5ff7-47af-8111-371e247b08d6.png',
    button_image1: './style/images/P-github-icon.svg',
    button_image2: './style/images/see-live-icon.svg',
    tags: ['React', 'CSS', 'Javascript', 'HTML'],
    button_name1: 'See Live',
    button_name2: 'See Source',
    title1: 'IP ADDRESS TRACKER',
    title2: 'Personal Project',
    btnName: 'See Project',
    project_description: "Ip address tracker fetches location data using an ip address then displays the location on an interactive map. It also uses the the user's ip address to fetch and display the user's location on the map.",
    key: 2,
    web_link: 'https://development--enchanting-pithivier-4f097c.netlify.app/',
    github_link: 'https://github.com/hamid-murambiwa/IP-Address-Tracker',
  },
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
    key: 3,
    web_link: 'https://splendorous-granita-62d939.netlify.app',
    github_link: 'https://github.com/hamid-murambiwa/JavaScript-capstone-project---Conference-page',
  },
  {
    Card_title: 'Keeping track of hundreds of components',
    project_img: './style/images/Disabled.svg',
    x_image: './style/images/metric.png',
    button_image1: './style/images/P-github-icon.svg',
    button_image2: './style/images/see-live-icon.svg',
    tags: ['React', 'Redux', 'CSS', 'Javascript'],
    button_name1: 'See Live',
    button_name2: 'See Source',
    title1: 'Metrics web app',
    title2: 'Microverse Project',
    btnName: 'See Project',
    project_description: 'This is a mobile web application to check a list of metrics (numeric values) and is built using React and Redux. Data is fetched from the TheDogApi, displayed and filtered on two pages. The web app has a home page and a details page.',
    key: 4,
    web_link: 'https://622d9a1334cc7f237fa38cbe--confident-babbage-e8362d.netlify.app/',
    github_link: 'https://github.com/hamid-murambiwa/Metrics-web-app',
  },
  {
    Card_title: 'Keeping track of hundreds of components',
    project_img: './style/images/Disabled.svg',
    x_image: './style/images/space-1.png',
    button_image1: './style/images/P-github-icon.svg',
    button_image2: './style/images/see-live-icon.svg',
    tags: ['Webpack', 'CSS', 'Javascript', 'HTML'],
    button_name1: 'See Live',
    button_name2: 'See Source',
    title1: 'Space Hub',
    title2: 'Microverse Project',
    btnName: 'See Project',
    project_description: "A SpaceX missions and rockets web application made with React, Redux and APIs. This project was created by Hamid Murambiwa and Karel van Oordt for Microverse's module 3.",
    key: 5,
    web_link: 'https://spacehub-karel-hamid.herokuapp.com/',
    github_link: 'https://github.com/karelvanoordt/Rockets-GP',
  },
];

function addPopUp(key) {
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
  h1.id = 'h1t';
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

  const h2 = document.createElement('i');
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
