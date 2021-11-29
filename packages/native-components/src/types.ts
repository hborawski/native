import type { Platform, EmulatorContext } from "@storybook/native-types";

export interface RendererProps {
    /** Your public appetize.io API key */
    apiKey: string;
    /** The platform your app is for (android or ios) */
    platform: Platform;
    /** Base parameters to send to your application */
    storyParams: Record<string, any>;
    /**
     * Your application's base deep link URL (if you are using deep linking)
     * Example: "sb-native://deep.link"
     */
    deepLinkBaseUrl?: string;
    /**
     * Additional parameters to send to your application.
     *
     * In general, the difference between this prop and `storyParams` is that
     * the values passed to this prop should be ones that can change in the current story
     * based on controls, addons, etc.
     *
     * This prop is provided entirely for convenience
     */
    extraParams?: Record<string, any>;

    /**
     * An alternate base URL to use for Appetize, if a custom subdomain is required
     *
     * Example: "https://mycompany.appetize.io"
     */
    appetizeBaseUrl?: string;
}

export interface DeepLinkRendererProps extends RendererProps {
    /**
     * A unique ID for this emulator. Used for rendering multiple emulators
     * at once with deep linking.
     */
    context?: EmulatorContext;
}
