import { canUseDOM } from 'vtex.render-runtime'

import type { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {
  switch (e.data.eventName) {
    case 'vtex:productView': {
      /*
      const { product } = e.data

      //window._trustvox_initializer.cleanup();

      window._trustvox.push(['_productId', product.productId])
      window._trustvox.push(['_productName', product.productName])
      window._trustvox.push(['_productPhotos', [product.items[0].imageUrl]])

      _trustvox.push(['_productGtins', ["gtin", "outro-gtin"]]);
      _trustvox.push(['_productEans', ["ean", "outro-ean"]]);
      var extra = {"department_id": VARIAVEL-DEPARTAMENTO}; _trustvox.push(['_productExtraAttributes', extra]);
      */

      //window._trustvox_initializer.initialize();

      break
    }

    default: {
      break
    }
  }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
