import { ImageResponse } from "next/og";

import { SocialImage } from "@/lib/social-image";

export const alt = "Senior React Native Engineer portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<SocialImage compact />, size);
}
