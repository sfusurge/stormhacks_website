import { FunctionComponent, SVGProps } from "react";

import { ReactComponent as SponsorAssemblyAI } from "$asset/sponsor/assemblyai.svg";
import { ReactComponent as SponsorEcho3D } from "$asset/sponsor/echo3d.svg";
import { ReactComponent as SponsorErgonomyx } from "$asset/sponsor/ergonomyx.svg";
import { ReactComponent as SponsorGitHub } from "$asset/sponsor/github.svg";
import { ReactComponent as SponsorGuusto } from "$asset/sponsor/guusto.svg";
import { ReactComponent as SponsorHSBC } from "$asset/sponsor/hsbc.svg";
import { ReactComponent as SponsorIntact } from "$asset/sponsor/intact.svg";
import { ReactComponent as SponsorIntactLab } from "$asset/sponsor/intactlab.svg";
import { ReactComponent as SponsorMLH } from "$asset/sponsor/mlh.svg";
import { ReactComponent as SponsorRedbull } from "$asset/sponsor/redbull.svg";
import { ReactComponent as SponsorSAP } from "$asset/sponsor/sap.svg";
import { ReactComponent as SponsorSFSS } from "$asset/sponsor/sfss.svg";
import { ReactComponent as SponsorSSSS } from "$asset/sponsor/sfu-ssss.svg";
import { ReactComponent as SponsorWICS } from "$asset/sponsor/sfu-wics.svg";
import { ReactComponent as SponsorStandOutStickers } from "$asset/sponsor/standoutstickers.svg";
import { ReactComponent as SponsorStickermule } from "$asset/sponsor/stickermule.svg";

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
			closes: null,
		},

		mentor: {
			link: "https://www.surveymonkey.ca/r/TB825RJ",
			opens: new Date("2023-03-03T22:00-0800"),
			closes: null,
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
			photo: "/exec/__placeholder__.jpg",
		},
		{
			name: "TODO 011",
			role: "TODO",
			photo: "/exec/011.jpg",
		},
		{
			name: "Ethan Pini",
			link: "https://www.github.com/eth-p",
			role: "TODO",
			photo: "/exec/012.jpg",
		},
		{
			name: "TODO 013",
			role: "TODO",
			photo: "/exec/013.jpg",
		},
		{
			name: "TODO 014",
			role: "TODO",
			photo: "/exec/__placeholder__.jpg",
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
			photo: "/exec/__placeholder__.jpg",
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
			name: "TODO 023",
			role: "TODO",
			photo: "/exec/__placeholder__.jpg",
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
			name: "TODO 032",
			role: "TODO",
			photo: "/exec/032.jpg",
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
			name: "TODO 035",
			role: "TODO",
			photo: "/exec/__placeholder__.jpg",
		},
		{
			name: "TODO 036",
			role: "TODO",
			photo: "/exec/__placeholder__.jpg",
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
			name: "TODO 041",
			role: "TODO",
			photo: "/exec/__placeholder__.jpg",
		},
		{
			name: "TODO 042",
			role: "TODO",
			photo: "/exec/__placeholder__.jpg",
		},
	],
};

export enum SponsorTier {
	IN_KIND = 0,
	SILVER = 1,
	GOLD = 2,
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
		name: "SAP",
		type: SponsorTier.SILVER,
		link: "https://www.sap.com/canada/index.html",
		svg: SponsorSAP,
	},
];

export const PastSponsors = [
	{
		name: "HSBC",
		svg: SponsorHSBC,
	},
	{
		name: "Simon Fraser Student Society",
		svg: SponsorSFSS,
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
		name: "Guusto",
		svg: SponsorGuusto,
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
		name: "Software Systems Student Society",
		svg: SponsorSSSS,
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
		name: "echo3D",
		svg: SponsorEcho3D,
	},
	{
		name: "Red Bull",
		svg: SponsorRedbull,
	},
	{
		name: "stickermule",
		svg: SponsorStickermule,
	},
	{
		name: "GitHub",
		svg: SponsorGitHub,
	},
];
