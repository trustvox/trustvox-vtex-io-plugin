import React, { useContext, useEffect } from 'react'
import { ProductContext } from 'vtex.product-context'
import { injectTrustVoxScripts, setProduct } from "./services/ScriptHandler";

import styles from './styles.css'

const Reviews = () => {
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
    });

    injectTrustVoxScripts();
  }, [product.productId]);

  return (
    <>
      <div id="trustvox-reviews" className={styles.trustvoxContainer}>
        <div id="_trustvox_widget" />
      </div>
    </>
  )
}

export default Reviews
