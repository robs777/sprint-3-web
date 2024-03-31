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
                                    <li>Legal</li>
                                    <li>Termos de serviços</li>
                                    <li>Declaração de privacidade</li>
                                    <li>Divulgação responsável</li>
                                    <li>Segurança</li>
                                    <li>Contato</li>
                                    <li>Preferências de cookies</li>
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

