# Modelo Entidade Relacionamento

- [Modelo Entidade Relacionamento](#modelo-entidade-relacionamento)
  - [Modelo](#modelo)
  - [Entidades](#entidades)
    - [Músicas](#músicas)
    - [Artista](#artista)
    - [Músicos](#músicos)
    - [Escala Culto](#escala-culto)
    - [Função](#função)
  - [Notas](#notas)
    - [Versão](#versão)

## Modelo

- [draw.io](https://app.diagrams.net/#HChewieSoft%2FEscalaCanto%2Fmain%2Fmodelo_entidade_relacionamento.drawio#%7B%22pageId%22%3A%225vH7gjnpK38CFrfJnVCy%22%7D)

![DER](./modelo_entidade_relacionamento.drawio.svg)

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
