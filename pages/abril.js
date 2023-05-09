import Cabecalho from "@/components/Cabecalho";
import Noticia from "@/components/Noticia";
import Rodape from "@/components/Rodape";
import Head from "next/head";
import data from "@/constants/data";

export default function Marco() {
  return (
    <>
      <Head>
        <title>Abril</title>
      </Head>
      <div className="conteiner">
        <Cabecalho
          mes={`Abril`}
          welcome={`O meio do ano está chegando e é hora de parar pra pensar no que já realizamos até aqui. Você é do time: cumpri as promessas de fim de ano, ou estou só vendo o tempo passar? Se ainda não atingiu suas metas não se preocupe pois ainda há tempo.`}
        />

        {data.abril.map((abril) => (
          <Noticia
            key={abril.id}
            title={abril.title}
            theme={abril.theme}
            image={abril.image}
            p1={abril.p1}
            p2={abril.p2}
            p3={abril.p3}
            p4={abril.p4}
            p5={abril.p5}
            supportUrl={abril.supportUrl}
            ulrDescription={abril.ulrDescription}
          />
        ))}

        <section>
          <h2>LanHouse!</h2>
          <p>
            E aí, galera! Tá a fim de saber o que rolou no vídeo que fizemos da nossa lan house?
            Então, se liga só!
          </p>

          {/* <iframe
            src="https://drive.google.com/file/d/1rGPk4iIrlZa8rDZ8OmvC9xesE3YYBnZL/preview"
            width="559"
            height="480"
            allow="autoplay"
          ></iframe> */}

          <p>
            Partimos do zero para criar a Lan house. Realizamos a instalação do cabeamento
            estruturado com a crimpagem dos cabos RJ-45 usando os patch panels do rack e o switch.
            Configuramos todas as máquinas clientes, assim como o servidor que está localizado
            dentro do rack, com serviços de http, ftp, dhcp e proxy. Além disso, testamos a rede
            jogando uma partida de CS em Lan. 🖥️
          </p>
        </section>

        <Rodape />
      </div>
    </>
  );
}
