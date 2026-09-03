import { BonusItem, EbookModule, FaqItem, TestimonialItem, WhatsAppFeedback } from '../types';

import studentMarcos from '../assets/images/student_marcos_1788065559080.jpg';
import studentCamila from '../assets/images/student_camila_1788065572124.jpg';
import studentLucas from '../assets/images/student_lucas_1788065583088.jpg';
import studentJuliana from '../assets/images/student_juliana_1788065593560.jpg';

export const targetAudience: string[] = [
  'Trabalhadores de fábricas e indústrias',
  'Operadores de máquinas',
  'Auxiliares e ajudantes industriais',
  'Profissionais de manutenção',
  'Trabalhadores expostos a ruído, calor, produtos químicos ou outros agentes',
  'Pessoas que recebem adicional de insalubridade ou periculosidade',
  'Quem deseja entender melhor o próprio holerite',
  'Quem quer conhecer documentos como PPP e LTCAT',
  'Pessoas que desejam se preparar para oportunidades no ambiente industrial',
  'Iniciantes que querem desenvolver conhecimentos sobre segurança industrial',
];

export const rightsItems: string[] = [
  'Como interpretar seu holerite',
  'Insalubridade: 10%, 20% e 40%',
  'Periculosidade: 30%',
  'Diferença entre insalubridade e periculosidade',
  'Horas extras e adicionais',
  'Como conferir informações relacionadas ao FGTS',
  'O que são PPP e LTCAT',
  'Noções sobre aposentadoria especial',
  'Como solicitar documentos à empresa',
  'Como identificar possíveis inconsistências',
];

export const safetyItems: string[] = [
  'Fundamentos da segurança industrial',
  'Identificação de riscos',
  'Riscos físicos, químicos e biológicos',
  'Riscos ergonômicos e de acidentes',
  'EPIs e EPCs',
  'Sinalização de segurança',
  'Segurança em máquinas',
  'Prevenção de acidentes',
  'Inspeções e checklists',
  'Procedimentos de emergência',
  'Comportamento seguro',
];

export const modulesList: EbookModule[] = [
  {
    num: 'MÓDULO 01',
    title: 'Como Ler um Holerite Industrial',
    desc: 'Entenda as principais informações presentes no seu contracheque.',
    category: 'direitos',
  },
  {
    num: 'MÓDULO 02',
    title: 'Insalubridade por Função',
    desc: 'Conheça os diferentes percentuais e os critérios relacionados à caracterização da insalubridade.',
    category: 'direitos',
  },
  {
    num: 'MÓDULO 03',
    title: 'Periculosidade',
    desc: 'Entenda os principais conceitos relacionados ao adicional de periculosidade.',
    category: 'direitos',
  },
  {
    num: 'MÓDULO 04',
    title: 'PPP e LTCAT',
    desc: 'Aprenda o que são esses documentos e sua relação com as condições de trabalho.',
    category: 'direitos',
  },
  {
    num: 'MÓDULO 05',
    title: 'Aposentadoria Especial',
    desc: 'Conheça conceitos relacionados à exposição ocupacional a agentes nocivos.',
    category: 'direitos',
  },
  {
    num: 'MÓDULO 06',
    title: 'FGTS e Verbas Trabalhistas',
    desc: 'Aprenda quais informações podem ser conferidas nos documentos trabalhistas.',
    category: 'direitos',
  },
  {
    num: 'MÓDULO 07',
    title: 'Horas Extras e Adicionais',
    desc: 'Entenda como essas informações aparecem no holerite.',
    category: 'direitos',
  },
  {
    num: 'MÓDULO 08',
    title: 'Calculando Diferenças',
    desc: 'Aprenda a utilizar a calculadora e fazer simulações.',
    category: 'direitos',
  },
  {
    num: 'MÓDULO 09',
    title: 'Modelos de Requerimentos',
    desc: 'Modelos para solicitar documentos e informações à empresa.',
    category: 'direitos',
  },
  {
    num: 'MÓDULO 10',
    title: 'Quando Procurar um Profissional',
    desc: 'Saiba quando é importante procurar orientação jurídica especializada.',
    category: 'direitos',
  },
  {
    num: 'MÓDULO 11',
    title: 'Fundamentos da Segurança Industrial',
    desc: 'Os principais conceitos de segurança dentro de uma fábrica.',
    category: 'seguranca',
  },
  {
    num: 'MÓDULO 12',
    title: 'Identificação de Riscos',
    desc: 'Aprenda a reconhecer diferentes situações de risco.',
    category: 'seguranca',
  },
  {
    num: 'MÓDULO 13',
    title: 'EPIs e EPCs',
    desc: 'Conheça os principais equipamentos de proteção individual e coletiva.',
    category: 'seguranca',
  },
  {
    num: 'MÓDULO 14',
    title: 'Segurança em Máquinas',
    desc: 'Conceitos fundamentais para uma operação mais consciente e segura.',
    category: 'seguranca',
  },
  {
    num: 'MÓDULO 15',
    title: 'Prevenção de Acidentes',
    desc: 'Boas práticas para reconhecer e prevenir situações de risco.',
    category: 'seguranca',
  },
];

