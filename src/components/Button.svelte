<script lang="ts">
  type buttonType = 'button' | 'submit' | 'reset' | undefined;
  export let style = 'primary';
  export let type: buttonType = 'button';
  export let disabled = false;
</script>

<button {type} {disabled} class={style} >
  <slot></slot>
</button>

<style>
  button {
    color: #ffffff;
    border: none;
    border-radius: 8px;
    width: 100px;
    height: 40px;
    cursor: pointer;
  }

  .primary {
    background-color: #202142;
  }

  .secondary {
    background: #ff6a95;
  }

  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  button:disabled {
    background-color: #cccccc;
    color: #333333;
    cursor: auto;
  }

  button:disabled:hover {
    transform: scale(1);
    opacity: 1;
  }

</style>