import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stats = [
  { value: "97.3%", label: "retrieval recall@k" },
  { value: "0.0%", label: "hallucinated citations" },
  { value: "0.64%", label: "fraud false-positive rate" },
];

const INK = "#1F1F1F";
const PAPER = "#F8F3E9";
const RED = "#E8433F";
const YELLOW = "#FFD866";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: PAPER,
          color: INK,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "12px 5px 12px 5px",
              background: RED,
              color: PAPER,
              border: `3px solid ${INK}`,
              boxShadow: `4px 4px 0px ${INK}`,
              fontSize: "28px",
              fontWeight: 800,
            }}
          >
            n
          </div>
          <div style={{ display: "flex", fontSize: "22px", color: INK, fontWeight: 700 }}>
            measured, not asserted
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: "80px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            {site.name}
          </div>
          <div style={{ display: "flex", marginTop: "10px", fontSize: "34px", color: "#57534C" }}>
            {site.role} · {site.location}
          </div>
        </div>

        <div style={{ display: "flex", gap: "24px" }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                padding: "24px 28px",
                borderRadius: i % 2 === 0 ? "24px 8px 24px 8px" : "8px 24px 8px 24px",
                border: `3px solid ${INK}`,
                background: i === 0 ? YELLOW : "#FDFAF4",
                boxShadow: `5px 5px 0px ${INK}`,
              }}
            >
              <div style={{ display: "flex", fontSize: "50px", fontWeight: 800, color: INK }}>{s.value}</div>
              <div style={{ display: "flex", marginTop: "8px", fontSize: "22px", color: "#57534C" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
