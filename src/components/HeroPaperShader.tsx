import { MeshGradient } from "@paper-design/shaders-react";

export const HeroPaperShader = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#2d9a5e]">
    {/* Primary mesh — boosted speed & contrast for clear visible motion */}
    <MeshGradient
      colors={["#1a6b38", "#3EB475", "#8ef5b4", "#ffffff", "#2d9a5e", "#5ecf8a", "#c8f5dc"]}
      speed={0.55}
      distortion={0.9}
      swirl={0.55}
      grainMixer={0}
      grainOverlay={0}
      scale={1}
      fit="cover"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        maxWidth: "100%",
      }}
    />

    {/* Floating light orbs — extra visible flowing motion */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute rounded-full blur-3xl animate-[float-blob-1_8s_ease-in-out_infinite]"
        style={{
          width: "min(45vw, 280px)",
          height: "min(45vw, 280px)",
          background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)",
          top: "10%",
          left: "45%",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl animate-[float-blob-2_10s_ease-in-out_infinite]"
        style={{
          width: "min(40vw, 240px)",
          height: "min(40vw, 240px)",
          background: "radial-gradient(circle, rgba(142,245,180,0.5) 0%, transparent 70%)",
          bottom: "5%",
          left: "5%",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl animate-[float-blob-3_12s_ease-in-out_infinite]"
        style={{
          width: "min(35vw, 200px)",
          height: "min(35vw, 200px)",
          background: "radial-gradient(circle, rgba(62,180,117,0.6) 0%, transparent 70%)",
          top: "40%",
          right: "0",
        }}
      />
    </div>

    {/* Light center glow — keeps animation visible */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 65% 45%, rgba(255,255,255,0.22) 0%, transparent 65%)",
      }}
    />
  </div>
);
