// ============================================================
// GATE SNAPOSTPRO — portello dell'area test
// La pagina pubblica mostra il modal (in sito.js); le pagine in
// /pro/ passano da qui: senza autorizzazione si viene riportati
// al modal sulla home. La password vive SOLO in questo file:
// per cambiarla basta modificare PRO_PASSWORD.
// E' una barriera per tester/bot, non una cassaforte: chi legge
// il sorgente la trova. Per questa fase e' il livello giusto.
// ============================================================
var PRO_PASSWORD = 'snapost-pro-2026';
var PRO_KEY = 'snapost_pro_ok';
var PRO_GIORNI = 30; // durata autorizzazione nel browser

function proAutorizzato() {
  try {
    var v = JSON.parse(localStorage.getItem(PRO_KEY));
    return !!(v && v.fino > Date.now());
  } catch (e) { return false; }
}
function proConferma() {
  localStorage.setItem(PRO_KEY, JSON.stringify({ fino: Date.now() + PRO_GIORNI * 864e5 }));
}
function proEsci() { localStorage.removeItem(PRO_KEY); }

// Pagine dentro /pro/: senza autorizzazione → modal sulla home
if (/\/pro\/[^\/]*\.html?$/.test(location.pathname) && !proAutorizzato()) {
  location.replace('../index.html?pro=1');
}
