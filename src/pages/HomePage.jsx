// ─────────────────────────────────────────────────────
//  NOVA MOTION — Home Page
//  Combines Hero (includes ticker above stats) → About → Testimonials → CTA
//  Full schedule / classes / shop live on their own pages.
// ─────────────────────────────────────────────────────

import { useNavigate } from "react-router-dom";
import Hero         from "@/sections/Hero";
import About        from "@/sections/About";
import Testimonials from "@/sections/Testimonials";
import CTA          from "@/sections/CTA";

export default function HomePage({ onToastShow }) {
  const navigate = useNavigate();

  return (
    <>
      <Hero
        onScrollTo={(section) => {
          if (section === "schedule") navigate("/schedule");
          else if (section === "membership") navigate("/membership");
        }}
      />
      <About onClasses={() => navigate("/classes")} />
      <Testimonials />
      <CTA onSubmit={({ name }) => onToastShow(`✓  Welcome, ${name.split(" ")[0]}! We'll be in touch.`)} />
    </>
  );
}
