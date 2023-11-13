<script>
    import { Carousel } from "flowbite-svelte";

    export let isMobile;
    export let images = [
        {
            alt: "Cosmic timetraveler",
            src: "/images/carousel/cosmic-timetraveler-pYyOZ8q7AII-unsplash.webp",
            title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
        },
    ];

    let index = 0;
    let image;
</script>

<div class="md:max-w-4xl max-w-xs certificates space-y-4 mt-3 h-scroll">
    <Carousel
        {images}
        let:Indicators
        let:Controls
        on:change={({ detail }) => (image = detail)}
    >
        <Controls />
        <Indicators />
    </Carousel>

    <div
        class="rounded h-auto bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center"
    >
        {image?.alt}
    </div>
</div>

<style>
    @media (max-width: 1580px) {
        .h-scroll {
            max-height: 350px;
            padding-right: 10px;
            overflow-y: auto;
        }   
    }
    @media (max-width: 500px) {
        .h-scroll {
            max-height: 100%;
            padding-right: 0px;
            overflow-y: auto;
        }   
    }
    .certificates {
        width: 600px;
    }
</style>
