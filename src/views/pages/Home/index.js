import React, { useState } from 'react';

import Slider from '../../components/Slider';
import { HomeStyles, Cards, Model } from './styles';
import { SliderComponent } from '../../components/Slider/styles';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img from '../../../assets/slider/slide-foto1.jpg';
import imgSlideComent from '../../../assets/slider/slide-foto2.jpg';

import imgGuitarra from '../../../assets/banners/foto1.jpg';
import imgMic from '../../../assets/banners/foto2.jpg';
import imgMesaSom from '../../../assets/banners/foto3.jpg';
import imgTeclado from '../../../assets/banners/foto4.jpg';
import imgViolao from '../../../assets/banners/foto5.jpg';
import imgBateria from '../../../assets/banners/foto6.jpg';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
  nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
};

const data = {
  "success": true,
  "products": [
    {
      "productName": "Bateria Eletrônica",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-bateria-eletronica.png",
      "price": 149990
    },
    {
      "productName": "Kit de Pratos",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-pratos.png",
      "price": 149990
    },
    {
      "productName": "Pedal Duplo para Bumbo",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedal-duplo-para-dumbo.png",
      "price": 149990
    },
    {
      "productName": "Módulo para Bateria",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-modulo-para-bateria.png",
      "price": 149990
    },

    {
      "productName": "Prato 17” Medium Crash",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-prato-17-medium-crash.png",
      "price": 149990
    },
    {
      "productName": "Kit Bag para Tambores",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-bag-para-tambores.png",
      "price": 149990
    },
    {
      "productName": "Banco para Bateria",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-banco-para-bateria.png",
      "price": 149990
    },
    {
      "productName": "Pedestal para Percussão",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedestal-para-percussao.png",
      "price": 149990
    },

    {
      "productName": "Mixer de Video",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-mixer-de-video.png",
      "price": 149990
    },
    {
      "productName": "Guitarra Jackson",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-guitarra-jackson.png",
      "price": 149990
    },
    {
      "productName": "Contrabaixo Elétrico",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-contrabaixo-eletrico.png",
      "price": 149990
    },
    {
      "productName": "Sistema de Microfone s/ Fio",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-sistema-de-microfones-sem-fio.png",
      "price": 149990
    }
  ]
};

let produtoModal;
let indexProd;  

