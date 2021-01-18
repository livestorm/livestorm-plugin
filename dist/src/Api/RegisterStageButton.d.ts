declare const _default: {
    register: ({ iframe, dropdownActions, dropdownActionsTextClasses, label, icon, tooltip, onClick }: {
        label: string;
        tooltip?: string;
        icon?: string;
        dropdownActions?: {
            label: any;
            onClick: () => unknown;
        }[];
        dropdownActionsTextClasses?: string;
        iframe?: string;
        onClick?: (payload?: any) => unknown;
    }) => void;
};
export default _default;
