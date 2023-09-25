<script>
  import { FeedbackStore } from "../stores";
  $: count = $FeedbackStore.length;
  $: average = $FeedbackStore.reduce((acc, curr) => acc + curr.rating, 0) / count;
</script>

<div class="feedback-stats">
  <h4>{count} Review</h4>
  <h4>Ratings Average: {Number.isNaN(average) ? 0 : average.toFixed(2)}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>