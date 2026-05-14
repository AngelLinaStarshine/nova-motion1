// ─────────────────────────────────────────────────────
//  NOVA MOTION — Schedule Page  (/schedule)
// ─────────────────────────────────────────────────────

import PageHero   from "@/components/PageHero";
import Schedule   from "@/sections/Schedule";

export default function SchedulePage({ bookedSlots, onBook }) {
  return (
    <>
      <PageHero
        label="Weekly Schedule"
        title="Find your class"
        subtitle="Book directly from the timetable. Small class sizes mean spots fill fast."
      />
      <Schedule bookedSlots={bookedSlots} onBook={onBook} darkBg={false} />
    </>
  );
}
