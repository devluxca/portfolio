<script>
    import { Carousel, Thumbnails } from "flowbite-svelte";

    export let images;
    export let isMobile;

    let index = 0;
    let forward = true;
</script>

<div class="md:max-w-4xl max-w-xs space-y-2 carousel-mx h-scroll">
    <Carousel {images} {forward} let:Controls bind:index>
        <Controls />
    </Carousel>
    <Thumbnails {images} {forward} bind:index class="bg-transparent" />
</div>

<style>
    @media (max-width: 1580px) {
        .h-scroll {
            max-height: 350px;
            padding-right: 10px;
            overflow-y: scroll;
        }   
    }
    @media (max-width: 500px) {
        .h-scroll {
            max-height: 100%;
            padding-right: 0px;
            overflow-y: auto;
        }   
    }

    .carousel-mx {
        max-width: 600px;
    }

    @media (max-width: 480px) {
        .carousel-mx {
            max-width: 350px;
        }
    }
</style>
