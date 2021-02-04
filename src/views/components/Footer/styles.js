import styled from 'styled-components';

export const FooterStyle = styled.footer`
    .container-footer {
        background-color: #00244d;
        color: #fff;
        display: flex;
        justify-content: space-around;
        padding: 100px 80px;
        padding-bottom: 0px;

        .container-itens {
            display: flex;
            flex-direction: column;
            margin: 50px 0px;

            p {
                font-size: 1.1rem;
                font-weight: 900;
                text-transform: uppercase;
            }

            a {
                font-size: 0.9rem;
                font-weight: 500;
                text-decoration: none;
                text-transform: uppercase;
                padding: 5px 0px;
                color: #fff;
            }

            .container-redes {
                margin-top: 20px;
            }

            
            .container-formas-pagamento,
            .container-seguranca{

                img {
                    margin-right: 5px;
                }
            }

            .container-email {
                background-color: #fff;
                color: #00244d;
                padding: 30px 15px;
                display: flex;
                flex-direction: column;
                text-align: center;
                border-radius: 5px;
                margin-top: -60px;

                p {
                    font-weight: 300;
                }

                input {
                    margin: 10px 0px;
                    padding: 10px 20px;
                    border: none;
                    border-bottom: solid 1px #ccc;
                    color: #000;
                    outline: 0;  
                }

                .btn {
                    padding: 10px;
                    background-color: #fff;
                    color: #00244d;
                    border: solid 2px #00244d;
                    border-radius: 7px;
                    width: 50%;
                    transition: all 50ms;
                }

                .btn:hover {
                    cursor: pointer;
                    background-color: #00244d;
                    color: #fff;
                }
            }
        }        
    }

    .conteiner-footer-end {
        margin-left: 110px;
        text-align: left;

        p {
            font-size: 0.6rem;
        }
    }
`;