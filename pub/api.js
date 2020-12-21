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
sendOutComments(barrage1);

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const input = document.querySelector('.input__text').value.trim();
  if (input != '') {
    barrage1.addCommentText(input);
    document.querySelector('.input__text').value = ''
  }
});

function sendOutComments(barrage) {
  barrage.setRecur(true);
  barrage.setRecurDelay(5);
  barrage.setSentDelay(20);
  barrage.setComment(20, 'red');
  barrage.addCommentText('CSC309 is very fun!');
  barrage.addCommentText('CSC309 is not fun!');
  barrage.addCommentText('CSC309 is interesting!');
  barrage.addCommentText('CSC309 is awful!');
  
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
  
    barrage.addCommentNode(cosComDiv);
  
  }
  barrage.addCommentText('CSC309 is great!');
  barrage.addCommentText('You are funny!');
  barrage.addCommentText('hahaha!');
  barrage.addCommentText('😊🥺😉😍😘😚😜😂😝😳😁!');
  barrage.addCommentText('YES!');
}

const introButton = document.querySelector('.intro__btn');
const exButton = document.querySelector('.example__btn');
const toolButton = document.querySelector('.tool__btn');
const apiButton = document.querySelector('.api__btn');

introButton.addEventListener('click', () => {
  window.location = "./introduction.html";
});

exButton.addEventListener('click', () => {
  window.location = "./examples.html";
});

toolButton.addEventListener('click', () => {
  window.location = "./tool.html";
});