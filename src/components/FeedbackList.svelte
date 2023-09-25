<script lang="ts">
  type Feedback = {
    id: number;
    rating: number;
    text: string;
  };

  export let feedback: Feedback[] = [];
</script>

{#each feedback as { id, rating, text }}
  <div class="feedback">
    <h2>Feedback {id}</h2>
    <p>Rating: {rating}</p>
    <p>{text}</p>
  </div>
{/each}