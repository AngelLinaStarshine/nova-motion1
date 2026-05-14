// ─────────────────────────────────────────────────────
//  NOVA MOTION — Classes Data
//  Edit this file to add, remove or update classes.
//
//  📸 IMAGE SLOTS:
//    Add an `image` field pointing to your file:
//    image: "/src/assets/images/classes/reformer-flow.jpg"
//    Recommended size: 600 × 400 px
// ─────────────────────────────────────────────────────

export const CLASSES = [
  {
    id: 1,
    name: "Mat Fundamentals",
    category: "Beginner",
    duration: "55 min",
    instructor: "Elena Vasquez",
    intensity: "Low",      // "Low" | "Medium" | "High"
    description:
      "Master the foundational Pilates movements with focused breath and alignment work. Ideal for newcomers or anyone returning after a break.",
    price: "$25",
    accent: "#8b7355",

    // 📸 REPLACE with your image path, e.g.:
    // image: "/src/assets/images/classes/mat-fundamentals.jpg",
    image: null,
  },
  {
    id: 2,
    name: "Reformer Flow",
    category: "Intermediate",
    duration: "50 min",
    instructor: "James Okafor",
    intensity: "Medium",
    description:
      "Fluid sequences on the reformer building core strength, coordination, and full-body mobility. A studio favourite.",
    price: "$35",
    accent: "#5a7a5a",

    // 📸 image: "/src/assets/images/classes/reformer-flow.jpg",
    image: null,
  },
  {
    id: 3,
    name: "Power & Precision",
    category: "Advanced",
    duration: "60 min",
    instructor: "Sofia Lindqvist",
    intensity: "High",
    description:
      "High-intensity reformer work designed for experienced practitioners seeking a serious challenge and results.",
    price: "$40",
    accent: "#7a5a8b",

    // 📸 image: "/src/assets/images/classes/power-precision.jpg",
    image: null,
  },
  {
    id: 4,
    name: "Barre Fusion",
    category: "Intermediate",
    duration: "45 min",
    instructor: "Mia Chen",
    intensity: "Medium",
    description:
      "Pilates meets ballet barre for sculpted legs, improved posture, and graceful strength.",
    price: "$30",
    accent: "#8b5a5a",

    // 📸 image: "/src/assets/images/classes/barre-fusion.jpg",
    image: null,
  },
  {
    id: 5,
    name: "Stretch & Restore",
    category: "Beginner",
    duration: "60 min",
    instructor: "Elena Vasquez",
    intensity: "Low",
    description:
      "Deep stretching and fascial release for recovery, flexibility, and total body relaxation.",
    price: "$25",
    accent: "#5a6e8b",

    // 📸 image: "/src/assets/images/classes/stretch-restore.jpg",
    image: null,
  },
  {
    id: 6,
    name: "Tower Circuit",
    category: "Advanced",
    duration: "55 min",
    instructor: "Sofia Lindqvist",
    intensity: "High",
    description:
      "Full-body conditioning using the Cadillac tower apparatus. Builds strength, stability and mobility simultaneously.",
    price: "$45",
    accent: "#8b7a3a",

    // 📸 image: "/src/assets/images/classes/tower-circuit.jpg",
    image: null,
  },
];

// Accent colour lookup (used in schedule to colour-code slots)
export const CLASS_ACCENT = Object.fromEntries(
  CLASSES.map((c) => [c.name, c.accent])
);
