const myTextarea = document.getElementById("myTextarea");
const charCountDisplay = document.getElementById("charCount");
const maxLength = myTextarea.getAttribute("maxlength"); // maxlength属性から最大文字数を取得

myTextarea.addEventListener("input", () => {
  const currentLength = myTextarea.value.length; // 現在の文字数を取得
  charCountDisplay.textContent = currentLength; // 表示を更新

  // オプション：残り文字数が少なくなったら色を変える
  if (currentLength > maxLength * 0.8) {
    // 例えば80%を超えたら警告
    charCountDisplay.classList.add("warning");
  } else {
    charCountDisplay.classList.remove("warning");
  }
});

// 初期表示を設定（ページロード時にテキストエリアにデフォルト値がある場合など）
charCountDisplay.textContent = myTextarea.value.length;
