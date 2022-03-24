import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  //   border-radius: 7px;
  z-index: 1;
`;

const DualRing = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #4285f4;
    border-color: #4285f4 transparent #4285f4 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
interface IProps {
  asOverlay: Boolean;
}

const LoadingSpinner: React.FunctionComponent<IProps> = ({ asOverlay }) => {
  return (
    <Overlay>
      <DualRing />
    </Overlay>
  );
};

export default LoadingSpinner;
