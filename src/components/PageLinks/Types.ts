export enum PageLinkType {
    Home,
    About,
    Sponsors,
    FAQ,
    Surge,
    CodeOfConduct,
    Email 
}

// TODO: Update with the correct href values
export const PageLinkTypeInfo: Record<PageLinkType, { name: string, href: string }> = {
    [PageLinkType.Home]: { name: "Home", href: "#" },
    [PageLinkType.About]: { name: "About", href: "#about" },
    [PageLinkType.Sponsors]: { name: "Sponsors", href: "#sponsors" },
    [PageLinkType.FAQ]: { name: "FAQ", href: "#faq" },
    [PageLinkType.Surge]: { name: "Surge", href: "#surge" },
    [PageLinkType.CodeOfConduct]: { name: "Code Of Conduct", href: "#code-of-conduct" },
    [PageLinkType.Email]: { name: "Email Us", href: "#email" },
}