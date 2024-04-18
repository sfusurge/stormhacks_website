export enum PageLinkType {
  Home,
  About,
  Sponsors,
  FAQ,
  Surge,
  CodeOfConduct,
  Email,
}

// TODO: Update with the correct href values
export const PageLinkTypeInfo: Record<
  PageLinkType,
  { name: string; href: string }
> = {
  [PageLinkType.Home]: { name: "Home", href: "#" },
  [PageLinkType.About]: { name: "About", href: "#about" },
  [PageLinkType.Sponsors]: { name: "Sponsors", href: "#sponsors" },
  [PageLinkType.FAQ]: { name: "FAQ", href: "#faq" },
  [PageLinkType.Surge]: { name: "SFU Surge", href: "https://www.sfusurge.com" },
  [PageLinkType.CodeOfConduct]: {
    name: "Code Of Conduct",
    href: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf",
  },
  [PageLinkType.Email]: {
    name: "Email Us",
    href: "mailto:info@stormhacks.com",
  },
};
