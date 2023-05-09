import Cabecalho from "@/components/Cabecalho";
import Noticia from "@/components/Noticia";
import Rodape from "@/components/Rodape";
import Head from "next/head";
import data from "@/constants/data";

export default function Marco() {
  return (
    <>
      <Head>
        <title>Março</title>
      </Head>
      <div className="conteiner">
        <Cabecalho
          mes={`Março`}
          welcome={`Descobrimos que o Chat GPT não tem senso de humor quando pedimos a ele que fizesse uma
           introdução bem humorada: "Olá, queridos leitores! Sou ChatGPT, um modelo de linguagem super inteligente 
           e bem humorado. Estou aqui para trazer as últimas novidades sobre inteligências artificiais e animar o 
           seu dia com um toque de diversão. Vamos juntos explorar o incrível mundo da tecnologia e rir um pouco no caminho!"`}
        />

        {data.marco.map((marco) => (
          <Noticia
            key={marco.id}
            title={marco.title}
            theme={marco.theme}
            image={marco.image}
            p1={marco.p1}
            p2={marco.p2}
            p3={marco.p3}
            p4={marco.p4}
            p5={marco.p5}
            supportUrl={marco.supportUrl}
            ulrDescription={marco.ulrDescription}
          />
        ))}

        <section>
          <h2>Apresentando a API Luma Video-to-3D!</h2>
          <h3>Tecnologia</h3>
          <video width="999" height="999" controls className="vid">
            <source src="images/mar-noticia-8.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <p>
            Os desenvolvedores agora podem integrar os modelos NeRF 3D fotorrealistas da Luma em
            seus aplicativos e produtos por meio de nossa API. Os modelos NeRF e malha da Luma agora
            estão disponíveis em nossa API, dando aos desenvolvedores acesso aos melhores recursos
            de modelagem e reconstrução 3D do mundo.
          </p>
          <p>
            A API espera orientações em vídeo de objetos ou cenas, olhando de fora para dentro, de 2
            a 3 níveis. A saída é uma cena 3D interativa que pode ser incorporada diretamente,
            modelos de textura grosseira para criar interações em pipelines 3D tradicionais e
            imagens e vídeos 360 pré-renderizados.
          </p>

          <p>
            <a href="https://docs.lumalabs.ai/MCrGAEukR4orR9">Saiba mais sobre o video.</a>
          </p>
        </section>

        <Rodape />
      </div>
    </>
  );
}
