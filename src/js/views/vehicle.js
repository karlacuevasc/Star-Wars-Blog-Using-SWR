import React from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { starWarsApiFetch } from "../component/api";

export const Vehicle = () => {
	const params = useParams();
	const { data } = useSWR("/api/vehicles/" + params.id, starWarsApiFetch);
	return <h1>{data && data.result.properties.name}</h1>;
};
