import { environment } from "src/environments/environment";

const BASE_URL = environment.production? '' : 'http://localhost:5000';

export const PRODUCTS_URL = BASE_URL + '/api/products';
export const PRODUCTS_TAGS_URL = PRODUCTS_URL + '/tags';
export const PRODUCTS_BY_SEARCH_URL = PRODUCTS_URL + '/search/';
export const PRODUCTS_BY_TAG_URL = PRODUCTS_URL + '/tag/';
export const PRODUCTS_BY_ID_URL = PRODUCTS_URL + '/';