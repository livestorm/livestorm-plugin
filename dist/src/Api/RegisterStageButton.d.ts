declare const _default: {
    /**
      * Register an entry in the stage actions (for contributors and participants)
      * Can be used to trigger any action (sharing custom content, files, videos, etc)
      *
      * @example RegisterStageButton.register({
      *   label: 'React with an emoji',
      *   icon: 'smile',
      *   dropdownActions: [{ name: '😱', label: '😱' }],
      *   onClick: (payload) => {}
      * })
      *
      * @param label - The label of the action
      * @param tooltip - A tooltip to show over
      * @param icon - An icon from the https://feathericons.com library (not recommended)
      * @param imageSource - URL of an icon (png, svg) that will be displayed next to your button
      * @param onClick - Function called whenever someone clicks on your button
      *
    */
    register: ({ iframe, dropdownActions, dropdownActionsTextClasses, imageSource, label, icon, tooltip, onClick }: {
        label?: string;
        tooltip?: string;
        icon?: string;
        imageSource?: string;
        dropdownActions?: {
            name?: string;
            label: string;
            imageSource?: string;
        }[];
        dropdownActionsTextClasses?: string;
        iframe?: {
            template: string;
            variables: Record<string, unknown>;
            width: number;
            height: number;
            onMessage?: (payload?: Record<string, unknown>) => unknown;
        };
        onClick?: (payload?: Record<string, unknown>) => unknown;
    }) => {
        remove: () => void;
    };
};
export default _default;
