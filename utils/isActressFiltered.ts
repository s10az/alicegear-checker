import { ActressType } from "@/types/actress";
import { FilterType } from "@/types/filter";

// returns true if actress matches to filter
export function isActressFiltered(
  actress: ActressType,
  filter: FilterType,
): boolean {
  // Check if any filters are selected
  const hasActiveFilters = Object.values(filter).some(
    (value) => value === true,
  );

  // どのフィルターも選択されていない場合は全アクトレスを表示
  if (!hasActiveFilters) {
    return true;
  }

  let isKindMatching: boolean = false;
  let isAttributeMatching: boolean = false;

  // 種類(ノーマル、アナザーなど)がフィルターに一致しているか
  if (
    (filter.normal && actress.kind == "normal") ||
    (filter.another && actress.kind == "another") ||
    (filter.factor && actress.kind == "factor") ||
    (filter.stellar && actress.kind == "stellar")
  ) {
    isKindMatching = true;
  }

  // 属性がフィルターに一致しているか
  if (
    (filter.electric && actress.attribute == "electric") ||
    (filter.gravity && actress.attribute == "gravity") ||
    (filter.heat && actress.attribute == "heat") ||
    (filter.freeze && actress.attribute == "freeze")
  ) {
    isAttributeMatching = true;
  }

  // 種類フィルターが使われているか
  const isKindFilterUsed =
    filter.normal || filter.another || filter.factor || filter.stellar;
  // 属性フィルターが使われているか
  const isAttributeFilterUsed =
    filter.electric || filter.gravity || filter.heat || filter.freeze;

  // 種類フィルターのみが使われているときは、一致する人のみ表示
  if (isKindFilterUsed && !isAttributeFilterUsed) {
    return isKindMatching;
  }

  // 属性フィルターのみが使われているときは、一致する人のみ表示
  if (!isKindFilterUsed && isAttributeFilterUsed) {
    return isAttributeMatching;
  }

  // 種類と属性フィルターが使われているときは、両方一致の人のみ表示(AND)
  if (isKindFilterUsed && isAttributeFilterUsed) {
    return isKindMatching && isAttributeMatching;
  }

  return false;
}
