# BossaBox Challenge

Esse repositório compõe o desafio da [BossaBox](https://www.bossabox.com/) proposto no ano de 2020. O desafio requer a criação de uma API que dê suporte as principais funcionalidades encontradas em aplicações do estilo VUTTR (Very Useful Tools to Remember).

> **OBS:** O desafio foi encontrado em [@CollabCodeTech](https://github.com/CollabCodeTech/backend-challenges). Repositório destinado para pessoas que queiram testar suas habilidades através de desafios técnicos de vagas de trabalho.

## Principais Tecnologias

| **Tecnologia** |     |
| -------------- | --- |
| Node.js        | ✓   |
| Express        | ✓   |
| Typeorm        | ✓   |
| PostgreSQL     | ✓   |
| Docker         | ✓   |

## Como executar

> **OBS:** Certifique-se de ter o Docker instalado em sua máquina.

Com o Docker, utilizando o Docker Compose para agilizar o processo de gerenciamento dos containers, foram criados dois serviços: Um do **banco de dados** e outro da **aplicação**.

### Executando a aplicação sem container Docker

Caso você não queira utilizar o serviço que criaria um container da aplicação via Docker, você pode subir apenas o serviço do **banco de dados**. Para isso execute na raiz do projeto:

```
docker compose up -d bossabox-db
```

- Altere o _host_ em **db -> _AppDataSource.ts_** para 'localhost'.

- Execute a migration com: `yarn run:migrations` ou `npm run run:migrations` para criar a tabela de _ferramentas_.

- Execute a aplicação com: `yarn dev` ou `npm run dev`

### Executando a aplicação com container Docker

Suba todos os serviços do Docker Compose com:

```
docker compose up -d
```

Para executar as migrations, você precisará ter acesso ao ambiente criado pelo Docker onde a aplicação está rodando, para isso execute no terminal após subir os serviços:

```
docker exec -it bossabox-api /bin/bash
```

Já no ambiente, basta rodar a migration com:
`yarn run:migrations` ou `npm run run:migrations`

> **OBS**: Você pode acompanhar os logs da aplicação em tempo real com: `docker logs -f bossabox-api`
