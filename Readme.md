目的：今後 TypeScript や React にスケールする為の準備段階

使用技術： JavaScript/CSS/HTML

このコードは、「文字数カウンター」というシンプルなウェブページの骨組みを作っています。

<h1>HTMLついて</h1>

各要素の解説

<h3>!DOCTYPE html></h3> これは、この文書がHTML5の標準に沿って書かれていることをブラウザに教えています。

<h3>html lang="ja"</h3> HTML文書の開始を表します。lang="ja"は、このページの主要な言語が日本語であることを示しています。

<h3>head</h3> この部分には、ウェブページ自体には表示されませんが、ブラウザがページを正しく表示するために必要な情報が含まれています。

<h3>meta charset="UTF-8"</h3> 文字エンコーディングをUTF-8に設定しています。これにより、日本語を含む様々な言語の文字が正しく表示されます。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3> レスポンシブデザイン（様々なデバイスの画面サイズに適応するデザイン）のために重要です。表示領域の幅をデバイスの幅に合わせ、初期ズームレベルを1.0に設定しています。

<h3>title</h3> ブラウザのタブやウィンドウに表示されるページのタイトルです。

<h3>link rel="stylesheet" href="style.css"</h3> style.cssという外部のCSSファイルをこのHTMLページに適用することを指定しています。CSSファイルはページの見た目をデザインするために使われます。

<h3>body</h3> この部分には、実際にウェブページに表示されるすべてのコンテンツが含まれます。

<h3>div class="box"</h3> これは「文字数カウンター」というテキストを含む箱（コンテナ）です。CSSで特別なデザインが適用されます。

<h3>br</h3> 改行タグです。

<h3>div class="textarea-container"</h3> テキストエリアとその関連要素をまとめるためのコンテナです。

<h3>label for="myTextarea">コメントを入力してください (最大 100 文字)</h3> テキストエリアのためのラベルです。for="myTextarea"は、このラベルが myTextarea という ID を持つ要素に関連付けられていることを示しています。

<h3>textarea id="myTextarea" rows="6" maxlength="100" placeholder="ここにテキストを入力..."</h3> ユーザーがテキストを入力するための領域です。

- id="myTextarea": このテキストエリアを一意に識別するための ID です。JavaScript からこの要素にアクセスする際に使われます。

- rows="6": テキストエリアの初期の表示行数を 6 行に設定しています。

- maxlength="100": 入力できる文字数の最大値を 100 文字に制限しています。

- placeholder="ここにテキストを入力...": テキストエリアに何も入力されていないときに表示される薄いテキスト（プレースホルダー）です。

<h3>現在の文字数: <span id="charCount">0</span> / 100</h3> 現在の文字数と最大文字数を表示するための段落です。

<h3>span id="charCount">0</h3> 現在の文字数を表示するための部分です。初期値は 0 ですが、JavaScript によって入力された文字数に応じて更新されます。

<h3>script src="script.js"</h3> script.jsという外部のJavaScriptファイルをこのHTMLページに適用することを指定しています。JavaScriptファイルはページの動きやインタラクションを追加するために使われます。

<h1>CSSついて</h1>
CSSは、HTMLで作成された要素の見た目（色、フォント、配置など）をデザインするための言語です。

提供された CSS コードは、文字数カウンターの見た目を整えるためのスタイルを定義しています。

各スタイルの解説

<h3>全体的なスタイル (body)</h3>

- font-family: "Lato", sans-serif;: ウェブページのデフォルトのフォントを Lato（利用可能な場合）または一般的なサンセリフフォントに設定しています。

- display: flex;, flex-direction: column;, justify-content: center;, align-items: center;: これら 4 つのプロパティは、ページのコンテンツを中央に配置するために Flexbox という CSS のレイアウトモジュールを使用しています。コンテンツを縦方向に並べ、水平・垂直方向ともに中央に揃えています。

- min-height: 100vh;: ページの最小の高さをビューポート（ブラウザの表示領域）の高さ全体に設定しています。

- margin: 0;: ページの周囲の余白をなくしています。

- background-color: #778899;: ページの背景色をライトスレートグレーに設定しています。

- color: #333;: テキストの基本色を濃いグレーに設定しています。

<h3>テキストエリアのコンテナ (.textarea-container)</h3>

