import "./index.css";

import ReactDOM from "react-dom/client";
import { ModalProvider } from "react-modal-hook";
import { Desk } from "./pages/desk";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ModalProvider>
		<Desk />
	</ModalProvider>
);