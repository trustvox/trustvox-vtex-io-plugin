# RA Trustvox

![RA TRUSTVOX](https://ra-trustvox.intercom-attachments-1.com/i/o/386735661/6c801ddb284eaec619f98d66/file-u9QW9ZFVbA.png)

Veja a documentação em Inglês [aqui](./docs/README_EN.md).

## Descrição

Este é um aplicativo de integração da Trustvox responsável por mostrar os componentes relacionados às avaliações da Trustvox em sua loja.

## Uso

Para usar os componentes do RA Trustvox, adicione os blocos de [Reviews de produto](https://github.com/vtex-apps/product-review-interfaces/tree/master/example) ao seu tema como faria com qualquer outro bloco.

## Publicar o aplicativo

1. Antes de tudo, você precisa clonar este repositório:

```
git clone https://github.com/trustvox/trustvox-vtex-io-plugin.git
```

2. Agora, abra o código-fonte no editor de texto e abra o arquivo `manifest.json`:

![Manifest JSON app](/docs/assets/tree_manifest.json.png)

3. Neste arquivo, você precisa alterar o valor de `vendor`. Esse valor é exatamente o nome da conta vtex que você precisa para instalar o aplicativo. O nome da conta está presente na URL myvtex, Exemplo:https://{account}.myvtex.com

```json
  {
    ...
    "name": "trustvox",
    "vendor": "{account}",
    ...
  }
```

4. Você precisa solicitar a aprovação da equipe da VTEX para publicar este aplicativo. Então acesse [este link](https://forms.gle/f7bYdTA7tfdfB5tt7) e preencha os campos de acordo com a sua conta.

```
Obs: Se você for um parceiro VTEX, este processo levará aproximadamente 30 minutos. Caso contrário, pode levar até 3 dias para a vtex aprovar sua solicitação.
```

* O nome do aplicativo é: `trustvox`

* O nome da conta você altera no arquivo `manifest.json`

* a caixa de seleção dos builders, marque os seguintes builders:

[x] - react
[x] - styles
[x] - messages
[x] - store
[x] - pixel
[x] - docs

* no aplicativo principal, preencha `0`


5. Após a vtex aprovar sua solicitação na etapa anterior, você poderá publicar o aplicativo. Em um terminal, faça login na loja que você precisa para instalar o aplicativo. Execute na linha de comando: `vtex login {account}`. Substitua o `{account}`.


6. Para publicar efetivamente o aplicativo, vá para a pasta do projeto em sua linha de comando e execute: `vtex publish`

5. Agora, instale o aplicativo usando o comando `vtex install`

## Configuração

1. No admin da sua conta VTEX, abra a seção **App** e selecione a caixa RA Trustvox:

⚠️ Lembre de tirar a seleção de staging.

![RA TRUSTVOX App](/docs/assets/app-settings.png)

| Nome da Propriedade      | Modelo     | Descrição                                          | Padrão |
| - | - | - | - |
| `Store ID` | `string` | o id da RA Trustvox | |
| `Quantity of reviews on colt` | `number` | o número de comentários que o colt terá | `7`

2. Preencha o **ID da sua loja**. Você pode encontrar seu ID menu preferências no [Painel administrativo da Trustvox](https://app.trustvox.com.br/auth/login), na página da empresa:

![RA TRUSTVOX Preferences page](/docs/assets/install-preferences-page.png)


## Blocos

⚠️ Este aplicativo preenche os blocos de review padrão da VTEX, com conteúdo usando as interfaces abstratas de `vtex.product-review-interfaces`. Os **blocos de review da VTEX** são:

| Bloco | Descrição | Visualização |
| - | - | - |
| `product-rating-inline` | Este bloco pode ser adicionado nas prateleiras de produtos. Ele renderiza o widget que lista as média de avaliações por estrela quantidade de comentários para o produto que está sendo visualizado. | ![product-rating-inline block](/docs/assets/product-rating-inline.png) |
| `product-rating-summary` | Este bloco pode ser adicionado à página do produto (`store.product`). Ele renderiza o widget que lista média de avaliações por estrela e a quantidade de comentários para o produto que está sendo visualizado. | ![product-rating-inline block](/docs/assets/product-rating-summary.png) |
| `product-reviews` | Este bloco pode ser adicionado à página do produto (`store.product`) e renderiza o widget principal que lista quaisquer comentários ou perguntas respondidas para o produto que está sendo visualizado, bem como um formulário para fazer uma nova pergunta, se o produto não tiver a pergunta ou review, ele será exibido como visto na loja. | ![product-rating-inline block](/docs/assets/product-reviews.png) |

Este aplicativo também adiciona dois novos blocos:

| Bloco | Descrição | Visualização |
| - | - | - |
| `certificate-ratrustvox` | Este bloco renderiza o widget de certificado *Reviews Verdadeiros*, você pode ver mais [nesta página](https://help.trustvox.com.br/pt-BR/articles/5551970-como-adicionar-e-exibir-o-selo-de-reviews-verdadeiros-no-seu-site). | ![certificate-ratrustvox block](/docs/assets/certificate-ratrustvox.png) |
| `colt-ratrustvox` | Este bloco renderiza o widget de *Carrossel de opiniões*, você pode ver mais [nesta página](https://help.trustvox.com.br/pt-BR/articles/5557670-como-adicionar-as-opinioes-de-loja-carrossel-da-ra-trustvox-em-seu-site). | ![colt-ratrustvox block](/docs/assets/colt-ratrustvox.png) |

### API de estilos

Este aplicativo fornece algumas classes CSS como uma API para personalização de estilo.

Para usar esta API CSS, você deve adicionar o `styles` builder e criar um arquivo CSS de estilo de aplicativo e adicionar `{account}.trustvox` ao seu tema `dependencies`.


1. Adicione o `styles` builder ao seu `manifest.json`:

```json
  "builders": {
    "styles": "1.x"
  }
```

2. Adicione `{account}.trustvox` ao `dependencies` no seu `manifest.json`:

```json
  "dependencies": {
    "{account}.trustvox": "0.x"
  }
```

3. Crie um arquivo chamado `{account}.trustvox.css` dentro da pasta `styles/css`. Adicione seus estilos personalizados: 

```css
.container {
  margin-top: 10px;
}
```
