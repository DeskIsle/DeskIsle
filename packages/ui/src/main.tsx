import "./index.css";
import "jotai-devtools/styles.css";
import { Modal } from "@/components/ui/modal";
import { Toaster } from "@/components/ui/toaster";
import { Provider as JotaiProvider } from "jotai";
import { DevTools } from "jotai-devtools";
import ReactDOM from "react-dom/client";

import { Desk } from "./pages/desk";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<JotaiProvider>
		<Desk />
		<Toaster />
		<Modal />
		<DevTools />
	</JotaiProvider>,
);
