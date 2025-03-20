import { ComponentType } from "react";

// Button component
interface ShimmerButtonProps {
    size?: "sm" | "md" | "lg";
    className?: string;
}
export const ShimmerButton: ComponentType<ShimmerButtonProps>;

// Badge component
interface ShimmerBadgeProps {
    width?: number;
    className?: string;
}
export const ShimmerBadge: ComponentType<ShimmerBadgeProps>;

// Title component
interface ShimmerTitleProps {
    line: number;
    gap?: number;
    variant?: "primary" | "secondary";
    className?: string;
}
export const ShimmerTitle: ComponentType<ShimmerTitleProps>;

// Text component
interface ShimmerTextProps {
    line: number;
    gap?: number;
    className?: string;
}
export const ShimmerText: ComponentType<ShimmerTextProps>;

// Circular Image component
interface ShimmerCircularImageProps {
    size: number;
    className?: string;
}
export const ShimmerCircularImage: ComponentType<ShimmerCircularImageProps>;

// Thumbnail component
interface ShimmerThumbnailProps {
    width?: number;
    height?: number;
    className?: string;
}
export const ShimmerThumbnail: ComponentType<ShimmerThumbnailProps>;

// Section Header component
interface ShimmerSectionHeaderProps {
    title?: boolean;
    text?: boolean;
    className?: string;
}
export const ShimmerSectionHeader: ComponentType<ShimmerSectionHeaderProps>;

// Simple Gallery component
interface ShimmerSimpleGalleryProps {
    row?: number;
    col?: number;
    gap?: number;
    className?: string;
}
export const ShimmerSimpleGallery: ComponentType<ShimmerSimpleGalleryProps>;

// Featured Gallery component
interface ShimmerFeaturedGalleryProps {
    row?: number;
    col?: number;
    gap?: number;
    className?: string;
}
export const ShimmerFeaturedGallery: ComponentType<ShimmerFeaturedGalleryProps>;

// Table component
interface ShimmerTableProps {
    row?: number;
    col?: number;
    className?: string;
}
export const ShimmerTable: ComponentType<ShimmerTableProps>;

// Content Block component
interface ShimmerContentBlockProps {
    title?: boolean;
    text?: boolean;
    cta?: boolean;
    className?: string;
}
export const ShimmerContentBlock: ComponentType<ShimmerContentBlockProps>;

// Category Item component
interface ShimmerCategoryItemProps {
    hasImage?: boolean;
    imageType?: "thumbnail" | "circular";
    imageWidth?: number;
    imageHeight?: number;
    title?: boolean;
    text?: boolean;
    cta?: boolean;
    contentCenter?: boolean;
    className?: string;
}
export const ShimmerCategoryItem: ComponentType<ShimmerCategoryItemProps>;

// Category List component
interface ShimmerCategoryListProps {
    title?: boolean;
    items: number;
    categoryStyle?: "STYLE_ONE" | "STYLE_TWO" | "STYLE_THREE" | "STYLE_FOUR" | "STYLE_FIVE" | "STYLE_SIX" | "STYLE_SEVEN";
    className?: string;
}
export const ShimmerCategoryList: ComponentType<ShimmerCategoryListProps>;

// Social Post component
interface ShimmerSocialPostProps {
    title?: boolean;
    type: "image" | "text" | "both";
    className?: string;
}
export const ShimmerSocialPost: ComponentType<ShimmerSocialPostProps>;

// Post Item component
interface ShimmerPostItemProps {
    card?: boolean;
    imageType?: "thumbnail" | "circular";
    imageWidth?: number;
    imageHeight?: number;
    title?: boolean;
    text?: boolean;
    cta?: boolean;
    contentCenter?: boolean;
    className?: string;
}
export const ShimmerPostItem: ComponentType<ShimmerPostItemProps>;

// Post List component
interface ShimmerPostListProps {
    row: number;
    col: number;
    gap?: number;
    postStyle?: "STYLE_ONE" | "STYLE_TWO" | "STYLE_THREE" | "STYLE_FOUR" | "STYLE_FIVE" | "STYLE_SIX" | "STYLE_SEVEN" | "STYLE_EIGHT";
    className?: string;
}
export const ShimmerPostList: ComponentType<ShimmerPostListProps>;

// Post Details component
interface ShimmerPostDetailsProps {
    card?: boolean;
    cta?: boolean;
    variant?: "SIMPLE" | "EDITOR";
    className?: string;
}
export const ShimmerPostDetails: ComponentType<ShimmerPostDetailsProps>;