import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import Head from "next/head";
import Image from "next/image";
import Noticia from "@/components/Noticia";

export default function Fevereiro() {
  return (
    <>
      <Head>
        <title>Fevereiro</title>
      </Head>
      <div class="conteiner">
        <Cabecalho
          mes={`Fevereiro`}
          welcome={`Saudações. "Que o Carnaval não seja uma simples fantasia, mas sim uma genuína manifestação de grande alegria
            dentro do coração de cada folião."
            -Tânia Luz.
           `}
        />

        <Noticia
          title={`Redes de Computadores: qual é o salário do formado da área?`}
          theme={`Empregabilidade`}
          image={`fev-noticia-1.jpeg`}
          p1={`O curso de Redes de Computadores é uma boa aposta para quem tem afinidade com tecnologia. Por ser um
          Tecnólogo com duração de 5 semestres (2 anos e meio), você se prepara em pouco tempo para ingressar no
          mercado e encontrar boas vagas, com remunerações atrativas.`}
          p2={`Afinal, o diploma de ensino superior pode de um profissional em até 182%. Neste conteúdo, encontramos informações sobre o salário de Redes de
          Computadores para quem busca qualificação, nos primeiros momentos da carreira, em diferentes regiões do país
          e muito mais.`}
          supportUrl={`https://blog.voomp.com.br/dicas/mercado-de-trabalho/como-ganhar-dinheiro-com-devops`}
          ulrDescription={`Como ganhar dinheiro com Devops?`}
        />
        <Noticia
          title={`O ChatGPT vai roubar meu emprego? Veja as oportunidades que a ferramenta traz.`}
          theme={`Tecnologia`}
          image={`fev-noticia-2.png`}
          p1={`O surgimento do ChatGPT e de outras inteligências artificiais parecidas vem levantando muitas questões nas
          últimas semanas, especialmente sobre o mercado de trabalho.`}
          p2={`Para quem não sabe, essas ferramentas funcionam como um robô de bate-papo que têm a capacidade não só de
          responder perguntas como também de elaborar textos, fazer cálculos e até escrever algoritmos em linguagem de
          programação.`}
          p3={`Com isso, profissionais começaram a questionar a possibilidade de serem substituídos por essas inteligências artificiais.`}
          supportUrl={`https://www.tudoep.com/tudo-valor/dinheiro-com-voce/NOT,0,0,1838661,chatgpt-o-que-e-e-como-funciona.aspx`}
          ulrDescription={`ChatGPT:  o que é e como funciona essa inteligência artificial revolucionária?`}
        />

        <Noticia
          title={`O que é e como funciona a Internet das Coisas?`}
          theme={`Tecnologia`}
          image={`fev-noticia-3.jpg`}
          p1={` Na década de 90, o cientista Kevin Ashton criou a expressão IoT (Internet of Things, em português:           
            Internet das coisas) para descrever um tipo de rede que conecta objetos do mundo físico à internet.`}
          p2={`Em 2023, uma pesquisa do FGV (Fundação Getulio Vargas) mostrou que o Brasil vai atingir 216 milhões de
          computadores em uso, chegando à marca de 1 máquina por habitante. A conectividade dos brasileiros cresce em
          uma constante anualmente, e para este ano, a ampliação da IoT é uma das tendências.`}
          supportUrl={`https://www.sistemampa.com.br/tv-candides/senai-divinopolis-abre-inscricoes-para-o-curso-de-especializacao-internet-das-coisas/`}
          ulrDescription={`Curso na área: SENAI Divinópolis abre inscrições para o curso de especialização “Internet das Coisas.”`}
        />

        <Noticia
          title={`Wearables: um mercado em ascensão`}
          theme={`Tecnologia`}
          image={`fev-noticia-4.jpg`}
          p1={`Tudo que envolve tecnologia e que o usuário pode vestir, carregar ou usar como acessório, pode ser definido
          como um wearable. Entretanto, é preciso que esse dispositivo tenha conexão com outros aparelhos ou com a internet.`}
          p2={`Essa nova tecnologia foi desenvolvida para gerar praticidade e otimizar desempenhos, onde quer que ela seja
          aplicada. Assim, os dispositivos wearables possuem potencial para trazer benefícios a qualquer área de
          atuação, e podem proporcionar experiências inéditas para quem os utiliza.`}
          supportUrl={`https://usemobile.com.br/wearable/`}
          ulrDescription={`Wearables: o que são as "tecnologias vestíveis"`}
        />

        <Noticia
          title={`Vai curtir o carnaval? Veja dicas para proteger os dados do seu smartphone`}
          theme={`Segurança`}
          image={`fev-noticia-5.png`}
          p1={`A multidão que os blocos de rua carregam pelas cidades e a descontração do carnaval podem acabar fazendo com
          que os foliões tenham seus bens furtados e invadidos por crimonosos.`}
          p2={`Segundo a Polícia Militar (PM), roubos e furtos de celulares representaram 60% das ocorrências registradas
          nos oito dias de carnaval na cidade de São Paulo, no último carnaval oficial de rua da cidade.`}
          p3={`Para ajudar a mitigar riscos, Aldo Albuquerque, diretor executivo na Tempest, empresa de cibersegurança no
          Brasil, dá  10 dicas de segurança para proteger o seu smartphone durante o carnaval.`}
          supportUrl={`https://www.cidademarketing.com.br/marketing/2023/02/14/seguranca-dicas-fundamentais-para-curtir-a-folia-de-carnaval-sem-cair-em-golpes/`}
          ulrDescription={` Dicas fundamentais para curtir a folia de Carnaval sem cair em golpes.`}
        />

        <Rodape />
      </div>
    </>
  );
}
