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
const PopUp = [{
  Card_title: 'Keeping track of hundreds of components',
  project_img: './style/images/Disabled.svg',
  x_image: './style/images/Snapshoot-Portfolio.svg',
  button_image1: './style/images/P-github-icon.svg',
  button_image2: './style/images/see-live-icon.svg',
  tags: ['Ruby on rails', 'css', 'javascript'],
  button_name1: 'See Live',
  button_name2: 'See Source',
  live_version: 'https://hamid-murambiwa.github.io/Portfolio/',
  source_code: 'https://github.com/hamid-murambiwa/Portfolio',
  title1: 'Multi-Post Stories',
  title2: 'Gain+Glory',
  btnName: 'See Project',
  project_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
},

{
  Card_title: 'Keeping track of hundreds of components',
  project_img: './style/images/Disabled.svg',
  x_image: './style/images/Snapshoot-Portfolio.svg',
  button_image1: './style/images/P-github-icon.svg',
  button_image2: './style/images/see-live-icon.svg',
  tags: ['Ruby on rails', 'css', 'javascript', 'html'],
  button_name1: 'See Live',
  button_name2: 'See Source',
  live_version: 'https://hamid-murambiwa.github.io/Portfolio/',
  source_code: 'https://github.com/hamid-murambiwa/Portfolio',
  title1: 'Multi-Post Stories',
  title2: 'Gain+Glory',
  btnName: 'See Project',
},
];

// Modal content
const PopUpPage = `<div class="db-con">
<button class="disable-con" id="btn-hide">
    <img src="${PopUp[0].project_img}" alt="Pop up exit button">
</button>
</div>
<img src="${PopUp[0].x_image}" alt="Modal project image" class="P-img">
<div class="modal-details">
<h1>${PopUp[0].Card_title}</h1>
<ul class="flex">
<li class="flex tags">
  ${PopUp[0].tags[0]}
</li>
<li class="flex tags">
  ${PopUp[0].tags[1]}
</li>
<li class="flex tags">
  ${PopUp[0].tags[2]}
</li>
</ul>
<p>
${PopUp[0].project_description}
</p>
<div class="button-con">
<button class="P-button">
    ${PopUp[0].button_name1}
    <img src="${PopUp[0].button_image1}" alt="See live icon" class="btn-img">
</button>
<button class="P-button">
    ${PopUp[0].button_name2}
    <img src="${PopUp[0].button_image2}" alt="Github icon" class="btn-img">
</button>
</div>
</div>
`;

pB.innerHTML = PopUpPage;

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
  const h1 = document.createElement('h3');
  h1.innerHTML = PopUp[1].title1;

  const headings = Array.from(document.querySelectorAll('.card-content div'));
  headings.forEach((Card) => {
    Card.appendChild(h1);
  });

  const h2 = document.createElement('h3');
  h2.innerHTML = PopUp[1].title2;

  const headings2 = Array.from(document.querySelectorAll('.card-content div'));
  headings2.forEach((Card2) => {
    Card2.appendChild(h2);
  });

  const list = document.createElement('li');
  list.className = 'flex tags';
  list.innerHTML = PopUp[1].tags[0];

  const li = Array.from(document.querySelectorAll('.card-content ul'));
  li.forEach((lis) => {
    lis.appendChild(list);
  });

  const list2 = document.createElement('li');
  list2.className = 'flex tags';
  list2.innerHTML = PopUp[1].tags[1];

  const li2 = Array.from(document.querySelectorAll('.card-content ul'));
  li2.forEach((lis2) => {
    lis2.appendChild(list2);
  });

  const list3 = document.createElement('li');
  list3.className = 'flex tags';
  list3.innerHTML = PopUp[1].tags[2];

  const li3 = Array.from(document.querySelectorAll('.card-content ul'));
  li3.forEach((lis3) => {
    lis3.appendChild(list3);
  });

  const list4 = document.createElement('li');
  list4.className = 'flex tags';
  list4.innerHTML = PopUp[1].tags[3];

  const li4 = Array.from(document.querySelectorAll('.card-content ul'));
  li4.forEach((lis4) => {
    lis4.appendChild(list4);
  });

  const button = document.createElement('button');
  button.className = 'flex btn btn-e';
  button.innerHTML = PopUp[1].btnName;

  const btn = Array.from(document.querySelectorAll('.card-content'));
  btn.forEach((b) => {
    b.appendChild(button);
  });
}

const buttonDisplay = Array.from(document.querySelectorAll('.btn-e'));
buttonDisplay.forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById('modal').style = 'display: flex';
  });
});

document.getElementById('btn-hide').addEventListener('click', () => {
  document.getElementById('modal').style = 'display: none';
});

// form validation
const IsLowerCase = (Check) => /[A-Z]/g.test(Check);
const Email = document.querySelector('#eInput');
const form = document.querySelector('#form');
const errorElement = document.querySelector('#ErrorMessages');
const Name = document.querySelector('.fullName');
const Comments = document.querySelector('#Comments');
const inputData = {
  nameValue: '',
  emailValue: '',
  commentValue: '',
};

// Setting up local storage for the form input values
const returnIstring = localStorage.getItem('InputData');
const returnInputData = JSON.parse(returnIstring);
Email.value = returnInputData.emailValue;
Name.value = returnInputData.nameValue;
Comments.value = returnInputData.commentValue;

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

  // save the user input data into local storage
  const Cvalue = Comments.value;
  inputData.nameValue = Fvalue;
  inputData.emailValue = Evalue;
  inputData.commentValue = Cvalue;
  const Istring = JSON.stringify(inputData);
  localStorage.setItem('InputData', Istring);
});
