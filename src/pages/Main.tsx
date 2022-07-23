import {Link} from "react-router-dom";

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
							<Link to={`/${archive.year}`} key={archive.year}>StormHacks {archive.year} Website</Link>
						</li>
					)
				})}
			</ul>
		</div>
	);
}
