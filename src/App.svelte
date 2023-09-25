<script lang="ts">
  import FeedbackList from "./components/FeedbackList.svelte";

  let feedback = [
    { id: 1, rating: 10, text: "This is the first feedback" },
    { id: 2, rating: 5, text: "This is the second feedback" },
    { id: 3, rating: 8, text: "This is the third feedback" },
  ];

  $: count = feedback.length;
  $: average = feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length;

  function handleDeleteFeedback (e: CustomEvent<number>) {
    const id = e.detail;
    feedback = feedback.filter((fb) => fb.id !== id);
  }

</script>

<main class="container">
  <FeedbackList {feedback} on:delete-feedback={handleDeleteFeedback} />
</main>

<style>
</style>
