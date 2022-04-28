<script>
  export let id;
  export let title;
  export let body;
</script>

<div class="song" id={id}>
  <div class="title">
    {title}
  </div>
  <div class="lyrics">
    {body}
  </div>
</div>

<style>
  .song {
    color: white;
    margin: 1rem 0;
    background: palevioletred;
    border-radius: 0.5rem;
    padding: 1rem;
    white-space: pre;
  }
</style>
