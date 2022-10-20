import React, { Component } from 'react';
import FilmRow from './FilmRow';
class FilmList extends Component {
	render() {
		const allFilms = this.props.films.map((film )=> {
		return (
			<FilmRow film={film} key={film.title}/>
			
		)
	})
			
		return (
			<div>
				<div className="film-list">
					<h1 className="section-title">FILMS</h1>
					<h1> {allFilms}</h1>
				</div>
			</div>
		)
	}

}

export default FilmList;