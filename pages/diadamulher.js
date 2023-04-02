import Cabecalho from "@/components/Cabecalho";
import Noticia from "@/components/Noticia";
import Rodape from "@/components/Rodape";
import Head from "next/head";
import Image from "next/image";
import data from "@/constants/data";

export default function Diadamulher() {
  return (
    <>
      <Head>
        <title>Dia Da Mulher</title>
      </Head>
      <div className="conteiner">
        <Cabecalho
          mes={"8 de Março: Dia da Mulher"}
          welcome={`Saudações. "Que o Dia Internacional da Mulher seja um lembrete para celebrar todas as conquistas das
            mulheres e para continuar lutando por igualdade de gênero em todo o mundo."`}
        />

        {data.diaDaMulher.map((diaDaMulher) => (
          <Noticia
            key={diaDaMulher.id}
            title={diaDaMulher.title}
            theme={diaDaMulher.theme}
            image={diaDaMulher.image}
            p1={diaDaMulher.p1}
            p2={diaDaMulher.p2}
            p3={diaDaMulher.p3}
            p4={diaDaMulher.p4}
            p5={diaDaMulher.p5}
            supportUrl={diaDaMulher.supportUrl}
            ulrDescription={diaDaMulher.ulrDescription}
          />
        ))}

        <section>
          <h2>Mulheres no SENAC divinopolis</h2>
          <h3>Entrevistas</h3>
          <Image src="/images/8mar-noticia-5.png" alt="noticia1" width="999" height="999" className="img" />
          <p>
            O curso de Redes de Computadores é uma boa aposta para quem tem afinidade com tecnologia. Por ser um
            Tecnólogo com duração de 5 semestres (2 anos e meio), você se prepara em pouco tempo para ingressar no
            mercado e encontrar boas vagas, com remunerações atrativas.
          </p>
          <p className="bold">Juliana e Isabela:</p>
          <p>“Seja uma mulher que levanta outras mulheres.”</p>
          <Image
            src="/images/entrevistas/juliana-isabela.jpg"
            alt="noticia1"
            width="999"
            height="999"
            className="img"
          />

          <p className="bold">Camila:</p>
          <p>“Quando há duas mulheres conversando, não há homem ou mundo que possa pará-las.”</p>
          <Image src="/images/entrevistas/camila.jpg" alt="Camila" width="999" height="999" className="img" />

          <p className="bold">Cissa:</p>
          <p>“Lutem pelos seus sonhos, deem voz as suas opiniões e busquem pelo seu respeito.”</p>
          <Image src="/images/entrevistas/cissa.jpg" alt="Cissa" width="999" height="999" className="img" />

          <p className="bold">Laila:</p>
          <p>
            “Eu acho que a gente não tem que ter medo; o mercado e o mundo são nossos e não é que por sermos mulheres
            que fazemos menos."
          </p>
          <Image src="/images/entrevistas/laila.jpg" alt="Laila" width="999" height="999" className="img" />

          <p className="bold">Jade e Tauana:</p>
          <p>
            “Não devemos deixar de ser mulher, abrir mão da nossa vaidade, de nos cuidar e principalmente de nos amar,
            ser amigas de uma das outras.”
          </p>
          <Image
            src="/images/entrevistas/jade-tauana.jpg"
            alt="Jade e Tauana"
            width="999"
            height="999"
            className="img"
          />

          <p className="bold">Reisla:</p>
          <p>“Juntas possamos ser e educar outros seres que tratem com dignidade e respeito a todos”</p>
          <Image src="/images/entrevistas/reisla.jpg" alt="Reisla" width="999" height="999" className="img" />

          <p className="bold">Cristiane e Poliana:</p>
          <p>“O dia das mulheres não é só hoje, mas todos os dias.”</p>
          <Image src="/images/entrevistas/cristiane.jpg" alt="Cristiane" width="999" height="999" className="img" />

          <p className="bold">Rúbia:</p>
          <p>
            "Nós mulheres não devemos desistir dos nossos sonhos, somos capaz de tudo e não devemos desanimar diante de
            algum preconceito ou porta fechada, porque isso sempre vai existir no mundo. Devemos ter nossos objetivos e
            correr atrás deles, independente de qualquer coisa."
          </p>
          <Image src="/images/entrevistas/rubia.jpg" alt="Rubia" width="999" height="999" className="img" />
        </section>

        <Rodape />
      </div>
    </>
  );
}
