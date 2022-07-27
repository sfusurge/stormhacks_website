export default interface Archive {
	year: number;
	site: string;

	backgrounds: {
		[key:string]: string;
		"/": string;
	}
}
