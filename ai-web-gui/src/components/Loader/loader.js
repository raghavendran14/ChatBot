import React from "react";
import LoaderStyleComponent from './loader.style';

export default Loader =>(
    <LoaderStyleComponent>
        <svg className="loaderContent" viewBox="0 0 50 50">
            <circle
                className="loaderContentCircle"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="3.6"
                />
        </svg>
    </LoaderStyleComponent>
)