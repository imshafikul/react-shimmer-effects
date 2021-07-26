import React from "react";
import {
  ShimmerButton,
  ShimmerBadge,
  ShimmerTitle,
  ShimmerText,
  ShimmerCircularImage,
  ShimmerThumbnail,
  ShimmerCard,
  ShimmerTableRow,
  ShimmerTableCol,
  ShimmerTable,
  ShimmerSocialPost,
  ShimmerPostItem,
  ShimmerPostList,
  ShimmerPostDetails,
  ShimmerCategoryList,
  ShimmerCategoryItem,
  ShimmerContentBlock,
  ShimmerSimpleGallery,
  ShimmerFeaturedGallery,
  ShimmerSeparator,
  ShimmerSectionHeader,
} from ".";

describe("Shimmer Button", () => {
  it("is truthy", () => {
    expect(<ShimmerButton size="md" />).toBeTruthy();
  });
});

describe("Shimmer Badge", () => {
  it("is truthy", () => {
    expect(<ShimmerBadge />).toBeTruthy();
  });
});

describe("Shimmer Title", () => {
  it("is truthy", () => {
    expect(<ShimmerTitle />).toBeTruthy();
  });
});

describe("Shimmer Text", () => {
  it("is truthy", () => {
    expect(<ShimmerText />).toBeTruthy();
  });
});

describe("Shimmer Circular Image", () => {
  it("is truthy", () => {
    expect(<ShimmerCircularImage />).toBeTruthy();
  });
});

describe("Shimmer Thumbnail", () => {
  it("is truthy", () => {
    expect(<ShimmerThumbnail />).toBeTruthy();
  });
});

describe("Shimmer Card", () => {
  it("is truthy", () => {
    expect(
      <ShimmerCard>
        <ShimmerSocialPost />
      </ShimmerCard>
    ).toBeTruthy();
  });
});

describe("Shimmer Table Row", () => {
  it("is truthy", () => {
    expect(<ShimmerTableRow />).toBeTruthy();
  });
});

describe("Shimmer Table Col", () => {
  it("is truthy", () => {
    expect(<ShimmerTableCol />).toBeTruthy();
  });
});

describe("Shimmer Table ", () => {
  it("is truthy", () => {
    expect(<ShimmerTable />).toBeTruthy();
  });
});

describe("Shimmer Social Post", () => {
  it("is truthy", () => {
    expect(<ShimmerSocialPost />).toBeTruthy();
  });
});

describe("Shimmer Post Item", () => {
  it("is truthy", () => {
    expect(<ShimmerPostItem />).toBeTruthy();
  });
});

describe("Shimmer Post List", () => {
  it("is truthy", () => {
    expect(<ShimmerPostList />).toBeTruthy();
  });
});

describe("Shimmer Post Details", () => {
  it("is truthy", () => {
    expect(<ShimmerPostDetails />).toBeTruthy();
  });
});

describe("Shimmer Category List", () => {
  it("is truthy", () => {
    expect(<ShimmerCategoryList />).toBeTruthy();
  });
});

describe("Shimmer Category Item", () => {
  it("is truthy", () => {
    expect(<ShimmerCategoryItem />).toBeTruthy();
  });
});

describe("Shimmer Content Block", () => {
  it("is truthy", () => {
    expect(<ShimmerContentBlock />).toBeTruthy();
  });
});

describe("Shimmer Simple Gallery", () => {
  it("is truthy", () => {
    expect(<ShimmerSimpleGallery />).toBeTruthy();
  });
});

describe("Shimmer Featured Gallery", () => {
  it("is truthy", () => {
    expect(<ShimmerFeaturedGallery />).toBeTruthy();
  });
});

describe("Shimmer Separator", () => {
  it("is truthy", () => {
    expect(<ShimmerSeparator />).toBeTruthy();
  });
});

describe("Shimmer Section Header", () => {
  it("is truthy", () => {
    expect(<ShimmerSectionHeader />).toBeTruthy();
  });
});
