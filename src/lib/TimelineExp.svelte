<script>
    import { onMount } from "svelte";
    import { Timeline, TimelineItem, Carousel, Gallery } from "flowbite-svelte";
    import { Icon } from "svelte-awesome";
    import {
        html5,
        gamepad,
        certificate,
        suitcase,
        balanceScale,
        language,
        clockO,
    } from "svelte-awesome/icons";
    import CarouselCertificates from "./CarouselCertificates.svelte";
    import CarouselPlatform from "./CarouselPlatform.svelte";

    export let timelinePosition;
    export let isMobile;

    let certificates2017 = [
        {
            alt: "Certificado de Hardware e manutenção de computadores",
            src: "/certificates/CERTIFICADO_DE_HARDWARE.jpg",
            title: "CERTIFICADO_DE_HARDWARE",
        },
        {
            alt: "Certificado de Python Básico",
            src: "/certificates/CERTIFICADO_DE_PYTHON.jpg",
            title: "CERTIFICADO_DE_HARDWARE",
        },
        {
            alt: "Certificado de Segurança da Informação",
            src: "/certificates/CERTIFICADO_DE_SEG_DA_INFO.jpg",
            title: "CERTIFICADO_DE_SEG_DA_INFO",
        },
        {
            alt: "Certificado de Inglês Básico",
            src: "/certificates/CERTIFICADO_DE_INGLES.jpg",
            title: "CERTIFICADO_DE_INGLES",
        },
        {
            alt: "Certificado de Hacking e Pentest",
            src: "/certificates/CERTIFICADO_DE_HACKING_E_PENTEST.jpg",
            title: "CERTIFICADO_DE_HACKING_E_PENTEST",
        },
    ];
    let certificates2018 = [
        {
            alt: "Certificado de Desenvolvimento Web - 6 Projetos prático",
            src: "/certificates/CERTIFICADO_WEB.jpg",
            title: "CERTIFICADO_WEB",
        },
        {
            alt: "Certificado de Flutter",
            src: "/certificates/CERTIFICADO_DE_FLUTTER.jpg",
            title: "CERTIFICADO_DE_FLUTTER",
        },
        {
            alt: "Certificado de NodeJS e MongoDB",
            src: "/certificates/CERTIFICADO_NODEJS_E_MONGODB.jpg",
            title: "CERTIFICADO_NODEJS_E_MONGODB",
        },
        {
            alt: "Certificado de Segurança da Informação",
            src: "/certificates/CERTIFICADO_DE_SEG_INFO.jpg",
            title: "CERTIFICADO_DE_SEG_INFO",
        },
        {
            alt: "Certificado de SCRUM pela SFPC",
            src: "/certificates/CERTIFICADO_DE_SCRUM.jpg",
            title: "CERTIFICADO_DE_SCRUM",
        },
        {
            alt: "Certificado de empreendedorismo",
            src: "/certificates/CERTIFICADO_DE_EMPREENDEDORISMO.jpg",
            title: "CERTIFICADO_DE_EMPREENDEDORISMO",
        },
    ];

    let imagesYungas = [
        {
            alt: "Yungas 1",
            src: "/platforms/yungas-1.webp",
            title: "yungas-1",
        },
        {
            alt: "Yungas 2",
            src: "/platforms/yungas-2.webp",
            title: "yungas-2",
        },
        {
            alt: "Yungas 3",
            src: "/platforms/yungas-3.webp",
            title: "yungas-3",
        },
        {
            alt: "Yungas 4",
            src: "/platforms/yungas-4.webp",
            title: "yungas-4",
        },
        {
            alt: "Yungas 5",
            src: "/platforms/yungas-5.webp",
            title: "yungas-5",
        },
    ];

    let imagesAbstrato = [
        {
            alt: "Growthlab 1",
            src: "/platforms/growthlab-1.jpg",
            title: "growthlab-1",
        },
        {
            alt: "Growthlab 2",
            src: "/platforms/growthlab-2.jpg",
            title: "growthlab-2",
        },
        {
            alt: "Innovax 1",
            src: "/platforms/innovax-1.png",
            title: "innovax-1",
        },
        {
            alt: "Innovax 2",
            src: "/platforms/innovax-2.png",
            title: "innovax-2",
        },
        {
            alt: "Habitat 1",
            src: "/platforms/habitat-1.png",
            title: "habitat-1",
        },
        {
            alt: "Habitat 2",
            src: "/platforms/habitat-2.png",
            title: "habitat-2",
        },
        {
            alt: "Topfans 1",
            src: "/platforms/topfans-1.png",
            title: "topfans-1",
        },
    ];
