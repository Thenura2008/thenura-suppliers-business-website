/*
  Thenura Suppliers Website JavaScript
  Handles bilingual language switching, smooth interactions, reveal animations, active nav state, and project filtering.
*/

const siteLoader = document.querySelector("[data-site-loader]");
const languageHint = document.querySelector("[data-language-hint]");
const languageHintClose = document.querySelector("[data-language-hint-close]");
let languageHintTimer;

function hideLanguageHint() {
  if (!languageHint) return;

  window.clearTimeout(languageHintTimer);
  languageHint.classList.remove("is-visible");
}

function showLanguageHint() {
  if (!languageHint) return;

  window.clearTimeout(languageHintTimer);
  languageHint.classList.add("is-visible");
  languageHintTimer = window.setTimeout(hideLanguageHint, 7600);
}

if (languageHintClose) {
  languageHintClose.addEventListener("click", hideLanguageHint);
}

function hideSiteLoader() {
  if (!siteLoader || siteLoader.dataset.hidden === "true") return;

  siteLoader.dataset.hidden = "true";
  siteLoader.setAttribute("aria-hidden", "true");
  document.body.classList.add("loader-done");

  window.setTimeout(() => {
    document.body.classList.remove("is-loading");
    siteLoader.remove();
    window.setTimeout(showLanguageHint, 220);
  }, 650);
}

if (siteLoader) {
  const scheduleLoaderHide = () => window.setTimeout(hideSiteLoader, 450);

  if (document.readyState === "complete") {
    scheduleLoaderHide();
  } else {
    window.addEventListener("load", scheduleLoaderHide, { once: true });
  }
} else {
  window.addEventListener("load", () => window.setTimeout(showLanguageHint, 650), { once: true });
}

