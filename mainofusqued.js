import*as THREE from"\u0074\u0068\u0072\u0065\u0065";import{EffectComposer}from"\u0074\u0068\u0072\u0065\u0065\u002F\u0061\u0064\u0064\u006F\u006E\u0073\u002F\u0070\u006F\u0073\u0074\u0070\u0072\u006F\u0063\u0065\u0073\u0073\u0069\u006E\u0067\u002F\u0045\u0066\u0066\u0065\u0063\u0074\u0043\u006F\u006D\u0070\u006F\u0073\u0065\u0072\u002E\u006A\u0073";import{RenderPass}from"\u0074\u0068\u0072\u0065\u0065\u002F\u0061\u0064\u0064\u006F\u006E\u0073\u002F\u0070\u006F\u0073\u0074\u0070\u0072\u006F\u0063\u0065\u0073\u0073\u0069\u006E\u0067\u002F\u0052\u0065\u006E\u0064\u0065\u0072\u0050\u0061\u0073\u0073\u002E\u006A\u0073";import{UnrealBloomPass}from"\u0074\u0068\u0072\u0065\u0065\u002F\u0061\u0064\u0064\u006F\u006E\u0073\u002F\u0070\u006F\u0073\u0074\u0070\u0072\u006F\u0063\u0065\u0073\u0073\u0069\u006E\u0067\u002F\u0055\u006E\u0072\u0065\u0061\u006C\u0042\u006C\u006F\u006F\u006D\u0050\u0061\u0073\u0073\u002E\u006A\u0073";import{OutputPass}from"\u0074\u0068\u0072\u0065\u0065\u002F\u0061\u0064\u0064\u006F\u006E\u0073\u002F\u0070\u006F\u0073\u0074\u0070\u0072\u006F\u0063\u0065\u0073\u0073\u0069\u006E\u0067\u002F\u004F\u0075\u0074\u0070\u0075\u0074\u0050\u0061\u0073\u0073\u002E\u006A\u0073";var _0xcfa1fc=(376424^376424)+(765319^765319);const gsap=window['\u0067\u0073\u0061\u0070'];_0xcfa1fc=(895017^895021)+(885729^885735);const canvas=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("savnac-lgbew#".split("").reverse().join(""));const scene=new THREE['\u0053\u0063\u0065\u006E\u0065']();scene['\u0066\u006F\u0067']=new THREE['\u0046\u006F\u0067\u0045\u0078\u0070\u0032'](0x030305,0.008);scene['\u0062\u0061\u0063\u006B\u0067\u0072\u006F\u0075\u006E\u0064']=new THREE['\u0043\u006F\u006C\u006F\u0072'](0x030305);let _0xaed91b;const camera=new THREE['\u0050\u0065\u0072\u0073\u0070\u0065\u0063\u0074\u0069\u0076\u0065\u0043\u0061\u006D\u0065\u0072\u0061'](279289^279237,window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068']/window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074'],0.1,970131^968235);_0xaed91b=730814^730806;camera['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](846755^846755,280511^280508,631712^631727);var _0x79256d=(533379^533380)+(266327^266324);const renderer=new THREE['\u0057\u0065\u0062\u0047\u004C\u0052\u0065\u006E\u0064\u0065\u0072\u0065\u0072']({"canvas":canvas,'\u0061\u006E\u0074\u0069\u0061\u006C\u0069\u0061\u0073':false,'\u0070\u006F\u0077\u0065\u0072\u0050\u0072\u0065\u0066\u0065\u0072\u0065\u006E\u0063\u0065':"high-performance"});_0x79256d='\u0070\u006A\u006F\u0065\u0066\u0068';renderer['\u0073\u0065\u0074\u0053\u0069\u007A\u0065'](window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068'],window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074']);renderer['\u0073\u0065\u0074\u0050\u0069\u0078\u0065\u006C\u0052\u0061\u0074\u0069\u006F'](Math['\u006D\u0069\u006E'](window['\u0064\u0065\u0076\u0069\u0063\u0065\u0050\u0069\u0078\u0065\u006C\u0052\u0061\u0074\u0069\u006F'],261776^261778));renderer['\u0074\u006F\u006E\u0065\u004D\u0061\u0070\u0070\u0069\u006E\u0067']=THREE['\u0041\u0043\u0045\u0053\u0046\u0069\u006C\u006D\u0069\u0063\u0054\u006F\u006E\u0065\u004D\u0061\u0070\u0070\u0069\u006E\u0067'];renderer['\u0074\u006F\u006E\u0065\u004D\u0061\u0070\u0070\u0069\u006E\u0067\u0045\u0078\u0070\u006F\u0073\u0075\u0072\u0065']=1.2;let _0x3d9eb;const composer=new EffectComposer(renderer);_0x3d9eb=(702325^702326)+(180726^180735);var _0xc_0x7c1=(112436^112445)+(523369^523360);const renderPass=new RenderPass(scene,camera);_0xc_0x7c1=(263109^263111)+(335514^335507);const bloomPass=new UnrealBloomPass(new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0032'](window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068'],window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074']),933079^933078,0.4,0.85);bloomPass['\u0074\u0068\u0072\u0065\u0073\u0068\u006F\u006C\u0064']=0.2;bloomPass['\u0073\u0074\u0072\u0065\u006E\u0067\u0074\u0068']=0.8;bloomPass['\u0072\u0061\u0064\u0069\u0075\u0073']=0.5;const outputPass=new OutputPass();composer['\u0061\u0064\u0064\u0050\u0061\u0073\u0073'](renderPass);composer['\u0061\u0064\u0064\u0050\u0061\u0073\u0073'](bloomPass);composer['\u0061\u0064\u0064\u0050\u0061\u0073\u0073'](outputPass);const ambientLight=new THREE['\u0041\u006D\u0062\u0069\u0065\u006E\u0074\u004C\u0069\u0067\u0068\u0074'](0xffffff,0.2);scene['\u0061\u0064\u0064'](ambientLight);const mainLight=new THREE['\u0044\u0069\u0072\u0065\u0063\u0074\u0069\u006F\u006E\u0061\u006C\u004C\u0069\u0067\u0068\u0074'](0x8b5cf6,851117^851118);mainLight['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](856165^856151,189330^189430,424804^424790);scene['\u0061\u0064\u0064'](mainLight);let _0xcc_0x392;const fillLight=new THREE['\u0044\u0069\u0072\u0065\u0063\u0074\u0069\u006F\u006E\u0061\u006C\u004C\u0069\u0067\u0068\u0074'](675722^696693,1.5);_0xcc_0x392='\u0067\u0062\u0070\u006B\u0063\u0068';fillLight['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](-(398834^398784),269924^269924,-(730735^730717));scene['\u0061\u0064\u0064'](fillLight);const styles=`
    .global-copyright { position: fixed; bottom: 20px; ... }
    .cyber-link { color: #00eeff; ... }
`;let _0xd7296f;const cssProtegido=`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@300;400;600&display=swap');

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

#webgl-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

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
    padding: 3rem;
}

#blog-panel.active { right: 0; }

.close-blog {
    background: none; border: none; color: #888;
    cursor: pointer; font-family: 'Space Grotesk';
    margin-bottom: 2rem;
}
.close-blog:hover { color: #fff; }

.blog-header h2 {
    font-family: 'Space Grotesk';
    color: var(--neon-blue);
    margin-bottom: 1rem;
    font-size: 1.5rem;
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

    text-shadow: 0 0 5px rgba(139, 92, 246, 0.2);

    border-right: 2px solid rgba(0, 238, 255, 0.3);
    padding-right: 10px;
}


@media (max-width: 768px) {
    .global-copyright {
        bottom: 10px;
        right: 10px;
    }
    .global-copyright span {
        font-size: 8px;
        letter-spacing: 1px;
    }
}
    #preloader {
    position: fixed;
    inset: 0;
    background: #030305;
    z-index: 10000; /* Acima de TUDO */
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 1s ease, visibility 1s;
}

.loader-content { text-align: center; }

.volt-logo {
    font-size: 3rem;
    margin-bottom: 1rem;
    filter: drop-shadow(0 0 10px #8b5cf6);
    animation: pulse 1.5s infinite;
}

.loader-bar {
    width: 250px;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
    margin: 1rem auto;
}

#loader-fill {
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #00eeff, #8b5cf6);
    box-shadow: 0 0 15px #00eeff;
    transition: width 0.3s ease;
}

.loader-status {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.7rem;
    letter-spacing: 3px;
    color: #666;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.7; }
}`;_0xd7296f='\u0063\u0062\u0069\u006A\u006C\u0067';var _0xe9d8bf=(299690^299695)+(417302^417310);const styleTag=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0073\u0074\u0079\u006C\u0065");_0xe9d8bf=(754105^754104)+(444610^444615);styleTag['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=cssProtegido;document['\u0068\u0065\u0061\u0064']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](styleTag);var _0x646f3b=(652957^652959)+(897361^897362);const projectDB={"Verifi":{'\u0074\u0069\u0074\u006C\u0065':"Verifi (Anti-Fraude)",'\u0074\u0065\u0063\u0068':["\u004A\u0061\u0076\u0061\u0020\u0032\u0035","\u0053\u0070\u0072\u0069\u006E\u0067\u0020\u0042\u006F\u006F\u0074","\u004D\u0061\u0063\u0068\u0069\u006E\u0065\u0020\u004C\u0065\u0061\u0072\u006E\u0069\u006E\u0067","\u0056\u0050\u0053\u0028\u0056\u0069\u0074\u0075\u0061\u006C\u0020\u0070\u0072\u0069\u0076\u0061\u0074\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u0029"],"concept":"Diante do aumento de fraudes financeiras no sistema de pagamentos brasileiro, o projeto Verifi.com desenvolveu uma plataforma para verificação de autenticidade de boletos e chaves Pix. O objetivo é oferecer uma ferramenta de análise de risco acessível ao cidadão brasileiro. Utilizando Metodologia Ágil, a arquitetura foi construída com Spring Boot para a análise e PHP para o gerenciamento de interface, empregando Inteligência Artificial (IA) em nuvem para o cruzamento de dados de beneficiários. Para garantir a inclusão, integrou-se a Suíte VLibras. O projeto baseou-se em uma pesquisa quantitativa com alguns participantes, revelando que 22,2% já foram vítimas de golpes. Os testes de validação mostraram que o refinamento de prompt na IA elevou a assertividade de 65% para 85%. Conclui-se que a solução apresenta alta escalabilidade, com viabilidade técnica para integração via API em aplicativos bancários, reduzindo a vulnerabilidade dos usuários.",'\u0074\u0065\u0063\u0068\u0044\u0065\u0073\u0063':"A engenharia e arquitetura do projeto Verifi.com baseiam-se em uma estrutura de microsserviços com abordagem poliglota , utilizando Java com o framework Spring Boot para a lógica de negócio e análise documental via API REST , enquanto o PHP gerencia a interface e comunicações externas. O sistema processa arquivos nos formatos PDF e JPEG , extraindo dados que são analisados pela Inteligência Artificial Gemini; essa IA teve sua assertividade elevada de 65% para 85% por meio do refinamento de prompts para identificar inconsistências e padrões de fraudes. Para reforçar a segurança, a arquitetura integra experimentalmente o score de risco da API Pix Risk, que avalia o histórico das contas bancárias de beneficiários , além de utilizar um banco de dados MySQL para persistência e JWT (JSON Web Token) para garantir a segurança das requisições em um ambiente hospedado em servidor VPS. O fluxo operacional, organizado via metodologia ágil Kanban , percorre desde o upload do documento até a geração de um relatório de risco detalhado para o usuário , incluindo também acessibilidade por meio da integração com a Suíte VLibras. ","result":"O resultado final do projeto Verifi.com demonstrou a viabilidade técnica de uma solução escalável para o combate a fraudes bancárias, alcançando uma estabilidade operacional significativa após a migração para um ambiente de servidor VPS. O principal avanço medido foi a eficácia da Inteligência Artificial Gemini, que elevou sua taxa de assertividade de 65% para 85% após o refinamento estratégico de prompts e melhorias na leitura de imagens. Além disso, a integração experimental com o score da Pix Risk permitiu que a ferramenta evoluísse de uma simples validadora de documentos para um sistema completo de prevenção de risco transacional, reduzindo falsos positivos e oferecendo um relatório claro e direto ao usuário final. O protótipo cumpriu seu objetivo de atuar como uma barreira preventiva em tempo real, fornecendo uma base sólida para futuras expansões em infraestruturas de alta escala e possíveis parcerias com instituições financeiras.","link":"https://drive.google.com/file/d/1KKs-6aEw60zC2WRBx2zA7LpadQpKyDQG/view?usp=sharing",'\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074':"Acessar documentação"},"\u004A\u0061\u0076\u0061\u0026\u0043\u0061\u0066\u00E9":{"title":"\u004A\u0061\u0076\u0061\u0026\u0043\u0061\u0066\u00E9","tech":["\u004A\u0061\u0076\u0061\u0020\u0032\u0035","lqSyM".split("").reverse().join(""),"\u0057\u0065\u0062\u0048\u006F\u006F\u006B"],"concept":"A concepção do projeto Java & Café nasceu da ideia de unir a eficiência tecnológica na gestão de uma cafeteria à responsabilidade social, transformando um ambiente de consumo tradicional em um modelo de negócio moderno e sustentável. O foco principal foi otimizar a experiência do cliente através de conveniências como pedidos remotos e agendados, reduzindo filas e tempos de espera, ao mesmo tempo em que oferece uma gestão operacional robusta para o estabelecimento.  Além da vertente comercial, a concepção traz um forte pilar de impacto social, inspirado nos Objetivos de Desenvolvimento Sustentável (ODS) da ONU. Isso se materializa na funcionalidade de arredondamento de troco para doações, permitindo que pequenas transações cotidianas contribuam para causas maiores. Todo o desenvolvimento foi guiado pela cultura DevOps, garantindo que o sistema fosse construído sob ciclos contínuos de automação, colaboração e monitoramento, resultando em uma plataforma que equilibra funcionalidade técnica com um propósito ético e comunitário.",'\u0074\u0065\u0063\u0068\u0044\u0065\u0073\u0063':"A arquitetura e engenharia do sistema Java & Café baseiam-se na linguagem Java e na metodologia DevOps, utilizando uma estrutura organizada em pacotes lógicos que separam a interface gráfica em Swing da lógica de negócio e da persistência de dados em um banco MySQL. O projeto prioriza a eficiência operacional e a segurança por meio de processamento assíncrono com SwingWorker e ExecutorService para evitar o bloqueio da interface durante verificações de estoque, além de implementar criptografia assimétrica e monitoramento de auditoria via integração com o Discord. O sistema atende a requisitos funcionais complexos, como gestão de fidelidade com resgate de pontos, agendamento de pedidos remotos e uma funcionalidade inovadora de arredondamento de troco para doações sociais, mantendo o desempenho com um tempo de resposta limite de 10 segundos para operações críticas. Toda a estrutura foi validada por testes de caixa preta e branca, que identificaram a necessidade de refinamentos em loops de mensagens de erro e na lógica de validação de estoque para garantir a estabilidade final do software.",'\u0072\u0065\u0073\u0075\u006C\u0074':"Os resultados do projeto Java & Café demonstraram que o sistema possui uma base tecnológica sólida, porém os testes realizados entre 23 e 24 de maio revelaram falhas críticas em funcionalidades essenciais. Entre os principais problemas identificados, destacam-se a remoção indevida de itens do pedido quando a quantidade excede o estoque, a continuidade de operações mesmo com CPFs inválidos no programa de fidelidade e a ocorrência de loopings de erro durante o login de funcionários e o fechamento do programa. Além disso, observaram-se limitações na interface, como a impossibilidade de usar vírgula como separador decimal em pagamentos e a sobreposição de janelas que ocultava botões de confirmação. Conclui-se que a correção desses pontos é fundamental para garantir a estabilidade operacional, a segurança dos dados e o cumprimento do propósito inovador de equilibrar eficiência comercial com impacto social.",'\u006C\u0069\u006E\u006B':"\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0064\u0072\u0069\u0076\u0065\u002E\u0067\u006F\u006F\u0067\u006C\u0065\u002E\u0063\u006F\u006D\u002F\u0066\u0069\u006C\u0065\u002F\u0064\u002F\u0031\u0047\u006D\u0034\u004F\u0065\u0066\u0041\u0053\u0067\u0055\u0033\u007A\u0076\u0071\u0044\u006A\u0079\u0052\u0073\u0071\u004D\u0078\u0042\u0054\u004F\u0046\u0032\u004E\u0041\u004C\u006A\u0061\u002F\u0076\u0069\u0065\u0077\u003F\u0075\u0073\u0070\u003D\u0073\u0068\u0061\u0072\u0069\u006E\u0067",'\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074':"\u0041\u0063\u0065\u0073\u0073\u0061\u0072\u0020\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074\u0061\u00E7\u00E3\u006F"},"Burger-Battle":{'\u0074\u0069\u0074\u006C\u0065':"Burger Battle",'\u0074\u0065\u0063\u0068':["\u004A\u0061\u0076\u0061\u0020\u0032\u0035","\u004D\u0079\u0073\u0071\u006C"],"concept":"\u0041\u0020\u0063\u006F\u006E\u0063\u0065\u0070\u00E7\u00E3\u006F\u0020\u0064\u006F\u0020\u0070\u0072\u006F\u006A\u0065\u0074\u006F\u0020\u0042\u0075\u0072\u0067\u0065\u0072\u0020\u0042\u0061\u0074\u0074\u006C\u0065\u0020\u0066\u006F\u0069\u0020\u0066\u0075\u006E\u0064\u0061\u006D\u0065\u006E\u0074\u0061\u0064\u0061\u0020\u006E\u006F\u0020\u0064\u0065\u0073\u0065\u006E\u0076\u006F\u006C\u0076\u0069\u006D\u0065\u006E\u0074\u006F\u0020\u0064\u0065\u0020\u0075\u006D\u0020\u006A\u006F\u0067\u006F\u0020\u0064\u0065\u0020\u0063\u006F\u006D\u0062\u0061\u0074\u0065\u0020\u0065\u006D\u0020\u0074\u0075\u0072\u006E\u006F\u0073\u0020\u0075\u0074\u0069\u006C\u0069\u007A\u0061\u006E\u0064\u006F\u0020\u006F\u0073\u0020\u0070\u0069\u006C\u0061\u0072\u0065\u0073\u0020\u0064\u0061\u0020\u0050\u0072\u006F\u0067\u0072\u0061\u006D\u0061\u00E7\u00E3\u006F\u0020\u004F\u0072\u0069\u0065\u006E\u0074\u0061\u0064\u0061\u0020\u0061\u0020\u004F\u0062\u006A\u0065\u0074\u006F\u0073\u0020\u0028\u0050\u004F\u004F\u0029\u002C\u0020\u0063\u006F\u006D\u006F\u0020\u0065\u006E\u0063\u0061\u0070\u0073\u0075\u006C\u0061\u006D\u0065\u006E\u0074\u006F\u0020\u0065\u0020\u0070\u006F\u006C\u0069\u006D\u006F\u0072\u0066\u0069\u0073\u006D\u006F\u002C\u0020\u0070\u0061\u0072\u0061\u0020\u0063\u0072\u0069\u0061\u0072\u0020\u0075\u006D\u0061\u0020\u0065\u0078\u0070\u0065\u0072\u0069\u00EA\u006E\u0063\u0069\u0061\u0020\u0069\u006E\u0074\u0065\u0072\u0061\u0074\u0069\u0076\u0061\u0020\u0065\u0020\u006D\u006F\u0064\u0075\u006C\u0061\u0072\u002E\u0020\u004F\u0020\u006F\u0062\u006A\u0065\u0074\u0069\u0076\u006F\u0020\u0063\u0065\u006E\u0074\u0072\u0061\u006C\u0020\u0066\u006F\u0069\u0020\u0065\u0073\u0074\u0072\u0075\u0074\u0075\u0072\u0061\u0072\u0020\u0061\u0020\u006C\u00F3\u0067\u0069\u0063\u0061\u0020\u0064\u0065\u0020\u0062\u0061\u0074\u0061\u006C\u0068\u0061\u0020\u0065\u0020\u0061\u0020\u0070\u0072\u006F\u0067\u0072\u0065\u0073\u0073\u00E3\u006F\u0020\u0064\u006F\u0020\u006A\u006F\u0067\u0061\u0064\u006F\u0072\u0020\u0061\u0074\u0072\u0061\u0076\u00E9\u0073\u0020\u0064\u0065\u0020\u0066\u0061\u0073\u0065\u0073\u0020\u0065\u0020\u0063\u0065\u006E\u0061\u0073\u0020\u0064\u0069\u0073\u0074\u0069\u006E\u0074\u0061\u0073\u002C\u0020\u0069\u006E\u0074\u0065\u0067\u0072\u0061\u006E\u0064\u006F\u0020\u0065\u006C\u0065\u006D\u0065\u006E\u0074\u006F\u0073\u0020\u006D\u0075\u006C\u0074\u0069\u006D\u00ED\u0064\u0069\u0061\u0020\u0065\u0020\u0067\u0065\u0072\u0065\u006E\u0063\u0069\u0061\u006D\u0065\u006E\u0074\u006F\u0020\u0064\u0065\u0020\u0065\u0073\u0074\u0061\u0064\u006F\u0073\u0020\u0070\u0061\u0072\u0061\u0020\u0067\u0061\u0072\u0061\u006E\u0074\u0069\u0072\u0020\u0075\u006D\u0020\u0066\u006C\u0075\u0078\u006F\u0020\u0064\u0065\u0020\u006A\u006F\u0067\u006F\u0020\u0064\u0069\u006E\u00E2\u006D\u0069\u0063\u006F\u0020\u0065\u0020\u006F\u0072\u0067\u0061\u006E\u0069\u007A\u0061\u0064\u006F\u002E","techDesc":"\u0041\u0020\u0061\u0072\u0071\u0075\u0069\u0074\u0065\u0074\u0075\u0072\u0061\u0020\u0064\u006F\u0020\u0042\u0075\u0072\u0067\u0065\u0072\u0020\u0042\u0061\u0074\u0074\u006C\u0065\u0020\u0062\u0061\u0073\u0065\u0069\u0061\u002D\u0073\u0065\u0020\u006E\u006F\u0073\u0020\u0070\u0069\u006C\u0061\u0072\u0065\u0073\u0020\u0064\u0061\u0020\u0050\u0072\u006F\u0067\u0072\u0061\u006D\u0061\u00E7\u00E3\u006F\u0020\u004F\u0072\u0069\u0065\u006E\u0074\u0061\u0064\u0061\u0020\u0061\u0020\u004F\u0062\u006A\u0065\u0074\u006F\u0073\u0020\u0028\u0050\u004F\u004F\u0029\u002C\u0020\u0075\u0074\u0069\u006C\u0069\u007A\u0061\u006E\u0064\u006F\u0020\u0063\u006C\u0061\u0073\u0073\u0065\u0073\u0020\u006D\u006F\u0064\u0075\u006C\u0061\u0072\u0065\u0073\u0020\u0070\u0061\u0072\u0061\u0020\u0067\u0065\u0072\u0065\u006E\u0063\u0069\u0061\u0072\u0020\u0066\u0061\u0073\u0065\u0073\u0020\u0065\u0020\u0063\u0065\u006E\u0061\u0073\u0020\u0064\u0065\u0020\u0063\u006F\u006D\u0062\u0061\u0074\u0065\u0020\u0065\u006D\u0020\u0074\u0075\u0072\u006E\u006F\u0073\u002C\u0020\u0065\u006E\u0071\u0075\u0061\u006E\u0074\u006F\u0020\u0065\u006D\u0070\u0072\u0065\u0067\u0061\u0020\u0061\u0020\u0062\u0069\u0062\u006C\u0069\u006F\u0074\u0065\u0063\u0061\u0020\u0053\u0077\u0069\u006E\u0067\u0020\u0070\u0061\u0072\u0061\u0020\u0061\u0020\u0069\u006E\u0074\u0065\u0072\u0066\u0061\u0063\u0065\u0020\u0067\u0072\u00E1\u0066\u0069\u0063\u0061\u002C\u0020\u0063\u006F\u006E\u0074\u0072\u006F\u006C\u0065\u0020\u0064\u0065\u0020\u00E1\u0075\u0064\u0069\u006F\u0020\u0065\u0020\u0067\u0065\u0072\u0065\u006E\u0063\u0069\u0061\u006D\u0065\u006E\u0074\u006F\u0020\u0064\u0065\u0020\u0065\u0073\u0074\u0061\u0064\u006F\u0073\u0020\u0064\u0065\u0020\u006A\u006F\u0067\u006F\u002E",'\u0072\u0065\u0073\u0075\u006C\u0074':"O resultado final do projeto Burger Battle foi o desenvolvimento de um jogo funcional de combate em turnos, estruturado em múltiplas fases e cenas que utilizam os conceitos de Programação Orientada a Objetos para gerenciar a lógica de batalha. O software alcançou a integração de elementos multimídia, como trilha sonora de fundo e interface gráfica interativa via Swing, permitindo o controle de turnos entre jogador e inimigos, além do armazenamento e verificação de pontuação e progresso ao longo das partidas.","link":"https://docs.google.com/document/d/1KLCoCFR3qCPg1xyyaCkMvX8bntOTAJ7fVQx_lrJyIWw/edit?usp=sharing","document":"\u0041\u0063\u0065\u0073\u0073\u0061\u0072\u0020\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074\u0061\u00E7\u00E3\u006F"},"Vivamente":{"title":"Vivamente",'\u0074\u0065\u0063\u0068':["\u0048\u0054\u004D\u004C","\u0043\u0053\u0053","tpircSavaJ".split("").reverse().join(""),"\u0050\u0048\u0050","lqSyM".split("").reverse().join(""),"\u0053\u004D\u0054\u0050"],'\u0063\u006F\u006E\u0063\u0065\u0070\u0074':"A concepção do Vivamente surgiu para preencher uma lacuna crítica no suporte à saúde mental no ambiente digital, funcionando como uma plataforma de auxílio imediato para momentos de crise emocional. O sistema opera através de uma estrutura de acolhimento em níveis, onde o usuário passa inicialmente por voluntários para suporte básico, seguido por estagiários em formação e, por fim, psicólogos credenciados que possuem total autonomia para definir a abordagem terapêutica ideal. Essa arquitetura visa conectar pessoas em situações de vulnerabilidade a colaboradores qualificados, oferecendo um suporte humanizado e ágil para quem enfrenta momentos de dificuldade.",'\u0074\u0065\u0063\u0068\u0044\u0065\u0073\u0063':"A arquitetura do Vivamente baseia-se no desenvolvimento web modular, utilizando a Programação Orientada a Objetos (POO) com a linguagem PHP para estruturar uma plataforma escalável e segura. O sistema foi concebido para gerenciar o fluxo de acolhimento emocional em diferentes níveis, empregando conceitos de POO para separar as responsabilidades entre os perfis de usuários (voluntários, estagiários e psicólogos) e garantir a integridade dos dados sensíveis de saúde mental. Essa abordagem permite que o software opere de forma fluida, integrando a lógica de suporte imediato ('SOS') a uma interface acessível, onde a autonomia dos profissionais licenciados é preservada através de métodos e classes bem definidos para o gerenciamento de consultas e prontuários.",'\u0072\u0065\u0073\u0075\u006C\u0074':"O resultado final do projeto Vivamente foi a consolidação de uma plataforma de apoio emocional capaz de oferecer suporte preventivo e imediato antes que crises mais graves se concretizem. O software cumpriu o objetivo de entregar uma ferramenta de segurança preventiva para a saúde mental, estruturada sobre uma base técnica em PHP e Programação Orientada a Objetos que permite a expansão das funcionalidades conforme a demanda. Ao final, o projeto estabeleceu um ecossistema funcional onde a divisão de atendimento em níveis garante agilidade no acolhimento e estabilidade operacional para conectar usuários a uma rede de suporte qualifica","link":"https://vivamenteofi.rf.gd/",'\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074':"\u0041\u0063\u0065\u0073\u0073\u0061\u0072\u0020\u0053\u0069\u0073\u0074\u0065\u006D\u0061"}};_0x646f3b=(646706^646706)+(478203^478201);const loadingManager=new THREE['\u004C\u006F\u0061\u0064\u0069\u006E\u0067\u004D\u0061\u006E\u0061\u0067\u0065\u0072']();loadingManager['\u006F\u006E\u0050\u0072\u006F\u0067\u0072\u0065\u0073\u0073']=(url,itemsLoaded,itemsTotal)=>{var _0x295eb=(851175^851168)+(975342^975343);const progress=itemsLoaded/itemsTotal*(683349^683313);_0x295eb=(611515^611512)+(163661^163657);let _0xd8cd;const fill=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("llif-redaol".split("").reverse().join(""));_0xd8cd=(341232^341235)+(449157^449153);const percent=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("egatnecrep-redaol".split("").reverse().join(""));if(fill)fill['\u0073\u0074\u0079\u006C\u0065']['\u0077\u0069\u0064\u0074\u0068']=`${progress}%`;if(percent)percent['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=`${Math['\u0072\u006F\u0075\u006E\u0064'](progress)}%`;};loadingManager['\u006F\u006E\u004C\u006F\u0061\u0064']=()=>{const preloader=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("redaolerp".split("").reverse().join(""));console['\u006C\u006F\u0067']("\u0053\u0069\u0073\u0074\u0065\u006D\u0061\u0073\u0020\u004F\u006E\u006C\u0069\u006E\u0065\u002E\u0020\u0049\u006E\u0069\u0063\u0069\u0061\u006E\u0064\u006F\u002E\u002E\u002E");gsap['\u0074\u006F'](preloader,{"opacity":0,"duration":1.5,"delay":0.5,"onComplete":()=>{preloader['\u0073\u0074\u0079\u006C\u0065']['\u0076\u0069\u0073\u0069\u0062\u0069\u006C\u0069\u0074\u0079']="\u0068\u0069\u0064\u0064\u0065\u006E";gsap['\u0066\u0072\u006F\u006D']("\u002E\u0070\u0072\u0065\u006D\u0069\u0075\u006D\u002D\u0062\u006C\u0075\u0072",{'\u006F\u0070\u0061\u0063\u0069\u0074\u0079':0,'\u0079':30,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':1});}});};setTimeout(()=>{loadingManager['\u0069\u0074\u0065\u006D\u0053\u0074\u0061\u0072\u0074']("\u0045\u006E\u0067\u0069\u006E\u0065\u0049\u006E\u0069\u0074");loadingManager['\u0069\u0074\u0065\u006D\u0045\u006E\u0064']("\u0045\u006E\u0067\u0069\u006E\u0065\u0049\u006E\u0069\u0074");},957848^957948);function createStarfield(_0x12f66g){const _0x6afbe=new THREE['\u0042\u0075\u0066\u0066\u0065\u0072\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079']();var _0xca84e=(346280^346287)+(264471^264478);_0x12f66g=317898^327386;_0xca84e='\u0065\u0065\u0066\u0063\u0065\u0070';var _0xc19e=(369339^369337)+(464193^464197);const _0x668a=new Float32Array(_0x12f66g*(624755^624752));_0xc19e='\u0066\u0063\u0062\u0067\u0062\u0070';for(let i=943138^943138;i<_0x12f66g*(137397^137398);i++){_0x668a[i]=(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(123498^124346);}_0x6afbe['\u0073\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065']("\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E",new THREE['\u0042\u0075\u0066\u0066\u0065\u0072\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065'](_0x668a,185548^185551));var _0x_0x6fe=(986379^986383)+(940970^940972);const _0xfa_0xb04=new THREE['\u0050\u006F\u0069\u006E\u0074\u0073\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({'\u0063\u006F\u006C\u006F\u0072':0xffffff,'\u0073\u0069\u007A\u0065':0.8,'\u0074\u0072\u0061\u006E\u0073\u0070\u0061\u0072\u0065\u006E\u0074':!![],"opacity":0.6});_0x_0x6fe=816516^816519;return new THREE['\u0050\u006F\u0069\u006E\u0074\u0073'](_0x6afbe,_0xfa_0xb04);}const starField=createStarfield();scene['\u0061\u0064\u0064'](starField);var _0xff_0xc0b=(352248^352253)+(877977^877983);const asteroidCount=297837^298673;_0xff_0xc0b=(485338^485340)+(869597^869596);var _0x4f_0xbad=(388183^388180)+(128749^128740);const astGeo=new THREE['\u0044\u006F\u0064\u0065\u0063\u0061\u0068\u0065\u0064\u0072\u006F\u006E\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](506044^506045,619604^619605);_0x4f_0xbad=(702955^702954)+(483392^483393);const astMat=new THREE['\u004D\u0065\u0073\u0068\u0050\u0068\u0079\u0073\u0069\u0063\u0061\u006C\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({'\u0063\u006F\u006C\u006F\u0072':0x222222,'\u0072\u006F\u0075\u0067\u0068\u006E\u0065\u0073\u0073':0.9,'\u006D\u0065\u0074\u0061\u006C\u006E\u0065\u0073\u0073':0.1});let _0x59f5dc;const instancedAsteroids=new THREE['\u0049\u006E\u0073\u0074\u0061\u006E\u0063\u0065\u0064\u004D\u0065\u0073\u0068'](astGeo,astMat,asteroidCount);_0x59f5dc='\u0062\u0062\u006B\u0061\u0069\u0064';const dummy=new THREE['\u004F\u0062\u006A\u0065\u0063\u0074\u0033\u0044']();for(let i=418963^418963;i<asteroidCount;i++){dummy['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074']((Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(475806^475582),(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(914187^914371)-(498262^498276),(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(306117^305381));dummy['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](Math['\u0072\u0061\u006E\u0064\u006F\u006D']()*Math['\u0050\u0049'],Math['\u0072\u0061\u006E\u0064\u006F\u006D']()*Math['\u0050\u0049'],Math['\u0072\u0061\u006E\u0064\u006F\u006D']()*Math['\u0050\u0049']);dummy['\u0073\u0063\u0061\u006C\u0065']['\u0073\u0065\u0074\u0053\u0063\u0061\u006C\u0061\u0072'](Math['\u0072\u0061\u006E\u0064\u006F\u006D']()*(332793^332794)+0.5);dummy['\u0075\u0070\u0064\u0061\u0074\u0065\u004D\u0061\u0074\u0072\u0069\u0078']();instancedAsteroids['\u0073\u0065\u0074\u004D\u0061\u0074\u0072\u0069\u0078\u0041\u0074'](i,dummy['\u006D\u0061\u0074\u0072\u0069\u0078']);}scene['\u0061\u0064\u0064'](instancedAsteroids);var _0xea1c=(574204^574204)+(768352^768353);const spaceship=new THREE['\u0047\u0072\u006F\u0075\u0070']();_0xea1c=(171689^171688)+(552328^552332);const hullMat=new THREE['\u004D\u0065\u0073\u0068\u0050\u0068\u0079\u0073\u0069\u0063\u0061\u006C\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({'\u0063\u006F\u006C\u006F\u0072':0x111111,'\u006D\u0065\u0074\u0061\u006C\u006E\u0065\u0073\u0073':0.9,'\u0072\u006F\u0075\u0067\u0068\u006E\u0065\u0073\u0073':0.2});const engineMat=new THREE['\u004D\u0065\u0073\u0068\u0042\u0061\u0073\u0069\u0063\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({'\u0063\u006F\u006C\u006F\u0072':0xff3300});let _0xa265g;const coreMesh=new THREE['\u004D\u0065\u0073\u0068'](new THREE['\u0042\u006F\u0078\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](574549^574551,0.8,583147^583150),hullMat);_0xa265g='\u006A\u0070\u0066\u006F\u006D\u006E';let _0xf27a7e;const cockpit=new THREE['\u004D\u0065\u0073\u0068'](new THREE['\u0043\u0061\u0070\u0073\u0075\u006C\u0065\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](0.6,1.5,894938^894942,610157^610149),new THREE['\u004D\u0065\u0073\u0068\u0050\u0068\u0079\u0073\u0069\u0063\u0061\u006C\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({"color":0x000000,'\u0072\u006F\u0075\u0067\u0068\u006E\u0065\u0073\u0073':0,"transmission":1,'\u0074\u0068\u0069\u0063\u006B\u006E\u0065\u0073\u0073':0.5}));_0xf27a7e=(629991^629999)+(743705^743696);cockpit['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']=Math['\u0050\u0049']/(472601^472603);cockpit['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](557114^557114,0.6,-0.5);var _0x57e=(659519^659515)+(476784^476791);const wingL=new THREE['\u004D\u0065\u0073\u0068'](new THREE['\u0043\u006F\u006E\u0065\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](832931^832929,992453^992449,557501^557502),hullMat);_0x57e=(259422^259421)+(723124^723120);wingL['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u007A']=-Math['\u0050\u0049']/(781994^781992);wingL['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](-(796986^796984),951696^951696,196683^196682);const wingR=wingL['\u0063\u006C\u006F\u006E\u0065']();wingR['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u007A']=Math['\u0050\u0049']/(242564^242566);wingR['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](917199^917197,410276^410276,792481^792480);let _0x4ff3db;const thrusterL=new THREE['\u004D\u0065\u0073\u0068'](new THREE['\u0043\u0079\u006C\u0069\u006E\u0064\u0065\u0072\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](0.3,0.5,967258^967259),engineMat);_0x4ff3db='\u006A\u006E\u0065\u006E\u006C\u006C';thrusterL['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']=Math['\u0050\u0049']/(275690^275688);thrusterL['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](-0.8,738698^738698,2.5);const thrusterR=thrusterL['\u0063\u006C\u006F\u006E\u0065']();thrusterR['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](0.8,808066^808066,2.5);spaceship['\u0061\u0064\u0064'](coreMesh,cockpit,wingL,wingR,thrusterL,thrusterR);scene['\u0061\u0064\u0064'](spaceship);const warpDustGroup=new THREE['\u0047\u0072\u006F\u0075\u0070']();scene['\u0061\u0064\u0064'](warpDustGroup);const trailCount=879809^880425;const trailGeo=new THREE['\u0042\u006F\u0078\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](0.05,0.05,685581^685580);var _0xb7452b=(629004^629003)+(433852^433844);const trailMat=new THREE['\u004D\u0065\u0073\u0068\u0042\u0061\u0073\u0069\u0063\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({'\u0063\u006F\u006C\u006F\u0072':0xffffff,"transparent":!![],'\u006F\u0070\u0061\u0063\u0069\u0074\u0079':0,'\u0062\u006C\u0065\u006E\u0064\u0069\u006E\u0067':THREE['\u0041\u0064\u0064\u0069\u0074\u0069\u0076\u0065\u0042\u006C\u0065\u006E\u0064\u0069\u006E\u0067']});_0xb7452b='\u0067\u0068\u0066\u0063\u006A\u0066';var _0x7cda=(868214^868215)+(948943^948942);const speedTrails=new THREE['\u0049\u006E\u0073\u0074\u0061\u006E\u0063\u0065\u0064\u004D\u0065\u0073\u0068'](trailGeo,trailMat,trailCount);_0x7cda=(597334^597331)+(773598^773597);const trailData=[];const trailDummy=new THREE['\u004F\u0062\u006A\u0065\u0063\u0074\u0033\u0044']();for(let i=247422^247422;i<trailCount;i++){trailData['\u0070\u0075\u0073\u0068']({'\u0078':(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(649582^649806),'\u0079':(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(989084^988348),'\u007A':(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(770883^770219),"vel":Math['\u0072\u0061\u006E\u0064\u006F\u006D']()*(104642^104641)+(494816^494817)});}warpDustGroup['\u0061\u0064\u0064'](speedTrails);var _0x6ab6bf=(426141^426143)+(250375^250382);const holoVertexShader=`
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;_0x6ab6bf=666244^666243;var _0x5733b=(605887^605879)+(595461^595457);const holoFragmentShader=`
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
`;_0x5733b=(223930^223928)+(890311^890309);function createHoloProject(x,z,hexColor,title,_0xf5d35f){const _0x2d6aa=new THREE['\u0047\u0072\u006F\u0075\u0070']();_0xf5d35f=(907515^907512)+(268159^268155);_0x2d6aa['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](x,755852^755852,z);_0x2d6aa['\u0075\u0073\u0065\u0072\u0044\u0061\u0074\u0061']={'\u006E\u0061\u006D\u0065':title,'\u0063\u006F\u006C\u006F\u0072':hexColor};var _0x974e=(993441^993440)+(169272^169275);const _0x7ca=new THREE['\u0053\u0068\u0061\u0064\u0065\u0072\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({'\u0075\u006E\u0069\u0066\u006F\u0072\u006D\u0073':{"color":{'\u0076\u0061\u006C\u0075\u0065':new THREE['\u0043\u006F\u006C\u006F\u0072'](hexColor)},'\u0074\u0069\u006D\u0065':{'\u0076\u0061\u006C\u0075\u0065':0}},"vertexShader":holoVertexShader,'\u0066\u0072\u0061\u0067\u006D\u0065\u006E\u0074\u0053\u0068\u0061\u0064\u0065\u0072':holoFragmentShader,"transparent":!![],'\u0062\u006C\u0065\u006E\u0064\u0069\u006E\u0067':THREE['\u0041\u0064\u0064\u0069\u0074\u0069\u0076\u0065\u0042\u006C\u0065\u006E\u0064\u0069\u006E\u0067'],'\u0073\u0069\u0064\u0065':THREE['\u0044\u006F\u0075\u0062\u006C\u0065\u0053\u0069\u0064\u0065']});_0x974e='\u006D\u0071\u0064\u0068\u006C\u006C';const _0x72gc8a=new THREE['\u004D\u0065\u0073\u0068'](new THREE['\u0053\u0070\u0068\u0065\u0072\u0065\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](349861^349859,434844^434876,253095^253063),_0x7ca);_0x2d6aa['\u0061\u0064\u0064'](_0x72gc8a);scene['\u0061\u0064\u0064'](_0x2d6aa);return{'\u0067\u0072\u006F\u0075\u0070':_0x2d6aa,"material":_0x7ca};}const holoProjects=[createHoloProject(-(740912^740888),-(456663^456627),0xff0055,"\u0056\u0065\u0072\u0069\u0066\u0069"),createHoloProject(476186^476200,-(267609^267683),0xffa500,"\u004A\u0061\u0076\u0061\u0026\u0043\u0061\u0066\u00E9"),createHoloProject(189845^189864,-(115291^115492),844877^793556,"elttaB-regruB".split("").reverse().join("")),createHoloProject(654401^654541,-(295038^295256),0x3b82f6,"\u0056\u0069\u0076\u0061\u006D\u0065\u006E\u0074\u0065")];var _0xe0b19d=(315308^315308)+(681344^681347);const state={'\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067':false,'\u0073\u0070\u0065\u0065\u0064':0,"maxSpeed":80,'\u0061\u0063\u0063\u0065\u006C\u0065\u0072\u0061\u0074\u0069\u006F\u006E':2,'\u0066\u0072\u0069\u0063\u0074\u0069\u006F\u006E':0.95,'\u0076\u0065\u006C\u006F\u0063\u0069\u0074\u0079':new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](),'\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E\u0056\u0065\u006C\u006F\u0063\u0069\u0074\u0079':new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0032'](),'\u0074\u0061\u0072\u0067\u0065\u0074\u0052\u006F\u0074\u0061\u0074\u0069\u006F\u006E':new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0032']()};_0xe0b19d=(864154^864155)+(358919^358927);let currentInteractiveProject=null;var _0x53dfff=(905606^905602)+(336667^336665);let currentSlide=484373^484373;_0x53dfff=(943129^943121)+(822186^822187);const keys={'\u0077':false,'\u0061':false,'\u0073':false,'\u0064':false,'\u0061\u0072\u0072\u006F\u0077\u0075\u0070':false,'\u0061\u0072\u0072\u006F\u0077\u006C\u0065\u0066\u0074':false,'\u0061\u0072\u0072\u006F\u0077\u0064\u006F\u0077\u006E':false,"arrowright":false};window['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006B\u0065\u0079\u0064\u006F\u0077\u006E",e=>{const k=e['\u006B\u0065\u0079']['\u0074\u006F\u004C\u006F\u0077\u0065\u0072\u0043\u0061\u0073\u0065']();if(keys['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079'](k))keys[k]=!![];if(k==="\u0062"&&state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067'])document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("lenap-golb".split("").reverse().join(""))['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u0061\u0063\u0074\u0069\u0076\u0065");if(k==="\u0065"&&currentInteractiveProject&&state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067'])triggerWarp(currentInteractiveProject['\u0067\u0072\u006F\u0075\u0070']['\u0075\u0073\u0065\u0072\u0044\u0061\u0074\u0061']['\u006E\u0061\u006D\u0065']);});window['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006B\u0065\u0079\u0075\u0070",e=>{const k=e['\u006B\u0065\u0079']['\u0074\u006F\u004C\u006F\u0077\u0065\u0072\u0043\u0061\u0073\u0065']();if(keys['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079'](k))keys[k]=false;});function updatePhysics(dt){if(!state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067'])return;var _0x329e=(526753^526752)+(209428^209429);const _0x914e=keys['\u0077']||keys['\u0061\u0072\u0072\u006F\u0077\u0075\u0070'];_0x329e=(384331^384332)+(251023^251022);const _0x46b4c=keys['\u0073']||keys['\u0061\u0072\u0072\u006F\u0077\u0064\u006F\u0077\u006E'];const _0x07f=keys['\u0061']||keys['\u0061\u0072\u0072\u006F\u0077\u006C\u0065\u0066\u0074'];const _0x6312e=keys['\u0064']||keys['\u0061\u0072\u0072\u006F\u0077\u0072\u0069\u0067\u0068\u0074'];if(_0x914e)state['\u0073\u0070\u0065\u0065\u0064']=Math['\u006D\u0069\u006E'](state['\u0073\u0070\u0065\u0065\u0064']+state['\u0061\u0063\u0063\u0065\u006C\u0065\u0072\u0061\u0074\u0069\u006F\u006E'],state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']);else if(_0x46b4c)state['\u0073\u0070\u0065\u0065\u0064']=Math['\u006D\u0061\u0078'](state['\u0073\u0070\u0065\u0065\u0064']-state['\u0061\u0063\u0063\u0065\u006C\u0065\u0072\u0061\u0074\u0069\u006F\u006E'],-state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']/(518087^518085));else state['\u0073\u0070\u0065\u0065\u0064']*=state['\u0066\u0072\u0069\u0063\u0074\u0069\u006F\u006E'];if(_0x07f)state['\u0074\u0061\u0072\u0067\u0065\u0074\u0052\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']+=0.05;if(_0x6312e)state['\u0074\u0061\u0072\u0067\u0065\u0074\u0052\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']-=0.05;state['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E\u0056\u0065\u006C\u006F\u0063\u0069\u0074\u0079']['\u0078']+=(state['\u0074\u0061\u0072\u0067\u0065\u0074\u0052\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']-spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079'])*0.1;state['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E\u0056\u0065\u006C\u006F\u0063\u0069\u0074\u0079']['\u0078']*=0.8;spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']+=state['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E\u0056\u0065\u006C\u006F\u0063\u0069\u0074\u0079']['\u0078'];const _0xd9bbd=_0x07f?0.5:_0x6312e?-0.5:498146^498146;spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u007A']+=(_0xd9bbd-spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u007A'])*0.1;const _0x9967ad=state['\u0073\u0070\u0065\u0065\u0064']/state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']*-0.2;spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']+=(_0x9967ad-spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078'])*0.1;const _0xd_0xfd2=new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](392837^392837,978465^978465,-(132674^132675))['\u0061\u0070\u0070\u006C\u0079\u0041\u0078\u0069\u0073\u0041\u006E\u0067\u006C\u0065'](new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](575589^575589,976682^976683,653925^653925),spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']);spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0061\u0064\u0064\u0053\u0063\u0061\u006C\u0065\u0064\u0056\u0065\u0063\u0074\u006F\u0072'](_0xd_0xfd2,state['\u0073\u0070\u0065\u0065\u0064']*dt);spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0079']=279813^279813;const _0x7gd27f=new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](351529^351529,2.5,319867^319863)['\u0061\u0070\u0070\u006C\u0079\u0041\u0078\u0069\u0073\u0041\u006E\u0067\u006C\u0065'](new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](130651^130651,978436^978437,624439^624439),spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']);const _0xcf_0xe0d=new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](993496^993496,998264^998264,-(551384^551402))['\u0061\u0070\u0070\u006C\u0079\u0041\u0078\u0069\u0073\u0041\u006E\u0067\u006C\u0065'](new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](744298^744298,271240^271241,109182^109182),spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079'])['\u0061\u0064\u0064'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']);camera['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u006C\u0065\u0072\u0070'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0063\u006C\u006F\u006E\u0065']()['\u0061\u0064\u0064'](_0x7gd27f),0.1);camera['\u0066\u006F\u0076']=THREE['\u004D\u0061\u0074\u0068\u0055\u0074\u0069\u006C\u0073']['\u006C\u0065\u0072\u0070'](camera['\u0066\u006F\u0076'],(395358^395362)+state['\u0073\u0070\u0065\u0065\u0064']/state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']*(971368^971382),0.1);camera['\u0075\u0070\u0064\u0061\u0074\u0065\u0050\u0072\u006F\u006A\u0065\u0063\u0074\u0069\u006F\u006E\u004D\u0061\u0074\u0072\u0069\u0078']();camera['\u006C\u006F\u006F\u006B\u0041\u0074'](_0xcf_0xe0d);const _0x93e80b=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("rotacidni-deeps".split("").reverse().join(""));if(_0x93e80b)_0x93e80b['\u0073\u0074\u0079\u006C\u0065']['\u0077\u0069\u0064\u0074\u0068']=`${Math['\u0061\u0062\u0073'](state['\u0073\u0070\u0065\u0065\u0064'])/state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']*(625286^625378)}%`;var _0xe37f=(426330^426331)+(375261^375259);const _0xga57ec=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006F\u006F\u0072\u0064\u002D\u0078");_0xe37f=254234^254238;var _0xfafa7f=(678054^678062)+(261034^261034);const _0x1g_0xb8g=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("z-drooc".split("").reverse().join(""));_0xfafa7f='\u006E\u0062\u0063\u0066\u0065\u006B';if(_0xga57ec)_0xga57ec['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=Math['\u0072\u006F\u0075\u006E\u0064'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0078'])['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](611659^611656,"\u0030");if(_0x1g_0xb8g)_0x1g_0xb8g['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=Math['\u0072\u006F\u0075\u006E\u0064'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u007A'])['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](659974^659973,"\u0030");thrusterL['\u006D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']['\u0063\u006F\u006C\u006F\u0072']['\u0073\u0065\u0074\u0048\u0065\u0078'](_0x914e?899404^874419:0xff3300);thrusterR['\u006D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']['\u0063\u006F\u006C\u006F\u0072']['\u0073\u0065\u0074\u0048\u0065\u0078'](_0x914e?516778^461909:0xff3300);}function triggerWarp(projectName,_0x7b56g){state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067']=false;document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0069\u006E\u0074\u0065\u0072\u0061\u0063\u0074\u0069\u006F\u006E\u002D\u0075\u0069")['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0076\u0069\u0073\u0069\u0062\u006C\u0065");document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("reyal-duh".split("").reverse().join(""))['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0068\u0069\u0064\u0064\u0065\u006E");gsap['\u0074\u006F'](state,{'\u0073\u0070\u0065\u0065\u0064':state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']*2.5,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':1.5,"ease":"\u0070\u006F\u0077\u0065\u0072\u0033\u002E\u0069\u006E"});const _0x6b_0xf7f=new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](580701^580701,331488^331488,-(394822^394598))['\u0061\u0070\u0070\u006C\u0079\u0041\u0078\u0069\u0073\u0041\u006E\u0067\u006C\u0065'](new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](301981^301981,410458^410459,518337^518337),spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']);gsap['\u0074\u006F'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E'],{'\u0078':spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0078']+_0x6b_0xf7f['\u0078'],'\u007A':spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u007A']+_0x6b_0xf7f['\u007A'],"duration":1.5,'\u0065\u0061\u0073\u0065':"\u0070\u006F\u0077\u0065\u0072\u0033\u002E\u0069\u006E"});gsap['\u0074\u006F'](camera,{'\u0066\u006F\u0076':140,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':1.5,"ease":"\u0070\u006F\u0077\u0065\u0072\u0032\u002E\u0069\u006E","onUpdate":()=>camera['\u0075\u0070\u0064\u0061\u0074\u0065\u0050\u0072\u006F\u006A\u0065\u0063\u0074\u0069\u006F\u006E\u004D\u0061\u0074\u0072\u0069\u0078']()});gsap['\u0074\u006F'](bloomPass,{"strength":4.0,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':1.5,'\u0065\u0061\u0073\u0065':"power2.in"});const _0xd9g2f=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0077\u0061\u0072\u0070\u002D\u0066\u006C\u0061\u0073\u0068");_0x7b56g='\u0067\u0062\u006E\u0062\u0069\u006C';gsap['\u0074\u006F'](_0xd9g2f,{"opacity":1,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':0.3,"delay":1.2,'\u006F\u006E\u0043\u006F\u006D\u0070\u006C\u0065\u0074\u0065':()=>{populateProjectSlides(projectName);document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("esacwohs-tcejorp".split("").reverse().join(""))['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0061\u0063\u0074\u0069\u0076\u0065");spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](322450^322450,619173^619173,254028^254028);spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](176916^176916,699164^699164,154338^154338);state['\u0074\u0061\u0072\u0067\u0065\u0074\u0052\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](702825^702825,344286^344286);camera['\u0066\u006F\u0076']=817960^817940;camera['\u0075\u0070\u0064\u0061\u0074\u0065\u0050\u0072\u006F\u006A\u0065\u0063\u0074\u0069\u006F\u006E\u004D\u0061\u0074\u0072\u0069\u0078']();camera['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](659542^659542,2.5,749717^749721);bloomPass['\u0073\u0074\u0072\u0065\u006E\u0067\u0074\u0068']=0.8;state['\u0073\u0070\u0065\u0065\u0064']=489670^489670;gsap['\u0074\u006F'](_0xd9g2f,{'\u006F\u0070\u0061\u0063\u0069\u0074\u0079':0,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':1});}});}function populateProjectSlides(projectName,_0x8888a,_0xce97ee){const _0xdc_0xd5f=projectDB[projectName];_0x8888a=(891902^891897)+(667686^667683);if(!_0xdc_0xd5f)return;document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("eltit-jorp".split("").reverse().join(""))['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=_0xdc_0xd5f['\u0074\u0069\u0074\u006C\u0065'];document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tpecnoc-jorp".split("").reverse().join(""))['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=_0xdc_0xd5f['\u0063\u006F\u006E\u0063\u0065\u0070\u0074'];document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u006A\u002D\u0074\u0065\u0063\u0068")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=_0xdc_0xd5f['\u0074\u0065\u0063\u0068\u0044\u0065\u0073\u0063'];document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tluser-jorp".split("").reverse().join(""))['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=_0xdc_0xd5f['\u0072\u0065\u0073\u0075\u006C\u0074'];var _0x0e5a=(376780^376778)+(180711^180707);var _0xebg=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u006A\u002D\u0072\u0065\u0070\u006F\u002D\u0062\u0074\u006E");_0x0e5a=697773^697774;_0xebg['\u0068\u0072\u0065\u0066']=_0xdc_0xd5f['\u006C\u0069\u006E\u006B'];_0xebg['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0xdc_0xd5f['\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074'];const _0xac422g=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u006A\u002D\u0062\u0061\u0064\u0067\u0065\u0073");_0xce97ee=303693^303694;_0xac422g['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']='';_0xdc_0xd5f['\u0074\u0065\u0063\u0068']['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](t=>{_0xac422g['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']+=`<span class="badge" style="font-size: 0.9rem; padding: 0.4rem 1rem;">${t}</span>`;});currentSlide=949181^949181;updateSlideView();}function updateSlideView(){document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u0073\u006C\u0069\u0064\u0065")['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](s=>s['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0061\u0063\u0074\u0069\u0076\u0065"));document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u0064\u006F\u0074")['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](d=>d['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("evitca".split("").reverse().join("")));document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](`slide-${currentSlide}`)['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("evitca".split("").reverse().join(""));document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("tod.".split("").reverse().join(""))[currentSlide]['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("evitca".split("").reverse().join(""));var _0xf256d=(624659^624666)+(358667^358670);const _0x7477ed=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u0065\u0076\u002D\u0073\u006C\u0069\u0064\u0065");_0xf256d=(652897^652900)+(472584^472585);const _0xbcc=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("edils-txen".split("").reverse().join(""));if(_0x7477ed){_0x7477ed['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079']=currentSlide===(411389^411389)?"\u0030\u002E\u0032":"\u0031";_0x7477ed['\u0073\u0074\u0079\u006C\u0065']['\u0070\u006F\u0069\u006E\u0074\u0065\u0072\u0045\u0076\u0065\u006E\u0074\u0073']=currentSlide===(117084^117084)?"enon".split("").reverse().join(""):"\u0061\u0075\u0074\u006F";}if(_0xbcc){_0xbcc['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079']=currentSlide===(263792^263794)?"2.0".split("").reverse().join(""):"\u0031";_0xbcc['\u0073\u0074\u0079\u006C\u0065']['\u0070\u006F\u0069\u006E\u0074\u0065\u0072\u0045\u0076\u0065\u006E\u0074\u0073']=currentSlide===(525306^525304)?"enon".split("").reverse().join(""):"\u0061\u0075\u0074\u006F";}}document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("edils-txen".split("").reverse().join(""))?.addEventListener("kcilc".split("").reverse().join(""),()=>{if(currentSlide<(688309^688311)){currentSlide++;updateSlideView();}});document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u0065\u0076\u002D\u0073\u006C\u0069\u0064\u0065")?.addEventListener("\u0063\u006C\u0069\u0063\u006B",()=>{if(currentSlide>(680219^680219)){currentSlide--;updateSlideView();}});document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tcejorp-esolc".split("").reverse().join(""))?.addEventListener("kcilc".split("").reverse().join(""),()=>{const flash=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0077\u0061\u0072\u0070\u002D\u0066\u006C\u0061\u0073\u0068");gsap['\u0074\u006F'](flash,{"opacity":1,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':0.3,'\u006F\u006E\u0043\u006F\u006D\u0070\u006C\u0065\u0074\u0065':()=>{document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u006A\u0065\u0063\u0074\u002D\u0073\u0068\u006F\u0077\u0063\u0061\u0073\u0065")['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0061\u0063\u0074\u0069\u0076\u0065");document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0068\u0075\u0064\u002D\u006C\u0061\u0079\u0065\u0072")['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("neddih".split("").reverse().join(""));state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067']=!![];gsap['\u0074\u006F'](flash,{"opacity":0,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':0.5});}});});function checkFloatingOrigin(){if(spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u006C\u0065\u006E\u0067\u0074\u0068']()>(467313^468141)){var _0x7e8b6a=(596441^596447)+(610266^610264);const _0x7c2ag=spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0063\u006C\u006F\u006E\u0065']();_0x7e8b6a="npqfnh".split("").reverse().join("");spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](230898^230898,998154^998154,697266^697266);camera['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0075\u0062'](_0x7c2ag);starField['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0075\u0062'](_0x7c2ag);holoProjects['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](p=>p['\u0067\u0072\u006F\u0075\u0070']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0075\u0062'](_0x7c2ag));for(let i=314811^314811;i<asteroidCount;i++){instancedAsteroids['\u0067\u0065\u0074\u004D\u0061\u0074\u0072\u0069\u0078\u0041\u0074'](i,dummy['\u006D\u0061\u0074\u0072\u0069\u0078']);dummy['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074\u0046\u0072\u006F\u006D\u004D\u0061\u0074\u0072\u0069\u0078\u0050\u006F\u0073\u0069\u0074\u0069\u006F\u006E'](dummy['\u006D\u0061\u0074\u0072\u0069\u0078']);dummy['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0075\u0062'](_0x7c2ag);dummy['\u0075\u0070\u0064\u0061\u0074\u0065\u004D\u0061\u0074\u0072\u0069\u0078']();instancedAsteroids['\u0073\u0065\u0074\u004D\u0061\u0074\u0072\u0069\u0078\u0041\u0074'](i,dummy['\u006D\u0061\u0074\u0072\u0069\u0078']);}instancedAsteroids['\u0069\u006E\u0073\u0074\u0061\u006E\u0063\u0065\u004D\u0061\u0074\u0072\u0069\u0078']['\u006E\u0065\u0065\u0064\u0073\u0055\u0070\u0064\u0061\u0074\u0065']=!![];}}const clock=new THREE['\u0043\u006C\u006F\u0063\u006B']();function animate(_0xc23dde,_0xe85c,_0x91dd){requestAnimationFrame(animate);const _0xc6a3b=clock['\u0067\u0065\u0074\u0044\u0065\u006C\u0074\u0061']();_0xc23dde=404494^404490;const _0x642bca=clock['\u0067\u0065\u0074\u0045\u006C\u0061\u0070\u0073\u0065\u0064\u0054\u0069\u006D\u0065']();_0xe85c=961736^961740;starField['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']=_0x642bca*0.02;instancedAsteroids['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']=_0x642bca*0.05;instancedAsteroids['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']=_0x642bca*0.02;warpDustGroup['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0063\u006F\u0070\u0079'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']);warpDustGroup['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']=spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079'];const _0xf763da=Math['\u0061\u0062\u0073'](state['\u0073\u0070\u0065\u0065\u0064']/state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']);trailMat['\u006F\u0070\u0061\u0063\u0069\u0074\u0079']=Math['\u006D\u0069\u006E'](_0xf763da*1.5,0.8);const _0x80a=new THREE['\u0043\u006F\u006C\u006F\u0072'](0xffffff);const _0x9c661a=new THREE['\u0043\u006F\u006C\u006F\u0072'](0xff5500);trailMat['\u0063\u006F\u006C\u006F\u0072']['\u006C\u0065\u0072\u0070\u0043\u006F\u006C\u006F\u0072\u0073'](_0x80a,_0x9c661a,Math['\u006D\u0069\u006E'](_0xf763da,349302^349303));for(let i=703754^703754;i<trailCount;i++){var _0x0e6a8d=(479316^479324)+(282120^282112);const t=trailData[i];_0x0e6a8d=(809356^809348)+(438786^438786);t['\u007A']+=t['\u0076\u0065\u006C']+state['\u0073\u0070\u0065\u0065\u0064']*0.8;if(t['\u007A']>(644970^644952)){t['\u007A']=-(229149^228413);t['\u0078']=(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(416965^417765);t['\u0079']=(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(740056^739832);}trailDummy['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](t['\u0078'],t['\u0079'],t['\u007A']);trailDummy['\u0073\u0063\u0061\u006C\u0065']['\u0073\u0065\u0074'](490378^490379,435007^435006,_0xf763da*(836046^835928)+(625959^625958));trailDummy['\u0075\u0070\u0064\u0061\u0074\u0065\u004D\u0061\u0074\u0072\u0069\u0078']();speedTrails['\u0073\u0065\u0074\u004D\u0061\u0074\u0072\u0069\u0078\u0041\u0074'](i,trailDummy['\u006D\u0061\u0074\u0072\u0069\u0078']);}speedTrails['\u0069\u006E\u0073\u0074\u0061\u006E\u0063\u0065\u004D\u0061\u0074\u0072\u0069\u0078']['\u006E\u0065\u0065\u0064\u0073\u0055\u0070\u0064\u0061\u0074\u0065']=!![];var _0xda0c8d=(326654^326650)+(789027^789028);_0x91dd=423136^423112;_0xda0c8d=(413568^413573)+(266099^266107);let _0x79c=null;holoProjects['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](p=>{p['\u006D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']['\u0075\u006E\u0069\u0066\u006F\u0072\u006D\u0073']['\u0074\u0069\u006D\u0065']['\u0076\u0061\u006C\u0075\u0065']=_0x642bca;p['\u0067\u0072\u006F\u0075\u0070']['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']-=0.01;if(state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067']){const _0xdb6efe=spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0064\u0069\u0073\u0074\u0061\u006E\u0063\u0065\u0054\u006F'](p['\u0067\u0072\u006F\u0075\u0070']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']);if(_0xdb6efe<_0x91dd){_0x79c=p;p['\u006D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']['\u0075\u006E\u0069\u0066\u006F\u0072\u006D\u0073']['\u0063\u006F\u006C\u006F\u0072']['\u0076\u0061\u006C\u0075\u0065']['\u0073\u0065\u0074\u0048\u0065\u0078'](0xffffff);}else{p['\u006D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']['\u0075\u006E\u0069\u0066\u006F\u0072\u006D\u0073']['\u0063\u006F\u006C\u006F\u0072']['\u0076\u0061\u006C\u0075\u0065']['\u0073\u0065\u0074\u0048\u0065\u0078'](p['\u0067\u0072\u006F\u0075\u0070']['\u0075\u0073\u0065\u0072\u0044\u0061\u0074\u0061']['\u0063\u006F\u006C\u006F\u0072']);}}});if(_0x79c!==currentInteractiveProject){currentInteractiveProject=_0x79c;var _0x9a_0xbd5=(173181^173177)+(775280^775286);const _0x4a4e4a=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0069\u006E\u0074\u0065\u0072\u0061\u0063\u0074\u0069\u006F\u006E\u002D\u0075\u0069");_0x9a_0xbd5=(863555^863557)+(127236^127234);if(currentInteractiveProject&&state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067']){document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("txet-noitcaretni".split("").reverse().join(""))['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=`Conectar a ${currentInteractiveProject['\u0067\u0072\u006F\u0075\u0070']['\u0075\u0073\u0065\u0072\u0044\u0061\u0074\u0061']['\u006E\u0061\u006D\u0065']}`;if(_0x4a4e4a){_0x4a4e4a['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0068\u0069\u0064\u0064\u0065\u006E");_0x4a4e4a['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("elbisiv".split("").reverse().join(""));}}else if(_0x4a4e4a){_0x4a4e4a['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0076\u0069\u0073\u0069\u0062\u006C\u0065");}}updatePhysics(_0xc6a3b);if(state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067'])checkFloatingOrigin();composer['\u0072\u0065\u006E\u0064\u0065\u0072']();}animate();document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u006C\u0061\u0075\u006E\u0063\u0068\u002D\u0062\u0074\u006E")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B",()=>{let _0x86ebga;const uiLayer=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0075\u0069\u002D\u006C\u0061\u0079\u0065\u0072");_0x86ebga='\u006E\u006C\u0065\u006B\u0065\u006C';const hudLayer=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("reyal-duh".split("").reverse().join(""));gsap['\u0074\u006F'](uiLayer,{"opacity":0,"duration":1,'\u006F\u006E\u0043\u006F\u006D\u0070\u006C\u0065\u0074\u0065':()=>uiLayer['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="\u006E\u006F\u006E\u0065"});gsap['\u0074\u006F'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E'],{'\u007A':-(248314^248292),"duration":2,'\u0065\u0061\u0073\u0065':"\u0070\u006F\u0077\u0065\u0072\u0032\u002E\u0069\u006E\u004F\u0075\u0074"});setTimeout(()=>{state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067']=!![];hudLayer['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0068\u0069\u0064\u0064\u0065\u006E");},516936^517272);});document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006C\u006F\u0073\u0065\u002D\u0062\u006C\u006F\u0067\u002D\u0062\u0074\u006E")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B",()=>{document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u006C\u006F\u0067\u002D\u0070\u0061\u006E\u0065\u006C")['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0061\u0063\u0074\u0069\u0076\u0065");});window['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("eziser".split("").reverse().join(""),()=>{camera['\u0061\u0073\u0070\u0065\u0063\u0074']=window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068']/window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074'];camera['\u0075\u0070\u0064\u0061\u0074\u0065\u0050\u0072\u006F\u006A\u0065\u0063\u0074\u0069\u006F\u006E\u004D\u0061\u0074\u0072\u0069\u0078']();renderer['\u0073\u0065\u0074\u0053\u0069\u007A\u0065'](window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068'],window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074']);composer['\u0073\u0065\u0074\u0053\u0069\u007A\u0065'](window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068'],window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074']);});
