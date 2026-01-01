/* =====================================================
   Banner + Ta bort emojis ENDAST i jämförelse
   ===================================================== */

(function () {
  const bannerText = "Ny schemaversion är igång.";

  const EMOJI_REGEX =
    /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2300}-\u{23FF}]/gu;

  function ensureBanner() {
    if (document.querySelector(".schema-version-banner")) return;
    const banner = document.createElement("div");
    banner.className = "schema-version-banner";
    banner.textContent = bannerText;
    document.body.prepend(banner);
  }

  function stripEmojisInNode(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const n of nodes) {
      const t = n.nodeValue;
      if (!t) continue;
      const cleaned = t.replace(EMOJI_REGEX, "");
      if (cleaned !== t) n.nodeValue = cleaned;
    }
  }

  function cleanCompare() {
    document.querySelectorAll(".compare-item").forEach(stripEmojisInNode);
  }

  document.addEventListener("DOMContentLoaded", () => {
    ensureBanner();
    cleanCompare();
  });

  const observer = new MutationObserver(() => cleanCompare());
  document.addEventListener("DOMContentLoaded", () => {
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();

