import React, { Component } from "react";
import FilmRow from "./FilmRow";
class FilmList extends Component {
	
	handleFilterClick = (filter) => {
		
		console.log(`${filter} was clicked`)
	}
	render() {
    const allFilms = this.props.films.map((film) => {
      return <FilmRow film={film} key={film.title} />;
    });

	

    return (
      <div>
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
            <div className="film-list-filter"
			 	onClick={()=>this.handleFilterClick('all')} >
              ALL
              <span className="section-count">{this.props.films.length}</span>
            </div>
            <div className="film-list-filter" 
				onClick={()=>this.handleFilterClick('faves')} >
              FAVES
              <span className="section-count">0</span>
            </div>
          </div>
          <h1> {allFilms}</h1>
        </div>
      </div>
    );
  }
}

export default FilmList;
