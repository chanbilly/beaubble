import Intro from "../components/UI/Intro"
import WineList from "../components/UI/WineList"
import Webgl from "../components/Webgl"

export default function Main() {
	return (
		<main id="main">
			<Intro/>
			<Webgl/>
			<WineList/>
		</main>
	)
}