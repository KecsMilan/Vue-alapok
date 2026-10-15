<script setup>

</script>

<template>
    <div class="card">
        <div class="card-header">
            <slot name="headerSlot"></slot>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
        <div class="card-footer">
            <slot name="footerSlot">
                <p>Nincs lábléc megadva!</p>
            </slot>
        </div>
    </div>
</template>

<style scoped>
  .card {
    width: 260px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    font-family: Arial, sans-serif;
    height: 100%;
  }
  .card-header {
    background-color: #42b883;
    color: white;
    padding: 10px 15px;
    height: 33%;
  }
  .card-body {
    padding: 15px;
    height: 33%;
  }
  .card-footer {
    background-color: #f1f1f1;
    color: #555;
    padding: 8px 15px;
    font-size: 0.85em;
    height: 33%;
  }
</style>
