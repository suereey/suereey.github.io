/* Website UI preference is independent of article language. No API or analytics. */
(() => {
  "use strict";
  const root = document.documentElement;
  const isHome = root.dataset.sitePage === "home";
  const pageLanguage = root.dataset.contentLanguage;
  const key = "lily.preferredLanguage";
  const getPreference = () => {
    try { const value = localStorage.getItem(key); return value === "zh" || value === "en" ? value : null; }
    catch (_) { return null; }
  };
  const setPreference = (language) => {
    try { localStorage.setItem(key, language); } catch (_) { /* Site remains usable without storage. */ }
  };
  const homeFor = (language) => language === "zh" ? "/zh/" : "/";
  // Remove the requested ChatGPT source parameter without losing other parameters or anchors.
  const url = new URL(location.href);
  if (url.searchParams.get("utm_source") === "chatgpt.com") {
    url.searchParams.delete("utm_source");
    try { history.replaceState(history.state, "", url.pathname + url.search + url.hash); } catch (_) {}
  }
  // Preference redirects apply only to the default homepage, never to an article URL.
  if (isHome && pageLanguage === "en" && getPreference() === "zh") {
    location.replace("/zh/" + location.search + location.hash);
    return;
  }
  // A direct visit to the explicit Chinese homepage also selects Chinese website chrome.
  let ui = isHome ? pageLanguage : (getPreference() || "en");
  if (isHome) setPreference(ui);
  function renderChrome() {
    const lang = ui === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-ui-region]").forEach(el => el.lang = lang);
    document.querySelectorAll("[data-ui-en][data-ui-zh]").forEach(el => {
      el.textContent = ui === "zh" ? el.dataset.uiZh : el.dataset.uiEn;
    });
    document.querySelectorAll("[data-main-nav]").forEach(el => {
      el.setAttribute("aria-label", ui === "zh" ? "主导航" : "Main navigation");
    });
    document.querySelectorAll("[data-home-link]").forEach(el => {
      el.setAttribute("href", homeFor(ui) + el.dataset.homeLink);
    });
    document.querySelectorAll("[data-ui-choice]").forEach(el => {
      const active = el.dataset.uiChoice === ui;
      if (active) el.setAttribute("aria-current", "true");
      else el.removeAttribute("aria-current");
    });
  }
  function init() {
    renderChrome();
    document.querySelectorAll("[data-ui-choice]").forEach(el => {
      el.addEventListener("click", event => {
        // Keep modifier-click behavior available for opening the other homepage in a new tab.
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        const next = el.dataset.uiChoice;
        setPreference(next);
        if (isHome && next !== pageLanguage) {
          location.assign(homeFor(next) + location.hash);
        } else {
          ui = next;
          renderChrome();
        }
      });
    });
    // A browser Back/Forward Cache restoration should reflect the latest UI preference.
    window.addEventListener("pageshow", event => {
      if (!event.persisted) return;
      if (isHome) {
        const pref = getPreference();
        if (pageLanguage === "en" && pref === "zh") location.replace("/zh/" + location.hash);
        else { ui = pageLanguage; setPreference(ui); renderChrome(); }
      } else { ui = getPreference() || "en"; renderChrome(); }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, {once:true});
  else init();
})();
