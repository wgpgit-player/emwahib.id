export interface HeroStat {
  num: string;
  label: string;
}

export interface EducationItem {
  key: string;
  year: string;
  name: string;
  logo: string;
}

export interface AchievementGroup {
  key: "jabatan" | "program" | "training" | "sertifikasi";
  label: string;
  items: string[];
}

export interface FocusItem {
  title: string;
  desc: string;
}

export interface Profile {
  name: string;
  titles: string;
  heroHeadline: string;
  heroHeadlineHighlight: string;
  heroLede: string;
  heroPhoto: string;
  heroStats: HeroStat[];
  heroStatsNote: string;

  aboutHeading: string;
  aboutPhotos: string[]; // 6 photos for the framed mosaic (3 left, 3 right)
  aboutNarrative: {
    label: string;
    text: string;
    tag: string;
  }[];

  education: EducationItem[];

  achievements: AchievementGroup[];

  focusHeading: string;
  focusItems: FocusItem[];
  focusPhoto: string;
  focusBadge: string;

  quote1: string;
  quote1Who: string;
  quote2: string;
  quote2Who: string;

  contactPhoto: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
}
