export default interface IMovie {
  id: string;
  media_type: string;
  original_name: string;
  title: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  overview: string;
  poster_path: string;
  favourite: boolean;
  watchLater: boolean;
}
