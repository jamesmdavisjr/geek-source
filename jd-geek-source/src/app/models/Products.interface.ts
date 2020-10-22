export interface Products {
  sku: number;
  score?: null;
  productId?: null;
  name: string;
  source?: null;
  type: string;
  startDate: string;
  new: boolean;
  active: boolean;
  lowPriceGuarantee: boolean;
  activeUpdateDate: string;
  regularPrice: number;
  salePrice: number;
  clearance: boolean;
  onSale: boolean;
  planPrice?: null;
  priceWithPlan?: null[] | null;
  contracts?: null[] | null;
  priceRestriction?: null;
  priceUpdateDate: string;
  digital: boolean;
  preowned: boolean;
  carriers?: null[] | null;
  planFeatures?: null[] | null;
  devices?: null[] | null;
  carrierPlans?: null[] | null;
  technologyCode?: null;
  carrierModelNumber?: null;
  earlyTerminationFees?: null[] | null;
  monthlyRecurringCharge: string;
  monthlyRecurringChargeGrandTotal: string;
  activationCharge: string;
  minutePrice: string;
  planCategory?: null;
  planType?: null;
  familyIndividualCode?: null;
  validFrom?: null;
  validUntil?: null;
  carrierPlan?: null;
  outletCenter?: null;
  secondaryMarket?: null;
  frequentlyPurchasedWith?: null[] | null;
  accessories?: null[] | null;
  relatedProducts?: null[] | null;
  requiredParts?: null[] | null;
  techSupportPlans?: null[] | null;
  crossSell?: null[] | null;
  salesRankShortTerm: number;
  salesRankMediumTerm: number;
  salesRankLongTerm: number;
  bestSellingRank: number;
  url: string;
  spin360Url?: null;
  mobileUrl: string;
  affiliateUrl?: null;
  addToCartUrl: string;
  affiliateAddToCartUrl?: null;
  linkShareAffiliateUrl: string;
  linkShareAffiliateAddToCartUrl: string;
  upc: string;
  productTemplate: string;
  categoryPath?: CategoryPathEntity[] | null;
  alternateCategories?: null[] | null;
  lists?: null[] | null;
  customerReviewCount: number;
  customerReviewAverage: number;
  customerTopRated: boolean;
  format?: null;
  freeShipping: boolean;
  freeShippingEligible: boolean;
  inStoreAvailability: boolean;
  inStoreAvailabilityText: string;
  inStoreAvailabilityUpdateDate: string;
  itemUpdateDate: string;
  onlineAvailability: boolean;
  onlineAvailabilityText: string;
  onlineAvailabilityUpdateDate: string;
  releaseDate: string;
  shippingCost: number;
  shipping?: ShippingEntity[] | null;
  shippingLevelsOfService?: ShippingLevelsOfServiceEntity[] | null;
  specialOrder: boolean;
  shortDescription: string;
  class: string;
  classId: number;
  subclass: string;
  subclassId: number;
  department: string;
  departmentId: number;
  protectionPlanTerm: string;
  protectionPlanType?: null;
  protectionPlanLowPrice: string;
  protectionPlanHighPrice: string;
  buybackPlans?: null[] | null;
  protectionPlans?: null[] | null;
  protectionPlanDetails?: null[] | null;
  productFamilies?: null[] | null;
  productVariations?: ProductVariationsEntity[] | null;
  aspectRatio?: null;
  screenFormat?: null;
  lengthInMinutes?: null;
  mpaaRating?: null;
  plot?: null;
  studio?: null;
  theatricalReleaseDate?: null;
  description?: null;
  manufacturer: string;
  modelNumber: string;
  images?: ImagesEntity[] | null;
  image: string;
  largeFrontImage: string;
  mediumImage: string;
  thumbnailImage: string;
  largeImage: string;
  alternateViewsImage: string;
  angleImage?: null;
  backViewImage?: null;
  energyGuideImage?: null;
  leftViewImage: string;
  accessoriesImage?: null;
  remoteControlImage?: null;
  rightViewImage?: null;
  topViewImage: string;
  albumTitle: string;
  artistName?: null;
  artistId?: null;
  originalReleaseDate?: null;
  parentalAdvisory?: null;
  mediaCount?: null;
  monoStereo?: null;
  studioLive?: null;
  condition: string;
  inStorePickup: boolean;
  friendsAndFamilyPickup: boolean;
  homeDelivery: boolean;
  quantityLimit: number;
  fulfilledBy?: null;
  members?: null[] | null;
  bundledIn?: BundledInEntity[] | null;
  albumLabel?: null;
  genre?: null;
  color: string;
  depth: string;
  dollarSavings: number;
  percentSavings: string;
  tradeInValue: string;
  height: string;
  orderable: string;
  weight: string;
  shippingWeight: number;
  width: string;
  warrantyLabor: string;
  warrantyParts: string;
  softwareAge?: null;
  softwareGrade?: null;
  platform?: null;
  numberOfPlayers?: null;
  softwareNumberOfPlayers?: null;
  esrbRating?: null;
  longDescription: string;
  includedItemList?: IncludedItemListEntity[] | null;
  marketplace?: null;
  listingId?: null;
  sellerId?: null;
  shippingRestrictions?: null;
  proposition65WarningMessage?: null;
  proposition65WarningType: string;
  displayType: string;
  screenSizeIn: number;
}
export interface CategoryPathEntity {
  id: string;
  name: string;
}
export interface ShippingEntity {
  ground: string;
  secondDay: string;
  nextDay: number;
  vendorDelivery: string;
}
export interface ShippingLevelsOfServiceEntity {
  serviceLevelId: number;
  serviceLevelName: string;
  unitShippingPrice: number;
}
export interface ProductVariationsEntity {
  sku: string;
  variations?: VariationsEntity[] | null;
}
export interface VariationsEntity {
  name: string;
  value: string;
}
export interface ImagesEntity {
  rel: string;
  unitOfMeasure: string;
  width: string;
  height: string;
  href: string;
  primary: boolean;
}
export interface BundledInEntity {
  sku: number;
}
export interface IncludedItemListEntity {
  includedItem: string;
}