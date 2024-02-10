// 関数：HTMLのbodyタグ内の一番下に新たな段落を追加
function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "ボタンが押されました！"
    document.body.appendChild(para);
}

/* 
  1. ページ内のボタンへの参照を全て取り出してクリックする
  2. 全てのボタンをループで回し、クリックイベントのリスナーを追加
  
  どのボタンが押されても、createParagraph関数が実行される
*/
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}