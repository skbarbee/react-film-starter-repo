import React, { Component } from 'react';
import Poster from './poster';

class FilmRow extends Component {
	render() {
		const filmRelease = new Date(this.props.film.release_date)
		const filmYear = filmRelease.getFullYear()
	

		return (
			<div>
				<div className="film-row">
					<Poster film = {this.props.film} />

					<div className="film-summary">
						<h1>{this.props.film.title}</h1>
						<p>{filmYear}</p>
						
					</div>
				</div>
			</div>
		)
	}

}

export default FilmRow;