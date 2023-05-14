import { FunctionComponent, SVGProps } from "react";

import { ReactComponent as SponsorAssemblyAI } from "$asset/sponsor/assemblyai.svg";
import { ReactComponent as SponsorBGC } from "$asset/sponsor/bgc.svg";
import { ReactComponent as SponsorEcho3D } from "$asset/sponsor/echo3d.svg";
import { ReactComponent as SponsorErgonomyx } from "$asset/sponsor/ergonomyx.svg";
import { ReactComponent as SponsorGitHub } from "$asset/sponsor/github.svg";
import { ReactComponent as SponsorGoldbeckRecruiting } from "$asset/sponsor/goldbeck-recruiting.svg";
import { ReactComponent as SponsorGuusto } from "$asset/sponsor/guusto.svg";
import { ReactComponent as SponsorHSBC } from "$asset/sponsor/hsbc.svg";
import { ReactComponent as SponsorIntact } from "$asset/sponsor/intact.svg";
import { ReactComponent as SponsorIntactLab } from "$asset/sponsor/intactlab.svg";
import { ReactComponent as SponsorMLH } from "$asset/sponsor/mlh.svg";
import { ReactComponent as SponsorNNECT } from "$asset/sponsor/nnect.svg";
import { ReactComponent as SponsorRedbull } from "$asset/sponsor/redbull.svg";
import { ReactComponent as SponsorSAP } from "$asset/sponsor/sap.svg";
import { ReactComponent as SponsorSFSS } from "$asset/sponsor/sfss.svg";
import { ReactComponent as SponsorSFUBookstore } from "$asset/sponsor/sfu-bookstore.svg";
import { ReactComponent as SponsorCSSS } from "$asset/sponsor/sfu-csss.svg";
import { ReactComponent as SponsorFAS } from "$asset/sponsor/sfu-fas.svg";
import { ReactComponent as SponsorSSSS } from "$asset/sponsor/sfu-ssss.svg";
import { ReactComponent as SponsorWICS } from "$asset/sponsor/sfu-wics.svg";
import { ReactComponent as SponsorStandOutStickers } from "$asset/sponsor/standoutstickers.svg";
import { ReactComponent as SponsorStevesPokeBar } from "$asset/sponsor/stevespokebar.svg";
import { ReactComponent as SponsorStickermule } from "$asset/sponsor/stickermule.svg";
import { ReactComponent as SponsorTeck } from "$asset/sponsor/teck.svg";
import { ReactComponent as SponsorTheHive } from "$asset/sponsor/the-hive.svg";
import { ReactComponent as SponsorWizeprep } from "$asset/sponsor/wizeprep.svg";
import { ReactComponent as SponsorWolfram } from "$asset/sponsor/wolfram.svg";

export const HackathonInfo = {
	time: {
		start: "2023-05-21T00:00-0800", // TODO: When is the actual start time?
		end: "2023-05-22T00:00-0800", // TODO: When is the actual end time?
		hours: "24",
	},

	participants: {
		count: 400,
	},

	projects: {
		count: 90,
	},

	prizes: {
		value: 20000,
	},

	register: {
		sponsor:
			"mailto:info@stormhacks.com?subject=2023%20Sponsorship%20-%20(Your%20Company%20Here)&body=(Send%20us%20an%20email!%20We're%20happy%20to%20hear%20from%20you)",

		volunteer: "https://www.surveymonkey.ca/r/XTCDJZY",

		hacker: {
			link: "https://www.surveymonkey.ca/r/TB87RY5",
			opens: new Date("2023-03-03T22:00-0800"),
			closes: new Date("2023-05-07T00:00-0800"),
		},

		mentor: {
			link: "https://www.surveymonkey.ca/r/TB825RJ",
			opens: new Date("2023-03-03T22:00-0800"),
			closes: new Date("2023-05-07T00:00-0800"),
		},
	},

	incidentsEmail: "info@stormhacks.com",
	archiveSite: "https://archive.stormhacks.com",
};

export function isHackerApplicationOpen(): ["opened" | "pre-open" | "closed", null | Date] {
	const { opens, closes } = HackathonInfo.register.hacker;
	const now = Date.now();
	if (opens == null) return ["pre-open", null];
	if (now < (opens as Date).getTime()) return ["pre-open", opens];
	if (closes != null && now > (closes as Date).getTime()) return ["closed", closes];
	return ["opened", null];
}

export function isMentorApplicationOpen(): ["opened" | "pre-open" | "closed", null | Date] {
	const { opens, closes } = HackathonInfo.register.mentor;
	const now = Date.now();
	if (opens == null) return ["pre-open", null];
	if (now < (opens as Date).getTime()) return ["pre-open", opens];
	if (closes != null && now > (closes as Date).getTime()) return ["closed", closes];
	return ["opened", null];
}

