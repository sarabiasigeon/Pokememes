"use strict";

const SPRITES = {
  pigeon: `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="63" rx="31" ry="24" fill="#94a3b8" stroke="#2b2b2b" stroke-width="2.5"/>
    <ellipse cx="27" cy="66" rx="11" ry="17" fill="#7c8aa0" stroke="#2b2b2b" stroke-width="2.5"/>
    <ellipse cx="73" cy="66" rx="11" ry="17" fill="#7c8aa0" stroke="#2b2b2b" stroke-width="2.5"/>
    <ellipse cx="50" cy="74" rx="14" ry="11" fill="#e6e9ef" opacity="0.7"/>
    <circle cx="50" cy="30" r="17" fill="#a8b5c9" stroke="#2b2b2b" stroke-width="2.5"/>
    <path d="M36 18 Q43 12 49 17" fill="none" stroke="#2b2b2b" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M64 18 Q57 12 51 17" fill="none" stroke="#2b2b2b" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="43" cy="27" r="3.4" fill="#111"/>
    <circle cx="57" cy="27" r="3.4" fill="#111"/>
    <circle cx="44.2" cy="25.8" r="1.1" fill="#fff"/>
    <circle cx="58.2" cy="25.8" r="1.1" fill="#fff"/>
    <path d="M44 34 L56 34 L50 43 Z" fill="#f77f00" stroke="#2b2b2b" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M42 87 l-5 9 M42 87 l5 9" stroke="#f77f00" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M58 87 l-5 9 M58 87 l5 9" stroke="#f77f00" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="20" cy="93" r="2.2" fill="#d9a406"/>
    <circle cx="80" cy="92" r="1.8" fill="#d9a406"/>
    <circle cx="27" cy="90" r="1.4" fill="#c07a00"/>
  </svg>`,

  nopal: `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="17" cy="52" rx="11" ry="17" fill="#4e9a2f" stroke="#2b2b2b" stroke-width="2.5"/>
    <ellipse cx="83" cy="52" rx="11" ry="17" fill="#4e9a2f" stroke="#2b2b2b" stroke-width="2.5"/>
    <ellipse cx="50" cy="22" rx="14" ry="13" fill="#6abf4b" stroke="#2b2b2b" stroke-width="2.5"/>
    <ellipse cx="50" cy="62" rx="27" ry="31" fill="#6abf4b" stroke="#2b2b2b" stroke-width="2.5"/>
    <g stroke="#2b4a1a" stroke-width="1.6" stroke-linecap="round">
      <path d="M30 38 l-3 -5"/><path d="M70 38 l3 -5"/><path d="M26 78 l-4 3"/>
      <path d="M74 78 l4 3"/><path d="M50 92 l0 4"/><path d="M36 25 l-4 -3"/>
      <path d="M64 25 l4 -3"/><path d="M24 52 l-5 -1"/><path d="M76 52 l5 1"/>
    </g>
    <circle cx="41" cy="52" r="3.4" fill="#111"/>
    <circle cx="59" cy="52" r="3.4" fill="#111"/>
    <circle cx="42.2" cy="50.8" r="1.1" fill="#fff"/>
    <circle cx="60.2" cy="50.8" r="1.1" fill="#fff"/>
    <ellipse cx="35" cy="63" rx="4.5" ry="2.6" fill="#f7a1b5" opacity="0.85"/>
    <ellipse cx="65" cy="63" rx="4.5" ry="2.6" fill="#f7a1b5" opacity="0.85"/>
    <path d="M39 68 Q50 62 61 68 Q50 80 39 68 Z" fill="#d81e5b" stroke="#7a0f33" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M39 68 Q50 71 61 68" fill="none" stroke="#7a0f33" stroke-width="1.4"/>
    <path d="M36 79 l-3 5 M64 79 l3 5" stroke="#2b4a1a" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  machete: `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g fill="#7fd1a8">
      <circle cx="20" cy="62" r="11" opacity="0.45"/>
      <circle cx="14" cy="80" r="7" opacity="0.35"/>
      <circle cx="27" cy="76" r="8" opacity="0.4"/>
      <circle cx="34" cy="70" r="9" opacity="0.5"/>
      <circle cx="45" cy="74" r="9" opacity="0.4"/>
      <circle cx="56" cy="78" r="8" opacity="0.45"/>
      <circle cx="66" cy="82" r="7" opacity="0.35"/>
      <circle cx="20" cy="62" r="5" opacity="0.7" fill="#a8e6c9"/>
      <circle cx="34" cy="70" r="4" opacity="0.7" fill="#a8e6c9"/>
      <circle cx="50" cy="74" r="4" opacity="0.65" fill="#a8e6c9"/>
    </g>
    <path d="M30 44 L84 16 L94 26 L46 54 Z" fill="#b7bfc8" stroke="#2b2b2b" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M84 16 L94 26 L84 22.5 Z" fill="#8d979f"/>
    <g opacity="0.9">
      <path d="M54 40 q6 -6 12 -2 q4 3 -1 6 q-7 4 -12 0 q-3 -2 1 -4 Z" fill="#b5651d"/>
      <ellipse cx="76" cy="25" rx="5.5" ry="3.5" fill="#8a4b1d" transform="rotate(-20 76 25)"/>
      <ellipse cx="47" cy="47" rx="5" ry="3" fill="#8a4b1d" transform="rotate(-20 47 47)"/>
      <ellipse cx="66" cy="30" rx="3" ry="2" fill="#7c4416"/>
      <circle cx="58" cy="44" r="2" fill="#7c4416"/>
      <circle cx="82" cy="28" r="1.6" fill="#6b3a12"/>
      <circle cx="41" cy="49" r="1.6" fill="#6b3a12"/>
    </g>
    <path d="M33 44 L82 19.5" stroke="#eef2f5" stroke-width="2.4" fill="none"/>
    <path d="M52 41 l5 -1 l-1 5 l5 -1 l-1 4" fill="none" stroke="#8a4b1d" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M64 33 q5 4 2 9 q6 0 4 7" fill="none" stroke="#b5651d" stroke-width="3" stroke-linecap="round"/>
    <path d="M38 46 q6 -3 11 1" fill="none" stroke="#b5651d" stroke-width="3.2"/>
    <circle cx="60" cy="36" r="5.4" fill="#fff" stroke="#2b2b2b" stroke-width="2"/>
    <circle cx="61.5" cy="37" r="2.6" fill="#111"/>
    <path d="M52 29 l8 3" stroke="#2b2b2b" stroke-width="2.6" stroke-linecap="round"/>
    <line x1="32" y1="46" x2="14" y2="64" stroke="#2b2b2b" stroke-width="14" stroke-linecap="round"/>
    <line x1="32" y1="46" x2="14" y2="64" stroke="#7a4a21" stroke-width="10" stroke-linecap="round"/>
    <line x1="18" y1="59" x2="22" y2="55" stroke="#5c3517" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="24" y1="53" x2="28" y2="49" stroke="#5c3517" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="12" y1="66" x2="16" y2="62" stroke="#5c3517" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  banana: `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 14 Q88 28 92 80 Q93 87 86 84 Q60 76 46 48 Q36 30 28 20 Q24 15 30 14 Z" fill="#1c1c1e" stroke="#000" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M34 18 Q84 32 88 78" fill="none" stroke="#3d3d46" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M40 22 Q78 36 84 70" fill="none" stroke="#2b2b33" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M28 20 L22 8 L34 10 Z" fill="#5c4326" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
    <g opacity="0.55">
      <ellipse cx="72" cy="70" rx="5" ry="3" fill="#0a0a0a"/>
      <ellipse cx="50" cy="38" rx="3.5" ry="2" fill="#0a0a0a"/>
      <circle cx="80" cy="56" r="1.8" fill="#050505"/>
      <circle cx="58" cy="64" r="1.6" fill="#050505"/>
    </g>
    <circle cx="58" cy="50" r="4.2" fill="#ffe066" stroke="#000" stroke-width="1.4"/>
    <circle cx="58" cy="50" r="1.8" fill="#111"/>
    <circle cx="68" cy="52" r="4.2" fill="#ffe066" stroke="#000" stroke-width="1.4"/>
    <circle cx="68" cy="52" r="1.8" fill="#111"/>
    <path d="M52 62 Q63 56 74 62 Q63 74 52 62 Z" fill="#4a1259" stroke="#2b0b33" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M54 62 L58 66 L61 62 L64 66 L67 62 L70 65 L73 62" fill="none" stroke="#f8f4e3" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M54 46 L62 44" stroke="#000" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M66 43 L74 45" stroke="#000" stroke-width="2.2" stroke-linecap="round"/>
  </svg>`,

  incapie: `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="86" rx="23" ry="11" fill="#c0392b" stroke="#2b2b2b" stroke-width="2.5"/>
    <ellipse cx="70" cy="86" rx="23" ry="11" fill="#c0392b" stroke="#2b2b2b" stroke-width="2.5"/>
    <path d="M14 84 L28 79 M20 86.5 L34 82 M52 84 L66 79 M58 86.5 L72 82" stroke="#f8f4e3" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="50" cy="58" rx="17" ry="16" fill="#f0932b" stroke="#2b2b2b" stroke-width="2.5"/>
    <rect x="36" y="67" width="28" height="5.5" rx="2.75" fill="#c0392b" stroke="#2b2b2b" stroke-width="1.5"/>
    <circle cx="41" cy="69.7" r="1.6" fill="#f8d38a"/>
    <circle cx="59" cy="69.7" r="1.6" fill="#f8d38a"/>
    <circle cx="29" cy="54" r="7" fill="#f0932b" stroke="#2b2b2b" stroke-width="2.5"/>
    <circle cx="71" cy="54" r="7" fill="#f0932b" stroke="#2b2b2b" stroke-width="2.5"/>
    <path d="M24 50 L34 47 M66 47 L76 50" stroke="#2b2b2b" stroke-width="2" stroke-linecap="round"/>
    <circle cx="50" cy="30" r="14.5" fill="#f0932b" stroke="#2b2b2b" stroke-width="2.5"/>
    <path d="M36 28 Q50 21 64 28" fill="none" stroke="#c0392b" stroke-width="5.5"/>
    <circle cx="36.5" cy="29" r="3" fill="#c0392b" stroke="#2b2b2b" stroke-width="1.4"/>
    <circle cx="63.5" cy="31" r="3" fill="#c0392b" stroke="#2b2b2b" stroke-width="1.4"/>
    <circle cx="45" cy="31" r="3.2" fill="#111"/>
    <circle cx="55" cy="31" r="3.2" fill="#111"/>
    <circle cx="46.2" cy="29.8" r="1" fill="#fff"/>
    <circle cx="56.2" cy="29.8" r="1" fill="#fff"/>
    <path d="M40 25.5 L48 27.5 M60 25.5 L52 27.5" stroke="#111" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M44 39.5 Q50 43.5 56 39.5" fill="none" stroke="#111" stroke-width="2.2" stroke-linecap="round"/>
  </svg>`,

  jellyfit: `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g fill="#eef3f8" stroke="#2b2b2b" stroke-width="2.5">
      <circle cx="30" cy="42" r="15"/>
      <circle cx="70" cy="42" r="15"/>
      <circle cx="50" cy="30" r="17"/>
      <path d="M18 46 Q18 66 50 66 Q82 66 82 46 Z"/>
    </g>
    <g fill="#c9d8e8" opacity="0.8">
      <ellipse cx="26" cy="56" rx="7" ry="5"/>
      <ellipse cx="74" cy="56" rx="7" ry="5"/>
      <ellipse cx="50" cy="61" rx="10" ry="4"/>
    </g>
    <circle cx="43" cy="38" r="3.2" fill="#111"/>
    <circle cx="57" cy="38" r="3.2" fill="#111"/>
    <circle cx="44.2" cy="36.8" r="1" fill="#fff"/>
    <circle cx="58.2" cy="36.8" r="1" fill="#fff"/>
    <path d="M37 33 L44 35 M63 33 L56 35" stroke="#111" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M44 48 Q50 54 56 48" fill="none" stroke="#111" stroke-width="2.2" stroke-linecap="round"/>
    <g stroke="#5aa7d9" stroke-width="2.4" stroke-linecap="round" fill="none">
      <path d="M24 72 l-3 7"/>
      <path d="M76 72 l3 7"/>
      <path d="M50 71 l0 6"/>
    </g>
    <g stroke="#5aa7d9" stroke-width="1.4" stroke-linecap="round" fill="none">
      <path d="M18 74 q5 3 0 6"/>
      <path d="M84 76 q5 3 0 6"/>
    </g>
    <ellipse cx="38" cy="93" rx="14" ry="6.5" fill="#f0932b" stroke="#2b2b2b" stroke-width="2.5"/>
    <ellipse cx="66" cy="93" rx="12.5" ry="6" fill="#f0932b" stroke="#2b2b2b" stroke-width="2.5"/>
    <path d="M26 91.5 L34 88.5 M30 93.5 L38 90.5 M56 91.5 L64 88.5 M60 93.5 L68 90.5" stroke="#f8f4e3" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,

  mascuevos: `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 14 C66 14 76 30 78 46 Q70 50 77 58 Q70 64 74 70 C72 82 62 88 50 88 C38 88 28 82 26 70 C22 44 34 14 50 14 Z" fill="#fdf6e3" stroke="#2b2b2b" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M77 58 Q71 61 74 70" fill="none" stroke="#d9c9a3" stroke-width="2" stroke-linecap="round"/>
    <path d="M78 46 Q72 48 77 58" fill="none" stroke="#d9c9a3" stroke-width="2" stroke-linecap="round"/>
    <path d="M79 44 l7 2 l-6 3 Z" fill="#fdf6e3" stroke="#2b2b2b" stroke-width="1.4"/>
    <path d="M75 71 l6 4 l-7 1 Z" fill="#fdf6e3" stroke="#2b2b2b" stroke-width="1.4"/>
    <circle cx="88" cy="52" r="1.6" fill="#d9c9a3"/>
    <circle cx="86" cy="68" r="1.3" fill="#d9c9a3"/>
    <circle cx="44" cy="42" r="3.4" fill="#111"/>
    <circle cx="58" cy="42" r="3.4" fill="#111"/>
    <circle cx="45.2" cy="40.8" r="1.1" fill="#fff"/>
    <circle cx="59.2" cy="40.8" r="1.1" fill="#fff"/>
    <path d="M38 36 L46 38 M64 36 L56 38" stroke="#111" stroke-width="2.3" stroke-linecap="round"/>
    <path d="M46 52 Q52 56 58 52" fill="none" stroke="#111" stroke-width="2.2" stroke-linecap="round"/>
    <ellipse cx="37" cy="49" rx="4" ry="2.4" fill="#f7a1b5" opacity="0.7"/>
    <ellipse cx="65" cy="49" rx="4" ry="2.4" fill="#f7a1b5" opacity="0.7"/>
    <path d="M30 22 q4 -4 9 -2" fill="none" stroke="#e8dfc8" stroke-width="2.4" stroke-linecap="round"/>
  </svg>`,

  fantacaldo: `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5" fill="none" stroke="#b8c9a8" stroke-width="2.6" stroke-linecap="round">
      <path d="M30 20 q5 -8 0 -14"/>
      <path d="M66 16 q-6 -6 -2 -12"/>
      <path d="M48 14 q4 -6 0 -10"/>
    </g>
    <g opacity="0.4" fill="#b8c9a8">
      <circle cx="14" cy="52" r="6"/>
      <circle cx="86" cy="48" r="5"/>
      <circle cx="10" cy="66" r="4"/>
    </g>
    <path d="M14 44 Q14 74 50 76 Q86 74 86 44 Z" fill="#e6f0da" stroke="#2b2b2b" stroke-width="2.5" opacity="0.9"/>
    <ellipse cx="50" cy="44" rx="36" ry="10" fill="#d4a94a" stroke="#2b2b2b" stroke-width="2.5" opacity="0.85"/>
    <g fill="#b98d2f" opacity="0.8">
      <circle cx="26" cy="45" r="2.2"/>
      <circle cx="74" cy="46" r="2"/>
      <circle cx="36" cy="42.5" r="1.6"/>
      <circle cx="68" cy="42" r="1.6"/>
    </g>
    <ellipse cx="60" cy="34" rx="16" ry="12" fill="#b5651d" stroke="#2b2b2b" stroke-width="2.5" transform="rotate(-24 60 34)"/>
    <line x1="70" y1="24" x2="80" y2="12" stroke="#2b2b2b" stroke-width="7" stroke-linecap="round"/>
    <line x1="70" y1="24" x2="80" y2="12" stroke="#f3efe4" stroke-width="5" stroke-linecap="round"/>
    <circle cx="82" cy="11" r="3.6" fill="#f3efe4" stroke="#2b2b2b" stroke-width="1.6"/>
    <circle cx="78.5" cy="8.5" r="3.2" fill="#f3efe4" stroke="#2b2b2b" stroke-width="1.6"/>
    <circle cx="55" cy="33" r="3" fill="#fff" stroke="#2b2b2b" stroke-width="1.4"/>
    <circle cx="55.6" cy="33.6" r="1.5" fill="#111"/>
    <circle cx="65" cy="30" r="3" fill="#fff" stroke="#2b2b2b" stroke-width="1.4"/>
    <circle cx="65.6" cy="30.6" r="1.5" fill="#111"/>
    <path d="M49 28 L57 30 M72 24 L65 27" stroke="#2b2b2b" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M54 40 Q60 46 66 39 Q63 44 60 43 Q57 45 54 40 Z" fill="#4a1259" stroke="#2b0b33" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M54 40 Q60 42 66 39" fill="none" stroke="#f8f4e3" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M18 44 Q50 38 82 44" fill="none" stroke="#8a741f" stroke-width="2" opacity="0.6"/>
  </svg>`
};

const MONSTRUOS = {
  pigeon: {
    id: "pigeon",
    nombre: "Pigeon",
    tipo: "volador",
    hpMax: 115,
    ataque: 22,
    defensa: 18,
    velocidad: 8,
    claseCss: "tipo-volador",
    descripcion: "Una paloma tan gordita que deja huella en el cemento. Vive de migas de pan y de drama.",
    fraseVictoria: "Prrru-pruuu… (traducción: los débiles reposan en la chicken-fritta)",
    fraseDerrota: "Pigeon se cae redondito del atardecer… plaf.",
    ataques: [
      { nombre: "Picotazo Gordo", potencia: 24, clase: "atk-normal", tipo: "normal", texto: "embiste con todo el peso de su cuerpo redondo" },
      { nombre: "Ala Borrachona", potencia: 18, clase: "atk-agua", tipo: "normal", texto: "suelta un ala infame que huele a chicharrón" },
      { nombre: "Migas de Pan", cura: 34, clase: "atk-planta", tipo: "normal", texto: "revuelca el buche y encuentra migas misteriosas" },
      { nombre: "BOMBA DE PICHÍ", potencia: 40, clase: "atk-secreto", tipo: "volador", texto: "suelta un misil blanco densísimo del buche", especial: true }
    ]
  },
  nopal: {
    id: "nopal",
    nombre: "Nopal",
    tipo: "planta",
    hpMax: 105,
    ataque: 18,
    defensa: 22,
    velocidad: 10,
    claseCss: "tipo-planta",
    descripcion: "Un nopal que se maquilla con lápiz labial. Vegano, pívete y no le tiembla el pulso.",
    fraseVictoria: "Besitos 💋 (traducción: savia riches, savia riches)",
    fraseDerrota: "Alguien peló a Nopal… y lo convirtió en jugo verde 🥤",
    ataques: [
      { nombre: "Lluvia de Púas", potencia: 20, clase: "atk-planta", tipo: "planta", texto: "suelta una andanada de púas voladoras" },
      { nombre: "Nopalazo", potencia: 25, clase: "atk-normal", tipo: "normal", texto: "suelta un chicote con la penca entera" },
      { nombre: "Pedicure Secreto", cura: 36, clase: "atk-agua", tipo: "normal", texto: "se riega con agua Bendita de Oxapampa y se recupera" },
      { nombre: "Lápiz Labial ETERNO", potencia: 22, drena: 22, clase: "atk-secreto", tipo: "planta", texto: "suelta un beso eterno labial que drena tu espíritu", especial: true }
    ]
  },
  machete: {
    id: "machete",
    nombre: "Machete Oxidado",
    tipo: "metal",
    hpMax: 90,
    ataque: 30,
    defensa: 12,
    velocidad: 18,
    claseCss: "tipo-metal",
    descripcion: "Un machete herrumbroso con brazos de aura gaseosa. Baja del techo a las 3 AM sin permiso.",
    fraseVictoria: "SHIIIING… (traducción: la herrumbre vence)",
    fraseDerrota: "Un mago lo sacó de su asueto y lo obligó a descansar 🫠",
    ataques: [
      { nombre: "Tajo Oxidado", potencia: 30, clase: "atk-normal", tipo: "normal", veneno: true, texto: "suelta un tajo oxidado que podría causar tétanos" },
      { nombre: "Puño de Aura", potencia: 22, clase: "atk-fantasma", tipo: "normal", texto: "su brazo de gas entra por la puerta y saluda a la cara" },
      { nombre: "Puliendos", cura: 26, clase: "atk-electrico", tipo: "normal", texto: "se limpia con Critical Lime y recupera filo vital" },
      { nombre: "PERCUTIR TODO", potencia: 46, clase: "atk-secreto", tipo: "metal", texto: "su aura inhala alv y suelta un tajo apocalíptico", especial: true }
    ]
  },
  banana: {
    id: "banana",
    nombre: "Banana Negra",
    tipo: "veneno",
    hpMax: 100,
    ataque: 20,
    defensa: 15,
    velocidad: 15,
    claseCss: "tipo-veneno",
    descripcion: "Una banana tan negra que la oscuridad le saca fotos. Nadie sabe dónde está el tallo ni la punta.",
    fraseVictoria: "La banana negra siempre llega… de madrugada 🌑",
    fraseDerrota: "La pelaron al mediodía… no sobrevivió a la luz 🍌",
    ataques: [
      { nombre: "Latigazo Blandito", potencia: 20, clase: "atk-normal", tipo: "normal", texto: "suelta un chicote suave de banana muy madura" },
      { nombre: "Mancha Infame", potencia: 22, clase: "atk-veneno", tipo: "veneno", veneno: true, texto: "muerde con una mancha negra y posibles daños colaterales" },
      { nombre: "Aguacate Prestado", cura: 30, clase: "atk-planta", tipo: "normal", texto: "roba un aguacate ajeno y recupera vitalidad" },
      { nombre: "NOCHE DE BANANA", potencia: 42, clase: "atk-secreto", tipo: "veneno", texto: "apaga las luces y golpea desde la oscuridad", especial: true }
    ]
  },
  incapie: {
    id: "incapie",
    nombre: "Incapie",
    tipo: "lucha",
    hpMax: 95,
    ataque: 26,
    defensa: 13,
    velocidad: 22,
    claseCss: "tipo-lucha",
    descripcion: "Cuerpo chiquito, pies GIGANTES. Calcula la vida en pasos y no le temblas: ni a él.",
    fraseVictoria: "¡Le metí la 42 del 45! (traducción: el futsol es una ciencia)",
    fraseDerrota: "Se le cargaron los cordones… y se atoró",
    ataques: [
      { nombre: "Patadón de Gigante", potencia: 26, clase: "atk-normal", tipo: "normal", texto: "eleva su pie del 45 y lo suelta con todo y moral" },
      { nombre: "Pisotón Aplasta-Óxido", potencia: 24, clase: "atk-lucha", tipo: "lucha", texto: "aplasta con su pieón cualquier resto de herrumbre" },
      { nombre: "Tenis Nuevos", cura: 28, clase: "atk-agua", tipo: "normal", texto: "se compra tenis relucientes y recupera la moral" },
      { nombre: "PATADA DE 40 METROS", potencia: 44, clase: "atk-secreto", tipo: "lucha", texto: "se amarra los cordones y suelta una patada que entra por la ventana", especial: true }
    ]
  },
  jellyfit: {
    id: "jellyfit",
    nombre: "Jelly Fit",
    tipo: "agua",
    hpMax: 110,
    ataque: 16,
    defensa: 20,
    velocidad: 12,
    claseCss: "tipo-agua",
    descripcion: "Una nube cuajada con dos patitas. Nadie ha visto el cuerpo: solo pies que salen de la niebla. Deporte acuático oficial.",
    fraseVictoria: "Chhh… (traducción: la nube siempre gana la regadera)",
    fraseDerrota: "Se evaporó de la vergüenza… volvió en forma de lluvia 🌧️",
    ataques: [
      { nombre: "Gotines Cuajados", potencia: 21, clase: "atk-agua", tipo: "agua", texto: "suelta chorritos espesos de nube gelatina" },
      { nombre: "Bofetón Húmedo", potencia: 23, clase: "atk-normal", tipo: "normal", texto: "suelta una cachetada húmeda que retumba" },
      { nombre: "Recarga de Nube", cura: 32, clase: "atk-planta", tipo: "normal", texto: "se recarga en la lluvia suspirando y vuelve a la carga" },
      { nombre: "TSUNAMI DE JELLY", potencia: 45, clase: "atk-secreto", tipo: "agua", texto: "infla su nube hasta reventar y bota una ola gelatinosa", especial: true }
    ]
  },
  mascuevos: {
    id: "mascuevos",
    nombre: "Masca Huevos",
    tipo: "normal",
    hpMax: 100,
    ataque: 18,
    defensa: 18,
    velocidad: 14,
    claseCss: "tipo-normal",
    descripcion: "Un huevo ovalado con marcas de mordida. No se sabe si escapa de las bocas o las visita voluntariamente.",
    fraseVictoria: "Chuc-chuc… (traducción: los dientes ajenos son mi spa)",
    fraseDerrota: "Lo mascaron de verdad esta vez… terminó en pan con huevo 🍞",
    ataques: [
      { nombre: "Mordisco Tímido", potencia: 20, clase: "atk-normal", tipo: "normal", texto: "suelta un mordisquito que ni él se cree" },
      { nombre: "Cascarazo", potencia: 24, clase: "atk-normal", tipo: "normal", texto: "suelta un cabezazo de cáscara dura" },
      { nombre: "Yema Ardiente", potencia: 22, clase: "atk-fuego", tipo: "normal", texto: "eyecta yema hirviendo a presión" },
      { nombre: "MASCADA REGENERADORA", cura: 46, clase: "atk-secreto", tipo: "normal", texto: "se mete en la boca rival, se hace mascar contea y sale diputado y renovado", especial: true }
    ]
  },
  fantacaldo: {
    id: "fantacaldo",
    nombre: "Fantacaldo",
    tipo: "fantasma",
    hpMax: 105,
    ataque: 20,
    defensa: 14,
    velocidad: 16,
    claseCss: "tipo-fantasma",
    descripcion: "Caldo de pollo que no se dejó enfriar. Su alma vive en la pata y si le tomas la temperatura, se te apaga el termómetro.",
    fraseVictoria: "Chup-chup… (traducción: los vivos también se pueden comer)",
    fraseDerrota: "Se le cargó la sopa… y quedó en simple agua de pollo 😱",
    ataques: [
      { nombre: "Pozolera Fantasmal", potencia: 21, clase: "atk-fantasma", tipo: "fantasma", texto: "suelta una oleada de caldo que atraviesa la cáscara" },
      { nombre: "Mordisco del Ancestro", potencia: 23, clase: "atk-normal", tipo: "normal", texto: "la pata muerde por su propia cuenta y con resentimiento" },
      { nombre: "Recalentadito", cura: 30, clase: "atk-electrico", tipo: "normal", texto: "se recalienta en el comal cósmico y vuelve más espeso" },
      { nombre: "SOPA DEL MÁS ALLÁ", potencia: 47, clase: "atk-secreto", tipo: "fantasma", texto: "sirve un tazón del más allá que asusta hasta al muerto", especial: true }
    ]
  }
};

const EFECTIVIDAD = {
  volador: { fuerte: "planta", debil: "metal" },
  planta: { fuerte: "metal", debil: "volador" },
  metal: { fuerte: "volador", debil: "planta" },
  veneno: { fuerte: "planta", debil: "metal" },
  lucha: { fuerte: "metal", debil: "volador" },
  agua: { fuerte: "metal", debil: "planta" },
  fantasma: { fuerte: "normal", debil: "metal" }
};

const inicioEfectivoMensaje = {
  volador: "¡Las plumas arrancan la penca! ¡Es superficaz!",
  planta: "¡La savia corroe el óxido! ¡Es superficaz!",
  metal: "¡Cortan las alas como si nada! ¡Es superficaz!",
  veneno: "¡La mancha negra infesta al verde! ¡Es superficaz!",
  lucha: "¡El pie del 45 reventó el óxido! ¡Es superficaz!",
  agua: "¡El chorrito oxidó el metal! ¡Es superficaz!",
  fantasma: "¡El caldo pose el alma! ¡Es superficaz!"
};
const pocoEfectivoMensaje = "¡No fue muy eficaz… estuvo chafa!";

const $ = (sel) => document.querySelector(sel);
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

function vibrar(patron) {
  if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
    try { navigator.vibrate(patron); } catch (e) {}
  }
}

function activarTactil() {
  const sel = ".tarjeta, .btn-ataque, .btn-grande";
  document.addEventListener("touchstart", (e) => {
    const t = e.target.closest(sel);
    if (t) t.classList.add("tocado");
    vibrar(12);
  }, { passive: true });
  ["touchend", "touchcancel"].forEach((ev) => {
    document.addEventListener(ev, (e) => {
      const t = e.target.closest ? e.target.closest(sel) : null;
      if (t) t.classList.remove("tocado");
    }, { passive: true });
  });
}

const estado = {
  jugador: null,
  rival: null,
  turnoBloqueado: false,
  terminator: false
};

function instancia(id, nivel = 5) {
  const base = MONSTRUOS[id];
  return {
    id,
    nombre: base.nombre,
    tipo: base.tipo,
    claseCss: base.claseCss,
    nivel,
    hpMax: base.hpMax,
    hp: base.hpMax,
    ataque: base.ataque,
    defensa: base.defensa,
    ataqueMod: 1,
    defensaMod: 1,
    venenoTurnos: 0,
    cooldownEspecial: 0,
    ataques: base.ataques.map((a) => ({ ...a, usosEspecial: a.especial ? 1 : Infinity })),
    fraseVictoria: base.fraseVictoria,
    fraseDerrota: base.fraseDerrota
  };
}

function enemigoPosible(miId) {
  const ids = Object.keys(MONSTRUOS).filter((id) => id !== miId);
  return ids[Math.floor(Math.random() * ids.length)];
}

function insertarSprite(el, id) {
  el.innerHTML = SPRITES[id];
  el.dataset.id = id;
}

function mostrarPantalla(nombre) {
  document.querySelectorAll(".pantalla").forEach((p) => p.classList.remove("activa"));
  $("#pantalla-" + nombre).classList.add("activa");
}

function log(texto, clase = "") {
  const caja = $("#log");
  const p = document.createElement("p");
  if (clase) p.className = clase;
  p.textContent = texto;
  caja.appendChild(p);
  caja.scrollTop = caja.scrollHeight;
}

function limpiarLog() {
  $("#log").innerHTML = "";
}

function barraHp(el, hp, hpMax) {
  const pct = Math.max(0, (hp / hpMax) * 100);
  el.style.width = pct + "%";
  el.classList.toggle("medio", pct <= 50 && pct > 20);
  el.classList.toggle("bajo", pct <= 20);
}

function actualizarUI() {
  const j = estado.jugador, r = estado.rival;
  $("#jugador-nombre").textContent = j.nombre;
  $("#rival-nombre").textContent = r.nombre;
  $("#jugador-nivel").textContent = "Nv. " + j.nivel;
  $("#rival-nivel").textContent = "Nv. " + r.nivel;
  barraHp($("#jugador-hp"), j.hp, j.hpMax);
  barraHp($("#rival-hp"), r.hp, r.hpMax);
  $("#jugador-hp-num").textContent = `${Math.max(0, j.hp)} / ${j.hpMax} PS`;
  $("#jugador-estados").innerHTML = chipsEstado(j);
  $("#rival-estados").innerHTML = chipsEstado(r);
}

function chipsEstado(m) {
  let chips = "";
  if (m.venenoTurnos > 0) chips += '<span class="chip veneno">☠ Envenenado</span>';
  if (m.ataqueMod < 1) chips += '<span class="chip ataque">💀 Ataque ↓</span>';
  if (m.defensaMod > 1) chips += '<span class="chip defensa">🛡 Defensa ↑</span>';
  return chips;
}

function danoFlotante(ladoJugador, texto, curacion = false) {
  const arena = $(".arena");
  const el = document.createElement("span");
  el.className = "dano-flotante" + (curacion ? " curacion" : "");
  el.textContent = texto;
  el.style.left = (ladoJugador ? 55 : 22) + Math.random() * 12 + "%";
  el.style.top = (ladoJugador ? 48 : 26) + Math.random() * 8 + "%";
  arena.appendChild(el);
  setTimeout(() => el.remove(), 950);
}

function sacudir(m, ladoJugador) {
  const sprite = ladoJugador ? $("#jugador-sprite") : $("#rival-sprite");
  sprite.classList.add("golpeado");
  vibrar(45);
  setTimeout(() => sprite.classList.remove("golpeado"), 320);
}

function desmayar(m, ladoJugador) {
  const sprite = ladoJugador ? $("#jugador-sprite") : $("#rival-sprite");
  sprite.classList.add("desmayado");
  vibrar([120, 80, 200]);
}

function pintarMenu() {
  const menu = $("#menu-ataques");
  menu.innerHTML = "";
  estado.jugador.ataques.forEach((atk, i) => {
    const btn = document.createElement("button");
    btn.className = "btn-ataque " + (atk.clase && atk.clase.startsWith("atk-") && atk.clase !== "atk-secreto" ? atk.clase : atk.especial ? "atk-secreto" : atk.clase);
    const etiquetaTipo = atk.especial ? "⭐ ESPECIAL" : (atk.tipo.charAt(0).toUpperCase() + atk.tipo.slice(1));
    const lineaCda = atk.especial && estado.jugador.cooldownEspecial > 0 ? ` ⏳ ${estado.jugador.cooldownEspecial}` : "";
    btn.innerHTML = `${atk.nombre}<small>${etiquetaTipo}${atk.potencia ? " · Pto " + atk.potencia : " · Curación"}${lineaCda}</small>`;
    btn.disabled = estado.turnoBloqueado || (atk.especial && estado.jugador.cooldownEspecial > 0);
    btn.addEventListener("click", () => turnoJugador(i));
    menu.appendChild(btn);
  });
}

function calcularDano(atk, lanzador, receptor) {
  if (!atk.potencia) return { dano: 0, danoText: "", critico: false, eficacia: 1, tipoDano: "" };
  let eficacia = 1;
  const tipoAtaque = atk.tipo;
  if (EFECTIVIDAD[tipoAtaque]) {
    if (EFECTIVIDAD[tipoAtaque].fuerte === receptor.tipo) eficacia = 2;
    else if (EFECTIVIDAD[tipoAtaque].debil === receptor.tipo) eficacia = 0.5;
  }
  const critico = Math.random() < 0.12 ? 1.5 : 1;
  const azar = 0.85 + Math.random() * 0.25;
  const base = (atk.potencia * (lanzador.ataque * lanzador.ataqueMod)) / (receptor.defensa * receptor.defensaMod);
  const dano = Math.max(1, Math.round(base * eficacia * critico * azar * 0.75));
  return { dano, critico: critico > 1, eficacia };
}

async function aplicarAtaque(lanzador, receptor, atk, lanzadorEsJugador) {
  log(`${lanzador.nombre} usa ${atk.nombre.toUpperCase()} y ${atk.texto}.`);
  if (atk.especial) vibrar([60, 50, 140]);
  await sleep(650);

  if (atk.cura) {
    const cura = atk.cura;
    lanzador.hp = Math.min(lanzador.hpMax, lanzador.hp + cura);
    danoFlotante(lanzadorEsJugador, "+" + cura, true);
    actualizarUI();
    log(`${lanzador.nombre} recupera ${cura} PS. ¡Qué vida más sana!`, "curacion");
    sacudir(lanzador, lanzadorEsJugador);
    await sleep(650);
  }

  if (atk.potencia) {
    const { dano, critico, eficacia } = calcularDano(atk, lanzador, receptor);
    if (Math.random() < 0.08) {
      log(`…pero falló. Puro nabo, cero estilo.`);
      await sleep(650);
    } else {
      receptor.hp = Math.max(0, receptor.hp - dano);
      danoFlotante(!lanzadorEsJugador, "-" + dano);
      sacudir(receptor, !lanzadorEsJugador);
      actualizarUI();
      if (critico) log("¡GOLPE CRÍTICO! ¡Sonó como cataclismo de feria!");
      if (eficacia > 1) log(inicioEfectivoMensaje[atk.tipo] || "¡Es superficaz!", "destacado");
      if (eficacia < 1) log(pocoEfectivoMensaje);
      if (atk.veneno && receptor.venenoTurnos === 0 && Math.random() < 0.4) {
        receptor.venenoTurnos = 3;
        vibrar([80, 70, 80]);
        log(`¡${receptor.nombre} se infecta con la herrumbre! ¡Está VENENADO!`, "destacado");
      }
      if (eficacia === 1 && !critico) log(`Le bajó ${dano} PS a ${receptor.nombre}.`);
      await sleep(650);

      if (atk.drena && dano > 0) {
        const drenado = Math.min(dano, atk.drena);
        lanzador.hp = Math.min(lanzador.hpMax, lanzador.hp + drenado);
        danoFlotante(lanzadorEsJugador, "+" + drenado, true);
        actualizarUI();
        log(`${lanzador.nombre} absorbe ${drenado} PS con labial fresco. 💋 Qué presentado.`, "curacion");
        await sleep(600);
      }
    }
  }
}

function elegirMovimientoCpu(cpu) {
  const disponibles = cpu.ataques.map((a, i) => ({ a, i })).filter((x) => !x.a.especial || cpu.cooldownEspecial === 0);
  if (cpu.hp < cpu.hpMax * 0.25) {
    const cura = disponibles.find((x) => x.a.cura);
    if (cura) return cura.i;
  }
  const especial = disponibles.find((x) => x.a.especial);
  if (especial && Math.random() < 0.7) return especial.i;
  const normales = disponibles.filter((x) => !x.a.especial);
  return normales[Math.floor(Math.random() * normales.length)].i;
}

function pasarTurnoEstados(ladoJugador) {
  const m = ladoJugador ? estado.jugador : estado.rival;
  if (m.venenoTurnos > 0) {
    const dano = Math.max(3, Math.round(m.hpMax * 0.07));
    m.hp = Math.max(0, m.hp - dano);
    m.venenoTurnos--;
    danoFlotante(ladoJugador, "-" + dano);
    actualizarUI();
    log(`${m.nombre} sufre por el tétanos/hierro… pierde ${dano} PS.`, "destacado");
  }
  if (m.cooldownEspecial > 0) m.cooldownEspecial--;
}

function deshabilitar(x) {
  estado.turnoBloqueado = x;
  pintarMenu();
}

async function turnoJugador(indice) {
  if (estado.turnoBloqueado || !estado.jugador || !estado.rival) return;
  deshabilitar(true);
  await ejecutarRonda(indice);
  deshabilitar(false);
}

async function ejecutarRonda(indiceJugador) {
  const j = estado.jugador, r = estado.rival;
  const atkJ = j.ataques[indiceJugador];

  if (atkJ.especial) j.cooldownEspecial = 3;
  await aplicarAtaque(j, r, atkJ, true);

  if (r.hp <= 0) {
    desmayar(r, false);
    log(`¡${r.nombre} se queda K.O.!`);
    await sleep(900);
    return finalizar(true);
  }

  await sleep(350);
  const idxCpu = elegirMovimientoCpu(r);
  const atkC = r.ataques[idxCpu];
  if (atkC.especial) r.cooldownEspecial = 3;
  await aplicarAtaque(r, j, atkC, false);

  if (j.hp <= 0) {
    desmayar(j, true);
    log(`¡${j.nombre} se queda K.O.!`);
    await sleep(900);
    return finalizar(false);
  }

  await pasarTurnoEstados(true);
  if (j.hp <= 0) {
    desmayar(j, true);
    log(`¡${j.nombre} se rinde ante el veneno!`);
    await sleep(900);
    return finalizar(false);
  }
  await pasarTurnoEstados(false);
  if (r.hp <= 0) {
    desmayar(r, false);
    log(`¡${r.nombre} se rinde ante el veneno!`);
    await sleep(900);
    return finalizar(true);
  }

  pintarMenu();
}

function finalizar(ganoJugador) {
  const ganador = ganoJugador ? estado.jugador : estado.rival;
  const perdedor = ganoJugador ? estado.rival : estado.jugador;
  $("#titulo-final").textContent = ganoJugador ? "🏆 ¡GANASTE!" : "💀 PERDISTE";
  $("#titulo-final").style.color = ganoJugador ? "var(--verde-oscuro)" : "var(--rojo)";
  insertarSprite($("#sprite-final"), ganador.id);
  $("#frase-final").textContent = ganoJugador
    ? `${ganador.nombre} dice: "${ganador.fraseVictoria}"`
    : `${perdedor.nombre} dice: "${perdedor.fraseDerrota}"`;
  vibrar(ganoJugador ? [60, 50, 60, 50, 180] : [200, 100, 300]);
  mostrarPantalla("final");
}

function iniciarBatalla(idJugador) {
  estado.jugador = instancia(idJugador);
  estado.rival = instancia(enemigoPosible(idJugador));
  insertarSprite($("#jugador-sprite"), estado.jugador.id);
  insertarSprite($("#rival-sprite"), estado.rival.id);
  limpiarLog();
  actualizarUI();
  estado.turnoBloqueado = false;
  mostrarPantalla("batalla");
  log(`¡${estado.jugador.nombre} vs ${estado.rival.nombre}! ¡Que goleada empiece!`);
  log("Selecciona un ataque en la caja de la derecha ➡");
  pintarMenu();
}

function pintarSelección() {
  const cont = $("#tarjetas");
  cont.innerHTML = "";
  Object.values(MONSTRUOS).forEach((m) => {
    const card = document.createElement("div");
    card.className = "tarjeta";
    card.innerHTML = `
      <div class="sprite-mini" data-sprite="${m.id}"></div>
      <div class="nombre-m">${m.nombre}</div>
      <span class="tipo-m ${m.claseCss}">${m.tipo.toUpperCase()}</span>
      <p class="descripcion-m">${m.descripcion}</p>
      <div class="stats-m">
        <p><strong>HP</strong> ${m.hpMax}</p>
        <p><strong>ATK</strong> ${m.ataque}</p>
        <p><strong>DEF</strong> ${m.defensa}</p>
        <p><strong>VEL</strong> ${m.velocidad}</p>
      </div>`;
    card.addEventListener("click", () => iniciarBatalla(m.id));
    cont.appendChild(card);
  });
  cont.querySelectorAll("[data-sprite]").forEach((el) => insertarSprite(el, el.dataset.sprite));
}

function pintarSelecciónMini() {
  document.querySelectorAll("[data-sprite]").forEach((el) => insertarSprite(el, el.dataset.sprite));
}

$("#btn-jugar").addEventListener("click", () => {
  pintarSelección();
  mostrarPantalla("elegir");
});
$("#btn-revancha").addEventListener("click", () => iniciarBatalla(estado.jugador.id));
$("#btn-cambiar").addEventListener("click", () => {
  pintarSelección();
  mostrarPantalla("elegir");
});

document.addEventListener("DOMContentLoaded", pintarSelecciónMini);
pintarSelecciónMini();
activarTactil();
