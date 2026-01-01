/* =====================================================
   STARTBANNER: NY SCHEMAVERSION
   Visas överst på sidan
   ===================================================== */

(function () {
  const text = "Ny schemaversion är igång.";

  if (document.querySelector(".schema-version-banner")) return;

  const banner = document.createElement("div");
  banner.className = "schema-version-banner";
  banner.textContent = text;

  banner.style.position = "sticky";
  banner.style.top = "0";
  banner.style.zIndex = "9999";
  banner.style.padding = "10px 12px";
  banner.style.textAlign = "center";
  banner.style.background = "#fff7cc";
  banner.style.borderBottom = "1px solid rgba(0,0,0,.1)";
  banner.style.fontSize = "0.95rem";

  document.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(banner);
  });
})();
