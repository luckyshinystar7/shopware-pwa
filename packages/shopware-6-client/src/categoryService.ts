import { getCategoryEndpoint } from "./endpoints";
import { apiService } from "./apiService";

export interface Category {
  name: String;
}

export interface SearchResult<T> {
  total: Number;
  data: T[];
}

/**
 * Usage example:
 * ```ts
 * import { CategoryService } from "@shopware-pwa/shopware-6-client"
 * ```
 */
export interface CategoryService {
  getCategories: () => Promise<SearchResult<Category[]>>;
}

const getCategories = async function(): Promise<SearchResult<Category[]>> {
  const resp = await apiService.get(getCategoryEndpoint());
  return resp.data;
};

export const CategoryService: CategoryService = {
  getCategories
};
