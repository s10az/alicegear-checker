import { ActressType } from "@/types/actress";
import { FilterType } from "@/types/filter";

// returns true if actress matches to filter
export function isActressFiltered(
  actress: ActressType,
  filter: FilterType,
): boolean {
  let isKindTrue: boolean = false;
  let isAttributeTrue: boolean = false;

  if (filter.normal && actress.kind == "normal") {
    isKindTrue = true;
  }
  if (filter.another && actress.kind == "another") {
    isKindTrue = true;
  }
  if (filter.factor && actress.kind == "factor") {
    isKindTrue = true;
  }
  if (filter.stellar && actress.kind == "stellar") {
    isKindTrue = true;
  }

  if (filter.electric && actress.attribute == "electric") {
    isAttributeTrue = true;
  }
  if (filter.gravity && actress.attribute == "gravity") {
    isAttributeTrue = true;
  }
  if (filter.heat && actress.attribute == "heat") {
    isAttributeTrue = true;
  }
  if (filter.freeze && actress.attribute == "freeze") {
    isAttributeTrue = true;
  }

  if (isKindTrue && isAttributeTrue) {
    return true;
  }

  return false;
}
