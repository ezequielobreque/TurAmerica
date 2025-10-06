export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
}

export interface LocationInfo {
  name: string;
  address: string;
  mapEmbedUrl: string;
  googleReviewsUrl: string;
}

export interface AboutContent {
  intro: string;
  philosophy: string;
  highlights: string[];
  location: LocationInfo;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Destination {
  name: string;
  description: string;
  image: string;
  alt: string;
}
