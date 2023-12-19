"use client";

import { createContext, useState } from "react";

export const FavoritesContext = createContext({});

export const FavoritesProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);

	const addToFavorites = (img) => {
		setFavorites([...favorites, img]);
	}

	return (
	<FavoritesContext.Provider value={{
		addToFavorites,
		favorites,
		setFavorites
	}}>
		{children}
	</FavoritesContext.Provider>
	);
}