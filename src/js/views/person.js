import React from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { starWarsApiFetch } from "../component/api";
import R2DT from "/workspace/react-hello-webapp/src/img/r2d2-IL.jpeg";
import C3PO from "/workspace/react-hello-webapp/src/img/C-3PO.jpeg";

export const Person = () => {
	const params = useParams();
	const { data } = useSWR("/api/people/" + params.id, starWarsApiFetch);

	const images = {
		"1": R2DT,
		"2": C3PO
	};

	return (
		<div>
			<h1>{data && data.result.properties.name}</h1>
			{data && data.result.properties.name === "R2-D2" ? (
				<img src={images[1]} />
			) : data && data.result.properties.name === "C-3PO" ? (
				<img src={images[2]} />
			) : (
				<h1>No Image</h1>
			)}
		</div>
	);
};
