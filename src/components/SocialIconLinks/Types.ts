import  SocialIcon  from "@/../public/images/social-icon.svg"

export enum SocialLinkType {
    Email,
    GitHub,
    Facebook,
    Instagram,
    LinkedIn, 
}

export const SocialLinkTypeInfo: Record<SocialLinkType, { name: string, icon: string; href: string }> = {
    [SocialLinkType.Email]: { name: "Email", icon: SocialIcon, href: "https://stormhacks.com/" },
    [SocialLinkType.GitHub]: { name: "GitHub", icon: SocialIcon, href: "https://github.com/sfusurge" },
    [SocialLinkType.Facebook]: { name: "Facebook", icon: SocialIcon, href: "https://www.facebook.com/sfusurge/" },
    [SocialLinkType.Instagram]: { name: "Instagram", icon: SocialIcon, href: "https://www.instagram.com/sfusurge/?hl=en" },
    [SocialLinkType.LinkedIn]: { name: "Linkedin", icon: SocialIcon, href: "https://ca.linkedin.com/company/sfu-surge" },
};
