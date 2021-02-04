import styled from 'styled-components';

import imgDireita from '../../../assets/banners/foto1.jpg';
import imgEsquerda from '../../../assets/banners/foto7.jpg';

export const HomeStyles = styled.section`
    .container-fotos {
        display: flex;
        justify-content: space-around;
        opacity: 0.5;

        .foto {
            padding: 30px 0px;
            text-align: center;

            img {
                height: 100px;
                width: 100px;
                border-radius: 50%;
            }

            p {
                text-transform: uppercase;
                margin: 0;
                padding-top: 10px;
            }
        }
    }

    .container-fotos-novidades {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: #000;

        .foto-esquerda,
        .foto-direita {
            width: 50%;
            text-align: center;
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-position: center;
            background-size: cover;
            opacity: 0.8;

            p {
                text-transform: uppercase;
                font-size: 1rem;
                margin: 0px;
                letter-spacing: 5px;
            }

            .grande-bold,
            .grande {
                font-size: 3rem;
                font-weight: 300;
            }

            .grande-bold {
                font-weight: 900;
                color: #fff;
                margin-top: 10px;
            }

            .p {
                letter-spacing: 5px;
            }

            p,
            .grande {
                color: #ccc;
            }

            .btn {
                color: #fff;
                background-color: rgba(0, 0, 0, 0);
                text-transform: uppercase;
                font-weight: 900;
                padding: 20px 50px;
                border: solid 2px #ccc;
                border-radius: 7px;
                margin: 30px;
            }

            
        }

        .foto-esquerda {
            background-image: url(${imgEsquerda});
            background-position: bottom, center;
        }

        .foto-direita {
            background-image: url(${imgDireita});
        }
    }

    .container-produtos {
        
        
        .titilo {
            margin: 50px;
            text-align: center;

            h1 {
                color: #00244d;
                text-transform: uppercase;
                font-size: 2rem;
                margin: 5px;
                font-weight: 300;

                span {
                    font-weight: 500;
                }
            }

            p {
                font-weight: 300;
            }
        }

        .produtos-content {
            display: flex;
            flex-direction: column;
            align-items: center;

            .btn {
                color: #00244d;
                background-color: rgba(0, 0, 0, 0);
                text-transform: uppercase;
                font-weight: 900;
                padding: 15px 40px;
                border: solid 2px #00244d;
                border-radius: 7px;
                margin: 30px;
            }
        }
    }

    .container-informacoes {
        text-align: center;

        .marcas {
            margin-top: 80px;

            p {
                color: #ccc;
            }

            .marcas-slide {
                display: flex;
                justify-content: space-around;
                text-align: center;

                p {
                    text-transform: uppercase;
                    font-size: 3rem;
                    font-weight: 900;
                }
            }
        }

        .container-sobre {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 80px 0px;

            h1 {
                font-weight: 500;
            }

            p {
                max-width: 900px;   
                font-weight: 300;
            }
        }

        h1 {
            color: #00244d;
            text-transform: uppercase;
            font-size: 2rem;
            margin: 5px;
            font-weight: 300;

            span {
                font-weight: 500;
            }
        }
    }

    .container-comentarios {
        display: flex;
        justify-content: center;

        .comentarios {
            width: 80%;
            height: 200px;
            background-color: #ccc;
            margin-bottom: -30px;
            border-radius: 7px;
            background-color: #f7f7f7;
        }
    }

    .container-slide {
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 80px;
            border-radius: 50%;
        }

        .nome {
            margin: 20px 15px; 

            p {
                text-align: left;
                margin: 5px;
                color: #00244d;
            }
        }

        .container-msg {
            text-align: left;
            margin-left: 50px;
            padding: 10px 25px;
            background-color: #fff;
            color: #000;
            box-shadow: 0px 0px 6px #ccc;
            border-radius: 8px;   
            position: relative;
            font-weight: 300;
        }

            .container-msg:before {
            margin-top: 25px;
            border: 10px solid transparent;
            border-right-color: #fff;
            content: "";
            left: -20px;
            position: absolute;
        }
    }

`;

export const Cards = styled.section`
    width: 100%;
    justify-content: center;

    .produtos-lista {
        display: flex;
        flex-wrap: wrap;
        width: 1200px;
        margin: auto;
    }
 
    .produto {
        min-width: 200px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin: 32px;
        transition: all 100ms;

        img {
            height: 160px;
            width: 200px;
            transition: all 100ms;
        }

        .nome-produto,
        .preco-produto {
            color: #00244d;
            font-size: 1.2rem;
            margin: 0px 10px;
        }
        
        .desc-produto {
            max-width: 220px;
            font-size: 0.5;
            color: #000;
        }

        .imagem {
            height: 50%;

            img {
                transition: all 100ms;
                height: 80%;
                padding-top: 20px;
            }

            .btn-view {
                margin-top: 0px;
                display: none;
                font-size: 0.8rem;
                color: #00244d;
            }
        }

        .informacoes {
            height: 50%;
        }
    }

    .produto:hover {
        box-shadow: 6px 6px 10px #ccc;

        img {
                padding-top: 0px;
            }

        .btn-view {
            display: block;
        }
    }
`;

export const Model = styled.section`   
    .modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto; 
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);

        .modal-content {
            display: flex;
            justify-content: space-between;
            background-color: #fefefe;
            margin: auto; 
            padding: 40px 15px;
            border: 1px solid #888;
            width: 60%;
            height: 300px;
            margin-top: 100px;

            img {
                height: 250px;
            }

            .informacoes {
                margin-left: 30px;
                display: flex;
                flex-direction: column;
            }

            .nome-produto {
                font-weight: 300;
            }

            .nome-produto,
            .preco-produto {
                color: #00244d;
                font-size: 1.5rem;
                margin-top: 5px;
                letter-spacing: 1px;
            }

            .desc-produto {
                max-width: 300px;
                font-size: 0.5;
                color: #000;
                margin-top: 5px;
            }

            a {
                color: #00244d;
                letter-spacing: 1px;
            }

            input {
                padding: 15px 0px;
                margin-top: 20px;
                background-color: #00244d;
                color: #fff;
                border: none;
                border-radius: 6px;
                width: 180px;
            }

            .btn-fechar {
                right: 0;
                display: flex;
                justify-content: top;
                align-items: top;
                height: 100%;
                float: right;

                p {
                    margin-top: -25px;
                    cursor: pointer;
                }
            }
        }   
    }
`;