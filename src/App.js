import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";

import Archive from "./pages/Archive.tsx";
import Main from "./pages/Main.tsx";

import archives from "./archives";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main archives={archives} />}/>
				{
					archives.map(archive =>
						<Route path={`/${archive.year}/*`} key={archive.year} element={
							<Archive key={archive.year} {...archive} />
						} />
					)
				}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
