<script>
  import { onMount } from "svelte";
  import ProfileCard from "./lib/ProfileCard.svelte";
  import TimelineExp from "./lib/TimelineExp.svelte";
  import { fade } from "svelte/transition";

  let timelinePosition = 0;

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const maxScrollHeight = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollY / maxScrollHeight;
    timelinePosition = -scrollFraction * 10200;
  };
</script>

<h2 class="text-2xl font-bold">Bem-vindo ao meu portfólio</h2>
<ProfileCard center={timelinePosition <= -10000} />
{#if timelinePosition >= -9990}
  <div transition:fade={{ duration: 200 }}>
    <TimelineExp {timelinePosition} />
  </div>
{/if}
