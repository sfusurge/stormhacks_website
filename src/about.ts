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
import { ReactComponent as SponsorCSSS } from "$asset/sponsor/sfu-csss.svg";
import { ReactComponent as SponsorSSSS } from "$asset/sponsor/sfu-ssss.svg";
import { ReactComponent as SponsorWICS } from "$asset/sponsor/sfu-wics.svg";
import { ReactComponent as SponsorStandOutStickers } from "$asset/sponsor/standoutstickers.svg";
import { ReactComponent as SponsorStevesPokeBar } from "$asset/sponsor/stevespokebar.svg";
import { ReactComponent as SponsorStickermule } from "$asset/sponsor/stickermule.svg";
import { ReactComponent as SponsorTeck } from "$asset/sponsor/teck.svg";
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
			name: "TODO 001",
			role: "TODO",
			photo: "/exec/001.jpg",
		},
		{
			name: "TODO 002",
			role: "TODO",
			photo: "/exec/002.jpg",
		},
		{
			name: "TODO 003",
			role: "TODO",
			photo: "/exec/003.jpg",
		},
		{
			name: "TODO 004",
			role: "TODO",
			photo: "/exec/004.jpg",
		},
		{
			name: "TODO 005",
			role: "TODO",
			photo: "/exec/005.jpg",
		},
		{
			name: "TODO 006",
			role: "TODO",
			photo: "/exec/006.jpg",
		},
		{
			name: "TODO 007",
			role: "TODO",
			photo: "/exec/007.jpg",
		},
		{
			name: "TODO 008",
			role: "TODO",
			photo: "/exec/008.jpg",
		},
		{
			name: "TODO 009",
			role: "TODO",
			photo: "/exec/009.jpg",
		},
		{
			name: "TODO 010",
			role: "TODO",
			photo: "/exec/010.jpg",
		},
		{
			name: "TODO 015",
			role: "TODO",
			photo: "/exec/015.jpg",
		},
		{
			name: "TODO 016",
			role: "TODO",
			photo: "/exec/016.jpg",
		},
		{
			name: "TODO 017",
			role: "TODO",
			photo: "/exec/017.jpg",
		},
		{
			name: "TODO 018",
			role: "TODO",
			photo: "/exec/018.jpg",
		},
		{
			name: "TODO 019",
			role: "TODO",
			photo: "/exec/019.jpg",
		},
		{
			name: "TODO 026",
			role: "TODO",
			photo: "/exec/026.jpg",
		},
		{
			name: "TODO 027",
			role: "TODO",
			photo: "/exec/027.jpg",
		},
		{
			name: "TODO 028",
			role: "TODO",
			photo: "/exec/028.jpg",
		},
		{
			name: "TODO 011",
			role: "TODO",
			photo: "/exec/011.jpg",
		},
		{
			name: "TODO 023",
			role: "TODO",
			photo: "/exec/023.jpg",
		},
		{
			name: "TODO 029",
			role: "TODO",
			photo: "/exec/029.jpg",
		},
		{
			name: "TODO 030",
			role: "TODO",
			photo: "/exec/030.jpg",
		},
		{
			name: "TODO 031",
			role: "TODO",
			photo: "/exec/031.jpg",
		},
		{
			name: "TODO 037",
			role: "TODO",
			photo: "/exec/037.jpg",
		},
		{
			name: "TODO 038",
			role: "TODO",
			photo: "/exec/038.jpg",
		},
		{
			name: "TODO 039",
			role: "TODO",
			photo: "/exec/039.jpg",
		},
		{
			name: "TODO 040",
			role: "TODO",
			photo: "/exec/040.jpg",
		},
		{
			name: "TODO 035",
			role: "TODO",
			photo: "/exec/035.jpg",
		},
		{
			name: "TODO 036",
			role: "TODO",
			photo: "/exec/036.jpg",
		},
		{
			name: "TODO 032",
			role: "TODO",
			photo: "/exec/032.jpg",
		},
		{
			name: "TODO 020",
			role: "TODO",
			photo: "/exec/020.jpg",
		},
		{
			name: "TODO 021",
			role: "TODO",
			photo: "/exec/021.jpg",
		},
		{
			name: "TODO 022",
			role: "TODO",
			photo: "/exec/022.jpg",
		},
		{
			name: "TODO 042",
			role: "TODO",
			photo: "/exec/042.jpg",
		},
		{
			name: "TODO 024",
			role: "TODO",
			photo: "/exec/024.jpg",
		},
		{
			name: "TODO 025",
			role: "TODO",
			photo: "/exec/025.jpg",
		},
		{
			name: "TODO 033",
			role: "TODO",
			photo: "/exec/033.jpg",
		},
		{
			name: "TODO 034",
			role: "TODO",
			photo: "/exec/034.jpg",
		},
		{
			name: "TODO 041",
			role: "TODO",
			photo: "/exec/041.jpg",
		},
		{
			name: "TODO 043",
			role: "TODO",
			photo: "/exec/043.jpg",
		},
		{
			name: "Ethan Pini",
			link: "https://www.github.com/eth-p",
			role: "TODO",
			photo: "/exec/ethan.jpg",
		},
		{
			name: "TODO 013",
			role: "TODO",
			photo: "/exec/013.jpg",
		},
		{
			name: "TODO 014",
			role: "TODO",
			photo: "/exec/014.jpg",
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
		type: SponsorTier.IN_KIND,
		link: "https://www.github.com/",
		svg: SponsorGitHub,
	},
	{
		name: "Simon Fraser Student Society",
		type: SponsorTier.IN_KIND /* TODO */,
		link: "https://sfss.ca/",
		svg: SponsorSFSS,
	},
	{
		name: "Guusto",
		type: SponsorTier.IN_KIND /* TODO */,
		link: "https://guusto.com/",
		svg: SponsorGuusto,
	},
	{
		name: "Software Systems Student Society",
		type: SponsorTier.IN_KIND /* TODO */,
		link: "https://www.sfussss.org/",
		svg: SponsorSSSS,
	},
	{
		name: "Red Bull",
		type: SponsorTier.IN_KIND /* TODO */,
		link: "https://www.redbull.com/ca-en/",
		svg: SponsorRedbull,
	},
	{
		name: "Steve's Poke Bar",
		type: SponsorTier.IN_KIND /* TODO */,
		link: "https://www.stevespokebar.ca/",
		svg: SponsorStevesPokeBar,
	},
	{
		name: "BGC Engineering",
		type: SponsorTier.IN_KIND /* TODO */,
		link: "https://www.bgcengineering.ca/",
		svg: SponsorBGC,
	},
	{
		name: "NNECT",
		type: SponsorTier.IN_KIND /* TODO */,
		link: "https://www.nnect.ca/",
		svg: SponsorNNECT,
	},
	{
		name: "Teck",
		type: SponsorTier.IN_KIND /* TODO */,
		link: "https://www.teck.com/",
		svg: SponsorTeck,
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
