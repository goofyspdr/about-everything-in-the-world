(function () {

  var getKeywordData = function (wordArrary, scope) {
    var _scope = scope;
    var allText = (_scope.innerText.toLowerCase()).split(/\s+/);
    var wordCount = allText.length;

    var wordSet = {};
    var keywordSet = {};
    var densitySet = [];

    allText.forEach((i) => {
      wordSet[i] = (wordSet[i]||0) + 1;
    });

    wordArrary.forEach((i) => {
      keywordSet[i] = wordSet[i];
      var _density = (((wordSet[i] || 0) / wordCount) * 100).toFixed(2);
      densitySet.push({
        word: i,
        count: wordSet[i] || 0,
        density: `${_density}%`
      });
    });

    return {
      total_word_count: wordCount,
      keyword_density_dataset: densitySet
    };

  };


  var keywordData = document.getElementById('keyword_set');
  var btnAnalyze = document.getElementById('btn_analyze');
  var keywordDensity = document.getElementById('keyword_density');

  // btnAnalyze.addEventListener('click', function () {

    var keyword = (keywordData.value).split(/[ ,]+\r?\n/);

    var data = getKeywordData(keyword, document.querySelectorAll('.cms-editor-visual')[0]);
    var wordCountField = document.getElementById('word_count');

    if (data.total_word_count > 800) {
      wordCountField.setAttribute('style', 'color:blue;')
    } else if (data.total_word_count < 500) {
      wordCountField.setAttribute('style', 'color:red;')
    }

    wordCountField.innerText = data.total_word_count;

    (data.keyword_density_dataset).forEach((i) => {
      var li = document.createElement('li');
      li.innerHTML = /*html*/`
        <span>${i.word}</span>
        <span>${i.density}</span>
      `;
      keywordDensity.appendChild();
    });

    console.log(data.total_word_count);
    console.log(data.keyword_density_dataset);
  // }, false);

}());
