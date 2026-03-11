import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/portfolio";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
          background:
            "radial-gradient(circle at top left, rgba(94,234,212,0.24), transparent 42%), linear-gradient(180deg, #07101d 0%, #091425 100%)",
          color: "#f8fafc",
          fontFamily:
            '"Segoe UI", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            height: "108px",
            width: "108px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #5eead4, #38bdf8)",
            color: "#07101d",
            fontSize: "44px",
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          {siteConfig.initials}
        </div>
      </div>
    ),
    size,
  );
}
