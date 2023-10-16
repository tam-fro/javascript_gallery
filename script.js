// JavaScript

const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');

// 確認
// console.log(main);
// console.log(thumbs);

const text = document.querySelector('#caption');

//マウスオーバー
thumbs.forEach(function(item, index) {
    item.onmouseover = function() {
      // console.log(this.dataset.image);
      main.src = this.dataset.image;
      text.textContent = this.title;
    }
  });

// //イベントリスナー(同じ動作をaddEventListenerを使って書くこともできます)
// thumbs.forEach(function (item, index) {
//     function change() {
//       main.src = this.dataset.image;
//     }
//     item.addEventListener('mouseover', change);
// });