"use client";

import { useContext } from "react";
import { FavoritesContext } from "@/context/FavoritesContext";

const FavoritesPage = () => {
	const { favorites } = useContext(FavoritesContext);

	return (
		<div>page</div>
	);
}

export default FavoritesPage;