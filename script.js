const mobileMenu = document.querySelector('#mobile-menu-modal');
const hamburgerButton = document.getElementById('hamburger-button');
const closeModal = document.querySelector('#modal-close-icon img');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
const cardWorks = document.getElementById('card_works');
const form = document.getElementById('contact-form');
const emailPattern = /^([a-z|\d])+@+([a-z]){2,}\.+([a-z)]{2,})/;
const emailInput = document.getElementById('email');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');
const emailErrorMessage = document.querySelector('.email-error');
const formErrorMessage = document.querySelector('.form-error');
const nameErrorMessage = document.querySelector('.name-error');
const messageErrorMessage = document.querySelector('.message-error');

const projectData = [
  {
    title: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: './images/Snapshoot Portfolio-desktop.png',
    link: 'https://aminederbal.github.io/Portfolio/',
    github: 'https://github.com/AmineDerbal/Portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: './images/Snapshoot Portfolio-desktop.png',
    link: 'https://aminederbal.github.io/Portfolio/',
    github: 'https://github.com/AmineDerbal/Portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: './images/Snapshoot Portfolio-desktop.png',
    link: 'https://aminederbal.github.io/Portfolio/',
    github: 'https://github.com/AmineDerbal/Portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: './images/Snapshoot Portfolio-desktop.png',
    link: 'https://aminederbal.github.io/Portfolio/',
    github: 'https://github.com/AmineDerbal/Portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: './images/Snapshoot Portfolio-desktop.png',
    link: 'https://aminederbal.github.io/Portfolio/',
    github: 'https://github.com/AmineDerbal/Portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: './images/Snapshoot Portfolio-desktop.png',
    link: 'https://aminederbal.github.io/Portfolio/',
    github: 'https://github.com/AmineDerbal/Portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: './images/Snapshoot Portfolio-desktop.png',
    link: 'https://aminederbal.github.io/Portfolio/',
    github: 'https://github.com/AmineDerbal/Portfolio',
  },
];

function toggleMobileMenu() {
  mobileMenu.classList.toggle('toogleModalDisplay');
}

const toggleOverflow = () => {
  document.body.classList.toggle('toggle-overflow');
};

const closePopUpWindow = () => {
  const popUp = document.querySelector('.popup-modal');
  popUp.parentElement.removeChild(popUp);
  toggleOverflow();
};

const addCardTitle = (modelData) => {
  const title = document.createElement('h2');
  title.textContent = modelData.title;
  return title;
};
const addCardDescription = (modelData) => {
  const description = document.createElement('p');
  description.textContent = modelData.description;
  return description;
};
const addTechsList = (modelData) => {
  const modelTechsList = document.createElement('ul');
  for (let i = 0; i < modelData.technologies.length; i += 1) {
    const listElement = document.createElement('li');
    modelTechsList.appendChild(listElement);

    const listButton = document.createElement('button');
    listButton.textContent = modelData.technologies[i];
    listElement.appendChild(listButton);
  }

  return modelTechsList;
};
const openPopupWindow = (data) => {
  toggleOverflow();

  const popupModal = document.createElement('div');
  popupModal.className = 'popup-modal';
  document.body.appendChild(popupModal);
  popupModal.addEventListener('click', closePopUpWindow);

  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';
  popupModal.appendChild(popupContainer);
  popupContainer.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  const popupTop = document.createElement('div');
  popupTop.className = 'popup-top';
  popupContainer.appendChild(popupTop);

  const popupTitle = document.createElement('div');
  popupTitle.id = 'popupTitle';
  popupTop.appendChild(popupTitle);
  popupTitle.appendChild(addCardTitle(data));

  const popupCloseIcon = document.createElement('div');
  popupCloseIcon.id = 'popup-close-icon';
  popupTop.appendChild(popupCloseIcon);

  const closeIcon = document.createElement('img');
  closeIcon.src = './images/modal-close-icon.png';
  closeIcon.alt = 'close-mobile-menu';
  closeIcon.width = '20';
  closeIcon.addEventListener('click', closePopUpWindow);
  popupCloseIcon.appendChild(closeIcon);

  const popupTechs = document.createElement('div');
  popupTechs.id = 'popup-techs';
  popupTechs.className = 'model_1-tech';
  popupContainer.appendChild(popupTechs);
  popupTechs.appendChild(addTechsList(data));

  const popupContent = document.createElement('div');
  popupContent.id = 'popup-content';
  popupContainer.appendChild(popupContent);

  const popupPicture = document.createElement('div');
  popupPicture.id = 'popup-picture';
  popupContent.appendChild(popupPicture);

  const popupImage = document.createElement('img');
  popupPicture.appendChild(popupImage);
  popupImage.src = data.image;
  popupImage.alt = 'snapshoot Portfolio';

  const popupDetails = document.createElement('div');
  popupDetails.id = 'popup-details';
  popupContent.appendChild(popupDetails);

  const popupDescription = document.createElement('div');
  popupDescription.id = 'popup-description';
  popupDetails.appendChild(popupDescription);
  popupDescription.appendChild(addCardDescription(data));

  const popupGroupButtons = document.createElement('div');
  popupGroupButtons.id = 'popup-group-buttons';
  popupDetails.appendChild(popupGroupButtons);

  const liveButton = document.createElement('button');
  liveButton.className = 'orange_button popup-button';
  liveButton.textContent = 'See Live';
  liveButton.addEventListener('click', () => {
    window.open(data.link, '_blank');
  });

  const liveSpanButton = document.createElement('span');
  const liveIcon = document.createElement('img');
  liveIcon.src = './images/live-icon.png';
  liveIcon.alt = 'see live';
  liveSpanButton.appendChild(liveIcon);
  liveButton.appendChild(liveSpanButton);
  popupGroupButtons.appendChild(liveButton);

  const gitButton = document.createElement('button');
  gitButton.className = 'orange_button popup-button';
  gitButton.textContent = 'See Source';
  gitButton.addEventListener('click', () => {
    window.open(data.github, '_blank');
  });

  const gitSpan = document.createElement('span');
  const gitIcon = document.createElement('img');
  gitIcon.src = './images/popup-github.png';
  gitIcon.alt = 'github link';
  gitSpan.appendChild(gitIcon);
  gitButton.appendChild(gitSpan);
  popupGroupButtons.appendChild(gitButton);
};
const addProjectButton = (modelData) => {
  const projectButton = document.createElement('button');
  projectButton.className = 'orange_button';
  projectButton.textContent = modelData.button;
  projectButton.addEventListener('click', () => {
    openPopupWindow(modelData);
  });
  return projectButton;
};

