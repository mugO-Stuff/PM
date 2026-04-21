// docsDetalhados.js - Estrutura detalhada e oficial dos documentos do edital
// Cada objeto representa um documento com todas as exigências, descrições e regras oficiais

const DOCUMENTOS_DETALHADOS = [
  {
    id: "foto",
    nome: "Foto 5x7 cm",
    descricao: "01 (uma) foto 5x7 cm colada na capa do Formulário da Avaliação de Conduta Social.",
    exigencias: [
      "Datada",
      "Recente",
      "No máximo 6 meses"
    ],
    observacoes: [
      "Não será aceita fotografia trajando uniformes militares, escolares, empresariais ou similares."
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
    nome: "Certidão de Nascimento ou Casamento",
    descricao: "01 (uma) cópia reprográfica da Certidão de Nascimento ou Casamento.",
    exigencias: [],
    observacoes: [
      "Obrigatoriamente cópia reprográfica."
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
    nome: "Cédula de Identidade (RG)",
    descricao: "01 (uma) cópia reprográfica da Cédula de Identidade (RG) ou Registro de Identidade Civil (RIC).",
    exigencias: [],
    observacoes: [
      "Obrigatoriamente cópia reprográfica."
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
    nome: "Certidão de Distribuição Criminal",
    descricao: "01 (uma) cópia reprográfica da Certidão de Distribuição Criminal.",
    exigencias: [
      "Emitida pela Justiça Estadual das comarcas dos municípios em que o candidato residiu a partir dos 18 anos de idade."
    ],
    observacoes: [
      "Obrigatoriamente cópia reprográfica."
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
    nome: "Certidão de Objeto e Pé",
    descricao: "01 (uma) cópia da Certidão de Objeto e Pé.",
    exigencias: [
      "Necessária em possíveis processos que tramitam em segredo de justiça ou já encerrados."
    ],
    observacoes: [],
    condicao: "Somente para quem possui ou já possuiu processo judicial",
    copiaRepro: false,
    condicaoEspecial: true,
    ondeEmitir: "Fórum / Vara Judicial",
    linkOficial: "",
    prioridade: "media"
  },
  {
    id: "antecedentes",
    nome: "Atestado de Antecedentes Criminais",
    descricao: "01 (uma) cópia do Atestado de Antecedentes Criminais.",
    exigencias: [
      "Com emissão imediata e gratuita pela internet."
    ],
    observacoes: [],
    condicao: "Todos os candidatos",
    copiaRepro: false,
    condicaoEspecial: false,
    ondeEmitir: "Poupatempo",
    linkOficial: "https://www.poupatempo.sp.gov.br/",
    prioridade: "alta"
  },
  {
    id: "spc",
    nome: "Certidão Negativa do Serviço Central de Proteção ao Crédito",
    descricao: "01 (uma) cópia reprográfica da Certidão Negativa do Serviço Central de Proteção ao Crédito.",
    exigencias: [],
    observacoes: [
      "Caso exista débito, apresentar 01 (uma) cópia reprográfica do Extrato de Consulta."
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
    nome: "Certidão disciplinar",
    descricao: "01 (uma) cópia reprográfica da Certidão expedida pelo órgão público em que estiver servindo.",
    exigencias: [
      "Deve informar: situação disciplinar atual, comportamento, se responde ou respondeu processo administrativo ou disciplinar, punições sofridas."
    ],
    observacoes: [],
    condicao: "Somente para quem é servidor público ou militar",
    copiaRepro: true,
    condicaoEspecial: true,
    ondeEmitir: "Órgão público onde trabalha",
    linkOficial: "",
    prioridade: "media"
  },
  {
    id: "cdi",
    nome: "Certificado de Dispensa de Incorporação (CDI)",
    descricao: "01 (uma) cópia reprográfica do Certificado de Dispensa de Incorporação.",
    exigencias: [],
    observacoes: [],
    condicao: "Somente para candidatos do sexo masculino",
    copiaRepro: true,
    condicaoEspecial: true,
    ondeEmitir: "Junta de Serviço Militar",
    linkOficial: "https://alistamento.eb.mil.br/",
    prioridade: "media"
  },
  {
    id: "conclusaoEM",
    nome: "Certificado de Conclusão do Ensino Médio",
    descricao: "01 (uma) cópia reprográfica do Certificado de Conclusão do Ensino Médio.",
    exigencias: [
      "Expedido por estabelecimento público ou particular devidamente reconhecido pela legislação vigente."
    ],
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
    nome: "Histórico Escolar do Ensino Médio",
    descricao: "01 (uma) cópia reprográfica do Histórico Escolar do Ensino Médio.",
    exigencias: [],
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
    nome: "Certificado de Reservista",
    descricao: "01 (uma) cópia reprográfica do Certificado de Reservista.",
    exigencias: [],
    observacoes: [],
    condicao: "Somente para quem serviu às Forças Armadas",
    copiaRepro: true,
    condicaoEspecial: true,
    ondeEmitir: "Junta de Serviço Militar",
    linkOficial: "",
    prioridade: "media"
  },
  {
    id: "comportamento",
    nome: "Declaração de Comportamento ou Diploma de Honra ao Mérito",
    descricao: "01 (uma) cópia reprográfica da Declaração de Comportamento ou do Diploma de Honra ao Mérito.",
    exigencias: [],
    observacoes: [],
    condicao: "Somente para quem serviu às Forças Armadas",
    copiaRepro: true,
    condicaoEspecial: true,
    ondeEmitir: "Órgão militar onde serviu",
    linkOficial: "",
    prioridade: "media"
  }
];
