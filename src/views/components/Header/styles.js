import styled from 'styled-components';

export const HeaderStyle = styled.header`
    .cabecalho {
        display: block;
        color: #00244d;
        }

    .cabecalho-top {
        background-color: #00244d;
        display: flex;
        justify-content: center;
        justify-content: space-around;
        
        .itens-top p {
            color: #fff;
            text-transform: uppercase;
            font-weight: 900;
            font-size: 0.8rem;
        }
    }

    .cabecalho-center {
        display: flex;
        justify-content: center;
        align-items: center ;
        border-bottom: solid 1px #ccc;
        
        .itens-center {
            padding: 0px 20px;

            h1 {
                font-size: 3rem;
                font-family: 'Shadows Into Light', cursive;
            }

            .iten-search {
                width: 500px;
                padding: 15px;
                border-radius: 5px;
                border: solid 2px #ccc;
            }

            .info a,
            .info h2 {
                margin: 0;
                text-decoration: none;
                text-transform: uppercase;
                font-size: 0.8rem;
                color: #00244d; 
            }

            .min-banner {
                margin-bottom: -20px;
                height: 140px;
                width: 100px;
                background-color: #00244d;
                color: #fff;
                overflow: hidden;
                text-align: center;

                a {
                    font-size: 0.8rem;
                    bottom: 0px;
                    font-weight: 500;
                }
            }
        }
        
    }

    .cabecalho-end {
        display: flex;
        justify-content: space-around;

        .itens-end {
            padding: 15px;

            a {
                color: #00244d;
                text-decoration: none;
                text-transform: uppercase;
                font-size: 0.8rem;
                font-weight: 900;
            }
        }
    }
`;
