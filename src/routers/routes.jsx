import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { DetailsPage } from "../characters/page/DetailsPage";
import { UpperBar } from "../root/components/UpperBar";
import { MainPage } from "../characters/page/MainPage";
import { EpisodesPage } from "../episodes/Pages/EpisodesPage";

export const MyRoutes = () => {
	return (
		<Router>
			<UpperBar />
			<Routes>
				<Route exact path="/characters" element={<MainPage />} />
				<Route exact path="/characters/:characterId" element={<DetailsPage />} />
				<Route exact path="/episodes" element={<EpisodesPage />} />

				<Route path="/*" element={<Navigate to="/characters" />} />

			</Routes>
		</Router>
	);
};
