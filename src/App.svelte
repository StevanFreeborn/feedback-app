<script lang="ts">
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import type { Feedback } from "./types";


</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList />
</main>

<style>
</style>
