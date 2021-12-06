import React from "react";
import { starWarsApiFetch } from "../component/api";
import { useFavorites } from "/workspace/react-hello-webapp/src/js/store/favorites.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useSWR from "swr";
import Vehicle from "/workspace/react-hello-webapp/src/img/vehicle.jpeg";
import "/workspace/react-hello-webapp/src/styles/vehicles.scss";

export const Vehicles = () => {
	const { data, isValidating } = useSWR("/api/vehicles", starWarsApiFetch);
	const favorites = useFavorites();

	const vehiclesRow =
		data &&
		data.results.map((item, index) => {
			return (
				<Card className="vehiclesCard" key={index} href={"/vehicles/" + item.uid}>
					<Card.Img variant="top" src={Vehicle} />
					<Card.Body>
						<Card.Title>{item.name}</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</Card.Text>
						<Button variant="primary" href={"/vehicle/" + item.uid}>
							Go somewhere
						</Button>
						{favorites.favorites.vehicles.some(fav => {
							return fav.uid === item.uid;
						}) ? (
							<Button
								className="btn btn-warning"
								onClick={() => favorites.removeFavorite(item, "vehicles")}>
								Remove
							</Button>
						) : (
							<Button className="btn btn-warning" onClick={() => favorites.addFavorite(item, "vehicles")}>
								Add to favorite
							</Button>
						)}
					</Card.Body>
				</Card>
			);
		});

	return (
		<div>
			<h1>Vehicles</h1>
			<div className="scroll">
				<div className="vehiclesRow">{vehiclesRow}</div>
			</div>
		</div>
	);
};
