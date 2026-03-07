export interface Translations {
  nav: {
    services: string;
    workflow: string;
    features: string;
    about: string;
    admin: string;
    openPortals: string;
    docs: string;
    changelog: string;
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
  docs: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    openPortal: string;
    sections: {
      id: string;
      group: string;
      title: string;
      url?: string;
      content: string;
    }[];
  };
  changelog: {
    badge: string;
    title: string;
    subtitle: string;
    entries: {
      date: string;
      version: string;
      title: string;
      tag: string;
      changes: string[];
    }[];
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
    docs: "Docs",
    changelog: "Changelog",
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

  docs: {
    title: "EduTrack Documentation",
    subtitle: "Everything you need to know about each portal — from first login to daily operations.",
    searchPlaceholder: "Search documentation...",
    openPortal: "Open this portal",
    sections: [
      {
        id: "getting-started",
        group: "Overview",
        title: "Getting Started",
        content: `EduTrack is a school management platform with four interconnected portals — one for each role in your school. Here's how to get up and running.\n\n## Step 1: Manager sets up the school\n\nEverything begins in the **Management Portal**. The school administrator logs in and configures the foundational data:\n\n- **Create classes** — Define each class with a name, grade level, subject, and room number.\n- **Add teachers** — Register teacher accounts with their name and email, then assign them to one or more classes.\n- **Enroll students** — Add students to the system and assign them to their classes. Each student gets linked to a parent record.\n- **Register parents** — Create parent records with their contact information and link them to their children.\n\n> **Important:** Teachers, parents, and students cannot sign up on their own. The manager must create their records first. This invitation-based model keeps access secure and controlled.\n\n## Step 2: Users claim their accounts\n\nOnce the manager creates a record, the user can visit their respective portal and sign up using the **same email address** the manager registered.\n\n- The system checks for a matching invitation before allowing signup.\n- After signing up, the user confirms their email and is linked to their pre-created record.\n- Password reset is available via email on all portals.\n\n## Step 3: Daily operations begin\n\nWith everyone onboarded, the daily workflow kicks in:\n\n1. **Teachers** mark attendance each morning and record grades after exams.\n2. **Parents** check their children's attendance, grades, and schedules throughout the day.\n3. **Students** review their own performance, upcoming exams, and class schedules.\n4. **Managers** monitor school-wide metrics and intervene when students are at risk.\n\n## Step 4: Data stays in sync\n\nEduTrack eliminates manual data handoffs. When a teacher marks a student as absent, both the parent and student dashboards update immediately. When grades are published, they flow to every connected portal in real time. No spreadsheets, no manual reports, no duplicated data entry.`,
      },
      {
        id: "authentication",
        group: "Overview",
        title: "Authentication & Security",
        content: `EduTrack uses a secure, invitation-based authentication system. No user can access the platform without being pre-registered by a school administrator.\n\n## How signup works\n\nEach portal (Teacher, Parent, Student) follows the same pattern:\n\n1. **Manager creates the record** — The administrator adds the user in the Management Portal with their name, email, and role-specific details.\n2. **User visits the portal** — The user goes to their portal's signup page and enters their email and a password.\n3. **System validates the invitation** — Behind the scenes, EduTrack checks if a matching record exists. If no record is found, signup is rejected.\n4. **Email confirmation** — After successful signup, a confirmation email is sent. The user clicks the link to verify their account.\n5. **Account is claimed** — The user's auth account is linked to their pre-created record, and they gain access to their dashboard.\n\n## Password management\n\nAll portals support a full password reset flow:\n\n- Click **"Forgot password?"** on the login page.\n- Enter your registered email address.\n- A reset link is sent to your inbox.\n- Click the link and set a new password.\n- You'll be redirected to the login page to sign in with your new password.\n\n## Role-based access control\n\nEduTrack enforces strict data boundaries:\n\n- **Managers** see all school data — every class, teacher, student, and parent.\n- **Teachers** see only their assigned classes and the students in those classes.\n- **Parents** see only their linked children's data — grades, attendance, and schedules.\n- **Students** see only their own academic records.\n\nThis is enforced at the database level using Row-Level Security (RLS) policies. Even if someone manipulates the frontend, they cannot access data outside their role.\n\n## Session management\n\n- Sessions are managed via secure HTTP-only cookies.\n- Tokens are automatically refreshed to prevent session expiry during active use.\n- Signing out clears the session on both the client and server.`,
      },
      {
        id: "manager-portal",
        group: "Portals",
        title: "Management Portal",
        url: "https://edutrack-manager.vercel.app/",
        content: `The Management Portal is the administrative backbone of EduTrack. School administrators use it to set up and monitor the entire school.\n\n## Dashboard\n\nThe home screen shows three key metrics at a glance:\n\n- **Total classes** — How many classes are currently configured.\n- **Total teachers** — Number of registered teachers.\n- **Total students** — Number of enrolled students.\n\nEach metric card is clickable and takes you directly to the corresponding management page.\n\n## Class management\n\nClasses are the core organizational unit in EduTrack. From the Classes page, you can:\n\n- **Create a new class** — Set the class name, grade level, subject, room number, and assign a teacher.\n- **Edit existing classes** — Update any field including the assigned teacher.\n- **Delete classes** — Remove classes that are no longer needed (this also removes all associated enrollment data).\n- **View class rosters** — See which students are enrolled in each class.\n\n> **Tip:** Set up all your classes before adding students. This way you can assign students to classes as you create their records.\n\n## Teacher management\n\nThe Teachers page lets you manage your teaching staff:\n\n- **Add teachers** — Register a teacher with their name and email address.\n- **View teacher profiles** — Click on any teacher to see their detailed profile including:\n  - Assigned classes and subjects\n  - Number of students across all classes\n  - Summary and detailed performance statistics\n- **Teacher stats** — See workload distribution, class counts, and student counts per teacher.\n\n## Student management\n\nThe Students page provides a comprehensive view of all enrolled students:\n\n- **View all students** — A list of every student with their average grade and attendance rate pre-calculated.\n- **Student profiles** — Click on any student to see:\n  - Overall GPA and attendance rate\n  - Per-class grade averages\n  - Complete grade history with every exam score\n  - Full attendance records by date\n  - Teacher notes and annotations\n  - Exam schedule and results\n\n## School-wide oversight\n\nThe Management Portal gives you a bird's-eye view of your school. Use teacher and student profiles to identify patterns — which classes have the highest attendance, which students need intervention, and how workload is distributed across your teaching staff.`,
      },
      {
        id: "teacher-portal",
        group: "Portals",
        title: "Teacher Portal",
        url: "https://edutrack-teacher.vercel.app/login",
        content: `The Teacher Portal is designed for daily classroom management. Teachers can track attendance, manage grades, communicate with parents, and monitor student performance — all from one place.\n\n## Dashboard\n\nThe home screen gives teachers a snapshot of their day:\n\n- **Personalized greeting** with the teacher's name.\n- **Action items** — Tasks that need attention.\n- **Today's schedule** — Classes happening today with room numbers and times.\n- **Attendance summary** — Present, absent, late, and excused counts for the day.\n- **Class snapshot** — Overall grades, at-risk students, and top performers.\n- **Recent activity** — A feed of the latest actions across your classes.\n\n## Attendance\n\nThe attendance page is where teachers record daily attendance for each class:\n\n1. **Select a class** from the dropdown at the top.\n2. **Choose the date** using the date picker (defaults to today).\n3. **Mark each student** as Present, Absent, Late, or Excused.\n4. **Bulk action** — Use "Mark All Present" to quickly set everyone as present, then adjust individual students as needed.\n5. **Save** — Confirm the attendance records. An undo option is available if you make a mistake.\n\nThe attendance summary bar shows a real-time breakdown of statuses before you save.\n\n> **Tip:** Mark all present first, then change only the exceptions. This is the fastest workflow for large classes.\n\n## Grades\n\nThe grade management system supports the full exam lifecycle:\n\n### Creating exams\n- Click **"New Exam"** and set the exam name, type (Quiz, Test, Midterm, Final), date, and maximum score.\n- Edit or delete exams anytime before publishing.\n\n### Entering scores\n- Select a class and exam to open the grade entry table.\n- Enter each student's score. Letter grades are calculated automatically.\n- The summary section shows the class average, minimum, and maximum scores.\n\n### Publishing grades\n- **Save as Draft** — Stores grades without making them visible to parents or students.\n- **Publish** — Makes the grades live on parent and student portals immediately.\n- A confirmation dialog warns you if any scores are missing before publishing.\n\n## Student profiles\n\nClick on any student to see their complete academic profile:\n\n- Overall average grade and attendance rate.\n- Per-class performance breakdowns.\n- Full grade history for every exam.\n- Attendance records by date.\n- Private notes — Add your own observations and notes about the student. These notes are only visible to you.\n\n## Reports & Analytics\n\nThe Reports page has four tabs:\n\n- **Class Overview** — Summary metrics across all your classes.\n- **Attendance Trends** — Historical patterns showing how attendance changes over time.\n- **Grades** — Grade distribution charts and performance visualization.\n- **At-Risk Students** — Students with grades below 65% or attendance below 80%, flagged for intervention.\n\n## Schedule\n\nA weekly calendar view showing all your classes with:\n- Day and time slots\n- Room numbers\n- Class names and subjects\n\n## Messages\n\nThe messaging system lets you communicate directly with parents:\n- View all conversations organized by student.\n- Send and receive messages in threaded conversations.\n- Stay informed about student progress discussions.`,
      },
      {
        id: "parent-portal",
        group: "Portals",
        title: "Parent Portal",
        url: "https://edutrack-parent.vercel.app/login",
        content: `The Parent Portal keeps families connected to their children's education. View grades, monitor attendance, check schedules, and message teachers — all without waiting for report cards.\n\n## Dashboard\n\nThe home screen provides an at-a-glance summary of your child's academic status:\n\n- **GPA** — Current overall grade point average.\n- **Attendance rate** — Percentage of classes attended.\n- **Class count** — Number of enrolled classes.\n- **Upcoming exams** — The next 5 scheduled exams across all classes.\n- **Today's schedule** — Classes happening today with times and rooms.\n- **Recent grades** — The last 5 graded exams with scores and letter grades.\n\n### Multi-child support\n\nIf you have multiple children in the school, a **child selector** appears at the top of every page. Click to switch between children — all data on the page updates to show the selected child's information. The selection is preserved in the URL, so you can bookmark views for specific children.\n\n## Grades\n\nThe Grades page shows a complete view of your child's academic performance:\n\n- **Organized by class** — Each class shows as a separate section with the class name, subject, and teacher.\n- **Exam details** — Every exam lists the name, date, type (quiz/test/midterm/final), raw score, maximum score, and letter grade.\n- **Class averages** — See the overall average for each class to understand relative performance.\n\n> **Note:** Only published grades appear here. Teachers may save draft grades that aren't yet visible.\n\n## Attendance\n\nMonitor your child's attendance with detailed breakdowns:\n\n- **Overall attendance rate** — A single percentage showing how often your child attends class.\n- **Per-class breakdown** — Each class shows individual counts for present, absent, late, and excused days, along with a per-class attendance percentage.\n- **Attendance summary** — Total counts across all classes for each status type.\n\n## Schedule\n\nView your child's weekly class timetable:\n\n- All classes for each day of the week.\n- Class times, subjects, and room numbers.\n- Helps you plan around your child's school day.\n\n## Messages\n\nCommunicate directly with your children's teachers:\n\n- See teachers grouped by child.\n- Open conversation threads to discuss progress, concerns, or questions.\n- Messages are delivered instantly to the teacher's portal.\n\n## Children overview\n\nIf you have multiple children, the Children page shows all of them at once:\n\n- Each child displayed as a card with their name, grade, and number of classes.\n- Quick stats: average grade percentage, attendance rate, upcoming exam count.\n- Action buttons to jump to a specific child's dashboard or grades view.`,
      },
      {
        id: "student-portal",
        group: "Portals",
        title: "Student Portal",
        url: "https://edutrack-student.vercel.app/login",
        content: `The Student Portal is a personal academic hub. Students can track their grades, check schedules, view attendance records, and stay on top of their classes.\n\n## Dashboard\n\nThe home screen shows everything a student needs at a glance:\n\n- **GPA** — Your current overall grade point average with letter grade.\n- **Attendance rate** — Percentage of classes you've attended.\n- **Enrolled classes** — Number of classes you're currently in.\n- **Upcoming exams** — The next 5 exams across all your classes.\n- **Today's schedule** — What classes you have today, with room numbers.\n- **Recent grades** — Your last 5 graded exams with scores and letter grades.\n\nIf you haven't been enrolled in any classes yet, a "Not Enrolled" message will appear — your school administrator will add you to classes.\n\n## Grades\n\nThe Grades page gives a complete view of your academic performance:\n\n- **Organized by class** — Each enrolled class shows as a separate section.\n- **Exam details** — Every graded exam shows the exam name, date, type, your score, the maximum score, and your letter grade.\n- **Class averages** — See your average for each class to track where you're strong and where you need to improve.\n\n> **Tip:** Check this page regularly after exam periods. As soon as your teacher publishes grades, they'll appear here.\n\n## Attendance\n\nKeep track of your attendance record:\n\n- **Overall rate** — Your attendance rate calculated as (present + late) / total records.\n- **Per-class breakdown** — Each class shows counts for present, absent, late, and excused days.\n- **Full record list** — Every attendance entry showing the date and your status for that day.\n\n## Schedule\n\nYour weekly class timetable at a glance:\n\n- All classes for each day of the week.\n- Subjects, room numbers, and time slots.\n- Plan your week and know where to be.\n\n## Classes\n\nThe Classes page shows all your enrolled classes in a grid:\n\n- **Class details** — Name, subject, grade level, room number.\n- **Teacher info** — Who teaches each class.\n- **Student count** — How many students are in the class.\n- Click any class to jump to its grades section.\n\n## Profile\n\nYour account and academic summary:\n\n- **Personal info** — Name, email, grade level, enrollment date.\n- **Performance stats** — Enrolled class count, GPA with letter grade, attendance rate.\n- **Parent/Guardian info** — Your linked parent or guardian's name, email, and phone number (if available).\n- **My classes** — A list of all enrolled classes with subject and teacher.\n- **Sign out** button to securely end your session.`,
      },
      {
        id: "data-flow",
        group: "Architecture",
        title: "Cross-Portal Data Flow",
        content: `One of EduTrack's core principles is that data should be entered once and flow everywhere it's needed. Here's how information moves between portals.\n\n## Enrollment flow\n\nWhen a manager enrolls a student in a class:\n\n- The student appears in the **teacher's class roster** for that class.\n- The class appears in the **student's enrolled classes** list.\n- The class appears in the **parent's child dashboard** (if the student is linked to a parent).\n- The student count on the **manager's class card** updates.\n\nAll of this happens from a single action in the Management Portal.\n\n## Attendance flow\n\nWhen a teacher marks attendance:\n\n1. Teacher selects a class, picks the date, and marks each student's status.\n2. The attendance record is saved to the database.\n3. **Parent portal** — The child's attendance page immediately reflects the new record. The overall attendance rate recalculates.\n4. **Student portal** — The student's own attendance view updates with the new entry.\n5. **Manager portal** — The student's profile shows the updated attendance rate.\n\n## Grade flow\n\nWhen a teacher publishes grades:\n\n1. Teacher creates an exam, enters scores for each student, and clicks **Publish**.\n2. The grades are marked as published in the database.\n3. **Parent portal** — The Grades page shows the new exam with scores and letter grades.\n4. **Student portal** — The student sees their score, the class average updates.\n5. **Manager portal** — The student's profile reflects the updated GPA.\n\n> **Note:** Draft grades (saved but not published) are only visible to the teacher. Parents and students won't see them until the teacher explicitly publishes.\n\n## Message flow\n\nWhen a parent sends a message to a teacher:\n\n1. The parent selects a teacher from their child's teacher list and writes a message.\n2. The teacher sees the message in their Messages page with the conversation thread.\n3. The teacher can reply, and the parent sees the response on their Messages page.\n\nMessages are organized as threads — each parent-teacher pair has a continuous conversation history.\n\n## What doesn't sync automatically\n\n- **Teacher notes** on students are private to the teacher — parents and students cannot see them.\n- **Draft grades** stay with the teacher until published.\n- **Manager login credentials** are separate from the invitation-based system used by other roles.`,
      },
      {
        id: "roles-permissions",
        group: "Architecture",
        title: "Roles & Permissions",
        content: `EduTrack has four distinct roles, each with carefully scoped permissions. Understanding what each role can and cannot do helps you manage your school effectively.\n\n## Manager\n\n**Full administrative access.** Managers can:\n\n- Create, edit, and delete classes.\n- Add and manage teacher records.\n- Enroll and manage student records.\n- Create and manage parent records.\n- View all school-wide data including every student's grades, attendance, and profile.\n- Access aggregated reports across all classes.\n\n**Cannot:** Mark attendance, enter grades, or send messages. These actions belong to teachers.\n\n## Teacher\n\n**Class-scoped access.** Teachers can:\n\n- View their assigned classes and the students in those classes.\n- Mark daily attendance for their classes.\n- Create exams and enter grades for their students.\n- Publish grades to make them visible to parents and students.\n- Send and receive messages with parents of their students.\n- Add private notes on individual students.\n- View their own schedule and profile.\n\n**Cannot:** See other teachers' classes, modify school structure, or access students not in their classes.\n\n## Parent\n\n**Child-scoped access.** Parents can:\n\n- View grades, attendance, and schedules for their linked children.\n- Send and receive messages with their children's teachers.\n- Switch between multiple children if they have more than one enrolled.\n\n**Cannot:** See other students' data, modify any records, or access school-wide information.\n\n## Student\n\n**Self-scoped access.** Students can:\n\n- View their own grades, attendance, and schedule.\n- See their enrolled classes with teacher and room info.\n- View their profile and linked guardian information.\n\n**Cannot:** See other students' data, modify any records, or send messages (messaging is between teachers and parents only).`,
      },
      {
        id: "faq",
        group: "Support",
        title: "Frequently Asked Questions",
        content: `Common questions about using EduTrack.\n\n## Can a teacher be assigned to multiple classes?\n\nYes. A teacher can be assigned to as many classes as needed. Each class appears in their dashboard, and they can switch between classes when marking attendance or entering grades.\n\n## Can a parent have multiple children?\n\nYes. Parents can have multiple children linked to their account. A child selector appears at the top of every page, letting them switch between children with one click. All data on the page updates to show the selected child.\n\n## What happens if a student changes classes?\n\nThe manager can update class enrollments at any time. When a student is moved to a new class, their new class data appears immediately on all connected portals. Historical data from the previous class is preserved.\n\n## Can teachers see each other's classes?\n\nNo. Teachers only see the classes assigned to them. This is enforced at the database level — even if a teacher tried to access another teacher's data through the API, the request would be denied.\n\n## What exam types are supported?\n\nTeachers can create four types of exams:\n- **Quiz** — Short assessments.\n- **Test** — Standard tests.\n- **Midterm** — Mid-semester exams.\n- **Final** — End-of-semester exams.\n\nEach exam has a name, date, type, and maximum score. Letter grades are calculated automatically based on the percentage score.\n\n## How are letter grades calculated?\n\nLetter grades are based on percentage scores:\n- **A** — 90% and above\n- **B** — 80–89%\n- **C** — 70–79%\n- **D** — 60–69%\n- **F** — Below 60%\n\n## What does "at-risk" mean in reports?\n\nA student is flagged as at-risk if they have:\n- An average grade **below 65%**, OR\n- An attendance rate **below 80%**.\n\nThese thresholds help teachers and managers identify students who may need additional support.\n\n## Is the platform available in other languages?\n\nThe landing page supports **English and Mongolian**. The dashboard portals currently use English. Additional language support may be added in future updates.\n\n## Can I use EduTrack on my phone?\n\nYes. All four portals are fully responsive and work on desktop, tablet, and mobile devices. No app download is needed — just open your portal URL in any modern browser.`,
      },
      {
        id: "troubleshooting",
        group: "Support",
        title: "Troubleshooting",
        content: `Solutions to common issues you might encounter.\n\n## I can't sign up — "No invitation found"\n\nThis means the school manager hasn't created your record yet. Contact your school administrator and ask them to add your email address in the Management Portal. You can only sign up after your record is created.\n\n## I forgot my password\n\nEvery portal has a "Forgot password?" link on the login page:\n\n1. Click **"Forgot password?"**\n2. Enter the email address you used to sign up.\n3. Check your inbox for a reset link (also check spam/junk folders).\n4. Click the link and set a new password.\n5. Log in with your new password.\n\n## My attendance or grades aren't showing\n\n**For parents and students:**\n- Attendance and grades only appear after a teacher records and saves them.\n- Grades must be **published** (not just saved as draft) to be visible.\n- If your teacher has recorded data but you don't see it, try refreshing the page.\n\n**For teachers:**\n- Make sure you clicked **Save** after marking attendance.\n- For grades, check if you saved as **Draft** or **Published**. Only published grades are visible to parents and students.\n\n## The page looks broken or won't load\n\n- **Clear your browser cache** and reload the page.\n- **Try a different browser** — EduTrack works best on Chrome, Firefox, Safari, and Edge.\n- **Check your internet connection** — EduTrack requires an active internet connection.\n- If the issue persists, the server may be temporarily down. Wait a few minutes and try again.\n\n## I can see the wrong child's data (Parent Portal)\n\nCheck the **child selector** at the top of the page. If you have multiple children, you may have the wrong child selected. Click the selector and switch to the correct child.\n\n## My session keeps expiring\n\nEduTrack automatically refreshes your session while you're actively using the platform. If you're being logged out frequently:\n\n- Make sure your browser allows cookies from the EduTrack domain.\n- Don't use the platform in incognito/private mode if you want persistent sessions.\n- Check if your browser has any extensions that block cookies or scripts.`,
      },
    ],
  },

  changelog: {
    badge: "Changelog",
    title: "What's New",
    subtitle: "The latest updates, improvements, and fixes across all EduTrack portals.",
    entries: [
      {
        date: "March 2026",
        version: "1.0",
        title: "EduTrack Launch — All Four Portals Live",
        tag: "launch",
        changes: [
          "Management Portal: Dashboard with class, teacher, and student management. Full CRUD for classes, individual teacher and student profiles with stats.",
          "Teacher Portal: Daily attendance tracking with bulk actions, exam creation and grade publishing, weekly schedule view, parent messaging, student profiles with notes, and 4-tab analytics reports.",
          "Parent Portal: Multi-child dashboard with GPA and attendance stats, grades and attendance views per child, weekly schedule, teacher messaging, and children overview.",
          "Student Portal: Personal dashboard with GPA and attendance metrics, grades by class, attendance records, weekly schedule, class enrollment view, and profile with guardian info.",
          "All portals use invitation-based signup — managers register users first, then teachers/parents/students claim their accounts.",
          "Cross-portal data sync: attendance and grades flow from teacher to parent and student dashboards in real time.",
          "Bilingual support (English and Mongolian) on the landing page.",
          "Fully responsive design across all portals — works on desktop, tablet, and mobile.",
        ],
      },
    ],
  },
};
