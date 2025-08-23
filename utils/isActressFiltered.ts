import { ActressType } from "@/types/actress";
import { FilterType } from "@/types/filter";

// returns true if actress matches to filter
export function isActressFiltered(
  actress: ActressType,
  filter: FilterType,
): boolean {
  let isKindMatching: boolean = false;
  let isAttributeMatching: boolean = false;

  if (
    (filter.normal && actress.kind == "normal") ||
    (filter.another && actress.kind == "another") ||
    (filter.factor && actress.kind == "factor") ||
    (filter.stellar && actress.kind == "stellar")
  ) {
    isKindMatching = true;
  }

  if (
    (filter.electric && actress.attribute == "electric") ||
    (filter.gravity && actress.attribute == "gravity") ||
    (filter.heat && actress.attribute == "heat") ||
    (filter.freeze && actress.attribute == "freeze")
  ) {
    isAttributeMatching = true;
  }

  if (isKindMatching && isAttributeMatching) {
    return true;
  }

  return false;
}
