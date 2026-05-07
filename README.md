# Thenura Suppliers Website

A professional single-page Bootstrap website for Thenura Suppliers, a construction and building equipment supplier company.

## New Enterprise-Level Bilingual Feature

The website now includes a dynamic language switcher:

- **EN** button changes the full website content to English.
- **සිං** button changes the full website content to Sinhala.
- The change happens instantly using JavaScript without reloading the page.
- The selected language is saved in the browser using `localStorage`.
- Sinhala text uses **Noto Sans Sinhala** for better readability.

## Folder Structure

```text
thenura-suppliers-website/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
└── README.md
```

## Demo Details Added

These are demo values and should be changed later:

- Phone: +94 11 234 5678
- WhatsApp: +94 77 123 4567
- Facebook: https://www.facebook.com/thenurasuppliers
<!-- Instagram profile link disabled until the official Instagram page is hosted:
- Instagram: https://www.instagram.com/thenurasuppliers
-->
- Location link: https://share.google/AQuJoamq6BBmkPFFu

## How to Edit Contact Details

1. Open `index.html`.
2. Search for `Demo WhatsApp link` or the demo numbers.
3. Replace phone number, WhatsApp number, Facebook, Instagram, and map details.

## How to Edit Website Text / Translations

1. Open `assets/js/main.js`.
2. Edit the `translations` object.
3. Every text item has both English (`en`) and Sinhala (`si`) versions.
4. If you add new text in HTML, add a `data-i18n="your.key"` attribute and add the same key to both language objects.

## Notes

- Bootstrap is loaded using CDN.
- Bootstrap Icons are loaded using CDN.
- Google Fonts are loaded using CDN.
- The map iframe uses a demo Google Maps search embed because Google short/share links cannot be directly embedded as iframe maps. The provided location link is included as a clickable Google location link.
- Replace demo project images with real client photos before final delivery.
