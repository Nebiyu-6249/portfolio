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
          background: "linear-gradient(135deg, #1b2540 0%, #0c1324 100%)",
          color: "#F4F4F1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "#F4F4F1",
              color: "#17213B",
              fontSize: "26px",
              fontWeight: 800,
            }}
          >
            n
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E9B44C",
              fontWeight: 600,
            }}
          >
            Measured, not asserted
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: "78px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            {site.name}
          </div>
          <div style={{ display: "flex", marginTop: "10px", fontSize: "34px", color: "#9AA6C6" }}>
            {site.role} · {site.location}
          </div>
        </div>

        <div style={{ display: "flex", gap: "28px" }}>
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                padding: "24px 28px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div style={{ display: "flex", fontSize: "48px", fontWeight: 700, color: "#E9B44C" }}>
                {s.value}
              </div>
              <div style={{ display: "flex", marginTop: "8px", fontSize: "22px", color: "#9AA6C6" }}>
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
