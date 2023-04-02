import Head from "next/head";
import Noticia from "@/components/Noticia";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import data from "@/constants/data";

export default function Novembro() {
  return (
    <>
      <Head>
        <title>Novembro</title>
      </Head>
      <div className="conteiner">
        <Cabecalho
          mes={"Novembro"}
          welcome={`Ei, pessoal! Preparados para mergulhar no universo dos dispositivos eletrônicos? Então bora conferir nossa
            newsletter deste mês, cheia de novidades e informações úteis sobre hardware! Vamos Lá!!!`}
        />

        {data.novembro.map((novembro) => (
          <Noticia
            key={novembro.id}
            title={novembro.title}
            theme={novembro.theme}
            image={novembro.image}
            p1={novembro.p1}
            p2={novembro.p2}
            p3={novembro.p3}
            p4={novembro.p4}
            p5={novembro.p5}
            supportUrl={novembro.supportUrl}
            ulrDescription={novembro.ulrDescription}
          />
        ))}

        <Rodape />
      </div>
    </>
  );
}
