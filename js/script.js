document.addEventListener("DOMContentLoaded", () => {
  const fadeElems = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeElems.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const thumbs = document.querySelectorAll(".thumb"); // サムネイル画像を取得
  const popup = document.getElementById("popup"); // ポップアップウィンドウ
  const popupImg = document.getElementById("popup-img"); // ポップアップ画像
  const popupCaption = document.getElementById("popup-caption"); // ポップアップ説明文
  const closeBtn = document.querySelector(".popup .close-btn"); // 閉じるボタン

  // サムネイル画像をクリックしたときの処理
  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      const imageSrc = thumb.dataset.image; // data-image属性から画像パスを取得
      const captionText = thumb.dataset.caption; // data-caption属性から説明文を取得

      popupImg.src = imageSrc; // ポップアップ画像を設定
      popupCaption.textContent = captionText; // ポップアップ説明文を設定
      popup.classList.remove("hidden"); // ポップアップを表示
    });
  });

  // 閉じるボタンをクリックしたときの処理
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden"); // ポップアップを非表示
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const thumbs = document.querySelectorAll(".thumb");
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const popupCaption = document.getElementById("popup-caption");
  const closeBtn = document.querySelector(".popup .close-btn");

  if (!popup || !popupImg || !popupCaption || !closeBtn) {
    console.error("ポップアップ要素が見つかりません");
    return;
  }

  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      const imageSrc = thumb.dataset.image;
      const captionText = thumb.dataset.caption;

      if (!imageSrc || !captionText) {
        console.error("サムネイルのデータ属性が正しく設定されていません");
        return;
      }

      popupImg.src = imageSrc;
      popupCaption.textContent = captionText;
      popup.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});