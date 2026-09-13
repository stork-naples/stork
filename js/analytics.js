(function () {
  // Replace with your Google Analytics 4 Measurement ID, e.g. G-ABC123XYZ.
  var MEASUREMENT_ID = "G-B5917J9Y81";

  if (!MEASUREMENT_ID || MEASUREMENT_ID.indexOf("XXXX") !== -1) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(MEASUREMENT_ID);
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID);
})();
