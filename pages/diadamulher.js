import Cabecalho from "@/components/Cabecalho";
import Noticia from "@/components/Noticia";
import Rodape from "@/components/Rodape";
import Head from "next/head";
import Image from "next/image";

export default function Diadamulher() {
  return (
    <>
      <Head>
        <title>Dia Da Mulher</title>
      </Head>
      <div class="conteiner">
        <Cabecalho
          mes="8 de Março: Dia da Mulher"
          welcome={`Saudações. "Que o Dia Internacional da Mulher seja um lembrete para celebrar todas as conquistas das
            mulheres e para continuar lutando por igualdade de gênero em todo o mundo."`}
        />

        <Noticia
          title="Tech Girls utiliza a tecnologia para transformar a vida de mulheres"
          theme="Tecnologia"
          image="8mar-noticia-1.jpg"
          p1="Fundado pela desenvolvedora de software Gisele Lasserre, o Tech Girls também busca mitigar os danos causados
          pelo lixo eletrônico, fazendo a reciclagem de computadores e componentes que, depois, são enviados a todo o
          país."
          p2="No curso, as alunas aprendem, de forma lúdica e afetiva, como gosta de ressaltar Gisele, desde a criação de
          bijuterias utilizando componentes não reaproveitáveis de computadores, as bijutechs, até o desenvolvimento
          de software na última etapa. O programa ainda inclui módulos de empreendedorismo digital, manutenção de
          notebooks e lógica de programação"
          supportUrl="https://www.gazetadopovo.com.br/gazz-conecta/tech-girls-utiliza-a-tecnologia-para-transformar-a-vida-de-mulheres"
          ulrDescription="Saiba mais sobre como a tecnologia transfoma a vida das mulheres."
        />

        <Noticia
          title="Curiosidades sobre o Dia Internacional da Mulher"
          theme="Curiosidades"
          image="8mar-noticia-2.png"
          p1="O Dia Internacional das Mulheres é comemorado nesta data porque foi no dia 08 de março de 1917,na Rússia,
          que cerca de 90 mil mulheres operárias foram às ruas protestar por melhores condições de trabalho e de vida,
          uma vez que tinham longas jornadas de trabalho, recebiam muito menos que os homens e não tinham direito ao
          voto."
          supportUrl="https://querobolsa.com.br/revista/8-de-marco-entenda-porque-e-comemorado-o-dia-internacional-das-mulheres#:~:text=O%20Dia%20Internacional%20das%20Mulheres%20%C3%A9%20comemorado%20nesta%20data%20porque,os%20homens%20e%20n%C3%A3o%20tinham"
          ulrDescription="Saiba mais."
        />

        <Noticia
          title="Assédio: o que é, tipos e como se proteger"
          theme="Informação"
          image="8mar-noticia-3.png"
          p1="O que caracteriza o assédio? O assédio pode incluir uma variedade de comportamentos de natureza verbal e
          física, incluindo:"
          p2="- Piadas ofensivas, intimidadoras ou incômodas, Observações humilhantes."
          p3="- Xingamentos, apelidos ofensivos ou calúnias."
          p4="- Agressões físicas, Ameaças, Intimidação."
          p5={`- Imagens ou objetos ofensivos, incluindo imagens pornográficas.`}
          supportUrl="https://atividadepolicial.com.br/10-medidas-contra-o-assedio-sexual/"
          ulrDescription="10 medidas contra o assedio sexual."
        />

        <Noticia
          title="9 mulheres que botam pra quebrar na tecnologia!"
          theme="Informação"
          image="8mar-noticia-4.png"
          p1="Falar sobre representatividade em tecnologia é fundamental para estourar a bolha que acha que esse mercado
          só tem espaço para homens."
          p2="Os números mostram: cada vez mais, aos poucos, os recortes de gênero, raça e classe social vão se mostrando
          no mundo tech e inaugurando discussões super essenciais para um crescimento saudável - e com mais
          diversidade. Em cinco anos, a presença feminina na tecnologia cresceu 60%, passando de 27,9 mil mulheres em
          2014 para 44,5 mil, em 2019, como mostra a pesquisa do Cadastro Geral de Empregados e Desempregados. Mesmo
          assim, é preciso interpretar mais a fundo."
          supportUrl="https://www.alura.com.br/artigos/representatividade-mercado-tech-9-mulheres-tecnologia-para-conhecer-e-acompanhar?gclid=Cj0KCQiAgaGgBhC8ARIsAAAyLfFRRoK52_RQX0CSprtZUg8HTZVVOZ92hNRss7aF9CJnqiEiHzprjMIaAqapEALw_wcB"
          ulrDescription="9 mulheres que contribuem de diferentes maneiras para um mercado tech mais plural e possível para todas."
        />

        <section>
          <h2>Mulheres no SENAC divinopolis</h2>
          <h3>Entrevistas</h3>
          <Image src="/images/8mar-noticia-5.png" alt="noticia1" width="1000" height="200" className="img" />
          <p>
            O curso de Redes de Computadores é uma boa aposta para quem tem afinidade com tecnologia. Por ser um
            Tecnólogo com duração de 5 semestres (2 anos e meio), você se prepara em pouco tempo para ingressar no
            mercado e encontrar boas vagas, com remunerações atrativas.
          </p>
          <p class="bold">Juliana e Isabela:</p>
          <p>“Seja uma mulher que levanta outras mulheres.”</p>
          <Image
            src="/images/entrevistas/juliana-isabela.jpg"
            alt="noticia1"
            width="999"
            height="999"
            className="img"
          />

          <p class="bold">Camila:</p>
          <p>“Quando há duas mulheres conversando, não há homem ou mundo que possa pará-las.”</p>
          <Image src="/images/entrevistas/camila.jpg" alt="noticia1" width="999" height="999" className="img" />

          <p class="bold">Cissa:</p>
          <p>“Lutem pelos seus sonhos, deem voz as suas opiniões e busquem pelo seu respeito.”</p>
          <Image src="/images/entrevistas/cissa.jpg" alt="noticia1" width="999" height="999" className="img" />

          <p class="bold">Laila:</p>
          <p>
            “Eu acho que a gente não tem que ter medo; o mercado e o mundo são nossos e não é que por sermos mulheres
            que fazemos menos."
          </p>
          <Image src="/images/entrevistas/laila.jpg" alt="noticia1" width="999" height="999" className="img" />

          <p class="bold">Jade e Tauana:</p>
          <p>
            “Não devemos deixar de ser mulher, abrir mão da nossa vaidade, de nos cuidar e principalmente de nos amar,
            ser amigas de uma das outras.”
          </p>
          <Image src="/images/entrevistas/jade-tauana.jpg" alt="noticia1" width="999" height="999" className="img" />

          <p class="bold">Reisla:</p>
          <p>“Juntas possamos ser e educar outros seres que tratem com dignidade e respeito a todos”</p>
          <Image src="/images/entrevistas/reisla.jpg" alt="noticia1" width="999" height="999" className="img" />

          <p class="bold">Cristiane e Poliana:</p>
          <p>“O dia das mulheres não é só hoje, mas todos os dias.”</p>
          <Image src="/images/entrevistas/cristiane.jpg" alt="noticia1" width="999" height="999" className="img" />

          <p class="bold">Rúbia:</p>
          <p>
            "Nós mulheres não devemos desistir dos nossos sonhos, somos capaz de tudo e não devemos desanimar diante de
            algum preconceito ou porta fechada, porque isso sempre vai existir no mundo. Devemos ter nossos objetivos e
            correr atrás deles, independente de qualquer coisa."
          </p>
          <Image src="/images/rubia.jpg" alt="noticia1" width="999" height="999" className="img" />
        </section>

        <Rodape />
      </div>
    </>
  );
}
