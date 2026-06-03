export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type NavChapter = {
  id: string;
  label: string;
  description: string;
  items: NavItem[];
};
