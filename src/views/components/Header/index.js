import React from 'react';

import { HeaderStyle } from './styles';

const Header = () => {
    return (
        <>
            <HeaderStyle>
                <div className="cabecalho">
                    <div className="cabecalho-top">
                        <div className="itens-top">
                            <p>compra 100% segura</p>
                        </div>
                        <div className="itens-top">
                            <p>1troca grátis</p>
                        </div>
                        <div className="itens-top">
                            <p>5x sem juros</p>
                        </div>
                        <div className="itens-top">
                            <p>entregas em todo o brasil</p>
                        </div>
                    </div>
                    <div className="cabecalho-center">
                        <div className="itens-center">
                            <h1>ninja som</h1>
                        </div>
                        <div className="itens-center">
                            <input 
                                type="search" 
                                name="" 
                                id="" 
                                className="iten-search" 
                                placeholder="BUSQUE AQUI"
                            />
                        </div>
                        <div className="itens-center">
                            <p>(11) 99999-9999</p>
                        </div>
                        <div className="itens-center">
                            <div className="info">
                                <h2>olá, visitante</h2>
                                <a href="#">minha conta</a>
                            </div>
                        </div>
                        <div className="itens-center">
                            <div className="min-banner">
                                <p>seu carrinho</p>
                                <p>0 item (s)</p>
                            </div>
                        </div>
                    </div>
                    <div className="cabecalho-end">
                        <div className="itens-end">
                            <a href="#">todas as categorias</a>
                        </div>
                        <div className="itens-end">
                            <a href="#">som profissional</a>
                        </div>
                        <div className="itens-end">
                            <a href="#">instrumentos musicais</a>
                        </div>
                        <div className="itens-end">
                            <a href="#">promoçẽs</a>
                        </div>
                        <div className="itens-end">
                            <a href="#">contato</a>
                        </div>
                        <div className="itens-end">
                            <a href="#"></a>
                        </div>
                    </div>
                </div>
            </HeaderStyle>
        </>
    );
}

export default Header;