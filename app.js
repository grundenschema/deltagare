async function loadInto(selector, url) {
  const el = document.querySelector(selector);
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    el.textContent = `Kunde inte ladda ${url}`;
    return;
  }
  el.innerHTML = await res.text();
}

loadInto("#app", "./templates/schema.html");
