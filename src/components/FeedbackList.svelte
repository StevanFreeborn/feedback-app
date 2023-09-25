<script lang="ts">
  import type { Feedback } from "../types";
  import FeedbackItem from "./FeedbackItem.svelte";
  export let feedback: Feedback[] = [];
  </script>

  {#each feedback as fb}
    <FeedbackItem item={fb} on:delete-feedback />
  {/each}

