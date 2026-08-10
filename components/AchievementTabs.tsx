"use client";

import { useState } from "react";
import type { AchievementGroup } from "@/lib/profile-types";

export default function AchievementTabs({ groups }: { groups: AchievementGroup[] }) {
  const [active, setActive] = useState(groups[0]?.key ?? "jabatan");
  const activeGroup = groups.find((g) => g.key === active) ?? groups[0];

  return (
    <>
      <div className="ach-tabs">
        {groups.map((g) => (
          <button
            key={g.key}
            className={`ach-tab${g.key === active ? " active" : ""}`}
            onClick={() => setActive(g.key)}
          >
            {g.label}
          </button>
        ))}
      </div>
      <div className="ach-panel active">
        {activeGroup?.items.map((item, i) => (
          <div className="ach-card" key={i}>
            <div className="ic">{i + 1}</div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </>
  );
}
