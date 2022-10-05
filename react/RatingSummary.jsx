import React, { useContext, useEffect } from 'react'
import { ProductContext } from 'vtex.product-context'
import { FormattedMessage } from 'react-intl'
import { injectWidgetScripts, setProduct } from "./services/ScriptHandler";

const RatingSummary = () => {
  const { product } = useContext(ProductContext)

  if (!product) {
    return null
  }

  const { productName, productId, items, productReference } = product

  useEffect(() => {
    setProduct({
      productId,
      productName,
      imageUrl: items[0].images[0].imageUrl,
      productReference,
      sellers: null,
      gtin: null,
      ean: null,
      department_id: null
    })

    injectWidgetScripts();
  }, [product.productId]);

  return (
    <div className="trustvox-rating">
      <a
        className="trustvox-fluid-jump trustvox-widget-rating"
        href="#trustvox-reviews"
      >
        <div
          className="trustvox-shelf-container"
          data-trustvox-product-code-js={productId}
          data-trustvox-should-skip-filter="true"
          data-trustvox-display-rate-schema="true"
        />
        <span className="rating-click-here">
          <FormattedMessage
            id="rating-click-here"
          />
        </span>
      </a>
    </div>
  )
}

export default RatingSummary
