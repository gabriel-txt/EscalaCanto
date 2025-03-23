# Modelo Entidade Relacionamento

- [Modelo Entidade Relacionamento](#modelo-entidade-relacionamento)
  - [Modelo](#modelo)
    - [Material de Apoio teórico](#material-de-apoio-teórico)
  - [Entidades](#entidades)
    - [Músicas](#músicas)
    - [Artista](#artista)
    - [Músicos](#músicos)
    - [Escala Culto](#escala-culto)
    - [Função](#função)
  - [Notas](#notas)
    - [Versão](#versão)
  - [Histórico dos Encontros](#histórico-dos-encontros)
    - [2025/Mar/15](#2025mar15)
      - [Anotações do Bill](#anotações-do-bill)
      - [Anotações do Gabriel](#anotações-do-gabriel)

## Modelo

- [draw.io](https://app.diagrams.net/#HChewieSoft%2FEscalaCanto%2Fmain%2Fmodelo_entidade_relacionamento.drawio#%7B%22pageId%22%3A%225vH7gjnpK38CFrfJnVCy%22%7D)

![DER](./assets/modelo_entidade_relacionamento-MER_ver3.svg)

### Material de Apoio teórico

:link: [DevMedia - MER e DER: Modelagem de Bancos de Dados](https://www.devmedia.com.br/mer-e-der-modelagem-de-bancos-de-dados/14332)

---

## Entidades

### Músicas

São as músicas que vamos executar nos cultos, evento set cetera

### Artista

É o profissional que compoe ou interpreta a música.

### Músicos

São os integrates do ministério de música de cada igreja local, sejam instrumentistas, sejam vocalistas

### Escala Culto

São os dias oficiais de reunião dos membros e eventos  da comunidade

### Função

O papel exercido pelos músicos escalados no culto ou seu substituto(a)

## Notas

### Versão

Adicionaremos além do `Artista` a versão que ele está interpretando, pois pode acontecer dele tocar versões diferentes da mesma música, inicialmente será um **`atributo`** da entidade `Músicas`.

Ex. versão estudio,e a versão ao vivo ter outra roupagem

## Histórico dos Encontros

### 2025/Mar/15

Juntamos Jorge Ferrari, Bill e Gabriel, para pensarmos nos atributos do modelo. 

#### Anotações do Bill

```text
Entidade artista 
✅ Nome
✅ Fk música (pivot)

Entidade música
✅ Nome
✅ Foreign Key Tom
✅ Fk artista (pivot)
✅ Bpm (pivot)
✅ Cifras (pivot)
✅ Lyrics (pivot?)
✅ Link_versão (pivot)

Entidade tonalidade
✅ Tom

Entidade função
✅ Nome

Entidade músico
✅ Nome
✅ docId (CPF)

EscalaCuto
✅ Data (datetime)
✅ Alterar nome do atributo escalaculto para "Evento"
✅ FK Tipo
✅ Descrição

✅ TipoEvento (adicionar esta entidade)
✅ Nome
```

#### Anotações do Gabriel

```text
# Entidades

- Artista
    - Nome ✅
    - fk_música (Pivô) ✅
- Música
    - Nome ✅
    - fk_tom (Foreign Key) ✅
    - fk_artista (Pivô) ✅
    - BPM (Pivô) ✅
    - Cifra (Pivô) ✅
    - Lyrics (Pivô?) ✅
    - Link (Pivô) ✅
- Tonalidade
    - Tom ✅
- Função
    - Nome ✅
- Músico
    - Nome ✅
    - Doc. ID (CPF) ✅
- EscalaCulto (Alterar para Evento) ✅
    - Data (Datetime) ✅
    - fk_tipo (Pivô) ✅
    - Descrição ✅
- Tipo evento ✅
```

- Modelo antes das alterações nas Entidades

![DER](./modelo_entidade_relacionamento.drawio.svg)

- Modelo **depois** das alterações nas Entidades

  - [x] Entidades `escala_culto` alterada para `evento`
  - [x] Adição da entidade `tipo_evento`

![DER](./assets/modelo_entidade_relacionamento-MER_ver3.svg)