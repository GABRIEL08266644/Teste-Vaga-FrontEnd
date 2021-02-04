import React from 'react';

import { SliderComponent } from './styles';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img from '../../../assets/slider/slide-foto1.jpg';


const slideImages = [
  img,
  img,
  img
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
};

function Slider() {
    return (
        <SliderComponent>
            <div className="slide-container">
                <Slide>
                    <div className="each-slide">
                        <div 
                            className="img-slide" 
                            style={
                                {'backgroundImage': `url(${slideImages[0]})`}
                            }
                        >   
                            <div className="info-slide">
                                <p>novos produtos</p>
                                <p className="grande bold">instrumentos</p>
                                <p className="grande">profissionais</p>
                                <input className="btn" type="button" value="confira"/>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div 
                            className="img-slide" 
                            style={
                                {'backgroundImage': `url(${slideImages[2]})`}
                            }
                        >
                            <div className="info-slide">
                                <p>novos produtos</p>
                                <p className="grande bold">instrumentos</p>
                                <p className="grande">profissionais</p>
                                <input className="btn" type="button" value="confira"/>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div 
                            className="img-slide" 
                            style={
                                {'backgroundImage': `url(${slideImages[2]})`}
                            }
                        >
                            <div className="info-slide">
                                <p>novos produtos</p>
                                <p className="grande bold">instrumentos</p>
                                <p className="grande">profissionais</p>
                                <input className="btn" type="button" value="confira"/>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </SliderComponent>    
    );
}

export default Slider;