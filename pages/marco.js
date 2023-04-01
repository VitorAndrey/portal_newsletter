import Cabecalho from "@/components/Cabecalho";
import Noticia from "@/components/Noticia";
import Rodape from "@/components/Rodape";
import Head from "next/head";

export default function Marco() {
  return (
    <>
      <Head>
        <title>Março</title>
      </Head>
      <div class="conteiner">
        <Cabecalho
          mes={`Março`}
          welcome={`Descobrimos que o Chat GPT não tem senso de humor quando pedimos a ele que fizesse uma
           introdução bem humorada: "Olá, queridos leitores! Sou ChatGPT, um modelo de linguagem super inteligente 
           e bem humorado. Estou aqui para trazer as últimas novidades sobre inteligências artificiais e animar o 
           seu dia com um toque de diversão. Vamos juntos explorar o incrível mundo da tecnologia e rir um pouco no caminho!"`}
        />

        <Noticia
          title="O que a imagem fake do Papa diz sobre o futuro da IA"
          theme={"Tecnologia"}
          p1={`O Papa Francisco vestido com uma jaqueta puffer foi um dos temas do fim de semana. As análises, notícias e
          até mesmo críticas e opiniões divididas sobre o look do pontífice não duraram muito tempo até a revelação de
          que a imagem, na verdade, foi mais uma criação feita por inteligência artificial na plataforma Midjourney.`}
          p2={`O
          responsável foi o artista Pablo Xavier, de 30 anos. Residente em Chicago, Pablo divide o ofício com a
          carreira na Construção Civil e saiu do quase anonimato para uma visibilidade mundial.`}
          image={`mar-noticia-1.jpg`}
          supportUrl={`https://forbes.com.br/forbes-tech/2023/03/o-que-a-imagem-fake-do-papa-diz-sobre-o-futuro-da-ia/`}
          ulrDescription={`Saiba mais sobre o fake do Papa.`}
        />
        <Noticia
          title="Como identificar fotos “falsas” criadas por IA"
          theme={"Informação"}
          p1={`Existem outras dicas para saber se uma imagem saiu da mente de alguém “naturalmente” ou por meio de uma IA.
          Atente-se a elementos como:`}
          p2={`- Fundo muito desfocado e textos indecifráveis em segundo plano;`}
          p3={`- Partes da imagem parecem pintadas;`}
          p4={`- Objetos se misturando à pele e Falta de simetria no rosto;`}
          p5={`Em suma, a dica é verificar se há inconsistências visíveis na imagem. Além das citadas acima, entram aqui
          bordas embaçadas; detalhes do corpo ou fios de cabelo cortados e por aí vai.`}
          image={`mar-noticia-2.jpg`}
          supportUrl={`https://olhardigital.com.br/2023/03/30/dicas-e-tutoriais/como-identificar-fotos-falsas-criadas-por-ia/`}
          ulrDescription={`Saiba como identificar.`}
        />
        <Noticia
          title="Midjourney: a inteligência artificial na criação de games"
          theme={"Tecnologia"}
          p1={`Usando a impressionante ferramenta Midjourney, uma pessoa criou um shoot 'em up em que todas as imagens
          foram geradas por inteligência artificial. `}
          p2={`A geração de conteúdo usando inteligência artificial tem evoluído
          bastante nos últimos anos, com as pessoas adorando colocar as máquinas para “imaginarem” situações
          inusitadas. Pois foi usando uma dessas ferramentas, a Midjourney, que um sujeito conseguiu algo muito
          interessante: criar um jogo experimental.`}
          image={`mar-noticia-3.jpg`}
          supportUrl={`https://meiobit.com/459159/midjourney-a-inteligencia-artificial-na-criacao-de-games/`}
          ulrDescription={`Saiba mais sobre Midjourey.`}
        />
        <Noticia
          title="Google inicia testes com inteligência artificial generativa no Gmail e no Doc."
          theme={"Informação"}
          p1="O Google está trazendo recursos de inteligência artificial generativa para os aplicativos do Workspace, e
          agora está iniciando testes públicos no Gmail e no Docs. No Gmail, a inteligência artificial generativa
          poderá ajudar na redação de diversos tipos de conteúdo, desde convites de aniversário até cartas de
          apresentação de emprego."
          p2={`Além disso, o Google poderá tornar o texto mais elaborado ou resumido, de acordo
          com a necessidade do usuário. No Docs, a inteligência artificial poderá tornar o texto mais detalhado ou
          reescrevê-lo de forma concisa. Isso pode ser útil na redação de postagens de blog ou letras de músicas.`}
          image={`mar-noticia-4.jpg`}
          supportUrl={`https://cuboup.com/conteudo/d-id/#:~:text=D-ID:%20%C3%89%20uma%20plataforma,proteger%20a%20identidade%20dos%20usu%C3%A1rios`}
          ulrDescription={`Saiba mais sobre a notícia do Google.`}
        />
        <Noticia
          title={`Inteligência artificial: o alerta de mil especialistas sobre 'risco para a humanidade'`}
          theme={"Informação"}
          p1="Um grupo de especialistas em inteligência artificial e executivos da indústria de tecnologia pediu uma pausa
          de seis meses no treinamento de poderosos sistemas de inteligência artificial, argumentando que eles
          representam uma potencial ameaça à humanidade."
          p2={` Em carta aberta, eles alegam que os laboratórios que
          trabalham com essa tecnologia estão em "uma corrida fora de controle para desenvolver e implementar mentes
          digitais cada vez mais poderosas que ninguém, nem mesmo seus criadores, pode entender, prever ou controlar
          com segurança".`}
          image={`mar-noticia-5.png`}
          supportUrl={`https://teg6.com.br/93507/noticias/d-id-revela-nova-api-de-bate-papo-para-permitir-conversas-cara-a-cara-com-um-ser-humano-digital-de-ia/`}
          ulrDescription={`Saiba mais sobre opinião dos especialistas.`}
        />
        <Noticia
          title="D-ID: O que é a AI que Cria Vídeos, como usar em português e exemplos"
          theme={"Tecnologia"}
          p1={`D-ID é uma plataforma de criação de vídeo gerada por inteligência artificial que oferece soluções de
          reconhecimento facial e proteção de identidade para empresas. A plataforma utiliza tecnologia de aprendizado
          de máquina para criar vídeos personalizados, automatizar a produção de conteúdo e proteger a privacidade dos
          usuários.`}
          p2={` A plataforma é uma opção popular para empresas que desejam criar vídeos personalizados e atraentes
          sem a necessidade de conhecimentos técnicos especializados em produção de vídeo ou design gráfico.`}
          image={`mar-noticia-6.png`}
          supportUrl={`https://cuboup.com/conteudo/d-id/#:~:text=D-ID:%20%C3%89%20uma%20plataforma,proteger%20a%20identidade%20dos%20usu%C3%A1rios`}
          ulrDescription={`Saiba mais sobre D-ID.`}
        />
        <Noticia
          title="Luma AI transforma vídeos em modelos 3D por quase nenhum dinheiro"
          theme={"Tecnologia"}
          p1={`A Luma AI, com sede na Califórnia, pretende democratizar as cenas 3D. Após o lançamento de uma ferramenta de
          texto para 3D, a startup introduziu uma API para converter imagens e vídeos em modelos 3D. Atualmente, leva
          entre US $ 60 e US $ 1.500 e duas a dez semanas para criar um modelo 3D, diz a startup de IA Luma AI.`}
          p2={`Ele
          quer tornar o processo muito mais rápido e barato, até 30 minutos e apenas US $ 1 por modelo. Para criar um
          modelo 3D a partir de um conjunto de imagens ou vídeos, os desenvolvedores podem usar a nova API, mas os
          usuários finais também podem acessar uma interface da Web.`}
          image={`mar-noticia-7.jpg`}
          supportUrl={`https://the-decoder.com/luma-ai-turns-videos-into-3d-models-for-almost-no-money/`}
          ulrDescription={`Saiba mais sobre a Luma IA.`}
        />
        <section>
          <h2>Apresentando a API Luma Video-to-3D!</h2>
          <h3>Tecnologia</h3>
          <video width="999" height="999" controls className="vid">
            <source src="images/mar-noticia-8.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <p>
            Os desenvolvedores agora podem integrar os modelos NeRF 3D fotorrealistas da Luma em seus aplicativos e
            produtos por meio de nossa API. Os modelos NeRF e malha da Luma agora estão disponíveis em nossa API, dando
            aos desenvolvedores acesso aos melhores recursos de modelagem e reconstrução 3D do mundo.
          </p>
          <p>
            A API espera orientações em vídeo de objetos ou cenas, olhando de fora para dentro, de 2 a 3 níveis. A saída
            é uma cena 3D interativa que pode ser incorporada diretamente, modelos de textura grosseira para criar
            interações em pipelines 3D tradicionais e imagens e vídeos 360 pré-renderizados.
          </p>

          <p>
            <a href="https://docs.lumalabs.ai/MCrGAEukR4orR9">Saiba mais sobre o video.</a>
          </p>
        </section>
        <Noticia
          title={`Auto Draw! O 'Paint do Google'`}
          theme={"Tecnologia"}
          p1={`Se você não tem habilidade para desenhar, só consegue fazer rabiscos bem primários, e mesmo assim sonha em
          fazer arte gráfica com qualidade, o Google tem a solução.`}
          p2={`É o AutoDraw, uma ferramenta de imagens gratuita,
          que consegue “ler” traços e rabiscos e os transformar em desenhos ou símbolos complexos. A ferramenta é
          composta por um sistema robusto de inteligência artificial, e à medida que é usado, fica mais inteligente.
          Ele aumenta aos poucos a capacidade de reconhecer novos desenhos e formatos corretamente.`}
          image={`mar-noticia-9.png`}
          supportUrl={`https://olhardigital.com.br/2021/08/06/videos/autodraw-ferramenta-do-google-transforma-rabiscos-em-desenhos/`}
          ulrDescription={`Saiba mais sobre o Auto Draw!`}
        />
        <Noticia
          title="Mixo, o construtor de sites de IA"
          theme={"Tecnologia"}
          p1={`Mixo, o aplicativo de IA que pode construir um site a partir de uma única ideia, é um aplicativo
          revolucionário de inteligência artificial que pode gerar sites impressionantes adaptados às suas
          preferências e objetivos.`}
          p2={`Este aplicativo cuidará de tudo para você, desde hospedagem até domínios e
          modelos. Apenas respondendo a algumas perguntas simples, a Mixo criará um site para você a partir do zero.
          Você poderá personalizar seu site com suas próprias imagens e conteúdo. E atualize-o usando sua interface
          simples e amigável.`}
          image={`mar-noticia-10.jpg`}
          supportUrl={`https://www.pcguide.com/apps/mixo/`}
          ulrDescription={`Saiba mais sobre o Mixo.`}
        />
        <Noticia
          title=" O poder da IA: explorando 5 ferramentas cognitivas inacreditáveis para suas tarefas pessoais e de trabalho"
          theme={"Informação"}
          p1={`Quem não ama um bom atalho, não é? Nosso cérebro está sempre buscando formas de economizar energia, então se
          existe uma forma para fazer nosso trabalho de forma mais simples, fácil e rápida, nós vamos adorar.`}
          p2={`Hoje há
          um conjunto de atalhos que não só facilitam as nossas vidas, mas também melhoram nosso desempenho, ampliam
          nosso conhecimento e aumentam nossa produtividade. Bem-vindo ao novo mundo das ferramentas cognitivas.`}
          image={`mar-noticia-11.png`}
          supportUrl={`https://pt.linkedin.com/pulse/o-poder-da-ia-explorando-5-ferramentas-cognitivas-para-nascimento?trk=pulse-article`}
          ulrDescription={`Saiba mais sobre as 5 ferramentas cognitivas.`}
        />

        <Rodape />
      </div>
    </>
  );
}
