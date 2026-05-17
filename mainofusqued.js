import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const gsap = window.gsap;

// ==========================================
// 1. ARQUITETURA CORE & ENGINE
// ==========================================
const canvas = document.querySelector('#webgl-canvas');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x030305, 0.008);
scene.background = new THREE.Color(0x030305);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(0, 3, 15);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: "high-performance" });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

// Post-Processing AAA
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.0, 0.4, 0.85);
bloomPass.threshold = 0.2;
bloomPass.strength = 0.8; 
bloomPass.radius = 0.5;
const outputPass = new OutputPass();

composer.addPass(renderPass);
composer.addPass(bloomPass);
composer.addPass(outputPass);

// Iluminação Cinemática
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);
const mainLight = new THREE.DirectionalLight(0x8b5cf6, 3);
mainLight.position.set(50, 100, 50);
scene.add(mainLight);
const fillLight = new THREE.DirectionalLight(0x00eeff, 1.5);
fillLight.position.set(-50, 0, -50);
scene.add(fillLight);
const styles = `
    .global-copyright { position: fixed; bottom: 20px; ... }
    .cyber-link { color: #00eeff; ... }
`;
const cssProtegido = `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@300;400;600&display=swap');

:root {
    --neon-blue: #00eeff;
    --neon-purple: #8b5cf6;
    --bg-dark: #030305;
    --glass-bg: rgba(10, 10, 15, 0.45);
    --glass-border: rgba(139, 92, 246, 0.3);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}

body {
    background-color: var(--bg-dark);
    color: #fff;
    font-family: 'Inter', sans-serif;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
}

/* No mobile, permite rolagem quando o blog está aberto */
@media (max-width: 1024px) {
    body:has(#blog-panel.active) {
        overflow: auto;
    }
}

#webgl-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

/* ============================================ */
/* GLASSMORPHISM & PREMIUM UI */
/* ============================================ */

#ui-layer {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle at center, transparent 0%, #000 100%);
}

.premium-blur {
    background: var(--glass-bg);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 4rem;
    text-align: center;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(139, 92, 246, 0.1);
    position: relative;
    overflow: hidden;
}

.premium-blur::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 50%; height: 100%;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent);
    transform: skewX(-20deg);
    animation: shine 4s infinite;
}

@keyframes shine {
    100% { left: 200%; }
}

.profile-pic-container {
    position: relative;
    width: 160px;
    height: 160px;
    margin: 0 auto 2rem;
}

#profile-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
    z-index: 2;
    border: 2px solid var(--neon-purple);
}

.hologram-ring {
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    border: 1px dashed var(--neon-blue);
    animation: spin 10s linear infinite;
    opacity: 0.5;
}

@keyframes spin { 100% { transform: rotate(360deg); } }

h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: -1px;
    background: linear-gradient(135deg, #fff, var(--neon-purple));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
}

.subtitle {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    color: var(--neon-blue);
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 2rem;
}

.system-status {
    font-size: 0.75rem;
    color: #666;
    letter-spacing: 2px;
    margin-bottom: 3rem;
}

.cyber-btn {
    background: transparent;
    color: #fff;
    border: 1px solid var(--neon-purple);
    padding: 1rem 3rem;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 2px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.cyber-btn:hover {
    background: var(--neon-purple);
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
    color: #fff;
    transform: translateY(-2px);
}

/* ============================================ */
/* HUD CINEMATOGRÁFICO */
/* ============================================ */

#hud-layer {
    position: fixed;
    inset: 0;
    z-index: 50;
    pointer-events: none;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: opacity 1s;
}

#hud-layer.hidden { opacity: 0; }

.hud-top-left { display: flex; gap: 2rem; align-items: flex-start; }

.radar-container {
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0, 238, 255, 0.3);
    border-radius: 50%;
    position: relative;
    background: rgba(0,0,0,0.2);
}

.radar-sweep {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: conic-gradient(from 0deg, transparent 70%, rgba(0, 238, 255, 0.4) 100%);
    animation: sweep 2s linear infinite;
}

@keyframes sweep { 100% { transform: rotate(360deg); } }

.coordinates {
    font-family: 'Space Grotesk', monospace;
    color: var(--neon-blue);
    font-size: 0.9rem;
    letter-spacing: 2px;
}

.crosshair {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(255,255,255,0.2);
    margin: auto;
    position: relative;
}
.crosshair::before, .crosshair::after {
    content: ''; position: absolute; background: rgba(255,255,255,0.5);
}
.crosshair::before { top: 50%; left: -10px; right: -10px; height: 1px; }
.crosshair::after { left: 50%; top: -10px; bottom: -10px; width: 1px; }

.hud-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.speed-bar {
    width: 200px;
    height: 4px;
    background: rgba(255,255,255,0.1);
}

.speed-fill {
    height: 100%;
    width: 0%;
    background: var(--neon-blue);
    box-shadow: 0 0 10px var(--neon-blue);
    transition: width 0.1s;
}

.controls-hint {
    font-family: 'Space Grotesk', sans-serif;
    color: rgba(255,255,255,0.5);
    font-size: 0.8rem;
    letter-spacing: 2px;
}

/* ============================================ */
/* TERMINAL DO BLOG (TECLA S) */
/* ============================================ */

#blog-panel {
    position: fixed;
    right: -100%;
    top: 0;
    width: 450px;
    height: 100%;
    z-index: 150;
    background: rgba(5, 5, 8, 0.9);
    border-left: 1px solid var(--neon-blue);
    backdrop-filter: blur(15px);
    transition: right 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex; /* Adicionado para flexbox */
    flex-direction: column; /* Adicionado para flexbox */
}

#blog-panel.active { right: 0; }

.blog-glass { /* Adicionado: Envolver o conteúdo interno para gerenciar o padding e flex */
    padding: 3rem; /* Padding movido de #blog-panel para cá */
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Permite que .blog-glass ocupe o espaço disponível */
    overflow: hidden; /* Garante que o conteúdo não vaze antes da rolagem */
}

.close-blog {
    background: none; border: none; color: #888;
    cursor: pointer; font-family: 'Space Grotesk';
    margin-bottom: 2rem;
    align-self: flex-start; /* Alinha o botão à esquerda dentro do flex container */
}

.blog-header h2 {
    font-family: 'Space Grotesk';
    color: var(--neon-blue);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.blog-content {
    flex-grow: 1; /* Faz o conteúdo do blog ocupar o espaço restante */
    overflow-y: auto; /* Adiciona a barra de rolagem vertical */
    padding-right: 15px; /* Espaço para a barra de rolagem */
    margin-bottom: 2rem; /* Espaçamento antes dos links sociais */
}

.badge {
    background: rgba(0, 238, 255, 0.1);
    color: var(--neon-blue);
    border: 1px solid var(--neon-blue);
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
    border-radius: 20px;
    margin-right: 0.5rem;
}

.timeline-item {
    margin-top: 2rem;
    border-left: 2px solid rgba(139, 92, 246, 0.3);
    padding-left: 1.5rem;
    position: relative;
}
.timeline-item::before {
    content: ''; position: absolute; left: -6px; top: 0;
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--neon-purple);
}
.timeline-item h3 { font-size: 1rem; margin-bottom: 0.5rem; color: #fff; }
.timeline-item p { color: #aaa; font-size: 0.85rem; line-height: 1.6; }

/* ============================================ */
/* EXPERIÊNCIA DE PROJETOS */
/* ============================================ */

#project-showcase {
    position: fixed; inset: 0; z-index: 200;
    display: flex; justify-content: center; align-items: center;
    background: rgba(0,0,0,0.8); backdrop-filter: blur(10px);
    opacity: 0; visibility: hidden; transition: all 0.5s;
}
#project-showcase.active { opacity: 1; visibility: visible; }

.showcase-glass {
    width: 90%; max-width: 1000px;
    background: rgba(10, 10, 15, 0.6); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px; padding: 4rem; position: relative;
}

.proj-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 3rem;
}

.proj-section h3 {
    font-family: 'Space Grotesk'; color: #666; font-size: 0.9rem;
    letter-spacing: 2px; margin-bottom: 1rem;
}
.proj-section p { color: #ccc; line-height: 1.8; }

#interaction-ui {
    position: fixed; bottom: 20%; left: 50%; transform: translateX(-50%);
    z-index: 80; opacity: 0; transition: opacity 0.3s;
}
#interaction-ui.visible { opacity: 1; }

.interaction-box {
    background: rgba(0,0,0,0.6); border: 1px solid rgba(139, 92, 246, 0.5);
    padding: 0.8rem 1.5rem; border-radius: 30px; display: flex; align-items: center; gap: 1rem;
}
.key-hint { background: #fff; color: #000; padding: 0.2rem 0.6rem; border-radius: 4px; font-weight: bold; }

#warp-flash {
    position: fixed; inset: 0; background: #fff; z-index: 300;
    opacity: 0; pointer-events: none;
}
/* ============================================ */
/* SISTEMA DE SLIDES DO PROJETO */
/* ============================================ */
.slide {
    display: none;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.5s ease-out;
}

.slide.active {
    display: block;
    opacity: 1;
    transform: translateX(0);
}

.dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    transition: background 0.3s;
}
.dot.active { background: var(--neon-blue); box-shadow: 0 0 10px var(--neon-blue); }

.cyber-btn-outline {
    background: transparent; color: #aaa; border: 1px solid #555;
    padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; transition: 0.3s;
}
.cyber-btn-outline:hover { color: #fff; border-color: #fff; }
/* ============================================ */
/* TERMINAL SOCIAL LINKS */
/* ============================================ */

.terminal-socials {
    display: flex;
    gap: 1.5rem;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px dashed rgba(139, 92, 246, 0.3); /* Linha divisória futurista */
}

.cyber-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    z-index: 1;
    pointer-events: auto !important; /* Garante que sejam clicáveis */
}

.link-icon {
    font-weight: 900;
    opacity: 0.7;
}

/* Animação de preenchimento de fundo */
.cyber-link::before {
    content: '';
    position: absolute;
    top: 0; 
    left: 0; 
    width: 0%; 
    height: 100%;
    transition: width 0.4s ease;
    z-index: -1;
}

.cyber-link:hover::before {
    width: 100%;
}

/* Estilo específico do GitHub (Azul Neon) */
.link-github {
    color: var(--neon-blue);
    border: 1px solid rgba(0, 238, 255, 0.4);
    background: rgba(0, 238, 255, 0.05);
}

.link-github::before {
    background: rgba(0, 238, 255, 0.15);
}

.link-github:hover {
    box-shadow: 0 0 20px rgba(0, 238, 255, 0.4);
    border-color: var(--neon-blue);
    transform: translateY(-2px);
    text-shadow: 0 0 8px rgba(0, 238, 255, 0.8);
}

/* Estilo específico do Instagram (Roxo Neon) */
.link-instagram {
    color: var(--neon-purple);
    border: 1px solid rgba(139, 92, 246, 0.4);
    background: rgba(139, 92, 246, 0.05);
}

.link-instagram::before {
    background: rgba(139, 92, 246, 0.15);
}

.link-instagram:hover {
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
    border-color: var(--neon-purple);
    transform: translateY(-2px);
    text-shadow: 0 0 8px rgba(139, 92, 246, 0.8);
}
/* ============================================ */
/* COPYRIGHT GLOBAL (WATERMARK STYLE) */
/* ============================================ */

.global-copyright {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999; /* Garante que fique acima de tudo, inclusive do HUD e Modais */
    pointer-events: none; /* Não interfere nos cliques do usuário */
}

.global-copyright span {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.15); /* Bem sutil para não distrair */
    letter-spacing: 2px;
    text-transform: uppercase;
    white-space: nowrap;
    
    /* Efeito de Scanline sutil típico de interfaces militares */
    text-shadow: 0 0 5px rgba(139, 92, 246, 0.2);
    
    /* Adiciona uma pequena borda lateral para dar um ar de "terminal" */
    border-right: 2px solid rgba(0, 238, 255, 0.3);
    padding-right: 10px;
}

/* Responsividade: diminui ainda mais em telas pequenas */
@media (max-width: 768px) {
    .global-copyright {
        bottom: 10px;
        right: 10px;
    }
    .global-copyright span {
        font-size: 8px;
        letter-spacing: 1px;
    }

    /* Ajustes para a tela inicial */
    #ui-layer .premium-blur {
        padding: 2rem;
        margin: 1rem;
    }

    h1 {
        font-size: 2.5rem;
    }

    .subtitle {
        font-size: 0.8rem;
        letter-spacing: 2px;
    }

    /* Ajustes para o painel do blog (Arquivo Pessoal) */
    #blog-panel {
        width: 100%; /* Ocupa toda a largura em telas menores */
    }

    .blog-glass {
        padding: 2rem; /* Ajusta o padding em telas menores */
    }

    .blog-header h2 {
        font-size: 1.2rem;
    }

    .blog-content {
        /* max-height: calc(100vh - 200px); /* Altura máxima para ativar scroll */
        /* overflow-y: auto; */
        padding-right: 15px; /* Espaço para a barra de rolagem */
        margin-bottom: 1rem; /* Ajusta espaçamento para os links sociais */
    }

    /* Ajustes para o showcase de projetos */
    #project-showcase .showcase-glass {
        width: 95%;
        padding: 2rem;
        max-height: 90vh; /* Permite scroll se o conteúdo for muito grande */
        overflow-y: auto;
    }

    #close-project {
        position: sticky;
        top: 0;
        right: 0;
        margin-bottom: 1rem !important;
        width: 100%;
        box-sizing: border-box;
        z-index: 10;
    }

    .slide-controls {
        flex-direction: column; /* Botões empilhados */
        gap: 1rem;
        margin-top: 2rem !important;
        padding-top: 1rem !important;
    }

    .slide-controls button {
        width: 100%; /* Botões ocupam a largura total */
    }

    .terminal-socials {
        flex-direction: column;
        gap: 1rem;
    }

    .cyber-link {
        width: 100%;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    #ui-layer .premium-blur {
        padding: 1.5rem;
    }

    h1 {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 0.7rem;
    }

    #blog-panel {
        padding: 1.5rem;
    }

    #project-showcase .showcase-glass {
        padding: 1.5rem;
    }
}

/* ============================================ */
/* AVISO MOBILE                                 */
/* ============================================ */

#mobile-warning {
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
    padding: 2rem;
}

#mobile-warning.hidden {
    display: none;
}

.mobile-warning-glass {
    background: rgba(10, 10, 15, 0.95);
    border: 1px solid var(--neon-purple);
    border-radius: 16px;
    padding: 3rem 2rem;
    text-align: center;
    max-width: 400px;
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.3);
}

.mobile-warning-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: pulse 2s infinite;
}

.mobile-warning-glass h2 {
    font-family: 'Space Grotesk', sans-serif;
    color: var(--neon-blue);
    font-size: 1.3rem;
    letter-spacing: 3px;
    margin-bottom: 1.5rem;
}

.mobile-warning-glass p {
    color: #ccc;
    font-size: 0.95rem;
    line-height: 1.7;
}

/* Esconde o aviso em telas grandes (desktop) */
@media (min-width: 1025px) {
    #mobile-warning {
        display: none !important;
    }
}`;
const styleTag = document.createElement('style');
    styleTag.textContent = cssProtegido;
    document.head.appendChild(styleTag);

