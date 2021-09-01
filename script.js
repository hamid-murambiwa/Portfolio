const menuBtn = document.querySelector('.menu');
const menuList = document.querySelector('.navlinks');
const menuItems = Array.from(document.querySelectorAll('.navlink-items'));
const menuIcon = document.querySelector('.menu-icons');
const body = document.querySelector('.page-container');
const pB = document.querySelector('.modal-body');
const pB2 = document.querySelector('.modal-body-desktop');
const projectCards = document.querySelector('#Works-grid');

const mobilePopUp = {
  Card_title: 'Keeping track of hundreds of components',
  project_img: './style/images/Disabled.svg',
  x_image: './style/images/Snapshoot-Portfolio.svg',
  button_image1: './style/images/P-github-icon.svg',
  button_image2: './style/images/see-live-icon.svg',
  project_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  tags: ['Ruby on rails', 'css', 'javascript'],
  button_name1: 'See Live',
  button_name2: 'See Source',
  live_version: 'https://hamid-murambiwa.github.io/Portfolio/',
  source_code: 'https://github.com/hamid-murambiwa/Portfolio',
};

const desktopPopUp = {
  x_image: './style/images/Snapshoot-Portfolio-Desktop.svg',
  tags: ['Codekit', 'GitHub', 'javascript', 'Bootstrap', 'Terminal', 'Codepen'],
};

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

const mobilemobilePopUp = `<div class="db-con">
<button class="disable-con" id="btn-hide">
    <img src="${mobilePopUp.project_img}" alt="Pop up exit button">
</button>
</div>
<img src="${mobilePopUp.x_image}" alt="Modal project image" class="P-img">
<h1>${mobilePopUp.Card_title}</h1>

<ul class="flex">
<li class="flex tags">
  ${mobilePopUp.tags[0]}
</li>

<li class="flex tags">
  ${mobilePopUp.tags[1]}
</li>

<li class="flex tags">
  ${mobilePopUp.tags[2]}
</li>

</ul>

<p>
${mobilePopUp.project_description}
</p>

<div class="button-con">
<button class="P-button">
    ${mobilePopUp.button_name1}
    <img src="${mobilePopUp.button_image1}" alt="See live icon">
</button>

<button class="P-button">
    ${mobilePopUp.button_name2}
    <img src="${mobilePopUp.button_image2}" alt="Github icon">
</button>
</div>`;

pB.innerHTML = mobilemobilePopUp;

const desktopdesktopPopUp = `<div class="db-con">
<button class="disable-con"  id="btn-disappear">
    <img src="${mobilePopUp.project_img}" alt="Exit button image">
</button>
</div>
<img src="${desktopPopUp.x_image}" alt="Modal project image" class="P-img">
<br>
        <div class="sect">
<h1>${mobilePopUp.Card_title}</h1>
<div class="button-con">
<button class="P-button">
    ${mobilePopUp.button_name1}
    <img src="${mobilePopUp.button_image1}" alt="See live icon">
</button>

<button class="P-button">
    ${mobilePopUp.button_name2}
    <img src="${mobilePopUp.button_image2}" alt="Github icon">
</button>
</div>
</div>

<ul class="flex">
<li class="flex tags">
  ${desktopPopUp.tags[0]}
</li>

<li class="flex tags">
  ${desktopPopUp.tags[1]}
</li>

<li class="flex tags">
  ${desktopPopUp.tags[2]}
</li>

<li class="flex tags">
  ${desktopPopUp.tags[3]}
</li>

<li class="flex tags">
  ${desktopPopUp.tags[4]}
</li>

<li class="flex tags">
  ${desktopPopUp.tags[5]}
</li>
</ul>

<p>
${mobilePopUp.project_description}
</p>
</div>
</div>`;

pB2.innerHTML = desktopdesktopPopUp;

// Project section of the page.
const ProjectCardContent = {
  title1: 'Multi-Post Stories',
  title2: 'Gain+Glory',
  project_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  tags: ['Ruby on rails', 'css', 'javascript', 'html'],
  button_name: 'See Project',
};

const projects = `<div class="Card">

<section class="flex card-content">
    <div>
        <h3>
           ${ProjectCardContent.title1} 
        </h3>
        <h3>
        ${ProjectCardContent.title2}
        </h3>
    </div>

    <ul class="flex">
        <li class="flex tags">
            ${ProjectCardContent.tags[0]}
        </li>

        <li class="flex tags">
        ${ProjectCardContent.tags[1]}
        </li>

        <li class="flex tags">
        ${ProjectCardContent.tags[2]}
        </li>

        <li class="flex tags">
        ${ProjectCardContent.tags[3]}
        </li>
    </ul>

    <button class="flex btn" id="btn-display">
        ${ProjectCardContent.button_name}
    </button>
</section>

</div>
`;

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 6; i++) {
  projectCards.innerHTML += projects;
}

const buttonDisplay = Array.from(document.querySelectorAll('#btn-display'));
buttonDisplay.forEach((button) => {
  button.addEventListener('click', () => {
    if (body.clientWidth >= 992) {
      document.getElementById('modal-desktop').style = 'display: flex; z-index: 3';
    } else if (body.clientWidth < 992) {
      document.getElementById('modal').style = 'display: flex';
    }
  });
});

document.getElementById('btn-hide').addEventListener('click', () => {
  if (body.clientWidth >= 992) {
    document.getElementById('modal-desktop').style = 'display: none';
  } else if (body.clientWidth < 992) {
    document.getElementById('modal').style = 'display: none';
  }
});

document.getElementById('btn-disappear').addEventListener('click', () => {
  if (body.clientWidth >= 992) {
    document.getElementById('modal-desktop').style = 'display: none';
  } else if (body.clientWidth < 992) {
    document.getElementById('modal').style = 'display: none';
  }
});