import Cabecalho from "@/components/Cabecalho";
import Noticia from "@/components/Noticia";
import Rodape from "@/components/Rodape";
import Head from "next/head";
import data from "@/constants/data";

export default function Dezembro() {
  return (
    <>
      <Head>
        <title>Dezembro</title>
      </Head>
      <div className="conteiner">
        <Cabecalho
          mes="Dezembro"
          welcome="HO HO HO!!! Papai Noel passou e deixou um presente para você, venha dar uma olhada na nossa Newsletter de
        dezembro, que está imperdível! Não faça essa desfeita com o velhinho em..."
        />

        {data.dezembro.map((dezembro) => (
          <Noticia
            key={dezembro.id}
            title={dezembro.title}
            theme={dezembro.theme}
            image={dezembro.image}
            p1={dezembro.p1}
            p2={dezembro.p2}
            p3={dezembro.p3}
            p4={dezembro.p4}
            p5={dezembro.p5}
            supportUrl={dezembro.supportUrl}
            ulrDescription={dezembro.ulrDescription}
          />
        ))}

        <Rodape />
      </div>
    </>
  );
}
