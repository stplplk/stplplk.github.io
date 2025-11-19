import type { Status } from "../types/Status";
import "./Status.css";

function StatusButton({ isOpen }: Status) {
    const color = isOpen ? "#00CC00" : "#FF0000";

    return (
        <svg className="status" width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_17_16)">
<rect x="10" y="5" width="90" height="90" rx="45" fill="url(#paint0_linear_17_16)"/>
</g>
<g filter="url(#filter1_diiin_17_16)">
<circle cx="55" cy="50" r="32" fill={color}/>
</g>
<g filter="url(#filter2_d_17_16)">
<circle cx="55" cy="50" r="34" stroke="url(#paint1_linear_17_16)" stroke-width="4" shape-rendering="crispEdges"/>
</g>
<g filter="url(#filter3_d_17_16)">
<path d="M90.2066 42.9719L91 47C70.6314 28.3288 39.3686 28.3288 19 47L19.6385 43.488C22.7433 26.4121 37.6156 14 54.9714 14C72.1295 14 86.8907 26.1374 90.2066 42.9719Z" fill="url(#paint2_linear_17_16)"/>
</g>
<defs>
<filter id="filter0_d_17_16" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5"/>
<feGaussianBlur stdDeviation="5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_16"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_16" result="shape"/>
</filter>
<filter id="filter1_diiin_17_16" x="19" y="18" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_16"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="12"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_17_16"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="12" operator="erode" in="SourceAlpha" result="effect3_innerShadow_17_16"/>
<feOffset/>
<feGaussianBlur stdDeviation="8"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_17_16" result="effect3_innerShadow_17_16"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect4_innerShadow_17_16"/>
<feOffset dy="-6"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect3_innerShadow_17_16" result="effect4_innerShadow_17_16"/>
<feTurbulence type="fractalNoise" baseFrequency="1.25 1.25" stitchTiles="stitch" numOctaves="3" result="noise" seed="5173" />
<feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
<feComponentTransfer in="alphaNoise" result="coloredNoise1">
<feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
</feComponentTransfer>
<feComposite operator="in" in2="effect4_innerShadow_17_16" in="coloredNoise1" result="noise1Clipped" />
<feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
<feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
<feMerge result="effect5_noise_17_16">
<feMergeNode in="effect4_innerShadow_17_16" />
<feMergeNode in="color1" />
</feMerge>
<feBlend mode="normal" in="effect5_noise_17_16" in2="effect1_dropShadow_17_16" result="effect5_noise_17_16"/>
</filter>
<filter id="filter2_d_17_16" x="15" y="14" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_16"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_16" result="shape"/>
</filter>
<filter id="filter3_d_17_16" x="17" y="14" width="76" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="8"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_16"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_16" result="shape"/>
</filter>
<linearGradient id="paint0_linear_17_16" x1="55" y1="5" x2="55" y2="95" gradientUnits="userSpaceOnUse">
<stop stop-color="#888888"/>
<stop offset="1" stop-color="#444444"/>
</linearGradient>
<linearGradient id="paint1_linear_17_16" x1="55" y1="14" x2="55" y2="86" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stop-color="#444444"/>
</linearGradient>
<linearGradient id="paint2_linear_17_16" x1="55" y1="12" x2="55" y2="47" gradientUnits="userSpaceOnUse">
<stop stop-color="#666666"/>
<stop offset="1"/>
</linearGradient>
</defs>
</svg>

    )
}

export default StatusButton;