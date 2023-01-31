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
