import Cabecalho from "@/components/Cabecalho";
import Noticia from "@/components/Noticia";
import Rodape from "@/components/Rodape";
import Head from "next/head";

export default function Dezembro() {
  return (
    <>
      <Head>
        <title>Dezembro</title>
      </Head>
      <div class="conteiner">
        <Cabecalho
          mes="Dezembro"
          welcome="HO HO HO!!! Papai Noel passou e deixou um presente para você, venha dar uma olhada na nossa Newsletter de
        dezembro, que está imperdível! Não faça essa desfeita com o velhinho em..."
        />

        <Noticia
          title={`Startups e empresas de tecnologia abrem milhares de vagas neste final de ano`}
          theme={`Empregabilidade`}
          image={`dez-noticia-1.jpg`}
          p1={`Que tal fechar o ano com um novo emprego?`}
          p2={`O setor de tecnologia segue aquecido e diversas startups e empresas de tecnologia estão com vagas abertas
          neste final de ano. São milhares de oportunidades para quem procura trabalho ou realocação na área de
          tecnologia.`}
          p3={`Confira no site a relação de oportunidades!`}
          supportUrl={`https://www.gazetadopovo.com.br/gazz-conecta/carreira-e-oportunidades/startups-empresas-tecnologia-milhares-de-vagas-final-ano-2022/`}
          ulrDescription={`Saiba mais.`}
        />

        <Noticia
          title={`Preocupação com a cibersegurança cria um dos mercados mais importantes na área da tecnologia.`}
          theme={`Segurança`}
          image={`dez-noticia-2.jpg`}
          p1={`Avaliado em US$ 132,94 bilhões globalmente em 2021, mercado de cybersec deve registrar Taxa de Crescimento
          Anual Composta de 14,5% entre 2022 e 2027.`}
          p2={`Nos últimos anos, os crimes cibernéticos estão gerando preocupações em diversos setores, sejam eles públicos
          ou privados. Dessa forma, não só especialistas do setor de tecnologia que querem se inserir no segmento
          estão tendo boas oportunidades de emprego, como também iniciantes na área. Em algumas empresas já há times
          de segurança da informação, divididos de acordo com práticas de desenvolvimento ágil. Geralmente, a divisão
          desses grupos é separada por áreas. Um deles ocupa uma posição central, incluindo macro assuntos como
          análise, compliance, logística e gestão, e se relacionando diretamente com todos os outros.`}
          p3={`Há também aqueles responsáveis pela educação e interação, segurança ao código e design da aplicação, sem
          falar na equipe formada por desenvolvedores e arquitetos.`}
          supportUrl={`https://tecmasters.com.br/ciberseguranca-mercados-importantes-tecnologia/`}
          ulrDescription={`Saiba mais.`}
        />
        <Noticia
          title={`Como a internet das coisas pode ajudar no varejo?`}
          theme={`Iot`}
          image={`dez-noticia-3.jpg`}
          p1={`A secular ciência do varejo nada mais é do que o processo de atuar na intermediação entre a compra de muitas
          unidades de um produto específico diretamente dos produtores (indústrias), e a venda de poucas unidades de
          muitos produtos diferentes aos consumidores finais.`}
          p2={`Ao longo dos últimos anos e após a forte aceleração provocada pela pandemia de COVID-19, o varejo foi
          radicalmente transformado pela internet, e passou a ser cada vez mais presente e direcionado pelas
          características dos ambientes online. A chegada do 5G, agora em 2022, traz ainda mais expectativas.`}
          p3={`Como o advento dessa nova tecnologia poderá potencializar ainda mais o varejo?`}
          p4={`Quando se fala em conexão, não tem como não remeter a IoT (internet of things ou internet das coisas). Ela é
          uma rede de objetos físicos conectados a sensores e sistemas de tecnologia da informação, que pode interagir
          e trocar dados com outros dispositivos, todos conectados por meio da internet.`}
          p5={`Ainda que esses dispositivos funcionem perfeitamente com as atuais redes disponíveis, espera-se que no
          futuro a evolução da tecnologia para o 5G proporcione a expansão e consolidação massiva da IoT, criando um
          novo mundo em que todos os objetos que tiverem motivos para estar conectados, serão conectados.`}
          supportUrl={`https://www.tecmundo.com.br/mercado/255205-internet-coisas-ajudar-varejo.htm`}
          ulrDescription={`Veja mais informações.`}
        />

        <Noticia
          title={`5G: uma nova era de conectividade`}
          theme={`Conectividade`}
          image={`dez-noticia-4.jpg`}
          p1={`No dia 6 de julho, quando o 5G puro começou a funcionar na capital federal, o Brasil deu o primeiro passo
          rumo a uma nova era de conectividade.`}
          p2={`A grande diferença é que as gerações anteriores da telefonia celular eram baseadas na comunicação
          entre pessoas e esta nova geração foi concebida pensando na comunicação entre objetos. Há uma verdadeira
          revolução em curso com impacto na indústria, na medicina, na agricultura, com novas possibilidades de
          serviços e negócios, entre as inúmeras aplicações.`}
          supportUrl={`https://sampi.net.br/jundiai/noticias/2672727/opinioes/2022/12/5g-uma-nova-era-de-conectividade`}
          ulrDescription={`Saiba mais sobre o 5G`}
        />

        <Noticia
          title={`Para que serve a segurança em TI?`}
          theme={`Segurança`}
          image={`dez-noticia-5.jpg`}
          p1={`Segurança em TI é um conjunto de estratégias para administrar processos, recursos e políticas necessários
          para prevenir, detectar, documentar e contra-atacar ameaças a informação digital.`}
          p2={`O principal objetivo da segurança em TI é proteger os recursos mais valiosos de um negócio, que são seus
          dados e as suas operações. Afinal, quando qualquer um desses aspectos é comprometido, a organização está em
          risco. Dados violados podem ser usados em chantagens — como nos ataques ransomware —, enquanto operações
          interrompidas podem custar caro para serem retomadas.`}
          p3={`Por isso, segurança em TI deve envolver processos e políticas de segurança física e digital para impedir
          quebras de sigilo. Alguns dos recursos utilizados podem ser o armazenamento em nuvem, a criptografia e o
          gerenciamento de servidores.`}
          supportUrl={`https://santodigital.com.br/seguranca-em-ti-voce-entende-importancia-para-sua-empresa/`}
          ulrDescription={`Importância da segurança para a sua empresa.`}
        />

        <Rodape />
      </div>
    </>
  );
}
