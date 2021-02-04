import styled from 'styled-components';

export const SliderComponent = styled.div`
    .slide-container {
        .img-slide {
            height: 550px; 
            background-position: center;
            background-size: cover;
            

            .info-slide {
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                p {
                    text-transform: uppercase;
                    letter-spacing: 5px;
                    margin: 5px;
                    color: #fff;
                    
                    font-weight: 300;
                }

                .grande {
                    font-size: 3rem;
                }

                .bold {
                    font-weight: 500;
                }

                .btn {
                    background-color: rgba(0, 0, 0, 0);
                    color: #fff;
                    text-transform: uppercase;
                    font-size: 1.1rem;
                    border: none;
                    border-bottom: solid 2px #ccc;
                    padding: 10px 5px;
                    margin-top: 20px;
                }
            }
        }

        .nav, .default-nav {
            background-color: rgba(0, 0, 0, 0);
            height: 100px;

            svg {
                color: #fff;
                height: 50px;
            }
        } 
    }
`;