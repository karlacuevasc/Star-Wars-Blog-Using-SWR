import React from "react";
import { starWarsApiFetch } from "../component/api";
import { useFavorites } from "/workspace/react-hello-webapp/src/js/store/favorites.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useSWR from "swr";
import R2DT from "/workspace/react-hello-webapp/src/img/r2d2-IL.jpeg";
import "/workspace/react-hello-webapp/src/styles/people.scss";

export const People = () => {
	const { data, isValidating } = useSWR("/api/people", starWarsApiFetch);
	const favorites = useFavorites();

	const peopleRow =
		data &&
		data.results.map((item, index) => {
			return (
				<Card className="peopleCard" key={index}>
					<Card.Img variant="top" src={R2DT} />
					<Card.Body>
						<Card.Title>{item.name}</Card.Title>
						<Card.Text>Gender: {item.gender} Hair-Color: Eye-color: </Card.Text>
						<Button variant="primary" href={"/person/" + item.uid}>
							Go somewhere
						</Button>
						{favorites.favorites.people.some(fav => {
							return fav.uid === item.uid;
						}) ? (
							<Button
								className="btn btn-warning"
								onClick={() => favorites.removeFavorite(item, "people")}>
								Remove
							</Button>
						) : (
							<Button className="btn btn-warning" onClick={() => favorites.addFavorite(item, "people")}>
								Add to favorite
							</Button>
						)}
					</Card.Body>
				</Card>
			);
		});

	{
		/* // : "No data"} */
	}

	return (
		<div>
			<h1>Characters</h1>
			<div className="scroll">
				<div className="peopleRow">{peopleRow}</div>
			</div>
		</div>
	);
};