const Home = () => {
  const [statusModal, setStatusModal] = useState(false);

  
  
  
  
  const Modal = () => {
    produtoModal.price = String(produtoModal.price);
                
    let precoBrl = produtoModal.price.substr(0, produtoModal.price.length - 2) 
    + ',' + produtoModal.price.substr(produtoModal.price.length - 2);
    
    return (
      <Model>
        <div className="modal">
          <div className="modal-content" key={indexProd}>
            <div className="imagem">
              <img src={produtoModal.photo} />
            </div>
            <div className="informacoes">
              <p className="nome-produto">{produtoModal.productName}</p>
              <p className="preco-produto">R$ {precoBrl}</p>
              <p className="desc-produto">{produtoModal.descriptionShort}</p>
              <a onClick={dropModal} href="#">Veja mais detalhes do produto{'>'}</a>
              <input onClick={dropModal} type="button" value="Adicionar ao carrinho" />
            </div>
            <div className="btn-fechar">
              <p onClick={dropModal}>✖️</p>
            </div>
          </div>
        </div>
      </Model>
    )
  };

  const modal = statusModal ? (
    <Modal />
  ) : null;

  const dropModal = () => {
    if(!statusModal) 
      setStatusModal(true);
    else 
      setStatusModal(false);
  };

  const CardProduto = () => {
    return (
      <Cards>
        <div className="produtos-lista">
          {
            data.products.map((produto, index) => {
              produto.price = String(produto.price);

              let precoBrl = produto.price.substr(0, produto.price.length - 2) 
              + ',' + produto.price.substr(produto.price.length - 2);
              
              return (
                <>
                  <div 
                    className="produto" 
                    key={index}
                    onClick={() => {
                      produtoModal = produto;
                      indexProd = index;
                      dropModal();
                    }}
                  >
                    <div className="imagem">
                      <img src={produto.photo}/>
                      <p className="btn-view">Quick view</p>
                    </div>
                    <div className="informacoes">
                      <p className="nome-produto">{produto.productName}</p>
                      <p className="desc-produto">{produto.descriptionShort}</p>
                      <p className="preco-produto">R$ {precoBrl}</p>
                    </div>
                  </div>
           
                </>
              );
            })
          }
        </div>
      </Cards>
    );
  };

  return (
    <>
      <section>
        <Slider/>
        <HomeStyles>
          <section>
            <div className="container-fotos">
                <div className="foto">
                    <img src={imgGuitarra} alt=""/>
                    <p>guitarras</p>
                </div>
                <div className="foto">
                    <img src={imgMic} alt=""/>
                    <p>microfones</p>
                </div>
                <div className="foto">
                    <img src={imgMesaSom} alt=""/>
                    <p>mesa de som</p>
                </div>
                <div className="foto">
                    <img src={imgTeclado} alt=""/>
                    <p>teclados</p>
                </div>
                <div className="foto">
                    <img src={imgViolao} alt=""/>
                    <p>violão</p>
                </div>
                <div className="foto">
                    <img src={imgBateria} alt=""/>
                    <p>baterias</p>
                </div>
            </div>
            <div className="container-fotos-novidades">
              <div className="foto-esquerda">
                <p className="space">novidades</p>
                <p className="grande-bold">áudio</p>
                <p className="grande">profissional</p>
                <input className="btn" type="button" value="confira"/>
              </div>
              <div className="foto-direita">
                <p className="space">novidades</p>
                <p className="grande-bold">instrumentos</p>
                <p className="grande">musicais</p>
                <input className="btn" type="button" value="confira"/>
              </div>
            </div>
          </section>
          <section>
            <div className="container-produtos">
              <div className="titilo">
                <h1>intrumentos <span>destaque</span></h1>
                <p>it is um established feact that a reader will be distract by the reable</p>
              </div>
              <div className="produtos-content">
                <CardProduto/>
                <input className="btn" type="button" value="ver mais"/>
              </div>

            </div>
          </section>
          <section>
            <div className="container-informacoes">
              <div className="conteiner-marcas">
                <div className="marcas">
                  <h1>as <span>melhores</span> marcas</h1>
                  <p>it is um established feact that a reader will be distract by the reable</p>
                  <SliderComponent>
                    <div className="slide-container">
                        <Slide>
                            <div className="each-slide">
                              <div className="marcas-slide">
                                <div className="marca">
                                  <p>akg</p>
                                </div>
                                <div className="marca">
                                  <p>roland</p>
                                </div>
                                <div className="marca">
                                  <p>boss</p>
                                </div>
                                <div className="marca">
                                  <p>shure</p>
                                </div>
                              </div>
                            </div>
                            <div className="each-slide">
                            <div className="marcas-slide">
                                <div className="marca">
                                  <p>akg</p>
                                </div>
                                <div className="marca">
                                  <p>roland</p>
                                </div>
                                <div className="marca">
                                  <p>boss</p>
                                </div>
                                <div className="marca">
                                  <p>shure</p>
                                </div>
                              </div>
                            </div>
                            <div className="each-slide">
                            <div className="marcas-slide">
                                <div className="marca">
                                  <p>akg</p>
                                </div>
                                <div className="marca">
                                  <p>roland</p>
                                </div>
                                <div className="marca">
                                  <p>boss</p>
                                </div>
                                <div className="marca">
                                  <p>shure</p>
                                </div>
                              </div>
                            </div>
                        </Slide>
                    </div>
                  </SliderComponent>
                </div>
              </div>
              <div className="container-sobre">
                <h1>sobre nós</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Necessitatibus ullam maxime esse! Amet suscipit consectetur 
                  voluptates at ratione in dolor, sequi id odit eligendi dolorum 
                  similique mollitia excepturi quia quibusdam!Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Necessitatibus ullam maxime esse! Amet suscipit consectetur 
                  voluptates at ratione in dolor, sequi id odit eligendi dolorum 
                  similique mollitia excepturi quia quibusdam!Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Necessitatibus ullam maxime esse! Amet suscipit consectetur 
                  voluptates at ratione in dolor, sequi id odit eligendi dolorum 
                  similique mollitia excepturi quia quibusdam!
                  </p>           
              </div>
              <div className="container-comentarios">
                <div className="comentarios">
                  <SliderComponent>
                    <div className="slide-container">
                        <Slide>
                            <div className="each-slide">
                                <div className="container-slide">
                                  <img src={imgSlideComent}/>
                                  <div className="nome ">
                                    <p>Felipe Salmim</p>
                                    <p>designer</p>
                                  </div>
                                  <div className="container-msg">
                                    <p>
                                      Many desktop publishing packages and web page editors now use Lorem ipsum
                                      <br/>
                                      as thair default model text, and a search dor 'lorem ipsum'
                                    </p>
                                  </div>  
                                </div>
                            </div>
                            <div className="each-slide">
                              <div className="container-slide">
                                  <img src={imgSlideComent}/> 
                                  <div className="nome ">
                                    <p>Felipe Salmim</p>
                                    <p>designer</p>
                                  </div>
                                  <div className="container-msg">
                                    <p>
                                      Many desktop publishing packages and web page editors now use Lorem ipsum
                                      <br/>
                                      as thair default model text, and a search dor 'lorem ipsum'
                                    </p>
                                  </div>
                                </div>
                            </div>
                            <div className="each-slide">
                              <div className="container-slide">
                                <img src={imgSlideComent}/>
                                <div className="nome ">
                                  <p>Felipe Salmim</p>
                                  <p>designer</p>
                                </div>
                                <div className="container-msg">
                                    <p>
                                      Many desktop publishing packages and web page editors now use Lorem ipsum
                                      <br/>
                                      as thair default model text, and a search dor 'lorem ipsum'
                                    </p>
                                  </div>
                              </div>
                            </div>
                        </Slide>
                    </div>
                  </SliderComponent>
                </div>
              </div>
            </div>
          </section>
        </HomeStyles>
      </section>
      {modal}
    </>
  );
}

export default Home;
