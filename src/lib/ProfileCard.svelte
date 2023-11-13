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
    export let timelinePosition;
    export let isMobile;

    let scrollY;
    let expandSkills = false;

    const downloadCurriculum = () => {
        const link = document.createElement("a");
        link.href = "/curriculo.pdf";
        link.download = "curriculo_lucas_simoni_mendes.pdf";
        link.dispatchEvent(new MouseEvent("click"));
    };

    const toggleExpandSkills = () => (expandSkills = !expandSkills)
</script>

<svelte:window bind:scrollY />

{#if center}
    <div
        transition:fly={{ y: -400, x: -400 }}
        style="left: 50%;transform: translateX(-62%);"
        class="flex items-center top-0 left-0 right-0 bottom-0 m-auto max-w-2xl w-full h-1/4 md:fixed profile-card-centered"
        class:mobile={isMobile}
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
    <div
        class="flex items-center w-full md:left-0 md:fixed profile-card"
        class:mobile={isMobile}
        class:scrolled={scrollY > 20 && !isMobile}

        transition:fade
    >
        <div class="flex space-between">
            <div class="card-flex card-info">
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
                    <div class="flex gap-3 mt-4 social-medias">
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
                <div class="flex items-center md:ml-8 curriculum-btn">
                    <GradientButton
                        color="purpleToBlue"
                        outline
                        on:click={downloadCurriculum}
                    >
                        <div class="flex gap-3 items-center">
                            Baixar currículo
                            <Icon
                                data={download}
                                class="text-white-600 h-6 w-6 cursor-pointer"
                            />
                        </div>
                    </GradientButton>
                </div>
            </div>
            <div class="flex skills-card" class:mobile={isMobile} class:expand={expandSkills} class:scrolled={scrollY > 20 && !isMobile}>
                <h2>Skills</h2>
                <div class="skills-bars">
                    <div 
                        class="skill-bar" 
                        class:skill-bar-10={!isMobile ? timelinePosition < 0 : true}
                        class:skill-bar-20={!isMobile ? timelinePosition <= -1100 : true}
                        class:skill-bar-35={!isMobile ? timelinePosition <= -2600 : true}    
                        class:skill-bar-45={!isMobile ? timelinePosition <= -4600 : true}    
                        class:skill-bar-50={!isMobile ? timelinePosition <= -6600 : true}    
                        class:skill-bar-75={!isMobile ? timelinePosition <= -8600 : true}    
                        class:skill-bar-85={!isMobile ? timelinePosition <= -10600 : true}    
                        class:skill-bar-100={!isMobile ? timelinePosition <= -12600 : true} 
                    >
                        <p>JS/Node</p>
                    </div>
                    <div 
                        class="skill-bar" 
                        class:skill-bar-15={!isMobile ? timelinePosition < 0 : true}
                        class:skill-bar-50={!isMobile ? timelinePosition <= -1100 : true}    
                        class:skill-bar-100={!isMobile ? timelinePosition <= -2600 : true}    
                    >
                        <p>HTML/CSS</p>
                    </div>
                    <div 
                        class="skill-bar" 
                        class:skill-bar-35={!isMobile ? timelinePosition <= -8600 : true}    
                        class:skill-bar-75={!isMobile ? timelinePosition <= -10600 : true}    
                        class:skill-bar-100={!isMobile ? timelinePosition <= -12600 : true}   
                    >
                        <p>React</p>
                    </div>
                    <div 
                        class="skill-bar" 
                        class:skill-bar-15={!isMobile ? timelinePosition <= -2600 : true}
                    >
                        <p>Java</p>
                    </div>
                    <div 
                        class="skill-bar" 
                        class:skill-bar-10={!isMobile ? timelinePosition <= -2600 : true}
                        class:skill-bar-35={!isMobile ? timelinePosition <= -4600 : true}    
                        class:skill-bar-50={!isMobile ? timelinePosition <= -8600 : true}    
                        class:skill-bar-75={!isMobile ? timelinePosition <= -10600 : true}    
                        class:skill-bar-85={!isMobile ? timelinePosition <= -12600 : true}    
                    >
                        <p>TypeScript</p>
                    </div>
                    <div 
                        class="skill-bar" 
                        class:skill-bar-15={!isMobile ? timelinePosition <= -2600 : true}
                        class:skill-bar-35={!isMobile ? timelinePosition <= -4600 : true}    
                        class:skill-bar-45={!isMobile ? timelinePosition <= -6600 : true}    
                        class:skill-bar-50={!isMobile ? timelinePosition <= -8600 : true}    
                    >
                        <p>PHP</p>
                    </div>
                    <div 
                        class="skill-bar" 
                        class:skill-bar-15={!isMobile ? timelinePosition <= -6600 : true}
                    >
                        <p>.NET/C#</p>
                    </div>
                    <div 
                        class="skill-bar" 
                        class:skill-bar-15={!isMobile ? timelinePosition <= -2600 : true}
                        class:skill-bar-35={!isMobile ? timelinePosition <= -4600 : true}    
                        class:skill-bar-50={!isMobile ? timelinePosition <= -8600 : true}    
                        class:skill-bar-75={!isMobile ? timelinePosition <= -10600 : true}    
                    >
                        <p>Python</p>
                    </div>
                    <div 
                        class="skill-bar" 
                        class:skill-bar-15={!isMobile ? timelinePosition <= -2600 : true}
                        class:skill-bar-35={!isMobile ? timelinePosition <= -4600 : true}    
                        class:skill-bar-50={!isMobile ? timelinePosition <= -8600 : true}    
                        class:skill-bar-75={!isMobile ? timelinePosition <= -10600 : true}    
                        class:skill-bar-85={!isMobile ? timelinePosition <= -12600 : true} 
                    >
                        <p>Database</p>
                    </div>
                    <a class="text-center w-full me-2 cursor-pointer" on:click={toggleExpandSkills}>{expandSkills ? 'Ver menos' : 'Ver mais'}</a>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .skills-bars {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        max-width: 500px;
    }
    .skill-bar {
        height:  28px;
        width: 150px;
        border-radius: 5px;
        border: 2px solid #cecece;
        color: #fff;
        position: relative;
        padding: 2px 20px;
        overflow: hidden;
    }
    .skill-bar p {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0px;
    }
    .skill-bar-10.skill-bar::before {
        transform: translateX(-92%);
    }
    .skill-bar-15.skill-bar::before {
        transform: translateX(-88%);
    }
    .skill-bar-20.skill-bar::before {
        transform: translateX(-80%);
    }
    .skill-bar-35.skill-bar::before {
        transform: translateX(-70%);
    }
    .skill-bar-45.skill-bar::before {
        transform: translateX(-60%);
    }
    .skill-bar-50.skill-bar::before {
        transform: translateX(-50%);
    }
    .skill-bar-75.skill-bar::before {
        transform: translateX(-28%);
    }
    .skill-bar-85.skill-bar::before {
        transform: translateX(-20%);
    }
    .skill-bar-100.skill-bar::before {
        transform: translateX(0%);
    }
    .skill-bar::before {
        content: '';
        position: absolute;
        color: #fff;
        transition: .8s all linear;
        transform: translateX(-98%);
        background: rgb(100, 100, 197);
        left: 0px;
        top: 0px;
        border-radius: 5px;
        height: 28px;
        width: 100%;
    }
    .skills-card {
        position: absolute;
        right: 0px;
        top: -25px;
        padding: 10px 20px;
        gap: 5px;
        flex-direction: column;
    }
    .skills-card.mobile {
        position: relative;
        top: 0px;
    }
    .profile-card.mobile .card-info {
        flex-direction: column;
        align-items: center;
    }
    .skills-card.mobile .skill-bar {
        width: 100%;
    }
    .skills-card.mobile a {
        display: none;
    }
    .skills-card.expand {
        left: 0px;
        top: 20px;
        width: 100vw;
        background: rgba(0,0,0,.8);
    }
    .skills-card.expand.scrolled {
        top: 0px;
    }
    .skills-card.expand .skills-bars {
        max-width: 100%;
        justify-content: center;
        margin: 20px 0px 0px 0px;
    }
    .skills-card.expand .skills-bars a {
        margin-top: 15px;
    }
    .space-between {
        justify-content: space-between;
        width: 100%;
    }
    .card-flex {
        display: flex;
    }
    .profile-card.scrolled {
        top: 50px;
    }
    .profile-card.mobile > div {
        flex-direction: column;
        gap: 20px;
    }
    h2, p {
      color: #fff;
    }
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

    @media (max-width: 480px) {
        .profile-card-centered {
            position: fixed;
            flex-direction: column;
            top: -480px;
            padding: 20px;
            transform: translateX(-50%) !important;
        }

        .profile-card {
            flex-wrap: wrap;
            justify-content: center;
        }
        .profile-card h2,
        .profile-card p {
            text-align: center !important;
        }
        .social-medias {
            justify-content: center;
        }
        .curriculum-btn {
            margin-top: 20px;
        }
    }
</style>
