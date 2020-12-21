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

introButton.addEventListener('click', () => {
  window.location = "./introduction.html";
});

toolButton.addEventListener('click', () => {
  window.location = "./tool.html";
});

apiButton.addEventListener('click', () => {
  window.location = "./api.html";
});

// example 1
const displayRegion2 = document.querySelector('.example__1');
displayRegion2.style.height = '200px';
displayRegion2.style.width = '800px';

const myBarrageStructure2 = {
  poolNum: 5,
  channelNum: 10,
  sentDelay: 2,
  recurrence: {
    recur: true,
    delay: 7
  },
  comment: {
    height: 30,
    width: 100,
    size: 18,
    color: 'black',
    hover: false
  },
  animation: {
    ani: null,
    dir: null,
    random: false
  }
}

let barrage2 = new Barrage(displayRegion2, myBarrageStructure2)
barrage2.addCommentText('CSC309 is very fun!');
barrage2.addCommentText('CSC309 is not fun!');
barrage2.addCommentText('CSC309 is interesting!');
barrage2.addCommentText('CSC309 is awful!');

const ex1jsButton = document.querySelector('.example1__js__btn');
const ex1htmlButton = document.querySelector('.example1__html__btn');
const ex1cssButton = document.querySelector('.example1__css__btn');

const ex1js = document.querySelector('.example1__js');
const ex1html = document.querySelector('.example1__html');
const ex1css = document.querySelector('.example1__css');

ex1jsButton.addEventListener('click', () => {
  ex1html.classList.add('hidden');
  ex1css.classList.add('hidden');
  ex1js.classList.remove('hidden');
});

ex1htmlButton.addEventListener('click', () => {
  ex1css.classList.add('hidden');
  ex1js.classList.add('hidden');
  ex1html.classList.remove('hidden');
});

ex1cssButton.addEventListener('click', () => {
  ex1html.classList.add('hidden');
  ex1js.classList.add('hidden');
  ex1css.classList.remove('hidden');
});

// example 2
const displayRegion3 = document.querySelector('.example__2');
displayRegion3.style.height = '200px';
displayRegion3.style.width = '800px';

const myBarrageStructure3 = {
  poolNum: 5,
  channelNum: 10,
  sentDelay: 2,
  recurrence: {
    recur: true,
    delay: 7
  },
  comment: {
    height: 30,
    width: 100,
    size: 18,
    color: 'black',
    hover: false
  },
  animation: {
    ani: null,
    dir: null,
    random: false
  }
}

let barrage3 = new Barrage(displayRegion3, myBarrageStructure3)

const com_node = document.createElement('div');
com_node.className = 'cosCom__wrapper';
com_node.style['background-color'] = 'cornflowerblue';
const com_span = document.createElement('span');
com_span.innerText = 'I like this library';
com_span.style['color'] = 'whiteSmoke';
com_node.appendChild(com_span);
barrage3.addCommentNode(com_node);

const com_node2 = document.createElement('div');
const com_span2 = document.createElement('span');
com_span2.innerText = 'comment text with comtomized color and size';
com_span2.style['color'] = 'red';
com_node2.appendChild(com_span2);
barrage3.addCommentNode(com_node2);

barrage3.addCommentText('CSC309 is very fun!');
barrage3.addCommentText('CSC309 is not fun!');
barrage3.addCommentText('CSC309 is interesting!');
barrage3.addCommentText('CSC309 is awful!');

const ex2jsButton = document.querySelector('.example2__js__btn');
const ex2htmlButton = document.querySelector('.example2__html__btn');
const ex2cssButton = document.querySelector('.example2__css__btn');

const ex2js = document.querySelector('.example2__js');
const ex2html = document.querySelector('.example2__html');
const ex2css = document.querySelector('.example2__css');

ex2jsButton.addEventListener('click', () => {
  ex2html.classList.add('hidden');
  ex2css.classList.add('hidden');
  ex2js.classList.remove('hidden');
});

ex2htmlButton.addEventListener('click', () => {
  ex2css.classList.add('hidden');
  ex2js.classList.add('hidden');
  ex2html.classList.remove('hidden');
});

ex2cssButton.addEventListener('click', () => {
  ex2html.classList.add('hidden');
  ex2js.classList.add('hidden');
  ex2css.classList.remove('hidden');
});

// example 3
const displayRegion4 = document.querySelector('.example__3');
displayRegion4.style.height = '500px';
displayRegion4.style.width = '800px';

