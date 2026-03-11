import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // Get dynamic parameters
    const title = searchParams.get("title") || "Warehouse Management Dashboard"
    const description =
      searchParams.get("description") ||
      "Real-time inventory tracking and order management"

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F5F5F7",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #E5E5E7 2%, transparent 0%), radial-gradient(circle at 75px 75px, #E5E5E7 2%, transparent 0%)",
            backgroundSize: "100px 100px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {/* Syngenta Brand Bar */}
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 8,
              background: "linear-gradient(90deg, #702F8A 0%, #E20074 50%, #00A04A 100%)",
            }}
          />

          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                backgroundColor: "#702F8A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
                fontWeight: "bold",
                color: "white",
              }}
            >
              S
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 80px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: 72,
                fontWeight: "bold",
                color: "#1D1D1F",
                lineHeight: 1.2,
                marginBottom: 24,
                maxWidth: 1000,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 32,
                color: "#6E6E73",
                lineHeight: 1.4,
                maxWidth: 800,
              }}
            >
              {description}
            </p>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              position: "absolute",
              bottom: 40,
              left: 0,
              right: 0,
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: "600",
                color: "#702F8A",
              }}
            >
              Syngenta
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#6E6E73",
              }}
            >
              •
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#6E6E73",
              }}
            >
              Warehouse Management
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.error(e)
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
