// Generated project thumbnails. The live sites can't be screenshotted from the
// build environment, so each card gets a hand-built, on-brand mock of what the
// product actually is. They are decorative representations, drawn as SVG so they
// stay crisp at any size and need no external image assets.

type ThumbMeta = { accent: string; url: string };

const META: Record<string, ThumbMeta> = {
  yenetta: { accent: "#16A34A", url: "yenetta.app" },
  "uae-compliance-copilot": { accent: "#0C7467", url: "uae-compliance-copilot" },
  "fraud-detection": { accent: "#E0533D", url: "fraud-detection" },
  aibill: { accent: "#1FA855", url: "wa.me / aibill" },
  "hotel-ms": { accent: "#4338CA", url: "hotelstransylva.netlify.app" },
  fleuraya: { accent: "#DB2777", url: "fleuraya-flowers.netlify.app" },
  "nomatech-website": { accent: "#2563EB", url: "nomatech-ai-solutions.ae" },
  "rag-chatbot": { accent: "#475569", url: "rag-chatbot" },
};

const mono = "var(--font-mono)";
const sans = "var(--font-sans)";

export function ProjectThumb({ slug }: { slug: string }) {
  const meta = META[slug] ?? { accent: "#0C7467", url: slug };

  return (
    <div className="relative w-full overflow-hidden border-b border-line bg-white">
      <svg
        viewBox="0 0 480 300"
        className="block h-auto w-full"
        role="img"
        aria-label="Project preview"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Browser chrome */}
        <rect x="0" y="0" width="480" height="300" fill="#ffffff" />
        <rect x="0" y="0" width="480" height="30" fill="#f2f2ef" />
        <circle cx="16" cy="15" r="4" fill="#d8d8d3" />
        <circle cx="30" cy="15" r="4" fill="#d8d8d3" />
        <circle cx="44" cy="15" r="4" fill="#d8d8d3" />
        <rect x="62" y="8" width="360" height="14" rx="7" fill="#ffffff" stroke="#e5e5e0" />
        <text x="74" y="18" fontFamily={mono} fontSize="8.5" fill="#9a9a92">
          {meta.url}
        </text>
        <g>{inner(slug, meta.accent)}</g>
      </svg>
    </div>
  );
}

