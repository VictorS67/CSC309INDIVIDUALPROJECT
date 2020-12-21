const displayRegion1 = document.querySelector('.comment__wrapper');
displayRegion1.style.height = '554px';
displayRegion1.style.width = '829px';

const myBarrageStructure = {
  poolNum: 5,
  channelNum: 10,
  sentDelay: 2,
  recurrence: {
    recur: true,
    delay: 7
  },
  comment: {
    height: 40,
    width: 100,
    size: 14,
    color: 'black',
    hover: true
  },
  animation: {
    ani: null,
    dir: null,
    random: false
  }
}

let barrage1 = new Barrage(displayRegion1, myBarrageStructure);
barrage1.setRecur(true);
barrage1.setRecurDelay(5);
barrage1.setSentDelay(20);
barrage1.setComment(20, 'red');
barrage1.addCommentText('CSC309 is very fun!');
barrage1.addCommentText('CSC309 is not fun!');
barrage1.addCommentText('CSC309 is interesting!');
barrage1.addCommentText('CSC309 is awful!');

for (let i=0; i<10; i++) {
  const cosComDiv = document.createElement('div');
  cosComDiv.className = 'cosCom__wrapper';
  cosComDiv.style['background-color'] = 'cornflowerblue';
  const cosCom = document.createElement('span');
  if (i % 2 == 0) {
    cosCom.innerText = 'I like this library';
  } else if (i % 3 == 0) {
    cosCom.innerText = "No you don't";
  } else if (i % 5 == 0) {
    cosCom.innerText = "Cool";
  } else {
    cosCom.innerText = "LOLLLL";
  }

  cosCom.style['color'] = 'whiteSmoke';
  cosComDiv.appendChild(cosCom);

  barrage1.addCommentNode(cosComDiv);

}
barrage1.addCommentText('CSC309 is great!');
barrage1.addCommentText('You are funny!');
barrage1.addCommentText('hahaha!');
barrage1.addCommentText('😊🥺😉😍😘😚😜😂😝😳😁!');
barrage1.addCommentText('YES!');

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const input = document.querySelector('.input__text').value.trim();
  if (input != '') {
    barrage1.addCommentText(input);
    document.querySelector('.input__text').value = ''
  }
});

const introButton = document.querySelector('.intro__btn');
const exButton = document.querySelector('.example__btn');
const toolButton = document.querySelector('.tool__btn');
const apiButton = document.querySelector('.api__btn');

exButton.addEventListener('click', () => {
  window.location = "./examples.html";
});

toolButton.addEventListener('click', () => {
  window.location = "./tool.html";
});

apiButton.addEventListener('click', () => {
  window.location = "./api.html";
});