export const setProduct = ({ productId, productName, imageUrl, productReference, sellers, gtin = null, ean = null, department_id = null, productGroup }) => {

  if (window._trustvox &&
    window._trustvox.find(i => i[0] === '_productId') &&
    window._trustvox.find(i => i[0] === '_productId')[1] &&
    window._trustvox.find(i => i[0] === '_productId')[1] === String(productId)) {
    return null
  }

  if (window._trustvox_initializer) window._trustvox_initializer.cleanup();

  window._trustvox = [];
  window._trustvox.push(['_storeId', window.appsetting_trustvox_storeId]);
  window._trustvox.push(['_productId', productId]);
  window._trustvox.push(['_productName', productName]);
  window._trustvox.push(['_productPhotos', imageUrl]);

  if (sellers)
    window._trustvox.push(['_sellers', sellers])

  if (department_id)
    window._trustvox.push(['_productExtraAttributes', { "department_id": department_id }]);

  if (gtin)
    _trustvox.push(['_productGtins', ["gtin", gtin]]);

  if (ean)
    _trustvox.push(['_productEans', ["ean", ean]]);

  if (productGroup && Boolean(window.appsetting_trustvox_enableProductGroup))
    _trustvox.push(['_productGroup', productGroup]);

  if (window._trustvox_initializer) window._trustvox_initializer.initialize();
}

export const cleanUpScript = () => {
  const rateContainer = document.querySelector('.ts-shelf-container');
  if(rateContainer){
    rateContainer.remove();
  }
}

export const injectMainScript = () => {
  // Main script
  if (!document.querySelector('#trustvox_script_main')) {
    const mainScript = document.createElement("script");
    mainScript.type = "text/javascript";
    mainScript.setAttribute("id", "trustvox_script_main");
    mainScript.innerHTML = `var _trustvox_shelf_rate = [];
      _trustvox_shelf_rate.push(['_storeId', ${window.appsetting_trustvox_storeId}]);
      _trustvox_shelf_rate.push(['_productContainer', 'body']);
      _trustvox_shelf_rate.push(['_watchSubtree', true]);`;
    document.querySelector("head").appendChild(mainScript);
  }
}

export const injectWidgetScripts = () => {
  cleanUpScript();
  injectMainScript();

  // All scripts
  const scriptTags = [
    window.appsetting_trustvox_staging === "true" ? "https://static.trustvox.com.br/trustvox-sincero-staging/sincero.js" : "https://static.trustvox.com.br/sincero/sincero.js",
    window.appsetting_trustvox_staging === "true" ? "https://storage.googleapis.com/trustvox-rate-staging/widget.js" : "https://rate.trustvox.com.br/widget.js"
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

export const injectCertificateScript = () => {
  injectMainScript();

  const scriptTag = window.appsetting_trustvox_staging === "true" ? "https://storage.googleapis.com/trustvox-certificate-widget-staging/widget.js" : "https://certificate.trustvox.com.br/widget.js";

  // Delete current script tag
  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].getAttribute('src') == scriptTag) {
      scripts[i].remove();
    }
  }

  // Add new script tag
  var newScript = document.createElement("script");
  newScript.type = "text/javascript";
  newScript.src = scriptTag;
  document.querySelector("body").appendChild(newScript);
}

export const injectColtScript = () => {
  injectMainScript();

  if (!document.querySelector('#trustvox_script_colt')) {
    const mainScript = document.createElement("script");
    mainScript.type = "text/javascript";
    mainScript.setAttribute("id", "trustvox_script_colt");
    mainScript.innerHTML = `var _trustvox_colt = [];
    _trustvox_colt.push(["_storeId", ${window.appsetting_trustvox_storeId}], ["_limit", ${window.appsetting_trustvox_colt}]);`;
    document.querySelector("head").appendChild(mainScript);
  }

  const scriptTag = window.appsetting_trustvox_staging === "true" ? "https://storage.googleapis.com/trustvox-colt-staging/colt.min.js" : "https://colt.trustvox.com.br/colt.min.js";

  // Delete current script tag
  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].getAttribute('src') == scriptTag) {
      scripts[i].remove();
    }
  }

  // Add new script tag
  var newScript = document.createElement("script");
  newScript.type = "text/javascript";
  newScript.src = scriptTag;
  document.querySelector("body").prepend(newScript);
}