- background-color: #f5f5f5;: コンテナの背景色を薄いグレーに設定しています。

- padding: 30px;: コンテナの内側に 30 ピクセルの余白を設けています。

- border-radius: 10px;: 角を丸くしています。

- box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);: コンテナに影を追加し、立体感を加えています。

- text-align: center;: コンテナ内のテキストを中央揃えにしています。

- width: 100%;, max-width: 500px;: コンテナの幅を親要素の 100%に設定しつつ、最大幅を 500 ピクセルに制限しています。

<h3>ラベル (label)</h3>

- display: block;: ラベルをブロック要素として表示し、それ以降の要素が新しい行から始まるようにしています。

- text-align: left;: テキストを左揃えにしています。

- margin-bottom: 10px;: 下に 10 ピクセルの余白を設けています。

- font-size: 1.1em;: フォントサイズを親要素の 1.1 倍に設定しています。

- color: #555;: テキストの色を中間のグレーに設定しています。

<h3>テキストエリア (textarea)</h3>

- width: calc(100% - 24px);: 幅を親要素の 100%から左右のパディング分（12px + 12px = 24px）を引いた値に設定し、パディングを含めた幅が正しくなるようにしています。

- padding: 12px;: 内側に 12 ピクセルの余白を設けています。

- font-size: 1em;: フォントサイズを親要素と同じサイズに設定しています。

- border: 2px solid #f39c12;: 2 ピクセル幅のオレンジ色の実線ボーダーを設定しています。

- border-radius: 8px;: 角を丸くしています。

- resize: vertical;: テキストエリアのサイズ変更を垂直方向（高さ）のみに制限しています。

- margin-bottom: 15px;: 下に 15 ピクセルの余白を設けています。

- transition: border-color 0.3s ease;: ボーダーの色の変化を 0.3 秒かけて滑らかに行うように設定しています。

<h3>テキストエリアのフォーカス時 (textarea:focus)</h3>

- outline: none;: フォーカス時にブラウザが自動的に追加するアウトラインを非表示にしています。

- border-color: #d35400;: フォーカス時にボーダーの色を濃いオレンジに変更しています。

- box-shadow: 0 0 8px rgba(211, 84, 0, 0.3);: フォーカス時に影を追加し、入力中であることを視覚的に示しています。

<h3>段落 (p)</h3>

- font-size: 1em;: フォントサイズを親要素と同じサイズに設定しています。

- color: #666;: テキストの色を薄いグレーに設定しています。

- text-align: right;: テキストを右揃えにしています。

- margin-top: 0;: 上の余白をなくしています。

