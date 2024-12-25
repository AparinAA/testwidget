import { useState } from "react";
import styles from "./App.module.css";

function App() {
	const [show, setShow] = useState(false);

	return (
		<div className={styles.main}>
			{show && (
				<iframe
					src="https://www.aleksandraparin.site/"
					className={styles.frameChat}
				></iframe>
			)}
			<button onClick={() => setShow((on) => !on)}>Show widget</button>
		</div>
	);
}

export default App;