// Translation dictionary for dynamic English / Sinhala website content.
// Edit this object when adding new website text.
const translations = {
  en: {
    "meta.title": "Thenura Suppliers | Complete Building Solutions",
    "meta.description": "Thenura Suppliers provides hardware supplies, cement blocks, construction materials, and building contract services across Colombo, Gampaha, and nearby Sri Lankan regions.",
    "nav.home": "Home", "nav.services": "Services", "nav.projects": "Showcase", "nav.process": "Process", "nav.about": "About", "nav.constructionProjects": "Construction Projects", "nav.contact": "Contact", "nav.whatsapp": "WhatsApp",
    "hero.kicker": "Complete Building Solutions Since 2014",
    "hero.title": "From Materials to Construction, Built with Quality & Reliability.",
    "hero.text": "Thenura Suppliers delivers a complete range of hardware supplies, construction material production, and professional building services under one trusted name.",
    "hero.primaryBtn": "Explore Services", "hero.secondaryBtn": "View Showcase",
    "hero.stat1Value": "10+", "hero.stat1Label": "Years Experience", "hero.stat2Value": "3", "hero.stat2Label": "Main Divisions", "hero.stat3Value": "Retail + Wholesale", "hero.stat3Label": "Supply Available", "hero.stat4Value": "Production", "hero.stat4Label": "Material Items", "hero.stat5Value": "Construction", "hero.stat5Label": "Project Support",
    "hero.float1": "Bulk & Site Delivery", "hero.float2": "Reliable Quality", "hero.panelTop": "Hardware • Production • Construction", "hero.panelTitle": "One Partner for Every Building Requirement", "hero.panelText": "Materials, cement blocks, rings, paints, PVC, steel, sand, stone, and contract construction services.",
    "hero.categoryMainTitle": "Hardware | Production | Construction", "hero.categoryMainText": "All under one trusted name", "hero.categoryHardwareTitle": "Hardware", "hero.categoryHardwareText": "All types of building materials", "hero.categoryProductionTitle": "Production", "hero.categoryProductionText": "Construction materials production", "hero.categoryConstructionTitle": "Construction", "hero.categoryConstructionText": "Building construction and contracts",
    "areas.label": "Service Areas", "areas.title": "Supplying across key Colombo & Gampaha regions.",
    "services.kicker": "Main Service Divisions", "services.title": "Professional solutions for every stage of construction.", "services.subtitle": "Choose a category to smoothly move into the related showcase and view example work areas.",
    "services.hardware.title": "Hardware Items Selling & Supplying", "services.hardware.text": "Retail and wholesale supply of sand, stones, cement, PVC, steel, paints, bricks, and all essential building materials.", "services.hardware.li1": "Site delivery and bulk supply", "services.hardware.li2": "Trusted brands and essential materials", "services.hardware.li3": "Hardware solutions for contractors and homeowners", "services.hardware.btn": "View Hardware Showcase",
    "services.production.title": "Construction Materials Production", "services.production.text": "Production and supply of cement blocks, cement rings, concrete products, interlock stones, and construction material items.", "services.production.li1": "Cement blocks and cement rings", "services.production.li2": "Concrete and cement-based items", "services.production.li3": "Reliable production for project needs", "services.production.btn": "View Production Showcase",
    "services.construction.title": "Building Construction & Contracts", "services.construction.text": "Professional building, home construction, and contract work supported by reliable material supply and field experience.", "services.construction.li1": "Home and building construction", "services.construction.li2": "Construction contracts", "services.construction.li3": "End-to-end project support", "services.construction.btn": "View Construction Showcase",
    "projects.kicker": "Project & Product Showcase", "projects.title": "Explore work areas by category.", "projects.filterAll": "All", "projects.filterHardware": "Hardware", "projects.filterProduction": "Production", "projects.filterConstruction": "Construction",
    "projects.summary.all.title": "Complete Showcase", "projects.summary.all.text": "Hardware, production, and construction work areas in one quick view.",
    "projects.summary.hardware.title": "Hardware & Building Materials", "projects.summary.hardware.text": "Supplying quality hardware items, tools, building materials, cement products, paint items, PVC, steel, and construction equipment for every project need.",
    "projects.summary.production.title": "Production Services", "projects.summary.production.text": "Producing custom paint, interlock paving stones, and cement rings with reliable quality for residential and construction requirements.",
    "projects.summary.construction.title": "Construction Services", "projects.summary.construction.text": "Providing home and building construction services, including contract-based construction solutions from planning to completion.",
    "projects.card1Tag": "Hardware Supply", "projects.card1Title": "Sand, Cement & Building Materials", "projects.card2Tag": "Hardware Products", "projects.card2Title": "Paints, PVC, Steel & Accessories", "projects.card3Tag": "Production", "projects.card3Title": "Cement Blocks, Rings & Concrete-Based Products", "projects.card4Tag": "Production", "projects.card4Title": "Interlocking Paving Stones", "projects.card5Tag": "Construction", "projects.card5Title": "Home & Building Construction", "projects.card6Tag": "Contracts", "projects.card6Title": "End-to-End Contract Work", "projects.card7Tag": "Hardware Tools", "projects.card7Title": "Tools & Equipment", "projects.card8Tag": "Production", "projects.card8Title": "Paint Production",
    "process.kicker": "How We Work", "process.title": "A clear process from requirement to delivery.", "process.step1Title": "Requirement Review", "process.step1Text": "We understand the material requirement, project scale, site needs, and delivery expectations.", "process.step2Title": "Supply or Production", "process.step2Text": "We prepare hardware items, construction materials, or produced cement-based items for the requirement.", "process.step3Title": "Delivery & Construction Support", "process.step3Text": "We support site delivery, bulk transportation, and construction-related service execution.",
    "about.kicker": "About Thenura Suppliers", "about.title": "A practical construction partner for homes, contractors, and project sites.", "about.text": "Established in 2014, Thenura Suppliers serves retail and wholesale customers with building materials, hardware products, production items, and construction services.", "about.cardTitle": "What We Supply",
    "about.item1": "Sand", "about.item2": "Stones", "about.item3": "Cement", "about.item4": "PVC Products", "about.item5": "Steel Products", "about.item6": "Paint Items", "about.item7": "Concrete Cylinders", "about.item8": "Cement Blocks", "about.item9": "Interlock Stones", "about.item10": "Bricks", "about.item11": "All kind of Building Materials", "about.majorBrands": "Major Brands",
    "constructionProjects.kicker": "Construction Projects", "constructionProjects.title": "Focused construction work, presented project by project.", "constructionProjects.subtitle": "A dedicated space for completed and ongoing building construction work handled by Thenura Suppliers.",
    "constructionProjects.project1Tag": "Project 01", "constructionProjects.project1Title": "Residential Foundation Preparation", "constructionProjects.project1Text": "Ground preparation, base work, and early-stage construction support for a residential build.", "constructionProjects.project1Meta": "Home Construction",
    "constructionProjects.project2Tag": "Project 02", "constructionProjects.project2Title": "Two-Story Home Construction", "constructionProjects.project2Text": "A structured building project supported with material planning, site coordination, and construction work.", "constructionProjects.project2Meta": "Building Contract",
    "constructionProjects.project3Tag": "Project 03", "constructionProjects.project3Title": "Roofing and Structural Work", "constructionProjects.project3Text": "Construction-stage roofing and structural improvements completed with practical site supervision.", "constructionProjects.project3Meta": "Structural Work",
    "constructionProjects.project4Tag": "Project 04", "constructionProjects.project4Title": "Finishing and Handover Stage", "constructionProjects.project4Text": "Final construction support, surface preparation, and handover-focused finishing work.", "constructionProjects.project4Meta": "Finishing Work",
    "contact.kicker": "Contact & Location", "contact.title": "Ready to discuss your material or construction requirement?", "contact.subtitle": "Call, WhatsApp, or use the hotline to discuss supplies, site delivery, and construction requirements.", "contact.contactLabel": "Contact", "contact.hotlineLabel": "Hotline", "contact.whatsappLabel": "WhatsApp", "contact.locationLabel": "Location", "contact.locationText": "Open Google location link", "contact.mapTitle": "Find Thenura Suppliers", "contact.mapText": "Use the map preview or open Google Maps to find Thenura Suppliers in Wellampitiya.", "contact.mapBtn": "Open Map",
    "footer.rights": "All rights reserved.", "footer.tagline": "Hardware • Production • Construction", "footer.developedBy": "Developed by",
    "footer.companyText": "Thenura Suppliers delivers a complete range of hardware supplies, construction material production, and professional building services under one trusted name.",
    "footer.serviceAreaLabel": "Service Area:",
    "footer.quickLinksTitle": "Quick Links",
    "footer.servicesTitle": "Services",
    "footer.contactTitle": "Contact",
    "footer.addressLabel": "Address",
    "footer.phoneLabel": "Phone",
    "footer.whatsappLabel": "WhatsApp",
    "footer.emailLabel": "Email",
    "footer.websiteLabel": "Website",
    "footer.privacyLink": "Privacy Policy",
    "footer.termsLink": "Terms & Conditions",
    "footer.sitemapLink": "Sitemap"
  },
  si: {
    "meta.title": "තෙනුර සැපයුම් | සම්පූර්ණ ඉදිකිරීම් විසඳුම්",
    "meta.description": "තෙනුර සැපයුම් කොළඹ, ගම්පහ සහ අවට ශ්‍රී ලංකා ප්‍රදේශ සඳහා හාඩ්වෙයාර් භාණ්ඩ, සිමෙන්ති බ්ලොක්, ඉදිකිරීම් ද්‍රව්‍ය සහ ඉදිකිරීම් කොන්ත්‍රාත් සේවා සපයයි.",
    "nav.home": "මුල් පිටුව", "nav.services": "සේවා", "nav.projects": "ප්‍රදර්ශනය", "nav.process": "ක්‍රියාවලිය", "nav.about": "අපි ගැන", "nav.constructionProjects": "ඉදිකිරීම් ව්‍යාපෘති", "nav.contact": "සම්බන්ධ වන්න", "nav.whatsapp": "වට්ස්ඇප්",
    "hero.kicker": "2014 සිට සම්පූර්ණ ඉදිකිරීම් විසඳුම්",
    "hero.title": "ද්‍රව්‍ය සැපයුමෙන් ඉදිකිරීම දක්වා — ගුණාත්මකභාවය සහ විශ්වාසය සමඟ.",
    "hero.text": "තෙනුර සැපයුම් එකම විශ්වාසනීය නාමයක් යටතේ හාඩ්වෙයාර් භාණ්ඩ සැපයීම, ඉදිකිරීම් ද්‍රව්‍ය නිෂ්පාදනය සහ වෘත්තීය ඉදිකිරීම් සේවා ලබා දෙයි.",
    "hero.primaryBtn": "සේවා බලන්න", "hero.secondaryBtn": "ප්‍රදර්ශනය බලන්න",
    "hero.stat1Value": "10+", "hero.stat1Label": "වසරක පළපුරුද්ද", "hero.stat2Value": "3", "hero.stat2Label": "ප්‍රධාන අංශ", "hero.stat3Value": "සිල්ලර + තොග", "hero.stat3Label": "සැපයුම් සේවා ඇත", "hero.stat4Value": "නිෂ්පාදනය", "hero.stat4Label": "ද්‍රව්‍ය භාණ්ඩ", "hero.stat5Value": "ඉදිකිරීම්", "hero.stat5Label": "ව්‍යාපෘති සහාය",
    "hero.float1": "තොග සහ වැඩබිම් ප්‍රවාහනය", "hero.float2": "විශ්වාසනීය ගුණාත්මකභාවය", "hero.panelTop": "හාඩ්වෙයාර් • නිෂ්පාදනය • ඉදිකිරීම්", "hero.panelTitle": "සෑම ඉදිකිරීම් අවශ්‍යතාවකටම එක් විශ්වාසනීය සහකරු", "hero.panelText": "ද්‍රව්‍ය, සිමෙන්ති බ්ලොක්, සිමෙන්ති රිං, පේන්ට්, PVC, වානේ, වැලි, ගල් සහ කොන්ත්‍රාත් ඉදිකිරීම් සේවා.",
    "hero.categoryMainTitle": "හාඩ්වෙයාර් | නිෂ්පාදනය | ඉදිකිරීම්", "hero.categoryMainText": "එකම විශ්වාසනීය නාමයක් යටතේ", "hero.categoryHardwareTitle": "හාඩ්වෙයාර්", "hero.categoryHardwareText": "සියලුම ඉදිකිරීම් ද්‍රව්‍ය", "hero.categoryProductionTitle": "නිෂ්පාදනය", "hero.categoryProductionText": "ඉදිකිරීම් ද්‍රව්‍ය නිෂ්පාදනය", "hero.categoryConstructionTitle": "ඉදිකිරීම්", "hero.categoryConstructionText": "ගොඩනැගිලි ඉදිකිරීම් සහ කොන්ත්‍රාත්",
    "areas.label": "සේවා ප්‍රදේශ", "areas.title": "කොළඹ සහ ගම්පහ ප්‍රදේශවලට විශ්වාසනීය සැපයුම්.",
    "services.kicker": "ප්‍රධාන සේවා අංශ", "services.title": "ඉදිකිරීම් ක්‍රියාවලියේ සෑම අදියරකටම වෘත්තීය විසඳුම්.", "services.subtitle": "අදාළ කාණ්ඩය තෝරාගෙන එයට අදාළ ප්‍රදර්ශන කොටස වෙත සුමටව ගමන් කරන්න.",
    "services.hardware.title": "හාඩ්වෙයාර් භාණ්ඩ විකිණීම සහ සැපයීම", "services.hardware.text": "වැලි, ගල්, සිමෙන්ති, PVC, වානේ, පේන්ට්, ගඩොල් සහ අවශ්‍ය සියලුම ඉදිකිරීම් ද්‍රව්‍ය සිල්ලර සහ තොග ලෙස සැපයීම.", "services.hardware.li1": "වැඩබිම් ප්‍රවාහනය සහ තොග සැපයුම", "services.hardware.li2": "විශ්වාසනීය සන්නාම සහ අත්‍යවශ්‍ය ද්‍රව්‍ය", "services.hardware.li3": "කොන්ත්‍රාත්කරුවන්ට සහ නිවාස හිමියන්ට හාඩ්වෙයාර් විසඳුම්", "services.hardware.btn": "හාඩ්වෙයාර් ප්‍රදර්ශනය බලන්න",
    "services.production.title": "ඉදිකිරීම් ද්‍රව්‍ය නිෂ්පාදනය", "services.production.text": "සිමෙන්ති බ්ලොක්, සිමෙන්ති රිං, කොන්ක්‍රීට් නිෂ්පාදන, ඉන්ටර්ලොක් ගල් සහ වෙනත් ඉදිකිරීම් ද්‍රව්‍ය නිෂ්පාදනය සහ සැපයීම.", "services.production.li1": "සිමෙන්ති බ්ලොක් සහ සිමෙන්ති රිං", "services.production.li2": "කොන්ක්‍රීට් සහ සිමෙන්ති ආශ්‍රිත නිෂ්පාදන", "services.production.li3": "ව්‍යාපෘති අවශ්‍යතා සඳහා විශ්වාසනීය නිෂ්පාදනය", "services.production.btn": "නිෂ්පාදන ප්‍රදර්ශනය බලන්න",
    "services.construction.title": "ගොඩනැගිලි ඉදිකිරීම් සහ කොන්ත්‍රාත්", "services.construction.text": "විශ්වාසනීය ද්‍රව්‍ය සැපයුම සහ ක්ෂේත්‍ර පළපුරුද්ද සමඟ ගොඩනැගිලි, නිවාස ඉදිකිරීම් සහ කොන්ත්‍රාත් සේවා.", "services.construction.li1": "නිවාස සහ ගොඩනැගිලි ඉදිකිරීම්", "services.construction.li2": "ඉදිකිරීම් කොන්ත්‍රාත්", "services.construction.li3": "ආරම්භයේ සිට අවසානය දක්වා ව්‍යාපෘති සහාය", "services.construction.btn": "ඉදිකිරීම් ප්‍රදර්ශනය බලන්න",
    "projects.kicker": "ව්‍යාපෘති සහ නිෂ්පාදන ප්‍රදර්ශනය", "projects.title": "කාණ්ඩ අනුව වැඩ ක්ෂේත්‍ර ගවේෂණය කරන්න.", "projects.filterAll": "සියල්ල", "projects.filterHardware": "හාඩ්වෙයාර්", "projects.filterProduction": "නිෂ්පාදනය", "projects.filterConstruction": "ඉදිකිරීම්",
    "projects.summary.all.title": "සම්පූර්ණ ප්‍රදර්ශනය", "projects.summary.all.text": "හාඩ්වෙයාර්, නිෂ්පාදන සහ ඉදිකිරීම් ක්ෂේත්‍ර එකම තැනකින් බලන්න.",
    "projects.summary.hardware.title": "හාඩ්වෙයාර් සහ ඉදිකිරීම් ද්‍රව්‍ය", "projects.summary.hardware.text": "ඕනෑම ඉදිකිරීම් අවශ්‍යතාවකට අවශ්‍ය ගුණාත්මක මෙවලම්, ගොඩනැගිලි ද්‍රව්‍ය, සිමෙන්ති නිෂ්පාදන, තීන්ත, PVC, වානේ සහ උපකරණ සැපයීම.",
    "projects.summary.production.title": "නිෂ්පාදන සේවා", "projects.summary.production.text": "නිවාස සහ ඉදිකිරීම් අවශ්‍යතා සඳහා ගුණාත්මක තීන්ත, ඉන්ටර්ලොක් ගල් සහ සිමෙන්ති රිං නිෂ්පාදනය කිරීම.",
    "projects.summary.construction.title": "ඉදිකිරීම් සේවා", "projects.summary.construction.text": "නිවාස සහ ගොඩනැගිලි ඉදිකිරීම් සඳහා කොන්ත්‍රාත් පදනම මත විශ්වාසදායක ඉදිකිරීම් සේවා ලබාදීම.",
    "projects.card1Tag": "හාඩ්වෙයාර් සැපයුම", "projects.card1Title": "වැලි, සිමෙන්ති සහ ඉදිකිරීම් ද්‍රව්‍ය", "projects.card2Tag": "හාඩ්වෙයාර් නිෂ්පාදන", "projects.card2Title": "පේන්ට්, PVC, වානේ සහ අමතර උපාංග", "projects.card3Tag": "නිෂ්පාදනය", "projects.card3Title": "සිමෙන්ති බ්ලොක්, රිං සහ කොන්ක්‍රීට් ආශ්‍රිත නිෂ්පාදන", "projects.card4Tag": "නිෂ්පාදනය", "projects.card4Title": "ඉන්ටර්ලොක් පේවිං ගල්", "projects.card5Tag": "ඉදිකිරීම්", "projects.card5Title": "නිවාස සහ ගොඩනැගිලි ඉදිකිරීම්", "projects.card6Tag": "කොන්ත්‍රාත්", "projects.card6Title": "සම්පූර්ණ කොන්ත්‍රාත් ඉදිකිරීම් සේවා", "projects.card7Tag": "හාඩ්වෙයාර් මෙවලම්", "projects.card7Title": "මෙවලම් සහ උපකරණ", "projects.card8Tag": "නිෂ්පාදනය", "projects.card8Title": "තීන්ත නිෂ්පාදනය",
    "process.kicker": "අපගේ ක්‍රියාවලිය", "process.title": "අවශ්‍යතාවයෙන් සැපයුම දක්වා පැහැදිලි ක්‍රියාවලියක්.", "process.step1Title": "අවශ්‍යතා විමසුම", "process.step1Text": "ද්‍රව්‍ය අවශ්‍යතාව, ව්‍යාපෘති ප්‍රමාණය, වැඩබිම් අවශ්‍යතා සහ ප්‍රවාහන අවශ්‍යතා අපි හඳුනා ගනිමු.", "process.step2Title": "සැපයුම හෝ නිෂ්පාදනය", "process.step2Text": "අවශ්‍යතාවයට අනුව හාඩ්වෙයාර් භාණ්ඩ, ඉදිකිරීම් ද්‍රව්‍ය හෝ සිමෙන්ති ආශ්‍රිත නිෂ්පාදන සූදානම් කරමු.", "process.step3Title": "ප්‍රවාහනය සහ ඉදිකිරීම් සහාය", "process.step3Text": "වැඩබිම් ප්‍රවාහනය, තොග ප්‍රවාහනය සහ ඉදිකිරීම් සේවා ක්‍රියාත්මක කිරීම සඳහා සහාය ලබා දෙමු.",
    "about.kicker": "තෙනුර සැපයුම් ගැන", "about.title": "නිවාස, කොන්ත්‍රාත්කරුවන් සහ ව්‍යාපෘති වැඩබිම් සඳහා ප්‍රායෝගික ඉදිකිරීම් සහකරු.", "about.text": "2014 දී ආරම්භ වූ තෙනුර සැපයුම්, සිල්ලර සහ තොග පාරිභෝගිකයින්ට ඉදිකිරීම් ද්‍රව්‍ය, හාඩ්වෙයාර් භාණ්ඩ, නිෂ්පාදන භාණ්ඩ සහ ඉදිකිරීම් සේවා ලබා දෙයි.", "about.cardTitle": "අපි සපයන දේ",
    "about.item1": "වැලි", "about.item2": "ගල්", "about.item3": "සිමෙන්ති", "about.item4": "PVC නිෂ්පාදන", "about.item5": "වානේ නිෂ්පාදන", "about.item6": "පේන්ට් භාණ්ඩ", "about.item7": "කොන්ක්‍රීට් සිලින්ඩර්", "about.item8": "සිමෙන්ති බ්ලොක්", "about.item9": "ඉන්ටර්ලොක් ගල්", "about.item10": "ගඩොල්", "about.item11": "සියලු වර්ගවල ඉදිකිරීම් ද්‍රව්‍ය", "about.majorBrands": "ප්‍රධාන වෙළඳ නාම",
    "constructionProjects.kicker": "ඉදිකිරීම් ව්‍යාපෘති", "constructionProjects.title": "ඉදිකිරීම් වැඩ ව්‍යාපෘතියෙන් ව්‍යාපෘතියට පෙන්වීම.", "constructionProjects.subtitle": "තෙනුර සැපයුම් විසින් සිදු කරන ලද සම්පූර්ණ සහ ක්‍රියාත්මක ඉදිකිරීම් වැඩ සඳහා වෙන් කළ කොටසකි.",
    "constructionProjects.project1Tag": "ව්‍යාපෘතිය 01", "constructionProjects.project1Title": "නිවාස පදනම සකස් කිරීම", "constructionProjects.project1Text": "නිවාස ඉදිකිරීමක් සඳහා භූමිය සකස් කිරීම, පදනම් වැඩ සහ ආරම්භක ඉදිකිරීම් සහාය.", "constructionProjects.project1Meta": "නිවාස ඉදිකිරීම්",
    "constructionProjects.project2Tag": "ව්‍යාපෘතිය 02", "constructionProjects.project2Title": "දෙමහල් නිවසක් ඉදිකිරීම", "constructionProjects.project2Text": "ද්‍රව්‍ය සැලසුම්කරණය, වැඩබිම් සම්බන්ධීකරණය සහ ඉදිකිරීම් වැඩ සමඟ සිදු කළ ව්‍යාපෘතියක්.", "constructionProjects.project2Meta": "ගොඩනැගිලි කොන්ත්‍රාත්",
    "constructionProjects.project3Tag": "ව්‍යාපෘතිය 03", "constructionProjects.project3Title": "වහල සහ ව්‍යුහ වැඩ", "constructionProjects.project3Text": "ප්‍රායෝගික වැඩබිම් අධීක්ෂණය සමඟ සිදු කළ වහල සහ ව්‍යුහ වැඩ.", "constructionProjects.project3Meta": "ව්‍යුහ වැඩ",
    "constructionProjects.project4Tag": "ව්‍යාපෘතිය 04", "constructionProjects.project4Title": "අවසන් කිරීම සහ භාරදීමේ අදියර", "constructionProjects.project4Text": "අවසන් ඉදිකිරීම් සහාය, මතුපිට සකස් කිරීම සහ භාරදීම සඳහා වූ අවසන් වැඩ.", "constructionProjects.project4Meta": "අවසන් වැඩ",
    "contact.kicker": "සම්බන්ධතා සහ ස්ථානය", "contact.title": "ඔබගේ ද්‍රව්‍ය හෝ ඉදිකිරීම් අවශ්‍යතාව ගැන සාකච්ඡා කිරීමට සූදානම්ද?", "contact.subtitle": "ඇමතුමක්, වට්ස්ඇප් පණිවිඩයක්, හෝ ක්ෂණික ඇමතුම් අංකය භාවිතා කර සැපයුම්, වැඩබිම් ප්‍රවාහනය සහ ඉදිකිරීම් අවශ්‍යතා ගැන සාකච්ඡා කරන්න.", "contact.contactLabel": "සම්බන්ධතා", "contact.hotlineLabel": "ක්ෂණික ඇමතුම්", "contact.whatsappLabel": "වට්ස්ඇප්", "contact.locationLabel": "ස්ථානය", "contact.locationText": "Google ස්ථාන සබැඳිය විවෘත කරන්න", "contact.mapTitle": "තෙනුර සැපයුම් සොයාගන්න", "contact.mapText": "වැල්ලම්පිටියේ තෙනුර සැපයුම් සොයාගැනීමට සිතියම් පෙරදසුන හෝ Google Maps විවෘත කරන්න.", "contact.mapBtn": "සිතියම විවෘත කරන්න",
    "footer.rights": "සියලුම හිමිකම් ඇවිරිණි.", "footer.tagline": "හාඩ්වෙයාර් • නිෂ්පාදනය • ඉදිකිරීම්", "footer.developedBy": "වෙබ් අඩවිය සංවර්ධනය කළේ",
    "footer.companyText": "තෙනුර සැපයුම් එකම විශ්වාසනීය නාමයක් යටතේ හාඩ්වෙයාර් සැපයුම්, ඉදිකිරීම් ද්‍රව්‍ය නිෂ්පාදනය සහ වෘත්තීය ගොඩනැගිලි සේවා සපයයි.",
    "footer.serviceAreaLabel": "සේවා ප්‍රදේශය:",
    "footer.quickLinksTitle": "ඉක්මන් සබැඳි",
    "footer.servicesTitle": "සේවා",
    "footer.contactTitle": "සම්බන්ධතා",
    "footer.addressLabel": "ලිපිනය",
    "footer.phoneLabel": "දුරකථන",
    "footer.whatsappLabel": "වට්ස්ඇප්",
    "footer.emailLabel": "ඊමේල්",
    "footer.websiteLabel": "වෙබ් අඩවිය",
    "footer.privacyLink": "පුද්ගලිකත්ව ප්‍රතිපත්තිය",
    "footer.termsLink": "නියමයන් සහ කොන්දේසි",
    "footer.sitemapLink": "අඩවි සිතියම"
  }
};

