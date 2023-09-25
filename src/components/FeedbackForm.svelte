<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { FeedbackStore } from "../stores";
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";
  import RatingSelect from "./RatingSelect.svelte";

  let currentFeedback = $FeedbackStore;
  let text = '';
  let rating = 0;
  let btnDisabled = true;
  let min = 10;
  let message = '';
  const dispatch = createEventDispatcher();

  function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 10;
    let randomId = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }

    return randomId;
  }

  function isValidMessage() {
    return text.trim().length > min;
  }

  function handleInput() {
    if (isValidMessage() === false) {
      message = `Please enter at least ${min} characters`;
      btnDisabled = true;
      return;
    }

    message = '';
    btnDisabled = false;
  }

  function handleSelect(e: CustomEvent) {
    rating = e.detail;

    if (rating !== 0 && btnDisabled === true && isValidMessage()) {
      btnDisabled = false;
      message = '';
    }
  }

  function handleSubmit(e: Event) {
    const form = e.currentTarget as HTMLFormElement;
  
    if (isValidMessage() === false) {
      message = `Please enter at least ${min} characters`;
      btnDisabled = true;
      return;
    }

    if (rating === 0) {
      message = `Please select a rating`;
      btnDisabled = true;
      return;
    }

    console.log(currentFeedback);

    const newFeedback = {
      id: generateRandomId(),
      rating: rating,
      text: text,
    };

    FeedbackStore.update((fb) => {
      fb.push(newFeedback); 
      return fb;
    });
    
    form.reset();
  }

</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />
    <div class="input-group">
      <input type="text" on:input={handleInput} bind:value={text} placeholder="Tell us something that keeps you coming back">
      <Button type={"submit"} disabled={btnDisabled} >Send</Button>
    </div>
    {#if message}
      <div class="message">{message}</div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message {
    color: #ff6a95;
    font-size: 14px;
    margin-top: 10px;
  }
</style>