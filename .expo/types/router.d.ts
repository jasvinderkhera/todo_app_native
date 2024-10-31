/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/forgot` | `/(tabs)/login` | `/(tabs)/secondPage` | `/(tabs)/signup` | `/(tabs)/tasks` | `/(tabs)/thirdPage` | `/(tabs)\addTask` | `/_sitemap` | `/forgot` | `/login` | `/secondPage` | `/signup` | `/tasks` | `/thirdPage`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
