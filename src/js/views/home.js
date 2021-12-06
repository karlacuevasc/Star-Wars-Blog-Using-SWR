import React from "react";
import { People } from "./people";
import { Planets } from "./planets";
import { Vehicles } from "./vehicles";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div>
		<People />
		<Planets />
		<Vehicles />
	</div>
);
