declare module 'react-native-appmetrica' {
  // Contains the extended startup configuration for the library.
  export type AppMetricaConfig = {
    apiKey: string;
    appVersion?: string;
    crashReporting?: boolean;
    firstActivationAsUpdate?: boolean;
    location?: Location;
    locationTracking?: boolean;
    logs?: boolean;
    sessionTimeout?: number;
    statisticsSending?: boolean;
    preloadInfo?: PreloadInfo;
    // Android only.
    installedAppCollecting?: boolean;
    maxReportsInDatabaseCount?: number;
    nativeCrashReporting?: boolean;
    // iOS only.
    activationAsSessionStart?: boolean;
    sessionsAutoTracking?: boolean;
  };

  // Contains information for tracking pre-installed apps.
  export type PreloadInfo = {
    trackingId: string;
    additionalInfo?: Object;
  };

  // Contains information about the location of the device.
  export type Location = {
    latitude: number;
    longitude: number;
    altitude?: number;
    accuracy?: number;
    course?: number;
    speed?: number;
    timestamp?: number;
  };

  // Contains possible error reasons for the requestAppMetricaDeviceID() method.
  export type AppMetricaDeviceIdReason =
    | 'UNKNOWN'
    | 'NETWORK'
    | 'INVALID_RESPONSE';

  interface Module {
    // Initializes the library in an application with the extended startup configuration.
    activate(config: AppMetricaConfig);

    // Returns the current version of the AppMetrica library.
    getLibraryVersion(): string;

    // Pauses the user session.
    pauseSession();

    // Sends a message about the app launching from a deeplink as a string.
    reportAppOpen(deeplink: ?string = null);

    // Sends an event message.
    reportEvent(eventName: string, attributes: ?Object = null);

    // Sends a custom error message.
    reportError(error: string, reason: Object);

    // Sets referral URL for app installs. This method can be used to track some traffic sources.
    reportReferralUrl(referralUrl: string);

    // Requests the unique AppMetrica ID (deviceID).
    requestAppMetricaDeviceID(
      listener: (deviceId?: String, reason?: AppMetricaDeviceIdReason) => void,
    );

    // Resumes the session, or creates a new one if the session timeout has expired.
    resumeSession();

    // Sends stored events from the buffer.
    sendEventsBuffer();

    // Sets custom location of the device.
    setLocation(location: ?Location);

    // Enables/disables sending location of the device.
    setLocationTracking(enabled: boolean);

    // Enables/disables sending statistics to the AppMetrica server.
    setStatisticsSending(enabled: boolean);

    // Sets the ID of the user profile.
    setUserProfileID(userProfileID?: string);

    // Android only. Returns the API level of the library.
    getLibraryApiLevel(): number;
  }

  const module: Module;

  export default module;
}
