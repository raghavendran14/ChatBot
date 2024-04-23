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
`;

export default LoaderStyleComponent;