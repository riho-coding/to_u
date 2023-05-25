'use strict';

// **
// * 360px以下、1401px以上のデバイスはviewportの書き換えで対応
// *

!(function () {
  // metaタグの内、name属性が"viewport"である要素を取得する
  const viewport = document.querySelector('meta[name="viewport"]');

  // viewportのwidthを変更するための関数を定義する
  function switchViewport() {
    // ブラウザウィンドウの外側の幅を取得する
    const width = window.outerWidth;

    // 幅が375px以下の場合、'width=375'
    // 幅が1400pxより大きい場合、'width=1400'
    // それ以外の場合、'width=device-width,initial-scale=1'を設定する
    const value = width <= 375 ? 'width=375' : width > 1400 ? 'width=1400' : 'width=device-width,initial-scale=1';

    // viewportのcontent属性がvalueと異なる時のみ更新する
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }

  //リサイズイベントを監視し、switchViewport関数を呼び出す
  addEventListener('resize', switchViewport, false);
  switchViewport(); // 初期化
})();

// **
// * Internet Explorer判定
// *

!(function () {
  const browser = window.navigator.userAgent.toLowerCase();
  const root = document.documentElement;
  // IEからアクセスされた場合、html要素に`class="ua-ie"`を付与する
  if (browser.indexOf('msie') > 0 || browser.indexOf('trident') > 0) {
    root.classList.add('ua-ie');
  }
})();

// **
// * スクロール連動アニメーション
// *

const showElem = document.querySelectorAll('.js-fadeIn');

// オプションを定義する
const options = {
  root: null,
  rootMargin: '-25% 0px',
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('-show');
      observer.unobserve(entry.target);
    }
  });
}, options);

showElem.forEach((element) => {
  observer.observe(element);
});

// **
// * FVアニメーション
// *

document.addEventListener('DOMContentLoaded', function () {
  const fvTrigger = document.getElementById('js-fv-trigger');
  const ctaTrigger = document.getElementById('js-cta-trigger');
  if (fvTrigger !== null) {
    setTimeout(() => {
      fvTrigger.classList.add('-active');
    }, 500);
    setTimeout(() => {
      ctaTrigger.classList.add('-active');
    }, 800);
  }
});
