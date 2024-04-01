import Image from "next/image"
import Link from "next/link"
import glen from "../Assets/img/glen.png"
import rob from "../Assets/img/rob.png"
import tal from "../Assets/img/tal.png"
import './alunos.css'

const Alunos = () => {
    return (
      <>
<div className="alunos">
    <h1>Equipe GRT TECH</h1>
    <h2>Integrantes</h2>

<div className="sep">
    <section className="box">
        <Image src={glen} alt="" className="tamanim"/>
        <p>Desenvolvedora:</p>
        <p>Glenda Delfy Vela Mamani</p>
        <p>RM 552667</p>
        <Link href="">LinkedIn</Link >
    </section>
    <section className="box">
        <Image src={rob} alt="" className="tamanim"/>
        <p>Desenvolvedor:</p>
        <p>Robson Apparecido dos Santos</p>
        <p>RM 552858</p>
        <Link href="">LinkedIn</Link>
    </section>
    <section className="box">
        <Image src={tal} alt="" className="tamanim"/>
        <p>Desenvolvedora:</p>
        <p>Talyta Botelho Perrotti</p>
        <p>RM 553739</p>
        <Link href="">LinkedIn</Link >
    </section>
</div>
</div>
</>
)
}


export default Alunos