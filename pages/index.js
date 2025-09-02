// pages/index.js
import Link from "next/link";

export default function Home() {
  const box = {
    maxWidth: 720,
    margin: "40px auto",
    padding: "24px",
    border: "1px solid #eee",
    borderRadius: "12px",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    lineHeight: 1.6,
  };
  const btn = {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: "10px",
    textDecoration: "none",
    border: "1px solid #ddd",
    marginRight: "12px",
  };

  return (
    <main style={box}>
      <h1 style={{ marginTop: 0 }}>Travel Sensei</h1>
      <p>LINE から開く旅行コンシェルジュの入口ページです。</p>

      <h2>はじめに</h2>
      <ul>
        <li>アンケートに回答（/form）</li>
        <li>購入手続きへ（/purchase）</li>
        <li>完了ページ（/done）</li>
      </ul>

      <div style={{ marginTop: 16 }}>
        <Link href="/form" style={btn}>アンケートへ</Link>
        <Link href="/purchase" style={btn}>購入へ</Link>
        <Link href="/done" style={btn}>完了ページ</Link>
      </div>

      <p style={{ marginTop: 24, color: "#666" }}>
        ※ まだ /form・/purchase・/done は仮リンクです。後で中身を追加します。
      </p>
    </main>
  );
}
