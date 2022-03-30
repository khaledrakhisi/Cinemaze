import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContainerStyled = styled.div`
  overflow: hidden;
  // padding-bottom: 56.25%;
  position: relative;
  height: 250px;
  width: 250px;
  margin: 10px auto;
  background-color: red;
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
    {embedId && (
      <IframeStyled
        // width="853px"
        // height="480"
        src={`https://www.youtube-nocookie.com/embed/${embedId}`}
        frameBorder="1"
        allow="accelerometer; clipboard-write;
       encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Trailer"
      />
    )}
  </ContainerStyled>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
