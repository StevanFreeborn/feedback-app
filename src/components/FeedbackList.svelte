<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { FeedbackStore } from "../stores";
  import FeedbackItem from "./FeedbackItem.svelte";
</script>

{#each $FeedbackStore as fb}
<div in:scale out:fade={{ duration: 500 }}>
  <FeedbackItem item={fb} />
</div>
{/each}

