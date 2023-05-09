//  =========== Arquivo de dados das Noticias ===========
//
//  Para achar uma edição em particular use o cntrl+f para
//  procurar a partir do sumário:
//
//  - novembro
//  - dezembro
//  - fevereiro
//  - diaDaMulher
//  - marco
//
//
//
// ======================================================

// Noticias de Novembro
const novembro = [
  {
    id: 1,
    title: `RTX 4090 pode ser a primeira placa a oferecer o verdadeiro 8K, segundo testes.`,
    theme: `Tecnologia`,
    image: `nov-noticia-1.png`,
    p1: `Founder’s Edition da GeForce RTX 4090 foi lançada e, com isso, os modelos personalizados pelos parceiros da
          Nvidia também.`,
    p2: `O canal The Tech Chap fez alguns testes intensos e comprovou que a RTX 4090, baseada na arquitetura Ada
          Lovelace, oferece resolução 8K a 60 fps. Para o lançamento, a nova RTX consegue manter os 60 fps enquanto
          executa configurações Ultra - incluindo ray tracing e o DLSS. O primeiro jogo testado foi o Microsoft Flight
          Simulator. Aqui, a placa se manteve com média de 81 fps durante os testes - isso contra 46 fps da RTX 3090.`,
    p3: `Com esses dados, é possível afirmar que a RTX 4090 é a primeira placa de vídeo capaz de rodar jogos em 8K
          sem muita dificuldade.`,
    supportUrl: `https://tecmasters.com.br/rtx-4090-primeira-placa-oferecer-verdadeiro-8k/`,
    ulrDescription: `Verdadeiro 8k`,
  },
  {
    id: 2,
    title: `Cinco dicas para encontrar seu primeiro emprego em TI.`,
    theme: `Empregabilidade`,
    image: `nov-noticia-2.jpg`,
    p1: `Segundo dados do Indeed de agosto deste ano, algumas das vagas mais difíceis de serem preenchidas no Brasil
          são em tecnologia, um dos motivos é a falta de profissionais qualificados no setor.`,
    p2: `Os dados mostram que a posição mais difícil de preencher em tecnologia é Engenheiro de Software Sênior, onde
          50% das vagas de emprego permanecem abertas por 60 dias ou mais na plataforma. Desenvolvedor back-end,
          Cientista de Dados e DevOps também aparecem na lista, com 43%, 41% e 38% das vagas abertas por 60 dias ou
          mais, respectivamente.`,
    p3: `Com base nessa perspectiva, o primeiro passo antes de entrar nesse mercado é pesquisar quais certificações,
          habilidades ou cursos são necessários para cada cargo.`,
    supportUrl: `https://comvcportal.com.br/noticia/39763/cinco-dicas-para-encontrar-seu-primeiro-emprego-em-ti`,
    ulrDescription: `Confira mais sobre as vagas de emprego!`,
  },
  {
    id: 3,
    title: `Universidade de Harvard anuncia abertura de centenas de vagas em cursos gratuitos e online.`,
    theme: `Cursos`,
    image: `nov-noticia-3.jpg`,
    p1: `Universidade de Harvard anuncia abertura de centenas de vagas em cursos gratuitos e online A Universidade de
          Harvard é uma das mais conhecidas e renomadas do mundo todo e não é à toa que até em território brasileiro
          conhecemos sua fama por meio de filmes e seriados americanos.`,
    p2: `Agora, aqueles que estão interessados em participar de cursos gratuitos em alguma das 100 matérias
          disponíveis e online já podem ficar animados. Para
          realizar sua inscrição nos cursos gratuitos online, basta realizar um
          cadastro na plataforma oficial do HarvardX e escolher o curso que almeja.`,
    p3: `Antes de escolher a formação, o interessado deve criar uma conta no site e preencher os dados exigidos pela
          Universidade de Harvard para ter acesso às aulas. Como o modelo é online, você decide os horários que deseja
          estudar, em qualquer lugar e em qualquer momento.`,
    supportUrl: `https://clickpetroleoegas.com.br/universidade-de-harvard-anuncia-abertura-de-centenas-de-vagas-em-cursos-gratuitos-e-online/`,
    ulrDescription: `Curso na área: Harvard anuncia.`,
  },
  {
    id: 4,
    title: `Extensões para mudar a cor do Chrome e Edge escondiam malware.`,
    theme: `IoT`,
    image: `nov-noticia-4.jpg`,
    p1: `Dezenas de malware disfarçados de extensão para o Google Chrome e para o Microsoft Edge foram desmascarados
          e detalhados pela empresa de segurança virtual Guardio Labs.`,
    p2: `Os programas já foram removidos da internet, mas chegaram a somar 1 milhão de downloads antes de serem
          combatidos. Os programas mal-intencionados que se passavam por extensões do Chrome, que ofereciam mais cores
          e temas aos navegadores, o que eles faziam, além disso, era baixar scripts que monitoram suas buscas.`,
    p3: `O que essas extensões faziam depois é inserir resultados em sua busca que, na verdade, são
          propagandas que geram receita de impressões e pela venda dos dados das buscas. Além disso, elas atualizavam
          as URLs de sites de lojas, transformando qualquer compra que você fizesse ali numa comissão para os autores
          do malware.`,
    supportUrl: `https://www.tecmundo.com.br/seguranca/253345-extensoes-mudar-cor-chrome-edge-escondiam-malware.htm`,
    ulrDescription: `Malwares nunca mais.`,
  },
  {
    id: 5,
    title: `O que é ransomware e como proteger negócios?`,
    theme: `Segurança`,
    image: `nov-noticia-5.jpg`,
    p1: `De acordo com a Cybersecurity Ventures, pesquisadora de economia cibernética global, os custos globais com
          crimes cibernéticos devem crescer 15% por ano até 2025.`,
    p2: `Assim, nesse cenário, um desafio a ser enfrentado pelos negócios é o ransomware, um malware (software
            malicioso) em expansão, criado para prejudicar sistemas computacionais e sequestrar dados. Para resgatar as
            informações roubadas é necessário seguir diversas instruções e quase sempre é exigido o pagamento em
            criptomoedas.`,
    p3: `Em alguns casos, esse malware infecta o computador mesmo que o usuário não tenha feito algum download da
          internet intencionalmente, e por isso, companhias precisam se prevenir para que não sofram com este
          problema. Como se não bastasse este desafio que tem acontecido com frequência no mercado, um novo método
          surgiu para propagar este malware, chamado ransomware as a service.`,
    p4: `É, portanto, essencial que as organizações adotem mecanismos de defesa como corrigir e atualizar o sistema
          operacional das máquinas para reduzir vulnerabilidades, utilizar técnicas de detecção de ransomware, fazer
          backup em nuvem tendo um sistema voltado para a recuperação de informações, estabelecer estratégias de
          segurança ao acesso de informações online, conscientizar equipes de práticas arriscadas, e usar soluções que
          analisam os anexos e links para barrar ações maliciosas.`,
    supportUrl: `https://cryptoid.com.br/criptografia-identificacao-digital-id-biometria/o-que-e-ransomware-as-a-service-e-como-proteger-negocios/`,
    ulrDescription: `O que é o ransomware?`,
  },
];

