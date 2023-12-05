import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Unsplash API",
  description: "Open collection of high-quality photos",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
				<NavBar/>
				<main className="max-w-screen-xl mx-auto">
					{children}
				</main>
			</body>
    </html>
  );
}

export default RootLayout;