const createfirstCard = (data) => {
  const card = document.createElement('div');
  card.className = 'work_model_1';
  const modelPicture = document.createElement('div');
  modelPicture.className = 'model_1-picture';
  card.appendChild(modelPicture);

  const modelContent = document.createElement('div');
  modelContent.className = 'model_1-content';
  card.appendChild(modelContent);

  const modelTitle = document.createElement('div');
  modelTitle.className = 'model_1-title';
  modelContent.appendChild(modelTitle);
  modelTitle.appendChild(addCardTitle(data));

  const modelDescription = document.createElement('div');
  modelDescription.className = 'model_1-description';
  modelContent.appendChild(modelDescription);
  modelDescription.appendChild(addCardDescription(data));

  const modelTechs = document.createElement('div');
  modelTechs.className = 'model_1-tech';
  modelContent.appendChild(modelTechs);
  modelTechs.appendChild(addTechsList(data));

  const modelProject = document.createElement('div');
  modelProject.className = 'model_1-project';
  modelContent.appendChild(modelProject);
  modelProject.appendChild(addProjectButton(data));

  return card;
};

const createSecondCard = (data) => {
  const card = document.createElement('div');
  card.className = 'work_model_2';
  const modelTitle = document.createElement('div');
  modelTitle.className = 'model_2-title';
  card.appendChild(modelTitle);
  modelTitle.appendChild(addCardTitle(data));

  const modelDescription = document.createElement('div');
  modelDescription.className = 'model-2-description';
  card.appendChild(modelDescription);
  modelDescription.appendChild(addCardDescription(data));

  const modelTechs = document.createElement('div');
  modelTechs.className = 'model_2-tech';
  card.appendChild(modelTechs);
  modelTechs.appendChild(addTechsList(data));

  const modelProject = document.createElement('div');
  modelProject.className = 'model_2-project';
  card.appendChild(modelProject);
  modelProject.appendChild(addProjectButton(data));

  return card;
};

const createWorkSection = () => {
  for (let i = 0; i < projectData.length; i += 1) {
    if (i === 0) {
      cardWorks.appendChild(createfirstCard(projectData[i]));
    } else {
      cardWorks.appendChild(createSecondCard(projectData[i]));
    }
  }
};

createWorkSection();
closeModal.addEventListener('click', toggleMobileMenu);

hamburgerButton.addEventListener('click', toggleMobileMenu);

mobileMenuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', toggleMobileMenu);
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (nameInput.value !== '' && messageInput.value !== '' && emailPattern.test(emailInput.value)) {
    form.submit();
    formErrorMessage.textContent = '';
    emailErrorMessage.style.display = 'none';
    nameErrorMessage.style.display = 'none';
    messageErrorMessage.style.display = 'none';
  } else {
    formErrorMessage.textContent = 'the form was not sent';

    if (!emailPattern.test(emailInput.value)) {
      emailErrorMessage.textContent = 'the email input should follow this format : xyz@exe.com';
      emailErrorMessage.style.display = 'block';
    } else {
      emailErrorMessage.textContent = '';
      emailErrorMessage.style.display = 'none';
    }
    if (nameInput.value === '') {
      nameErrorMessage.textContent = 'the name input is empty';
      nameErrorMessage.style.display = 'block';
    } else {
      nameErrorMessage.textContent = '';
      nameErrorMessage.style.display = 'none';
    }

    if (messageInput.value === '') {
      messageErrorMessage.textContent = 'the message input is empty';
      messageErrorMessage.style.display = 'block';
    } else {
      messageErrorMessage.textContent = '';
      messageErrorMessage.style.display = 'none';
    }
  }
});
