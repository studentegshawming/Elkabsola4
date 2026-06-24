export default function Home() {
  return (
    <main
      style={{
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>🎓 الكبسولة التعليمية</h1>

      <p>مرحبًا بك في موقع الكبسولة التعليمية</p>

      <button
        onClick={() =>
          window.open(
            "https://wa.me/201271825595",
            "_blank"
          )
        }
      >
        تواصل عبر واتساب
      </button>
    </main>
  );
}