<h3>文字数表示 (#charCount)</h3>

- font-weight: bold;: テキストを太字にしています。

- color: #2c3e50;: テキストの色を濃い青グレーに設定しています。

<h3>警告時の文字数表示 (#charCount.warning)</h3>

- color: #e74c3c;: warning クラスが適用された場合に、テキストの色を赤（警告色）に変更します。これは JavaScript によって動的に適用されます。

<h3>ボックス (.box)</h3>

- width: 1024px;, height: 768px;: ボックスの幅と高さを固定しています。

- margin: 13% auto 0;: 上に 13%の余白をとり、左右は自動で中央に配置し、下は余白なしに設定しています。

- display: flex;, align-items: center;, justify-content: center;: Flexbox を使って、ボックス内のコンテンツ（「文字数カウンター」というテキスト）を水平・垂直方向ともに中央に揃えています。

- color: #fff;: テキストの色を白に設定しています。

- font-size: 32px;, font-weight: bold;: フォントサイズを 32 ピクセル、太字に設定しています。

- position: relative;: 子要素の絶対配置の基準となるように設定しています。

- transition: 0.4s;: すべてのプロパティの変化を 0.4 秒かけて滑らかに行うように設定しています。

<h3>ボックスの疑似要素 (.box::before, .box::after)</h3>

これらは CSS で生成される特殊な要素で、ここではボックスの角に装飾的なボーダーを追加するために使われています。

- content: "";: 疑似要素のコンテンツを空に設定しています。

- width: 50px;, height: 50px;: 初期サイズを 50 ピクセルに設定しています。

- border-top: 2px solid rgba(255, 255, 255, 0.5);, border-left: 2px solid rgba(255, 255, 255, 0.5); (::before): 上と左に半透明の白いボーダーを設定しています。

- border-bottom: 2px solid rgba(255, 255, 255, 0.5);, border-right: 2px solid rgba(255, 255, 255, 0.5); (::after): 下と右に半透明の白いボーダーを設定しています。

- position: absolute;: 親要素（.box）に対して絶対的に配置することを指定しています。

- top: -1px;, left: -1px; (::before): ボックスの左上隅に配置します。

- bottom: -1px;, right: -1px; (::after): ボックスの右下隅に配置します。

- transition: 0.4s;, transition-delay: 0.5s;: 変化を 0.4 秒かけて行い、0.5 秒の遅延を設定しています。
  ホバー時のボックスと疑似要素 (.box:hover:before, .box:hover::after, .box:hover)

- .box:hover:before, .box:hover::after: マウスがボックスの上に乗ったときに、疑似要素の幅と高さを 100%に広げ、ボーダーの色を少し濃い半透明の白に変更し、遅延なく変化するように設定しています。また、border-radius: 15px;で角を丸くしています。

- .box:hover: マウスがボックスの上に乗ったときに、背景色を半透明の白にし、backdrop-filter: blur(15px);で背景をぼかす効果を追加し、0.3 秒の遅延を持って変化するように設定しています。こちらも border-radius: 15px;で角を丸くしています。

<h1>JavaScriptについて</h1>

JavaScript は、ウェブページに動きやインタラクティブな機能を追加するためのプログラミング言語です。

提供された JavaScript コードは、テキストエリアに入力された文字数をリアルタイムでカウントし、表示を更新する機能を実現しています。

各行の解説

- const myTextarea = document.getElementById("myTextarea");: HTML 内で id="myTextarea"を持つ要素（つまりテキストエリア）を取得し、myTextarea という名前の定数に格納しています。const は再代入できない変数を宣言する際に使われます。

- const charCountDisplay = document.getElementById("charCount");: HTML 内で id="charCount"を持つ要素（文字数を表示する<span>タグ）を取得し、charCountDisplay という名前の定数に格納しています。

- const maxLength = myTextarea.getAttribute("maxlength");: myTextarea（テキストエリア）の maxlength 属性の値（この場合は 100）を取得し、maxLength という名前の定数に格納しています。

イベントリスナーの追加

- myTextarea.addEventListener("input", () => { ... });: myTextarea（テキストエリア）に対して、「input」イベント（ユーザーがテキストエリアに何か入力するたびに発生するイベント）が発生したときに、指定された関数を実行するように設定しています。

イベント発生時の処理

イベントが発生すると、以下の処理が実行されます。

- const currentLength = myTextarea.value.length;: テキストエリアの現在の入力値（myTextarea.value）の文字数（length）を取得し、currentLength という名前の定数に格納しています。

- charCountDisplay.textContent = currentLength;: charCountDisplay 要素の表示内容を、現在の文字数（currentLength）に更新しています。

- if (currentLength > maxLength \* 0.8) { ... } else { ... }:

  - maxLength \* 0.8 は、最大文字数の 80%を計算しています。

  - もし現在の文字数が最大文字数の 80%を超えた場合（例：100 文字中 81 文字以上）、charCountDisplay 要素に warning という CSS クラスを追加します。これにより、CSS で定義された警告色（赤色）が文字数表示に適用されます。

  - そうでない場合（80%以下の文字数の場合）、charCountDisplay 要素から warning クラスを削除します。これにより、文字数表示の色が通常の表示色に戻ります。

<h3>初期表示の設定</h3>

- charCountDisplay.textContent = myTextarea.value.length;: ページが読み込まれたときに、テキストエリアにすでに何らかのデフォルト値がある場合に備えて、その初期の文字数を charCountDisplay に表示しています。これにより、ページロード時に文字数が正しく表示されるようになります。

<h1>【まとめ】</h1>
このコードは、HTMLでウェブページの構造を作り、CSSでその見た目をデザインし、JavaScriptでユーザーの入力に応じて文字数をリアルタイムでカウントして表示するインタラクティブな機能を追加する、という一連の流れを示しています。

特にテキストエリアに入力された文字数が一定の割合を超えると警告色に変化する機能が特徴です。
