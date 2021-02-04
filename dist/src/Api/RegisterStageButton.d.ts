declare const _default: {
    register: ({ iframe, dropdownActions, dropdownActionsTextClasses, imageSource, label, icon, tooltip, onClick }: {
        label?: string;
        tooltip?: string;
        icon?: string;
        imageSource?: string;
        dropdownActions?: {
            name?: string;
            label: any;
            imageSource?: string;
        }[];
        dropdownActionsTextClasses?: string;
        iframe?: string;
        onClick?: (payload?: any) => unknown;
    }) => void;
};
export default _default;