export const bonusList: BonusItem[] = [
  {
    num: 'BÔNUS 01',
    title: 'Tabela de Insalubridade por Atividade',
    desc: 'Guia visual para facilitar a compreensão dos percentuais e graus aplicáveis.',
    oldPrice: 'R$ 47,00',
  },
  {
    num: 'BÔNUS 02',
    title: 'Calculadora de FGTS',
    desc: 'Planilha para organização e conferência das informações de depósitos mensais.',
    oldPrice: 'R$ 37,00',
  },
  {
    num: 'BÔNUS 03',
    title: 'Planilha de Horas Extras',
    desc: 'Ferramenta complementar para simulações de adicionais de 50% e 100%.',
    oldPrice: 'R$ 27,00',
  },
  {
    num: 'BÔNUS 04',
    title: 'Modelo de Solicitação de PPP',
    desc: 'Documento editável pré-formatado para facilitar a solicitação formal ao RH.',
    oldPrice: 'R$ 37,00',
  },
  {
    num: 'BÔNUS 05',
    title: 'Modelo de Solicitação de LTCAT',
    desc: 'Material complementar formal para solicitação de laudo técnico de condições ambientais.',
    oldPrice: 'R$ 27,00',
  },
  {
    num: 'BÔNUS 06',
    title: 'Checklist de Conferência do Holerite',
    desc: 'Confira passo a passo os principais itens e descontos do seu contracheque.',
    oldPrice: 'R$ 29,00',
  },
  {
    num: 'BÔNUS 07',
    title: 'Checklist de Segurança Industrial',
    desc: 'Material prático para identificação de condições inseguras e prevenção no chão de fábrica.',
    oldPrice: 'R$ 37,00',
  },
  {
    num: 'BÔNUS 08',
    title: 'Guia de Aposentadoria Especial',
    desc: 'Material introdutório sobre exposição ocupacional, tempo especial e documentação no INSS.',
    oldPrice: 'R$ 47,00',
  },
  {
    num: 'BÔNUS 09',
    title: 'Simulado de Segurança Industrial',
    desc: 'Questões práticas para testar e fixar seus conhecimentos em normas e prevenção.',
    oldPrice: 'R$ 47,00',
  },
  {
    num: 'BÔNUS 10',
    title: 'Manual Antigolpes Previdenciários',
    desc: 'Aprenda a identificar sinais de alerta e promessas duvidosas antes de contratar qualquer serviço.',
    oldPrice: 'R$ 25,00',
  },
];

export const faqList: FaqItem[] = [
  {
    q: 'Preciso trabalhar em uma indústria?',
    a: 'Não. O conteúdo também pode ser muito útil para quem está se preparando para entrar no ambiente industrial e quer já iniciar conhecendo seus direitos, documentos como o holerite e as normas fundamentais de segurança do trabalho.',
  },
  {
    q: 'Preciso entender de Direito Trabalhista?',
    a: 'Não. O material foi desenvolvido com linguagem 100% simples, direta e visual, explicando os conceitos técnicos e jurídicos de forma descomplicada para qualquer trabalhador entender com clareza.',
  },
  {
    q: 'O material garante que vou receber dinheiro?',
    a: 'Não. O objetivo é ensinar você a identificar informações, conferir documentos e realizar simulações educativas. A existência ou exigibilidade de qualquer direito individual depende da análise fática e pericial do caso concreto.',
  },
  {
    q: 'O material substitui um advogado?',
    a: 'Não. Questões individuais, judiciais ou pleitos perante empresas e órgãos devem ser obrigatoriamente analisados e conduzidos por um profissional habilitado (como advogado trabalhista ou sindicato da categoria).',
  },
  {
    q: 'Posso usar pelo celular?',
    a: 'Sim! Todos os materiais digitais, planilhas e e-books podem ser acessados com facilidade pelo celular, tablet ou computador, a qualquer hora do dia.',
  },
  {
    q: 'O acesso expira?',
    a: 'Não. O plano oferece acesso vitalício aos materiais adquiridos, permitindo que você consulte as aulas, guias e planilhas sempre que precisar conferir um holerite ou documento.',
  },
  {
    q: 'Recebo os materiais imediatamente?',
    a: 'Sim. Imediatamente após a confirmação do pagamento, os links de acesso e download de toda a biblioteca e bônus são liberados diretamente no seu e-mail e na tela.',
  },
  {
    q: 'O certificado é reconhecido como curso técnico?',
    a: 'Não. Trata-se de um certificado de conclusão de formação livre de capacitação e aperfeiçoamento profissional, servindo como comprovação de estudos e enriquecimento do seu currículo.',
  },
];

