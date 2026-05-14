import*as THREE from"\u0074\u0068\u0072\u0065\u0065";import{EffectComposer}from"\u0074\u0068\u0072\u0065\u0065\u002F\u0061\u0064\u0064\u006F\u006E\u0073\u002F\u0070\u006F\u0073\u0074\u0070\u0072\u006F\u0063\u0065\u0073\u0073\u0069\u006E\u0067\u002F\u0045\u0066\u0066\u0065\u0063\u0074\u0043\u006F\u006D\u0070\u006F\u0073\u0065\u0072\u002E\u006A\u0073";import{RenderPass}from"\u0074\u0068\u0072\u0065\u0065\u002F\u0061\u0064\u0064\u006F\u006E\u0073\u002F\u0070\u006F\u0073\u0074\u0070\u0072\u006F\u0063\u0065\u0073\u0073\u0069\u006E\u0067\u002F\u0052\u0065\u006E\u0064\u0065\u0072\u0050\u0061\u0073\u0073\u002E\u006A\u0073";import{UnrealBloomPass}from"\u0074\u0068\u0072\u0065\u0065\u002F\u0061\u0064\u0064\u006F\u006E\u0073\u002F\u0070\u006F\u0073\u0074\u0070\u0072\u006F\u0063\u0065\u0073\u0073\u0069\u006E\u0067\u002F\u0055\u006E\u0072\u0065\u0061\u006C\u0042\u006C\u006F\u006F\u006D\u0050\u0061\u0073\u0073\u002E\u006A\u0073";import{OutputPass}from"\u0074\u0068\u0072\u0065\u0065\u002F\u0061\u0064\u0064\u006F\u006E\u0073\u002F\u0070\u006F\u0073\u0074\u0070\u0072\u006F\u0063\u0065\u0073\u0073\u0069\u006E\u0067\u002F\u004F\u0075\u0074\u0070\u0075\u0074\u0050\u0061\u0073\u0073\u002E\u006A\u0073";let _0xe37ec;const gsap=window['\u0067\u0073\u0061\u0070'];_0xe37ec=646066^646065;const canvas=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u0023\u0077\u0065\u0062\u0067\u006C\u002D\u0063\u0061\u006E\u0076\u0061\u0073");var _0xeb_0x9e7=(511145^511144)+(170492^170489);const scene=new THREE['\u0053\u0063\u0065\u006E\u0065']();_0xeb_0x9e7=(702939^702931)+(448392^448394);scene['\u0066\u006F\u0067']=new THREE['\u0046\u006F\u0067\u0045\u0078\u0070\u0032'](0x030305,0.008);scene['\u0062\u0061\u0063\u006B\u0067\u0072\u006F\u0075\u006E\u0064']=new THREE['\u0043\u006F\u006C\u006F\u0072'](0x030305);var _0x250cc=(758127^758125)+(442774^442773);const camera=new THREE['\u0050\u0065\u0072\u0073\u0070\u0065\u0063\u0074\u0069\u0076\u0065\u0043\u0061\u006D\u0065\u0072\u0061'](468954^468966,window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068']/window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074'],0.1,359626^358258);_0x250cc="kjbbcf".split("").reverse().join("");camera['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](291265^291265,164644^164647,671852^671843);var _0x4g_0x2f2=(306205^306200)+(234482^234484);const renderer=new THREE['\u0057\u0065\u0062\u0047\u004C\u0052\u0065\u006E\u0064\u0065\u0072\u0065\u0072']({"canvas":canvas,'\u0061\u006E\u0074\u0069\u0061\u006C\u0069\u0061\u0073':false,"powerPreference":"\u0068\u0069\u0067\u0068\u002D\u0070\u0065\u0072\u0066\u006F\u0072\u006D\u0061\u006E\u0063\u0065"});_0x4g_0x2f2="pemnep".split("").reverse().join("");renderer['\u0073\u0065\u0074\u0053\u0069\u007A\u0065'](window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068'],window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074']);renderer['\u0073\u0065\u0074\u0050\u0069\u0078\u0065\u006C\u0052\u0061\u0074\u0069\u006F'](Math['\u006D\u0069\u006E'](window['\u0064\u0065\u0076\u0069\u0063\u0065\u0050\u0069\u0078\u0065\u006C\u0052\u0061\u0074\u0069\u006F'],492789^492791));renderer['\u0074\u006F\u006E\u0065\u004D\u0061\u0070\u0070\u0069\u006E\u0067']=THREE['\u0041\u0043\u0045\u0053\u0046\u0069\u006C\u006D\u0069\u0063\u0054\u006F\u006E\u0065\u004D\u0061\u0070\u0070\u0069\u006E\u0067'];renderer['\u0074\u006F\u006E\u0065\u004D\u0061\u0070\u0070\u0069\u006E\u0067\u0045\u0078\u0070\u006F\u0073\u0075\u0072\u0065']=1.2;let _0xcbaab;const composer=new EffectComposer(renderer);_0xcbaab='\u0061\u006B\u0065\u006E\u0069\u0070';var _0x910g=(374159^374152)+(677727^677727);const renderPass=new RenderPass(scene,camera);_0x910g=(209314^209317)+(182295^182294);let _0xe85d;const bloomPass=new UnrealBloomPass(new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0032'](window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068'],window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074']),910082^910083,0.4,0.85);_0xe85d=(556657^556665)+(558660^558657);bloomPass['\u0074\u0068\u0072\u0065\u0073\u0068\u006F\u006C\u0064']=0.2;bloomPass['\u0073\u0074\u0072\u0065\u006E\u0067\u0074\u0068']=0.8;bloomPass['\u0072\u0061\u0064\u0069\u0075\u0073']=0.5;var _0x6a9d=(941486^941487)+(915799^915799);const outputPass=new OutputPass();_0x6a9d=(592178^592179)+(488380^488380);composer['\u0061\u0064\u0064\u0050\u0061\u0073\u0073'](renderPass);composer['\u0061\u0064\u0064\u0050\u0061\u0073\u0073'](bloomPass);composer['\u0061\u0064\u0064\u0050\u0061\u0073\u0073'](outputPass);var _0x2d3db=(978209^978217)+(413923^413926);const ambientLight=new THREE['\u0041\u006D\u0062\u0069\u0065\u006E\u0074\u004C\u0069\u0067\u0068\u0074'](0xffffff,0.2);_0x2d3db=(326595^326597)+(685714^685723);scene['\u0061\u0064\u0064'](ambientLight);var _0xb11ee=(645769^645770)+(791105^791111);const mainLight=new THREE['\u0044\u0069\u0072\u0065\u0063\u0074\u0069\u006F\u006E\u0061\u006C\u004C\u0069\u0067\u0068\u0074'](0x8b5cf6,470167^470164);_0xb11ee=(552634^552633)+(106406^106400);mainLight['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](668876^668926,906271^906363,406108^406126);scene['\u0061\u0064\u0064'](mainLight);const fillLight=new THREE['\u0044\u0069\u0072\u0065\u0063\u0074\u0069\u006F\u006E\u0061\u006C\u004C\u0069\u0067\u0068\u0074'](561706^556245,1.5);fillLight['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](-(269100^269086),777853^777853,-(560801^560787));scene['\u0061\u0064\u0064'](fillLight);const styles=`
    .global-copyright { position: fixed; bottom: 20px; ... }
    .cyber-link { color: #00eeff; ... }
`;const cssProtegido=`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@300;400;600&display=swap');

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
}`;let _0x0eg2d;const styleTag=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0073\u0074\u0079\u006C\u0065");_0x0eg2d=(649468^649470)+(319106^319104);styleTag['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=cssProtegido;document['\u0068\u0065\u0061\u0064']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](styleTag);const projectDB={"Verifi":{"title":"\u0056\u0065\u0072\u0069\u0066\u0069\u0020\u0028\u0041\u006E\u0074\u0069\u002D\u0046\u0072\u0061\u0075\u0064\u0065\u0029",'\u0074\u0065\u0063\u0068':["\u004A\u0061\u0076\u0061\u0020\u0032\u0035","\u0053\u0070\u0072\u0069\u006E\u0067\u0020\u0042\u006F\u006F\u0074","\u004D\u0061\u0063\u0068\u0069\u006E\u0065\u0020\u004C\u0065\u0061\u0072\u006E\u0069\u006E\u0067",")revres etavirp lautiV(SPV".split("").reverse().join("")],'\u0063\u006F\u006E\u0063\u0065\u0070\u0074':"Diante do aumento de fraudes financeiras no sistema de pagamentos brasileiro, o projeto Verifi.com desenvolveu uma plataforma para verificação de autenticidade de boletos e chaves Pix. O objetivo é oferecer uma ferramenta de análise de risco acessível ao cidadão brasileiro. Utilizando Metodologia Ágil, a arquitetura foi construída com Spring Boot para a análise e PHP para o gerenciamento de interface, empregando Inteligência Artificial (IA) em nuvem para o cruzamento de dados de beneficiários. Para garantir a inclusão, integrou-se a Suíte VLibras. O projeto baseou-se em uma pesquisa quantitativa com alguns participantes, revelando que 22,2% já foram vítimas de golpes. Os testes de validação mostraram que o refinamento de prompt na IA elevou a assertividade de 65% para 85%. Conclui-se que a solução apresenta alta escalabilidade, com viabilidade técnica para integração via API em aplicativos bancários, reduzindo a vulnerabilidade dos usuários.",'\u0074\u0065\u0063\u0068\u0044\u0065\u0073\u0063':"A engenharia e arquitetura do projeto Verifi.com baseiam-se em uma estrutura de microsserviços com abordagem poliglota , utilizando Java com o framework Spring Boot para a lógica de negócio e análise documental via API REST , enquanto o PHP gerencia a interface e comunicações externas. O sistema processa arquivos nos formatos PDF e JPEG , extraindo dados que são analisados pela Inteligência Artificial Gemini; essa IA teve sua assertividade elevada de 65% para 85% por meio do refinamento de prompts para identificar inconsistências e padrões de fraudes. Para reforçar a segurança, a arquitetura integra experimentalmente o score de risco da API Pix Risk, que avalia o histórico das contas bancárias de beneficiários , além de utilizar um banco de dados MySQL para persistência e JWT (JSON Web Token) para garantir a segurança das requisições em um ambiente hospedado em servidor VPS. O fluxo operacional, organizado via metodologia ágil Kanban , percorre desde o upload do documento até a geração de um relatório de risco detalhado para o usuário , incluindo também acessibilidade por meio da integração com a Suíte VLibras. ",'\u0072\u0065\u0073\u0075\u006C\u0074':"O resultado final do projeto Verifi.com demonstrou a viabilidade técnica de uma solução escalável para o combate a fraudes bancárias, alcançando uma estabilidade operacional significativa após a migração para um ambiente de servidor VPS. O principal avanço medido foi a eficácia da Inteligência Artificial Gemini, que elevou sua taxa de assertividade de 65% para 85% após o refinamento estratégico de prompts e melhorias na leitura de imagens. Além disso, a integração experimental com o score da Pix Risk permitiu que a ferramenta evoluísse de uma simples validadora de documentos para um sistema completo de prevenção de risco transacional, reduzindo falsos positivos e oferecendo um relatório claro e direto ao usuário final. O protótipo cumpriu seu objetivo de atuar como uma barreira preventiva em tempo real, fornecendo uma base sólida para futuras expansões em infraestruturas de alta escala e possíveis parcerias com instituições financeiras.",'\u006C\u0069\u006E\u006B':"\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0064\u0072\u0069\u0076\u0065\u002E\u0067\u006F\u006F\u0067\u006C\u0065\u002E\u0063\u006F\u006D\u002F\u0066\u0069\u006C\u0065\u002F\u0064\u002F\u0031\u004B\u004B\u0073\u002D\u0036\u0061\u0045\u0077\u0036\u0030\u007A\u0043\u0032\u0057\u0052\u0042\u0078\u0032\u007A\u0041\u0037\u004C\u0070\u0061\u0064\u0051\u0070\u004B\u0079\u0044\u0051\u0047\u002F\u0076\u0069\u0065\u0077\u003F\u0075\u0073\u0070\u003D\u0073\u0068\u0061\u0072\u0069\u006E\u0067","document":"Acessar documentação"},"\u004A\u0061\u0076\u0061\u0026\u0043\u0061\u0066\u00E9":{'\u0074\u0069\u0074\u006C\u0065':"Java&Café",'\u0074\u0065\u0063\u0068':["\u004A\u0061\u0076\u0061\u0020\u0032\u0035","\u004D\u0079\u0053\u0071\u006C","kooHbeW".split("").reverse().join("")],'\u0063\u006F\u006E\u0063\u0065\u0070\u0074':"A concepção do projeto Java & Café nasceu da ideia de unir a eficiência tecnológica na gestão de uma cafeteria à responsabilidade social, transformando um ambiente de consumo tradicional em um modelo de negócio moderno e sustentável. O foco principal foi otimizar a experiência do cliente através de conveniências como pedidos remotos e agendados, reduzindo filas e tempos de espera, ao mesmo tempo em que oferece uma gestão operacional robusta para o estabelecimento.  Além da vertente comercial, a concepção traz um forte pilar de impacto social, inspirado nos Objetivos de Desenvolvimento Sustentável (ODS) da ONU. Isso se materializa na funcionalidade de arredondamento de troco para doações, permitindo que pequenas transações cotidianas contribuam para causas maiores. Todo o desenvolvimento foi guiado pela cultura DevOps, garantindo que o sistema fosse construído sob ciclos contínuos de automação, colaboração e monitoramento, resultando em uma plataforma que equilibra funcionalidade técnica com um propósito ético e comunitário.","techDesc":"A arquitetura e engenharia do sistema Java & Café baseiam-se na linguagem Java e na metodologia DevOps, utilizando uma estrutura organizada em pacotes lógicos que separam a interface gráfica em Swing da lógica de negócio e da persistência de dados em um banco MySQL. O projeto prioriza a eficiência operacional e a segurança por meio de processamento assíncrono com SwingWorker e ExecutorService para evitar o bloqueio da interface durante verificações de estoque, além de implementar criptografia assimétrica e monitoramento de auditoria via integração com o Discord. O sistema atende a requisitos funcionais complexos, como gestão de fidelidade com resgate de pontos, agendamento de pedidos remotos e uma funcionalidade inovadora de arredondamento de troco para doações sociais, mantendo o desempenho com um tempo de resposta limite de 10 segundos para operações críticas. Toda a estrutura foi validada por testes de caixa preta e branca, que identificaram a necessidade de refinamentos em loops de mensagens de erro e na lógica de validação de estoque para garantir a estabilidade final do software.",'\u0072\u0065\u0073\u0075\u006C\u0074':"Os resultados do projeto Java & Café demonstraram que o sistema possui uma base tecnológica sólida, porém os testes realizados entre 23 e 24 de maio revelaram falhas críticas em funcionalidades essenciais. Entre os principais problemas identificados, destacam-se a remoção indevida de itens do pedido quando a quantidade excede o estoque, a continuidade de operações mesmo com CPFs inválidos no programa de fidelidade e a ocorrência de loopings de erro durante o login de funcionários e o fechamento do programa. Além disso, observaram-se limitações na interface, como a impossibilidade de usar vírgula como separador decimal em pagamentos e a sobreposição de janelas que ocultava botões de confirmação. Conclui-se que a correção desses pontos é fundamental para garantir a estabilidade operacional, a segurança dos dados e o cumprimento do propósito inovador de equilibrar eficiência comercial com impacto social.","link":"\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0064\u0072\u0069\u0076\u0065\u002E\u0067\u006F\u006F\u0067\u006C\u0065\u002E\u0063\u006F\u006D\u002F\u0066\u0069\u006C\u0065\u002F\u0064\u002F\u0031\u0047\u006D\u0034\u004F\u0065\u0066\u0041\u0053\u0067\u0055\u0033\u007A\u0076\u0071\u0044\u006A\u0079\u0052\u0073\u0071\u004D\u0078\u0042\u0054\u004F\u0046\u0032\u004E\u0041\u004C\u006A\u0061\u002F\u0076\u0069\u0065\u0077\u003F\u0075\u0073\u0070\u003D\u0073\u0068\u0061\u0072\u0069\u006E\u0067","document":"Acessar documentação"},"Burger-Battle":{"title":"\u0042\u0075\u0072\u0067\u0065\u0072\u0020\u0042\u0061\u0074\u0074\u006C\u0065","tech":["\u004A\u0061\u0076\u0061\u0020\u0032\u0035","\u004D\u0079\u0073\u0071\u006C"],'\u0063\u006F\u006E\u0063\u0065\u0070\u0074':"A concepção do projeto Burger Battle foi fundamentada no desenvolvimento de um jogo de combate em turnos utilizando os pilares da Programação Orientada a Objetos (POO), como encapsulamento e polimorfismo, para criar uma experiência interativa e modular. O objetivo central foi estruturar a lógica de batalha e a progressão do jogador através de fases e cenas distintas, integrando elementos multimídia e gerenciamento de estados para garantir um fluxo de jogo dinâmico e organizado.",'\u0074\u0065\u0063\u0068\u0044\u0065\u0073\u0063':"\u0041\u0020\u0061\u0072\u0071\u0075\u0069\u0074\u0065\u0074\u0075\u0072\u0061\u0020\u0064\u006F\u0020\u0042\u0075\u0072\u0067\u0065\u0072\u0020\u0042\u0061\u0074\u0074\u006C\u0065\u0020\u0062\u0061\u0073\u0065\u0069\u0061\u002D\u0073\u0065\u0020\u006E\u006F\u0073\u0020\u0070\u0069\u006C\u0061\u0072\u0065\u0073\u0020\u0064\u0061\u0020\u0050\u0072\u006F\u0067\u0072\u0061\u006D\u0061\u00E7\u00E3\u006F\u0020\u004F\u0072\u0069\u0065\u006E\u0074\u0061\u0064\u0061\u0020\u0061\u0020\u004F\u0062\u006A\u0065\u0074\u006F\u0073\u0020\u0028\u0050\u004F\u004F\u0029\u002C\u0020\u0075\u0074\u0069\u006C\u0069\u007A\u0061\u006E\u0064\u006F\u0020\u0063\u006C\u0061\u0073\u0073\u0065\u0073\u0020\u006D\u006F\u0064\u0075\u006C\u0061\u0072\u0065\u0073\u0020\u0070\u0061\u0072\u0061\u0020\u0067\u0065\u0072\u0065\u006E\u0063\u0069\u0061\u0072\u0020\u0066\u0061\u0073\u0065\u0073\u0020\u0065\u0020\u0063\u0065\u006E\u0061\u0073\u0020\u0064\u0065\u0020\u0063\u006F\u006D\u0062\u0061\u0074\u0065\u0020\u0065\u006D\u0020\u0074\u0075\u0072\u006E\u006F\u0073\u002C\u0020\u0065\u006E\u0071\u0075\u0061\u006E\u0074\u006F\u0020\u0065\u006D\u0070\u0072\u0065\u0067\u0061\u0020\u0061\u0020\u0062\u0069\u0062\u006C\u0069\u006F\u0074\u0065\u0063\u0061\u0020\u0053\u0077\u0069\u006E\u0067\u0020\u0070\u0061\u0072\u0061\u0020\u0061\u0020\u0069\u006E\u0074\u0065\u0072\u0066\u0061\u0063\u0065\u0020\u0067\u0072\u00E1\u0066\u0069\u0063\u0061\u002C\u0020\u0063\u006F\u006E\u0074\u0072\u006F\u006C\u0065\u0020\u0064\u0065\u0020\u00E1\u0075\u0064\u0069\u006F\u0020\u0065\u0020\u0067\u0065\u0072\u0065\u006E\u0063\u0069\u0061\u006D\u0065\u006E\u0074\u006F\u0020\u0064\u0065\u0020\u0065\u0073\u0074\u0061\u0064\u006F\u0073\u0020\u0064\u0065\u0020\u006A\u006F\u0067\u006F\u002E",'\u0072\u0065\u0073\u0075\u006C\u0074':"O resultado final do projeto Burger Battle foi o desenvolvimento de um jogo funcional de combate em turnos, estruturado em múltiplas fases e cenas que utilizam os conceitos de Programação Orientada a Objetos para gerenciar a lógica de batalha. O software alcançou a integração de elementos multimídia, como trilha sonora de fundo e interface gráfica interativa via Swing, permitindo o controle de turnos entre jogador e inimigos, além do armazenamento e verificação de pontuação e progresso ao longo das partidas.",'\u006C\u0069\u006E\u006B':"https://docs.google.com/document/d/1KLCoCFR3qCPg1xyyaCkMvX8bntOTAJ7fVQx_lrJyIWw/edit?usp=sharing",'\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074':"\u0041\u0063\u0065\u0073\u0073\u0061\u0072\u0020\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074\u0061\u00E7\u00E3\u006F"},"\u0056\u0069\u0076\u0061\u006D\u0065\u006E\u0074\u0065":{"title":"\u0042\u0075\u0072\u0067\u0065\u0072\u0020\u0042\u0061\u0074\u0074\u006C\u0065","tech":["LMTH".split("").reverse().join(""),"\u0043\u0053\u0053","\u004A\u0061\u0076\u0061\u0053\u0063\u0072\u0069\u0070\u0074","\u0050\u0048\u0050","\u004D\u0079\u0053\u0071\u006C","PTMS".split("").reverse().join("")],"concept":"A concepção do Vivamente surgiu para preencher uma lacuna crítica no suporte à saúde mental no ambiente digital, funcionando como uma plataforma de auxílio imediato para momentos de crise emocional. O sistema opera através de uma estrutura de acolhimento em níveis, onde o usuário passa inicialmente por voluntários para suporte básico, seguido por estagiários em formação e, por fim, psicólogos credenciados que possuem total autonomia para definir a abordagem terapêutica ideal. Essa arquitetura visa conectar pessoas em situações de vulnerabilidade a colaboradores qualificados, oferecendo um suporte humanizado e ágil para quem enfrenta momentos de dificuldade.",'\u0074\u0065\u0063\u0068\u0044\u0065\u0073\u0063':"A arquitetura do Vivamente baseia-se no desenvolvimento web modular, utilizando a Programação Orientada a Objetos (POO) com a linguagem PHP para estruturar uma plataforma escalável e segura. O sistema foi concebido para gerenciar o fluxo de acolhimento emocional em diferentes níveis, empregando conceitos de POO para separar as responsabilidades entre os perfis de usuários (voluntários, estagiários e psicólogos) e garantir a integridade dos dados sensíveis de saúde mental. Essa abordagem permite que o software opere de forma fluida, integrando a lógica de suporte imediato ('SOS') a uma interface acessível, onde a autonomia dos profissionais licenciados é preservada através de métodos e classes bem definidos para o gerenciamento de consultas e prontuários.","result":"O resultado final do projeto Vivamente foi a consolidação de uma plataforma de apoio emocional capaz de oferecer suporte preventivo e imediato antes que crises mais graves se concretizem. O software cumpriu o objetivo de entregar uma ferramenta de segurança preventiva para a saúde mental, estruturada sobre uma base técnica em PHP e Programação Orientada a Objetos que permite a expansão das funcionalidades conforme a demanda. Ao final, o projeto estabeleceu um ecossistema funcional onde a divisão de atendimento em níveis garante agilidade no acolhimento e estabilidade operacional para conectar usuários a uma rede de suporte qualifica","link":"https://vivamenteofi.rf.gd/",'\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074':"Acessar Sistema"}};let _0x1g_0xee6;const loadingManager=new THREE['\u004C\u006F\u0061\u0064\u0069\u006E\u0067\u004D\u0061\u006E\u0061\u0067\u0065\u0072']();_0x1g_0xee6=764901^764899;loadingManager['\u006F\u006E\u0050\u0072\u006F\u0067\u0072\u0065\u0073\u0073']=(url,itemsLoaded,itemsTotal)=>{const progress=itemsLoaded/itemsTotal*(463978^463886);let _0xb539da;const fill=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u006C\u006F\u0061\u0064\u0065\u0072\u002D\u0066\u0069\u006C\u006C");_0xb539da=362267^362267;let _0xf651e;const percent=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u006C\u006F\u0061\u0064\u0065\u0072\u002D\u0070\u0065\u0072\u0063\u0065\u006E\u0074\u0061\u0067\u0065");_0xf651e=(941699^941696)+(336686^336679);if(fill)fill['\u0073\u0074\u0079\u006C\u0065']['\u0077\u0069\u0064\u0074\u0068']=`${progress}%`;if(percent)percent['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=`${Math['\u0072\u006F\u0075\u006E\u0064'](progress)}%`;};loadingManager['\u006F\u006E\u004C\u006F\u0061\u0064']=()=>{const preloader=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u0065\u006C\u006F\u0061\u0064\u0065\u0072");console['\u006C\u006F\u0067']("...odnaicinI .enilnO raewtloV sametsiS".split("").reverse().join(""));gsap['\u0074\u006F'](preloader,{'\u006F\u0070\u0061\u0063\u0069\u0074\u0079':0,"duration":1.5,"delay":0.5,"onComplete":()=>{preloader['\u0073\u0074\u0079\u006C\u0065']['\u0076\u0069\u0073\u0069\u0062\u0069\u006C\u0069\u0074\u0079']="\u0068\u0069\u0064\u0064\u0065\u006E";gsap['\u0066\u0072\u006F\u006D']("rulb-muimerp.".split("").reverse().join(""),{"opacity":0,'\u0079':30,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':1});}});};setTimeout(()=>{loadingManager['\u0069\u0074\u0065\u006D\u0053\u0074\u0061\u0072\u0074']("tinIenignE".split("").reverse().join(""));loadingManager['\u0069\u0074\u0065\u006D\u0045\u006E\u0064']("\u0045\u006E\u0067\u0069\u006E\u0065\u0049\u006E\u0069\u0074");},144025^144125);function createStarfield(_0x8be25a){var _0xe47afg=(803791^803784)+(936066^936074);const _0xfead8f=new THREE['\u0042\u0075\u0066\u0066\u0065\u0072\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079']();_0xe47afg=213582^213583;_0x8be25a=163432^153976;var _0x4cf=(137696^137700)+(941777^941783);const _0xf353eb=new Float32Array(_0x8be25a*(696210^696209));_0x4cf=(231933^231925)+(729920^729923);for(let i=788274^788274;i<_0x8be25a*(311151^311148);i++){_0xf353eb[i]=(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(532255^530639);}_0xfead8f['\u0073\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065']("noitisop".split("").reverse().join(""),new THREE['\u0042\u0075\u0066\u0066\u0065\u0072\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065'](_0xf353eb,481820^481823));const _0x95e7eg=new THREE['\u0050\u006F\u0069\u006E\u0074\u0073\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({"color":0xffffff,'\u0073\u0069\u007A\u0065':0.8,'\u0074\u0072\u0061\u006E\u0073\u0070\u0061\u0072\u0065\u006E\u0074':!![],"opacity":0.6});return new THREE['\u0050\u006F\u0069\u006E\u0074\u0073'](_0xfead8f,_0x95e7eg);}const starField=createStarfield();scene['\u0061\u0064\u0064'](starField);const asteroidCount=642547^641071;const astGeo=new THREE['\u0044\u006F\u0064\u0065\u0063\u0061\u0068\u0065\u0064\u0072\u006F\u006E\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](701206^701207,869457^869456);const astMat=new THREE['\u004D\u0065\u0073\u0068\u0050\u0068\u0079\u0073\u0069\u0063\u0061\u006C\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({'\u0063\u006F\u006C\u006F\u0072':0x222222,'\u0072\u006F\u0075\u0067\u0068\u006E\u0065\u0073\u0073':0.9,"metalness":0.1});const instancedAsteroids=new THREE['\u0049\u006E\u0073\u0074\u0061\u006E\u0063\u0065\u0064\u004D\u0065\u0073\u0068'](astGeo,astMat,asteroidCount);const dummy=new THREE['\u004F\u0062\u006A\u0065\u0063\u0074\u0033\u0044']();for(let i=963231^963231;i<asteroidCount;i++){dummy['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074']((Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(115070^115294),(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(787662^787462)-(459728^459746),(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(985028^984292));dummy['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](Math['\u0072\u0061\u006E\u0064\u006F\u006D']()*Math['\u0050\u0049'],Math['\u0072\u0061\u006E\u0064\u006F\u006D']()*Math['\u0050\u0049'],Math['\u0072\u0061\u006E\u0064\u006F\u006D']()*Math['\u0050\u0049']);dummy['\u0073\u0063\u0061\u006C\u0065']['\u0073\u0065\u0074\u0053\u0063\u0061\u006C\u0061\u0072'](Math['\u0072\u0061\u006E\u0064\u006F\u006D']()*(525459^525456)+0.5);dummy['\u0075\u0070\u0064\u0061\u0074\u0065\u004D\u0061\u0074\u0072\u0069\u0078']();instancedAsteroids['\u0073\u0065\u0074\u004D\u0061\u0074\u0072\u0069\u0078\u0041\u0074'](i,dummy['\u006D\u0061\u0074\u0072\u0069\u0078']);}scene['\u0061\u0064\u0064'](instancedAsteroids);let _0x43a98e;const spaceship=new THREE['\u0047\u0072\u006F\u0075\u0070']();_0x43a98e=(243298^243307)+(680359^680352);const hullMat=new THREE['\u004D\u0065\u0073\u0068\u0050\u0068\u0079\u0073\u0069\u0063\u0061\u006C\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({"color":0x111111,'\u006D\u0065\u0074\u0061\u006C\u006E\u0065\u0073\u0073':0.9,'\u0072\u006F\u0075\u0067\u0068\u006E\u0065\u0073\u0073':0.2});const engineMat=new THREE['\u004D\u0065\u0073\u0068\u0042\u0061\u0073\u0069\u0063\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({'\u0063\u006F\u006C\u006F\u0072':0xff3300});let _0xe23b0d;const coreMesh=new THREE['\u004D\u0065\u0073\u0068'](new THREE['\u0042\u006F\u0078\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](584441^584443,0.8,737165^737160),hullMat);_0xe23b0d=(244638^244636)+(712861^712859);const cockpit=new THREE['\u004D\u0065\u0073\u0068'](new THREE['\u0043\u0061\u0070\u0073\u0075\u006C\u0065\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](0.6,1.5,196527^196523,498728^498720),new THREE['\u004D\u0065\u0073\u0068\u0050\u0068\u0079\u0073\u0069\u0063\u0061\u006C\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({'\u0063\u006F\u006C\u006F\u0072':0x000000,'\u0072\u006F\u0075\u0067\u0068\u006E\u0065\u0073\u0073':0,'\u0074\u0072\u0061\u006E\u0073\u006D\u0069\u0073\u0073\u0069\u006F\u006E':1,'\u0074\u0068\u0069\u0063\u006B\u006E\u0065\u0073\u0073':0.5}));cockpit['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']=Math['\u0050\u0049']/(442474^442472);cockpit['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](489482^489482,0.6,-0.5);const wingL=new THREE['\u004D\u0065\u0073\u0068'](new THREE['\u0043\u006F\u006E\u0065\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](986935^986933,248615^248611,852121^852122),hullMat);wingL['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u007A']=-Math['\u0050\u0049']/(591989^591991);wingL['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](-(263111^263109),879887^879887,898427^898426);const wingR=wingL['\u0063\u006C\u006F\u006E\u0065']();wingR['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u007A']=Math['\u0050\u0049']/(493072^493074);wingR['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](401964^401966,418626^418626,294065^294064);let _0x194g;const thrusterL=new THREE['\u004D\u0065\u0073\u0068'](new THREE['\u0043\u0079\u006C\u0069\u006E\u0064\u0065\u0072\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](0.3,0.5,288266^288267),engineMat);_0x194g=(999124^999121)+(409151^409144);thrusterL['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']=Math['\u0050\u0049']/(622807^622805);thrusterL['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](-0.8,518746^518746,2.5);var _0x8g7f=(750856^750862)+(924659^924663);const thrusterR=thrusterL['\u0063\u006C\u006F\u006E\u0065']();_0x8g7f=(700610^700615)+(938370^938371);thrusterR['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](0.8,463807^463807,2.5);spaceship['\u0061\u0064\u0064'](coreMesh,cockpit,wingL,wingR,thrusterL,thrusterR);scene['\u0061\u0064\u0064'](spaceship);var _0xc93g=(639173^639170)+(755783^755783);const warpDustGroup=new THREE['\u0047\u0072\u006F\u0075\u0070']();_0xc93g=(636325^636333)+(753454^753450);scene['\u0061\u0064\u0064'](warpDustGroup);const trailCount=307836^307604;let _0xc3c67d;const trailGeo=new THREE['\u0042\u006F\u0078\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](0.05,0.05,251224^251225);_0xc3c67d='\u0065\u0066\u0070\u006F\u006B\u006C';const trailMat=new THREE['\u004D\u0065\u0073\u0068\u0042\u0061\u0073\u0069\u0063\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({'\u0063\u006F\u006C\u006F\u0072':0xffffff,"transparent":!![],'\u006F\u0070\u0061\u0063\u0069\u0074\u0079':0,'\u0062\u006C\u0065\u006E\u0064\u0069\u006E\u0067':THREE['\u0041\u0064\u0064\u0069\u0074\u0069\u0076\u0065\u0042\u006C\u0065\u006E\u0064\u0069\u006E\u0067']});const speedTrails=new THREE['\u0049\u006E\u0073\u0074\u0061\u006E\u0063\u0065\u0064\u004D\u0065\u0073\u0068'](trailGeo,trailMat,trailCount);const trailData=[];let _0x786a9a;const trailDummy=new THREE['\u004F\u0062\u006A\u0065\u0063\u0074\u0033\u0044']();_0x786a9a=(962736^962743)+(124422^124419);for(let i=686626^686626;i<trailCount;i++){trailData['\u0070\u0075\u0073\u0068']({'\u0078':(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(899761^899473),'\u0079':(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(347061^346261),'\u007A':(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(264813^264581),"vel":Math['\u0072\u0061\u006E\u0064\u006F\u006D']()*(382200^382203)+(852511^852510)});}warpDustGroup['\u0061\u0064\u0064'](speedTrails);var _0xg21ccf=(429680^429680)+(816226^816226);const holoVertexShader=`
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;_0xg21ccf=(957829^957825)+(522436^522439);var _0xa4b19d=(110341^110349)+(331771^331768);const holoFragmentShader=`
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
`;_0xa4b19d='\u0063\u0067\u0064\u006C\u0070\u0066';function createHoloProject(x,z,hexColor,title){var _0x28cf=(925850^925855)+(641313^641321);const _0x45fb=new THREE['\u0047\u0072\u006F\u0075\u0070']();_0x28cf='\u006A\u0064\u006B\u006E\u0068\u0067';_0x45fb['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](x,796460^796460,z);_0x45fb['\u0075\u0073\u0065\u0072\u0044\u0061\u0074\u0061']={"name":title,'\u0063\u006F\u006C\u006F\u0072':hexColor};const _0x3_0x1d8=new THREE['\u0053\u0068\u0061\u0064\u0065\u0072\u004D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']({"uniforms":{'\u0063\u006F\u006C\u006F\u0072':{'\u0076\u0061\u006C\u0075\u0065':new THREE['\u0043\u006F\u006C\u006F\u0072'](hexColor)},'\u0074\u0069\u006D\u0065':{'\u0076\u0061\u006C\u0075\u0065':0}},"vertexShader":holoVertexShader,"fragmentShader":holoFragmentShader,'\u0074\u0072\u0061\u006E\u0073\u0070\u0061\u0072\u0065\u006E\u0074':!![],"blending":THREE['\u0041\u0064\u0064\u0069\u0074\u0069\u0076\u0065\u0042\u006C\u0065\u006E\u0064\u0069\u006E\u0067'],"side":THREE['\u0044\u006F\u0075\u0062\u006C\u0065\u0053\u0069\u0064\u0065']});var _0x496e=(296475^296473)+(160240^160245);const _0x61d=new THREE['\u004D\u0065\u0073\u0068'](new THREE['\u0053\u0070\u0068\u0065\u0072\u0065\u0047\u0065\u006F\u006D\u0065\u0074\u0072\u0079'](513413^513411,191329^191297,138926^138894),_0x3_0x1d8);_0x496e=704237^704234;_0x45fb['\u0061\u0064\u0064'](_0x61d);scene['\u0061\u0064\u0064'](_0x45fb);return{"group":_0x45fb,'\u006D\u0061\u0074\u0065\u0072\u0069\u0061\u006C':_0x3_0x1d8};}const holoProjects=[createHoloProject(-(656435^656411),-(331898^331806),0xff0055,"\u0056\u0065\u0072\u0069\u0066\u0069"),createHoloProject(439584^439570,-(344489^344403),0xffa500,"\u004A\u0061\u0076\u0061\u0026\u0043\u0061\u0066\u00E9"),createHoloProject(183346^183311,-(257419^257268),950020^950429,"\u0042\u0075\u0072\u0067\u0065\u0072\u002D\u0042\u0061\u0074\u0074\u006C\u0065"),createHoloProject(575901^575761,-(743328^743046),0x3b82f6,"\u0056\u0069\u0076\u0061\u006D\u0065\u006E\u0074\u0065")];let _0xd5g80e;const state={"isExploring":false,"speed":0,"maxSpeed":80,'\u0061\u0063\u0063\u0065\u006C\u0065\u0072\u0061\u0074\u0069\u006F\u006E':2,"friction":0.95,'\u0076\u0065\u006C\u006F\u0063\u0069\u0074\u0079':new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](),'\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E\u0056\u0065\u006C\u006F\u0063\u0069\u0074\u0079':new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0032'](),'\u0074\u0061\u0072\u0067\u0065\u0074\u0052\u006F\u0074\u0061\u0074\u0069\u006F\u006E':new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0032']()};_0xd5g80e=(927262^927261)+(317835^317826);let _0x8d599e;let currentInteractiveProject=null;_0x8d599e=(149086^149080)+(618231^618230);let _0x529d;let currentSlide=190751^190751;_0x529d=534222^534220;var _0xfb5gbb=(852768^852772)+(782683^782685);const keys={'\u0077':false,'\u0061':false,'\u0073':false,'\u0064':false,"arrowup":false,'\u0061\u0072\u0072\u006F\u0077\u006C\u0065\u0066\u0074':false,'\u0061\u0072\u0072\u006F\u0077\u0064\u006F\u0077\u006E':false,"arrowright":false};_0xfb5gbb='\u006B\u006C\u0071\u006D\u0066\u006E';window['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006B\u0065\u0079\u0064\u006F\u0077\u006E",e=>{const k=e['\u006B\u0065\u0079']['\u0074\u006F\u004C\u006F\u0077\u0065\u0072\u0043\u0061\u0073\u0065']();if(keys['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079'](k))keys[k]=!![];if(k==="\u0062"&&state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067'])document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u006C\u006F\u0067\u002D\u0070\u0061\u006E\u0065\u006C")['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u0061\u0063\u0074\u0069\u0076\u0065");if(k==="\u0065"&&currentInteractiveProject&&state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067'])triggerWarp(currentInteractiveProject['\u0067\u0072\u006F\u0075\u0070']['\u0075\u0073\u0065\u0072\u0044\u0061\u0074\u0061']['\u006E\u0061\u006D\u0065']);});window['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("puyek".split("").reverse().join(""),e=>{const k=e['\u006B\u0065\u0079']['\u0074\u006F\u004C\u006F\u0077\u0065\u0072\u0043\u0061\u0073\u0065']();if(keys['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079'](k))keys[k]=false;});function updatePhysics(dt,_0xfa9b8e){if(!state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067'])return;const _0x78fb=keys['\u0077']||keys['\u0061\u0072\u0072\u006F\u0077\u0075\u0070'];const _0x564fad=keys['\u0073']||keys['\u0061\u0072\u0072\u006F\u0077\u0064\u006F\u0077\u006E'];const _0x43b1f=keys['\u0061']||keys['\u0061\u0072\u0072\u006F\u0077\u006C\u0065\u0066\u0074'];const _0xcc6g=keys['\u0064']||keys['\u0061\u0072\u0072\u006F\u0077\u0072\u0069\u0067\u0068\u0074'];if(_0x78fb)state['\u0073\u0070\u0065\u0065\u0064']=Math['\u006D\u0069\u006E'](state['\u0073\u0070\u0065\u0065\u0064']+state['\u0061\u0063\u0063\u0065\u006C\u0065\u0072\u0061\u0074\u0069\u006F\u006E'],state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']);else if(_0x564fad)state['\u0073\u0070\u0065\u0065\u0064']=Math['\u006D\u0061\u0078'](state['\u0073\u0070\u0065\u0065\u0064']-state['\u0061\u0063\u0063\u0065\u006C\u0065\u0072\u0061\u0074\u0069\u006F\u006E'],-state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']/(369133^369135));else state['\u0073\u0070\u0065\u0065\u0064']*=state['\u0066\u0072\u0069\u0063\u0074\u0069\u006F\u006E'];if(_0x43b1f)state['\u0074\u0061\u0072\u0067\u0065\u0074\u0052\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']+=0.05;if(_0xcc6g)state['\u0074\u0061\u0072\u0067\u0065\u0074\u0052\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']-=0.05;state['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E\u0056\u0065\u006C\u006F\u0063\u0069\u0074\u0079']['\u0078']+=(state['\u0074\u0061\u0072\u0067\u0065\u0074\u0052\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']-spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079'])*0.1;state['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E\u0056\u0065\u006C\u006F\u0063\u0069\u0074\u0079']['\u0078']*=0.8;spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']+=state['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E\u0056\u0065\u006C\u006F\u0063\u0069\u0074\u0079']['\u0078'];var _0x9d_0x7b8=(244921^244912)+(382707^382715);const _0xa5f7d=_0x43b1f?0.5:_0xcc6g?-0.5:921141^921141;_0x9d_0x7b8=(467404^467404)+(759204^759202);spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u007A']+=(_0xa5f7d-spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u007A'])*0.1;var _0x_0x88c=(618394^618397)+(963640^963645);const _0x9b4b=state['\u0073\u0070\u0065\u0065\u0064']/state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']*-0.2;_0x_0x88c=(746399^746396)+(318601^318606);spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']+=(_0x9b4b-spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078'])*0.1;const _0x668g=new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](913613^913613,252769^252769,-(201009^201008))['\u0061\u0070\u0070\u006C\u0079\u0041\u0078\u0069\u0073\u0041\u006E\u0067\u006C\u0065'](new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](780527^780527,971135^971134,865408^865408),spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']);spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0061\u0064\u0064\u0053\u0063\u0061\u006C\u0065\u0064\u0056\u0065\u0063\u0074\u006F\u0072'](_0x668g,state['\u0073\u0070\u0065\u0065\u0064']*dt);spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0079']=196689^196689;var _0x1122d=(855027^855030)+(190310^190308);const _0xcdace=new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](963578^963578,2.5,346233^346229)['\u0061\u0070\u0070\u006C\u0079\u0041\u0078\u0069\u0073\u0041\u006E\u0067\u006C\u0065'](new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](409873^409873,492851^492850,244385^244385),spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']);_0x1122d="koeiqm".split("").reverse().join("");var _0x0d2f=(740962^740964)+(705190^705186);const _0x272g=new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](610330^610330,891406^891406,-(509139^509153))['\u0061\u0070\u0070\u006C\u0079\u0041\u0078\u0069\u0073\u0041\u006E\u0067\u006C\u0065'](new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](950227^950227,608042^608043,304806^304806),spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079'])['\u0061\u0064\u0064'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']);_0x0d2f='\u0063\u006A\u0065\u0064\u006D\u0069';camera['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u006C\u0065\u0072\u0070'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0063\u006C\u006F\u006E\u0065']()['\u0061\u0064\u0064'](_0xcdace),0.1);camera['\u0066\u006F\u0076']=THREE['\u004D\u0061\u0074\u0068\u0055\u0074\u0069\u006C\u0073']['\u006C\u0065\u0072\u0070'](camera['\u0066\u006F\u0076'],(980886^980906)+state['\u0073\u0070\u0065\u0065\u0064']/state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']*(138818^138844),0.1);camera['\u0075\u0070\u0064\u0061\u0074\u0065\u0050\u0072\u006F\u006A\u0065\u0063\u0074\u0069\u006F\u006E\u004D\u0061\u0074\u0072\u0069\u0078']();camera['\u006C\u006F\u006F\u006B\u0041\u0074'](_0x272g);const _0xa459a=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("rotacidni-deeps".split("").reverse().join(""));_0xfa9b8e=(461500^461498)+(359791^359782);if(_0xa459a)_0xa459a['\u0073\u0074\u0079\u006C\u0065']['\u0077\u0069\u0064\u0074\u0068']=`${Math['\u0061\u0062\u0073'](state['\u0073\u0070\u0065\u0065\u0064'])/state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']*(947058^946966)}%`;const _0xa8a=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("x-drooc".split("").reverse().join(""));const _0x9e_0x2b9=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("z-drooc".split("").reverse().join(""));if(_0xa8a)_0xa8a['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=Math['\u0072\u006F\u0075\u006E\u0064'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0078'])['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](507370^507369,"\u0030");if(_0x9e_0x2b9)_0x9e_0x2b9['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=Math['\u0072\u006F\u0075\u006E\u0064'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u007A'])['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](297343^297340,"\u0030");thrusterL['\u006D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']['\u0063\u006F\u006C\u006F\u0072']['\u0073\u0065\u0074\u0048\u0065\u0078'](_0x78fb?207357^247554:0xff3300);thrusterR['\u006D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']['\u0063\u006F\u006C\u006F\u0072']['\u0073\u0065\u0074\u0048\u0065\u0078'](_0x78fb?964539^940356:0xff3300);}function triggerWarp(projectName){state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067']=false;document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("iu-noitcaretni".split("").reverse().join(""))['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0076\u0069\u0073\u0069\u0062\u006C\u0065");document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("reyal-duh".split("").reverse().join(""))['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("neddih".split("").reverse().join(""));gsap['\u0074\u006F'](state,{"speed":state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']*2.5,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':1.5,"ease":"power3.in"});var _0x173d=(991889^991892)+(782716^782708);const _0xb6e8f=new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](304936^304936,245793^245793,-(473519^473743))['\u0061\u0070\u0070\u006C\u0079\u0041\u0078\u0069\u0073\u0041\u006E\u0067\u006C\u0065'](new THREE['\u0056\u0065\u0063\u0074\u006F\u0072\u0033'](297888^297888,626020^626021,589576^589576),spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']);_0x173d=916557^916556;gsap['\u0074\u006F'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E'],{'\u0078':spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0078']+_0xb6e8f['\u0078'],'\u007A':spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u007A']+_0xb6e8f['\u007A'],"duration":1.5,'\u0065\u0061\u0073\u0065':"\u0070\u006F\u0077\u0065\u0072\u0033\u002E\u0069\u006E"});gsap['\u0074\u006F'](camera,{'\u0066\u006F\u0076':140,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':1.5,'\u0065\u0061\u0073\u0065':"\u0070\u006F\u0077\u0065\u0072\u0032\u002E\u0069\u006E",'\u006F\u006E\u0055\u0070\u0064\u0061\u0074\u0065':()=>camera['\u0075\u0070\u0064\u0061\u0074\u0065\u0050\u0072\u006F\u006A\u0065\u0063\u0074\u0069\u006F\u006E\u004D\u0061\u0074\u0072\u0069\u0078']()});gsap['\u0074\u006F'](bloomPass,{'\u0073\u0074\u0072\u0065\u006E\u0067\u0074\u0068':4.0,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':1.5,"ease":"power2.in"});var _0x2_0xb4c=(422703^422697)+(794237^794236);const _0xecf=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("hsalf-praw".split("").reverse().join(""));_0x2_0xb4c=(156297^156299)+(107242^107245);gsap['\u0074\u006F'](_0xecf,{'\u006F\u0070\u0061\u0063\u0069\u0074\u0079':1,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':0.3,'\u0064\u0065\u006C\u0061\u0079':1.2,'\u006F\u006E\u0043\u006F\u006D\u0070\u006C\u0065\u0074\u0065':()=>{populateProjectSlides(projectName);document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u006A\u0065\u0063\u0074\u002D\u0073\u0068\u006F\u0077\u0063\u0061\u0073\u0065")['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0061\u0063\u0074\u0069\u0076\u0065");spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](611515^611515,554792^554792,580424^580424);spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](772170^772170,124657^124657,911648^911648);state['\u0074\u0061\u0072\u0067\u0065\u0074\u0052\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](638854^638854,807282^807282);camera['\u0066\u006F\u0076']=592502^592458;camera['\u0075\u0070\u0064\u0061\u0074\u0065\u0050\u0072\u006F\u006A\u0065\u0063\u0074\u0069\u006F\u006E\u004D\u0061\u0074\u0072\u0069\u0078']();camera['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](332643^332643,2.5,872023^872027);bloomPass['\u0073\u0074\u0072\u0065\u006E\u0067\u0074\u0068']=0.8;state['\u0073\u0070\u0065\u0065\u0064']=890717^890717;gsap['\u0074\u006F'](_0xecf,{'\u006F\u0070\u0061\u0063\u0069\u0074\u0079':0,"duration":1});}});}function populateProjectSlides(projectName,_0x6622ba){const _0x44ege=projectDB[projectName];if(!_0x44ege)return;document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("eltit-jorp".split("").reverse().join(""))['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=_0x44ege['\u0074\u0069\u0074\u006C\u0065'];document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tpecnoc-jorp".split("").reverse().join(""))['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=_0x44ege['\u0063\u006F\u006E\u0063\u0065\u0070\u0074'];document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u006A\u002D\u0074\u0065\u0063\u0068")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=_0x44ege['\u0074\u0065\u0063\u0068\u0044\u0065\u0073\u0063'];document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tluser-jorp".split("").reverse().join(""))['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=_0x44ege['\u0072\u0065\u0073\u0075\u006C\u0074'];var _0x22fe=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("ntb-oper-jorp".split("").reverse().join(""));_0x22fe['\u0068\u0072\u0065\u0066']=_0x44ege['\u006C\u0069\u006E\u006B'];_0x22fe['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0x44ege['\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074'];const _0xcb8c0c=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("segdab-jorp".split("").reverse().join(""));_0x6622ba=(148489^148493)+(361013^361013);_0xcb8c0c['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']='';_0x44ege['\u0074\u0065\u0063\u0068']['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](t=>{_0xcb8c0c['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']+=`<span class="badge" style="font-size: 0.9rem; padding: 0.4rem 1rem;">${t}</span>`;});currentSlide=836906^836906;updateSlideView();}function updateSlideView(){document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("edils.".split("").reverse().join(""))['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](s=>s['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0061\u0063\u0074\u0069\u0076\u0065"));document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u0064\u006F\u0074")['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](d=>d['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("evitca".split("").reverse().join("")));document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](`slide-${currentSlide}`)['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0061\u0063\u0074\u0069\u0076\u0065");document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("tod.".split("").reverse().join(""))[currentSlide]['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("evitca".split("").reverse().join(""));const _0xc65a=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u0065\u0076\u002D\u0073\u006C\u0069\u0064\u0065");const _0x4395de=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("edils-txen".split("").reverse().join(""));if(_0xc65a){_0xc65a['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079']=currentSlide===(108217^108217)?"\u0030\u002E\u0032":"\u0031";_0xc65a['\u0073\u0074\u0079\u006C\u0065']['\u0070\u006F\u0069\u006E\u0074\u0065\u0072\u0045\u0076\u0065\u006E\u0074\u0073']=currentSlide===(517000^517000)?"enon".split("").reverse().join(""):"otua".split("").reverse().join("");}if(_0x4395de){_0x4395de['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079']=currentSlide===(980758^980756)?"2.0".split("").reverse().join(""):"\u0031";_0x4395de['\u0073\u0074\u0079\u006C\u0065']['\u0070\u006F\u0069\u006E\u0074\u0065\u0072\u0045\u0076\u0065\u006E\u0074\u0073']=currentSlide===(852103^852101)?"enon".split("").reverse().join(""):"\u0061\u0075\u0074\u006F";}}document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u006E\u0065\u0078\u0074\u002D\u0073\u006C\u0069\u0064\u0065")?.addEventListener("kcilc".split("").reverse().join(""),()=>{if(currentSlide<(930565^930567)){currentSlide++;updateSlideView();}});document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u0065\u0076\u002D\u0073\u006C\u0069\u0064\u0065")?.addEventListener("kcilc".split("").reverse().join(""),()=>{if(currentSlide>(297985^297985)){currentSlide--;updateSlideView();}});document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006C\u006F\u0073\u0065\u002D\u0070\u0072\u006F\u006A\u0065\u0063\u0074")?.addEventListener("\u0063\u006C\u0069\u0063\u006B",()=>{const flash=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("hsalf-praw".split("").reverse().join(""));gsap['\u0074\u006F'](flash,{'\u006F\u0070\u0061\u0063\u0069\u0074\u0079':1,'\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E':0.3,'\u006F\u006E\u0043\u006F\u006D\u0070\u006C\u0065\u0074\u0065':()=>{document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u006A\u0065\u0063\u0074\u002D\u0073\u0068\u006F\u0077\u0063\u0061\u0073\u0065")['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0061\u0063\u0074\u0069\u0076\u0065");document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0068\u0075\u0064\u002D\u006C\u0061\u0079\u0065\u0072")['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0068\u0069\u0064\u0064\u0065\u006E");state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067']=!![];gsap['\u0074\u006F'](flash,{'\u006F\u0070\u0061\u0063\u0069\u0074\u0079':0,"duration":0.5});}});});function checkFloatingOrigin(){if(spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u006C\u0065\u006E\u0067\u0074\u0068']()>(964390^963322)){var _0xc3c=(174853^174855)+(123520^123520);const _0xf17d=spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0063\u006C\u006F\u006E\u0065']();_0xc3c=(337471^337471)+(846617^846616);spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](661804^661804,984828^984828,356084^356084);camera['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0075\u0062'](_0xf17d);starField['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0075\u0062'](_0xf17d);holoProjects['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](p=>p['\u0067\u0072\u006F\u0075\u0070']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0075\u0062'](_0xf17d));for(let i=208603^208603;i<asteroidCount;i++){instancedAsteroids['\u0067\u0065\u0074\u004D\u0061\u0074\u0072\u0069\u0078\u0041\u0074'](i,dummy['\u006D\u0061\u0074\u0072\u0069\u0078']);dummy['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074\u0046\u0072\u006F\u006D\u004D\u0061\u0074\u0072\u0069\u0078\u0050\u006F\u0073\u0069\u0074\u0069\u006F\u006E'](dummy['\u006D\u0061\u0074\u0072\u0069\u0078']);dummy['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0075\u0062'](_0xf17d);dummy['\u0075\u0070\u0064\u0061\u0074\u0065\u004D\u0061\u0074\u0072\u0069\u0078']();instancedAsteroids['\u0073\u0065\u0074\u004D\u0061\u0074\u0072\u0069\u0078\u0041\u0074'](i,dummy['\u006D\u0061\u0074\u0072\u0069\u0078']);}instancedAsteroids['\u0069\u006E\u0073\u0074\u0061\u006E\u0063\u0065\u004D\u0061\u0074\u0072\u0069\u0078']['\u006E\u0065\u0065\u0064\u0073\u0055\u0070\u0064\u0061\u0074\u0065']=!![];}}var _0x10fdce=(755022^755023)+(774173^774165);const clock=new THREE['\u0043\u006C\u006F\u0063\u006B']();_0x10fdce=(597931^597933)+(503840^503848);function animate(_0x3f94a,_0xdee3d,_0x5f5e,_0x1ef){requestAnimationFrame(animate);var _0x0e1d1b=(831066^831059)+(436396^436398);const _0x516ed=clock['\u0067\u0065\u0074\u0044\u0065\u006C\u0074\u0061']();_0x0e1d1b=565660^565660;const _0x8811fa=clock['\u0067\u0065\u0074\u0045\u006C\u0061\u0070\u0073\u0065\u0064\u0054\u0069\u006D\u0065']();_0x3f94a=(983958^983954)+(165279^165275);starField['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']=_0x8811fa*0.02;instancedAsteroids['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']=_0x8811fa*0.05;instancedAsteroids['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0078']=_0x8811fa*0.02;warpDustGroup['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0063\u006F\u0070\u0079'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']);warpDustGroup['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']=spaceship['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079'];const _0xea48f=Math['\u0061\u0062\u0073'](state['\u0073\u0070\u0065\u0065\u0064']/state['\u006D\u0061\u0078\u0053\u0070\u0065\u0065\u0064']);trailMat['\u006F\u0070\u0061\u0063\u0069\u0074\u0079']=Math['\u006D\u0069\u006E'](_0xea48f*1.5,0.8);const _0x2681f=new THREE['\u0043\u006F\u006C\u006F\u0072'](0xffffff);_0xdee3d=820386^820384;const _0x8195e=new THREE['\u0043\u006F\u006C\u006F\u0072'](0xff5500);trailMat['\u0063\u006F\u006C\u006F\u0072']['\u006C\u0065\u0072\u0070\u0043\u006F\u006C\u006F\u0072\u0073'](_0x2681f,_0x8195e,Math['\u006D\u0069\u006E'](_0xea48f,615556^615557));for(let i=876145^876145;i<trailCount;i++){var _0x4f98cd=(437865^437871)+(210426^210419);const t=trailData[i];_0x4f98cd=(799354^799356)+(410776^410768);t['\u007A']+=t['\u0076\u0065\u006C']+state['\u0073\u0070\u0065\u0065\u0064']*0.8;if(t['\u007A']>(597347^597329)){t['\u007A']=-(753448^752648);t['\u0078']=(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(776548^776772);t['\u0079']=(Math['\u0072\u0061\u006E\u0064\u006F\u006D']()-0.5)*(485617^486353);}trailDummy['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0073\u0065\u0074'](t['\u0078'],t['\u0079'],t['\u007A']);trailDummy['\u0073\u0063\u0061\u006C\u0065']['\u0073\u0065\u0074'](646365^646364,244410^244411,_0xea48f*(989497^989615)+(643839^643838));trailDummy['\u0075\u0070\u0064\u0061\u0074\u0065\u004D\u0061\u0074\u0072\u0069\u0078']();speedTrails['\u0073\u0065\u0074\u004D\u0061\u0074\u0072\u0069\u0078\u0041\u0074'](i,trailDummy['\u006D\u0061\u0074\u0072\u0069\u0078']);}speedTrails['\u0069\u006E\u0073\u0074\u0061\u006E\u0063\u0065\u004D\u0061\u0074\u0072\u0069\u0078']['\u006E\u0065\u0065\u0064\u0073\u0055\u0070\u0064\u0061\u0074\u0065']=!![];_0x1ef=601322^601282;_0x5f5e=324532^324531;var _0x1b_0x382=(543139^543136)+(180231^180231);let _0xef_0xd1c=null;_0x1b_0x382=(790751^790743)+(631481^631486);holoProjects['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](p=>{p['\u006D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']['\u0075\u006E\u0069\u0066\u006F\u0072\u006D\u0073']['\u0074\u0069\u006D\u0065']['\u0076\u0061\u006C\u0075\u0065']=_0x8811fa;p['\u0067\u0072\u006F\u0075\u0070']['\u0072\u006F\u0074\u0061\u0074\u0069\u006F\u006E']['\u0079']-=0.01;if(state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067']){var _0x3g739f=(556797^556789)+(493501^493497);const _0xcf3b=spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0064\u0069\u0073\u0074\u0061\u006E\u0063\u0065\u0054\u006F'](p['\u0067\u0072\u006F\u0075\u0070']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']);_0x3g739f='\u0065\u006C\u0063\u006D\u0062\u0067';if(_0xcf3b<_0x1ef){_0xef_0xd1c=p;p['\u006D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']['\u0075\u006E\u0069\u0066\u006F\u0072\u006D\u0073']['\u0063\u006F\u006C\u006F\u0072']['\u0076\u0061\u006C\u0075\u0065']['\u0073\u0065\u0074\u0048\u0065\u0078'](0xffffff);}else{p['\u006D\u0061\u0074\u0065\u0072\u0069\u0061\u006C']['\u0075\u006E\u0069\u0066\u006F\u0072\u006D\u0073']['\u0063\u006F\u006C\u006F\u0072']['\u0076\u0061\u006C\u0075\u0065']['\u0073\u0065\u0074\u0048\u0065\u0078'](p['\u0067\u0072\u006F\u0075\u0070']['\u0075\u0073\u0065\u0072\u0044\u0061\u0074\u0061']['\u0063\u006F\u006C\u006F\u0072']);}}});if(_0xef_0xd1c!==currentInteractiveProject){currentInteractiveProject=_0xef_0xd1c;const _0x1c_0xe8c=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0069\u006E\u0074\u0065\u0072\u0061\u0063\u0074\u0069\u006F\u006E\u002D\u0075\u0069");if(currentInteractiveProject&&state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067']){document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("txet-noitcaretni".split("").reverse().join(""))['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=`Conectar a ${currentInteractiveProject['\u0067\u0072\u006F\u0075\u0070']['\u0075\u0073\u0065\u0072\u0044\u0061\u0074\u0061']['\u006E\u0061\u006D\u0065']}`;if(_0x1c_0xe8c){_0x1c_0xe8c['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("neddih".split("").reverse().join(""));_0x1c_0xe8c['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("elbisiv".split("").reverse().join(""));}}else if(_0x1c_0xe8c){_0x1c_0xe8c['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0076\u0069\u0073\u0069\u0062\u006C\u0065");}}updatePhysics(_0x516ed);if(state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067'])checkFloatingOrigin();composer['\u0072\u0065\u006E\u0064\u0065\u0072']();}animate();document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("ntb-hcnual".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B",()=>{const uiLayer=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("reyal-iu".split("").reverse().join(""));let _0x57e5ga;const hudLayer=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("reyal-duh".split("").reverse().join(""));_0x57e5ga=(145471^145468)+(116691^116692);gsap['\u0074\u006F'](uiLayer,{'\u006F\u0070\u0061\u0063\u0069\u0074\u0079':0,"duration":1,'\u006F\u006E\u0043\u006F\u006D\u0070\u006C\u0065\u0074\u0065':()=>uiLayer['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="\u006E\u006F\u006E\u0065"});gsap['\u0074\u006F'](spaceship['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E'],{'\u007A':-(257439^257409),"duration":2,"ease":"\u0070\u006F\u0077\u0065\u0072\u0032\u002E\u0069\u006E\u004F\u0075\u0074"});setTimeout(()=>{state['\u0069\u0073\u0045\u0078\u0070\u006C\u006F\u0072\u0069\u006E\u0067']=!![];hudLayer['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0068\u0069\u0064\u0064\u0065\u006E");},348907^349499);});document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006C\u006F\u0073\u0065\u002D\u0062\u006C\u006F\u0067\u002D\u0062\u0074\u006E")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""),()=>{document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u006C\u006F\u0067\u002D\u0070\u0061\u006E\u0065\u006C")['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("evitca".split("").reverse().join(""));});window['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0072\u0065\u0073\u0069\u007A\u0065",()=>{camera['\u0061\u0073\u0070\u0065\u0063\u0074']=window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068']/window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074'];camera['\u0075\u0070\u0064\u0061\u0074\u0065\u0050\u0072\u006F\u006A\u0065\u0063\u0074\u0069\u006F\u006E\u004D\u0061\u0074\u0072\u0069\u0078']();renderer['\u0073\u0065\u0074\u0053\u0069\u007A\u0065'](window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068'],window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074']);composer['\u0073\u0065\u0074\u0053\u0069\u007A\u0065'](window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068'],window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074']);});