<script>
  export let count = 0;
  export let average = 0;
</script>

<div class="feedback-stats">
  <h4>{count} Review</h4>
  <h4>Ratings Average: {average.toFixed(2)}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>