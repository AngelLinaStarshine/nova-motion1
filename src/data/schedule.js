// ─────────────────────────────────────────────────────
//  NOVA MOTION — Weekly Schedule Data
//  Add / remove slots per day as needed.
//  Class names must match names in classes.js
// ─────────────────────────────────────────────────────

export const SCHEDULE = {
  Monday: [
    { time: "6:30 AM",  cls: "Mat Fundamentals",  instructor: "Elena Vasquez",   spots: 4  },
    { time: "9:00 AM",  cls: "Barre Fusion",       instructor: "Mia Chen",        spots: 8  },
    { time: "12:00 PM", cls: "Reformer Flow",      instructor: "James Okafor",    spots: 2  },
    { time: "5:30 PM",  cls: "Power & Precision",  instructor: "Sofia Lindqvist", spots: 6  },
    { time: "7:00 PM",  cls: "Stretch & Restore",  instructor: "Elena Vasquez",   spots: 10 },
  ],
  Tuesday: [
    { time: "7:00 AM",  cls: "Reformer Flow",      instructor: "James Okafor",    spots: 6  },
    { time: "10:00 AM", cls: "Tower Circuit",       instructor: "Sofia Lindqvist", spots: 3  },
    { time: "12:30 PM", cls: "Mat Fundamentals",   instructor: "Elena Vasquez",   spots: 8  },
    { time: "6:00 PM",  cls: "Barre Fusion",       instructor: "Mia Chen",        spots: 5  },
  ],
  Wednesday: [
    { time: "6:30 AM",  cls: "Power & Precision",  instructor: "Sofia Lindqvist", spots: 4  },
    { time: "9:30 AM",  cls: "Stretch & Restore",  instructor: "Elena Vasquez",   spots: 12 },
    { time: "11:00 AM", cls: "Reformer Flow",      instructor: "James Okafor",    spots: 6  },
    { time: "5:00 PM",  cls: "Mat Fundamentals",   instructor: "Elena Vasquez",   spots: 8  },
    { time: "7:30 PM",  cls: "Tower Circuit",       instructor: "Sofia Lindqvist", spots: 2  },
  ],
  Thursday: [
    { time: "7:00 AM",  cls: "Barre Fusion",       instructor: "Mia Chen",        spots: 10 },
    { time: "10:00 AM", cls: "Reformer Flow",      instructor: "James Okafor",    spots: 4  },
    { time: "12:00 PM", cls: "Power & Precision",  instructor: "Sofia Lindqvist", spots: 6  },
    { time: "6:30 PM",  cls: "Stretch & Restore",  instructor: "Elena Vasquez",   spots: 9  },
  ],
  Friday: [
    { time: "6:30 AM",  cls: "Mat Fundamentals",   instructor: "Elena Vasquez",   spots: 5  },
    { time: "8:00 AM",  cls: "Tower Circuit",       instructor: "Sofia Lindqvist", spots: 4  },
    { time: "10:00 AM", cls: "Barre Fusion",       instructor: "Mia Chen",        spots: 7  },
    { time: "12:00 PM", cls: "Reformer Flow",      instructor: "James Okafor",    spots: 3  },
    { time: "5:30 PM",  cls: "Power & Precision",  instructor: "Sofia Lindqvist", spots: 5  },
  ],
  Saturday: [
    { time: "8:00 AM",  cls: "Reformer Flow",      instructor: "James Okafor",    spots: 2  },
    { time: "9:30 AM",  cls: "Barre Fusion",       instructor: "Mia Chen",        spots: 6  },
    { time: "11:00 AM", cls: "Stretch & Restore",  instructor: "Elena Vasquez",   spots: 10 },
  ],
  Sunday: [
    { time: "9:00 AM",  cls: "Mat Fundamentals",   instructor: "Elena Vasquez",   spots: 8  },
    { time: "10:30 AM", cls: "Power & Precision",  instructor: "Sofia Lindqvist", spots: 4  },
    { time: "12:00 PM", cls: "Stretch & Restore",  instructor: "Elena Vasquez",   spots: 12 },
  ],
};

export const DAYS = Object.keys(SCHEDULE);
