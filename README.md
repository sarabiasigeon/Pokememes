# Pokememes 🔥🐦🌵🗡️🌑🦶☁️🥚🍜

Juego de batalla por turnos estilo Pokémon, 100% navegador (cero dependencias, cero build).
Elige entre tres monstruos legendarios y pelea contra el resto:

## Los monstruos

| Monstruo | Tipo | Descripción |
|---|---|---|
| **Pigeon** | Volador | Una paloma gordita e imponente. Ataques: Picotazo Gordo, Ala Borrachona, Migas de Pan y el especial ⭐ **BOMBA DE PICHÍ**. |
| **Nopal** | Planta | Un nopal con la cara pintada con lápiz labial. Ataques: Lluvia de Púas, Nopalazo, Pedicure Secreto y el especial ⭐ **Lápiz Labial ETERNO** (drena vida). |
| **Machete Oxidado** | Metal | Un machete herrumbroso con brazos de aura gaseosa. Ataques: Tajo Oxidado (puede envenenar con tétanos), Puño de Aura, Puliendos y el especial ⭐ **PERCUTIR TODO**. |
| **Banana Negra** | Veneno | Una banana tan negra que la oscuridad le saca fotos. Ataques: Latigazo Blandito, Mancha Infame (envenena), Aguacate Prestado y el especial ⭐ **NOCHE DE BANANA**. |
| **Incapie** | Lucha | Cuerpo chiquito, pies GIGANTES con cordones. Ataques: Patadón de Gigante, Pisotón Aplasta-Óxido, Tenis Nuevos y el especial ⭐ **PATADA DE 40 METROS**. |
| **Jelly Fit** | Agua | Una nube cuajada con dos patitas, no se le ve el cuerpo. Ataques: Gotines Cuajados, Bofetón Húmedo, Recarga de Nube y el especial ⭐ **TSUNAMI DE JELLY**. |
| **Masca Huevos** | Normal | Un huevo ovalado con marcas de mordida. Ataques: Mordisco Tímido, Cascarazo, Yema Ardiente y el especial ⭐ **MASCADA REGENERADORA** (se mete en una boca, se hace mascar y recupera 46 PS). |
| **Fantacaldo** | Fantasma | Caldo de pollo vivo con la cara en la pata. Ataques: Pozolera Fantasmal, Mordisco del Ancestro, Recalentadito y el especial ⭐ **SOPA DEL MÁS ALLÁ**. |

## Piedra, papel y tijeras de tipos

```
Volador ▶ destroza a Planta
Planta  ▶ corroe el óxido de Metal
Metal   ▶ corta a Volador
Veneno  ▶ pudre a Planta (y los metales no se pudren)
Lucha   ▶ patea a Metal (contra el volador no llega)
Agua    ▶ oxida a Metal (pero la penca se la bebe)
Fantasma ▶ pose a Normal (el metal no le teme al caldo)
```

Ataque superficaz = daño ×2. Ataque chafa = daño ×0.5.

## Cómo jugar

1. Abre `index.html` en tu navegador (o sírvelo con `python3 -m http.server` para jugar por GitHub Pages).
2. Pulsa **¡A PELEAR!** y elige tu monstruo.
3. Cada turno eliges un ataque; la CPU responde. Gana quien deje al otro en K.O.
4. **Modo cadena** 🔗: al derrotar a un rival, entra de inmediato otro monstruo (en orden aleatorio). Tu monstruo conserva su HP entre peleas, recibe +25% de HP de descanso y se limpia veneno/estados. Si derrotas a los 7 rivales: 👑 **CAMPEÓN POKEMEME**. Si caes, te muestra tu racha de victorias.
5. El ataque ⭐ **ESPECIAL** es el más potente, pero necesita 3 turnos de recarga.

Extras: golpes críticos, envenenamiento por óxido, curaciones, chips de estado, log de batalla con comentarios y números de daño flotantes.

## Estructura

```
index.html    Pantallas (título, selección, batalla, resultado)
styles.css    Estilo retro Game-Boy con HUD de batalla
game.js       Sprites SVG, datos de monstruos, tabla de tipos y motor de combate
```
