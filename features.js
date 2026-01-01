// Visar en liten text på startsidan som berättar att det är en ny schemaversion.
// Ändra texten nedan när du vill.

(function () {
  const text = "Ny schemaversion är igång (v5).";

  // Undvik dubbelt om den redan finns
  if (document.querySelector(".schema-version-banner")) return;

  const banner = document.createElement("div");
  banner.className = "schema-version-banner";
  banner.textContent = text;

  // Lägg den överst i body
  document.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(banner);
  });
})();
