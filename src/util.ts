import { offers } from "./mock";

export const adaptOfferToClient = () => {
  // const adaptedOffer = Object.assign({}, offer, {
  //   previewImage: offer.preview_image,
  //   isFavorite: offer.is_favorite,
  //   isPremium: offer.is_premium,
  //   maxAdults: offer.max_adults,
  //   type: offers.type.replace(/^\w/, (m: string) => m.toUpperCase()),
  //   host: Object.assign(
  //     {},
  //     offer.host,
  //     {
  //       isPro: offer.host.is_pro,
  //       avatarUrl: offer.host.avatar_url,
  //     }),
  // });

  // delete adaptedOffer.preview_image;
  // delete adaptedOffer.is_favorite;
  // delete adaptedOffer.is_premium;
  // delete adaptedOffer.max_adults;
  // delete adaptedOffer.host.is_pro;
  // delete adaptedOffer.host.avatar_url;

  // return adaptedOffer;
};