const projectDB = {
    "Verifi": {
        title: "Verifi (Anti-Fraude)",
        tech: ["Java 25", "Spring Boot", "Machine Learning", "VPS(Vitual private server)"],
        concept: "Diante do aumento de fraudes financeiras nwwwwo sistema de pagamentos brasileiro, o projeto Verifi.com desenvolveu uma plataforma para verificação de autenticidade de boletos e chaves Pix. O objetivo é oferecer uma ferramenta de análise de risco acessível ao cidadão brasileiro. Utilizando Metodologia Ágil, a arquitetura foi construída com Spring Boot para a análise e PHP para o gerenciamento de interface, empregando Inteligência Artificial (IA) em nuvem para o cruzamento de dados de beneficiários. Para garantir a inclusão, integrou-se a Suíte VLibras. O projeto baseou-se em uma pesquisa quantitativa com alguns participantes, revelando que 22,2% já foram vítimas de golpes. Os testes de validação mostraram que o refinamento de prompt na IA elevou a assertividade de 65% para 85%. Conclui-se que a solução apresenta alta escalabilidade, com viabilidade técnica para integração via API em aplicativos bancários, reduzindo a vulnerabilidade dos usuários.",
        techDesc: "A engenharia e arquitetura do projeto Verifi.com baseiam-se em uma estrutura de microsserviços com abordagem poliglota , utilizando Java com o framework Spring Boot para a lógica de negócio e análise documental via API REST , enquanto o PHP gerencia a interface e comunicações externas. O sistema processa arquivos nos formatos PDF e JPEG , extraindo dados que são analisados pela Inteligência Artificial Gemini; essa IA teve sua assertividade elevada de 65% para 85% por meio do refinamento de prompts para identificar inconsistências e padrões de fraudes. Para reforçar a segurança, a arquitetura integra experimentalmente o score de risco da API Pix Risk, que avalia o histórico das contas bancárias de beneficiários , além de utilizar um banco de dados MySQL para persistência e JWT (JSON Web Token) para garantir a segurança das requisições em um ambiente hospedado em servidor VPS. O fluxo operacional, organizado via metodologia ágil Kanban , percorre desde o upload do documento até a geração de um relatório de risco detalhado para o usuário , incluindo também acessibilidade por meio da integração com a Suíte VLibras. ",
        result: "O resultado final do projeto Verifi.com demonstrou a viabilidade técnica de uma solução escalável para o combate a fraudes bancárias, alcançando uma estabilidade operacional significativa após a migração para um ambiente de servidor VPS. O principal avanço medido foi a eficácia da Inteligência Artificial Gemini, que elevou sua taxa de assertividade de 65% para 85% após o refinamento estratégico de prompts e melhorias na leitura de imagens. Além disso, a integração experimental com o score da Pix Risk permitiu que a ferramenta evoluísse de uma simples validadora de documentos para um sistema completo de prevenção de risco transacional, reduzindo falsos positivos e oferecendo um relatório claro e direto ao usuário final. O protótipo cumpriu seu objetivo de atuar como uma barreira preventiva em tempo real, fornecendo uma base sólida para futuras expansões em infraestruturas de alta escala e possíveis parcerias com instituições financeiras.",
        link: "https://drive.google.com/file/d/1KKs-6aEw60zC2WRBx2zA7LpadQpKyDQG/view?usp=sharing",
        document: "Acessar documentação"
    },
    "Java&Café": {
        title: "Java&Café",
        tech: ["Java 25", "MySql", "WebHook"],
        concept: "A concepção do projeto Java & Café nasceu da ideia de unir a eficiência tecnológica na gestão de uma cafeteria à responsabilidade social, transformando um ambiente de consumo tradicional em um modelo de negócio moderno e sustentável. O foco principal foi otimizar a experiência do cliente através de conveniências como pedidos remotos e agendados, reduzindo filas e tempos de espera, ao mesmo tempo em que oferece uma gestão operacional robusta para o estabelecimento.  Além da vertente comercial, a concepção traz um forte pilar de impacto social, inspirado nos Objetivos de Desenvolvimento Sustentável (ODS) da ONU. Isso se materializa na funcionalidade de arredondamento de troco para doações, permitindo que pequenas transações cotidianas contribuam para causas maiores. Todo o desenvolvimento foi guiado pela cultura DevOps, garantindo que o sistema fosse construído sob ciclos contínuos de automação, colaboração e monitoramento, resultando em uma plataforma que equilibra funcionalidade técnica com um propósito ético e comunitário.",
        techDesc: "A arquitetura e engenharia do sistema Java & Café baseiam-se na linguagem Java e na metodologia DevOps, utilizando uma estrutura organizada em pacotes lógicos que separam a interface gráfica em Swing da lógica de negócio e da persistência de dados em um banco MySQL. O projeto prioriza a eficiência operacional e a segurança por meio de processamento assíncrono com SwingWorker e ExecutorService para evitar o bloqueio da interface durante verificações de estoque, além de implementar criptografia assimétrica e monitoramento de auditoria via integração com o Discord. O sistema atende a requisitos funcionais complexos, como gestão de fidelidade com resgate de pontos, agendamento de pedidos remotos e uma funcionalidade inovadora de arredondamento de troco para doações sociais, mantendo o desempenho com um tempo de resposta limite de 10 segundos para operações críticas. Toda a estrutura foi validada por testes de caixa preta e branca, que identificaram a necessidade de refinamentos em loops de mensagens de erro e na lógica de validação de estoque para garantir a estabilidade final do software.",
        result: "Os resultados do projeto Java & Café demonstraram que o sistema possui uma base tecnológica sólida, porém os testes realizados entre 23 e 24 de maio revelaram falhas críticas em funcionalidades essenciais. Entre os principais problemas identificados, destacam-se a remoção indevida de itens do pedido quando a quantidade excede o estoque, a continuidade de operações mesmo com CPFs inválidos no programa de fidelidade e a ocorrência de loopings de erro durante o login de funcionários e o fechamento do programa. Além disso, observaram-se limitações na interface, como a impossibilidade de usar vírgula como separador decimal em pagamentos e a sobreposição de janelas que ocultava botões de confirmação. Conclui-se que a correção desses pontos é fundamental para garantir a estabilidade operacional, a segurança dos dados e o cumprimento do propósito inovador de equilibrar eficiência comercial com impacto social.",
        link: "https://drive.google.com/file/d/1Gm4OefASgU3zvqDjyRsqMxBTOF2NALja/view?usp=sharing",
        document: "Acessar documentação"
    },
    "Burger-Battle": {
        title: "Burger Battle",
        tech: ["Java 25", "Mysql"],
        concept: "A concepção do projeto Burger Battle foi fundamentada no desenvolvimento de um jogo de combate em turnos utilizando os pilares da Programação Orientada a Objetos (POO), como encapsulamento e polimorfismo, para criar uma experiência interativa e modular. O objetivo central foi estruturar a lógica de batalha e a progressão do jogador através de fases e cenas distintas, integrando elementos multimídia e gerenciamento de estados para garantir um fluxo de jogo dinâmico e organizado.",
        techDesc: "A arquitetura do Burger Battle baseia-se nos pilares da Programação Orientada a Objetos (POO), utilizando classes modulares para gerenciar fases e cenas de combate em turnos, enquanto emprega a biblioteca Swing para a interface gráfica, controle de áudio e gerenciamento de estados de jogo.",
        result: "O resultado final do projeto Burger Battle foi o desenvolvimento de um jogo funcional de combate em turnos, estruturado em múltiplas fases e cenas que utilizam os conceitos de Programação Orientada a Objetos para gerenciar a lógica de batalha. O software alcançou a integração de elementos multimídia, como trilha sonora de fundo e interface gráfica interativa via Swing, permitindo o controle de turnos entre jogador e inimigos, além do armazenamento e verificação de pontuação e progresso ao longo das partidas.",
        link: "https://docs.google.com/document/d/1KLCoCFR3qCPg1xyyaCkMvX8bntOTAJ7fVQx_lrJyIWw/edit?usp=sharing",
        document: "Acessar documentação"
    },
    "Vivamente": {
        title: "Vivamente",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySql", "SMTP"],
        concept: "A concepção do Vivamente surgiu para preencher uma lacuna crítica no suporte à saúde mental no ambiente digital, funcionando como uma plataforma de auxílio imediato para momentos de crise emocional. O sistema opera através de uma estrutura de acolhimento em níveis, onde o usuário passa inicialmente por voluntários para suporte básico, seguido por estagiários em formação e, por fim, psicólogos credenciados que possuem total autonomia para definir a abordagem terapêutica ideal. Essa arquitetura visa conectar pessoas em situações de vulnerabilidade a colaboradores qualificados, oferecendo um suporte humanizado e ágil para quem enfrenta momentos de dificuldade.",
        techDesc: "A arquitetura do Vivamente baseia-se no desenvolvimento web modular, utilizando a Programação Orientada a Objetos (POO) com a linguagem PHP para estruturar uma plataforma escalável e segura. O sistema foi concebido para gerenciar o fluxo de acolhimento emocional em diferentes níveis, empregando conceitos de POO para separar as responsabilidades entre os perfis de usuários (voluntários, estagiários e psicólogos) e garantir a integridade dos dados sensíveis de saúde mental. Essa abordagem permite que o software opere de forma fluida, integrando a lógica de suporte imediato ('SOS') a uma interface acessível, onde a autonomia dos profissionais licenciados é preservada através de métodos e classes bem definidos para o gerenciamento de consultas e prontuários.",
        result: "O resultado final do projeto Vivamente foi a consolidação de uma plataforma de apoio emocional capaz de oferecer suporte preventivo e imediato antes que crises mais graves se concretizem. O software cumpriu o objetivo de entregar uma ferramenta de segurança preventiva para a saúde mental, estruturada sobre uma base técnica em PHP e Programação Orientada a Objetos que permite a expansão das funcionalidades conforme a demanda. Ao final, o projeto estabeleceu um ecossistema funcional onde a divisão de atendimento em níveis garante agilidade no acolhimento e estabilidade operacional para conectar usuários a uma rede de suporte qualifica",
        link: "https://vivamenteofi.rf.gd/",
        document: "Acessar Sistema"
    }
};


