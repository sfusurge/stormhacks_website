import { CardProps } from "./components/TracksThemes/ImageCard";

export enum SponsorTier {
  InKind,
  Bronze,
  Silver,
  Gold,
  Title
}

export type SponsorInfo = {
  imagePath: String;
  imageUrl: String;
  altText: String;
  tier: SponsorTier;
};

export const Sponsors: Array<SponsorInfo> = [
/*  {
    imagePath: "/sponsors/transoft-logo.png",
    imageUrl: "https://www.transoftsolutions.com/",
    altText: "Transoft Solution company logo",
    tier: SponsorTier.Gold
  },*/

/*  {
    imagePath: "/sponsors/scalar-logo-white.png",
    imageUrl: "https://www.scalar.com/",
    altText: "Scalar company logo",
    tier: SponsorTier.Title
  },*/

/*  {
    imagePath: "/sponsors/bcjobs-logo.png",
    imageUrl: "https://www.bcjobs.ca/",
    altText: "BC Jobs company logo",
    tier: SponsorTier.Silver
  },*/

/*  {
    imagePath: "/sponsors/defang-logo.png",
    imageUrl: "https://defang.io/",
    altText: "Defang Software Labs company logo",
    tier: SponsorTier.Bronze
  },*/
/*  {
    imagePath: "/sponsors/powerex-logo.png",
    imageUrl: "https://www.powerex.com/",
    altText: "Powerex Energy company logo",
    tier: SponsorTier.Bronze
  },*/

  {
    imagePath: "/sponsors/mlh-logo.png",
    imageUrl: "https://www.mlh.com/",
    altText: "Major League Hacking logo",
    tier: SponsorTier.Gold
  },

/*  {
    imagePath: "/sponsors/github-logo-white.png",
    imageUrl: "https://www.github.com/",
    altText: "Github Company logo",
    tier: SponsorTier.Bronze
  },*/
  {
    imagePath: "/sponsors/jam-logo-color.png",
    imageUrl: "https://www.jam.dev/",
    altText: "Jam Company logo",
    tier: SponsorTier.InKind
  },

/*  {
    imagePath: "/sponsors/echo3D-logos.png",
    imageUrl: "https://www.echo3d.com/",
    altText: "echo3D 3D asset management company logo",
    tier: SponsorTier.InKind
  },*/

/*  {
    imagePath: "/sponsors/verbwire-logo.png",
    imageUrl: "https://www.verbwire.com/",
    altText: "Verbwire sharing logo",
    tier: SponsorTier.Bronze
  },*/

/*  {
    imagePath: "/sponsors/evo-logo.png",
    imageUrl: "https://www.evo.ca/",
    altText: "Evo car sharing logo",
    tier: SponsorTier.InKind
  },*/

  {
    imagePath: "/sponsors/sfss-logo-color.png",
    imageUrl: "https://sfss.ca/",
    altText: "Simon Fraser Student Society Logo",
    tier: SponsorTier.Gold
  },
/*  {
    imagePath: "/sponsors/sfu-bookstore.png",
    imageUrl: "https://shop.sfu.ca/",
    altText: "Simon Fraser Student Society Bookstore Logo",
    tier: SponsorTier.InKind
  },*/
  {
    imagePath: "/sponsors/sfu-csss-logo.png",
    imageUrl: "https://sfucsss.org/",
    altText: "Computing Systems Student Society Logo",
    tier: SponsorTier.InKind
  },
  {
    imagePath: "/sponsors/standout-stickers-logo.png",
    imageUrl: "http://hackp.ac/mlh-StandOutStickers-hackathons",
    altText: "Standout Stickers company logo",
    tier: SponsorTier.InKind
  },
/*  {
    imagePath: "/sponsors/steves-poke.png",
    imageUrl: "https://www.stevespokebar.ca/",
    altText: "Steve's Poke Bar company logo",
    tier: SponsorTier.Bronze
  },*/
/*  {
    imagePath: "/sponsors/Wizeprep_logo_in_kind.png",
    imageUrl: "https://www.wizeprep.com/",
    altText: "Wizeprep company logo",
    tier: SponsorTier.InKind
  },*/
  {
    imagePath: "/sponsors/wolfram-corporate-logo-horz-med.png",
    imageUrl: "https://www.wolframalpha.com/",
    altText: "Wolfram Alpha company logo",
    tier: SponsorTier.InKind
  },
  {
    imagePath: "/sponsors/trulioo-logo.png",
    imageUrl: "https://www.trulioo.com/",
    altText: "Trulioo company logo", 
    tier: SponsorTier.Silver
  },
  {
    imagePath: "/sponsors/nord-security-logo.svg",
    imageUrl: "https://nordsecurity.com/",
    altText: "Nord Security company logo",
    tier: SponsorTier.InKind
  },
/*  {
    imagePath: "/sponsors/nordvpn-logo.png", 
    imageUrl: "https://www.nordvpn.com",
    altText: "NordVPN company logo", 
    tier: SponsorTier.InKind
  },*/
/*  {
    imagePath: "/sponsors/Incogni_Logo.jpg", 
    imageUrl: "https://incogni.com",
    altText: "Incogni company logo", 
    tier: SponsorTier.InKind
  },*/
/*  {
    imagePath: "/sponsors/nordpass_logo.svg", 
    imageUrl: "https://nordpass.com",
    altText: "NordPass company logo", 
    tier: SponsorTier.InKind
  }*/
];