// Noticias de Dezembro
const dezembro = [
  {
    id: 1,
    title: `Startups e empresas de tecnologia abrem milhares de vagas neste final de ano`,
    theme: `Empregabilidade`,
    image: `dez-noticia-1.jpg`,
    p1: `Que tal fechar o ano com um novo emprego?`,
    p2: `O setor de tecnologia segue aquecido e diversas startups e empresas de tecnologia estão com vagas abertas
    neste final de ano. São milhares de oportunidades para quem procura trabalho ou realocação na área de
    tecnologia.`,
    p3: `Confira no site a relação de oportunidades!`,
    supportUrl: `https://www.gazetadopovo.com.br/gazz-conecta/carreira-e-oportunidades/startups-empresas-tecnologia-milhares-de-vagas-final-ano-2022/`,
    ulrDescription: `Saiba mais.`,
  },
  {
    id: 2,
    title: `Preocupação com a cibersegurança cria um dos mercados mais importantes na área da tecnologia.`,
    theme: `Segurança`,
    image: `dez-noticia-2.jpg`,
    p1: `Avaliado em US$ 132,94 bilhões globalmente em 2021, mercado de cybersec deve registrar Taxa de Crescimento
          Anual Composta de 14,5% entre 2022 e 2027.`,
    p2: `Nos últimos anos, os crimes cibernéticos estão gerando preocupações em diversos setores, sejam eles públicos
          ou privados. Dessa forma, não só especialistas do setor de tecnologia que querem se inserir no segmento
          estão tendo boas oportunidades de emprego, como também iniciantes na área. Em algumas empresas já há times
          de segurança da informação, divididos de acordo com práticas de desenvolvimento ágil. Geralmente, a divisão
          desses grupos é separada por áreas. Um deles ocupa uma posição central, incluindo macro assuntos como
          análise, compliance, logística e gestão, e se relacionando diretamente com todos os outros.`,
    p3: `Há também aqueles responsáveis pela educação e interação, segurança ao código e design da aplicação, sem
          falar na equipe formada por desenvolvedores e arquitetos.`,
    supportUrl: `https://tecmasters.com.br/ciberseguranca-mercados-importantes-tecnologia/`,
    ulrDescription: `Saiba mais.`,
  },
  {
    id: 3,
    title: `Como a internet das coisas pode ajudar no varejo?`,
    theme: `Iot`,
    image: `dez-noticia-3.jpg`,
    p1: `A secular ciência do varejo nada mais é do que o processo de atuar na intermediação entre a compra de muitas
          unidades de um produto específico diretamente dos produtores (indústrias), e a venda de poucas unidades de
          muitos produtos diferentes aos consumidores finais.`,
    p2: `Ao longo dos últimos anos e após a forte aceleração provocada pela pandemia de COVID-19, o varejo foi
          radicalmente transformado pela internet, e passou a ser cada vez mais presente e direcionado pelas
          características dos ambientes online. A chegada do 5G, agora em 2022, traz ainda mais expectativas.`,
    p3: `Como o advento dessa nova tecnologia poderá potencializar ainda mais o varejo?`,
    p4: `Quando se fala em conexão, não tem como não remeter a IoT (internet of things ou internet das coisas). Ela é
          uma rede de objetos físicos conectados a sensores e sistemas de tecnologia da informação, que pode interagir
          e trocar dados com outros dispositivos, todos conectados por meio da internet.`,
    p5: `Ainda que esses dispositivos funcionem perfeitamente com as atuais redes disponíveis, espera-se que no
          futuro a evolução da tecnologia para o 5G proporcione a expansão e consolidação massiva da IoT, criando um
          novo mundo em que todos os objetos que tiverem motivos para estar conectados, serão conectados.`,
    supportUrl: `https://www.tecmundo.com.br/mercado/255205-internet-coisas-ajudar-varejo.htm`,
    ulrDescription: `Veja mais informações.`,
  },
  {
    id: 4,
    title: `5G: uma nova era de conectividade`,
    theme: `Conectividade`,
    image: `dez-noticia-4.jpg`,
    p1: `No dia 6 de julho, quando o 5G puro começou a funcionar na capital federal, o Brasil deu o primeiro passo
          rumo a uma nova era de conectividade.`,
    p2: `A grande diferença é que as gerações anteriores da telefonia celular eram baseadas na comunicação
          entre pessoas e esta nova geração foi concebida pensando na comunicação entre objetos. Há uma verdadeira
          revolução em curso com impacto na indústria, na medicina, na agricultura, com novas possibilidades de
          serviços e negócios, entre as inúmeras aplicações.`,
    supportUrl: `https://sampi.net.br/jundiai/noticias/2672727/opinioes/2022/12/5g-uma-nova-era-de-conectividade`,
    ulrDescription: `Saiba mais sobre o 5G`,
  },
  {
    id: 5,
    title: `Para que serve a segurança em TI?`,
    theme: `Segurança`,
    image: `dez-noticia-5.jpg`,
    p1: `Segurança em TI é um conjunto de estratégias para administrar processos, recursos e políticas necessários
          para prevenir, detectar, documentar e contra-atacar ameaças a informação digital.`,
    p2: `O principal objetivo da segurança em TI é proteger os recursos mais valiosos de um negócio, que são seus
          dados e as suas operações. Afinal, quando qualquer um desses aspectos é comprometido, a organização está em
          risco. Dados violados podem ser usados em chantagens — como nos ataques ransomware —, enquanto operações
          interrompidas podem custar caro para serem retomadas.`,
    p3: `Por isso, segurança em TI deve envolver processos e políticas de segurança física e digital para impedir
          quebras de sigilo. Alguns dos recursos utilizados podem ser o armazenamento em nuvem, a criptografia e o
          gerenciamento de servidores.`,
    supportUrl: `https://santodigital.com.br/seguranca-em-ti-voce-entende-importancia-para-sua-empresa/`,
    ulrDescription: `Importância da segurança para a sua empresa.`,
  },
];

