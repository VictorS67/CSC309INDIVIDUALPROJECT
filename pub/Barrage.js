const log = console.log;

(function(global, document) {
function Barrage(displayRegion, barrage) {
  this.commentPools = [];
  this.poolContain = [];
  this.comments = [];

  this.animation = (barrage.animation != undefined && barrage.animation.ani != undefined)? barrage.animation.ani : null;
  this.direction = (barrage.animation != undefined && barrage.animation.dir != undefined)? barrage.animation.dir : null;
  this.rand = (barrage.animation != undefined && barrage.animation.random != undefined 
    && barrage.animation.random != null)? barrage.animation.random : false;
  this.displayRegion = displayRegion;

  this.commentHeight = (barrage.comment != undefined && barrage.comment.height != undefined)? barrage.comment.height : 40;
  this.commentWidth = (barrage.comment != undefined && barrage.comment.width != undefined)? barrage.comment.width : 100;
  this.poolNum = (barrage.poolNum != undefined)? barrage.poolNum : 5;
  if (this.direction == "top" || this.direction == "bottom") {
    this.channelNum = (barrage.channelNum != undefined)? barrage.channelNum : parseInt(displayRegion.clientWidth / this.commentWidth);
  } else {
    this.channelNum = (barrage.channelNum != undefined)? barrage.channelNum : parseInt(displayRegion.clientHeight / this.commentHeight);
  }

  this.sentDelay = (barrage.sentDelay != undefined)? barrage.sentDelay : 2;

  this.recur = (barrage.recurrence != undefined && barrage.recurrence.recur != undefined 
    && barrage.recurrence.recur != null)? barrage.recurrence.recur : false;
  this.recurDelay = (barrage.recurrence != undefined && barrage.recurrence.delay != undefined 
    && barrage.recurrence.delay)? barrage.recurrence.delay : 7;

  this.commentSize = (barrage.comment != undefined && barrage.comment.size != undefined)? barrage.comment.size : 14;
  this.commentColor = (barrage.comment != undefined && barrage.comment.color != undefined)? barrage.comment.color : 'black';
  this.hover = (barrage.comment != undefined && barrage.comment.hover != undefined 
    && barrage.comment.hover != null)? barrage.comment.hover : true

  this.terminate = false;
  this._stop = false;

  const setBarrage = function setBarrageTime() {
    if (this.terminate) {
      return;
    }

    const self = this;
    setInterval(() => {
      if (self.terminate) {
        for (let i=0; i<self.comments.length; i++) {
          const comment = self.comments[i]
          comment.style.display = "none";
        }
        return;
      }

      let poolNum = self._getCommentPool();

      if (self.comments.length && poolNum != -1) {
        const comment = self.commentPools[poolNum].shift();
        const commentNode = self.comments.shift();

        self._displayComment(commentNode, comment, poolNum);

        if (self.recur) {
          setTimeout(function() {
            self.addCommentNode(commentNode);
          }, self.recurDelay * 1000);
        }
      }
    }, 1);
  };

  this._initComment();

  setBarrage.bind(this)();
}

Barrage.prototype = {

  setPoolNum: function(poolNum) {
    // The maximum number of pool is 7, the minimum number of pool is 1
    this.poolNum = Math.min(Math.max(poolNum, 1), 7);
  },

  setChannelNum: function(channelNum) {
    // The maximum number of channel depends on the Barrage's size and the height of the display Region, the minimum number of channel is 5
    if (this.direction == "top" || this.direction == "bottom") {
      this.channelNum = Math.min(Math.max(channelNum, 5), parseInt(this.displayRegion.clientWidth / this.commentWidth));
    } else {
      this.channelNum = Math.min(Math.max(channelNum, 5), parseInt(this.displayRegion.clientHeight / this.commentHeight));
    }
  },

  setSentDelay: function(sentDelay) {
    // The maximum number of sentDelay is 20, the minimum number of sentDelay is 2
    this.sentDelay = Math.min(Math.max(sentDelay, 2), 20);
  },

  setRecur: function(recur) {
    this.recur = recur;
  },

  setRecurDelay: function(recurDelay) {
    // The maximum number of recurDelay is 10, the minimum number of recurDelay is 1
    this.recurDelay = Math.min(Math.max(recurDelay, 1), 10);
  },

  setComment: function(commentSize, commentColor) {
    if (commentSize >= 10) {
      this.commentSize = commentSize;
    }

    if (this._checkColor(commentColor)) {
      this.commentColor = commentColor;
    }
  },

  addCommentText: function(commentText) {
    const newComment = document.createElement('span');
    this._initCommentStyle(newComment);
    newComment.innerText = commentText;

    this.comments.push(newComment);
  },

  addAllCommentText: function(commentTexts) {
    const newComments = [];
    commentTexts.forEach(commentText => {
      const newComment = document.createElement('span');
      this._initCommentStyle(newComment);
      newComment.innerText = commentText;
      newComments.push(newComment);
    });

    this.comments = this.comments.concat(newComments);
  },

  addCommentNode: function(commentNode) {
    if (commentNode.tagName.toLowerCase() == 'span') {
      this._initCommentStyle(commentNode);
    }
    this.comments.push(commentNode);
  },

  addAllCommentNode: function(commentNodes) {
    commentNodes.forEach(commentNode => {
      if (commentNode.tagName.toLowerCase() == 'span') {
        this._initCommentStyle(commentNode);
      }
    });
    this.comments = this.comments.concat(commentNodes);
  },

  terminateBarrage: function() {
    this.terminate = true;
    for (let i=0; i<this.comments.length; i++) {
      const comment = this.comments[i]
      comment.style.display = "none";
    }
  },

  _pauseComment: function(comment, self) {
    if (self.hover) {
      comment.style.transform = `none`
      comment.style.transition = `transform 10000s`;
      self._stop = true;
    }
  },

  _continueComment: function(comment, self) {
    if (self.hover) {
      self._setMovingDirection(comment)
      comment.style.transition = `transform 1.5s linear`
      self._stop = false;
    }
  },

  _checkColor: function(colorText) {
    if (this.terminate) {
      return;
    }

    if (colorText[0] == '#') {
      return /^#[0-9A-F]{6}$/i.test(colorText);
    }

    const sty = new Option().style;
    sty.color = colorText;
    return sty.color == colorText;
  },

  _initCommentStyle: function(comment) {
    if (this.terminate) {
      return;
    }

    comment.style['font-size'] = `${this.commentSize}px`;
    comment.style.color = this.commentColor;
  },

  _setStartDirection: function(comment) {
    if (this.terminate) {
      return;
    }

    comment.style.position = 'absolute';
    comment.style.visibility = 'hidden';
    comment.style['white-space'] = 'nowrap';
    comment.style.removeProperty('transition');
    comment.style.removeProperty('user-select');

    switch(this.direction) {
      case 'top':
        comment.style.transform = `translateY(${-this.displayRegion.clientHeight}px)`;
        break;
      case 'bottom':
        comment.style.transform = `translateY(${this.displayRegion.clientHeight}px)`;
        break;
      case 'left':
        comment.style.transform = `translateX(${-this.displayRegion.clientWidth}px)`;
        break;
      default: // right
        comment.style.transform = `translateX(${this.displayRegion.clientWidth}px)`;
    }
  },

  _setMovingDirection: function(comment) {
    if (this.terminate) {
      return;
    }

    switch(this.direction) {
      case 'top':
        comment.style.transform = `translateY(${(Math.floor(Math.random() * 13) + 1) * comment.clientHeight}px)`;
        break;
      case 'bottom':
        comment.style.transform = `translateY(${-(Math.floor(Math.random() * 13) + 1) * comment.clientHeight}px)`;
        break;
      case 'left':
        comment.style.transform = `translateX(${comment.clientWidth}px)`;
        break;
      default: // right
        comment.style.transform = `translateX(${-comment.clientWidth}px)`;
    }
  },

  _setStartPosition: function(poolIdx, comment) {
    if (this.terminate) {
      return;
    }

    switch(this.direction) {
      case 'top':
        if (this.rand) {
          comment.style.left = (Math.floor(Math.random() * (poolIdx + 2)) + poolIdx) * this.commentWidth + 'px';
          if (this.animation == 'quadratic' || this.animation == 'pop-in' ) {
            comment.style.top -= Math.floor(Math.random() * poolIdx) * this.commentHeight + 'px';
          }
        } else {
          comment.style.left = poolIdx * this.commentWidth + 'px';
        }
        comment.style.top += (this.displayRegion.clientHeight - this.commentHeight) + 'px';
        break;
      case 'bottom':
        if (this.rand) {
          comment.style.left = (Math.floor(Math.random() * (poolIdx + 2)) + poolIdx) * this.commentWidth + 'px';
          if (this.animation == 'quadratic' || this.animation == 'pop-in' ) {
            comment.style.top = Math.floor(Math.random() * poolIdx) * this.commentHeight + 'px';
          }
        } else {
          comment.style.left = poolIdx * this.commentWidth + 'px';
        }
        break;
      case 'left':
        comment.style.left = (this.displayRegion.clientWidth - this.commentWidth) + 'px';
      default: // right
        comment.style.top = poolIdx * this.commentHeight + 'px';
    }
  },

  _setStartAnimation: function(comment) {
    if (this.terminate) {
      return;
    }

    comment.style.position = 'absolute';
    comment.style['white-space'] = 'nowrap';
    comment.style['user-select'] = 'none';
    comment.style.visibility = 'visible';

    switch(this.animation) {
      case 'pop-in':
        comment.style.transition = `transform ${this.recurDelay}s cubic-bezier(.04, .48, .36, .31)`;
        break;
      case 'quadratic':
        comment.style.transition = `transform ${this.recurDelay}s cubic-bezier(0.1, 0.7, 1.0, 0.1)`;
        break;
      case 'ease-in-quart':
        comment.style.transition = `transform ${this.recurDelay}s cubic-bezier(0.5, 0, 0.75, 0)`;
        break;
      case 'ease-in-cubic':
        comment.style.transition = `transform ${this.recurDelay}s cubic-bezier(0.32, 0, 0.67, 0)`;
        break;
      default: // linear
        comment.style.transition = `transform ${this.recurDelay}s linear`;
    }
  },

  _initComment: function() {
    if (this.terminate) {
      return;
    }

    for (let i=0; i<this.channelNum; i++) {
      const commentPool = [];
      for (let j=0; j<this.poolNum; j++) {
        const comment = document.createElement('div');
        this._setStartDirection(comment);
        this._setStartPosition(i, comment);

        if (this.hover) {
          comment.addEventListener("mouseover", this._pauseComment.bind(comment, comment, this))
          comment.addEventListener("mouseout", this._continueComment.bind(comment, comment, this))
        }

        comment.addEventListener('transitionend', () => {
          this._setStartDirection(comment);

          this.commentPools[i].push(comment);
        });

        commentPool.push(comment);
        this.displayRegion.appendChild(comment);
      }

      this.commentPools.push(commentPool);
      this.poolContain[i] = true;
    }
  },

  _displayComment: function(commentNode, comment, poolNum) {
    if (this.terminate) {
      return;
    }

    comment.innerHTML = '';
    comment.appendChild(commentNode);

    this._setMovingDirection(comment);
    this._setStartAnimation(comment);

    this.poolContain[poolNum] = false;

    const self = this;
    setTimeout(() => {
      if (!self._stop) {
        self.poolContain[poolNum] = true;
      } else {
        const ss = self;
        setTimeout(() => {
          ss._setPoolContain(poolNum, ss)
        }, 1000)
      }
    }, comment.clientWidth * this.sentDelay + 1000);
  },

  _setPoolContain: function(poolNum, self) {
    self.poolContain[poolNum] = true;
  },

  _getCommentPool: function() {
    if (this.terminate) {
      return;
    }

    for (let i=0; i<this.channelNum; i++) {
      if (this.poolContain[i] && this.commentPools[i].length) {
        return i;
      }
    }
    return -1;
  },
}

global.Barrage = global.Barrage || Barrage
})(window, window.document);