export type FrequentlyAskedQuestionsInfo = {
  title: string;
  answer: string;
};

export const FrequentlyAskedQuestions: Array<FrequentlyAskedQuestionsInfo> = [
  {
    title: "What is this event about?",
    answer: `A hackathon is an event where teams collaborate on a project, or "hack", given a certain time limit. At StormHacks, teams of 1-4 collaborate over 24 hours to brainstorm and innovate solutions to real-world problems. Or they are free to work on whatever fun/silly ideas they have in mind, the door is open. We will be inviting various mentors, judges, and guests working in the tech industry to share their expertise and knowledge to our participants. Winning teams will be selected based on various criteria that will be revealed closer to our event.`,
  },
  {
    title: "What experience do I need?",
    answer:
      "Don't even worry about it. Our event is open to any student coming from any background/major.",
  },
  {
    title: "Who can participate?",
    answer:
      "Our event is open to any student coming from any background/major. As long as you (or your team, if you have one already) can attend in person, you're welcome to join!",
  },
  {
    title: "Can I find teammates at the event?",
    answer:
      "It's completely up to you. If you plan to join StormHacks with a team ahead of time, please make sure that all group members sign-up together and mention each other in your application. We will also be facilitating team-formation at our event, so if you are short on members and/or want work with bright-minded peers, look forward to that :)",
  },
  {
    title: "When can I start working on my project?",
    answer:
      "You may begin to work on your project/idea once the hacking period commences on the first day of the event.",
  },
  {
    title: "What are we allowed to work on?",
    answer:
      "We will be providing hackers with themes/topics at the opening ceremony of the event. Hardware projects are allowed, but we are unfortunately unable to provide any materials/supplies, so you will have to bring your own.",
  },
  {
    title: "What should I bring?",
    answer:
      "Your laptop and any cables/chargers for your devices are highly recommended. If your project requires any additional equipment or hardware you will be responsible for bringing it in. We also recommend you to bring personal toiletries such as such a tooth brush and toothpaste if you plan on staying overnight.",
  },
  {
    title: "When and where is the event happening?",
    answer:
      "The event is taking place on May 18-19th, 2024. The venue is the Student Union Building on SFU's Burnaby campus",
  },
  {
    title: "What does it cost to get in?",
    answer:
      "Nothing! StormHacks 2024 is completely free to join. We will be providing meals throughout the event, but if you would like to purchase your own food during our event, you are free to do so.",
  },
  {
    title: "What kind of activities will there be?",
    answer:
      "The hackathon will be packed with activities such as wellness workshops, games, trivia and more all throughout the event! You can even win some prizes through some of our mini contests.",
  },
  {
    title: "Is this a virtual or in-person hackathon?",
    answer:
      "StormHacks 2024 will be completely in-person, taking place on the SFU Burnaby campus. There will be no virtual participation this year.",
  },
  {
    title: "Do you offer travel reimbursements?",
    answer:
      "We unfortunately do not provide travel reimbursements for this event.",
  },
  {
    title: "Do I have to stay overnight?",
    answer:
      "No, you are free to leave the premises overnight, but make sure that your whole team are present during the daytime portions of our event and judging period.",
  },
  {
    title: "Have more questions?",
    answer:
      "Contact us through any of our social media links or at info@stormhacks.com!",
  },
];

