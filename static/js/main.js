// Scroll Down Hide Nav Mobile
(function () {
  var mainHeader = document.getElementById('site_header');
  var subMenu = document.getElementById('sub_menu');
  var statusBar = document.getElementById('status_bar');

  var showHeader = function () {
    mainHeader.classList.remove('site-header--hide');
  };

  var hideHeader = function () {
    mainHeader.classList.add('site-header--hide');
  };

  var addSolidBgHeader = function () {
    mainHeader.classList.add('site-header--bg-solid');
  };

  var removeSolidBgHeader = function () {
    mainHeader.classList.remove('site-header--bg-solid');
  };

  var showStatusBar = function () {
    if (statusBar) {
      statusBar.classList.add('opened');
    }
  };

  var hideStatusBar = function () {
    if (statusBar) {
      statusBar.classList.remove('opened');
    }
  };

  window.addEventListener('scroll', function () {
    if (this.scrollY > 100) {
      if (this.oldPos > this.scrollY) {
        showHeader();
        hideStatusBar();
      } else {
        hideHeader();
        showStatusBar();
      }

      if (this.scrollY < 300 && (window.location.pathname).includes('quotes-and-memes') !== true) {
        removeSolidBgHeader();
      } else {
        addSolidBgHeader();
      }
      this.oldPos = this.scrollY;


    }
  }, false);
}());


// Mobile Nav
// (function () {

//   var body = document.querySelectorAll('body')[0];
//   var btnNav = document.getElementById('btn_nav');
//   var nav = document.querySelectorAll('#main_nav ul')[0];

//   btnNav.addEventListener('click', function () {
//     this.classList.toggle('opened');
//     nav.classList.toggle('opened');
//     body.classList.toggle('locked');
//   }, false);

// }());

// Add tartget blank to external link
(function () {
  var links = document.querySelectorAll('main a');
  links.forEach(function (i) {
    if (new URL(i.href).hostname !== window.location.hostname) {
      i.setAttribute('target', '_blank');
      i.setAttribute('rel', 'noreferrer');
    }
  });
}());

// caption toggle
(function () {
  var caption = document.querySelectorAll('.caption-toggle');

  if (caption) {
    caption.forEach(function (i) {
      i.addEventListener('click', function () {
        this.classList.toggle('is-opened');
      }, false);
    });
  }
}());




// test word count

// (function () {

//   var getKeywordData = function (wordArrary, scope) {
//     var _scope = scope;
//     var allText = (_scope.innerText.toLowerCase()).split(/\s+/);
//     var wordCount = allText.length;

//     var wordSet = {};
//     var keywordSet = {};
//     var densitySet = [];

//     allText.forEach((i) => {
//       wordSet[i] = (wordSet[i]||0) + 1;
//     });

//     wordArrary.forEach((i) => {
//       keywordSet[i] = wordSet[i];
//       var _density = (((wordSet[i] || 0) / wordCount) * 100).toFixed(2);
//       densitySet.push({
//         word: i,
//         count: wordSet[i] || 0,
//         density: `${_density}%`
//       });
//     });

//     return {
//       total_word_count: wordCount,
//       keyword_density_dataset: densitySet
//     };

//   };

//   var keyword = ['wellness', 'depression', 'good'];

//   var testData = getKeywordData(keyword, document.body);

//   console.log(testData);

// }());


// In article images
(function () {

  var inArticleImg = document.querySelectorAll('.reading-zone p img');
  if (inArticleImg) {
    inArticleImg.forEach(function (i) {
      if (!i.src.includes('amazon')) {
        var figure = document.createElement('figure');
        figure.setAttribute('class', 'in-article-img');
        figure.setAttribute('style', `background-image: url("${i.src}")`);
        figure.innerHTML = i.outerHTML;
        i.outerHTML = figure.outerHTML;
      }
    });
  }

}());


//Amazon link
(function () {
  var nodes = document.querySelectorAll('.reading-zone a');
  nodes.forEach(function (i) {
    if (i.href.includes('amazon')) {
      i.setAttribute('class', 'amzn-label');
      console.log(i);
      var affiliateLabel = document.createElement('div');
      affiliateLabel.style = 'position: absolute; bottom: 0; right:0; z-index:100; font-size: 12px; padding:  0px 5px; background: #fff;';
      affiliateLabel.innerText = 'Amazon Affiliate Link';
      i.appendChild(affiliateLabel);
    }
  });

}())

