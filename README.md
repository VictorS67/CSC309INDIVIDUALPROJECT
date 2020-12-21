# js-library-shijiaka

## Barrage.js
  - Our library name is called "Barrage", which is a special way of presenting comments. Instead of showing comments in a specific area, comments are moving from one side of the webpage to another side of webpage. This kind of comment presentation is popular in video sharing websites in China and Japan, which provide people's comment about the video when they're watching it. This comment presentation is acting like Barrage, so we call it "Barrage Commenting Presenting" in China.
  
  - For the use cases, developer can use our library for their video website, for example, Barrage.js can be used in YouTube, etc. Other websites with comment functionality can also use Barrage.js, for example, RateMyProfessor, etc.
  
  - Link to the landing page: https://calm-peak-12040.herokuapp.com/
  
  - 'Getting Started' section from documentation: (JS & HTML & CSS)
```Javascript
  var displayRegion = document.querySelector('.display__region');
  displayRegion.style.height = '200px';
  displayRegion.style.width = '800px';

  var structure = {
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

  var barrage = new Barrage(displayRegion, structure)
```

```html
  <div class="display__region"></div>
```

```css
  .display__region {
    position: relative;
    overflow: hidden;
  }
```

  - Direct link to documentation: https://calm-peak-12040.herokuapp.com/api.html

## Features
The features that have already been implemented are:
  - Choose the Display Region to show the Barrages: This is the argument that need to pass to Barrage function, cannot be changed after the initialization.
  - Choose the Height and Width of Barrage that will be shown in the Display Region: This is the argument that need to pass to Barrage function, cannot be changed after the initialization.
  - Choose if Barrage has hover effect on comments: This is the argument that need to pass to Barrage function, cannot be changed after the initialization.
  - Choose Animation, Direction and whther comments have random start position for Barrage: This is the argument that need to pass to Barrage function, cannot be changed after the initialization.
  - Change Comment size and color: Change the property of comment text in the Barrage Pool. Size: [min: 10]
  - Change the Maximum number of Barrages in the row of Barrage: Change the Pool Number. [max: 7, min: 2]
  - Change the Maximum number of Barrage rows: Change the Channel number. [min: 5]
  - Change the Delay of sending comments. [max: 20, min: 2]
  - Change the Speed of sending comments: Change the Delay of Recurrence of comments. [max: 10, min: 1]
  - Change whether comments have Recurrence.
  - Sending comment text: typing wording/emojis in the input area and submit.
  - Sending comment node: Can let user customize their own comment, i.e. change background colors, comment colors, etc.
