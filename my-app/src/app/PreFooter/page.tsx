
import Image from "next/image"
import face from "../Assets/img/face.png"
import x from "../Assets/img/x.png"
import lin from "../Assets/img/lin.png"
import insta from "../Assets/img/insta.png"
import youtube from "../Assets/img/youtube.png"
import salesforcelogo from "../Assets/img/salesforcelogo.svg"

import "./prefooter.css"



const PreFooter = () => {
    return(
        <>
         <div className="prefo">
            <section>
                <Image src={salesforcelogo} alt="" className="logoimg"/>
                <div className="prefo11">
                    <Image src={face} alt="" className="tes"/>
                    <Image src={x} alt="" className="tes"/>
                    <Image src={lin} alt=""className="tes"/>
                    <Image src={insta} alt="" className="tes"/>
                    <Image src={youtube} alt="" className="tes"/>
                </div>
                <p>Entre em contato 0800 891 1887</p>
            </section>
            <section className="prefogeral">
                <h2>Ainda não conhece a SalesForce?</h2>
                <ul>
                    <li>O que é CRM?</li>
                    <li>O que é a Salesforce?</li>
                    <li>Software de automação de marketing</li>
                    <li>Explorar todos os produtos</li>
                    <li>O que é computação na nuvem?</li>
                    <li>Histórias de Clientes</li>
                    <li>Edições e Preços</li>
                    <li>Política de Privacidade</li>
                </ul>
            </section>
            <section className="prefogeral">
                <h2>Sobre a SalesForce</h2>
                <ul>
                    <li>Nossa história</li>
                    <li>Blog</li>
                    <li>Carreiras</li>
                    <li>Segurança</li>
                    <li>Salesforce.org</li>
                    <li>Sustentabilidade</li>
                    <li>Investidores</li>
                    <li>Dê-nos o seu feedback</li>
                </ul>
            </section>
            <section className="prefogeral">
                <h2>Links populares</h2>
                <ul>
                    <li>Novos recursos e lançamentos</li>
                    <li>Salesforce para pequenas empresas</li>
                    <li>Encontre ou torne-se um parceiro</li>
                    <li>CRM Software</li>
                    <li>Salesforce LIVE</li>
                    <li>Dreamforce</li>
                    <li>Salesforce Mobile</li>
                </ul>
            </section>
        </div>
        </>
    )
   
}
export default PreFooter