// Update footer year automatically.
const footerYear = document.getElementById("year");
if (footerYear) footerYear.textContent = new Date().getFullYear();

const languageButtons = document.querySelectorAll(".lang-btn");
const siteHeader = document.querySelector(".site-header");
const metaDescription = document.querySelector("#meta-description");
const translatedPageTitle = document.querySelector("title[data-i18n='meta.title']");
const projectSummaryTitle = document.querySelector("[data-project-summary-title]");
const projectSummaryText = document.querySelector("[data-project-summary-text]");
let currentLanguage = "en";
let activeProjectFilter = "all";

const projectGalleryTranslations = {
  en: {
    expand: "View Gallery",
    close: "Close gallery",
    previous: "Previous image",
    next: "Next image",
    image: "Image"
  },
  si: {
    expand: "ගැලරිය බලන්න",
    close: "ගැලරිය වසන්න",
    previous: "පෙර රූපය",
    next: "ඊළඟ රූපය",
    image: "රූපය"
  }
};

let projectGalleryModal;
let activeProjectGallery = null;
let activeProjectGalleryImages = [];
let activeProjectGalleryIndex = 0;
let lastProjectGalleryTrigger = null;

function updateProjectSummary(category = activeProjectFilter) {
  if (!projectSummaryTitle || !projectSummaryText) return;

  activeProjectFilter = ["all", "hardware", "production", "construction"].includes(category) ? category : "all";
  const dictionary = translations[currentLanguage] || translations.en;
  const title = dictionary[`projects.summary.${activeProjectFilter}.title`];
  const text = dictionary[`projects.summary.${activeProjectFilter}.text`];

  if (title) projectSummaryTitle.textContent = title;
  if (text) projectSummaryText.textContent = text;
}

