
import Image from "next/image"
import face from "../Assets/img/face.png"
import x from "../Assets/img/x.png"
import lin from "../Assets/img/lin.png"
import insta from "../Assets/img/insta.png"
import youtube from "../Assets/img/youtube.png"
import salesforcelogo from "../Assets/img/salesforcelogo.svg"
import Link from "next/link"

import "./prefooter.css"



const PreFooter = () => {
    return(
        <>
         <div className="prefo">
            <section>
                <Link href="/"><Image src={salesforcelogo} alt="" className="logoimg"/></Link>
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
                    <li><Link href="#">O que é CRM?</Link></li>
                    <li><Link href="#">O que é a Salesforce?</Link></li>
                    <li><Link href="#">Software de automação de marketing</Link></li>
                    <li><Link href="#">Explorar todos os produtos</Link></li>
                    <li><Link href="#">O que é computação na nuvem?</Link></li>
                    <li><Link href="#">Histórias de Clientes</Link></li>
                    <li><Link href="#">Edições e Preços</Link></li>
                    <li><Link href="#">Política de Privacidade</Link></li>
                </ul>
            </section>
            <section className="prefogeral">
                <h2>Sobre a SalesForce</h2>
                <ul>
                    <li><Link href="#">Nossa história</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Carreiras</Link></li>
                    <li><Link href="#">Segurança</Link></li>
                    <li><Link href="#">Salesforce.org</Link></li>
                    <li><Link href="#">Sustentabilidade</Link></li>
                    <li><Link href="#">Investidores</Link></li>
                    <li><Link href="#">Dê-nos o seu feedback</Link></li>
                </ul>
            </section>
            <section className="prefogeral">
                <h2>Links populares</h2>
                <ul>
                    <li><Link href="#">Novos recursos e lançamentos</Link></li>
                    <li><Link href="#">Salesforce para pequenas empresas</Link></li>
                    <li><Link href="#">Encontre ou torne-se um parceiro</Link></li>
                    <li><Link href="#">CRM Software</Link></li>
                    <li><Link href="#">Salesforce LIVE</Link></li>
                    <li><Link href="#">Dreamforce</Link></li>
                    <li><Link href="#">Salesforce Mobile</Link></li>
                </ul>
            </section>
        </div>
        </>
    )
   
}
export default PreFooter