// Noticias de Fevereiro
const fevereiro = [
  {
    id: 1,
    title: `Redes de Computadores: qual é o salário do formado da área?`,
    theme: `Empregabilidade`,
    image: `fev-noticia-1.jpeg`,
    p1: `O curso de Redes de Computadores é uma boa aposta para quem tem afinidade com tecnologia. Por ser um
        Tecnólogo com duração de 5 semestres (2 anos e meio), você se prepara em pouco tempo para ingressar no
        mercado e encontrar boas vagas, com remunerações atrativas.`,
    p2: `Afinal, o diploma de ensino superior pode de um profissional em até 182%. Neste conteúdo, encontramos informações sobre o salário de Redes de
        Computadores para quem busca qualificação, nos primeiros momentos da carreira, em diferentes regiões do país
        e muito mais.`,
    supportUrl: `https://blog.voomp.com.br/dicas/mercado-de-trabalho/como-ganhar-dinheiro-com-devops`,
    ulrDescription: `Como ganhar dinheiro com Devops?`,
  },
  {
    id: 2,
    title: `O ChatGPT vai roubar meu emprego? Veja as oportunidades que a ferramenta traz.`,
    theme: `Tecnologia`,
    image: `fev-noticia-2.png`,
    p1: `O surgimento do ChatGPT e de outras inteligências artificiais parecidas vem levantando muitas questões nas
          últimas semanas, especialmente sobre o mercado de trabalho.`,
    p2: `Para quem não sabe, essas ferramentas funcionam como um robô de bate-papo que têm a capacidade não só de
          responder perguntas como também de elaborar textos, fazer cálculos e até escrever algoritmos em linguagem de
          programação.`,
    p3: `Com isso, profissionais começaram a questionar a possibilidade de serem substituídos por essas inteligências artificiais.`,
    supportUrl: `https://www.tudoep.com/tudo-valor/dinheiro-com-voce/NOT,0,0,1838661,chatgpt-o-que-e-e-como-funciona.aspx`,
    ulrDescription: `ChatGPT:  o que é e como funciona essa inteligência artificial revolucionária?`,
  },
  {
    id: 3,
    title: `O que é e como funciona a Internet das Coisas?`,
    theme: `Tecnologia`,
    image: `fev-noticia-3.jpg`,
    p1: ` Na década de 90, o cientista Kevin Ashton criou a expressão IoT (Internet of Things, em português:           
            Internet das coisas) para descrever um tipo de rede que conecta objetos do mundo físico à internet.`,
    p2: `Em 2023, uma pesquisa do FGV (Fundação Getulio Vargas) mostrou que o Brasil vai atingir 216 milhões de
          computadores em uso, chegando à marca de 1 máquina por habitante. A conectividade dos brasileiros cresce em
          uma constante anualmente, e para este ano, a ampliação da IoT é uma das tendências.`,
    supportUrl: `https://www.sistemampa.com.br/tv-candides/senai-divinopolis-abre-inscricoes-para-o-curso-de-especializacao-internet-das-coisas/`,
    ulrDescription: `Curso na área: SENAI Divinópolis abre inscrições para o curso de especialização “Internet das Coisas.”`,
  },
  {
    id: 4,
    title: `Wearables: um mercado em ascensão`,
    theme: `Tecnologia`,
    image: `fev-noticia-4.jpg`,
    p1: `Tudo que envolve tecnologia e que o usuário pode vestir, carregar ou usar como acessório, pode ser definido
          como um wearable. Entretanto, é preciso que esse dispositivo tenha conexão com outros aparelhos ou com a internet.`,
    p2: `Essa nova tecnologia foi desenvolvida para gerar praticidade e otimizar desempenhos, onde quer que ela seja
          aplicada. Assim, os dispositivos wearables possuem potencial para trazer benefícios a qualquer área de
          atuação, e podem proporcionar experiências inéditas para quem os utiliza.`,
    supportUrl: `https://usemobile.com.br/wearable/`,
    ulrDescription: `Wearables: o que são as "tecnologias vestíveis"`,
  },
  {
    id: 5,
    title: `Vai curtir o carnaval? Veja dicas para proteger os dados do seu smartphone`,
    theme: `Segurança`,
    image: `fev-noticia-5.png`,
    p1: `A multidão que os blocos de rua carregam pelas cidades e a descontração do carnaval podem acabar fazendo com
          que os foliões tenham seus bens furtados e invadidos por crimonosos.`,
    p2: `Segundo a Polícia Militar (PM), roubos e furtos de celulares representaram 60% das ocorrências registradas
          nos oito dias de carnaval na cidade de São Paulo, no último carnaval oficial de rua da cidade.`,
    p3: `Para ajudar a mitigar riscos, Aldo Albuquerque, diretor executivo na Tempest, empresa de cibersegurança no
          Brasil, dá  10 dicas de segurança para proteger o seu smartphone durante o carnaval.`,
    supportUrl: `https://www.cidademarketing.com.br/marketing/2023/02/14/seguranca-dicas-fundamentais-para-curtir-a-folia-de-carnaval-sem-cair-em-golpes/`,
    ulrDescription: ` Dicas fundamentais para curtir a folia de Carnaval sem cair em golpes.`,
  },
];

