# Vue feladat: Kártya fejléccel és lábléccel

**Téma:** Vue slotok és a `v-slot` direktíva (named slots)

**Segédanyag:**
- [Vue Slots](https://www.w3schools.com/vue/vue_slots.php)
- [Vue v-slot](https://www.w3schools.com/vue/vue_v-slot.php)

---

## Cél

Készíts egy `CardComp.vue` komponenst, amelynek **három külön kitölthető helye** (slotja) van, majd használd kétszer, eltérő tartalommal az `App.vue`-ban.

## 1. rész: A komponens (`CardComp.vue`)

- Egy külső `div` (`class="card"`) adja a kártya kinézetét.
- Benne három slot legyen ebben a sorrendben, **mindegyik saját `div`-ben**, hogy külön formázhatók legyenek:
  1. névvel ellátott slot: `headerSlot` (a `div` osztálya: `card-header`)
  2. alapértelmezett (név nélküli) slot (a `div` osztálya: `card-body`)
  3. névvel ellátott slot: `footerSlot` (a `div` osztálya: `card-footer`)
- A `footerSlot`-ba írj **fallback tartalmat**, például: *„Nincs lábléc megadva”*.

### CSS alap (`CardComp.vue`)

Másold be a komponens végére, és nyugodtan alakítsd tovább:

```html
<style scoped>
  .card {
    width: 260px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    font-family: Arial, sans-serif;
  }
  .card-header {
    background-color: #42b883;
    color: white;
    padding: 10px 15px;
  }
  .card-body {
    padding: 15px;
  }
  .card-footer {
    background-color: #f1f1f1;
    color: #555;
    padding: 8px 15px;
    font-size: 0.85em;
  }
</style>
```

> **Tipp:** A `<style scoped>` csak a komponens saját elemeire hat. A slotba küldött tartalom (pl. a `<h3>` vagy `<p>`) az `App.vue`-hoz tartozik, ezért azt ott formázd.

## 2. rész: Az `App.vue`

Használd a komponenst kétszer.

**Első kártya: kedvenc filmed vagy játékod**

| Rész   | Tartalom                              |
|--------|---------------------------------------|
| Fejléc | a cím (`<h3>`)                        |
| Törzs  | rövid leírás (`<p>`)                  |
| Lábléc | az értékelésed                        |

Itt a `v-slot:` szintaxist használd `<template>` elemeken.

**Második kártya: személyes névjegy**

| Rész   | Tartalom                                       |
|--------|------------------------------------------------|
| Fejléc | a neved                                        |
| Törzs  | a hobbid                                       |
| Lábléc | **ne töltsd ki**, hogy a fallback jelenjen meg |

Itt a `v-slot` **`#` rövidítését** használd.

### Példatartalom

Ha nem jut eszedbe semmi, használhatod ezeket:

| | Első kártya | Második kártya |
|---|---|---|
| Fejléc | `Minecraft` | `Kovács Anna` |
| Törzs | `Építős-túlélős játék, ahol saját világot hozhatsz létre.` | `Hobbi: kosárlabda és rajzolás` |
| Lábléc | `Értékelés: 9/10` | *(üresen hagyva)* |

### CSS alap (`App.vue`)

A slotba küldött elemek és a kártyák elrendezésének formázásához:

```html
<style>
  #app {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  }
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
</style>
```

> **Tipp:** Ha a kártyákat egy `<div id="wrapper">` elembe teszed, az `#app` helyett az `#wrapper` szelektort használd.

## Elvárt eredmény

Két, egyforma keretű kártya a böngészőben, egymás mellett:

- az elsőnél mindhárom rész a saját tartalmát mutatja,
- a másodiknál a lábléc helyén a fallback szöveg látszik.

## Bónusz feladat

A kártyákat hozd létre `v-for`-ral a következő tömbből. Minden kártya fejlécébe a `title`, törzsébe a `desc`, láblécébe a `rating` kerüljön.

```javascript
data() {
  return {
    movies: [
      { title: 'Minecraft', desc: 'Építős-túlélős játék.', rating: '9/10' },
      { title: 'Csillagok háborúja', desc: 'Űropera lézerkardokkal.', rating: '8/10' },
      { title: 'Tüskevár', desc: 'Kalandok a Sárréten.', rating: '10/10' },
      { title: 'Super Mario', desc: 'Ugrálós platformjáték.', rating: '9/10' }
    ]
  }
}
```

## Értékelés

| Szempont                                          | Pont |
|---------------------------------------------------|------|
| A komponens három slottal (2 névvel, 1 default)   | 3    |
| `v-slot:` helyes használata `<template>` elemeken | 3    |
| `#` rövidítés helyes használata                   | 2    |
| Működő fallback tartalom                          | 2    |
| **Összesen**                                      | **10** |
| Bónusz (`v-for`)                                  | +2   |
