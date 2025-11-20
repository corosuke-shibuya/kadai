document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("start");

  button.addEventListener("click", function () {
    // 各質問の選択肢を取得
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');
    const q7 = document.querySelector('input[name="q7"]:checked');
    const q8 = document.querySelector('input[name="q8"]:checked');

    // 未回答チェック
    if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8) {
      alert("すべての質問に答えてください！");
      return;
    }

    // カウンタ
    let e = 0, i = 0;
    let n = 0, s = 0;
    let t = 0, f = 0;
    let j = 0, p = 0;

    // Q1, Q2 → E / I
    if (q1.value === "E") { e++; } else { i++; }
    if (q2.value === "E") { e++; } else { i++; }

    // Q3, Q4 → N / S
    if (q3.value === "N") { n++; } else { s++; }
    if (q4.value === "N") { n++; } else { s++; }

    // Q5, Q6 → T / F
    if (q5.value === "T") { t++; } else { f++; }
    if (q6.value === "T") { t++; } else { f++; }

    // Q7, Q8 → J / P
    if (q7.value === "J") { j++; } else { p++; }
    if (q8.value === "J") { j++; } else { p++; }

    // 各軸の文字を決定
    const ei = (e >= i) ? "E" : "I";
    const ns = (n >= s) ? "N" : "S";
    const tf = (t >= f) ? "T" : "F";
    const jp = (j >= p) ? "J" : "P";

    const mbti = ei + ns + tf + jp;

// 4分類（分析家・外交官・番人・探検家）を判定
let group = "";
let groupText = "";
let imageSrc = "";

// 4分類判定（ここが本体）
if (ns === "N" && tf === "T") {
  group = "分析家タイプ";
  groupText = "直感的で論理重視の“分析家”タイプ。アイデアを論理的に組み立てるのが得意です。";
  imageSrc = "img/analyst.png";

} else if (ns === "N" && tf === "F") {
  group = "外交官タイプ";
  groupText = "直感的で人の気持ちを大切にする“外交官”タイプ。価値観を軸に動く傾向があります。";
  imageSrc = "img/diplomat.png";

} else if (ns === "S" && jp === "J") {
  group = "番人タイプ";
  groupText = "現実志向で計画的な“番人”タイプ。コツコツ安定して物事を進めるのが得意です。";
  imageSrc = "img/guardian.png";

} else if (ns === "S" && jp === "P") {
  group = "探検家タイプ";
  groupText = "現実志向でフットワークの軽い“探検家”タイプ。状況に合わせて柔軟に動けます。";
  imageSrc = "img/explorer.png";
}


document.getElementById("result-type").textContent =
  "あなたのMBTI風タイプは「" + mbti + "」です。";

document.getElementById("result-group").textContent =
  "4つのグループでは「" + group + "」に近いタイプです。";

document.getElementById("result-text").textContent = groupText;

// 画像表示
const image = document.getElementById("result-image");
image.src = imageSrc;
image.style.display = "block";
  });
}
);
