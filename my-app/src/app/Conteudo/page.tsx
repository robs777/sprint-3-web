import Image from "next/image";

import Link from 'next/link';


import coelho from "../Assets/img/coelho.png";
import mulher from "../Assets/img/mulher.png";
import mulher2 from "../Assets/img/mulher2.png";
import tigrinho from "../Assets/img/tigrinho.png";
import urso from "../Assets/img/urso.png";
import homem from "../Assets/img/homem.png";
import homem2 from "../Assets/img/homem2.png";

import "./conteudo.css"
 



const Conteudo = () => {
    return (
      <>
      <section className="entregue">
            <div className="entreguecoluna">
                <h1>Entregue sucesso agora com SalesForce Customer 360.</h1>
                <p className="pcabeca">O costumer 360 é a nosssa suíte de produtos e serviços que ajuda 98% dos clientes a
                    alcançar ou
                    superar suas metas de ROI</p>
                <div className="but">
                    <button className="butcabeca1">Faça o teste gratis</button>
                    <button className="butcabeca2">Saiba mais</button>
                </div>
            </div>
            <Image src={mulher} alt=""/>
        </section>

        {/* <!-- NOSSOS SERVIÇOS --> */}
        <div className="servicos">
            <h2>Nossos serviços</h2>
        </div>
        <div className="separa">
            <section className="boxes">
                <Image src={coelho} alt="" className="tamanimg"/>
                <p>Pagina com o layout e descrição dos principais produtos.</p>
                <a href="">Explore os produtos</a>
            </section>
            <section className="boxes">
                <Image src={mulher2} alt="" className="tamanimg"/>
                <p>Pagina com o formulário inicial para teste de 30 dias.</p>
                <a href="">Faça um teste gratis</a>
            </section>
            <section className="boxes">
                <Image src={homem} alt="" className="tamanimg"/>
                <p>Pagina inicial mostra os icones com suas funcionalidades.</p>
                <a href="">Experimente a Acessibilidade</a >
            </section>
        </div>
        <div className="separa">
            <section className="boxes">
                <Image src={urso} alt="" className="tamanimg"/>
                <p>Pagina com a apresentação dos integrantes da equipe.</p>
                <a href="">Nos conheça</a >
            </section>
            <section className="boxes">
                <Image src={homem2} alt="" className="tamanimg"/>
                <p>Pagina com o descritivo dos nossos serviços.</p>
                <a href="">Saiba mais</a >
            </section>
            <section className="boxes">
                <Image src={tigrinho} alt="" className="tamanimg"/>
                <p>Um Chatbot com o objetivo de auxiliar o cliente de acordo com suas necessidades.</p>
                <a href="">Experimente o Chatbot</a >
            </section>
        </div>



       
        </>
 )
}
export default Conteudo;