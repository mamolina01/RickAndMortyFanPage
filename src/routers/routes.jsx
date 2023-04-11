import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { DetailsPage } from "../pages/characters/page/DetailsPage";
import { UpperBar } from "../root/components/UpperBar";
import { CharacterPage } from "../pages/characters/page/CharacterPage";
import { EpisodePage } from "../pages/episodes/page/EpisodePage";
import { LocationPage } from '../pages/locations/page/LocationPage'
import { SearchPage } from "../pages/search/page/searchPage";

export const MyRoutes = () => {
	return (
		<Router>
			<UpperBar />
			<Routes>
				<Route exact path="/characters" element={<CharacterPage />} />
				<Route exact path="/characters/:characterId" element={<DetailsPage />} />
				<Route exact path="/episodes" element={<EpisodePage />} />
				<Route exact path="/locations" element={<LocationPage />} />
				<Route exact path="/search" element={<SearchPage />} />



				<Route path="/*" element={<Navigate to="/characters" />} />

			</Routes>
		</Router>
	);
};
