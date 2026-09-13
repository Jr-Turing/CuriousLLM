import {
  LayoutDashboard,
  BookOpen,
  FileText,
  MessageSquare,
  BarChart3,
  FileQuestion,
  CalendarClock,
  Layers,
  PenSquare,
  ClipboardList,
  Mic,
  Share2,
} from "lucide-react";

export const navGroups = [
  {
    label: "Workspace",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { href: "/subjects", label: "Subjects", icon: BookOpen },
      { href: "/documents", label: "Documents", icon: FileText },
      { href: "/chat", label: "AI Chat", icon: MessageSquare },
    ],
  },
  {
    label: "Exam intelligence",
    items: [
      { href: "/pyq-analysis", label: "PYQ Analysis", icon: BarChart3 },
      { href: "/predicted-paper", label: "Predicted Paper", icon: FileQuestion },
      { href: "/study-plan", label: "Study Plan", icon: CalendarClock },
    ],
  },
  {
    label: "Practice",
    items: [
      { href: "/flashcards", label: "Flashcards", icon: Layers },
      { href: "/quiz", label: "Quiz", icon: PenSquare },
      { href: "/mock-test", label: "Mock Test", icon: ClipboardList },
      { href: "/viva", label: "Viva", icon: Mic },
      { href: "/knowledge-graph", label: "Knowledge Graph", icon: Share2 },
    ],
  },
];

export const bottomNavItems = [
  { href: "/dashboard", label: "Home", icon: LayoutDashboard },
  { href: "/subjects", label: "Subjects", icon: BookOpen },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/pyq-analysis", label: "PYQ", icon: BarChart3 },
  { href: "/study-plan", label: "Plan", icon: CalendarClock },
];
