import LogotypeIcon from "@/components/icons/logotype";
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "white",
          color: "black",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <LogotypeIcon
          style={{
            width: "80%",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
