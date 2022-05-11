<script>
  export let id;
  export let title;
  export let body;
  export let dedicated = false;
</script>

<div class="song" id={id}>
  <h2 class="title">
    {title} 
    {#if dedicated}
      <em class="dedicated">dedicated to {dedicated}</em>
    {/if}
  </h2>
  <div class="lyrics">
    {@html body}
  </div>
</div>