import styles from "./style/global.module.scss";
import Header from "./components/common/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        <Header />
        {children}
      </body>
    </html>
  );
}
