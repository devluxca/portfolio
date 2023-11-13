<script>
  import { onMount } from "svelte";
  import ProfileCard from "./lib/ProfileCard.svelte";
  import TimelineExp from "./lib/TimelineExp.svelte";
  import { fade } from "svelte/transition";

  let timelinePosition = 0;

  let innerWidth = 0;
  $: isMobile = innerWidth <= 480;

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const sections = [
    0, -1100, -2600, -4600, -6600, -8600, -10600, -12600, -20000,
  ];

  const animate = (x) => (timelinePosition = x);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const sumInSection = window.innerWidth < 1600 ? 50 : 0
    if (
      isMobile &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      setTimeout(() => animate(sections[8]), 1000);
    } else {
      animate(0);
    }
    if (isMobile) return;
    if (scrollY < 80) animate(sections[0]);
    else if (scrollY > 80 && scrollY <= 200) animate(sections[1] + sumInSection);
    else if (scrollY > 200 && scrollY <= 400) animate(sections[2] + sumInSection);
    else if (scrollY > 400 && scrollY <= 600) animate(sections[3] + sumInSection);
    else if (scrollY > 600 && scrollY <= 800) animate(sections[4] + sumInSection);
    else if (scrollY > 800 && scrollY <= 1000) animate(sections[5] + sumInSection);
    else if (scrollY > 1000 && scrollY <= 1200) animate(sections[6] + sumInSection);
    else if (scrollY > 1200 && scrollY <= 1600) animate(sections[7] + sumInSection);
    else if (scrollY > 1600) animate(sections[8]);
  };
</script>

<svelte:window bind:innerWidth />

<h2 class="text-2xl font-bold">Bem-vindo ao meu portfólio</h2>
<small>Use o scroll do mouse para navegar</small>
<ProfileCard center={timelinePosition <= -20000} />
{#if timelinePosition > -20000}
  <div transition:fade={{ duration: 200 }}>
    <TimelineExp {timelinePosition} {isMobile} />
  </div>
{/if}


<style>
  h2, small {
    color: #fff;
  }
</style>