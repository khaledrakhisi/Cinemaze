import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContainerStyled = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  width: 70%;
  margin: 0 auto;
`;
const IframeStyled = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

interface IYoutubeEmbedProps {
  embedId: string;
}

const YoutubeEmbed: React.FunctionComponent<IYoutubeEmbedProps> = ({
  embedId,
}) => (
  <ContainerStyled>
    <IframeStyled
      //   width="853"
      //   height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Trailer"
    />
  </ContainerStyled>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