function getProjectGalleryCopy(key) {
  const dictionary = projectGalleryTranslations[currentLanguage] || projectGalleryTranslations.en;
  return dictionary[key] || projectGalleryTranslations.en[key] || "";
}

function getProjectGalleryImages(gallery) {
  return Array.from(gallery.querySelectorAll("img")).map((image) => ({
    src: image.currentSrc || image.src,
    alt: image.getAttribute("alt") || ""
  }));
}

function getProjectGalleryTitle(gallery) {
  const cardTitle = gallery.closest(".project-card")?.querySelector(".project-overlay h3");
  return cardTitle?.textContent.trim() || getProjectGalleryCopy("expand");
}

function createProjectGalleryModal() {
  if (projectGalleryModal) return projectGalleryModal;

  const modal = document.createElement("div");
  modal.className = "project-gallery-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-labelledby", "project-gallery-modal-title");
  modal.innerHTML = `
    <button class="project-gallery-modal__backdrop" type="button" data-project-gallery-close tabindex="-1"></button>
    <div class="project-gallery-modal__panel" role="document">
      <div class="project-gallery-modal__header">
        <div>
          <span class="project-gallery-modal__eyebrow" data-project-gallery-count></span>
          <h3 id="project-gallery-modal-title" data-project-gallery-title></h3>
        </div>
        <button class="project-gallery-modal__close" type="button" data-project-gallery-close>
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
      <div class="project-gallery-modal__stage">
        <button class="project-gallery-modal__nav project-gallery-modal__nav--prev" type="button" data-project-gallery-prev>
          <i class="bi bi-chevron-left"></i>
        </button>
        <img data-project-gallery-image alt="" />
        <button class="project-gallery-modal__nav project-gallery-modal__nav--next" type="button" data-project-gallery-next>
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
      <div class="project-gallery-modal__thumbs" data-project-gallery-thumbs></div>
    </div>
  `;

  document.body.appendChild(modal);
  projectGalleryModal = modal;

  modal.querySelectorAll("[data-project-gallery-close]").forEach((button) => {
    button.addEventListener("click", closeProjectGallery);
  });
  modal.querySelector("[data-project-gallery-prev]").addEventListener("click", () => showProjectGalleryImage(activeProjectGalleryIndex - 1));
  modal.querySelector("[data-project-gallery-next]").addEventListener("click", () => showProjectGalleryImage(activeProjectGalleryIndex + 1));

  updateProjectGalleryLanguage();
  return modal;
}

