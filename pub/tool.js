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
    hover: false
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

apiButton.addEventListener('click', () => {
  window.location = "./api.html";
});

function resetToolDisplay() {
  const recurText = document.querySelector('.recur');
  const poolNum = document.querySelector('.poolNum');
  const channelNum = document.querySelector('.channelNum');
  const sentDelay = document.querySelector('.sentDelay');
  const sentSpeed = document.querySelector('.sentSpeed');
  const comment = document.querySelector('.comment');
  const displayRegion = document.querySelector('.displayRegion');
  const direction = document.querySelector('.direction');
  const comHov = document.querySelector('.comHov');

  recurText.innerHTML = ''
  poolNum.innerHTML = ''
  channelNum.innerHTML = ''
  sentDelay.innerHTML = ''
  sentSpeed.innerHTML = ''
  comment.innerHTML = ''
  displayRegion.innerHTML = ''
  direction.innerHTML = ''
  comHov.innerHTML = ''
  
  let template;
  // Display Region & Comment height, width
  template = document.createElement('strong')
  template.innerText = 'Display Region Scale: '
  displayRegion.appendChild(template)
  template = document.createElement('span')
  template.innerText = `${barrage1.displayRegion.clientWidth}px * ${barrage1.displayRegion.clientHeight}px; `
  displayRegion.appendChild(template)
  template = document.createElement('strong')
  template.innerText = 'Comment Height: '
  displayRegion.appendChild(template)
  template = document.createElement('span')
  template.innerText = `${barrage1.commentHeight}px; `
  displayRegion.appendChild(template)
  template = document.createElement('strong')
  template.innerText = 'Comment Width: '
  displayRegion.appendChild(template)
  template = document.createElement('span')
  template.innerText = `${barrage1.commentWidth}px`
  displayRegion.appendChild(template)
  
  // Comment size, color
  template = document.createElement('strong')
  template.innerText = 'Comment Size [min: 10]: '
  comment.appendChild(template)
  template = document.createElement('span')
  template.innerText = `${barrage1.commentSize}px, `
  comment.appendChild(template)
  template = document.createElement('strong')
  template.innerText = 'Comment Color: '
  comment.appendChild(template)
  template = document.createElement('span')
  template.innerText = barrage1.commentColor
  comment.appendChild(template)
  
  // Pool Number
  template = document.createElement('strong')
  template.innerText = 'Pool number [max: 7, min: 2]: '
  poolNum.appendChild(template)
  template = document.createElement('span')
  template.innerText = barrage1.poolNum
  poolNum.appendChild(template)
  
  // Channel Number
  template = document.createElement('strong')
  template.innerText = 'Channel number [min: 5]: '
  channelNum.appendChild(template)
  template = document.createElement('span')
  template.innerText = barrage1.channelNum
  channelNum.appendChild(template)
  
  // Delay
  template = document.createElement('strong')
  template.innerText = 'Senting Barrage Delay [max: 20, min: 2]: '
  sentDelay.appendChild(template)
  template = document.createElement('span')
  template.innerText = `${barrage1.sentDelay} factor`
  sentDelay.appendChild(template)
  
  // Speed
  template = document.createElement('strong')
  template.innerText = 'Senting Barrage Speed [max: 10, min: 1]: '
  sentSpeed.appendChild(template)
  template = document.createElement('span')
  template.innerText = `${barrage1.recurDelay}s`
  sentSpeed.appendChild(template)
  
  // Animation & Direction
  template = document.createElement('strong')
  template.innerText = 'Animation: '
  direction.appendChild(template)
  template = document.createElement('span')
  template.innerText = !barrage1.animation? 'linear' : barrage1.animation
  direction.appendChild(template)
  template = document.createElement('strong')
  template.innerText = ' Direction: '
  direction.appendChild(template)
  template = document.createElement('span')
  template.innerText = !barrage1.direction? 'right' : barrage1.direction
  direction.appendChild(template)
  template = document.createElement('strong')
  template.innerText = ' Random Start Position: '
  direction.appendChild(template)
  template = document.createElement('span')
  template.innerText = !barrage1.rand? 'no' : 'yes'
  direction.appendChild(template)
  
  // Recurrence
  template = document.createElement('strong')
  template.innerText = 'Recurrence Status: '
  recurText.appendChild(template)
  template = document.createElement('span')
  template.innerText = barrage1.recur
  recurText.appendChild(template)

  // Hover effect
  template = document.createElement('strong')
  template.innerText = 'Hover Effect: '
  comHov.appendChild(template)
  template = document.createElement('span')
  template.innerText = barrage1.hover
  comHov.appendChild(template)
}