export const SurgeInfo = {
	execs: [
		{
			name: "David Robert Lowe",
			role: "TODO",
			photo: "/exec/david.jpg",
		},
		{
			name: "Ishaan Bedi",
			role: "TODO",
			photo: "/exec/ishaan.jpg",
		},
		{
			name: "Chris Fong",
			role: "TODO",
			photo: "/exec/chris.jpg",
		},
		{
			name: "Danny Dong",
			role: "TODO",
			photo: "/exec/danny.jpg",
		},
		{
			name: "Lori Jiang",
			role: "TODO",
			photo: "/exec/lori.jpg",
		},
		{
			name: "Tanzil Sarker",
			role: "TODO",
			photo: "/exec/tanzil.jpg",
		},
		{
			name: "Matthew Wong",
			role: "TODO",
			photo: "/exec/matthew.jpg",
		},
		{
			name: "Fiona Wu",
			role: "TODO",
			photo: "/exec/fiona.jpg",
		},
		{
			name: "Vicky Xu",
			role: "TODO",
			photo: "/exec/vicky.jpg",
		},
		{
			name: "Samiha Raida",
			role: "TODO",
			photo: "/exec/samiha.jpg",
		},
		{
			name: "Revika Jain",
			role: "TODO",
			photo: "/exec/revika.jpg",
		},
		{
			name: "Johnson Luong",
			role: "TODO",
			photo: "/exec/johnson.jpg",
		},
		{
			name: "Hussain Attarwala",
			role: "TODO",
			photo: "/exec/hussain.jpg",
		},
		{
			name: "Victor Lee",
			role: "TODO",
			photo: "/exec/victor.jpg",
		},
		{
			name: "Noor Eeman",
			role: "TODO",
			photo: "/exec/noor.jpg",
		},
		{
			name: "Naomi Tran",
			role: "TODO",
			photo: "/exec/naomi.jpg",
		},
		{
			name: "Alex Svoboda",
			role: "TODO",
			photo: "/exec/alex.jpg",
		},
		{
			name: "Kate Paran",
			role: "TODO",
			photo: "/exec/kate.jpg",
		},
		{
			name: "Sakshi Wadhwa",
			role: "TODO",
			photo: "/exec/sakshi.jpg",
		},
		{
			name: "Raghav Ahuja",
			role: "TODO",
			photo: "/exec/raghav.jpg",
		},
		{
			name: "Therese Wong",
			role: "TODO",
			photo: "/exec/therese.jpg",
		},
		{
			name: "Alicia LeClerq",
			role: "TODO",
			photo: "/exec/alicia.jpg",
		},
		{
			name: "Arriyan Ali",
			role: "TODO",
			photo: "/exec/arriyan.jpg",
		},
		{
			name: "Jaden Lee",
			role: "TODO",
			photo: "/exec/jaden.jpg",
		},
		{
			name: "Gina Chang",
			role: "TODO",
			photo: "/exec/gina.jpg",
		},
		{
			name: "Angela Shen",
			role: "TODO",
			photo: "/exec/angela.jpg",
		},
		{
			name: "Joseph Lee",
			role: "TODO",
			photo: "/exec/joseph.jpg",
		},
		{
			name: "Olivia Baumert",
			role: "TODO",
			photo: "/exec/olivia.jpg",
		},
		{
			name: "Linda Jolly",
			role: "TODO",
			photo: "/exec/linda.jpg",
		},
		{
			name: "Jas Mangat",
			role: "TODO",
			photo: "/exec/jas.jpg",
		},
		{
			name: "Triane Tambay",
			role: "TODO",
			photo: "/exec/triane.jpg",
		},
		{
			name: "Varghese Bobus",
			role: "TODO",
			photo: "/exec/varghese.jpg",
		},
		{
			name: "Monishka Gautam",
			role: "TODO",
			photo: "/exec/monishka.jpg",
		},
		{
			name: "Josh Chang",
			role: "TODO",
			photo: "/exec/josh.jpg",
		},
		{
			name: "Jeannifer Labelle",
			role: "TODO",
			photo: "/exec/jeannifer.jpg",
		},
		{
			name: "Elsa Sinuhaji",
			role: "TODO",
			photo: "/exec/elsa.jpg",
		},
		{
			name: "Michelle Lee",
			role: "TODO",
			photo: "/exec/michelle.jpg",
		},
		{
			name: "Kaia Do",
			role: "TODO",
			photo: "/exec/kaia.jpg",
		},
		{
			name: "Kylie Seto",
			role: "TODO",
			photo: "/exec/kylie.jpg",
		},
		{
			name: "Ethan Pini",
			link: "https://www.github.com/eth-p",
			role: "TODO",
			photo: "/exec/ethan.jpg",
		},
		{
			name: "Celine Nguyen",
			role: "TODO",
			photo: "/exec/celine.jpg",
		},
		{
			name: "Kevin Shi",
			role: "TODO",
			photo: "/exec/kevin.jpg",
		},
	],
};

