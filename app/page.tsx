"use client";

import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");

  const subjects = [
    "اللغة العربية",
    "اللغة الإنجليزية",
    "الكيمياء",
    "الفيزياء",
    "الأحياء",
    "الرياضيات"
  ];

  const subscribe = (subject: string) => {
    const text = `السلام عليكم، أريد الاشتراك في مادة ${subject}`;
    window.open(
      `https://wa.me/201271825595?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  if (page === "login") {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <h1>تسجيل الدخول</h1>

        <input
          placeholder="رقم الهاتف"
          style={{
            width: "300px",
            padding: 10,
            margin: 10
          }}
        />

        <br />

        <input
          type="password"
          placeholder="كلمة المرور"
          style={{
            width: "300px",
            padding: 10,
            margin: 10
          }}
        />

        <br />

        <button
          style={{
            padding: 12,
            width: 320,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 8
          }}
          onClick={() => setPage("student")}
        >
          دخول
        </button>
      </div>
    );
  }

  if (page === "student") {
    return (
      <div style={{ padding: 20 }}>
        <h1 style={{ textAlign: "center" }}>
          الكبسولة التعليمية
        </h1>

        {subjects.map((item) => (
          <div
            key={item}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 20,
              margin: 15
            }}
          >
            <h2>{item}</h2>

            <p>الاشتراك: 1200 جنيه</p>

            <button
              onClick={() => subscribe(item)}
            >
              اشترك الآن
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        textAlign: "center",
        padding: 40
      }}
    >
      <h1>🎓 الكبسولة التعليمية</h1>

      <p>
        منصة امتحانات الثانوية العامة والأزهر
      </p>

      <button
        onClick={() => setPage("login")}
      >
        تسجيل الدخول
      </button>
    </div>
  );
}
