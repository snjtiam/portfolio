import type { ReactElement } from "react";

import { siteConfig } from "@/content/portfolio";

const accentChips = [
  "Scalable Mobile Architecture",
  "Performance Optimization",
  "Native Integrations",
] as const;

type SocialImageProps = {
  compact?: boolean;
};

export function SocialImage({ compact = false }: SocialImageProps): ReactElement {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, rgba(94,234,212,0.18), transparent 34%), radial-gradient(circle at bottom right, rgba(56,189,248,0.18), transparent 30%), linear-gradient(180deg, #07101d 0%, #091425 100%)",
        color: "#f8fafc",
        fontFamily:
          '"Segoe UI", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: compact ? "44px 44px" : "56px 56px",
          opacity: 0.22,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: compact ? "54px" : "64px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: compact ? "14px 22px" : "16px 24px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(7,16,29,0.74)",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontSize: compact ? "22px" : "20px",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: compact ? "44px" : "46px",
                height: compact ? "44px" : "46px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #5eead4, #38bdf8)",
                color: "#07101d",
                fontSize: compact ? "20px" : "22px",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              {siteConfig.initials}
            </span>
            {siteConfig.role}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: compact ? "20px" : "18px",
              color: "rgba(226,232,240,0.78)",
            }}
          >
            <span>Freelance</span>
            <span style={{ color: "rgba(94,234,212,0.9)" }}>|</span>
            <span>Contract</span>
            <span style={{ color: "rgba(94,234,212,0.9)" }}>|</span>
            <span>Full-time</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: compact ? "28px" : "32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "980px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "flex-start",
                padding: "10px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontSize: compact ? "21px" : "18px",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "rgba(226,232,240,0.7)",
              }}
            >
              Senior React Native Engineer
            </div>

            <div
              style={{
                fontSize: compact ? "62px" : "68px",
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              Scalable mobile app development with architecture, performance, and native depth.
            </div>

            <div
              style={{
                fontSize: compact ? "26px" : "28px",
                lineHeight: 1.45,
                color: "rgba(226,232,240,0.76)",
                maxWidth: "920px",
              }}
            >
              {siteConfig.seoDescription}
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {accentChips.map((chip) => (
              <div
                key={chip}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: compact ? "14px 22px" : "16px 24px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                  fontSize: compact ? "20px" : "18px",
                  color: "rgba(248,250,252,0.9)",
                }}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                fontSize: compact ? "22px" : "18px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              React Native / Android / iOS
            </div>
            <div style={{ fontSize: compact ? "26px" : "22px", color: "rgba(248,250,252,0.85)" }}>
              {siteConfig.email}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: compact ? "16px 24px" : "18px 28px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, rgba(94,234,212,0.92), rgba(56,189,248,0.94))",
              color: "#07101d",
              fontSize: compact ? "24px" : "20px",
              fontWeight: 700,
            }}
          >
            Available for opportunities
          </div>
        </div>
      </div>
    </div>
  );
}
