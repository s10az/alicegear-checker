import { ActressType } from "@/types/actress";
import { FilterType } from "@/types/filter";

// returns true if actress matches to filter
export function isActressFiltered(
  actress: ActressType,
  filter: FilterType,
): boolean {
  let isKindMatching: boolean = false;
  let isAttributeMatching: boolean = false;

  if (filter.normal && actress.kind == "normal") {
    isKindMatching = true;
  }
  if (filter.another && actress.kind == "another") {
    isKindMatching = true;
  }
  if (filter.factor && actress.kind == "factor") {
    isKindMatching = true;
  }
  if (filter.stellar && actress.kind == "stellar") {
    isKindMatching = true;
  }

  if (filter.electric && actress.attribute == "electric") {
    isAttributeMatching = true;
  }
  if (filter.gravity && actress.attribute == "gravity") {
    isAttributeMatching = true;
  }
  if (filter.heat && actress.attribute == "heat") {
    isAttributeMatching = true;
  }
  if (filter.freeze && actress.attribute == "freeze") {
    isAttributeMatching = true;
  }

  if (isKindMatching && isAttributeMatching) {
    return true;
  }

  return false;
}
