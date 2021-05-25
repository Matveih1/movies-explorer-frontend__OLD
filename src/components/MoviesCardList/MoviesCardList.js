import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import image from '../../images/movies1.jpg';

function MoviesCardList (props) {
  return (
    <section className="card-list">
      <MoviesCard
        src={image}
        name="33 слова о дизайне"
        time="13:40"
        isLiked="false"
      />
      <MoviesCard
        src={image}
        name="33 слова о дизайне"
        time="13:40"
        isLiked="true"
      />
    </section>
  )
}

export default MoviesCardList;