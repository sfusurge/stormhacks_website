const archives = [
	{
		year: 2021,
		site: "https://stormhacks-archive-2021-internal.netlify.app/",
	}
];

export default archives.sort((a, b) => a.year - b.year);
