import React from "react";

import IMovie from "../../types/movie";
import MovieThumb from "../movie-collection/MovieThumb.component";
import styled from "styled-components";

import { useHorizontalScroll } from "../../hooks/useHorizontallScroll";

const MovieCollecionContainer = styled.div`
  display: flex;
  flex-direcation: row;
  align-items: center;
  overflow-x: auto;
  flex-wrap: nowrap;

  height: 250px;

  position: relative;
`;

export enum EListType {
  LIST_TYPE_FAVOURITES = "LIST_TYPE_FAVOURITES",
  LIST_TYPE_SEARCH = "LIST_TYPE_SEARCH",
  LIST_TYPE_WATCHLATER = "LIST_TYPE_WATCHLATER",
}

interface IMovieListProps {
  movies: Array<IMovie>;
  listType: EListType;
}

const MovieCollection: React.FunctionComponent<IMovieListProps> = ({
  movies,
  listType,
}) => {
  const scrollRef = useHorizontalScroll();
  return (
    <React.Fragment>
      {movies &&
        movies.length === 0 &&
        "The list is empty, type something in the search textbox. you can use voice command too!"}

      <MovieCollecionContainer ref={scrollRef}>
        {movies.map((movie) => (
          <MovieThumb {...movie} itemType={listType} key={movie.id} />
        ))}
      </MovieCollecionContainer>
    </React.Fragment>
  );
};

export default MovieCollection;
