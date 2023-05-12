export interface Municipio {
  id: number;
  nome: string;
  microrregiao: Microrregiao;
  'regiao-imediata': RegiaoImediata;
}

export interface Microrregiao {
  id: number;
  nome: string;
  mesorregiao: Mesorregiao;
}

export interface Mesorregiao {
  id: number;
  nome: string;
  UF: Uf;
}

export interface Uf {
  id: number;
  sigla: Sigla;
  nome: Nome;
  regiao?: Uf;
}

export enum Nome {
  Acre = 'Acre',
  Alagoas = 'Alagoas',
  Amapá = 'Amapá',
  Amazonas = 'Amazonas',
  Bahia = 'Bahia',
  Ceará = 'Ceará',
  CentroOeste = 'Centro-Oeste',
  DistritoFederal = 'Distrito Federal',
  EspíritoSanto = 'Espírito Santo',
  Goiás = 'Goiás',
  Maranhão = 'Maranhão',
  MatoGrosso = 'Mato Grosso',
  MatoGrossoDoSul = 'Mato Grosso do Sul',
  MinasGerais = 'Minas Gerais',
  Nordeste = 'Nordeste',
  Norte = 'Norte',
  Paraná = 'Paraná',
  Paraíba = 'Paraíba',
  Pará = 'Pará',
  Pernambuco = 'Pernambuco',
  Piauí = 'Piauí',
  RioDeJaneiro = 'Rio de Janeiro',
  RioGrandeDoNorte = 'Rio Grande do Norte',
  RioGrandeDoSul = 'Rio Grande do Sul',
  Rondônia = 'Rondônia',
  Roraima = 'Roraima',
  SantaCatarina = 'Santa Catarina',
  Sergipe = 'Sergipe',
  Sudeste = 'Sudeste',
  Sul = 'Sul',
  SãoPaulo = 'São Paulo',
  Tocantins = 'Tocantins',
}

export enum Sigla {
  AC = 'AC',
  Al = 'AL',
  Am = 'AM',
  Ap = 'AP',
  Ba = 'BA',
  Ce = 'CE',
  Co = 'CO',
  Df = 'DF',
  Es = 'ES',
  Go = 'GO',
  MS = 'MS',
  MT = 'MT',
  Ma = 'MA',
  Mg = 'MG',
  N = 'N',
  Ne = 'NE',
  PE = 'PE',
  PR = 'PR',
  Pa = 'PA',
  Pb = 'PB',
  Pi = 'PI',
  Rj = 'RJ',
  Rn = 'RN',
  Ro = 'RO',
  Rr = 'RR',
  Rs = 'RS',
  S = 'S',
  SE = 'SE',
  SP = 'SP',
  Sc = 'SC',
  To = 'TO',
}

export interface RegiaoImediata {
  id: number;
  nome: string;
  'regiao-intermediaria': Mesorregiao;
}
