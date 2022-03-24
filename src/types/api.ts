import IMovie from "./movie";

export interface IAPIResult {
  state: number;
  data?: Array<IMovie>;
  error?: string;
}
