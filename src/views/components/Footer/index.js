import React from 'react';

import { FooterStyle } from './styles';

import imgVisa from '../../../assets/footer/foto1.jpg';
import imgMasCard from '../../../assets/footer/foto2.jpg';
import imgCartao1 from '../../../assets/footer/foto3.jpg';
import imgCartao2 from '../../../assets/footer/foto4.jpg';
import imgBoleto from '../../../assets/footer/foto5.jpg';
import imgSeguranca from '../../../assets/footer/foto6.jpg';

const Footer = () => {
  return (
    <FooterStyle>
      <footer>
        <div className="container-footer">
            <div className="container-itens">
                <p>institucional</p>
                <a href="#">quem somos</a>
                <a href="#">nossas lojas</a>
                <p>atendimento</p>
                <a href="#">fale conosco</a>
                <a href="#">vendas ninjasom.com.br</a>
            </div>
            <div className="container-itens">
                <p>ajuda e suporte</p>
                <a href="#">política de privacidade</a>
                <a href="#">política de trocas</a>
                <a href="#">prazo de entrega</a>
                <a href="#">termos de uso</a>
            </div>
            <div className="container-itens">
                <p>fromas de pagamentos</p>
                <div className="container-formas-pagamento">
                    <div className="ln-1">
                        <img src={imgVisa} alt=""/>
                        <img src={imgMasCard} alt=""/>
                        <img src={imgCartao1} alt=""/>
                    </div>
                    <div className="ln-2">
                        <img src={imgCartao2} alt=""/>
                        <img src={imgBoleto} alt=""/>
                    </div>   
                </div>
                <p>segurança</p>
                <div className="container-seguranca">
                    <img src={imgSeguranca} alt=""/>
                    <img src={imgSeguranca} alt=""/>
                </div>
            </div>
            <div className="container-itens">
                <div className="container-email">
                    <p>assine nosso newsletter<br/>
                    e receba novidades e promoçẽs</p>
                    <input type="text" placeholder="SEU NOME" name="" id=""/>
                    <input type="email" placeholder="SEU E-MAIL" name="" id=""/>
                    <input className="btn" type="button" value="enviar"/>
                </div>
            </div>
        </div>
        <div className="conteiner-footer-end">
            <p>
                NINJA COM COMÉRCIO DE ELETRÔNICOS LTDA 2012-2019, todos os direitos reservados. Rua Santa Catarina
                <br/>
                550 560/502/564 - CEP:01.207-DDD São paulo / SP-CNPJ 07.808.816/0001.10
            </p>
        </div>
      </footer>
    </FooterStyle>
  );
}

export default Footer;