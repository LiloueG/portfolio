// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Primary content in *Test → Default → Primary*
 */
export interface TestSliceDefaultPrimary {
  /**
   * Test field in *Test → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: coucou
   * - **API ID Path**: test.default.primary.test
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  test: prismic.KeyTextField;
}

/**
 * Default variation for Test Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Test*
 */
type TestSliceVariation = TestSliceDefault;

/**
 * Test Shared Slice
 *
 * - **API ID**: `test`
 * - **Description**: Test
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSlice = prismic.SharedSlice<"test", TestSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.WriteClientConfig,
    ): prismic.WriteClient;
  }

  interface CreateMigration {
    (): prismic.Migration;
  }

  namespace Content {
    export type {
      TestSlice,
      TestSliceDefaultPrimary,
      TestSliceVariation,
      TestSliceDefault,
    };
  }
}
