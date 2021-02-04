import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serife;
    }
    
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 'Roboto', sans-serife;
    }

    .show {
        display: block;
    }

    .hidden {
        display: none;
    }
`;