const myBarrageStructure4 = {
  poolNum: 4,
  channelNum: 4,
  sentDelay: 2,
  recurrence: {
    recur: true,
    delay: 7
  },
  comment: {
    height: 30,
    width: 100,
    size: 18,
    color: 'black',
    hover: false
  },
  animation: {
    ani: 'pop-in',
    dir: 'bottom',
    random: true
  }
}

let barrage4 = new Barrage(displayRegion4, myBarrageStructure4)

const commentTexts = ['Comment 1!', 'Comment 2!', 'Comment 3!', 'Comment 4!', 
'Comment 5!', 'Comment 6!', 'Comment 7!', 'Comment 8!', 'Comment 9!', 'Comment 10!']

barrage4.addAllCommentText(commentTexts)

const ex3aniSelector = document.querySelector('.example3__ani');
const ex3dirSelector = document.querySelector('.example3__dir');
const ex3randSelector  = document.querySelector('.example3__rand');
const ex3RestartButton = document.querySelector('.example3__restart__btn');

let tempStructure4
ex3RestartButton.addEventListener('click', () => {
  const ex3animation = ex3aniSelector.value
  const ex3direction = ex3dirSelector.value
  const ex3random = ex3randSelector.value == 'true'

  displayRegion4.style.display = 'none';
  displayRegion4.style.removeProperty('display');

  barrage4.terminateBarrage()

  tempStructure4 = {
    poolNum: 4,
    channelNum: 4,
    sentDelay: 2,
    recurrence: {
      recur: true,
      delay: 7
    },
    comment: {
      height: 30,
      width: 100,
      size: 18,
      color: 'black',
      hover: false
    },
    animation: {
      ani: ex3animation,
      dir: ex3direction,
      random: ex3random
    }
  }

  barrage4 = new Barrage(displayRegion4, tempStructure4)
  barrage4.addAllCommentText(commentTexts)
})

const ex3jsButton = document.querySelector('.example3__js__btn');
const ex3htmlButton = document.querySelector('.example3__html__btn');
const ex3cssButton = document.querySelector('.example3__css__btn');

const ex3js = document.querySelector('.example3__js');
const ex3html = document.querySelector('.example3__html');
const ex3css = document.querySelector('.example3__css');

ex3jsButton.addEventListener('click', () => {
  ex3html.classList.add('hidden');
  ex3css.classList.add('hidden');
  ex3js.classList.remove('hidden');
});

ex3htmlButton.addEventListener('click', () => {
  ex3css.classList.add('hidden');
  ex3js.classList.add('hidden');
  ex3html.classList.remove('hidden');
});

ex3cssButton.addEventListener('click', () => {
  ex3html.classList.add('hidden');
  ex3js.classList.add('hidden');
  ex3css.classList.remove('hidden');
});

// example 4
const displayRegion5 = document.querySelector('.example__4');
console.log(displayRegion5)
displayRegion5.style.height = '500px';
displayRegion5.style.width = '800px';

const myBarrageStructure5 = {
  poolNum: 4,
  channelNum: 4,
  sentDelay: 2,
  recurrence: {
    recur: true,
    delay: 7
  },
  comment: {
    height: 30,
    width: 100,
    size: 18,
    color: 'black',
    hover: true
  },
  animation: {
    ani: 'pop-in',
    dir: 'top',
    random: true
  }
}

let barrage5 = new Barrage(displayRegion5, myBarrageStructure5)

const commentTexts2 = ['Comment 1!', 'Comment 2!', 'Comment 3!', 'Comment 4!', 
'Comment 5!', 'Comment 6!', 'Comment 7!', 'Comment 8!', 'Comment 9!', 'Comment 10!']

barrage5.addAllCommentText(commentTexts2)

const ex4jsButton = document.querySelector('.example4__js__btn');
const ex4htmlButton = document.querySelector('.example4__html__btn');
const ex4cssButton = document.querySelector('.example4__css__btn');

const ex4js = document.querySelector('.example4__js');
const ex4html = document.querySelector('.example4__html');
const ex4css = document.querySelector('.example4__css');

ex4jsButton.addEventListener('click', () => {
  ex4html.classList.add('hidden');
  ex4css.classList.add('hidden');
  ex4js.classList.remove('hidden');
});

ex4htmlButton.addEventListener('click', () => {
  ex4css.classList.add('hidden');
  ex4js.classList.add('hidden');
  ex4html.classList.remove('hidden');
});

ex4cssButton.addEventListener('click', () => {
  ex4html.classList.add('hidden');
  ex4js.classList.add('hidden');
  ex4css.classList.remove('hidden');
});
