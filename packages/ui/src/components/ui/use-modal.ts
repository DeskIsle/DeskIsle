import { useEffect, useState } from "react";
import type React from "react";
import type { ModalProps } from "./modal";

export interface ModalState extends ModalProps {
	id: string;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

interface State {
	modals: ModalState[];
}

enum ModalActionTypes {
	ADD = 0,
	DISMISS = 1,
	REMOVE = 2,
}

type Action =
	| {
			type: ModalActionTypes.ADD;
			payload: ModalState;
	  }
	| {
			type: ModalActionTypes.DISMISS;
			id?: ModalState["id"];
	  }
	| {
			type: ModalActionTypes.REMOVE;
			id?: ModalState["id"];
	  };

let memoryState: State = {
	modals: [],
};

const listeners: React.Dispatch<React.SetStateAction<State>>[] = [];

let count = 0;

const REMOVE_DELAY = 1_000;

function genId() {
	count = (count + 1) % Number.MAX_SAFE_INTEGER;
	return count.toString();
}

const modalTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

function addToRemoveQueue(toastId: string) {
	if (modalTimeouts.has(toastId)) {
		return;
	}

	const timeoutId = setTimeout(() => {
		modalTimeouts.delete(toastId);
		dispatch({
			type: ModalActionTypes.REMOVE,
			id: toastId,
		});
	}, REMOVE_DELAY);

	modalTimeouts.set(toastId, timeoutId);
}

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case ModalActionTypes.ADD: {
			return {
				...state,
				modals: [...state.modals, action.payload],
			};
		}

		case ModalActionTypes.DISMISS: {
			if (action.id) {
				addToRemoveQueue(action.id);
			} else {
				for (const toast of state.modals) {
					addToRemoveQueue(toast.id);
				}
			}

			return {
				...state,
				modals: state.modals.map((m) => {
					if (m.id === action.id || action.id === undefined) {
						return { ...m, open: false };
					}
					return m;
				}),
			};
		}

		case ModalActionTypes.REMOVE: {
			if (action.id === undefined) {
				return { ...state, modals: [] };
			}
			return {
				...state,
				modals: state.modals.filter((t) => t.id !== action.id),
			};
		}
	}
}

function dispatch(action: Action) {
	memoryState = reducer(memoryState, action);
	for (const listener of listeners) {
		listener(memoryState);
	}
}

export function close(id?: string) {
	dispatch({ type: ModalActionTypes.DISMISS, id });
}

export function confirm(modal: ModalProps) {
	const id = genId();
	const close = () => {
		dispatch({ type: ModalActionTypes.DISMISS, id });
	};
	dispatch({
		type: ModalActionTypes.ADD,
		payload: {
			...modal,
			id,
			open: true,
			onOpenChange: (open) => {
				if (!open) close();
			},
		},
	});

	return {
		id,
		close,
	};
}

export function useModal() {
	const [modalState, setModalState] = useState<State>(memoryState);

	useEffect(() => {
		listeners.push(setModalState);
		return () => {
			const index = listeners.indexOf(setModalState);
			if (index > -1) {
				listeners.splice(index, 1);
			}
		};
	}, []);

	return {
		...modalState,
		confirm,
		close,
	};
}
