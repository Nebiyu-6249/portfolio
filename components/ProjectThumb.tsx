// Generated project thumbnails, drawn as hand-drawn wireframe sketches in the
// four-color palette only (pencil black lines, paper background, marker red and
// post-it yellow accents). The live sites can't be screenshotted from the build,
// so each card gets an on-brand sketch of what the product is.

const PAPER = "#F8F3E9";
const INK = "#1F1F1F";
const RED = "#E8433F";
const YELLOW = "#FFD866";
const BAR = "#EDE4D2";
const sans = "var(--font-sans)";
const mono = "var(--font-mono)";

const URLS: Record<string, string> = {
  yenetta: "yenetta.app",
  "uae-compliance-copilot": "uae-compliance-copilot",
  "fraud-detection": "fraud-detection",
  aibill: "wa.me / aibill",
  "hotel-ms": "hotelstransylva.netlify.app",
  fleuraya: "fleuraya-flowers.netlify.app",
  "nomatech-website": "nomatech-ai-solutions.ae",
  "rag-chatbot": "rag-chatbot",
};

export function ProjectThumb({ slug }: { slug: string }) {
  return (
    <div className="relative w-full overflow-hidden border-b-2 border-ink" style={{ background: PAPER }}>
      <svg viewBox="0 0 480 300" className="block h-auto w-full" role="img" aria-label="Project sketch" preserveAspectRatio="xMidYMid slice">
        <rect x="0" y="0" width="480" height="300" fill={PAPER} />
        {/* browser chrome */}
        <rect x="0" y="0" width="480" height="30" fill={BAR} />
        <line x1="0" y1="30" x2="480" y2="30" stroke={INK} strokeWidth="2" />
        <circle cx="16" cy="15" r="4" fill="none" stroke={INK} strokeWidth="1.5" />
        <circle cx="30" cy="15" r="4" fill="none" stroke={INK} strokeWidth="1.5" />
        <circle cx="44" cy="15" r="4" fill="none" stroke={INK} strokeWidth="1.5" />
        <rect x="62" y="8" width="360" height="15" rx="7" fill={PAPER} stroke={INK} strokeWidth="1.5" />
        <text x="74" y="19" fontFamily={mono} fontSize="8.5" fill={INK}>{URLS[slug] ?? slug}</text>
        {inner(slug)}
      </svg>
    </div>
  );
}

function box(x: number, y: number, w: number, h: number, fill = "none", rx = 8) {
  return <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} stroke={INK} strokeWidth="2" />;
}

