/* =====================================================
   STARTBANNER + TA BORT EMOJIS ENDAST I JÄMFÖRELSE
   ===================================================== */

(function () {
  // ---- Banner (valfri) ----
  const bannerText = "Ny schemaversion är igång.";
  document.addEventListener("DOMContentLoaded", () => {
    if (!document.querySelector(".schema-version-banner")) {
      const banner = document.createElement("div");
      banner.className = "schema-version-banner";
      banner.textContent = bannerText;
      banner.style.position = "sticky";
      banner.style.top = "0";
      banner.style.zIndex = "9999";
      banner.style.padding = "10px 12px";
      banner.style.textAlign = "center";
      banner.style.background = "#fff7cc";
      banner.style.borderBottom = "1px solid rgba(0,0,0,.1)";
      banner.style.fontSize = "0.95rem";
      document.body.prepend(banner);
    }
  });

  // ---- Emoji-strip (endast jämförelse) ----
  // Tar bort de flesta emojis/symboler som används i schemat (🎙️ 🧑‍🏫 👥 🕒 osv)
  // OBS: detta påverkar bara textnoder inne i .compare-item
  const EMOJI_REGEX =
    /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2300}-\u{23FF}]/gu;

  function stripEmojisInNode(root) {
    if (!root) return;

    // Gå igenom textnoder och rensa emojis
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const toClean = [];
    while (walker.nextNode()) toClean.push(walker.currentNode);

    for (const textNode of toClean) {
      const original = textNode.nodeValue;
      if (!original) continue;
      const cleaned = original.replace(EMOJI_REGEX, "");
      if (cleaned !== original) textNode.nodeValue = cleaned;
    }
  }

  function cleanAllCompareItems() {
    document.querySelectorAll(".compare-item").forEach((item) => {
      stripEmojisInNode(item);
    });
  }

  // Kör direkt när sidan laddar
  document.addEventListener("DOMContentLoaded", cleanAllCompareItems);

  // Kör igen när jämförelsen uppdateras dynamiskt
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      // Om något nytt hamnar i compare-wrap eller compare-item
      if (
        (m.target && m.target.closest && m.target.closest(".compare-wrap")) ||
        (m.addedNodes && m.addedNodes.length)
      ) {
        cleanAllCompareItems();
        break;
      }
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
