# 文字数カウンター

## 📋 プロジェクト概要

HTML、CSS、JavaScript の基礎を学ぶためのシンプルな文字数カウンターアプリケーションです。
ユーザーがテキストエリアに入力した文字数をリアルタイムで表示し、上限に近づくと警告色で表示します。

## 🎯 学習目的

- 今後 TypeScript や React にスケールする為の準備段階
- HTML/CSS/JavaScript の基本的な連携を理解する
- DOM 操作とイベント処理の基礎を学ぶ

## 🚀 機能

- リアルタイム文字数カウント
- 最大 100 文字の入力制限
- 80%を超えると警告色表示
- レスポンシブデザイン
- ホバーエフェクト付きのタイトル

## 📂 ファイル構成

```
├── index.html    # HTMLファイル（構造）
├── style.css     # CSSファイル（見た目）
├── script.js     # JavaScriptファイル（動作）
└── README.md     # このファイル
```

## 🎓 学習のポイント

### HTML

- **セマンティック要素**: `<label>`, `<textarea>`, `<span>`の適切な使用
- **属性の活用**: `maxlength`, `placeholder`, `id`による要素制御
- **アクセシビリティ**: `for`属性で label と input を関連付け

### CSS

- **Flexbox**: 中央寄せとレイアウト制御
- **疑似要素**: `::before`, `::after`で装飾効果
- **アニメーション**: `transition`とホバーエフェクト
- **レスポンシブ**: `calc()`と max-width による柔軟なサイズ調整

### JavaScript

- **DOM 操作**: `getElementById()`, `textContent`
- **イベント処理**: `addEventListener()`でリアルタイム反応
- **条件分岐**: 文字数に応じたスタイル変更
- **属性取得**: `getAttribute()`で HTML の値を取得

## 🔧 技術要点

### DOM 操作の基本パターン

```javascript
// 要素の取得
const element = document.getElementById("id名");

// イベントリスナーの追加
element.addEventListener("イベント名", コールバック関数);

// テキスト内容の変更
element.textContent = "新しいテキスト";

// CSSクラスの追加・削除
element.classList.add("クラス名");
element.classList.remove("クラス名");
```

### CSS 設計のポイント

- **コンテナーベース**: `.textarea-container`で関連要素をグループ化
- **状態管理**: `.warning`クラスで動的スタイル変更
- **アニメーション**: `transition`で滑らかな変化
- **視覚的フィードバック**: フォーカス時のボーダー変更

## 🌟 実装の特徴

1. **リアルタイム更新**: `input`イベントで文字入力と同時に更新
2. **警告機能**: 80%を超えると自動的に色が変わる
3. **視覚的効果**: ホバーで背景ぼかしとボーダーアニメーション
4. **レスポンシブ**: 様々な画面サイズに対応

## 🔄 次のステップ

このプロジェクトを理解したら、以下にチャレンジしてみましょう：

- 文字数制限の動的変更
- 複数のテキストエリアに対応
- TypeScript での型安全な実装
- React コンポーネントとしての再構築

## 📚 参考技術

- **HTML5**: セマンティック要素とアクセシビリティ
- **CSS3**: Flexbox、疑似要素、アニメーション
- **Vanilla JavaScript**: DOM 操作とイベント処理