export enum SponsorTier {
	IN_KIND = 0,
	BRONZE = 1,
	SILVER = 2,
	GOLD = 3,
}

export type SponsorInfo = {
	name: string;
	type: SponsorTier;
	link?: string;
} & (
	| {
			svg: FunctionComponent<SVGProps<SVGSVGElement>>;
	  }
	| {
			photo: string;
	  }
);

export const Sponsors: Array<SponsorInfo> = [
	{
		name: "StandOut Stickers",
		type: SponsorTier.IN_KIND,
		link: "https://www.standoutstickers.com/?utm_campaign=events-league-organizers-spring2022&utm_medium=email&utm_source=customerio-zoho_creator_-_standout_sticker_intro",
		svg: SponsorStandOutStickers,
	},
	{
		name: "Leading Learners",
		type: SponsorTier.IN_KIND,
		link: "https://www.leading-learners.com/",
		photo: "/sponsor/leading-learners.png",
	},
	{
		name: "SFU Computing Science Student Society",
		type: SponsorTier.IN_KIND,
		link: "https://sfucsss.org/",
		svg: SponsorCSSS,
	},
	{
		name: "Wolfram",
		type: SponsorTier.IN_KIND,
		link: "https://www.wolfram.com/",
		svg: SponsorWolfram,
	},
	{
		name: "SAP",
		type: SponsorTier.SILVER,
		link: "https://www.sap.com/canada/index.html",
		svg: SponsorSAP,
	},
	{
		name: "Wizeprep",
		type: SponsorTier.IN_KIND,
		link: "https://www.wizeprep.com/",
		svg: SponsorWizeprep,
	},
	{
		name: "echo3D",
		type: SponsorTier.IN_KIND,
		link: "https://www.echo3d.com/",
		svg: SponsorEcho3D,
	},
	{
		name: "Goldbeck Recruiting",
		type: SponsorTier.BRONZE,
		link: "https://www.goldbeck.com/",
		svg: SponsorGoldbeckRecruiting,
	},
	{
		name: "GitHub",
		type: SponsorTier.BRONZE,
		link: "https://www.github.com/",
		svg: SponsorGitHub,
	},
	{
		name: "Simon Fraser Student Society",
		type: SponsorTier.GOLD,
		link: "https://sfss.ca/",
		svg: SponsorSFSS,
	},
	{
		name: "Guusto",
		type: SponsorTier.SILVER,
		link: "https://guusto.com/",
		svg: SponsorGuusto,
	},
	{
		name: "Software Systems Student Society",
		type: SponsorTier.IN_KIND,
		link: "https://www.sfussss.org/",
		svg: SponsorSSSS,
	},
	{
		name: "Red Bull",
		type: SponsorTier.BRONZE,
		link: "https://www.redbull.com/ca-en/",
		svg: SponsorRedbull,
	},
	{
		name: "Steve's Poke Bar",
		type: SponsorTier.IN_KIND,
		link: "https://www.stevespokebar.ca/",
		svg: SponsorStevesPokeBar,
	},
	{
		name: "BGC Engineering",
		type: SponsorTier.BRONZE,
		link: "https://www.bgcengineering.ca/",
		svg: SponsorBGC,
	},
	{
		name: "NNECT",
		type: SponsorTier.IN_KIND,
		link: "https://www.nnect.ca/",
		svg: SponsorNNECT,
	},
	{
		name: "Teck",
		type: SponsorTier.SILVER,
		link: "https://www.teck.com/",
		svg: SponsorTeck,
	},
	{
		name: "SFU Faculty of Applied Sciences",
		type: SponsorTier.IN_KIND,
		link: "http://www.sfu.ca/fas.html",
		svg: SponsorFAS,
	},
	{
		name: "SFU Bookstore",
		type: SponsorTier.IN_KIND,
		link: "https://shop.sfu.ca/",
		svg: SponsorSFUBookstore,
	},
	{
		name: "The Hive",
		type: SponsorTier.IN_KIND,
		link: "https://hiveclimbing.com/",
		svg: SponsorTheHive,
	},
];

export const PastSponsors = [
	{
		name: "HSBC",
		svg: SponsorHSBC,
	},
	{
		name: "Intactlab",
		svg: SponsorIntactLab,
	},
	{
		name: "Intact",
		svg: SponsorIntact,
	},
	{
		name: "MLH",
		svg: SponsorMLH,
	},
	{
		name: "Ergonomyx",
		svg: SponsorErgonomyx,
	},
	{
		name: "Women in Computing Science",
		svg: SponsorWICS,
	},
	{
		name: "AssemblyAI",
		svg: SponsorAssemblyAI,
	},
	{
		name: "stickermule",
		svg: SponsorStickermule,
	},
];