function renderProjectGalleryModal() {
  if (!projectGalleryModal || !activeProjectGallery || !activeProjectGalleryImages.length) return;

  const activeImage = activeProjectGalleryImages[activeProjectGalleryIndex];
  const modalImage = projectGalleryModal.querySelector("[data-project-gallery-image]");
  const modalTitle = projectGalleryModal.querySelector("[data-project-gallery-title]");
  const modalCount = projectGalleryModal.querySelector("[data-project-gallery-count]");
  const thumbs = projectGalleryModal.querySelector("[data-project-gallery-thumbs]");

  modalImage.src = activeImage.src;
  modalImage.alt = activeImage.alt;
  modalTitle.textContent = getProjectGalleryTitle(activeProjectGallery);
  modalCount.textContent = `${getProjectGalleryCopy("image")} ${activeProjectGalleryIndex + 1} / ${activeProjectGalleryImages.length}`;
  thumbs.replaceChildren();

  activeProjectGalleryImages.forEach((image, index) => {
    const button = document.createElement("button");
    const thumbImage = document.createElement("img");
    const isActive = index === activeProjectGalleryIndex;

    button.className = `project-gallery-modal__thumb${isActive ? " is-active" : ""}`;
    button.type = "button";
    button.toggleAttribute("aria-current", isActive);
    button.setAttribute("aria-label", `${getProjectGalleryCopy("image")} ${index + 1}`);
    button.addEventListener("click", () => showProjectGalleryImage(index));

    thumbImage.src = image.src;
    thumbImage.alt = "";
    button.appendChild(thumbImage);
    thumbs.appendChild(button);
  });
}

