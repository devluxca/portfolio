<script>
  import { onMount } from "svelte";
  import ProfileCard from "./lib/ProfileCard.svelte";
  import TimelineExp from "./lib/TimelineExp.svelte";
  import { fade } from "svelte/transition";

  let timelinePosition = 0;

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const sections = [
    0, -1100, -2450, -4450, -6450, -8450, -10450, -12450, -20000,
  ];

  const animate = (x) => (timelinePosition = x);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY < 80) animate(sections[0]);
    else if (scrollY > 80 && scrollY <= 200) animate(sections[1]);
    else if (scrollY > 200 && scrollY <= 400) animate(sections[2]);
    else if (scrollY > 400 && scrollY <= 600) animate(sections[3]);
    else if (scrollY > 600 && scrollY <= 800) animate(sections[4]);
    else if (scrollY > 800 && scrollY <= 1000) animate(sections[5]);
    else if (scrollY > 1000 && scrollY <= 1200) animate(sections[6]);
    else if (scrollY > 1200 && scrollY <= 1400) animate(sections[7]);
    else if (scrollY > 1400 && scrollY <= 1800) animate(sections[8]);
  };
</script>

<h2 class="text-2xl font-bold">Bem-vindo ao meu portfólio</h2>
<ProfileCard center={timelinePosition <= -20000} />
{#if timelinePosition > -20000}
  <div transition:fade={{ duration: 200 }}>
    <TimelineExp {timelinePosition} />
  </div>
{/if}