const loadingManager = new THREE.LoadingManager();

loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
    const progress = (itemsLoaded / itemsTotal) * 100;
    const fill = document.getElementById('loader-fill');
    const percent = document.getElementById('loader-percentage');
    if (fill) fill.style.width = `${progress}%`;
    if (percent) percent.innerText = `${Math.round(progress)}%`;
};

loadingManager.onLoad = () => {
    const preloader = document.getElementById('preloader');
    console.log("Sistemas Online. Iniciando...");
    
    gsap.to(preloader, { 
        opacity: 0, 
        duration: 1.5, 
        delay: 0.5, 
        onComplete: () => {
            preloader.style.visibility = 'hidden';
            gsap.from(".premium-blur", { opacity: 0, y: 30, duration: 1 });
        } 
    });
};

setTimeout(() => {
    loadingManager.itemStart("EngineInit");
    // Simula o carregamento dos Shaders e Geometrias
    loadingManager.itemEnd("EngineInit");
}, 100);

// ==========================================
// 3. GERAÇÃO PROCEDURAL DO AMBIENTE FIXO
// ==========================================
function createStarfield() {
    const starGeo = new THREE.BufferGeometry();
    const starCount = 10000;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
        starPos[i] = (Math.random() - 0.5) * 2000;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.8, transparent: true, opacity: 0.6 });
    return new THREE.Points(starGeo, starMat);
}
const starField = createStarfield();
scene.add(starField);

