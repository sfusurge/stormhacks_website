import Archive from "../archives";

export interface MainProps {
	archives: Archive[];
}

export default function Main(props: MainProps) {
	return (
		<div style={{padding: '1em'}}>
			<p>This is a placeholder page, while I wait for the designers to come up with something.</p>
			<p>-- Ethan</p>
			<hr/>
			<ul>
				{props.archives.map(archive => {
					return (
						<li>
							<a href={`/${archive.year}`} key={archive.year}>StormHacks {archive.year} Website</a>
						</li>
					)
				})}
			</ul>
		</div>
	);
}
