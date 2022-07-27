const archives = [
	{
		year: 2021,
		site: "https://stormhacks-archive-2021-internal.netlify.app/",
		backgrounds: {
			"/": "#5a60f3",
		}
	},
	{
		year: 2022,
		site: "https://stormhacks-archive-2022-internal.netlify.app/",
		backgrounds: {
			"/":         "#ffcbba",
			"/sponsors": "#fba7b3",
			"/faq":      "#fa7ed0",
			"/schedule": "#eecbff",
			"/themes":   "#67adff",
		}
	},
];

export default archives.sort((a, b) => a.year - b.year);
