import React from "react";
import styled from "styled-components";
import IMovie from "../../types/movie";
import { EListType } from "./MovieCollection.component";

const DetailsBar = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  width: 150px;
  transition: 0.5s ease;
  opacity: 0;
  bottom: 0;
  font-size: 6px;
  padding: 10px;
  text-align: center;
`;
const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 150px;
  max-height: 200px;
  min-width: 150px;
  min-height: 200px;

  margin: 5px 5px;

  border: 1px solid #e4e4eb;
  border-radius: 5px;

  cursor: pointer;

  background-size: cover;
  background-position: center;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  &:hover ${DetailsBar} {
    opacity: 1;
  }
`;

interface IMovieThumbProps extends IMovie {
  itemType: EListType;
}

const MovieComponent: React.FunctionComponent<IMovieThumbProps> = (movie) => {
  const { title, release_date, poster_path, vote_average, vote_count } = movie;

  return (
    <MovieContainer
      style={{
        backgroundImage: `url("${process.env.REACT_APP_API_POSTER_URL}${poster_path}")`,
      }}
      onClick={() => {
        // onMovieSelect(imdbID);
        // window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <DetailsBar></DetailsBar>
    </MovieContainer>
  );
};
export default MovieComponent;
