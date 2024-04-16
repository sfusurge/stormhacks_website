import { CardProps } from "./components/TracksThemes/ImageCard";

export type SponsorInfo = {
  imagePath: String;
  imageUrl: String;
  altText: String;
  tier?: String;
};

export const Sponsors: Array<SponsorInfo> = [
  {
    imagePath: "/sponsors/defang-logo.png",
    imageUrl: "https://defang.io/",
    altText: "Defang Software Labs company logo",
  },
  // {
  //   imagePath: "/sponsors/ea-logo.png",
  //   imageUrl: "https://www.ea.com/",
  //   altText: "Electronic Arts Company logo",
  // },
  {
    imagePath: "/sponsors/evo-logo.png",
    imageUrl: "https://www.evo.ca/",
    altText: "Evo car sharing logo",
  },
  {
    imagePath: "/sponsors/github-logo-white.png",
    imageUrl: "https://www.github.com/",
    altText: "Github Company logo",
  },
  {
    imagePath: "/sponsors/jam-logo-color.png",
    imageUrl: "https://www.jam.dev/",
    altText: "Jam Company logo",
  },
  {
    imagePath: "/sponsors/bcjobs-logo.png",
    imageUrl: "https://www.bcjobs.ca/",
    altText: "BC Jobs company logo",
  },
  {
    imagePath: "/sponsors/redbull-logo.svg",
    imageUrl: "https://www.redbull.com/",
    altText: "Red Bull company logo",
  },
  {
    imagePath: "/sponsors/echo3D-logos.png",
    imageUrl: "https://www.echo3d.com/",
    altText: "echo3D 3D asset management company logo",
  },
  {
    imagePath: "/sponsors/mlh-logo.png",
    imageUrl: "https://www.mlh.com/",
    altText: "Major League Hacking logo",
  },
  {
    imagePath: "/sponsors/powerex-logo.png",
    imageUrl: "https://www.powerex.com/",
    altText: "Powerex Energy company logo",
  },
  {
    imagePath: "/sponsors/scalar-logo-white.png",
    imageUrl: "https://www.scalar.com/",
    altText: "BC Jobs company logo",
  },
  {
    imagePath: "/sponsors/sfss-logo-color.png",
    imageUrl: "https://sfss.ca/",
    altText: "Simon Fraser Student Society Logo",
  },
  {
    imagePath: "/sponsors/sfu-bookstore.png",
    imageUrl: "https://shop.sfu.ca/",
    altText: "Simon Fraser Student Society Bookstore Logo",
  },
  {
    imagePath: "/sponsors/sfu-csss-logo.png",
    imageUrl: "https://sfucsss.org/",
    altText: "Computing Systems Student Society Logo",
  },
  {
    imagePath: "/sponsors/standout-stickers-logo.png",
    imageUrl: "http://hackp.ac/mlh-StandOutStickers-hackathons",
    altText: "Standout Stickers company logo",
  },
  {
    imagePath: "/sponsors/steves-poke.jpg",
    imageUrl: "https://www.stevespokebar.ca/",
    altText: "Steve's Poke Bar company logo",
  },
  {
    imagePath: "/sponsors/wolfram-logo.svg",
    imageUrl: "https://www.wolframalpha.com/",
    altText: "Wolfram Alpha company logo",
  },
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
    altText: "Track 1 Image Alt Text",
    imageUrl: "/images/card-img.svg",
    subtitle: "Track 1",
    title: "Track 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra  sem vel lectus posuere cursus. Sed eu diam ullamcorper, sagittis mauris  sit amet.",
  },
  {
    altText: "Track 2 Image Alt Text",
    imageUrl: "/images/card-img.svg",
    subtitle: "Track 2",
    title: "Track 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra  sem vel lectus posuere cursus. Sed eu diam ullamcorper, sagittis mauris  sit amet.",
  },
  {
    altText: "Track 3 Image Alt Text",
    imageUrl: "/images/card-img.svg",
    subtitle: "Track 3",
    title: "Track 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra  sem vel lectus posuere cursus. Sed eu diam ullamcorper, sagittis mauris  sit amet.",
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
