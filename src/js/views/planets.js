import React from "react";
import { starWarsApiFetch } from "../component/api";
import { useFavorites } from "/workspace/react-hello-webapp/src/js/store/favorites.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useSWR from "swr";
import Uranus from "/workspace/react-hello-webapp/src/img/uranus.jpeg";
import "/workspace/react-hello-webapp/src/styles/planets.scss";

export const Planets = () => {
	const { data, isValidating } = useSWR("/api/planets", starWarsApiFetch);
	const favorites = useFavorites();

	const planetsRow =
		data &&
		data.results.map((item, index) => {
			return (
				<Card className="planetsCard" key={index} href={"/planets/" + item.uid}>
					<Card.Img variant="top" src={Uranus} />
					<Card.Body>
						<Card.Title>{item.name}</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</Card.Text>
						<Button variant="primary" href={"/planet/" + item.uid}>
							Go somewhere
						</Button>
						{favorites.favorites.planets.some(fav => {
							return fav.uid === item.uid;
						}) ? (
							<Button
								className="btn btn-warning"
								onClick={() => favorites.removeFavorite(item, "planets")}>
								Remove
							</Button>
						) : (
							<Button className="btn btn-warning" onClick={() => favorites.addFavorite(item, "planets")}>
								Add to favorite
							</Button>
						)}
					</Card.Body>
				</Card>
			);
		});

	return (
		<div>
			<h1>Planets</h1>
			<div className="scroll">
				<div className="planetsRow">{planetsRow}</div>
			</div>
		</div>
	);
};