// Asteroides Otimizados
const asteroidCount = 1500;
const astGeo = new THREE.DodecahedronGeometry(1, 1);
const astMat = new THREE.MeshPhysicalMaterial({ color: 0x222222, roughness: 0.9, metalness: 0.1 });
const instancedAsteroids = new THREE.InstancedMesh(astGeo, astMat, asteroidCount);
const dummy = new THREE.Object3D();

for (let i = 0; i < asteroidCount; i++) {
    dummy.position.set(
        (Math.random() - 0.5) * 800,
        (Math.random() - 0.5) * 200 - 50,
        (Math.random() - 0.5) * 800
    );
    dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    dummy.scale.setScalar(Math.random() * 3 + 0.5);
    dummy.updateMatrix();
    instancedAsteroids.setMatrixAt(i, dummy.matrix);
}
scene.add(instancedAsteroids);

// ==========================================
// 4. NAVE AAA
// ==========================================
const spaceship = new THREE.Group();
const hullMat = new THREE.MeshPhysicalMaterial({ color: 0x111111, metalness: 0.9, roughness: 0.2 });
const engineMat = new THREE.MeshBasicMaterial({ color: 0xff3300 });

const coreMesh = new THREE.Mesh(new THREE.BoxGeometry(2, 0.8, 5), hullMat);
const cockpit = new THREE.Mesh(new THREE.CapsuleGeometry(0.6, 1.5, 4, 8), new THREE.MeshPhysicalMaterial({ color: 0x000000, roughness: 0, transmission: 1, thickness: 0.5 }));
cockpit.rotation.x = Math.PI / 2; cockpit.position.set(0, 0.6, -0.5);