resetToolDisplay();

const cosComNode = document.querySelector('.cosCom__wrapper');
const exampleTextInit = document.querySelector('.example__text');
const exampleInit = document.querySelector('.example');

exampleTextInit.style['color'] = 'whiteSmoke';
exampleInit.style['background-color'] = 'cornflowerblue';

document.querySelector(".fcom__noti__btn").addEventListener('click', openNoti.bind(document.querySelector(".fcom__noti__btn"), "fcom__noti"))
document.querySelector(".comment__noti__btn").addEventListener('click', openNoti.bind(document.querySelector(".comment__noti__btn"), "comment__noti"))
document.querySelector(".pool__noti__btn").addEventListener('click', openNoti.bind(document.querySelector(".pool__noti__btn"), "pool__noti"))
document.querySelector(".channel__noti__btn").addEventListener('click', openNoti.bind(document.querySelector(".channel__noti__btn"), "channel__noti"))
document.querySelector(".sentDel__noti__btn").addEventListener('click', openNoti.bind(document.querySelector(".sentDel__noti__btn"), "sentDel__noti"))
document.querySelector(".sentSpe__noti__btn").addEventListener('click', openNoti.bind(document.querySelector(".sentSpe__noti__btn"), "sentSpe__noti"))
document.querySelector(".dir__noti__btn").addEventListener('click', openNoti.bind(document.querySelector(".dir__noti__btn"), "dir__noti"))
document.querySelector(".recur__noti__btn").addEventListener('click', openNoti.bind(document.querySelector(".recur__noti__btn"), "recur__noti"))
document.querySelector(".comHov__noti__btn").addEventListener('click', openNoti.bind(document.querySelector(".comHov__noti__btn"), "comHov__noti"))
document.querySelector(".comn__noti__btn").addEventListener('click', openNoti.bind(document.querySelector(".comn__noti__btn"), "comn__noti"))


function openNoti(className) {
  const dir__noti = document.querySelector(`.${className}`);
  if (dir__noti.style.visibility == "visible") {
    dir__noti.style.visibility = "hidden"
  } else {
    dir__noti.style.visibility = "visible"
  }
}

const fixedButton = document.querySelector('.fixed__com__btn');
const poolNumButton = document.querySelector('.pool__btn');
const channelNumButton = document.querySelector('.channel__btn');
const sentDelayButton = document.querySelector('.sentDel__btn');
const sentSpeedButton = document.querySelector('.sentSpe__btn');
const commentButton = document.querySelector('.com__btn');
const directionButton = document.querySelector('.dir__btn');
const recurButton = document.querySelector('.recur__btn');
const comHovButton = document.querySelector('.comHov__btn');
const cosComColButton = document.querySelector('.cosComCol__btn');
const cosComButton = document.querySelector('.cosCom__btn');

fixedButton.addEventListener('click', () => {
  const commentHei = document.querySelector('.commentHei').value != ""? parseInt(document.querySelector('.commentHei').value.trim()) : barrage1.commentHeight;
  const commentWid = document.querySelector('.commentWid').value != ""? parseInt(document.querySelector('.commentWid').value.trim()) : barrage1.commentWidth;
  const aniSelector = document.querySelector('.ani');
  const dirSelector = document.querySelector('.dir');
  const randSelector  = document.querySelector('.rand');

  const newBarrageStructure = {
    poolNum: 5,
    channelNum: 10,
    sentDelay: 2,
    recurrence: {
      recur: true,
      delay: 7
    },
    comment: {
      height: commentHei,
      width: commentWid,
      size: 14,
      color: 'black',
      hover: barrage1.hover
    },
    animation: {
      ani: aniSelector.value,
      dir: dirSelector.value,
      random: randSelector.value == 'true'
    }
  }

  barrage1.terminateBarrage()
  barrage1 = new Barrage(displayRegion1, newBarrageStructure);
  sendOutComments(barrage1);
  resetToolDisplay();
})

poolNumButton.addEventListener('click', () => {
  const poolN = parseInt(document.querySelector('.pool').value.trim());
  if (poolN >= 2) {
    barrage1.setPoolNum(poolN);
    resetToolDisplay();
  }
});

channelNumButton.addEventListener('click', () => {
  const channelN = parseInt(document.querySelector('.channel').value.trim());
  if (channelN >= 5) {
    barrage1.setChannelNum(channelN);
    resetToolDisplay();
  }
});

