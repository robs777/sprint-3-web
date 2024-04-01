import Link from "next/link"
import "./footer.css"


const Footer = () => {
    return (
        <>
            <footer>

                <section className="footer">
                    <button className="futbut">Mudar de região</button>
                    <div className="footer1">
                        <p>© Copyright 2023 Salesforce, Inc. Todos os direitos reservados. As diversas marcas comerciais
                            pertencem a
                            seus respectivos proprietários. Salesforce Brasil, Av. Jornalista Roberto Marinho, 85 - 14º andar -
                            Cidade Monções, São Paulo - SP, 04575-000 Brasil.</p>
                        <div className="link">
                            <nav>
                                <ul>
                                    <li><Link href="#">Legal </Link></li>
                                    <li><Link href="#">Termos de serviços </Link></li>
                                    <li><Link href="#">Declaração de privacidade </Link></li>
                                    <li><Link href="#">Divulgação responsável </Link></li>
                                    <li><Link href="#">Segurança </Link></li>
                                    <li><Link href="#">Contato </Link></li>
                                    <li><Link href="#">Preferências de cookies </Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
            </footer>

        </>
    )



}
export default Footer

