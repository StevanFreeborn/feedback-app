<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Feedback } from "../types";
  import Card from "./Card.svelte";

  export let item: Feedback = {
    id: 0,
    rating: 0,
    text: "",
  };

  const dispatch = createEventDispatcher();

  function handleDelete () {
    dispatch('delete-feedback', item.id);
  }
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={handleDelete}>X</button>
  <p class="text-display">
    {item.text}
  </p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background-color: #ff6a95;
    color: #ffffff;
    border: 1px #eeeeee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>