const wingL = new THREE.Mesh(new THREE.ConeGeometry(2, 4, 3), hullMat);
wingL.rotation.z = -Math.PI / 2; wingL.position.set(-2, 0, 1);
const wingR = wingL.clone();
wingR.rotation.z = Math.PI / 2; wingR.position.set(2, 0, 1);

const thrusterL = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 1), engineMat);
thrusterL.rotation.x = Math.PI / 2; thrusterL.position.set(-0.8, 0, 2.5);
const thrusterR = thrusterL.clone(); thrusterR.position.set(0.8, 0, 2.5);

spaceship.add(coreMesh, cockpit, wingL, wingR, thrusterL, thrusterR);
scene.add(spaceship);

// ==========================================
// 4.5. EFEITOS ESPECIAIS (ESTRELAS PASSANDO NO ESPAÇO)
// ==========================================
// Crio um grupo na CENA (separado da nave) para as estrelas não tombarem
const warpDustGroup = new THREE.Group();
scene.add(warpDustGroup);

const trailCount = 1000;
const trailGeo = new THREE.BoxGeometry(0.05, 0.05, 1);
const trailMat = new THREE.MeshBasicMaterial({ 
    color: 0xffffff, 
    transparent: true, 
    opacity: 0,
    blending: THREE.AdditiveBlending 
});
const speedTrails = new THREE.InstancedMesh(trailGeo, trailMat, trailCount);
const trailData = [];
const trailDummy = new THREE.Object3D();

