const mobileMenu = document.querySelector('#mobile-menu-modal');
const hamburgerButton = document.getElementById('hamburger-button');
const closeModal = document.querySelector('#modal-close-icon img');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
const cardWorks = document.getElementById('card_works');
const cardModel1Informations = [
  'Multi-Post Stories',
  "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  ['css', 'html', 'bootstrap', 'Ruby'],
  'See Project',
];
const cardModel2Informations = [
  'Profesional Art Printing Data',
  "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  ['html', 'bootstrap', 'Ruby'],
  'See Project',
];
const cardItem2Title = 'Data DashboardHealthcare';
const cardItem3Title = 'Website Protfolio ';

const projectsData = {
  workModel1: {
    title: cardModel1Informations[0],
    description: cardModel1Informations[1],
    techsList: cardModel1Informations[2],
    project: cardModel1Informations[3],
  },
  workModel2: {
    title: cardModel2Informations[0],
    description: cardModel2Informations[1],
    techsList: cardModel2Informations[2],
    project: cardModel2Informations[3],
  },
  item2: {
    title: cardItem2Title,
  },
  item3: {
    title: cardItem3Title,
  },
  cardModel: {
    classes: [
      'work_model_1',
      'work_model_2 item-1',
      'work_model_2 item-2',
      'work_model_2 item-3',
      'work_model_2',
      'work_model_2 item-2',
      'work_model_2 item-3',
    ],
  },
};

function toggleMobileMenu() {
  mobileMenu.classList.toggle('toogleModalDisplay');
}

const addCardTitle = (modelData) => {
  const title = document.createElement('h2');
  title.textContent = projectsData[modelData].title;
  return title;
};
const addCardDescription = (modelData) => {
  const description = document.createElement('p');
  description.textContent = projectsData[modelData].description;
  return description;
};
const addTechsList = (modelData) => {
  const modelTechsList = document.createElement('ul');
  for (let i = 0; i < projectsData[modelData].techsList.length; i += 1) {
    const listElement = document.createElement('li');
    modelTechsList.appendChild(listElement);

    const listButton = document.createElement('button');
    listButton.textContent = projectsData[modelData].techsList[i];
    listElement.appendChild(listButton);
  }

  return modelTechsList;
};
const addProjectButton = (modelData) => {
  const projectButton = document.createElement('button');
  projectButton.className = 'orange_button';
  projectButton.textContent = projectsData[modelData].project;
  return projectButton;
};

const createfirstCard = (card) => {
  const modelData = 'workModel1';
  const modelPicture = document.createElement('div');
  modelPicture.className = 'model_1-picture';
  card.appendChild(modelPicture);

  const modelContent = document.createElement('div');
  modelContent.className = 'model_1-content';
  card.appendChild(modelContent);

  const modelTitle = document.createElement('div');
  modelTitle.className = 'model_1-title';
  modelContent.appendChild(modelTitle);
  modelTitle.appendChild(addCardTitle(modelData));

  const modelDescription = document.createElement('div');
  modelDescription.className = 'model_1-description';
  modelContent.appendChild(modelDescription);
  modelDescription.appendChild(addCardDescription(modelData));

  const modelTechs = document.createElement('div');
  modelTechs.className = 'model_1-tech';
  modelContent.appendChild(modelTechs);
  modelTechs.appendChild(addTechsList(modelData));

  const modelProject = document.createElement('div');
  modelProject.className = 'model_1-project';
  modelContent.appendChild(modelProject);
  modelProject.appendChild(addProjectButton(modelData));

  return card;
};

const createSecondCard = (card) => {
  const modelData = 'workModel2';
  const modelTitle = document.createElement('div');
  modelTitle.className = 'model_2-title';
  card.appendChild(modelTitle);
  modelTitle.appendChild(addCardTitle(modelData));

  if (card.classList.contains('item-2')) {
    const item2Data = 'item2';
    const item2Title = document.createElement('div');
    item2Title.className = 'item-2-title';
    item2Title.appendChild(addCardTitle(item2Data));
    card.appendChild(item2Title);
  }

  if (card.classList.contains('item-3')) {
    const item3Data = 'item3';
    const item3Title = document.createElement('div');
    item3Title.className = 'item-3-title';
    item3Title.appendChild(addCardTitle(item3Data));
    card.appendChild(item3Title);
  }

  const modelDescription = document.createElement('div');
  modelDescription.className = 'model-2-description';
  card.appendChild(modelDescription);
  modelDescription.appendChild(addCardDescription(modelData));

  const modelTechs = document.createElement('div');
  modelTechs.className = 'model_2-tech';
  card.appendChild(modelTechs);
  modelTechs.appendChild(addTechsList(modelData));

  const modelProject = document.createElement('div');
  modelProject.className = 'model_2-project';
  card.appendChild(modelProject);
  modelProject.appendChild(addProjectButton(modelData));

  return card;
};

const createCardWorksElements = (card) => {
  const cardClassName = 'work_model_1';
  if (card.classList.contains(cardClassName)) {
    return createfirstCard(card);
  }
  return createSecondCard(card);
};
const createWorkSection = () => {
  for (let i = 0; i < projectsData.cardModel.classes.length; i += 1) {
    const workModel = document.createElement('div');
    workModel.className = projectsData.cardModel.classes[i];
    cardWorks.appendChild(createCardWorksElements(workModel));
  }
};

createWorkSection();
closeModal.addEventListener('click', toggleMobileMenu);

hamburgerButton.addEventListener('click', toggleMobileMenu);

mobileMenuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', toggleMobileMenu);
});

const closePopUpWindow = () => {
  const popUp = document.querySelector('.popup-modal');
  popUp.parentElement.removeChild(popUp);
};

const openPopupWindow = (button) => {
  let popUpData = '';
  if (button.parentElement.className === 'model_1-project') {
    popUpData = 'workModel1';
  } else {
    popUpData = 'workModel2';
  }
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
  popupTitle.appendChild(addCardTitle(popUpData));

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
  popupTechs.appendChild(addTechsList(popUpData));

  const popupContent = document.createElement('div');
  popupContent.id = 'popup-content';
  popupContainer.appendChild(popupContent);

  const popupPicture = document.createElement('div');
  popupPicture.id = 'popup-picture';
  popupContent.appendChild(popupPicture);

  const popupImage = document.createElement('img');
  popupPicture.appendChild(popupImage);
  popupImage.src = './images/Snapshoot Portfolio.png';
  popupImage.alt = 'snapshoot Portfolio';

  const popupDetails = document.createElement('div');
  popupDetails.id = 'popup-details';
  popupContent.appendChild(popupDetails);

  const popupDescription = document.createElement('div');
  popupDescription.id = 'popup-description';
  popupDetails.appendChild(popupDescription);
  popupDescription.appendChild(addCardDescription(popUpData));

  const popupGroupButtons = document.createElement('div');
  popupGroupButtons.id = 'popup-group-buttons';
  popupDetails.appendChild(popupGroupButtons);

  const liveButton = document.createElement('button');
  liveButton.className = 'orange_button popup-button';
  liveButton.textContent = 'See Live';

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

  const gitSpan = document.createElement('span');
  const gitIcon = document.createElement('img');
  gitIcon.src = './images/popup-github.png';
  gitIcon.alt = 'github link';
  gitSpan.appendChild(gitIcon);
  gitButton.appendChild(gitSpan);
  popupGroupButtons.appendChild(gitButton);
};

const popupButtons = document.querySelectorAll('#card_works .orange_button');

popupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openPopupWindow(button);
  });
});
