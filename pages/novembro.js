import Head from "next/head";
import Noticia from "@/components/Noticia";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";

export default function Novembro() {
  return (
    <>
      <Head>
        <title>Novembro</title>
      </Head>
      <div class="conteiner">
        <Cabecalho
          mes={"Novembro"}
          welcome={`Ei, pessoal! Preparados para mergulhar no universo dos dispositivos eletrônicos? Então bora conferir nossa
            newsletter deste mês, cheia de novidades e informações úteis sobre hardware! Vamos Lá!!!`}
        />

        <Noticia
          title="RTX 4090 pode ser a primeira placa a oferecer o verdadeiro 8K, segundo testes."
          theme="Tecnologia"
          image="nov-noticia-1.png"
          p1="Founder’s Edition da GeForce RTX 4090 foi lançada e, com isso, os modelos personalizados pelos parceiros da
          Nvidia também."
          p2="O canal The Tech Chap fez alguns testes intensos e comprovou que a RTX 4090, baseada na arquitetura Ada
          Lovelace, oferece resolução 8K a 60 fps. Para o lançamento, a nova RTX consegue manter os 60 fps enquanto
          executa configurações Ultra - incluindo ray tracing e o DLSS. O primeiro jogo testado foi o Microsoft Flight
          Simulator. Aqui, a placa se manteve com média de 81 fps durante os testes - isso contra 46 fps da RTX 3090."
          p3="Com esses dados, é possível afirmar que a RTX 4090 é a primeira placa de vídeo capaz de rodar jogos em 8K
          sem muita dificuldade."
          supportUrl="https://tecmasters.com.br/rtx-4090-primeira-placa-oferecer-verdadeiro-8k/"
          ulrDescription="Verdadeiro 8k"
        />

        <Noticia
          title="Cinco dicas para encontrar seu primeiro emprego em TI."
          theme="Empregabilidade"
          image="nov-noticia-2.jpg"
          p1="Segundo dados do Indeed de agosto deste ano, algumas das vagas mais difíceis de serem preenchidas no Brasil
          são em tecnologia, um dos motivos é a falta de profissionais qualificados no setor."
          p2="Os dados mostram que a posição mais difícil de preencher em tecnologia é Engenheiro de Software Sênior, onde
          50% das vagas de emprego permanecem abertas por 60 dias ou mais na plataforma. Desenvolvedor back-end,
          Cientista de Dados e DevOps também aparecem na lista, com 43%, 41% e 38% das vagas abertas por 60 dias ou
          mais, respectivamente."
          p3="Com base nessa perspectiva, o primeiro passo antes de entrar nesse mercado é pesquisar quais certificações,
          habilidades ou cursos são necessários para cada cargo."
          supportUrl="https://comvcportal.com.br/noticia/39763/cinco-dicas-para-encontrar-seu-primeiro-emprego-em-ti"
          ulrDescription="Confira mais sobre as vagas de emprego!"
        />

        <Noticia
          title="Universidade de Harvard anuncia abertura de centenas de vagas em cursos gratuitos e online."
          theme="Cursos"
          image="nov-noticia-3.jpg"
          p1="Universidade de Harvard anuncia abertura de centenas de vagas em cursos gratuitos e online A Universidade de
          Harvard é uma das mais conhecidas e renomadas do mundo todo e não é à toa que até em território brasileiro
          conhecemos sua fama por meio de filmes e seriados americanos."
          p2="Agora, aqueles que estão interessados em participar de cursos gratuitos em alguma das 100 matérias
          disponíveis e online já podem ficar animados. Para
          realizar sua inscrição nos cursos gratuitos online, basta realizar um
          cadastro na plataforma oficial do HarvardX e escolher o curso que almeja."
          p3="Antes de escolher a formação, o interessado deve criar uma conta no site e preencher os dados exigidos pela
          Universidade de Harvard para ter acesso às aulas. Como o modelo é online, você decide os horários que deseja
          estudar, em qualquer lugar e em qualquer momento."
          supportUrl="https://clickpetroleoegas.com.br/universidade-de-harvard-anuncia-abertura-de-centenas-de-vagas-em-cursos-gratuitos-e-online/"
          ulrDescription="Curso na área: Harvard anuncia."
        />

        <Noticia
          title="Extensões para mudar a cor do Chrome e Edge escondiam malware."
          theme="IoT"
          image="nov-noticia-4.jpg"
          p1="Dezenas de malware disfarçados de extensão para o Google Chrome e para o Microsoft Edge foram desmascarados
          e detalhados pela empresa de segurança virtual Guardio Labs."
          p2="Os programas já foram removidos da internet, mas chegaram a somar 1 milhão de downloads antes de serem
          combatidos. Os programas mal-intencionados que se passavam por extensões do Chrome, que ofereciam mais cores
          e temas aos navegadores, o que eles faziam, além disso, era baixar scripts que monitoram suas buscas."
          p3={`O que essas "extensões" faziam depois é inserir resultados em sua busca que, na verdade, são
          propagandas que geram receita de impressões e pela venda dos dados das buscas. Além disso, elas atualizavam
          as URLs de sites de lojas, transformando qualquer compra que você fizesse ali numa comissão para os autores
          do malware.`}
          supportUrl="https://www.tecmundo.com.br/seguranca/253345-extensoes-mudar-cor-chrome-edge-escondiam-malware.htm"
          ulrDescription="Malwares nunca mais."
        />

        <Noticia
          title="O que é ransomware e como proteger negócios?"
          theme="Segurança"
          image="nov-noticia-5.jpg"
          p1="De acordo com a Cybersecurity Ventures, pesquisadora de economia cibernética global, os custos globais com
          crimes cibernéticos devem crescer 15% por ano até 2025."
          p2="Assim, nesse cenário, um desafio a ser enfrentado pelos negócios é o ransomware, um malware (software
            malicioso) em expansão, criado para prejudicar sistemas computacionais e sequestrar dados. Para resgatar as
            informações roubadas é necessário seguir diversas instruções e quase sempre é exigido o pagamento em
            criptomoedas."
          p3="Em alguns casos, esse malware infecta o computador mesmo que o usuário não tenha feito algum download da
          internet intencionalmente, e por isso, companhias precisam se prevenir para que não sofram com este
          problema. Como se não bastasse este desafio que tem acontecido com frequência no mercado, um novo método
          surgiu para propagar este malware, chamado ransomware as a service."
          p4="É, portanto, essencial que as organizações adotem mecanismos de defesa como corrigir e atualizar o sistema
          operacional das máquinas para reduzir vulnerabilidades, utilizar técnicas de detecção de ransomware, fazer
          backup em nuvem tendo um sistema voltado para a recuperação de informações, estabelecer estratégias de
          segurança ao acesso de informações online, conscientizar equipes de práticas arriscadas, e usar soluções que
          analisam os anexos e links para barrar ações maliciosas."
          supportUrl="https://cryptoid.com.br/criptografia-identificacao-digital-id-biometria/o-que-e-ransomware-as-a-service-e-como-proteger-negocios/"
          ulrDescription="O que é o ransomware?"
        />

        <Rodape />
      </div>
    </>
  );
}
