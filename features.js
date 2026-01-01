/* =========================
   Banner
   ========================= */
.schema-version-banner{
  position: sticky;
  top: 0;
  z-index: 9999;
  padding: 10px 12px;
  text-align: center;
  background: #fff7cc;
  border-bottom: 1px solid rgba(0,0,0,.1);
  font-size: 0.95rem;
}

/* =========================
   JÄMFÖRELSE: 2 scheman sida vid sida (1 på smal)
   ========================= */
:root{
  --cmp-gap: 16px;
  --cmp-pad: 12px;
  --cmp-max-width: 720px;
  --cmp-font-scale: 0.95;
}

.compare-wrap{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--cmp-gap);
  padding: 12px;
  align-items: start;
  overflow-x: hidden;
}

@media (max-width: 1100px){
  .compare-wrap{ grid-template-columns: 1fr; }
}

.compare-item{
  width: 100%;
  max-width: var(--cmp-max-width);
  justify-self: center;

  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,.12);

  padding: var(--cmp-pad);
  box-sizing: border-box;

  height: auto;
  overflow: visible;

  font-size: calc(1rem * var(--cmp-font-scale));
}

/* Inget klipps bort */
.compare-item *{
  min-width: 0;
  overflow: visible;
}

/* Block får växa (deltagare syns även i 30-min) */
.compare-item .block{
  height: auto !important;
  min-height: unset !important;
  overflow: visible !important;
  white-space: normal !important;
  line-height: 1.15;
}
.compare-item .block[style*="height: 28px"],
.compare-item .block[style*="28px"]{
  height: auto !important;
}