// Noticias do Dia da Mulher
const diaDaMulher = [
  {
    id: 1,
    title: `Tech Girls utiliza a tecnologia para transformar a vida de mulheres`,
    theme: `Tecnologia`,
    image: `8mar-noticia-1.jpg`,
    p1: `Fundado pela desenvolvedora de software Gisele Lasserre, o Tech Girls também busca mitigar os danos causados
          pelo lixo eletrônico, fazendo a reciclagem de computadores e componentes que, depois, são enviados a todo o
          país.`,
    p2: `No curso, as alunas aprendem, de forma lúdica e afetiva, como gosta de ressaltar Gisele, desde a criação de
          bijuterias utilizando componentes não reaproveitáveis de computadores, as bijutechs, até o desenvolvimento
          de software na última etapa. O programa ainda inclui módulos de empreendedorismo digital, manutenção de
          notebooks e lógica de programação`,
    supportUrl: `https://www.gazetadopovo.com.br/gazz-conecta/tech-girls-utiliza-a-tecnologia-para-transformar-a-vida-de-mulheres`,
    ulrDescription: `Saiba mais sobre como a tecnologia transfoma a vida das mulheres.`,
  },
  {
    id: 2,
    title: `Curiosidades sobre o Dia Internacional da Mulher`,
    theme: `Curiosidades`,
    image: `8mar-noticia-2.png`,
    p1: `O Dia Internacional das Mulheres é comemorado nesta data porque foi no dia 08 de março de 1917,na Rússia,
    que cerca de 90 mil mulheres operárias foram às ruas protestar por melhores condições de trabalho e de vida,
    uma vez que tinham longas jornadas de trabalho, recebiam muito menos que os homens e não tinham direito ao
    voto.`,
    supportUrl: `https://querobolsa.com.br/revista/8-de-marco-entenda-porque-e-comemorado-o-dia-internacional-das-mulheres#:~:text=O%20Dia%20Internacional%20das%20Mulheres%20%C3%A9%20comemorado%20nesta%20data%20porque,os%20homens%20e%20n%C3%A3o%20tinham`,
    ulrDescription: `Saiba mais.`,
  },
  {
    id: 3,
    title: `Assédio: o que é, tipos e como se proteger`,
    theme: `Informação`,
    image: `8mar-noticia-3.png`,
    p1: `O que caracteriza o assédio? O assédio pode incluir uma variedade de comportamentos de natureza verbal e
          física, incluindo:`,
    p2: `- Piadas ofensivas, intimidadoras ou incômodas, Observações humilhantes.`,
    p3: `- Xingamentos, apelidos ofensivos ou calúnias.`,
    p4: `- Agressões físicas, Ameaças, Intimidação.`,
    p5: `- Imagens ou objetos ofensivos, incluindo imagens pornográficas.`,
    supportUrl: `https://atividadepolicial.com.br/10-medidas-contra-o-assedio-sexual/`,
    ulrDescription: `10 medidas contra o assedio sexual.`,
  },
  {
    id: 4,
    title: `9 mulheres que botam pra quebrar na tecnologia!`,
    theme: `Informação`,
    image: `8mar-noticia-4.png`,
    p1: `Falar sobre representatividade em tecnologia é fundamental para estourar a bolha que acha que esse mercado
          só tem espaço para homens.`,
    p2: `Os números mostram: cada vez mais, aos poucos, os recortes de gênero, raça e classe social vão se mostrando
          no mundo tech e inaugurando discussões super essenciais para um crescimento saudável - e com mais
          diversidade. Em cinco anos, a presença feminina na tecnologia cresceu 60%, passando de 27,9 mil mulheres em
          2014 para 44,5 mil, em 2019, como mostra a pesquisa do Cadastro Geral de Empregados e Desempregados. Mesmo
          assim, é preciso interpretar mais a fundo.`,
    supportUrl: `https://www.alura.com.br/artigos/representatividade-mercado-tech-9-mulheres-tecnologia-para-conhecer-e-acompanhar?gclid=Cj0KCQiAgaGgBhC8ARIsAAAyLfFRRoK52_RQX0CSprtZUg8HTZVVOZ92hNRss7aF9CJnqiEiHzprjMIaAqapEALw_wcB`,
    ulrDescription: `9 mulheres que contribuem de diferentes maneiras para um mercado tech mais plural e possível para todas.`,
  },
];

