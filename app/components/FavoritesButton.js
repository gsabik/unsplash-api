"use client";

import { useContext } from "react";
import { FavoritesContext } from "@/context/FavoritesContext";
import { Star } from "feather-icons-react/build/IconComponents";

const FavoritesButton = ({ id }) => {
	const { addToFavorites } = useContext(FavoritesContext);

	const handleAddToFavorites = () => {addToFavorites(id)}

	return (
		<button className="border px-2 round rounded-sm text-gray-400" onClick={handleAddToFavorites}>
			<Star className={""}/>
		</button>
	);
}

export default FavoritesButton;