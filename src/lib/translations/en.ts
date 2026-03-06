export interface Translations {
  nav: {
    services: string;
    workflow: string;
    features: string;
    about: string;
    admin: string;
    openPortals: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    exploreCta: string;
    workflowCta: string;
    portalManagement: string;
    portalTeacher: string;
    portalParent: string;
    portalStudent: string;
    live: string;
    pulseTitle: string;
    liveSync: string;
    attendanceTitle: string;
    attendanceDesc: string;
    gradeTitle: string;
    gradeDesc: string;
    secureTitle: string;
    secureDesc: string;
    poweredBy: string;
    roleHandoff: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    openPortal: string;
    liveLabel: string;
    management: { title: string; subtitle: string; description: string; features: string[] };
    teacher: { title: string; subtitle: string; description: string; features: string[] };
    parent: { title: string; subtitle: string; description: string; features: string[] };
    student: { title: string; subtitle: string; description: string; features: string[] };
  };
  workflow: {
    badge: string;
    title: string;
    subtitle: string;
    step: string;
    steps: { title: string; description: string }[];
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  stats: {
    badge: string;
    title: string;
    subtitle: string;
    items: { value: string; label: string; description: string }[];
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    tagline: string;
    portals: string;
    managementPortal: string;
    teacherPortal: string;
    parentPortal: string;
    studentPortal: string;
    product: string;
    legal: string;
    privacyPolicy: string;
    termsOfService: string;
    security: string;
    contact: string;
    copyright: string;
    poweredBy: string;
    subtitle: string;
  };
}

export const en: Translations = {
  // Navbar
  nav: {
    services: "Services",
    workflow: "Workflow",
    features: "Features",
    about: "About",
    admin: "Admin",
    openPortals: "Open Portals",
  },

  // Hero
  hero: {
    badge: "Now with all 4 portals live",
    title: "Beautifully connected school operations, from office to family.",
    subtitle:
      "EduTrack brings administrators, teachers, parents, and students into one coordinated workflow so every attendance mark, grade update, and message moves instantly.",
    exploreCta: "Explore live portals",
    workflowCta: "See workflow",
    portalManagement: "Management",
    portalTeacher: "Teacher",
    portalParent: "Parent",
    portalStudent: "Student",
    live: "Live",
    pulseTitle: "Unified School Pulse",
    liveSync: "Live Sync",
    attendanceTitle: "Attendance updates",
    attendanceDesc:
      "Teacher marks attendance once, Parent + Admin dashboards update immediately.",
    gradeTitle: "Grade visibility",
    gradeDesc:
      "Published exams flow from teacher gradebook to student and parent portals in real time.",
    secureTitle: "Secure by default",
    secureDesc:
      "Role-based access keeps every record visible only to the right audience.",
    poweredBy: "Powered by Hacker House",
    roleHandoff: "seamless role handoff",
  },

  // Services
  services: {
    badge: "Live Platform Suite",
    title: "Four specialized portals. One shared source of truth.",
    subtitle:
      "Every role gets a focused workspace while staying synchronized with the rest of the school.",
    openPortal: "Open portal",
    liveLabel: "live",
    management: {
      title: "EduTrack Management",
      subtitle: "For School Administrators",
      description:
        "The central command center for running your school. Create classes, onboard teachers, enroll students, and monitor performance across every department.",
      features: [
        "Create and organize classes with grade, subject, and room assignments",
        "Add teachers and assign them to classes",
        "Manage student enrollment and class rosters",
        "School-wide reports on attendance, grades, and at-risk students",
        "View teacher performance and workload distribution",
        "Track student records, parent contacts, and enrollment history",
      ],
    },
    teacher: {
      title: "EduTrack Teacher",
      subtitle: "For Educators",
      description:
        "Everything a teacher needs to manage their classroom. Take attendance, create exams, publish grades, manage schedules, and communicate with parents — all in one place.",
      features: [
        "Mark daily attendance for each class with present, absent, late, and excused statuses",
        "Create quizzes, tests, midterms, and finals with score and letter grade tracking",
        "Publish grades that instantly appear on parent and student portals",
        "Manage daily and weekly class schedules",
        "Send and receive messages with parents about student progress",
        "Add private notes on individual students for record-keeping",
      ],
    },
    parent: {
      title: "EduTrack Parent",
      subtitle: "For Parents and Guardians",
      description:
        "Stay connected to your child's education. View grades, monitor attendance, check class schedules, and message teachers directly without waiting for report cards.",
      features: [
        "View grades and exam results for all your children in one dashboard",
        "Track attendance records with daily status and absence history",
        "See your child's full class schedule with times and rooms",
        "Message teachers directly with unread notification badges",
        "Switch between multiple children from a single parent account",
        "Monitor subject-by-subject performance and class averages",
      ],
    },
    student: {
      title: "EduTrack Student",
      subtitle: "For Students",
      description:
        "A personal academic hub for students. Check your schedule, track your grades, view attendance records, and stay on top of your classes and assignments.",
      features: [
        "View all exam scores, letter grades, and class averages",
        "Track academic performance trends across subjects",
        "Access your personal class schedule with daily and weekly views",
        "Check your own attendance record and status history",
        "Read messages and announcements from teachers",
        "See enrolled classes with teacher info and room details",
      ],
    },
  },

  // Workflow
  workflow: {
    badge: "Cross-Portal Workflow",
    title: "One action in one portal updates everyone else.",
    subtitle:
      "EduTrack removes manual handoffs by connecting every school role through shared, real-time data.",
    step: "Step",
    steps: [
      {
        title: "Admin configures operations",
        description:
          "Management teams set classes, enroll students, and assign teachers with complete structural control.",
      },
      {
        title: "Teachers run classroom execution",
        description:
          "Attendance, assessments, and class updates are recorded once and published instantly.",
      },
      {
        title: "Parents receive live visibility",
        description:
          "Families monitor attendance, grades, schedules, and progress without chasing updates.",
      },
      {
        title: "Students stay aligned daily",
        description:
          "Learners track class expectations, deadlines, and academic performance in one place.",
      },
    ],
  },

  // Features
  features: {
    badge: "Core Capabilities",
    title: "Built for schools that value clarity, speed, and trust.",
    subtitle:
      "Every detail in EduTrack is designed to reduce admin friction and improve decision quality.",
    items: [
      {
        title: "Role-focused dashboards",
        description:
          "Managers, teachers, parents, and students each get a personalized home screen showing exactly what matters to them.",
      },
      {
        title: "Attendance in one click",
        description:
          "Teachers mark attendance once per class. Parents and students see updates immediately on their own portals.",
      },
      {
        title: "Complete grade management",
        description:
          "Create exams, enter scores, assign letter grades, and publish results — parents and students see them instantly.",
      },
      {
        title: "Built-in messaging",
        description:
          "Teachers and parents communicate directly through the platform with message threads and unread notifications.",
      },
      {
        title: "Role-based access",
        description:
          "Each user only sees what they should. Teachers see their classes, parents see their children, students see their own data.",
      },
      {
        title: "Seamless data handoff",
        description:
          "No duplicate data entry. Managers set up classes once, and the data flows to teachers, parents, and students automatically.",
      },
      {
        title: "Multi-child support",
        description:
          "Parents with multiple children can switch between them and view grades, attendance, and schedules for each child.",
      },
      {
        title: "Mobile-ready by default",
        description:
          "Every portal is fully responsive with dedicated mobile navigation, so users can check in from any device.",
      },
    ],
  },

  // Stats
  stats: {
    badge: "About EduTrack",
    title: "Everything your school needs, connected in one platform.",
    subtitle:
      "From class setup and student enrollment to daily attendance, exam grading, and parent communication — EduTrack handles it all so nothing falls through the cracks.",
    items: [
      {
        value: "4 Portals",
        label: "Every Role Covered",
        description:
          "Dedicated dashboards for managers, teachers, parents, and students",
      },
      {
        value: "Grades",
        label: "Full Exam Lifecycle",
        description:
          "From exam creation to score entry to published report cards",
      },
      {
        value: "Attendance",
        label: "Daily Tracking",
        description:
          "Present, absent, late, and excused — visible across all portals",
      },
      {
        value: "Messaging",
        label: "Direct Communication",
        description:
          "Threaded conversations between teachers and parents with notifications",
      },
    ],
  },

  // CTA
  cta: {
    badge: "Production-ready portals",
    title: "Launch EduTrack across your school this week.",
    subtitle:
      "All four role portals are live and connected. Start with the portal your team needs most, then expand to full-school rollout.",
    primaryCta: "Open all portal links",
    secondaryCta: "Review implementation flow",
  },

  // Footer
  footer: {
    tagline:
      "Unified operations for administrators, teachers, parents, and students.",
    portals: "Portals",
    managementPortal: "Management Portal",
    teacherPortal: "Teacher Portal",
    parentPortal: "Parent Portal",
    studentPortal: "Student Portal",
    product: "Product",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    security: "Security",
    contact: "Contact",
    copyright: "EduTrack. All rights reserved.",
    poweredBy: "Powered by Hacker House",
    subtitle: "education platform suite",
  },
};