function inner(slug: string) {
  switch (slug) {
    case "yenetta":
      return (
        <>
          {box(0, 30, 92, 270, PAPER, 0)}
          <line x1="92" y1="30" x2="92" y2="300" stroke={INK} strokeWidth="2" />
          <rect x="16" y="46" width="60" height="10" rx="5" fill={YELLOW} stroke={INK} strokeWidth="1.5" />
          {[72, 90, 108].map((y) => (
            <line key={y} x1="16" y1={y} x2="72" y2={y} stroke={INK} strokeWidth="2" />
          ))}
          <circle cx="46" cy="250" r="17" fill={YELLOW} stroke={INK} strokeWidth="2" />
          <text x="46" y="255" fontFamily={sans} fontSize="13" fontWeight="700" fill={INK} textAnchor="middle">አማ</text>
          {box(112, 50, 150, 34, PAPER)}
          <text x="124" y="65" fontFamily={sans} fontSize="9" fill={INK}>Explain photosynthesis</text>
          <text x="124" y="77" fontFamily={sans} fontSize="9" fill={INK}>for Grade 10.</text>
          {box(232, 104, 226, 58, YELLOW)}
          <text x="246" y="124" fontFamily={sans} fontSize="9" fill={INK}>Light becomes chemical energy</text>
          <text x="246" y="136" fontFamily={sans} fontSize="9" fill={INK}>in the chloroplasts.</text>
          <rect x="246" y="144" width="150" height="12" rx="6" fill={PAPER} stroke={INK} strokeWidth="1.5" />
          <text x="253" y="153" fontFamily={mono} fontSize="7" fill={INK}>cited · Biology G10</text>
          {box(112, 182, 346, 40, PAPER)}
          <text x="126" y="200" fontFamily={mono} fontSize="8" fill={INK}>FLASHCARDS · SPACED REVIEW</text>
          <text x="126" y="214" fontFamily={mono} fontSize="8" fill={RED}>STREAK 12</text>
        </>
      );

    case "uae-compliance-copilot":
      return (
        <>
          {box(250, 50, 196, 30, RED)}
          <text x="262" y="69" fontFamily={sans} fontSize="9" fill={PAPER}>What is the UAE VAT rate?</text>
          {box(24, 96, 320, 86, PAPER)}
          <text x="38" y="116" fontFamily={sans} fontSize="9.5" fill={INK}>The standard VAT rate is 5%,</text>
          <text x="38" y="129" fontFamily={sans} fontSize="9.5" fill={INK}>per the Federal Decree-Law.</text>
          <rect x="38" y="140" width="190" height="30" rx="6" fill={YELLOW} stroke={INK} strokeWidth="1.5" />
          <text x="48" y="153" fontFamily={mono} fontSize="7" fill={INK}>SOURCE · VAT Decree-Law</text>
          <text x="48" y="164" fontFamily={mono} fontSize="7" fill={INK}>Art. 3 · p.4  ✓ verified</text>
          {box(356, 96, 100, 86, INK)}
          <text x="368" y="114" fontFamily={mono} fontSize="6.5" fill={YELLOW}>EVAL</text>
          {[128, 144, 160].map((y, k) => (
            <g key={y}>
              <rect x="368" y={y} width="76" height="5" rx="2.5" fill={PAPER} opacity="0.25" />
              <rect x="368" y={y} width={70 - k * 6} height="5" rx="2.5" fill={YELLOW} />
            </g>
          ))}
          {box(24, 196, 432, 30, PAPER)}
          <text x="38" y="215" fontFamily={mono} fontSize="7.5" fill={INK}>HYBRID RETRIEVAL · RERANK · GROUNDING CHECK · GUARDRAIL</text>
        </>
      );

    case "fraud-detection":
      return (
        <>
          <rect x="0" y="30" width="480" height="270" fill={INK} />
          <circle cx="24" cy="50" r="4" fill={YELLOW} />
          <text x="36" y="54" fontFamily={mono} fontSize="8" fill={PAPER}>LIVE STREAM · REDPANDA</text>
          <text x="366" y="54" fontFamily={mono} fontSize="8" fill={YELLOW}>2.4ms / txn</text>
          <polyline points="24,120 70,104 116,132 162,92 208,118 254,78 300,110 346,70 392,96 438,64" fill="none" stroke={RED} strokeWidth="2.5" strokeLinecap="round" />
          <rect x="24" y="164" width="432" height="30" rx="6" fill="none" stroke={PAPER} strokeWidth="1.5" opacity="0.4" />
          <text x="40" y="182" fontFamily={sans} fontSize="9" fill={PAPER}>TXN 8842 · AED 9,400 · new device</text>
          <rect x="368" y="171" width="72" height="16" rx="8" fill={RED} />
          <text x="404" y="182" fontFamily={mono} fontSize="8" fill={PAPER} textAnchor="middle">HIGH 0.92</text>
          <rect x="24" y="200" width="432" height="30" rx="6" fill="none" stroke={PAPER} strokeWidth="1.5" opacity="0.4" />
          <text x="40" y="218" fontFamily={sans} fontSize="9" fill={PAPER}>TXN 8843 · AED 120 · known merchant</text>
          <rect x="368" y="207" width="72" height="16" rx="8" fill={YELLOW} />
          <text x="404" y="218" fontFamily={mono} fontSize="8" fill={INK} textAnchor="middle">LOW 0.03</text>
          <text x="24" y="252" fontFamily={mono} fontSize="7.5" fill={PAPER} opacity="0.7">AGENT CASE NOTE · SHAP EXPLANATION</text>
        </>
      );

    case "aibill":
      return (
        <>
          <rect x="0" y="30" width="480" height="26" fill={RED} />
          <circle cx="20" cy="43" r="8" fill={PAPER} />
          <text x="36" y="47" fontFamily={sans} fontSize="10" fontWeight="700" fill={PAPER}>AiBill</text>
          <text x="428" y="47" fontFamily={mono} fontSize="7.5" fill={PAPER}>EN / AR</text>
          {box(24, 72, 240, 34, PAPER)}
          <text x="38" y="86" fontFamily={sans} fontSize="9" fill={INK}>Sold 3 office chairs at</text>
          <text x="38" y="98" fontFamily={sans} fontSize="9" fill={INK}>200 AED each to Al Noor LLC</text>
          {box(196, 120, 260, 118, PAPER)}
          <rect x="210" y="134" width="60" height="9" rx="4" fill={RED} />
          <text x="392" y="142" fontFamily={mono} fontSize="7" fill={INK}>INVOICE</text>
          {[160, 174, 188].map((y) => (
            <line key={y} x1="210" y1={y} x2="442" y2={y} stroke={INK} strokeWidth="1.5" opacity="0.5" />
          ))}
          <line x1="210" y1="206" x2="442" y2="206" stroke={INK} strokeWidth="2" />
          <text x="210" y="222" fontFamily={sans} fontSize="9" fontWeight="700" fill={INK}>Total incl. 5% VAT</text>
          <rect x="360" y="212" width="82" height="15" rx="4" fill={YELLOW} />
          <text x="401" y="224" fontFamily={sans} fontSize="9" fontWeight="700" fill={INK} textAnchor="middle">AED 630.00</text>
        </>
      );

    case "hotel-ms":
      return (
        <>
          {box(24, 48, 200, 120, PAPER)}
          <path d="M24 150 L84 108 L140 150" fill="none" stroke={INK} strokeWidth="2" />
          <circle cx="182" cy="80" r="13" fill={YELLOW} stroke={INK} strokeWidth="2" />
          <text x="36" y="190" fontFamily={sans} fontSize="11" fontWeight="700" fill={INK}>Deluxe Castle Room</text>
          <text x="36" y="205" fontFamily={mono} fontSize="8" fill={INK}>BRASOV, RO · from $180</text>
          <rect x="36" y="212" width="72" height="22" rx="6" fill={YELLOW} stroke={INK} strokeWidth="2" />
          <text x="72" y="227" fontFamily={sans} fontSize="9" fontWeight="700" fill={INK} textAnchor="middle">Book</text>
          <text x="248" y="60" fontFamily={mono} fontSize="7.5" fill={INK}>TAPE CHART</text>
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2, 3, 4, 5, 6].map((c) => {
              const booked = (r + c) % 3 === 0;
              return (
                <rect key={`${r}-${c}`} x={248 + c * 30} y={70 + r * 24} width="26" height="20" rx="3" fill={booked ? RED : PAPER} stroke={INK} strokeWidth="1.5" />
              );
            }),
          )}
          <text x="248" y="196" fontFamily={mono} fontSize="7.5" fill={INK}>RESERVATIONS · HOUSEKEEPING · CSV</text>
        </>
      );

    case "fleuraya":
      return (
        <>
          <text x="24" y="58" fontFamily={sans} fontSize="13" fontWeight="800" fill={RED}>Fleuraya</text>
          <rect x="392" y="44" width="64" height="18" rx="9" fill={RED} />
          <text x="424" y="57" fontFamily={mono} fontSize="7.5" fill={PAPER} textAnchor="middle">CART · 2</text>
          {[24, 180, 336].map((x) => (
            <g key={x}>
              {box(x, 78, 120, 150)}
              <circle cx={x + 60} cy="128" r="24" fill={RED} stroke={INK} strokeWidth="2" />
              <circle cx={x + 60} cy="128" r="8" fill={YELLOW} stroke={INK} strokeWidth="1.5" />
              <text x={x + 14} y="196" fontFamily={sans} fontSize="9" fontWeight="700" fill={INK}>Rose Bouquet</text>
              <text x={x + 14} y="212" fontFamily={mono} fontSize="8" fill={RED}>AED 120</text>
            </g>
          ))}
          <text x="24" y="252" fontFamily={mono} fontSize="7.5" fill={INK}>SAME-DAY DELIVERY · EN / AR · RTL</text>
        </>
      );

    case "nomatech-website":
      return (
        <>
          <rect x="0" y="30" width="480" height="270" fill={INK} />
          <text x="24" y="54" fontFamily={sans} fontSize="11" fontWeight="800" fill={PAPER}>NomaTech</text>
          {["Products", "About", "Contact"].map((t, i) => (
            <text key={t} x={330 + i * 46} y="54" fontFamily={mono} fontSize="7.5" fill={PAPER} opacity="0.7">{t}</text>
          ))}
          <text x="24" y="112" fontFamily={sans} fontSize="24" fontWeight="800" fill={PAPER}>AI products,</text>
          <text x="24" y="140" fontFamily={sans} fontSize="24" fontWeight="800" fill={RED}>shipped.</text>
          <rect x="24" y="156" width="88" height="22" rx="6" fill={RED} />
          <text x="68" y="171" fontFamily={sans} fontSize="9" fontWeight="700" fill={PAPER} textAnchor="middle">Explore</text>
          {[24, 174, 324].map((x) => (
            <g key={x}>
              <rect x={x} y="206" width="132" height="66" rx="8" fill="none" stroke={PAPER} strokeWidth="1.5" opacity="0.5" />
              <rect x={x + 14} y="220" width="48" height="8" rx="4" fill={YELLOW} />
            </g>
          ))}
        </>
      );

    case "rag-chatbot":
    default: {
      const boxes = [
        { x: 20, label: "Docs" },
        { x: 140, label: "Vectors" },
        { x: 260, label: "LLM" },
        { x: 380, label: "Answer" },
      ];
      return (
        <>
          <text x="24" y="58" fontFamily={mono} fontSize="8" fill={INK}>DIALOGFLOW WEBHOOK · RETRIEVAL PIPELINE</text>
          {boxes.map((b, i) => (
            <g key={b.label}>
              {box(b.x, 120, 80, 52)}
              <circle cx={b.x + 24} cy="146" r="8" fill={i % 2 ? YELLOW : RED} stroke={INK} strokeWidth="1.5" />
              <text x={b.x + 40} y="150" fontFamily={sans} fontSize="9" fontWeight="700" fill={INK}>{b.label}</text>
              {i < boxes.length - 1 ? (
                <path d={`M${b.x + 84} 146 L${b.x + 116} 146`} stroke={RED} strokeWidth="2.5" markerEnd="url(#ar)" />
              ) : null}
            </g>
          ))}
          <defs>
            <marker id="ar" markerWidth="7" markerHeight="7" refX="4" refY="3" orient="auto">
              <path d="M0 0 L6 3 L0 6 Z" fill={RED} />
            </marker>
          </defs>
          {box(20, 200, 440, 30, PAPER)}
          <text x="34" y="219" fontFamily={mono} fontSize="7.5" fill={INK}>RETRIEVE CONTEXT → GROUND ANSWER → CUT HALLUCINATION</text>
        </>
      );
    }
  }
}
