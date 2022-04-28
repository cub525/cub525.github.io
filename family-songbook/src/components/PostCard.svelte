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
    {@html body}
  </div>
</div>