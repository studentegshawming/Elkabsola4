import "./globals.css";

export const metadata = {
  title: "الكبسولة التعليمية",
  description: "منصة تعليمية للثانوية العامة والأزهر",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