// Espalha as estrelas por um raio gigantesco no espaço
for (let i = 0; i < trailCount; i++) {
    trailData.push({
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 800,
        z: (Math.random() - 0.5) * 1000,
        vel: Math.random() * 3 + 1
    });
}
warpDustGroup.add(speedTrails);

// ==========================================
// 5. SHADER DE PLANETA HOLOGRÁFICO
// ==========================================
const holoVertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
const holoFragmentShader = `
    uniform vec3 color;
    uniform float time;
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
        float rim = 1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
        rim = smoothstep(0.6, 1.0, rim);
        float scanline = sin(vUv.y * 100.0 - time * 5.0) * 0.04;
        gl_FragColor = vec4(color * rim + color * scanline, rim * 0.8 + 0.2);
    }
`;

function createHoloProject(x, z, hexColor, title) {
    const group = new THREE.Group();
    group.position.set(x, 0, z); // Eixo Y travado em 0
    group.userData = { name: title, color: hexColor };

    const material = new THREE.ShaderMaterial({
        uniforms: {
            color: { value: new THREE.Color(hexColor) },
            time: { value: 0 }
        },
        vertexShader: holoVertexShader,
        fragmentShader: holoFragmentShader,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
    });

    const sphere = new THREE.Mesh(new THREE.SphereGeometry(6, 32, 32), material);
    group.add(sphere);
    scene.add(group);
    return { group, material };
}

const holoProjects = [
    createHoloProject(-40, -100, 0xff0055, "Verifi"),            // Mantido (Rosa/Vermelho)
    createHoloProject(50, -250, 0xffa500, "Java&Café"),        // Laranja (Remetendo a café/energia)
    createHoloProject(61, -383, 0x00ff99, "Burger-Battle"),           // Verde Água (Contraste)
    createHoloProject(140, -294, 0x3b82f6, "Vivamente"),          // Azul Royal (Diferenciação)
];

// ==========================================
// 6. FÍSICA E CONTROLES DE NAVEGAÇÃO
// ==========================================
const state = {
    isExploring: false,
    speed: 0,
    maxSpeed: 80,
    acceleration: 2,
    friction: 0.95,
    velocity: new THREE.Vector3(),
    rotationVelocity: new THREE.Vector2(),
    targetRotation: new THREE.Vector2()
};

let currentInteractiveProject = null;
let currentSlide = 0;

const keys = { w: false, a: false, s: false, d: false, arrowup: false, arrowleft: false, arrowdown: false, arrowright: false };

window.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    if(keys.hasOwnProperty(k)) keys[k] = true;
    
    if(k === 'b' && state.isExploring) document.getElementById('blog-panel').classList.toggle('active');
    if(k === 'e' && currentInteractiveProject && state.isExploring) triggerWarp(currentInteractiveProject.group.userData.name);
});

window.addEventListener('keyup', (e) => {
    const k = e.key.toLowerCase();
    if(keys.hasOwnProperty(k)) keys[k] = false;
});