function inner(slug: string, accent: string) {
  switch (slug) {
    case "yenetta":
      return (
        <>
          <rect x="0" y="30" width="96" height="270" fill="#f7f8f7" />
          <rect x="16" y="46" width="64" height="9" rx="4" fill={accent} opacity="0.9" />
          {[70, 88, 106, 124].map((y) => (
            <rect key={y} x="16" y={y} width="52" height="6" rx="3" fill="#dcdcd6" />
          ))}
          <circle cx="52" cy="250" r="16" fill={accent} opacity="0.12" />
          <text x="52" y="254" fontFamily={sans} fontSize="12" fontWeight="700" fill={accent} textAnchor="middle">
            አማ
          </text>
          {/* chat */}
          <rect x="120" y="54" width="150" height="34" rx="10" fill="#f0f0ec" />
          <text x="132" y="68" fontFamily={sans} fontSize="9" fill="#6b6b64">
            Explain photosynthesis
          </text>
          <text x="132" y="80" fontFamily={sans} fontSize="9" fill="#6b6b64">
            for Grade 10.
          </text>
          <rect x="230" y="100" width="228" height="60" rx="10" fill={accent} opacity="0.1" />
          <text x="244" y="120" fontFamily={sans} fontSize="9" fill="#2f4f3f">
            Photosynthesis converts light into
          </text>
          <text x="244" y="133" fontFamily={sans} fontSize="9" fill="#2f4f3f">
            chemical energy in chloroplasts.
          </text>
          <rect x="244" y="142" width="150" height="12" rx="6" fill="#ffffff" stroke={accent} strokeOpacity="0.4" />
          <text x="252" y="151" fontFamily={mono} fontSize="7" fill={accent}>
            cited · Biology G10 · Unit 2
          </text>
          <rect x="120" y="182" width="338" height="40" rx="10" fill="#f7f8f7" stroke="#e6e6e0" />
          <text x="134" y="200" fontFamily={mono} fontSize="7.5" fill="#9a9a92">
            FLASHCARDS
          </text>
          <text x="134" y="214" fontFamily={mono} fontSize="7.5" fill="#9a9a92">
            SPACED REVIEW · STREAK 12
          </text>
        </>
      );

    case "uae-compliance-copilot":
      return (
        <>
          <rect x="0" y="30" width="480" height="270" fill="#fbfbfa" />
          <rect x="250" y="50" width="196" height="30" rx="10" fill={accent} />
          <text x="262" y="69" fontFamily={sans} fontSize="9" fill="#ffffff">
            What is the UAE VAT rate?
          </text>
          <rect x="24" y="96" width="330" height="86" rx="10" fill="#ffffff" stroke="#e6e6e0" />
          <text x="38" y="116" fontFamily={sans} fontSize="9.5" fill="#333">
            The standard VAT rate is 5%, per
          </text>
          <text x="38" y="129" fontFamily={sans} fontSize="9.5" fill="#333">
            the Federal Decree-Law.
          </text>
          <rect x="38" y="140" width="180" height="30" rx="6" fill={accent} opacity="0.08" />
          <text x="48" y="153" fontFamily={mono} fontSize="7" fill={accent}>
            SOURCE · VAT Decree-Law
          </text>
          <text x="48" y="164" fontFamily={mono} fontSize="7" fill={accent}>
            Art. 3 · p.4 ✓ verified
          </text>
          {/* mini metrics */}
          <rect x="366" y="96" width="90" height="86" rx="10" fill="#0C1A18" />
          <text x="378" y="114" fontFamily={mono} fontSize="6.5" fill="#5fd7c3">
            EVAL
          </text>
          {[
            { y: 128, w: 66, label: "recall" },
            { y: 144, w: 62, label: "prec@1" },
            { y: 160, w: 60, label: "faith" },
          ].map((b) => (
            <g key={b.y}>
              <rect x="378" y={b.y} width="66" height="5" rx="2.5" fill="#20342f" />
              <rect x="378" y={b.y} width={b.w} height="5" rx="2.5" fill="#34C2AC" />
            </g>
          ))}
          <rect x="24" y="196" width="432" height="30" rx="10" fill="#ffffff" stroke="#e6e6e0" />
          <text x="38" y="215" fontFamily={mono} fontSize="7.5" fill="#9a9a92">
            HYBRID RETRIEVAL · RERANK · GROUNDING CHECK · FAITHFULNESS GUARDRAIL
          </text>
        </>
      );

    case "fraud-detection":
      return (
        <>
          <rect x="0" y="30" width="480" height="270" fill="#0d1117" />
          <circle cx="24" cy="50" r="4" fill="#3ddc84" />
          <text x="36" y="54" fontFamily={mono} fontSize="8" fill="#8b98a9">
            LIVE STREAM · REDPANDA
          </text>
          <text x="360" y="54" fontFamily={mono} fontSize="8" fill={accent}>
            2.4ms / txn
          </text>
          {/* sparkline */}
          <polyline
            points="24,120 70,104 116,132 162,92 208,118 254,78 300,110 346,70 392,96 438,64"
            fill="none"
            stroke="#34C2AC"
            strokeWidth="2"
          />
          <line x1="24" y1="140" x2="456" y2="140" stroke="#20283400" />
          {/* rows */}
          <rect x="24" y="164" width="432" height="30" rx="6" fill="#161c26" />
          <circle cx="40" cy="179" r="4" fill={accent} />
          <text x="54" y="182" fontFamily={sans} fontSize="9" fill="#c9d3df">
            TXN 8842 · AED 9,400 · new device
          </text>
          <rect x="366" y="171" width="74" height="16" rx="8" fill={accent} opacity="0.2" />
          <text x="403" y="182" fontFamily={mono} fontSize="8" fill={accent} textAnchor="middle">
            HIGH 0.92
          </text>
          <rect x="24" y="200" width="432" height="30" rx="6" fill="#161c26" />
          <circle cx="40" cy="215" r="4" fill="#3ddc84" />
          <text x="54" y="218" fontFamily={sans} fontSize="9" fill="#c9d3df">
            TXN 8843 · AED 120 · known merchant
          </text>
          <rect x="366" y="207" width="74" height="16" rx="8" fill="#3ddc84" opacity="0.18" />
          <text x="403" y="218" fontFamily={mono} fontSize="8" fill="#3ddc84" textAnchor="middle">
            LOW 0.03
          </text>
          <text x="24" y="252" fontFamily={mono} fontSize="7.5" fill="#5b6675">
            AGENT CASE NOTE · SHAP EXPLANATION ATTACHED
          </text>
        </>
      );

    case "aibill":
      return (
        <>
          <rect x="0" y="30" width="480" height="270" fill="#e5ddd5" />
          <rect x="0" y="30" width="480" height="26" fill={accent} />
          <circle cx="20" cy="43" r="8" fill="#ffffff" opacity="0.35" />
          <text x="36" y="47" fontFamily={sans} fontSize="10" fontWeight="700" fill="#ffffff">
            AiBill
          </text>
          <text x="430" y="47" fontFamily={mono} fontSize="7.5" fill="#eafff2">
            EN / AR
          </text>
          {/* received */}
          <rect x="24" y="72" width="240" height="34" rx="10" fill="#ffffff" />
          <text x="38" y="86" fontFamily={sans} fontSize="9" fill="#333">
            Sold 3 office chairs at
          </text>
          <text x="38" y="98" fontFamily={sans} fontSize="9" fill="#333">
            200 AED each to Al Noor LLC
          </text>
          {/* sent invoice card */}
          <rect x="196" y="120" width="260" height="120" rx="10" fill="#dcf8c6" />
          <rect x="210" y="134" width="232" height="92" rx="6" fill="#ffffff" />
          <rect x="222" y="146" width="60" height="8" rx="4" fill={accent} />
          <text x="392" y="153" fontFamily={mono} fontSize="7" fill="#8a8a82">
            INVOICE
          </text>
          {[168, 182, 196].map((y) => (
            <rect key={y} x="222" y={y} width="208" height="6" rx="3" fill="#eeeee9" />
          ))}
          <line x1="222" y1="210" x2="430" y2="210" stroke="#e6e6e0" />
          <text x="222" y="222" fontFamily={sans} fontSize="9" fontWeight="700" fill="#222">
            Total incl. 5% VAT
          </text>
          <text x="430" y="222" fontFamily={sans} fontSize="9" fontWeight="700" fill={accent} textAnchor="end">
            AED 630.00
          </text>
          <text x="366" y="236" fontFamily={mono} fontSize="7" fill="#7aa17a">
            Invoice.pdf ✓ sent
          </text>
        </>
      );

    case "hotel-ms":
      return (
        <>
          <rect x="0" y="30" width="480" height="270" fill="#fbfbfe" />
          <rect x="24" y="48" width="200" height="120" rx="8" fill="#e7e7f2" />
          <path d="M24 140 L84 104 L140 140 Z" fill={accent} opacity="0.25" />
          <circle cx="180" cy="80" r="12" fill={accent} opacity="0.3" />
          <text x="36" y="188" fontFamily={sans} fontSize="11" fontWeight="700" fill="#222">
            Deluxe Castle Room
          </text>
          <text x="36" y="204" fontFamily={mono} fontSize="8" fill="#8a8a92">
            BRASOV, RO · from $180 / night
          </text>
          <rect x="36" y="214" width="70" height="22" rx="6" fill={accent} />
          <text x="71" y="229" fontFamily={sans} fontSize="9" fontWeight="700" fill="#ffffff" textAnchor="middle">
            Book
          </text>
          {/* tape chart */}
          <text x="248" y="60" fontFamily={mono} fontSize="7.5" fill="#8a8a92">
            TAPE CHART
          </text>
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2, 3, 4, 5, 6].map((c) => {
              const booked = (r + c) % 3 === 0;
              return (
                <rect
                  key={`${r}-${c}`}
                  x={248 + c * 30}
                  y={70 + r * 24}
                  width="26"
                  height="20"
                  rx="3"
                  fill={booked ? accent : "#eef0f7"}
                  opacity={booked ? 0.8 : 1}
                />
              );
            }),
          )}
          <text x="248" y="196" fontFamily={mono} fontSize="7.5" fill="#8a8a92">
            RESERVATIONS · HOUSEKEEPING · CSV EXPORT
          </text>
        </>
      );

    case "fleuraya":
      return (
        <>
          <rect x="0" y="30" width="480" height="270" fill="#fff8fb" />
          <text x="24" y="56" fontFamily={sans} fontSize="12" fontWeight="800" fill={accent}>
            Fleuraya
          </text>
          <rect x="392" y="44" width="64" height="18" rx="9" fill={accent} />
          <text x="424" y="57" fontFamily={mono} fontSize="7.5" fill="#ffffff" textAnchor="middle">
            CART · 2
          </text>
          {[24, 180, 336].map((x, i) => (
            <g key={x}>
              <rect x={x} y="78" width="120" height="150" rx="8" fill="#ffffff" stroke="#f0dbe6" />
              <rect x={x} y="78" width="120" height="86" rx="8" fill={accent} opacity={0.08 + i * 0.05} />
              <circle cx={x + 60} cy="120" r="22" fill={accent} opacity="0.4" />
              <circle cx={x + 60} cy="120" r="8" fill="#fff8fb" />
              <text x={x + 14} y="188" fontFamily={sans} fontSize="9" fontWeight="700" fill="#333">
                Rose Bouquet
              </text>
              <text x={x + 14} y="204" fontFamily={mono} fontSize="8" fill={accent}>
                AED 120
              </text>
              <rect x={x + 14} y="210" width="92" height="12" rx="6" fill={accent} opacity="0.12" />
            </g>
          ))}
          <text x="24" y="252" fontFamily={mono} fontSize="7.5" fill="#b58aa0">
            SAME-DAY DELIVERY · EN / AR · RTL
          </text>
        </>
      );

    case "nomatech-website":
      return (
        <>
          <rect x="0" y="30" width="480" height="270" fill="#0b1220" />
          <text x="24" y="54" fontFamily={sans} fontSize="11" fontWeight="800" fill="#ffffff">
            NomaTech
          </text>
          {["Products", "About", "Contact"].map((t, i) => (
            <text key={t} x={330 + i * 46} y="54" fontFamily={mono} fontSize="7.5" fill="#8aa0c0">
              {t}
            </text>
          ))}
          <text x="24" y="112" fontFamily={sans} fontSize="24" fontWeight="800" fill="#ffffff">
            AI products,
          </text>
          <text x="24" y="140" fontFamily={sans} fontSize="24" fontWeight="800" fill={accent}>
            shipped.
          </text>
          <rect x="24" y="156" width="88" height="22" rx="6" fill={accent} />
          <text x="68" y="171" fontFamily={sans} fontSize="9" fontWeight="700" fill="#ffffff" textAnchor="middle">
            Explore
          </text>
          {[24, 174, 324].map((x) => (
            <rect key={x} x={x} y="206" width="132" height="66" rx="8" fill="#131c30" stroke="#22304a" />
          ))}
          {[24, 174, 324].map((x) => (
            <rect key={`b${x}`} x={x + 14} y="220" width="48" height="8" rx="4" fill={accent} opacity="0.8" />
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
          <rect x="0" y="30" width="480" height="270" fill="#f7f8f9" />
          <text x="24" y="58" fontFamily={mono} fontSize="8" fill="#8a8f98">
            DIALOGFLOW WEBHOOK · RETRIEVAL PIPELINE
          </text>
          {boxes.map((b, i) => (
            <g key={b.label}>
              <rect x={b.x} y="120" width="80" height="52" rx="8" fill="#ffffff" stroke="#dfe2e6" />
              <rect x={b.x + 14} y="134" width="24" height="24" rx="6" fill={accent} opacity="0.15" />
              <circle cx={b.x + 26} cy="146" r="6" fill={accent} opacity="0.7" />
              <text x={b.x + 40} y="150" fontFamily={sans} fontSize="9" fontWeight="700" fill="#333">
                {b.label}
              </text>
              {i < boxes.length - 1 ? (
                <path
                  d={`M${b.x + 84} 146 L${b.x + 116} 146`}
                  stroke={accent}
                  strokeWidth="2"
                  markerEnd="url(#arrow)"
                />
              ) : null}
            </g>
          ))}
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
              <path d="M0 0 L6 3 L0 6 Z" fill={accent} />
            </marker>
          </defs>
          <rect x="20" y="200" width="440" height="30" rx="8" fill="#eef0f2" />
          <text x="34" y="219" fontFamily={mono} fontSize="7.5" fill="#8a8f98">
            RETRIEVE CONTEXT → GROUND ANSWER → CUT HALLUCINATION
          </text>
        </>
      );
    }
  }
}
