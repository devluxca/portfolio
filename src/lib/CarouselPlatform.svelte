<script>
    import { Carousel, Thumbnails } from "flowbite-svelte";

    export let images;

    let index = 0;
    let forward = true; // sync animation direction between Thumbnails and Carousel
</script>

<div class="max-w-xl space-y-2">
    <Carousel {images} {forward} let:Indicators let:Controls bind:index>
        <Controls />
        <Indicators />
    </Carousel>
    <Thumbnails {images} {forward} bind:index class="bg-transparent" />
</div>