function updatePhysics(dt) {
    if(!state.isExploring) return;

    const isForward = keys.w || keys.arrowup;
    const isBackward = keys.s || keys.arrowdown;
    const isLeft = keys.a || keys.arrowleft;
    const isRight = keys.d || keys.arrowright;

    if(isForward) state.speed = Math.min(state.speed + state.acceleration, state.maxSpeed);
    else if(isBackward) state.speed = Math.max(state.speed - state.acceleration, -state.maxSpeed/2);
    else state.speed *= state.friction;

    if(isLeft) state.targetRotation.x += 0.05;
    if(isRight) state.targetRotation.x -= 0.05;
    
    state.rotationVelocity.x += (state.targetRotation.x - spaceship.rotation.y) * 0.1;
    state.rotationVelocity.x *= 0.8;
    spaceship.rotation.y += state.rotationVelocity.x;
    
    const targetRoll = (isLeft ? 0.5 : (isRight ? -0.5 : 0));
    spaceship.rotation.z += (targetRoll - spaceship.rotation.z) * 0.1;
    
    const targetPitch = (state.speed / state.maxSpeed) * -0.2;
    spaceship.rotation.x += (targetPitch - spaceship.rotation.x) * 0.1;

    // Movimentação Exata no Horizonte
    const direction = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), spaceship.rotation.y);
    spaceship.position.addScaledVector(direction, state.speed * dt);
    spaceship.position.y = 0; 

    const idealOffset = new THREE.Vector3(0, 2.5, 12).applyAxisAngle(new THREE.Vector3(0, 1, 0), spaceship.rotation.y);
    const idealLookAt = new THREE.Vector3(0, 0, -50).applyAxisAngle(new THREE.Vector3(0, 1, 0), spaceship.rotation.y).add(spaceship.position);
    
    camera.position.lerp(spaceship.position.clone().add(idealOffset), 0.1);
    camera.fov = THREE.MathUtils.lerp(camera.fov, 60 + (state.speed / state.maxSpeed) * 30, 0.1);
    camera.updateProjectionMatrix();
    camera.lookAt(idealLookAt);

    const speedIndicator = document.getElementById('speed-indicator');
    if (speedIndicator) speedIndicator.style.width = `${(Math.abs(state.speed) / state.maxSpeed) * 100}%`;
    
    const coordX = document.getElementById('coord-x');
    const coordZ = document.getElementById('coord-z');
    if (coordX) coordX.innerText = Math.round(spaceship.position.x).toString().padStart(3, '0');
    if (coordZ) coordZ.innerText = Math.round(spaceship.position.z).toString().padStart(3, '0');

    thrusterL.material.color.setHex(isForward ? 0x00eeff : 0xff3300);
    thrusterR.material.color.setHex(isForward ? 0x00eeff : 0xff3300);
}

// ==========================================
// 7. SISTEMA DE WARP E SLIDES
// ==========================================
function triggerWarp(projectName) {
    state.isExploring = false;
    document.getElementById('interaction-ui').classList.remove('visible');
    document.getElementById('hud-layer').classList.add('hidden');

    gsap.to(state, { speed: state.maxSpeed * 2.5, duration: 1.5, ease: "power3.in" });

    const warpDirection = new THREE.Vector3(0, 0, -800).applyAxisAngle(new THREE.Vector3(0, 1, 0), spaceship.rotation.y);
    gsap.to(spaceship.position, { 
        x: spaceship.position.x + warpDirection.x, 
        z: spaceship.position.z + warpDirection.z, 
        duration: 1.5, ease: "power3.in" 
    });
    
    gsap.to(camera, { fov: 140, duration: 1.5, ease: "power2.in", onUpdate: () => camera.updateProjectionMatrix() });
    gsap.to(bloomPass, { strength: 4.0, duration: 1.5, ease: "power2.in" }); 

    const flash = document.getElementById('warp-flash');
    gsap.to(flash, {
        opacity: 1, duration: 0.3, delay: 1.2, onComplete: () => {
            populateProjectSlides(projectName);
            document.getElementById('project-showcase').classList.add('active');
            
            spaceship.position.set(0, 0, 0);
            spaceship.rotation.set(0, 0, 0);
            state.targetRotation.set(0,0);
            camera.fov = 60;
            camera.updateProjectionMatrix();
            camera.position.set(0, 2.5, 12);
            bloomPass.strength = 0.8;
            state.speed = 0;
            
            gsap.to(flash, { opacity: 0, duration: 1 });
        }
    });
}

function populateProjectSlides(projectName) {
    const data = projectDB[projectName];
    if(!data) return;

    document.getElementById('proj-title').innerText = data.title;
    document.getElementById('proj-concept').innerText = data.concept;
    document.getElementById('proj-tech').innerText = data.techDesc;
    document.getElementById('proj-result').innerText = data.result;
    var btnlin = document.getElementById('proj-repo-btn');
    btnlin.href = data.link;
    btnlin.textContent = data.document;
    
    const badgesContainer = document.getElementById('proj-badges');
    badgesContainer.innerHTML = '';
    data.tech.forEach(t => {
        badgesContainer.innerHTML += `<span class="badge" style="font-size: 0.9rem; padding: 0.4rem 1rem;">${t}</span>`;
    });

    currentSlide = 0;
    updateSlideView();
}

function updateSlideView() {
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    
    document.getElementById(`slide-${currentSlide}`).classList.add('active');
    document.querySelectorAll('.dot')[currentSlide].classList.add('active');
    
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    
    if(prevBtn) {
        prevBtn.style.opacity = currentSlide === 0 ? '0.2' : '1';
        prevBtn.style.pointerEvents = currentSlide === 0 ? 'none' : 'auto';
    }
    if(nextBtn) {
        nextBtn.style.opacity = currentSlide === 2 ? '0.2' : '1';
        nextBtn.style.pointerEvents = currentSlide === 2 ? 'none' : 'auto';
    }
}

document.getElementById('next-slide')?.addEventListener('click', () => { if(currentSlide < 2) { currentSlide++; updateSlideView(); }});
document.getElementById('prev-slide')?.addEventListener('click', () => { if(currentSlide > 0) { currentSlide--; updateSlideView(); }});

document.getElementById('close-project')?.addEventListener('click', () => {
    const flash = document.getElementById('warp-flash');
    gsap.to(flash, { opacity: 1, duration: 0.3, onComplete: () => {
        document.getElementById('project-showcase').classList.remove('active');
        document.getElementById('hud-layer').classList.remove('hidden');
        state.isExploring = true;
        gsap.to(flash, { opacity: 0, duration: 0.5 });
    }});
});

