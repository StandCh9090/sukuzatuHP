/* =============================
   スク雑 共通 JavaScript
   ============================= */

// ダークモード設定キー
const THEME_KEY = "sukuzatsu-theme";

// 初期テーマ設定
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  setupDarkModeButton();
});

// ダークモード切り替えボタン生成
function setupDarkModeButton() {
  const header = document.querySelector(".header");
  if (!header) return;

  const btn = document.createElement("button");
  btn.textContent = "🌙";
  btn.className = "dark-toggle";

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem(THEME_KEY, "dark");
      btn.textContent = "☀️";
    } else {
      localStorage.setItem(THEME_KEY, "light");
      btn.textContent = "🌙";
    }
  });

  header.appendChild(btn);
}

/* =============================
   今後追加できる機能（例）
   - FAQアコーディオン
   - モバイルメニュー
   - ブログフィルタ
   ============================= */
