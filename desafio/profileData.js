// Estrutura de perguntas condicionais para perfil do usuário
const PROFILE_QUESTIONS = [
  {
    key: 'isServidor',
    question: 'Você é servidor público ou militar?',
    type: 'boolean'
  },
  {
    key: 'isForcasArmadas',
    question: 'Você serviu às Forças Armadas?',
    type: 'boolean'
  },
  {
    key: 'isMasculino',
    question: 'Você é do sexo masculino?',
    type: 'boolean'
  },
  {
    key: 'temProcesso',
    question: 'Possui ou já possuiu processo judicial?',
    type: 'boolean'
  },
  {
    key: 'concluiuEM',
    question: 'Já concluiu o Ensino Médio?',
    type: 'boolean'
  }
];

// Estrutura dos documentos, com campos completos
const DOCS = [
  {
    key: 'foto',
    title: 'Foto 5x7 recente',
    details: 'Foto recente (máximo 6 meses), colada na capa do formulário. Não pode estar usando uniforme militar, escolar, empresarial ou similar.',
    priority: 'alta',
    ondeEmitir: 'Estúdio fotográfico',
    orgao: 'Estúdio fotográfico',
    local: 'Estúdio fotográfico',
    link: '',
    cond: () => true
  },
  {
    key: 'certidaoNascimento',
    title: 'Certidão de Nascimento ou Casamento',
    details: 'Documento original ou cópia autenticada.',
    priority: 'alta',
    ondeEmitir: 'Cartório',
    orgao: 'Cartório de Registro Civil',
    local: 'Cartório',
    link: '',
    cond: () => true
  },
  {
    key: 'rg',
    title: 'RG / Identidade',
    details: 'Documento de identificação oficial com foto.',
    priority: 'alta',
    ondeEmitir: 'Poupatempo',
    orgao: 'Secretaria de Segurança Pública',
    local: 'Poupatempo',
    link: 'https://www.poupatempo.sp.gov.br/',
    cond: () => true
  },
  {
    key: 'certidaoCriminal',
    title: 'Certidão de Distribuição Criminal',
    details: 'Emitida pela Justiça Estadual das comarcas onde residiu desde os 18 anos.',
    priority: 'media',
    ondeEmitir: 'Fórum',
    orgao: 'Justiça Estadual',
    local: 'Fórum',
    link: '',
    cond: (profile) => profile.temProcesso
  },
  {
    key: 'objetoPe',
    title: 'Certidão de Objeto e Pé (se necessário)',
    details: 'Necessária caso existam processos em segredo de justiça ou já encerrados.',
    priority: 'baixa',
    ondeEmitir: 'Fórum',
    orgao: 'Justiça Estadual',
    local: 'Fórum',
    link: '',
    cond: (profile) => profile.temProcesso
  },
  {
    key: 'antecedentes',
    title: 'Atestado de Antecedentes Criminais',
    details: 'Pode ser emitido gratuitamente online pelo Poupatempo.',
    priority: 'alta',
    ondeEmitir: 'Poupatempo',
    orgao: 'Secretaria de Segurança Pública',
    local: 'Poupatempo',
    link: 'https://www.poupatempo.sp.gov.br/',
    cond: () => true
  },
  {
    key: 'spc',
    title: 'Certidão Negativa do SPC ou Extrato de Débito',
    details: 'Documento que comprova ausência de restrições financeiras.',
    priority: 'media',
    ondeEmitir: 'SPC/Serasa',
    orgao: 'SPC/Serasa',
    local: 'SPC/Serasa',
    link: 'https://www.serasa.com.br/',
    cond: () => true
  },
  {
    key: 'disciplinar',
    title: 'Certidão disciplinar (somente servidor público ou militar)',
    details: 'Apenas para quem é servidor público ou militar. Deve informar situação disciplinar e possíveis processos administrativos.',
    priority: 'baixa',
    ondeEmitir: 'Órgão público de origem',
    orgao: 'Órgão público',
    local: 'RH do órgão',
    link: '',
    cond: (profile) => profile.isServidor
  },
  {
    key: 'cdi',
    title: 'Certificado de Dispensa de Incorporação (CDI)',
    details: 'Apenas para candidatos do sexo masculino.',
    priority: 'baixa',
    ondeEmitir: 'Junta Militar',
    orgao: 'Junta Militar',
    local: 'Junta Militar',
    link: '',
    cond: (profile) => profile.isMasculino
  },
  {
    key: 'conclusaoEM',
    title: 'Certificado de Conclusão do Ensino Médio',
    details: 'Documento que comprova a conclusão do Ensino Médio.',
    priority: 'alta',
    ondeEmitir: 'Escola',
    orgao: 'Secretaria Escolar',
    local: 'Escola',
    link: '',
    cond: (profile) => profile.concluiuEM
  },
  {
    key: 'historicoEM',
    title: 'Histórico Escolar do Ensino Médio',
    details: 'Documento detalhando as disciplinas e notas do Ensino Médio.',
    priority: 'alta',
    ondeEmitir: 'Escola',
    orgao: 'Secretaria Escolar',
    local: 'Escola',
    link: '',
    cond: (profile) => profile.concluiuEM
  },
  {
    key: 'reservista',
    title: 'Certificado de Reservista (se serviu Forças Armadas)',
    details: 'Apenas para quem serviu às Forças Armadas.',
    priority: 'baixa',
    ondeEmitir: 'Junta Militar',
    orgao: 'Junta Militar',
    local: 'Junta Militar',
    link: '',
    cond: (profile) => profile.isForcasArmadas
  },
  {
    key: 'comportamento',
    title: 'Declaração de Comportamento ou Diploma de Honra ao Mérito (se serviu)',
    details: 'Apenas para quem serviu às Forças Armadas.',
    priority: 'baixa',
    ondeEmitir: 'Unidade Militar',
    orgao: 'Unidade Militar',
    local: 'Unidade Militar',
    link: '',
    cond: (profile) => profile.isForcasArmadas
  }
];

// Links oficiais centralizados
const DOC_LINKS = {
  rg: 'https://www.poupatempo.sp.gov.br/',
  antecedentes: 'https://www.poupatempo.sp.gov.br/',
  spc: 'https://www.serasa.com.br/'
  // ...adicionar outros conforme necessário
};
