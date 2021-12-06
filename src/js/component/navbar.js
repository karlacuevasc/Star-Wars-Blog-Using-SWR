import React from "react";
import Logo from "/workspace/react-hello-webapp/src/img/logo.png";
import { useFavorites } from "/workspace/react-hello-webapp/src/js/store/favorites.js";
import { Link } from "react-router-dom";
import DropdownItem from "react-bootstrap/esm";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Navbar = () => {
	const favorites = useFavorites();
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={Logo} className="navbar-brand mb-0 h1" style={{ width: "100px" }} />
			</Link>
			<div className="ml-auto">
				<Dropdown>
					<Dropdown.Toggle className="toggle" variant="primary" id="dropdown-basic" size="lg">
						Dropdown Button
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{favorites.favorites.people.map((favorite, i) => (
							<Dropdown.Item href={"/person/" + favorite.uid} key={i}>
								{favorite.name}
							</Dropdown.Item>
						))}
						{favorites.favorites.planets.map((favorite, i) => (
							<Dropdown.Item href={"/planet/" + favorite.uid} key={i}>
								{favorite.name}
							</Dropdown.Item>
						))}

						{favorites.favorites.vehicles.map((favorite, i) => (
							<Dropdown.Item href={"/vehicle/" + favorite.uid} key={i}>
								{favorite.name}
							</Dropdown.Item>
						))}

						{favorites.favorites.vehicles.length === 0 &&
							favorites.favorites.planets.length === 0 &&
							favorites.favorites.people.length === 0 && (
								<DropdownItem>There are no favorites</DropdownItem>
							)}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