function openProjectGallery(gallery, startIndex = 0) {
  const images = getProjectGalleryImages(gallery);
  if (!images.length) return;

  activeProjectGallery = gallery;
  activeProjectGalleryImages = images;
  activeProjectGalleryIndex = Math.min(Math.max(startIndex, 0), images.length - 1);

  const modal = createProjectGalleryModal();
  renderProjectGalleryModal();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("gallery-modal-open");

  window.setTimeout(() => {
    modal.querySelector(".project-gallery-modal__close")?.focus();
  }, 30);
}

function closeProjectGallery() {
  if (!projectGalleryModal) return;

  projectGalleryModal.classList.remove("is-open");
  projectGalleryModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("gallery-modal-open");
  activeProjectGallery = null;
  activeProjectGalleryImages = [];
  activeProjectGalleryIndex = 0;

  if (lastProjectGalleryTrigger) {
    lastProjectGalleryTrigger.focus();
    lastProjectGalleryTrigger = null;
  }
}

function showProjectGalleryImage(nextIndex) {
  if (!activeProjectGalleryImages.length) return;

  activeProjectGalleryIndex = (nextIndex + activeProjectGalleryImages.length) % activeProjectGalleryImages.length;
  renderProjectGalleryModal();
}

function updateProjectGalleryLanguage() {
  const expandLabel = getProjectGalleryCopy("expand");

  document.querySelectorAll("[data-project-gallery-expand]").forEach((button) => {
    const buttonText = button.querySelector("[data-gallery-expand-text]");
    const imageCount = button.getAttribute("data-gallery-count");

    if (buttonText) buttonText.textContent = expandLabel;
    button.setAttribute("aria-label", imageCount ? `${expandLabel} (${imageCount})` : expandLabel);
  });

  if (!projectGalleryModal) return;

  projectGalleryModal.querySelectorAll("[data-project-gallery-close]").forEach((button) => {
    button.setAttribute("aria-label", getProjectGalleryCopy("close"));
  });
  projectGalleryModal.querySelector("[data-project-gallery-prev]")?.setAttribute("aria-label", getProjectGalleryCopy("previous"));
  projectGalleryModal.querySelector("[data-project-gallery-next]")?.setAttribute("aria-label", getProjectGalleryCopy("next"));

  if (projectGalleryModal.classList.contains("is-open")) {
    renderProjectGalleryModal();
  }
}

function initProjectGalleryViewer() {
  document.querySelectorAll(".project-gallery").forEach((gallery) => {
    const images = Array.from(gallery.querySelectorAll("img"));
    const card = gallery.closest(".project-card");
    if (!card || images.length < 2 || card.querySelector("[data-project-gallery-expand]")) return;

    gallery.classList.add("is-expandable");
    gallery.classList.toggle("has-extra-images", images.length > 4);

    const expandButton = document.createElement("button");
    expandButton.className = "project-gallery-expand";
    expandButton.type = "button";
    expandButton.setAttribute("data-project-gallery-expand", "");
    expandButton.setAttribute("data-gallery-count", String(images.length));
    expandButton.innerHTML = `
      <i class="bi bi-arrows-fullscreen"></i>
      <span data-gallery-expand-text>${getProjectGalleryCopy("expand")}</span>
      <small>${images.length}</small>
    `;

    expandButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      lastProjectGalleryTrigger = expandButton;
      openProjectGallery(gallery);
    });

    images.forEach((image, index) => {
      image.addEventListener("click", () => {
        openProjectGallery(gallery, index);
      });
    });

    card.appendChild(expandButton);
  });

  updateProjectGalleryLanguage();
}

function getCollapsedHeaderHeight() {
  if (!siteHeader) return;

  const logo = siteHeader.querySelector(".brand-logo");
  const logoHeight = logo ? logo.getBoundingClientRect().height : 72;
  const minimumHeaderHeight = window.matchMedia("(max-width: 575px)").matches ? 76 : 86;

  return Math.max(minimumHeaderHeight, Math.ceil(logoHeight + 14));
}

function getHeaderOffset() {
  return (getCollapsedHeaderHeight() || 86) + 32;
}

function syncHeaderHeight() {
  document.documentElement.style.setProperty("--header-height", `${getCollapsedHeaderHeight() || 86}px`);
}

function getSectionScrollTarget(section) {
  if (!section) return null;
  if (section.id === "home") return section;

  return section.querySelector(".section-kicker, .section-title, .section-mini-title, h2, h1") || section;
}

function scrollToSection(section) {
  if (!section) return;

  if (section.id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const scrollTarget = getSectionScrollTarget(section);
  const scrollTop = scrollTarget.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

  window.scrollTo({
    top: Math.max(scrollTop, 0),
    behavior: "smooth"
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;

    const targetSection = document.querySelector(hash);
    if (!targetSection) return;

    event.preventDefault();
    scrollToSection(targetSection);
    history.pushState(null, "", hash);
  });
});

document.querySelectorAll('a[href^="index.html#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href").replace("index.html", "");
    const targetSection = document.querySelector(hash);
    if (!targetSection) return;

    event.preventDefault();
    scrollToSection(targetSection);
    history.pushState(null, "", hash);
  });
});

window.addEventListener("load", () => {
  if (!window.location.hash) return;

  const targetSection = document.querySelector(window.location.hash);
  if (targetSection) window.setTimeout(() => scrollToSection(targetSection), 80);
});

let heroStatAnimationRun = 0;