export const TracksAndThemes: CardProps[] = [
  {
    altText: "1st main track: Health and Wellness",
    imageUrl: "/images/card-img.svg",
    subtitle: "",
    title: "Health and Wellness",
    description:
      "Explore innovative solutions that enhance personal health and promote wellness. This track encourages participants to develop tools aimed at improving physical, mental and emotional wellbeing. ",
  },
  {
    altText: "2nd main track: Sustainability and the Environment",
    imageUrl: "/images/card-img.svg",
    subtitle: "",
    title: "Sustainability and the Environment",
    description:
      "Create sustainable technologies that protect our environment and conserve resources. This track challenges hackers to devise eco-friendly solutions that address problems like climate change, waste reduction and renewable energy.",
  },
  {
    altText: "Third main track: Social Connectivity",
    imageUrl: "/images/card-img.svg",
    subtitle: "",
    title: "Social Connectivity",
    description:
      "Develop applications that empower people and strengthen communities through digital connectivity. This track is perfect for projects aimed at improving community engagement, enhancing digital interactions and facilitating better communication technologies.",
  },
];

export const WhySponsor: CardProps[] = [
  {
    altText: "Sponsor Stormhacks to recruit for the future",
    imageUrl: "/images/card-img.svg",
    subtitle: "",
    title: "Recruit for the future",
    description:
      "Get exposure and access to a huge pool of top technical talent across the Canadian West Coast. Find the next set of candidates who will grow your competitive advantage.",
  },
  {
    altText:
      "Promote and receive feedback when you choose to sponsor Stormhacks!",
    imageUrl: "/images/card-img.svg",
    subtitle: "",
    title: "Promotion + Receive Feedback",
    description:
      "With options for sponsoring your own prize & challenge, you can highlight the potential of your product or API as hackers gain hands-on experience using your platform.",
  },
  {
    altText:
      "Make a lasting impression on potential candidates when you support Stormhacks!",
    imageUrl: "/images/card-img.svg",
    subtitle: "",
    title: "Make an Impression",
    description:
      "Boost your brand awareness by sharing company swag, or sponsoring a fun event. Directly engage with hackers from Vancouver's growing tech community and beyond!",
  },
];

export type ExecutivesInfo = {
  name: string;
  position: string;
  linkedin: string;
  image: string;
};