// ==========================================
// 8. MAPA INFINITO (FLOATING ORIGIN)
// ==========================================
function checkFloatingOrigin() {
    if (spaceship.position.length() > 1500) {
        const offset = spaceship.position.clone();
        spaceship.position.set(0,0,0);
        camera.position.sub(offset);
        starField.position.sub(offset);
        
        holoProjects.forEach(p => p.group.position.sub(offset));
        
        for (let i = 0; i < asteroidCount; i++) {
            instancedAsteroids.getMatrixAt(i, dummy.matrix);
            dummy.position.setFromMatrixPosition(dummy.matrix);
            dummy.position.sub(offset);
            dummy.updateMatrix();
            instancedAsteroids.setMatrixAt(i, dummy.matrix);
        }
        instancedAsteroids.instanceMatrix.needsUpdate = true;
    }
}

// ==========================================
// 9. LOOP PRINCIPAL (ANIMATE)
// ==========================================
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const dt = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    starField.rotation.y = elapsedTime * 0.02;
    instancedAsteroids.rotation.y = elapsedTime * 0.05;
    instancedAsteroids.rotation.x = elapsedTime * 0.02;

    // ================================
    // UPDATE DAS ESTRELAS PASSANDO (WARP STARS)
    // ================================
    // Acompanha a posição da nave sem pegar o "tombo" (Pitch/Roll)
    warpDustGroup.position.copy(spaceship.position);
    warpDustGroup.rotation.y = spaceship.rotation.y;

    const speedRatio = Math.abs(state.speed / state.maxSpeed);
    trailMat.opacity = Math.min(speedRatio * 1.5, 0.8); 

    // Cor transiciona de Branco para Fogo/Laranja na velocidade máxima
    const normalColor = new THREE.Color(0xffffff);
    const fireColor = new THREE.Color(0xff5500);
    trailMat.color.lerpColors(normalColor, fireColor, Math.min(speedRatio, 1.0));

    for (let i = 0; i < trailCount; i++) {
        const t = trailData[i];
        
        // Simula o espaço passando (somado à velocidade atual da nave)
        t.z += t.vel + (state.speed * 0.8); 
        
        if (t.z > 50) { // Ficou para trás
            t.z = -800; // Respawna lá no horizonte
            t.x = (Math.random() - 0.5) * 800;
            t.y = (Math.random() - 0.5) * 800;
        }
        
        trailDummy.position.set(t.x, t.y, t.z);
        trailDummy.scale.set(1, 1, speedRatio * 150 + 1); // Rastro super longo
        trailDummy.updateMatrix();
        speedTrails.setMatrixAt(i, trailDummy.matrix);
    }
    speedTrails.instanceMatrix.needsUpdate = true;

    // ================================
    // SCANNER E INTERAÇÃO
    // ================================
    let minDist = 40;
    let foundProj = null;

    holoProjects.forEach(p => {
        p.material.uniforms.time.value = elapsedTime;
        p.group.rotation.y -= 0.01;
        
        if(state.isExploring) {
            const dist = spaceship.position.distanceTo(p.group.position);
            if (dist < minDist) {
                foundProj = p;
                p.material.uniforms.color.value.setHex(0xffffff); 
            } else {
                p.material.uniforms.color.value.setHex(p.group.userData.color);
            }
        }
    });

    if (foundProj !== currentInteractiveProject) {
        currentInteractiveProject = foundProj;
        const ui = document.getElementById('interaction-ui');
        if (currentInteractiveProject && state.isExploring) {
            document.getElementById('interaction-text').innerText = `Conectar a ${currentInteractiveProject.group.userData.name}`;
            if(ui){
                ui.classList.remove('hidden');
                ui.classList.add('visible');
            }
        } else if (ui) {
            ui.classList.remove('visible');
        }
    }

    updatePhysics(dt);
    if(state.isExploring) checkFloatingOrigin();

    composer.render();
}
animate();


// ==========================================
// 10. INICIALIZAÇÃO & RESIZE
// ==========================================

// Detecção de dispositivo móvel
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    || (window.innerWidth <= 1024 && 'ontouchstart' in window);

function showMobileWarning() {
    const warning = document.getElementById('mobile-warning');
    if (warning) {
        warning.classList.remove('hidden');
        warning.style.opacity = '';
    }
}

(function() {
    if (isMobileDevice) {
        const warning = document.getElementById('mobile-warning');
        if (warning) {
            warning.classList.remove('hidden');
        }

        document.getElementById('mobile-dismiss')?.addEventListener('click', () => {
            const w = document.getElementById('mobile-warning');
            if (w) {
                gsap.to(w, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        w.classList.add('hidden');
                        w.style.opacity = '';
                    }
                });
            }
        });
    }
})();
document.getElementById('launch-btn').addEventListener('click', () => {
    if (isMobileDevice) {
        state.isExploring = false;
        showMobileWarning();
        return;
    }

    const uiLayer = document.getElementById('ui-layer');
    const hudLayer = document.getElementById('hud-layer');
    
    gsap.to(uiLayer, { opacity: 0, duration: 1, onComplete: () => uiLayer.style.display = 'none' });
    gsap.to(spaceship.position, { z: -30, duration: 2, ease: "power2.inOut" });
    
    setTimeout(() => {
        state.isExploring = true;
        hudLayer.classList.remove('hidden');
    }, 2000);
});

document.getElementById('close-blog-btn').addEventListener('click', () => {
    document.getElementById('blog-panel').classList.remove('active');
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
});