export const whatsappFeedbacks: WhatsAppFeedback[] = [
  {
    initials: 'RS',
    name: 'Roberto Silva',
    location: 'S. Bernardo do Campo / SP • online',
    time: '09:42',
    text1: 'Fala Carlos! Cara, passei pra agradecer de coração pelo guia do holerite e a tabela de insalubridade!',
    highlightText:
      'Eu trabalho em estamparia pesada com ruído acima de 88dB e solvente. Peguei o checklist do curso e vi que nunca me pagaram o adicional de 40%! Com o modelo de requerimento, conversei com o sindicato e o RH abriu a conferência técnica!',
    tag: '✓ Em Análise de Revisão no RH',
  },
  {
    initials: 'DF',
    name: 'Daiane Ferreira',
    location: 'Betim / MG • online',
    time: '14:18',
    text1: 'Boa tarde! Passei só pra avisar que consegui pegar meu PPP da antiga fábrica de autopeças onde fiquei 9 anos.',
    highlightText:
      'Usei o modelo formal do curso e solicitei. Quando o documento chegou, olhei o guia e percebi que tinham omitido o ruído e o setor de pintura! Já protocolei a retificação antes de dar entrada na aposentadoria!',
    tag: '✓ PPP Retificado com Sucesso',
  },
  {
    initials: 'RA',
    name: 'Rodrigo Albuquerque',
    location: 'Campinas / SP • online',
    time: '18:05',
    text1: 'Professor, a calculadora de retroativos e a planilha de horas extras me abriram a mente completamente.',
    highlightText:
      'Eu fazia 2 horas extras todo sábado e achava que o cálculo da folha tava certo. Joguei na planilha e vi que não consideravam o DSR nem o adicional noturno proporcional! Todo operário de fábrica deveria ter esse material.',
    tag: '✓ Conferência de Folha Validada',
  },
];

export const studentTestimonials: TestimonialItem[] = [
  {
    name: 'Marcos Vinícius',
    age: 26,
    location: 'Contagem / MG',
    role: 'Operador de Prensa Industrial',
    image: studentMarcos,
    stars: 5,
    text: '“Trabalho em estamparia há 4 anos e nunca ninguém tinha me explicado como funciona o cálculo de insalubridade e o que precisava constar no LTCAT da fábrica. O material é muito fácil de entender, as planilhas são perfeitas e hoje não assino nada sem conferir meu holerite antes!”',
  },
  {
    name: 'Camila Rocha',
    age: 29,
    location: 'Caxias do Sul / RS',
    role: 'Auxiliar de Logística e Expedição',
    image: studentCamila,
    stars: 5,
    text: '“O checklist de holerite me abriu os olhos. Aprendi a conferir os depósitos de FGTS no aplicativo oficial e vi que faltavam meses que a empresa não tinha recolhido. Além disso, a parte de segurança industrial e EPIs me deu muita bagagem técnica!”',
  },
  {
    name: 'Lucas Andrade',
    age: 34,
    location: 'S. Bernardo do Campo / SP',
    role: 'Mecânico de Manutenção Industrial',
    image: studentLucas,
    stars: 5,
    text: '“Muito completo! Além da parte de direitos sobre periculosidade (que a gente que mexe com elétrica tem direito aos 30%), o módulo de segurança em máquinas e inspeção de riscos agregou demais. O certificado de conclusão já está anexado no meu currículo!”',
  },
  {
    name: 'Juliana Mendes',
    age: 25,
    location: 'Curitiba / PR',
    role: 'Inspetora de Controle de Qualidade',
    image: studentJuliana,
    stars: 5,
    text: '“O material vai direto ao ponto sem enrolação nem termos complicados de advogado. Consegui salvar as calculadoras no celular e conferi meus contracheques dos últimos 2 anos. Um pequeno valor que todo trabalhador de indústria precisa ter em mãos!”',
  },
];