export const Executives: ExecutivesInfo[] = [
  {
    name: "David Lowe",
    position: "Co-President",
    linkedin: "https://www.linkedin.com/in/davidrobertlowe/",
    image: "execs/davidlowe.png",
  },
  {
    name: "Johnson Luong",
    position: "Co-President",
    linkedin: "https://www.linkedin.com/in/johnson-luong/",
    image: "execs/johnsonluong.jpg",
  },
  {
    name: "Alexandra Svoboda",
    position: "Director of HR",
    linkedin: "https://www.linkedin.com/in/a-svoboda/",
    image: "execs/Alexandra_Svoboda.jpg",
  },
  {
    name: "Kateleen Paran",
    position: "HR Coordinator",
    linkedin: "https://www.linkedin.com/in/kateleenparan/",
    image: "execs/kateleen_paran.jpg",
  },
  {
    name: "Darian Wong",
    position: "HR Coordinator",
    linkedin: "https://www.linkedin.com/in/thedarianwong/",
    image: "execs/Darian_Wong.jpeg",
  },
  {
    name: "Angela Kurian",
    position: "HR Coordinator",
    linkedin: "https://www.linkedin.com/in/angela-mary-kurian-a84a09251/",
    image: "execs/Angela_Kurian.jpg",
  },
  {
    name: "Matthew Wong",
    position: "Co-Director of Logistics",
    linkedin: "https://www.linkedin.com/in/matthewwong1129/",
    image: "execs/matthewwong.jpg",
  },
  {
    name: "Mukhiil Baskaran",
    position: "Co-Director of Logistics",
    linkedin: "https://www.linkedin.com/in/mukhiil-baskaran/",
    image: "execs/Mukhiil_Basaran.png",
  },
  {
    name: "Monishka Gautam",
    position: "Logistics Coordinator",
    linkedin: "https://www.linkedin.com/in/monishka-gautam/",
    image: "execs/Monishka_Gautam.jpg",
  },
  {
    name: "Maria Zia",
    position: "Logistics Coordinator",
    linkedin: "https://www.linkedin.com/in/maria-zia-9a6200259/",
    image: "execs/Maria_Zia.jpg",
  },
  {
    name: "Maria Yufe",
    position: "Logistics Coordinator",
    linkedin: "https://www.linkedin.com/in/maria-yufe/",
    image: "execs/Maria_yufe.jpg",
  },
  {
    name: "Kylie Seto",
    position: "Logistics Coordinator",
    linkedin: "https://www.linkedin.com/in/kylie-seto/",
    image: "execs/kylieseto.jpg",
  },
  {
    name: "Christina Raganit",
    position: "Director of Visual Design",
    linkedin: "https://www.linkedin.com/in/christinaraganit/",
    image: "execs/davidlowe.png",
  },
  {
    name: "Arriyan Ali",
    position: "Visual Design Coordinator",
    linkedin: "https://www.linkedin.com/in/arriyanali/",
    image: "execs/Arryian_ali.png",
  },
  {
    name: "Linda Jolly",
    position: "Visual Design Coordinator",
    linkedin: "https://www.linkedin.com/in/linda-jolly-5849a5224/",
    image: "execs/lindajolly.jpeg",
  },
  {
    name: "Natalie Kayda",
    position: "Visual Design Coordinator",
    linkedin: "www.linkedin.com/in/nataliekayda",
    image: "execs/Natalie_Kayda.jpg",
  },
  {
    name: "Angela Shen",
    position: "Visual Design Coordinator",
    linkedin: "https://www.linkedin.com/in/angelashenca/",
    image: "execs/angela_shen.jpg",
  },
  {
    name: "Tinay Yernazarova",
    position: "Visual Design Coordinator",
    linkedin: "https://www.linkedin.com/in/tinai-yernazarova/",
    image: "execs/tinay_yernazarova.jpg",
  },
  {
    name: "Jas Mangat",
    position: "Director of Social Media",
    linkedin: "www.linkedin.com/in/jas-mangat ",
    image: "execs/Jas_Mangat.JPG",
  },
  {
    name: "Kaia Do",
    position: "Social Media Coordinator",
    linkedin: "https://www.linkedin.com/in/khuedo04/",
    image: "execs/kaia.jpg",
  },
  {
    name: "Sabina Yelyubayeva",
    position: "Social Media Coordinator",
    linkedin: "www.linkedin.com/in/sabina-yel",
    image: "execs/sabi.jpeg",
  },
  {
    name: "Josie Trinh",
    position: "Social Media Coordinator",
    linkedin: "https://www.linkedin.com/in/nghi-trinh-josie/",
    image: "execs/josie.JPG",
  },
  {
    name: "Anoushka Chavan",
    position: "Director of Marketing",
    linkedin: "",
    image: "execs/anoushka_chavan.jpg",
  },
  {
    name: "Alicia LeClercq",
    position: "Marketing Coordinator",
    linkedin: "https://www.linkedin.com/in/alicialeclercq/",
    image: "execs/Alicia_LeClercq.png",
  },
  {
    name: "Revika Jain",
    position: "Co-Director of ER",
    linkedin: "https://www.linkedin.com/in/revika-jain/",
    image: "execs/revika_jain.jpg",
  },
  {
    name: "Rosa Chen",
    position: "Co-Director of ER",
    linkedin: "https://www.linkedin.com/in/rosaychen/",
    image: "execs/rosa_chen.jpg",
  },
  {
    name: "Varghese Bobus",
    position: "ER Coordinator",
    linkedin: "https://www.linkedin.com/in/vbobus/",
    image: "execs/varghese.jpg",
  },
  {
    name: "Noor Eeman",
    position: "ER Coordinator",
    linkedin: "https://www.linkedin.com/in/nooreeman/",
    image: "execs/Noor.jpeg",
  },
  {
    name: "Sakshi Wadhwa",
    position: "Director of Merchandise",
    linkedin: "https://www.linkedin.com/in/sakshiwadhwa123/",
    image: "execs/Sakshi_Wadhwa.PNG",
  },
  {
    name: "Raghav Ahuja",
    position: "Merchandise Coordinator",
    linkedin: "https://www.linkedin.com/in/ahuja-raghav/",
    image: "execs/Raghav.jpg",
  },
  {
    name: "Triane Tambay",
    position: "Director of Projects",
    linkedin: "https://www.linkedin.com/in/triane-tambay/",
    image: "execs/triane.png",
  },
  {
    name: "Elsa Sinuhaji",
    position: "Projects Coordinator",
    linkedin: "https://www.linkedin.com/in/elsa-sinuhaji-5124151a4/",
    image: "execs/Elsa_Sinuhaji.jpg",
  },
  {
    name: "Vicky Xu",
    position: "Director of Finance",
    linkedin: "https://www.linkedin.com/in/vickykxu/",
    image: "execs/Vicky.JPG",
  },
  {
    name: "Samiha Raida",
    position: "Finance Coordinator",
    linkedin: "https://www.linkedin.com/in/samiharaida/",
    image: "execs/samiha_rahida.jpg",
  },
  {
    name: "Christopher Fong",
    position: "Director of Technology",
    linkedin: "https://www.linkedin.com/in/chrisfong604/",
    image: "execs/christopher_fong.jpg",
  },
  {
    name: "Kevin Shi",
    position: "Developer",
    linkedin: "https://www.linkedin.com/in/kevinshi10/",
    image: "execs/kevin_shi.png",
  },
  {
    name: "Christina Raganit",
    position: "Director of Visual Design",
    linkedin: "https://www.linkedin.com/in/christinaraganit/",
    image: "/execs/Christina_Raganit.jpg",
  },
  {
    name: "Brendan Shen",
    position: "Developer",
    linkedin: "https://www.linkedin.com/in/brendan-shen/",
    image: "execs/Brendan_Shen.jpg",
  },
  {
    name: "Jenna Lee",
    position: "Developer",
    linkedin: "https://www.linkedin.com/in/jennaolee/",
    image: "execs/Jenna_Lee.jpeg",
  },
  {
    name: "Ayana Hussain",
    position: "Developer",
    linkedin: "https://www.linkedin.com/in/ayana-hussain/",
    image: "execs/ayana_h.jpeg",
  },
];
