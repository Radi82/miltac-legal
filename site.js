// MilTac – kleines Seiten-Skript (keine externen Abhängigkeiten)
// 1) Markiert, dass JavaScript läuft; erst dann greift die Einblend-Animation (siehe style.css).
document.documentElement.classList.add("js");

// 2) Sanfte Einblendung beim Scrollen.
document.addEventListener("DOMContentLoaded", function () {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach(function (e) { io.observe(e); });
});
