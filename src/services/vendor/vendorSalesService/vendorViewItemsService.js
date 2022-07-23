import {VENDOR_VIEW_ITEMS} from "../../../container/constant/constant";
import api from "../../../core/utilities/httpProvider";

export const vendorViewItemsService = () => {
  return api.get(VENDOR_VIEW_ITEMS);
};
