<script lang="ts">
  import { FeedbackStore } from "../stores";
  import type { Feedback } from "../types";
  import Card from "./Card.svelte";

  export let item: Feedback = {
    id: 0,
    rating: 0,
    text: "",
  };

  function handleDelete () {
    FeedbackStore.update((fb) => fb.filter((f) => f.id !== item.id));
  }
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={handleDelete}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
    </svg>
  </button>
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
    color: #202142;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>