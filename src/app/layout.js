import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
