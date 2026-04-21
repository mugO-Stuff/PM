// docsDetalhados.js - Estrutura detalhada e oficial dos documentos do edital
// Cada objeto representa um documento com todas as exigências, descrições e regras oficiais

const DOCUMENTOS_DETALHADOS = [
  {
    id: "foto",
    nome: "FOTO 5X7 CM",
    descricao: "01 (uma) foto 5X7 cm colada na capa do Formulário da Avaliação de Conduta Social, datada e recente em até, no máximo, 6 (seis) meses.",
    observacoes: [
      "ATENÇÃO: Não será aceita fotografia trajando uniformes militares, escolares, empresariais ou similares."
    ],
    condicao: "Todos os candidatos",
    copiaRepro: false,
    condicaoEspecial: false,
    ondeEmitir: "Estúdio fotográfico / gráfica rápida",
    linkOficial: "",
    prioridade: "alta"
  },
  {
    id: "certidaoNascimento",
    nome: "CERTIDÃO DE NASCIMENTO OU CASAMENTO",
    descricao: "01 (uma) cópia reprográfica da Certidão de Nascimento ou Casamento.",
    observacoes: [
      "Importante: Deixar claro que precisa ser cópia reprográfica."
    ],
    condicao: "Todos os candidatos",
    copiaRepro: true,
    condicaoEspecial: false,
    ondeEmitir: "Cartório de Registro Civil",
    linkOficial: "https://www.registrocivil.org.br/",
    prioridade: "alta"
  },
  {
    id: "rg",
    nome: "CÉDULA DE IDENTIDADE (RG)",
    descricao: "01 (uma) cópia reprográfica da Cédula de Identidade (RG) ou Registro de Identidade Civil (RIC).",
    observacoes: [
      "Importante: Deixar claro que precisa ser cópia reprográfica."
    ],
    condicao: "Todos os candidatos",
    copiaRepro: true,
    condicaoEspecial: false,
    ondeEmitir: "Poupatempo / Instituto de Identificação",
    linkOficial: "https://www.poupatempo.sp.gov.br/",
    prioridade: "alta"
  },
  {
    id: "certidaoCriminal",
    nome: "CERTIDÃO DE DISTRIBUIÇÃO CRIMINAL",
    descricao: "01 (uma) cópia reprográfica da Certidão de Distribuição Criminal, emitida pela Justiça Estadual, das comarcas dos municípios em que residiu a partir dos 18 anos de idade.",
    observacoes: [
      "Importante: Mostrar claramente que não é apenas da cidade atual, mas de todos os municípios onde residiu desde os 18 anos."
    ],
    condicao: "Todos os candidatos",
    copiaRepro: true,
    condicaoEspecial: false,
    ondeEmitir: "Tribunal de Justiça do Estado",
    linkOficial: "https://www.tjsp.jus.br/Certidoes/Certidoes/CertidoesPrimeiraInstancia",
    prioridade: "alta"
  },
  {
    id: "objetoPe",
    nome: "CERTIDÃO DE OBJETO E PÉ",
    descricao: "01 (uma) cópia da Certidão de Objeto e Pé de possíveis processos que tramitam em Segredo de Justiça, ou mesmo já encerrados.",
    observacoes: [
      "Importante: Necessária apenas se houver processo judicial."
    ],
    condicao: "Somente para quem possui ou já possuiu processo judicial",
    copiaRepro: false,
    condicaoEspecial: true,
    ondeEmitir: "Fórum / Vara Judicial",
    linkOficial: "",
    prioridade: "media"
  },
  {
    id: "antecedentes",
    nome: "ATESTADO DE ANTECEDENTES CRIMINAIS",
    descricao: "01 (uma) cópia do Atestado de Antecedentes Criminais, com emissão de forma imediata e gratuita por meio da rede Mundial de Computadores – Internet, junto ao endereço eletrônico do Poupatempo.",
    observacoes: [
      "Importante: Pode ser emitido gratuitamente online."
    ],
    condicao: "Todos os candidatos",
    copiaRepro: false,
    condicaoEspecial: false,
    ondeEmitir: "Poupatempo",
    linkOficial: "https://www.poupatempo.sp.gov.br/",
    prioridade: "alta"
  },
  {
    id: "spc",
    nome: "CERTIDÃO NEGATIVA DO SERVIÇO CENTRAL DE PROTEÇÃO AO CRÉDITO",
    descricao: "01 (uma) cópia reprográfica da Certidão Negativa do Serviço Central de Proteção ao Crédito.",
    observacoes: [
      "Caso exista débito: apresentar 01 (uma) cópia reprográfica do Extrato de Consulta."
    ],
    condicao: "Todos os candidatos",
    copiaRepro: true,
    condicaoEspecial: true,
    ondeEmitir: "SPC Brasil / Boa Vista / órgão de proteção ao crédito",
    linkOficial: "https://www.spcbrasil.org.br/",
    prioridade: "media"
  },
  {
    id: "disciplinar",
    nome: "CERTIDÃO DISCIPLINAR",
    descricao: "01 (uma) cópia reprográfica da Certidão expedida pelo órgão público em que estiver servindo, informando: sua atual situação disciplinar, comportamento, se responde ou já respondeu procedimento/processo administrativo, se responde ou já respondeu procedimento/processo disciplinar, punições sofridas, se houver.",
    observacoes: [
      "Importante: Esta documentação deve ser atendida somente por quem é servidor público ou militar."
    ],
    condicao: "Somente para quem é servidor público ou militar",
    copiaRepro: true,
    condicaoEspecial: true,
    ondeEmitir: "Órgão público onde trabalha",
    linkOficial: "",
    prioridade: "media"
  },
  {
    id: "cdi",
    nome: "CERTIFICADO DE DISPENSA DE INCORPORAÇÃO (CDI)",
    descricao: "01 (uma) cópia reprográfica do Certificado de Dispensa de Incorporação (CDI).",
    observacoes: [
      "Importante: Esta documentação deve ser atendida somente para candidatos do sexo masculino."
    ],
    condicao: "Somente para candidatos do sexo masculino",
    copiaRepro: true,
    condicaoEspecial: true,
    ondeEmitir: "Junta de Serviço Militar",
    linkOficial: "https://alistamento.eb.mil.br/",
    prioridade: "media"
  },
  {
    id: "conclusaoEM",
    nome: "CERTIFICADO DE CONCLUSÃO DO ENSINO MÉDIO",
    descricao: "01 (uma) cópia reprográfica do Certificado de Conclusão do Ensino Médio, expedido por estabelecimento de ensino público ou particular, devidamente reconhecido pela legislação vigente.",
    observacoes: [],
    condicao: "Todos os candidatos",
    copiaRepro: true,
    condicaoEspecial: false,
    ondeEmitir: "Escola onde concluiu o ensino médio",
    linkOficial: "",
    prioridade: "alta"
  },
  {
    id: "historicoEM",
    nome: "HISTÓRICO ESCOLAR DO ENSINO MÉDIO",
    descricao: "01 (uma) cópia reprográfica do Histórico Escolar do Ensino Médio.",
    observacoes: [],
    condicao: "Todos os candidatos",
    copiaRepro: true,
    condicaoEspecial: false,
    ondeEmitir: "Escola onde concluiu o ensino médio",
    linkOficial: "",
    prioridade: "alta"
  },
  {
    id: "reservista",
    nome: "CERTIFICADO DE RESERVISTA",
    descricao: "DOCUMENTAÇÃO NECESSÁRIA PARA QUEM SERVIU ÀS FORÇAS ARMADAS: 01 (uma) cópia reprográfica do Certificado de Reservista.",
    observacoes: [
      "Importante: Somente para quem serviu às Forças Armadas."
    ],
    condicao: "Somente para quem serviu às Forças Armadas",
    copiaRepro: true,
    condicaoEspecial: true,
    ondeEmitir: "Junta de Serviço Militar",
    linkOficial: "",
    prioridade: "media"
  },
  {
    id: "comportamento",
    nome: "DECLARAÇÃO DE COMPORTAMENTO OU DIPLOMA DE HONRA AO MÉRITO",
    descricao: "DOCUMENTAÇÃO NECESSÁRIA PARA QUEM SERVIU ÀS FORÇAS ARMADAS: 01 (uma) cópia reprográfica da Declaração de Comportamento ou do Diploma de Honra ao Mérito.",
    observacoes: [
      "Importante: Somente para quem serviu às Forças Armadas."
    ],
    condicao: "Somente para quem serviu às Forças Armadas",
    copiaRepro: true,
    condicaoEspecial: true,
    ondeEmitir: "Órgão militar onde serviu",
    linkOficial: "",
    prioridade: "media"
  }
];
