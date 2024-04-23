import styled from 'styled-components';
import { palette } from "styled-theme";

const LoaderStyleComponent = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:"center;
    position:absolute;
    z-index:10000000000;
    top:0;
    right:0;

    .loaderContent{
        width:50px;
        height:50px;
        animation: svgSpinner 1.4s linear infinite;
    }

    .loaderContentCircle{
        animation: svgSpinnerCircle 1.4s ease-in-out infinite;
        stroke-dasharray: 80px, 200px;
        stroke-dashoffeset: 0px;
        stroke: ${palette('primary',0)};
        stroke-linecap:round;
    }

    @keyframes svgSpinner{
        100%{
            transform:rotate(360deg);
        }
    }
`;

export default LoaderStyleComponent;