function animateHeroStats() {
  const numericStats = document.querySelectorAll("[data-count-target]");
  if (!numericStats.length) return;

  heroStatAnimationRun += 1;
  const currentRun = heroStatAnimationRun;
  const duration = 1100;
  const startTime = performance.now();

  function updateStats(now) {
    if (currentRun !== heroStatAnimationRun) return;

    const progress = Math.min((now - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    numericStats.forEach((stat) => {
      const target = Number(stat.getAttribute("data-count-target"));
      const suffix = stat.getAttribute("data-count-suffix") || "";
      const value = Math.min(Math.floor(target * easedProgress), target);
      stat.textContent = `${value}${suffix}`;
    });

    if (progress < 1) requestAnimationFrame(updateStats);
  }

  numericStats.forEach((stat) => {
    const suffix = stat.getAttribute("data-count-suffix") || "";
    stat.textContent = `0${suffix}`;
  });
  requestAnimationFrame(updateStats);
}

// Construction Projects carousel data.
// Add a future construction project by adding one object here, then add matching
// translation keys to both the English and Sinhala dictionaries above.
const constructionProjectEntries = [
  {
    image: "resources/images/construction/plan.png",
    alt: "Residential foundation construction project",
    tagKey: "constructionProjects.project1Tag",
    titleKey: "constructionProjects.project1Title",
    textKey: "constructionProjects.project1Text",
    metaKey: "constructionProjects.project1Meta"
  },
  {
    image: "resources/images/construction/2_story_building.png",
    alt: "Two-story home construction project",
    tagKey: "constructionProjects.project2Tag",
    titleKey: "constructionProjects.project2Title",
    textKey: "constructionProjects.project2Text",
    metaKey: "constructionProjects.project2Meta"
  },
  {
    image: "resources/images/construction-projects/roof_structural_work.png",
    alt: "Roofing and structural construction work",
    tagKey: "constructionProjects.project3Tag",
    titleKey: "constructionProjects.project3Title",
    textKey: "constructionProjects.project3Text",
    metaKey: "constructionProjects.project3Meta"
  },
  {
    image: "resources/images/construction-projects/finish_handover_stage.png",
    alt: "Home construction finishing stage",
    tagKey: "constructionProjects.project4Tag",
    titleKey: "constructionProjects.project4Title",
    textKey: "constructionProjects.project4Text",
    metaKey: "constructionProjects.project4Meta"
  }
];

function renderConstructionProjects() {
  const slideContainer = document.querySelector("[data-construction-project-slides]");
  const dotContainer = document.querySelector("[data-construction-project-dots]");
  if (!slideContainer || !dotContainer) return;

  slideContainer.innerHTML = constructionProjectEntries.map((project, index) => `
    <article class="construction-project-slide${index === 0 ? " is-active" : ""}" data-construction-project-slide>
      <img src="${project.image}" alt="${project.alt}" loading="lazy" decoding="async" width="1200" height="760" />
      <div class="construction-project-content">
        <span data-i18n="${project.tagKey}">${translations.en[project.tagKey]}</span>
        <h3 data-i18n="${project.titleKey}">${translations.en[project.titleKey]}</h3>
        <p data-i18n="${project.textKey}">${translations.en[project.textKey]}</p>
        <small data-i18n="${project.metaKey}">${translations.en[project.metaKey]}</small>
      </div>
    </article>
  `).join("");

  dotContainer.innerHTML = constructionProjectEntries.map((project, index) => `
    <button class="carousel-dot${index === 0 ? " is-active" : ""}" type="button"
      data-construction-project-dot data-slide-index="${index}"
      aria-label="Show construction project ${index + 1}"${index === 0 ? " aria-current=\"true\"" : ""}></button>
  `).join("");
}

function setLanguage(lang) {
  const selectedLanguage = translations[lang] ? lang : "en";
  const dictionary = translations[selectedLanguage];
  currentLanguage = selectedLanguage;

  document.documentElement.lang = selectedLanguage === "si" ? "si" : "en";
  document.body.classList.toggle("lang-si", selectedLanguage === "si");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  if (translatedPageTitle && dictionary["meta.title"]) {
    document.title = dictionary["meta.title"];
  }
  if (metaDescription && metaDescription.dataset.i18n === "meta.description" && dictionary["meta.description"]) {
    metaDescription.setAttribute("content", dictionary["meta.description"]);
  }

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.getAttribute("data-lang") === selectedLanguage);
  });

  localStorage.setItem("thenura-language", selectedLanguage);
  updateProjectSummary(activeProjectFilter);
  updateProjectGalleryLanguage();
  requestAnimationFrame(syncHeaderHeight);
  requestAnimationFrame(animateHeroStats);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.getAttribute("data-lang"));
    hideLanguageHint();
  });
});

initProjectGalleryViewer();
renderConstructionProjects();

// Load saved language preference.
setLanguage(localStorage.getItem("thenura-language") || "en");
window.addEventListener("load", syncHeaderHeight);
window.addEventListener("resize", syncHeaderHeight);

// Hero category carousel: auto-advances every 3 seconds, with manual controls still available.
const categoryCarousel = document.querySelector("[data-category-carousel]");
if (categoryCarousel) {
  const categoryPanel = categoryCarousel.closest(".construction-panel");
  const categorySlides = Array.from(categoryCarousel.querySelectorAll("[data-carousel-slide]"));
  const categoryDots = Array.from(categoryPanel.querySelectorAll("[data-carousel-dot]"));
  const previousCategoryButton = categoryPanel.querySelector("[data-carousel-prev]");
  const nextCategoryButton = categoryPanel.querySelector("[data-carousel-next]");
  const categoryAutoAdvanceDelay = 3000;
  let activeCategoryIndex = categorySlides.findIndex((slide) => slide.classList.contains("is-active"));
  let categoryIsSketching = false;
  let categoryAutoAdvanceTimer;

  if (activeCategoryIndex < 0) activeCategoryIndex = 0;

  function updateCategoryDots(nextIndex) {
    categoryDots.forEach((dot, index) => {
      const isCurrent = index === nextIndex;
      dot.classList.toggle("is-active", isCurrent);
      dot.toggleAttribute("aria-current", isCurrent);
    });
  }

  function showCategorySlide(nextIndex) {
    if (!categorySlides.length || categoryIsSketching) return;

    const resolvedIndex = (nextIndex + categorySlides.length) % categorySlides.length;
    if (resolvedIndex === activeCategoryIndex) return;

    categoryIsSketching = true;
    categoryPanel.classList.add("is-sketching");

    window.setTimeout(() => {
      categorySlides[activeCategoryIndex].classList.remove("is-active");
      categorySlides[resolvedIndex].classList.add("is-active");
      activeCategoryIndex = resolvedIndex;
      updateCategoryDots(activeCategoryIndex);
    }, 260);

    window.setTimeout(() => {
      categoryPanel.classList.remove("is-sketching");
      categoryIsSketching = false;
    }, 760);
  }

  // Keep the automatic image change predictable: one category loads every 3 seconds.
  function startCategoryAutoAdvance() {
    if (categorySlides.length < 2) return;

    categoryAutoAdvanceTimer = window.setInterval(() => {
      showCategorySlide(activeCategoryIndex + 1);
    }, categoryAutoAdvanceDelay);
  }

  function restartCategoryAutoAdvance() {
    window.clearInterval(categoryAutoAdvanceTimer);
    startCategoryAutoAdvance();
  }

  previousCategoryButton.addEventListener("click", () => {
    showCategorySlide(activeCategoryIndex - 1);
    restartCategoryAutoAdvance();
  });

  nextCategoryButton.addEventListener("click", () => {
    showCategorySlide(activeCategoryIndex + 1);
    restartCategoryAutoAdvance();
  });

  categoryDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showCategorySlide(Number(dot.getAttribute("data-slide-index")));
      restartCategoryAutoAdvance();
    });
  });

  categoryPanel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      showCategorySlide(activeCategoryIndex - 1);
      restartCategoryAutoAdvance();
    }
    if (event.key === "ArrowRight") {
      showCategorySlide(activeCategoryIndex + 1);
      restartCategoryAutoAdvance();
    }
  });

  updateCategoryDots(activeCategoryIndex);
  startCategoryAutoAdvance();
}

