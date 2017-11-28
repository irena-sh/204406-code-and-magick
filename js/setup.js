'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBERS = 4;

function getRandom(arr) {
  return Math.floor(Math.random() * (arr.length - 0)) + 0;
}

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function createWizards() {
  var wizards = [];
  for (var i = 0; i <= WIZARD_NUMBERS; i++) {
    var wizard = {
      name: NAMES[getRandom(NAMES)] + ' ' + LAST_NAMES[getRandom(LAST_NAMES)],
      coatColor: COAT_COLORS[getRandom(COAT_COLORS)],
      eyesColor: EYES_COLORS[getRandom(EYES_COLORS)]
    };
    wizards.push(wizard);
  }

  return wizards;
}

var wizards = createWizards();

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

function renderSimilarWizards() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
}

renderSimilarWizards();

document.querySelector('.setup-similar').classList.remove('hidden');