sentDelayButton.addEventListener('click', () => {
  const sentDel = parseInt(document.querySelector('.sentDel').value.trim());
  if (sentDel >= 2) {
    barrage1.setSentDelay(sentDel);
    resetToolDisplay();
  }
});

sentSpeedButton.addEventListener('click', () => {
  const sentSpe = parseInt(document.querySelector('.sentSpe').value.trim());
  if (sentSpe >= 1) {
    barrage1.setRecurDelay(sentSpe);
    resetToolDisplay();
  }
});

commentButton.addEventListener('click', () => {
  const commentSiz = parseInt(document.querySelector('.commentSiz').value.trim());
  const commentCol = document.querySelector('.commentCol').value.trim();
  if (checkColor(commentCol)) {
    barrage1.setComment(commentSiz, commentCol == ''? barrage1.commentColor : commentCol);
    resetToolDisplay();
  }
});

directionButton.addEventListener('click', () => {
  const commentHei = document.querySelector('.commentHei').value != ""? parseInt(document.querySelector('.commentHei').value.trim()) : barrage1.commentHeight;
  const commentWid = document.querySelector('.commentWid').value != ""? parseInt(document.querySelector('.commentWid').value.trim()) : barrage1.commentWidth;
  const aniSelector = document.querySelector('.ani');
  const dirSelector = document.querySelector('.dir');
  const randSelector  = document.querySelector('.rand');

  const newBarrageStructure = {
    poolNum: 5,
    channelNum: 10,
    sentDelay: 2,
    recurrence: {
      recur: true,
      delay: 7
    },
    comment: {
      height: commentHei,
      width: commentWid,
      size: 14,
      color: 'black',
      hover: barrage1.hover
    },
    animation: {
      ani: aniSelector.value,
      dir: dirSelector.value,
      random: randSelector.value == 'true'
    }
  }

  barrage1.terminateBarrage()
  barrage1 = new Barrage(displayRegion1, newBarrageStructure);
  sendOutComments(barrage1);
  resetToolDisplay();
})

recurButton.addEventListener('click', () => {
  barrage1.setRecur(!barrage1.recur);
  resetToolDisplay();
});

comHovButton.addEventListener('click', () => {
  const commentHei = document.querySelector('.commentHei').value != ""? parseInt(document.querySelector('.commentHei').value.trim()) : barrage1.commentHeight;
  const commentWid = document.querySelector('.commentWid').value != ""? parseInt(document.querySelector('.commentWid').value.trim()) : barrage1.commentWidth;
  const aniSelector = document.querySelector('.ani');
  const dirSelector = document.querySelector('.dir');
  const randSelector  = document.querySelector('.rand');

  const newBarrageStructure = {
    poolNum: 5,
    channelNum: 10,
    sentDelay: 2,
    recurrence: {
      recur: true,
      delay: 7
    },
    comment: {
      height: commentHei,
      width: commentWid,
      size: 14,
      color: 'black',
      hover: !barrage1.hover
    },
    animation: {
      ani: aniSelector.value,
      dir: dirSelector.value,
      random: randSelector.value == 'true'
    }
  }

  barrage1.terminateBarrage()
  barrage1 = new Barrage(displayRegion1, newBarrageStructure);
  sendOutComments(barrage1);
  resetToolDisplay();
})

cosComColButton.addEventListener('click', () => {
  const cosComColBac = document.querySelector('.cosComColBac').value.trim();
  const cosComColCom = document.querySelector('.cosComColCom').value.trim();
  const example = document.querySelector('.example');
  const exampleText = document.querySelector('.example__text');
  if (checkColor(cosComColBac)) {  
    example.style['background-color'] = cosComColBac;
  }
  if (checkColor(cosComColCom)) {  
    exampleText.style['color'] = cosComColCom;
  }
});

cosComButton.addEventListener('click', () => {
  const cosComText = document.querySelector('.cosCom__input').value.trim();
  const example = document.querySelector('.example');
  const exampleText = document.querySelector('.example__text');
  if (cosComText != '') {
    const cosComDiv = document.createElement('div');
    cosComDiv.className = 'cosCom__wrapper';
    cosComDiv.style['background-color'] = example.style['background-color'];
    const cosCom = document.createElement('span');
    cosCom.innerText = cosComText;
    cosCom.style['color'] = exampleText.style['color'];
    cosComDiv.appendChild(cosCom);

    barrage1.addCommentNode(cosComDiv);
  }
});

function checkColor(colorText) {
  if (colorText[0] == '#') {
    return /^#[0-9A-F]{6}$/i.test(colorText);
  }

  const sty = new Option().style;
  sty.color = colorText;
  return sty.color == colorText;
}