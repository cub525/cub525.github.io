<script>
  export let id;
  export let title;
  export let body;
</script>

<div class="song" id={id}>
  <h2 class="title">
    {@html title}
  </h2>
  <div class="lyrics">
    {@html body}
  </div>
</div>