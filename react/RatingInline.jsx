import React, { useContext, useEffect } from 'react'
import { ProductSummaryContext } from 'vtex.product-summary'
import { injectTrustVoxScripts } from "./services/ScriptHandler";

const RatingInline = () => {
  const { product } = useContext(ProductSummaryContext)

  if (!product) {
    return null
  }

  useEffect(() => {
    injectTrustVoxScripts();
  }, [])

  return (
    <div data-trustvox-product-code={product.productId} />
  )
}

export default RatingInline
