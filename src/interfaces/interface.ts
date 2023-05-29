export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export interface BannerItem {
  id: number;
  bannerImg: string;
}
