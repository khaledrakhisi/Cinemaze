import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

import { TRootStoreType } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalVisibility } from "../../redux/ui/ui-actions";
import LoadingSpinner from "../loading-spinner/LoadingSpinner.component";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import YoutubeEmbed from "../youtube-embed/YoutubeEmbed.component";
import IMovie from "../../types/movie";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  borderRadius: "10px",
};
const useStyles = makeStyles({
  title: {
    color: "#1976d2",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: "bold",
    textAlign: "center",
  },
  poster: {
    width: "70%",
    // height: "90%",
    minWidth: "100px",
    minHeight: "145px",
    margin: "0 auto",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
  },
  releaseDate: {
    color: "#41802e",
    fontSize: ".8rem",
    fontWeight: "bold",
  },
  overview: {
    color: "#000",
    maxHeight: "75px",
    fontSize: "1rem",
    textAlign: "justify",
    // wordBreak: "break-all",
  },
  primaryTypographyProps: {
    color: "blue",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: "bold",
  },
  vote: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width: "100%",
    color: "#eb9b34",
    fontSize: ".8rem",
    fontWeight: "bold",
  },

  favAndWatchlaterButtons: {
    padding: "0 5px",
    marginLeft: "auto",
  },
  iconButton: {
    padding: "2px 5px",
  },
});

const MovieDetails: React.FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { modalVisibility } = useSelector(
    (state: TRootStoreType) => state.UIState
  );
  const {
    title,
    release_date,
    poster_path,
    overview,
    vote_count,
    vote_average,
    isLoading,
    error,
    videos,
  } = useSelector((state: TRootStoreType) => state.movieDetails);

  const handleClose = () => dispatch(toggleModalVisibility());

  return (
    <React.Fragment>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modalVisibility}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modalVisibility}>
            <Container sx={style}>
              {isLoading && <LoadingSpinner asOverlay />}
              <Typography
                className={classes.title}
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {title}
              </Typography>
              <Box
                className={classes.poster}
                component="img"
                alt={title}
                src={`${process.env.REACT_APP_API_POSTER_URL}${poster_path}`}
              />
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2 }}
                className={classes.overview}
              >
                {overview}
              </Typography>
              {videos?.results &&
                videos?.results.length > 0 &&
                videos.results.map((video) => (
                  <YoutubeEmbed embedId={`${video.key}`} />
                ))}
            </Container>
          </Fade>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default MovieDetails;
