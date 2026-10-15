<script>

export default {
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
}

</script>

<template>
  <div id="wrapper">
    <card-slot>
        <template v-slot:headerSlot>
          <h3>Metin2</h3>
        </template>
        <template v-slot:default>
          <p>Keleti MMORPG, amely meglepően elterjedt kelet-Európában.</p>
        </template>
        <template v-slot:footerSlot>
          <footer>
            Értékeles: 8/10.
          </footer>
        </template>
    </card-slot>
    <card-slot>
        <template #headerSlot>
          <h3>Kecskeméti Milán</h3>
        </template>
        <template #default>
          <p>Hobbi: Sakk</p>
        </template>
        <template #footerSlot>
        </template>
    </card-slot>
    <card-slot v-for="(movie,index) in movies" :key="index">
        <template #headerSlot>
          <h3>{{movie.title}}</h3>
        </template>
        <template #default>
          <p>{{movie.desc}}</p>
        </template>
        <template #footerSlot>
          <footer>{{movie.rating}}</footer>
        </template>
    </card-slot>
  </div>
</template>

<style>
  #wrapper {
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
