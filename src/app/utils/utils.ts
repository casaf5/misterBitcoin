export default {
  genID,
  saveToStorage,
  loadFromStorage,
  removeFromStorage,
};
function genID(len = 20) {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
  var randID = '';
  for (let i = 0; i < len; i++) {
    randID += chars[getRandomInteger(0, chars.length)];
  }
  return randID;
}

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function removeFromStorage(key){
  localStorage.removeItem(key)
}
