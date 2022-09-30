export const setProduct = ({ productId, productName, imageUrl, productReference, sellers, gtin = null, ean = null, department_id = null }) => {
  window._trustvox = [];
  window._trustvox.push(['_storeId', window.appsetting_trustvox_storeId]);
  window._trustvox.push(['_productId', productId]);
  window._trustvox.push(['_productName', productName]);
  window._trustvox.push(['_productPhotos', imageUrl]);

  if (sellers)
    window._trustvox.push(['_sellers', sellers])

  if (productReference && productReference.length)
    window._trustvox.push(['_productGroup', productReference])

  if (department_id)
    window._trustvox.push(['_productExtraAttributes', { "department_id": department_id }]);

  if (gtin)
    _trustvox.push(['_productGtins', ["gtin", gtin]]);

  if (ean)
    _trustvox.push(['_productEans', ["ean", ean]]);
}

export const injectTrustVoxScripts = () => {
  // Main script
  if (!document.querySelector('#trustvox_script_main')) {
    const mainScript = document.createElement("script");
    mainScript.type = "text/javascript";
    mainScript.setAttribute("async", "true");
    mainScript.setAttribute("id", "trustvox_script_main");
    mainScript.innerHTML = `var _trustvox_shelf_rate = [];
      _trustvox_shelf_rate.push(['_storeId', ${window.appsetting_trustvox_storeId}]);
      _trustvox_shelf_rate.push(['_productContainer', 'body']);
      _trustvox_shelf_rate.push(['_watchSubtree', true]);`;

    document.querySelector("head").appendChild(mainScript);
  }

  // All scripts
  const scriptTags = [
    window.appsetting_trustvox_staging ? "https://storage.googleapis.com/trustvox-certificate-widget-staging/widget.js" : "https://certificate.trustvox.com.br/widget.js",
    window.appsetting_trustvox_staging ? "https://storage.googleapis.com/trustvox-colt-staging/colt.min.js" : "https://colt.trustvox.com.br/colt.min.js",
    window.appsetting_trustvox_staging ? "https://static.trustvox.com.br/trustvox-sincero-staging/sincero.js" : "https://static.trustvox.com.br/sincero/sincero.js",
    window.appsetting_trustvox_staging ? "https://storage.googleapis.com/trustvox-rate-staging/widget.js" : "https://rate.trustvox.com.br/widget.js"
  ];

  const isScriptIncluded = (src) => {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++)
      if (scripts[i].getAttribute('src') == src) return true;
    return false;
  }

  for (const script of scriptTags) {
    if (isScriptIncluded(script)) continue;

    var newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.src = script;
    newScript.setAttribute("async", "true");

    document.querySelector("body").appendChild(newScript);
  }
}
