import IMovie from "../types/movie";

const movies: Array<IMovie> = [
  {
    id: "1",
    media_type: "movie",
    original_name: "Academia Cranston - Cenas Monstruosas!",
    title: "Academia Cranston - Cenas Monstruosas!",
    vote_average: 6.5,
    vote_count: 20665,
    release_date: "2020-04-29",
    overview:
      "An intelligent 15-year-old high school student is unexpectedly transferred to a boarding school where he opens a portal of monsters from another dimension.",
    poster_path:
      "https://image.tmdb.org/t/p/w500/qStFVmqYEfeBk8JtVZjNfe4aoTn.jpg",
    favourite: false,
    watchLater: false,
  },
  {
    id: "2",
    media_type: "movie",
    original_name: "The Lord of the Rings: The Fellowship of the Ring",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    vote_average: 8.4,
    vote_count: 1844,
    release_date: "2001-12-18",
    overview:
      "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    poster_path:
      "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    favourite: false,
    watchLater: false,
  },
  {
    id: "3",
    media_type: "movie",
    original_name: "The Shawshank Redemption",
    title: "The Shawshank Redemption",
    vote_average: 8.7,
    vote_count: 20996,
    release_date: "1994-09-23",
    overview:
      "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    poster_path:
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    favourite: false,
    watchLater: false,
  },
];

export default movies;
