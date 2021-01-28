import {mainSlider} from './module/mainSlider';
import {customSelect} from './module/customSelect';
import {actionHeightFormBlock} from './module/actionHeightFormBlock';
import {rangeFilter} from './module/rangeFilter';
import {actionRadioButton} from './module/actionRadioButton';
import {getSearchFilter} from './module/getSearchFilter';
import {getCollapseItemFilter} from './module/getCollaspseItemFilter';
import {sliderPromotion} from './module/sliderPromotion';
import {actionTab} from './module/actionTab';
import {actionRating} from './module/actionRating';
import {validateReviewForm} from './module/validateReviewForm';
import {faqAccordion} from './module/faqAccordion';
import {certificateSlider} from './module/cirtificateSlider';
import {getMap} from './module/map';
import {phoneMask} from './module/phoneMask';
import {validateFeedbackForm} from './module/validateFeedbackForm';
import {openMobileMenu} from './module/openMobileMenu';
import {openSearchOnTop} from './module/openSearchOnTop';
import {hoverImageProduct} from './module/hoverImageProduct';
import {countQuantityHandler} from './module/countQuantityHandler';
import {openFilterMobile} from './module/openFilteronMobile';
import {closeSearchCategoryMini} from './module/closeSearchCategoryMini';
import {clearFIlterForm} from './module/clearFilterForm';

const $ = require("jquery");
window.jQuery = $;
require("@fancyapps/fancybox");


customSelect();
actionHeightFormBlock();
mainSlider();
rangeFilter()
actionRadioButton()
getSearchFilter();
getCollapseItemFilter();
sliderPromotion();
actionTab();
actionRating();
validateReviewForm();
validateFeedbackForm();
faqAccordion();
certificateSlider();
getMap();
phoneMask();
openMobileMenu();
openSearchOnTop();
hoverImageProduct();
countQuantityHandler();
openFilterMobile();
closeSearchCategoryMini();
clearFIlterForm();
