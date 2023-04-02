import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import Head from "next/head";
import data from "@/constants/data";
import Noticia from "@/components/Noticia";

export default function Fevereiro() {
  return (
    <>
      <Head>
        <title>Fevereiro</title>
      </Head>
      <div className="conteiner">
        <Cabecalho
          mes={`Fevereiro`}
          welcome={`Saudações. "Que o Carnaval não seja uma simples fantasia, mas sim uma genuína manifestação de grande alegria
            dentro do coração de cada folião."
            -Tânia Luz.
           `}
        />

        {data.fevereiro.map((fevereiro) => (
          <Noticia
            key={fevereiro.id}
            title={fevereiro.title}
            theme={fevereiro.theme}
            image={fevereiro.image}
            p1={fevereiro.p1}
            p2={fevereiro.p2}
            p3={fevereiro.p3}
            p4={fevereiro.p4}
            p5={fevereiro.p5}
            supportUrl={fevereiro.supportUrl}
            ulrDescription={fevereiro.ulrDescription}
          />
        ))}

        <Rodape />
      </div>
    </>
  );
}
