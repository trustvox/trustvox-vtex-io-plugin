<h1>
  <img src="./assets/RA-Review-Color.svg" alt="RA Reviews" width="200" />
</h1>

The RA Reviews VTEX IO plugin is an integration solution between the VTEX IO e-commerce platform and the RA Reviews review platform. It allows merchants to display product review widgets and the trust seal directly on their pages, enriching the user experience and increasing store credibility.

![RA Reviews](./assets/sincero.png)

## Plugin Installation

To install the RA Reviews plugin for VTEX IO, follow these steps:

### Prerequisites

- [Node JS](https://nodejs.org/en/download)
- [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install)

### Installation

1. To clone the project, run the following command:

```
git clone https://github.com/trustvox/trustvox-vtex-io-plugin.git
```

2. In the [manifest.json](../manifest.json) file, change the value of `vendor` to the name of the VTEX account that is performing the installation.

NOTE: The account name is present in the myvtex URL, Example: https://{account}.myvtex.com

3. Open the terminal in this project's folder, and follow these steps:

- Execute the following command to log in to the VTEX account:
   
```
vtex login {account}
```

Replace `{account}`

- Execute the following command to publish the app in the VTEX app repository:

```
vtex publish
```

- Execute the following command to install the app:

```
vtex install
```

After this, you should be able to find the RA Reviews app in the `App Management` section in your VTEX dashboard.

![App Management](./assets/app-management.png)

4. Now it's necessary to configure the RA Reviews app in the VTEX administrative panel. For this, follow these steps:

- In the `App Management` section of the VTEX dashboard, select the RA Reviews app, you should see the following screen:

![RA Reviews Configuration](./assets/config-ra-trustvox-vtex-io.png)

- Fill in the `Store ID` field with your **store ID**. You can find your ID in the preferences menu in the [RA Reviews Admin Panel](https://app.trustvox.com.br/auth/login), on the company page:

![RA Reviews Preferences page](./assets/install-preferences-page.png)

### ⚠️ If validation in the homologation environment is necessary, it is required to activate the `Enable test environment` option and provide the store ID of the RA Reviews test environment.

5. After installation, go to your store's project (store-theme) and edit the `manifest.json` file, in the project dependencies add the RA Reviews app dependency.

```json
{
  ...
   "dependencies": {
    ...
    "{account}.trustvox": "0.x",
    ...
   } 
  ...
}
```

Replace {account} with your VTEX account.

Upload the changes to your store, after this, you will be able to add the RA Reviews app blocks.

## Enable product grouping

- Find and select the RA Reviews app. The application configuration screen will be displayed as shown below:

![Product group](./assets/product-group.png)

- Select the Enable Review Mirroring checkbox to enable product grouping.

- Click the Save button to apply the changes.

## Block Configuration

This app provides replacements for the [Product Reviews](https://github.com/vtex-apps/product-review-interfaces/tree/master/example) blocks and also provides other blocks.

After installation, you can add the following blocks to your pages:

### block: product-rating-inline

This block can be added to product shelves. It renders the widget that lists the average star ratings and the number of comments for the product being viewed.

![product-rating-inline block](./assets/product-rating-inline.png)

### block: product-rating-summary

This block can be added to the product page (`store.product`). It renders the widget that lists the average star ratings and the number of comments for the product being viewed.

![product-rating-summary block](./assets/product-rating-summary.png)

### block: product-reviews

This block can be added to the product page (`store.product`) and renders the main widget that lists any comments or answered questions for the product being viewed, as well as a form to make a new question, if the product does not have the question or review, it will be displayed as seen in the store.

![product-reviews block](./assets/product-reviews.png)

### block: certificate-ratrustvox

This block renders the True Reviews certificate widget, you can see more about [here](https://faleconosco.reclameaqui.com.br/s/article/Como-adicionar-e-exibir-o-Selo-de-Avalia%C3%A7%C3%B5es-Confi%C3%A1veis-do-Reclame-AQUI-no-seu-site?language=pt_BR).

![certificate-ratrustvox block](./assets/certificate-ratrustvox.png)

### block: colt-ratrustvox

This block renders the Opinions Carousel widget, you can see more about [here](https://faleconosco.reclameaqui.com.br/s/article/Como-adicionar-as-opini%C3%B5es-de-loja-carrossel-da-RA-Reviews-em-seu-site?language=pt_BR).

![colt-ratrustvox block](./assets/colt-ratrustvox.png)

## Style API

This app provides some CSS classes as an API for style customization.

To use this CSS API, you must add the styles builder and create an app style CSS file and add `{account}.trustvox` to your theme `dependencies`.


1. Add the `styles` builder to your `manifest.json`:

```json
  "builders": {
    "styles": "1.x"
  }
```

2. Add `{account}.trustvox` to `dependencies` in your `manifest.json`:

```json
  "dependencies": {
    "{account}.trustvox": "0.x"
  }
```

3. Create a file named `{account}.trustvox.css` inside the `styles/css` folder. Add your custom styles:

```css
.container {
  margin-top: 10px;
}
```

## Production Deployment

After conducting integration tests with the RA Trustvox platform, open the terminal in this project's folder and execute the following command to make the Trustvox app available for use in production:

```
vtex deploy
```

## Useful Links

[Requirements and First Steps - VTEX Platform / VTEX IO](https://faleconosco.reclameaqui.com.br/s/article/Requisitos-e-primeiros-passos-Plataforma-VTEX-VTEX-IO?language=pt_BR)

[Required Access for Integration on the VTEX Platform](https://faleconosco.reclameaqui.com.br/s/article/Acessos-necess%C3%A1rios-para-integra%C3%A7%C3%A3o-na-plataforma-VTEX?language=pt_BR)

[How to Display RA Trustvox Opinions on the VTEX IO Platform](https://faleconosco.reclameaqui.com.br/s/article/Como-exibir-as-opini%C3%B5es-da-RA-Reviews-na-plataforma-VTEX-IO?language=pt_BR)
