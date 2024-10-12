import styles from "./style/global.module.scss";
import Header from "./components/header/Header";
import { NextProvider } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        <NextProvider>
          <Header />
          {children}
        </NextProvider>
      </body>
    </html>
  );
}
