export declare const api: {
    onOpenWidgetStore: (callback: (value: boolean) => void) => void;
    onOpenSettings: (callback: (value: boolean) => void) => void;
    openFile: () => Promise<any>;
};
export type API = typeof api;
