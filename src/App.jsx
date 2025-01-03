import { useState } from "react";
import styles from "./App.module.css";

function App() {
	const [show, setShow] = useState("");

	return (
		<div className={styles.main}>
			{show && (
				<iframe
					src="https://www.aleksandraparin.site/"
					className={[styles.frameChat, show && styles[show]].join(
						" "
					)}
				></iframe>
			)}
			<div className={styles.actionMenu}>
				<button
					onClick={() =>
						setShow((show) => (show === "top" ? "" : "top"))
					}
				>
					Show widget on top
				</button>
				<button
					onClick={() =>
						setShow((show) => (show === "bottom" ? "" : "bottom"))
					}
				>
					Show widget on bottom
				</button>
				<button
					onClick={() =>
						setShow((show) => (show === "center" ? "" : "center"))
					}
				>
					Show widget on center
				</button>
			</div>
		</div>
	);
}

export default App;