</script>

<div
    class="timeline-container {isMobile ? 'timeline-mobile' : ''} mt-10"
    style={isMobile
        ? ""
        : `transform: translateX(${timelinePosition}px);transition: transform 1s ease;`}
>
    <Timeline order={isMobile ? "vertical" : "horizontal"}>
        <TimelineItem>
            <svelte:fragment slot="icon">
                <div class="flex items-center relative">
                    <div
                        class="flex {isMobile
                            ? 'mobile-icon'
                            : 'desktop-icon'} md:relative z-10 justify-center items-center w-6 h-6 rounded-full ring-0 ring-white dark:bg-white-100 sm:ring-8 dark:ring-gray-900 shrink-0"
                    >
                        <svg
                            class="w-6 h-6 text-primary-600 dark:text-primary-400"
                            style="fill: white;"
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                            ><path
                                d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z"
                            /></svg
                        >
                    </div>
                    <div
                        style="border-top: 2px dashed #777;"
                        class="hidden sm:flex w-full border-t border-dashed bg-gray-200 h-1 dark:bg-gray-700"
                    />
                </div>
            </svelte:fragment>
            <div
                class="text-left font-normal text-gray-500 dark:text-gray-300 md:mt-2 w-1000"
            >
                <h2 class="font-bold text-2xl">24/10/2000</h2>
            </div>
        </TimelineItem>
        <TimelineItem>
            <svelte:fragment slot="icon">
                <div class="flex items-center relative">
                    <div
                        class="flex {isMobile
                            ? 'mobile-icon'
                            : 'desktop-icon'} md:relative z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                    >
                        <Icon
                            data={html5}
                            class="w-6 h-6 text-primary-600 dark:text-primary-400"
                        />
                    </div>
                    <div
                        class="hidden sm:flex w-full bg-gray-200 h-1 dark:bg-gray-700"
                    />
                </div>
            </svelte:fragment>
            <div
                class="text-left font-normal text-gray-500 dark:text-gray-300 md:mt-2 w-1000"
            >
                <h2 class="font-bold text-2xl">2012</h2>
                <p class="max-w-xl">
                    Em 2012, com 12 anos de idade, mergulhei em um mundo que
                    viria a definir minha trajetória profissional e pessoal. Foi
                    o ano em que tive meu primeiro contato com as linguagens que
                    formam a espinha dorsal da web: <b>HTML</b>, <b>CSS</b> e
                    <b>JavaScript</b>
                    básico. Embora fossem meus primeiros passos, era claro que eu
                    tinha encontrado uma paixão duradoura.
                </p>
            </div>
        </TimelineItem>
        <TimelineItem>
            <svelte:fragment slot="icon">
                <div class="flex items-center relative">
                    <div
                        class="flex {isMobile
                            ? 'mobile-icon'
                            : 'desktop-icon'} md:relative z-10 justify-center items-center w-6 h-6 bg-purple-200 rounded-full ring-0 ring-white dark:bg-purple-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                    >
                        <Icon
                            data={gamepad}
                            class="w-6 h-6 text-primary-700 dark:text-primary-100"
                        />
                    </div>
                    <div
                        class="hidden sm:flex w-full bg-gray-200 h-1 dark:bg-gray-700"
                    />
                </div>
            </svelte:fragment>
            <div
                class="text-left font-normal text-gray-500 dark:text-gray-300 md:mt-2 w-2000"
            >
                <h2 class="font-bold text-2xl">2013-2014</h2>
                <div class="md:flex xs:flex-col gap-10">
                    <p class="max-w-xl">
                        Durante estes anos, mergulhei de cabeça no fascinante
                        mundo do motion design. Utilizando ferramentas como
                        <b>Cinema 4D</b>, <b>After Effects</b> e ocasionalmente
                        o <b>Blender</b>, produzi intros impactantes para canais
                        no YouTube, variando desde letras tridimensionais até
                        animações elaboradas inspiradas no universo Minecraft.
                        Paralelamente, me aventurei no domínio técnico da
                        programação, aprofundando-me em <b>Java</b> para
                        desenvolver
                        <b>mods e plugins</b> personalizados para Minecraft. 2013
                        também foi marcado pelo meu envolvimento com diversos canais
                        no YouTube, onde aprimorei minhas habilidades em edição de
                        vídeo com o Adobe Premiere e design gráfico no Photoshop.
                        Contudo, 2014 trouxe uma revelação: minha paixão pelo empreendedorismo.
                        Alimentado por essa nova descoberta e combinando meus talentos,
                        lancei meu próprio servidor de Minecraft especializado em
                        "kitpvp", enriquecido com plugins que eu mesmo desenvolvi.
                        Estes anos não foram apenas de aprendizado, mas também de
                        realização e descoberta de novas paixões.
                    </p>
                    <div class="md:flex xs:flex-col gap-3">
                        <div class="flex-col">
                            <h2 class="text-1xl font-bold mb-2 mt-5">
                                Introduções para videos
                            </h2>
                            <iframe
                                width={isMobile ? 300 : 400}
                                height="285"
                                src="https://www.youtube.com/embed/oAo4Lbq3AaM?si=DnPDhmuaA9ed0gnR"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            />
                        </div>
                        <div class="flex-col">
                            <h2 class="text-1xl font-bold mb-2 mt-5">
                                Servidor em Java
                            </h2>
                            <iframe
                                width={isMobile ? 300 : 400}
                                height="285"
                                src="https://www.youtube.com/embed/XkP3nEyBKoo?si=cXS1uI1fikr23RQ5"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </TimelineItem>
        <TimelineItem>
            <svelte:fragment slot="icon">
                <div class="flex items-center relative">
                    <div
                        class="flex {isMobile
                            ? 'mobile-icon'
                            : 'desktop-icon'} md:relative z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                    >
                        <Icon
                            data={certificate}
                            class="w-6 h-6 text-blue-600 dark:text-blue-400"
                        />
                    </div>
                    <div
                        class="hidden sm:flex w-full bg-gray-200 h-1 dark:bg-gray-700"
                    />
                </div>
            </svelte:fragment>
            <div
                class="text-left font-normal text-gray-500 dark:text-gray-300 md:mt-2 w-2000"
            >
                <h2 class="font-bold text-2xl">2016-2017</h2>
                <div class="md:flex xs:flex-col gap-10">
                    <div class="max-w-xl">
                        <p>
                            Neste ano, ampliei consideravelmente minha base de
                            conhecimentos. Dediquei-me intensamente à
                            consolidação das minhas competências em <b
                                >PHP, CSS, HTML e JavaScript</b
                            >. O enfrentamento de ataques DDoS em um dos meus
                            projetos foi um marco, levando-me a uma paixão
                            intensa por segurança da informação. Estudei
                            vulnerabilidades como
                            <b>SQL injection, XSS e brute force</b>, e me
                            aventurei pelo universo da criptografia.
                            Adicionalmente, explorei o Kali Linux, aprofundando
                            meus conhecimentos em sistemas operacionais
                            <b>Linux</b>
                            e
                            <b>Windows</b>. Paralelamente, completei um curso de
                            hardware e manutenção de computadores, solidificando
                            ainda mais minha base técnica, também participei de
                            grupos no facebook sobre Hacking permitindo que eu
                            compartilhase algumas ferramentas próprias. Aprendi
                            ainda mais
                            <b>Python</b>, frameworks como <b>Laravel</b> e
                            <b>CMS WordPress</b>, comecei no mundo do NodeJS.
                            2017 foi, sem dúvida, um ano de grandes conquistas e
                            aprendizados. Também tive a oportunidade de
                            trabalhar pela primeira vez com o professor que
                            ministrou o meu curso de Hardware, fazendo
                            manutenção em computadores, gerindo redes sociais e
                            inovações com chatbots.
                        </p>
                    </div>
                    <div class="flex-col certificates">
                        <h2 class="text-2xl">Certificados</h2>
                        <CarouselCertificates
                            images={certificates2017}
                            {isMobile}
                        />
                    </div>
                </div>
            </div>
        </TimelineItem>
        <TimelineItem>
            <svelte:fragment slot="icon">
                <div class="flex items-center relative">
                    <div
                        class="flex {isMobile
                            ? 'mobile-icon'
                            : 'desktop-icon'} md:relative z-10 justify-center items-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white dark:bg-gray-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                    >
                        <Icon
                            data={suitcase}
                            class="w-6 h-6 text-gray-600 dark:text-gray-400"
                        />
                    </div>
                    <div
                        class="hidden sm:flex w-full bg-gray-200 h-1 dark:bg-gray-700"
                    />
                </div>
            </svelte:fragment>
            <div
                class="text-left font-normal text-gray-500 dark:text-gray-300 md:mt-2 w-2000"
            >
                <h2 class="font-bold text-2xl">2018-2019</h2>
                <div class="md:flex xs:flex-col gap-10">
                    <div class="max-w-xl">
                        <p>
                            Iniciei o ano de 2018 ingressando na Audaces como
                            jovem aprendiz na área de T.I., onde rapidamente me
                            destaquei. Além de lidar com <b>CPD</b>,
                            <b>cabeamento de rede</b>,
                            <b>manutenção e formatação de computadores</b>,
                            mergulhei na programação <b>.NET/C#</b> voltada para
                            SAP B1. Ao mesmo tempo, dediquei-me a aprender mais
                            sobre soluções de cloud, familiarizando-me com
                            <b>AWS, EC2 e S3</b>. A minha iniciativa e vontade
                            de inovar me levaram a criar dois produtos internos:
                            um sistema de votação única e outro interligado ao
                            servidor SNEP para visualização de ramais, ambas
                            dores que encontrei na empresa. Estes projetos foram
                            extremamente bem-recebidos, consolidando minha
                            reputação na empresa. Não apenas pelo meu talento
                            técnico, mas também pelo meu caráter e interação com
                            a equipe, tornei-me uma figura muito querida na
                            Audaces. Essa combinação de habilidade e afinidade
                            com os colegas me proporcionou uma rápida ascensão,
                            passando de aprendiz a estagiário, e solidificou
                            minha paixão pelo mundo da tecnologia.
                        </p>
                    </div>
                    <div class="flex-col certificates">
                        <h2 class="text-2xl">Certificados</h2>
                        <CarouselCertificates
                            images={certificates2018}
                            {isMobile}
                        />
                    </div>
                </div>
            </div>
        </TimelineItem>
        <TimelineItem>
            <svelte:fragment slot="icon">
                <div class="flex items-center relative">
                    <div
                        class="flex {isMobile
                            ? 'mobile-icon'
                            : 'desktop-icon'} md:relative z-10 justify-center items-center w-6 h-6 bg-red-200 rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0"
                    >
                        <svg
                            class="w-6 h-6 text-green-600 dark:text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="red"
                            height="1em"
                            viewBox="0 0 512 512"
                            ><path
                                d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V43.5c0 49.9-60.3 74.9-95.6 39.6L120.2 75C107.7 62.5 87.5 62.5 75 75s-12.5 32.8 0 45.3l8.2 8.2C118.4 163.7 93.4 224 43.5 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H43.5c49.9 0 74.9 60.3 39.6 95.6L75 391.8c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V468.5c0-49.9 60.3-74.9 95.6-39.6l8.2 8.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-8.2-8.2c-35.3-35.3-10.3-95.6 39.6-95.6H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H468.5c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C348.3 118.4 288 93.4 288 43.5V32zM176 224a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                            /></svg
                        >
                    </div>
                    <div
                        class="hidden sm:flex w-full bg-gray-200 h-1 dark:bg-gray-700"
                    />
                </div>
            </svelte:fragment>
            <div
                class="text-left font-normal text-gray-500 dark:text-gray-300 md:mt-2 w-2000"
            >
                <h2 class="font-bold text-2xl">2020</h2>
                <div class="md:flex xs:flex-col gap-5">
                    <div class="flex-col max-w-xl w-full">
                        <p class="max-w-xl">
                            Durante 2020, um ano marcado pela pandemia,
                            enfrentei um layoff na Audaces, onde atuava como
                            Desenvolvedor Trainee e era frequentemente
                            reconhecido pela minha proatividade e entregas
                            eficientes. Em setembro, transicionei para a
                            CredDent, uma startup focada em soluções de
                            pagamento para dentistas. Nesse período, ampliei
                            meus conhecimentos em tecnologias como <b>Vue.js</b
                            >, <b>PHP</b> e
                            <b>PostgreSQL</b>, e ainda mergulhei no
                            desenvolvimento mobile com <b>React Native</b>. Um
                            marco desse ano foi a conquista de um prêmio em uma
                            feira de ciências, graças a um aplicativo que criei
                            para auxiliar animais em situação de rua. Apesar do
                            aprendizado e do reconhecimento, senti a necessidade
                            de buscar novas oportunidades devido a alguns
                            desafios no ambiente de trabalho da CredDent, como a
                            frequente exigência de atuar fora do meu escopo
                            tecnológico.
                        </p>
                        <p class="max-w-xl mt-5">
                            Tatuei minha paixão pela tecnologia no começo do ano
                            ❤️
                        </p>
                    </div>
                    <div class="flex-col md:max-w-md max-w-xs mr-6">
                        <Gallery
                            class="gap-3 grid-cols-1"
                            items={[
                                {
                                    alt: "audaces",
                                    src: "/platforms/audaces-1.png",
                                },
                                {
                                    alt: "audaces",
                                    src: "/tattoo.jpg",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </TimelineItem>
        <TimelineItem>
            <svelte:fragment slot="icon">
                <div class="flex items-center relative">
                    <div
                        class="flex {isMobile
                            ? 'mobile-icon'
                            : 'desktop-icon'} md:relative z-10 justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-0 ring-white dark:bg-green-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                    >
                        <Icon
                            data={language}
                            class="w-6 h-6 text-green-600 dark:text-green-400"
                        />
                    </div>
                    <div
                        class="hidden sm:flex w-full bg-gray-200 h-1 dark:bg-gray-700"
                    />
                </div>
            </svelte:fragment>
            <div
                class="text-left font-normal text-gray-500 dark:text-gray-300 md:mt-2 w-2000"
            >
                <h2 class="font-bold text-2xl">2021-05/2022</h2>
                <div class="md:flex xs:flex-col gap-5">
                    <p class="max-w-xl">
                        Iniciei minha jornada na Yungas como um dos primeiros
                        desenvolvedores, assumindo o papel de <b
                            >Full-stack Developer</b
                        >. Em meio a um cenário de desafios, tive uma
                        participação significativa na refatoração e melhoria do
                        backend <b>Python com Flask</b>, otimizando
                        <b>queries SQL</b>
                        que resultaram em avanços significativos na performance da
                        plataforma. No front-end, trabalhando com
                        <b>Svelte</b>, contribuí para a criação de
                        funcionalidades variadas, incluindo
                        <b>sistemas de chat em tempo real</b>,
                        <b>gerenciamento de tickets</b>
                        e <b>checklists</b>, entre outros. Meu comprometimento e
                        esforço foram recompensados quando a empresa firmou
                        parcerias com clientes renomados como Burger King,
                        Oakberry e Farma e Farma, e, posteriormente, recebeu
                        investimentos da renomada SMZTO. Durante meu período na
                        Yungas, também aprimorei conhecimentos em paradigmas de
                        <b>programação funcional</b> e
                        <b>implementei processos de UI/UX</b>, incluindo a
                        elaboração de projetos no Figma antes de iniciar o
                        desenvolvimento. Essa inovação beneficiou tanto o fluxo
                        de trabalho interno quanto a experiência do usuário.
                        Minha proatividade em sugerir e implementar novas
                        funcionalidades fez com que fossem amplamente adotadas e
                        apreciadas tanto pela equipe quanto pelos usuários da
                        plataforma.
                    </p>
                    <div class="flex-col mt-5 max-w-xs sm:max-w-full">
                        <h2>As imagens a seguir são meramente ilustrativas</h2>
                        <CarouselPlatform images={imagesYungas} {isMobile} />
                    </div>
                </div>
            </div>
        </TimelineItem>
        <TimelineItem>
            <svelte:fragment slot="icon">
                <div class="flex items-center relative">
                    <div
                        class="flex {isMobile
                            ? 'mobile-icon'
                            : 'desktop-icon'} md:relative z-10 justify-center items-center w-6 h-6 bg-yellow-200 rounded-full ring-0 ring-white dark:bg-yellow-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                    >
                        <Icon
                            data={balanceScale}
                            class="w-6 h-6 text-yellow-600 dark:text-yellow-400"
                        />
                    </div>
                    <div
                        class="hidden sm:flex w-full bg-gray-200 h-1 dark:bg-gray-700"
                    />
                </div>
            </svelte:fragment>
            <div
                class="text-left font-normal text-gray-500 dark:text-gray-300 md:mt-2 w-1250"
            >
                <h2 class="font-bold text-2xl">05/2022-10/2023</h2>
                <div class="md:flex xs:flex-col gap-5">
                    <p class="max-w-xl">
                        Em busca de mais desafios e crescimento profissional,
                        juntei-me à Abstrato como o primeiro desenvolvedor. Com
                        a responsabilidade de estruturar e criar três
                        plataformas SaaS do zero - <b
                            >InnovaX, GrowthLab e Habitat</b
                        >
                        - enfrentei e superamos diversos desafios. Estas soluções
                        englobam desde gestão de tarefas inspiradas no Trello, a
                        formulários inteligentes que propiciavam a criação automática
                        de planos de ação, até um sistema dedicado à gestão de cidades
                        inteligentes. Além desses projetos, também fui a força motriz
                        por trás do desenvolvimento de uma plataforma com inspirações
                        no OnlyFans, utilizando as modernas tecnologias
                        <b>NestJS</b>
                        e
                        <b>NextJS</b>. Esta experiência demonstrou minha
                        habilidade em se adaptar e dominar novas ferramentas em
                        um curto período de tempo. Durante minha passagem pela
                        Abstrato, aprofundei meu domínio em <b>TypeScript</b>,
                        <b>Svelte</b>,
                        <b>programação funcional</b>, <b>PostgreSQL</b>,
                        <b>NestJS</b>, mantendo simultaneamente toda a
                        infraestrutura operando de forma otimizada na
                        <b>AWS</b> e posteriormente na <b>Azure</b>. Contudo,
                        sendo o único desenvolvedor por maior parte desse
                        período, o volume de trabalho e responsabilidades se
                        tornaram exaustivos, levando a sentimentos de cansaço e
                        desânimo.
                    </p>
                    <div class="flex">
                        <CarouselPlatform images={imagesAbstrato} {isMobile} />
                    </div>
                </div>
            </div>
        </TimelineItem>
        <TimelineItem>
            <svelte:fragment slot="icon">
                <div class="flex items-center relative">
                    <div
                        class="flex {isMobile
                            ? 'mobile-icon'
                            : 'desktop-icon'} md:relative z-10 justify-center items-center w-6 h-6 bg-orange-200 rounded-full ring-0 ring-white dark:bg-orange-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                    >
                        <Icon
                            data={clockO}
                            class="w-6 h-6 text-orange-600 dark:text-orange-400"
                        />
                    </div>
                </div>
            </svelte:fragment>
            <div
                class="text-left font-normal text-gray-500 dark:text-gray-300 md:mt-2 w-2000"
            >
                <h2 class="font-bold text-2xl">2024 - Em breve</h2>
            </div>
        </TimelineItem>
    </Timeline>
</div>

<style>
    .timeline-container.timeline-mobile {
        position: relative;
        top: 0px;
        margin-bottom: 200px;
    }

    .timeline-container.timeline-mobile .max-w-xl {
        max-width: 300px;
    }
    .timeline-container {
        width: 100%;
        position: fixed;
        top: 200px;
    }

    .mobile-icon {
        left: -36px;
        top: 0px;
        position: absolute;
    }

    .desktop-icon {
        left: -12.5px !important;
    }
</style>
