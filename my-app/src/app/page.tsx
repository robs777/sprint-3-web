import Image from "next/image";

import Conteudo from "./Conteudo/page"
import Header from "./Header/page"
import PreFooter from "./PreFooter/page"

export default function Home() {
  return (
    <>
    <Conteudo />
    <PreFooter/>
    </>
  );
}
