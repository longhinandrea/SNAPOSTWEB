# SNAPOSTWEB — registro di lavoro del sito www.snapost.it

Sito statico HTML/CSS/JS (nessun framework) per la distribuzione di Snapost.
Repo: https://github.com/longhinandrea/SNAPOSTWEB

Regole di lavoro (per l'omologo):
- La fonte di verita' GENERALE del progetto resta Architettura.txt nel
  repo SNAPOST. Questo file e' il registro SOLO del sito.
- Aggiornare questo file DOPO il test/approvazione dell'utente.
- Per le anteprime basta aprire index.html in Chrome (niente server).
- L'utente modifica da solo testi e colori quando puo'; per cambi
  grafici impattanti: prima mockup/anteprima, poi codice.

## STRUTTURA
- index.html        home completa
- android.html      scheda app Android
- windows.html      scheda app Windows
- assets/stile.css  stile condiviso (palette navy/azzurro brand)
- assets/sito.js    menu mobile + animazioni reveal + dialog demo
- assets/*.png/jpg  logo e illustrazione ecosistema

## FATTO
[x] 27/09 Home: hero con illustrazione ecosistema (icona WhatsApp
    inclusa), barra proof, 6 card funzioni (scambio bidirezionale
    PC<->telefono, copia in galleria, piu' PC...), sezione aziende con
    esempio flusso "Commessa 2481", 2 card download, FAQ, contatti
    (mailto provvisorio), footer
[x] 27/09 Schede android.html e windows.html con hero, galleria
    screenshot e slot video (tutti segnaposto)
[x] 27/09 Bottone download Windows in evidenza (colore azure) in menu
    e hero
[x] 27/09 Card demo: sulla card "Crea i tag e scatta" bottone
    "Demo - 5 s" che apre finestra con anteprima grafica della
    creazione di un tag (finestra Windows finta, commessa 2481).
    Approvata dall'utente come trattamento grafico
[x] 27/09 Sito responsive (menu mobile) e accessibilita' di base
    (aria, prefers-reduced-motion)
[x] 27/09 Repo GitHub creato e prima pubblicazione
[x] 27/09 sera Pagina privacy (privacy.html): 8 sezioni in card stile
    sito, messaggio "le tue foto restano tue" (locale, niente cloud,
    niente account, niente pubblicita'), permessi motivati, diritti
    GDPR, nota hosting sito. Link del footer gia' attivo su tutte
    le pagine. Da rileggere dall'utente prima del Play Store

## DA FARE
[~] Screenshot reali: Windows (6 schermate: posta in arrivo, dettaglio,
    tag, storico, trasferimenti, nota visualizzata in Esplora file).
    Inserita l'immagine note; restano gli screenshot Android (9:17)
[ ] Video dimostrativi: sostituire il dialog demo con video reale
    (5 s creazione tag in Windows) e riempire gli slot video delle
    schede app. Estendere il bottone "Demo" SOLO alle card che
    avranno davvero un contenuto
[x] 29/09 sera Email definitiva: info@snapost.it (casella Aruba attiva e
    testata). Usata nel form contatti e in privacy.html; stesso indirizzo
    andra' nel Play Store
[x] 29/09 sera Sezione contatti COMPLETA E VERIFICATA: vero form
    (nome, email, messaggio) stile sito, honeypot antispam, invio senza
    ricaricare la pagina tramite Formspree (free, 50 invii/mese).
    Endpoint mppwbywd attivo; test reale fatto dall'utente: email
    ricevuta su info@snapost.it. Voce "Contatti" aggiunta al menu
    superiore su tutte e 4 le pagine (nelle pagine interne porta a
    index.html#contatti)
[x] 27/09 sera Pubblicazione GitHub Pages ATTIVA: sito online su
    https://longhinandrea.github.io/SNAPOSTWEB/ (repo reso pubblico,
    branch main / root). Verificate online tutte e 4 le pagine:
    index, android, windows, privacy. Ogni commit+push aggiorna il
    sito in automatico entro ~1 minuto
[x] 29/09 mattina Dominio www.snapost.it COLLEGATO a GitHub Pages:
    acquistato su Aruba (dominio+email), 4 record A + CNAME www
    impostati nel pannello DNS Aruba, file CNAME nel repo, certificato
    HTTPS emesso da GitHub. https://snapost.it reindirizza a
    https://www.snapost.it. NOTA: nel pannello DNS Aruba il dominio
    puo' SEMBRARE "snapor.it" per via del font (la t finale somiglia
    a una r): e' snapost.it, verificato piu' volte
[x] 29/09 mattina Footer: firma "Software by L.A. VE" su tutte le
    4 pagine (l'utente NON vuole il nome completo, per ora)
[x] 29/09 mattina ENFORCE HTTPS attivato su GitHub Pages: http
    reindirizza ora sempre a https (lucchetto forzato)
[x] 29/09 mattina Casella info@snapost.it creata nel pannello email
    Aruba (postmaster@ gia' esistente, tecnica, non toccare).
    Webmail: webmail.aruba.it. MX erano gia' attivi. Da testare
    invio+ricezione con email di prova
[ ] Link reali: Play Store e installer Windows quando disponibili
    (oggi le card download puntano alle schede app)

## APPUNTI TECNICI
- Palette: navy #082a78 / blue #1648b8 / azure #1f7dff, grigi e azzurro
  pallido; coerente col mood dell'utente (pochi colori, quasi monocromo,
  accenti solo su pochi elementi)
- Illustrazioni: ecosistema.jpg = versione ISOMETRICA (con logo editato
  sullo schermo del telefono); la versione flat e' usata nell'onboarding
  MAUI, non qui
- Il dialog demo e' un <dialog> nativo con ::backdrop; chiusura con X,
    click fuori o Esc
