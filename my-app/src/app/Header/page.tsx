import Image from "next/image"

import salesforcelogo from "../Assets/img/salesforcelogo.svg"

import "./header.css"

const Header = () => {
    return(
        <>
         <header>
    <div className="cabecalho">
        <Image src={salesforcelogo} alt="" className="logoimg"/>
        <div className="modosbut">
            <button className="modosbutt">Modo baixa Visao</button>

            <button className="modosbutt">Modo daltonismo</button>

        </div>
        <button className="butlogin">Login</button>
        <button className="butTeste">Teste Gratis</button>

    </div>
</header>
        </>
    )
   
}
export default Header

