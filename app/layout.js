import { FavoritesProvider } from "@/context/FavoritesContext";
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
				<FavoritesProvider>
					<NavBar/>
					<main className="max-w-screen-xl mx-auto">
						{children}
					</main>
				</FavoritesProvider>
			</body>
    </html>
  );
}

export default RootLayout;