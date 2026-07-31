"use client";

import { useReducedMotion } from "framer-motion";
import { Home, User, Briefcase, FolderKanban, Wrench, Mail } from "lucide-react";
import { MagnificationDock, type DockItemData } from "./MagnificationDock";

const sections = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "projects", label: "Projects", Icon: FolderKanban },
  { id: "skills", label: "Skills", Icon: Wrench },
  { id: "contact", label: "Contact", Icon: Mail },
];

export function DockNav() {
  const reduce = useReducedMotion();

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    } else {
      // On a subpage the section anchors live on the home page.
      window.location.assign(`/#${id}`);
    }
  };

  const items: DockItemData[] = sections.map((s, i) => ({
    icon: <s.Icon className="h-5 w-5" strokeWidth={2.25} />,
    label: s.label,
    onClick: () => go(s.id),
    // Alternate a couple of post-it yellow tiles into the row.
    className: i % 2 === 1 ? "bg-yellow" : "bg-paper",
  }));

  return (
    <div className="fixed bottom-3 left-1/2 z-50 -translate-x-1/2 sm:bottom-5">
      <MagnificationDock
        items={items}
        baseItemSize={44}
        // With reduced motion, disable the size magnification so it stays still.
        magnification={reduce ? 44 : 64}
        distance={190}
        panelHeight={60}
        dockHeight={110}
        spring={reduce ? { mass: 0.1, stiffness: 400, damping: 40 } : { mass: 0.1, stiffness: 150, damping: 12 }}
      />
    </div>
  );
}
