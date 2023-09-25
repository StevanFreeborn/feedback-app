<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import type { Feedback } from "../types";
  import FeedbackItem from "./FeedbackItem.svelte";
  export let feedback: Feedback[] = [];
</script>

{#each feedback as fb}
<div in:scale out:fade={{ duration: 500 }}>
  <FeedbackItem item={fb} on:delete-feedback />
</div>
{/each}

