<script>
    import { GradientButton } from "flowbite-svelte";
    import { Icon } from "svelte-awesome";

    import {
        githubSquare,
        instagram,
        linkedinSquare,
        whatsapp,
        download,
        locationArrow,
    } from "svelte-awesome/icons";
    import { fade, fly } from "svelte/transition";

    export let center;

    const downloadCurriculum = () => {
        const link = document.createElement("a");
        link.href = "/curriculo.pdf";
        link.download = "curriculo_lucas_simoni_mendes.pdf";
        link.dispatchEvent(new MouseEvent("click"));
    };
</script>

{#if center}
    <div
        transition:fly={{ y: -400, x: -400 }}
        class="flex items-center top-0 left-0 right-0 bottom-0 m-auto max-w-3xl w-full h-1/4 fixed"
    >
        <div class="flex-col space-y-5">
            <Icon data={locationArrow} class="h-10 w-10 text-red-500" />
            <h2>Morando atualmente em Florianópolis</h2>
            <img
                src="/floripa.jpg"
                class="rounded-lg"
                alt="Floripa image"
                width="400px"
                loading="lazy"
            />
        </div>
        <div class="flex-col w-full">
            <a
                href="https://www.linkedin.com/in/lucas-simoni-mendes-72b71818b/"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src="https://avatars.githubusercontent.com/u/34499182"
                    class="logo mx-auto"
                    alt="Vite Logo"
                />
            </a>
            <div class="text-center">
                <h2 class="text-3xl font-bold">Lucas Mendes</h2>
                <p>Desenvolvedor Full Stack</p>
                <div class="flex gap-3 mt-2 mb-4 justify-center">
                    <a
                        href="https://www.linkedin.com/in/lucas-simoni-mendes-72b71818b/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon
                            data={linkedinSquare}
                            class="text-blue-600 h-6 w-6 cursor-pointer"
                        />
                    </a>
                    <a
                        href="https://instagram.com/devlyacademy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon
                            data={instagram}
                            class="text-purple-600 h-6 w-6 cursor-pointer"
                        />
                    </a>
                    <a
                        href="https://wa.me/5548999079508"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon
                            data={whatsapp}
                            class="text-green-600 h-6 w-6 cursor-pointer"
                        />
                    </a>
                    <a
                        href="https://github.com/devluxca"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon
                            data={githubSquare}
                            class="text-gray-400 h-6 w-6 cursor-pointer"
                        />
                    </a>
                </div>
                <div class="flex justify-center">
                    <GradientButton
                        color="purpleToBlue"
                        class="flex gap-5"
                        on:click={downloadCurriculum}
                    >
                        Baixar currículo
                        <Icon
                            data={download}
                            class="text-white-600 h-6 w-6 cursor-pointer"
                        />
                    </GradientButton>
                </div>
            </div>
        </div>
    </div>
{:else}
    <div class="flex items-center left-0 fixed" transition:fade>
        <a
            href="https://www.linkedin.com/in/lucas-simoni-mendes-72b71818b/"
            target="_blank"
            rel="noreferrer"
        >
            <img
                src="https://avatars.githubusercontent.com/u/34499182"
                class="logo"
                alt="Vite Logo"
            />
        </a>
        <div class="text-left">
            <h2 class="text-3xl font-bold">Lucas Mendes</h2>
            <p>Desenvolvedor Full Stack</p>
            <div class="flex gap-3 mt-4">
                <a
                    href="https://www.linkedin.com/in/lucas-simoni-mendes-72b71818b/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon
                        data={linkedinSquare}
                        class="text-blue-600 h-6 w-6 cursor-pointer"
                    />
                </a>
                <a
                    href="https://instagram.com/devlyacademy"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon
                        data={instagram}
                        class="text-purple-600 h-6 w-6 cursor-pointer"
                    />
                </a>
                <a
                    href="https://wa.me/5548999079508"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon
                        data={whatsapp}
                        class="text-green-600 h-6 w-6 cursor-pointer"
                    />
                </a>
                <a
                    href="https://github.com/devluxca"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon
                        data={githubSquare}
                        class="text-gray-400 h-6 w-6 cursor-pointer"
                    />
                </a>
            </div>
        </div>
    </div>
{/if}

<style>
    .logo {
        width: 150px;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
        border-radius: 100%;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
</style>
