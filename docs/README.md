# RA Trustvox

![RA TRUSTVOX](https://ra-trustvox.intercom-attachments-1.com/i/o/386735661/6c801ddb284eaec619f98d66/file-u9QW9ZFVbA.png)

## Description

This is a Trustvox first party integration app that is responsible for showing the components related to Trustvox Reviews in your store.

## Usage

To use the RA Trustvox components add the [product reviews](https://github.com/vtex-apps/product-review-interfaces/tree/master/example
) blocks into your theme as you would with any other block.

## Publish the App

1. First of all, you need clone this repo;

2. Now, open the source code in the text editor and open the `manifest.json` file;
![Manifest JSON app](/docs/assets/tree_manifest.json.png)

3. In this file, you need to change the `vendor` value. This value, is exactly the name of the vtex account that you need to install the app. The account name is present in the myvtex URL
Example: `https://{account}.myvtex.com`
```json
  {
    ...
    "name": "trustvox",
    "vendor": "{account}",
    ...
  }
```

4. Do you need to request to VTEX team approval you to publish this app. So access [this link](https://forms.gle/f7bYdTA7tfdfB5tt7) and fill the fields accordingly with your account.

```
Obs: If you are a VTEX partner, this process will take 30 minutes approximately. If not, can take 3 days to the vtex appoval your request
```

* The app name is: `trustvox`
* The account name is that you change in the `manifest.json` file

* In the builders checkbox, check the follow builders:

[x] - react
[x] - styles
[x] - messages
[x] - store
[x] - pixel
[x] - docs

* in the app major, fill `0`


5. After the vtex approval your request in the previous step, you will be able to publish the app. In a terminal, log in the store that you need to install the app. Run in the command line: `vtex login {account}`. Replace the `{account}`.

5. To effective publish the app, go to the project folder in your command line and run: `vtex publish`

5. Now, install the app using the `vtex install` command

## Configuration

1. In your VTEX account's admin, open the **App** section and select the RA Trustvox box;
![RA TRUSTVOX App](/docs/assets/app-settings.png)

| Prop name      | Type     | Description                                          | Default |
| - | - | - | - |
| `Store ID` | `string` | the id from RA Trustvox | |
| `Quantity of reviews on colt` | `number` | the number of reviews that cold will have | `7`

2. Fill in your **Store ID**. You can find your ID at the [Trustvox preferences](https://app.trustvox.com.br/auth/login), in Company page;
![RA TRUSTVOX Preferences page](/docs/assets/install-preferences-page.png)



## Blocks

⚠️ This app fills the standard VTEX review blocks with content using abstract interfaces from `vtex.product-review-interfaces`. The **VTEX review blocks** are:

| Block | Description | Preview |
| - | - | - |
| `product-rating-inline` | This block can be added in product shelves. It renders the widget that lists the average rating stars and amount of reviews for the product being viewed. | ![product-rating-inline block](/docs/assets/product-rating-inline.png) |
| `product-rating-summary` | This block can be added to the product page (`store.product`). It renders the widget that lists the average rating stars and amount of reviews for the product being viewed. | ![product-rating-inline block](/docs/assets/product-rating-summary.png) |
| `product-reviews` | This block can be added to the product page (`store.product`) and renders the main widget which lists any reviews or answered questions for the product being viewed as well as a form to ask a new question, ff the product did not have the question or review, it will be displayed as seen from the store. | ![product-rating-inline block](/docs/assets/product-reviews.png) |

This app also adds two new blocks:

| Block | Description | Preview |
| - | - | - |
| `certificate-ratrustvox` | This block renders the *Reviews Verdadeiros* certificate widget, you can se more on [this page](https://help.trustvox.com.br/pt-BR/articles/5551970-como-adicionar-e-exibir-o-selo-de-reviews-verdadeiros-no-seu-site). | ![certificate-ratrustvox block](/docs/assets/certificate-ratrustvox.png) |
| `colt-ratrustvox` | This block renders the *Carrossel de opiniões* widget, you can se more on [this page](https://help.trustvox.com.br/pt-BR/articles/5557670-como-adicionar-as-opinioes-de-loja-carrossel-da-ra-trustvox-em-seu-site). | ![colt-ratrustvox block](/docs/assets/colt-ratrustvox.png) |

### Styles API

This app provides some CSS classes as an API for style customization.

To use this CSS API, you must add the `styles` builder and create an app styling CSS file and add `{account}.trustvox` to your theme `dependencies`.

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

3. Create a file called `{account}.trustvox.css` inside the `styles/css` folder. Add your custom styles:

```css
.container {
  margin-top: 10px;
}
```
