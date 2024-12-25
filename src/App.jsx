import { useState } from "react";
import styles from "./App.module.css";

function App() {
	const [show, setShow] = useState(false);

	return (
		<div className={styles.main}>
			{show && (
				<iframe
					src="http://109.248.175.199:10001"
					className={styles.frameChat}
				></iframe>
			)}
			<button onClick={() => setShow((on) => !on)}>Show widget</button>
		</div>
	);
}

export default App;