// Noticias de Abril
const abril = [
  {
    id: 1,
    title: `Desenvolvimento de Games: o que você precisa saber?`,
    theme: "Tecnologia",
    p1: `Embora os requisitos de educação variem com base em empregadores, muitos desenvolvedores de jogos em potencial procuram um diploma de bacharel em ciência da computação, engenharia de software ou um campo relacionado — mas já existem cursos específicos.`,
    p2: `Como desenvolvedor de games, você pode projetar as principais características do jogo, supervisionar os testes e elaborar o design. Você também pode trabalhar na produção e conceito artístico.
    Essa carreira permite muito o uso da criatividade, mas a concorrência por empregos é intensa.`,
    image: `abr-noticia-1.png`,
    supportUrl: `https://forbes.com.br/forbes-tech/2023/03/o-que-a-imagem-fake-do-papa-diz-sobre-o-futuro-da-ia/`,
    ulrDescription: `Saiba mais sobre o fake do Papa.`,
  },
  {
    id: 2,
    title: `Como identificar fotos “falsas” criadas por IA`,
    theme: "Informação",
    p1: `Existem outras dicas para saber se uma imagem saiu da mente de alguém “naturalmente” ou por meio de uma IA.
          Atente-se a elementos como:`,
    p2: `- Fundo muito desfocado e textos indecifráveis em segundo plano;`,
    p3: `- Partes da imagem parecem pintadas;`,
    p4: `- Objetos se misturando à pele e Falta de simetria no rosto;`,
    p5: `Em suma, a dica é verificar se há inconsistências visíveis na imagem. Além das citadas acima, entram aqui
          bordas embaçadas; detalhes do corpo ou fios de cabelo cortados e por aí vai.`,
    image: `abr-noticia-2.webp`,
    supportUrl: `https://olhardigital.com.br/2023/03/30/dicas-e-tutoriais/como-identificar-fotos-falsas-criadas-por-ia/`,
    ulrDescription: `Saiba como identificar.`,
  },
  {
    id: 3,
    title: `Midjourney: a inteligência artificial na criação de games`,
    theme: "Tecnologia",
    p1: `Usando a impressionante ferramenta Midjourney, uma pessoa criou um shoot 'em up em que todas as imagens
          foram geradas por inteligência artificial. `,
    p2: `A geração de conteúdo usando inteligência artificial tem evoluído
          bastante nos últimos anos, com as pessoas adorando colocar as máquinas para “imaginarem” situações
          inusitadas. Pois foi usando uma dessas ferramentas, a Midjourney, que um sujeito conseguiu algo muito
          interessante: criar um jogo experimental.`,
    image: `abr-noticia-3.png`,
    supportUrl: `https://meiobit.com/459159/midjourney-a-inteligencia-artificial-na-criacao-de-games/`,
    ulrDescription: `Saiba mais sobre Midjourey.`,
  },
  {
    id: 4,
    title: `Google inicia testes com inteligência artificial generativa no Gmail e no Doc.`,
    theme: "Informação",
    p1: `O Google está trazendo recursos de inteligência artificial generativa para os aplicativos do Workspace, e
          agora está iniciando testes públicos no Gmail e no Docs. No Gmail, a inteligência artificial generativa
          poderá ajudar na redação de diversos tipos de conteúdo, desde convites de aniversário até cartas de
          apresentação de emprego.`,
    p2: `Além disso, o Google poderá tornar o texto mais elaborado ou resumido, de acordo
          com a necessidade do usuário. No Docs, a inteligência artificial poderá tornar o texto mais detalhado ou
          reescrevê-lo de forma concisa. Isso pode ser útil na redação de postagens de blog ou letras de músicas.`,
    image: `abr-noticia-4.webp`,
    supportUrl: `https://cuboup.com/conteudo/d-id/#:~:text=D-ID:%20%C3%89%20uma%20plataforma,proteger%20a%20identidade%20dos%20usu%C3%A1rios`,
    ulrDescription: `Saiba mais sobre a notícia do Google.`,
  },
  {
    id: 5,
    title: `Inteligência artificial: o alerta de mil especialistas sobre 'risco para a humanidade'`,
    theme: "Informação",
    p1: `Um grupo de especialistas em inteligência artificial e executivos da indústria de tecnologia pediu uma pausa
          de seis meses no treinamento de poderosos sistemas de inteligência artificial, argumentando que eles
          representam uma potencial ameaça à humanidade.`,
    p2: ` Em carta aberta, eles alegam que os laboratórios que
          trabalham com essa tecnologia estão em "uma corrida fora de controle para desenvolver e implementar mentes
          digitais cada vez mais poderosas que ninguém, nem mesmo seus criadores, pode entender, prever ou controlar
          com segurança".`,
    image: `abr-noticia-5.png`,
    supportUrl: `https://teg6.com.br/93507/noticias/d-id-revela-nova-api-de-bate-papo-para-permitir-conversas-cara-a-cara-com-um-ser-humano-digital-de-ia/`,
    ulrDescription: `Saiba mais sobre opinião dos especialistas.`,
  },
  {
    id: 6,
    title: `D-ID: O que é a AI que Cria Vídeos, como usar em português e exemplos`,
    theme: "Tecnologia",
    p1: `D-ID é uma plataforma de criação de vídeo gerada por inteligência artificial que oferece soluções de
          reconhecimento facial e proteção de identidade para empresas. A plataforma utiliza tecnologia de aprendizado
          de máquina para criar vídeos personalizados, automatizar a produção de conteúdo e proteger a privacidade dos
          usuários.`,
    p2: ` A plataforma é uma opção popular para empresas que desejam criar vídeos personalizados e atraentes
          sem a necessidade de conhecimentos técnicos especializados em produção de vídeo ou design gráfico.`,
    image: `abr-noticia-6.png`,
    supportUrl: `https://cuboup.com/conteudo/d-id/#:~:text=D-ID:%20%C3%89%20uma%20plataforma,proteger%20a%20identidade%20dos%20usu%C3%A1rios`,
    ulrDescription: `Saiba mais sobre D-ID.`,
  },
];

export default { novembro, dezembro, fevereiro, diaDaMulher, marco, abril };