// Construction Projects carousel: rendered from data above and animated with a sketch-style pass.
const constructionProjectCarousel = document.querySelector("[data-construction-project-carousel]");
if (constructionProjectCarousel) {
  const projectSlides = Array.from(constructionProjectCarousel.querySelectorAll("[data-construction-project-slide]"));
  const projectDots = Array.from(constructionProjectCarousel.querySelectorAll("[data-construction-project-dot]"));
  const previousProjectButton = constructionProjectCarousel.querySelector("[data-construction-project-prev]");
  const nextProjectButton = constructionProjectCarousel.querySelector("[data-construction-project-next]");
  const projectAutoAdvanceDelay = 4200;
  let activeProjectIndex = projectSlides.findIndex((slide) => slide.classList.contains("is-active"));
  let projectIsSketching = false;
  let projectAutoAdvanceTimer;

  if (activeProjectIndex < 0) activeProjectIndex = 0;

  function updateProjectDots(nextIndex) {
    projectDots.forEach((dot, index) => {
      const isCurrent = index === nextIndex;
      dot.classList.toggle("is-active", isCurrent);
      dot.toggleAttribute("aria-current", isCurrent);
    });
  }

  function showConstructionProject(nextIndex) {
    if (!projectSlides.length || projectIsSketching) return;

    const resolvedIndex = (nextIndex + projectSlides.length) % projectSlides.length;
    if (resolvedIndex === activeProjectIndex) return;

    projectIsSketching = true;
    constructionProjectCarousel.classList.add("is-sketching");

    window.setTimeout(() => {
      projectSlides[activeProjectIndex].classList.remove("is-active");
      projectSlides[resolvedIndex].classList.add("is-active");
      activeProjectIndex = resolvedIndex;
      updateProjectDots(activeProjectIndex);
    }, 260);

    window.setTimeout(() => {
      constructionProjectCarousel.classList.remove("is-sketching");
      projectIsSketching = false;
    }, 760);
  }

  function startProjectAutoAdvance() {
    if (projectSlides.length < 2) return;

    projectAutoAdvanceTimer = window.setInterval(() => {
      showConstructionProject(activeProjectIndex + 1);
    }, projectAutoAdvanceDelay);
  }

  function restartProjectAutoAdvance() {
    window.clearInterval(projectAutoAdvanceTimer);
    startProjectAutoAdvance();
  }

  previousProjectButton.addEventListener("click", () => {
    showConstructionProject(activeProjectIndex - 1);
    restartProjectAutoAdvance();
  });

  nextProjectButton.addEventListener("click", () => {
    showConstructionProject(activeProjectIndex + 1);
    restartProjectAutoAdvance();
  });

  projectDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showConstructionProject(Number(dot.getAttribute("data-slide-index")));
      restartProjectAutoAdvance();
    });
  });

  updateProjectDots(activeProjectIndex);
  startProjectAutoAdvance();
}

document.addEventListener("keydown", (event) => {
  if (!projectGalleryModal || !projectGalleryModal.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeProjectGallery();
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showProjectGalleryImage(activeProjectGalleryIndex - 1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    showProjectGalleryImage(activeProjectGalleryIndex + 1);
  }
});

// Reveal elements when scrolling.
const revealElements = document.querySelectorAll("[data-reveal]");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealElements.forEach((element) => revealObserver.observe(element));

// Filter project gallery by selected category.
const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

function filterProjects(category) {
  updateProjectSummary(category);

  projectItems.forEach((item) => {
    const itemCategory = item.getAttribute("data-category");
    const shouldShow = category === "all" || itemCategory === category;
    item.classList.toggle("hide", !shouldShow);
  });
}

function activateProjectFilter(category) {
  const selectedFilterButton = document.querySelector(`.filter-btn[data-filter="${category}"]`);
  if (!selectedFilterButton) return false;

  filterButtons.forEach((btn) => btn.classList.remove("active"));
  selectedFilterButton.classList.add("active");
  filterProjects(category);
  return true;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateProjectFilter(button.getAttribute("data-filter"));
  });
});

document.querySelectorAll("[data-showcase-filter]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const projectsSection = document.querySelector("#projects");
    if (!projectsSection) return;

    const category = link.getAttribute("data-showcase-filter");
    if (!activateProjectFilter(category)) return;

    event.preventDefault();
    scrollToSection(projectsSection);
    history.pushState(null, "", "#projects");
  });
});

const requestedShowcaseFilter = new URLSearchParams(window.location.search).get("showcase");
if (requestedShowcaseFilter) {
  window.setTimeout(() => {
    const projectsSection = document.querySelector("#projects");
    if (!projectsSection || !activateProjectFilter(requestedShowcaseFilter)) return;

    scrollToSection(projectsSection);
    history.replaceState(null, "", `${window.location.pathname}#projects`);
  }, 120);
}

// Service card click: jump to project section and show related category.
document.querySelectorAll("[data-category-target]").forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.getAttribute("data-category-target");
    const selectedFilterButton = document.querySelector(`.filter-btn[data-filter="${category}"]`);
    if (selectedFilterButton) selectedFilterButton.click();
    scrollToSection(document.querySelector("#projects"));
  });
});

// Active nav highlight based on scroll position.
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const backToTopButton = document.querySelector("[data-back-to-top]");

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("scroll", () => {
  let currentSection = "";
  const headerOffset = getHeaderOffset() + 18;

  if (backToTopButton) {
    backToTopButton.classList.toggle("is-visible", window.scrollY > 420);
  }

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerOffset;
    if (window.scrollY >= sectionTop) currentSection = section.getAttribute("id");
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) link.classList.add("active");
  });
});

// Close mobile navbar after clicking a navigation link.
const navbarCollapse = document.querySelector("#mainNavbar");
if (navbarCollapse) {
  navbarCollapse.addEventListener("shown.bs.collapse", syncHeaderHeight);
  navbarCollapse.addEventListener("hidden.bs.collapse", syncHeaderHeight);
}
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse && navbarCollapse.classList.contains("show") && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false }).hide();
    }
  });
});
