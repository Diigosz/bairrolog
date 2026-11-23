# BairroLog

Projeto acadêmico de extensão em empreendedorismo sobre logística para pequenos comércios de um bairro. A BairroLog é uma empresa fictícia.

## Equipe

| Integrante | Função proposta na empresa fictícia |
| --- | --- |
| Felipe Lima Peixe | Administração |
| Rodrigo Vieira | Operações logísticas |
| Lucas Ortega | Atendimento ao cliente |
| Caio Augusto | Planejamento de entregas |
| Gustavo Almeida | Suporte tecnológico |

## Conteúdo do site

- Apresentação da empresa, missão, visão e valores.
- Serviços com ilustrações e descrições.
- Equipe com avatares individuais.
- Formulário de contato demonstrativo.
- Consulta de CEP com preenchimento de endereço pela API ViaCEP.

## Como executar

1. Baixe os arquivos em **Code > Download ZIP**.
2. Extraia o ZIP e abra `index.html` no navegador.
3. Mantenha os arquivos CSS, JavaScript e SVG na mesma pasta do HTML.
4. A consulta de CEP requer conexão com a internet.

Não é necessário instalar dependências. O site usa HTML, CSS e JavaScript.

## Arquivos principais

- `index.html`: conteúdo e formulário.
- `style.css`: estilos e adaptação para telas menores.
- `script.js`: consulta de CEP e validação do formulário.
- Arquivos `.svg`: ilustrações e avatares.

## Teste da API

Digite `01001-000` e clique em **Consultar CEP**. O endereço retornado deve ser Praça da Sé, bairro Sé, São Paulo/SP. Também há tratamento de CEP com formato inválido, CEP inexistente e falha na consulta.

Documentação: [ViaCEP](https://viacep.com.br/).

## Limitações do protótipo

O formulário não envia nem armazena mensagens. Somente o CEP é enviado ao ViaCEP. Não há operações reais de transporte, cadastro de pedidos ou rastreamento de entregas.

A primeira hospedagem no Sites é privada para revisão. Este repositório público disponibiliza os códigos; não é, por si só, a hospedagem pública da página.
