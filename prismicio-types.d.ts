// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ProjectDocumentDataSlicesSlice = LinkSlice | TitleSlice | ImageTextSlice;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * picture field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.picture
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  picture: prismic.ImageField<never>;

  /**
   * release field in *Project*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: project.release
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  release: prismic.DateField;

  /**
   * Slice Zone field in *Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice> /**
   * Meta Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

export type AllDocumentTypes = ProjectDocument;

/**
 * Primary content in *ImageText → left → Primary*
 */
export interface ImageTextSliceLeftPrimary {
  /**
   * title field in *ImageText → left → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text.left.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * content field in *ImageText → left → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text.left.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * picture field in *ImageText → left → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text.left.primary.picture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  picture: prismic.ImageField<never>;
}

/**
 * left variation for ImageText Slice
 *
 * - **API ID**: `left`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageTextSliceLeft = prismic.SharedSliceVariation<
  "left",
  Simplify<ImageTextSliceLeftPrimary>,
  never
>;

/**
 * Primary content in *ImageText → right → Primary*
 */
export interface ImageTextSliceRightPrimary {
  /**
   * title field in *ImageText → right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text.right.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * content field in *ImageText → right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text.right.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * picture field in *ImageText → right → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text.right.primary.picture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  picture: prismic.ImageField<never>;
}

/**
 * right variation for ImageText Slice
 *
 * - **API ID**: `right`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageTextSliceRight = prismic.SharedSliceVariation<
  "right",
  Simplify<ImageTextSliceRightPrimary>,
  never
>;

/**
 * Slice variation for *ImageText*
 */
type ImageTextSliceVariation = ImageTextSliceLeft | ImageTextSliceRight;

/**
 * ImageText Shared Slice
 *
 * - **API ID**: `image_text`
 * - **Description**: ImageText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageTextSlice = prismic.SharedSlice<
  "image_text",
  ImageTextSliceVariation
>;

/**
 * Primary content in *Link → Default → Primary*
 */
export interface LinkSliceDefaultPrimary {
  /**
   * link field in *Link → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: link.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Link Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LinkSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Link*
 */
type LinkSliceVariation = LinkSliceDefault;

/**
 * Link Shared Slice
 *
 * - **API ID**: `link`
 * - **Description**: Link
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkSlice = prismic.SharedSlice<"link", LinkSliceVariation>;

/**
 * Primary content in *Title → Default → Primary*
 */
export interface TitleSliceDefaultPrimary {
  /**
   * title field in *Title → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: title.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Default variation for Title Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TitleSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Title*
 */
type TitleSliceVariation = TitleSliceDefault;

/**
 * Title Shared Slice
 *
 * - **API ID**: `title`
 * - **Description**: Title
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleSlice = prismic.SharedSlice<"title", TitleSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataSlicesSlice,
      AllDocumentTypes,
      ImageTextSlice,
      ImageTextSliceLeftPrimary,
      ImageTextSliceRightPrimary,
      ImageTextSliceVariation,
      ImageTextSliceLeft,
      ImageTextSliceRight,
      LinkSlice,
      LinkSliceDefaultPrimary,
      LinkSliceVariation,
      LinkSliceDefault,
      TitleSlice,
      TitleSliceDefaultPrimary,
      TitleSliceVariation,
      TitleSliceDefault,
    };
  }
}
