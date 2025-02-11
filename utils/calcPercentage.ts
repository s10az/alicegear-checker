export function calcPercentage(selected: number, all: number): number {
  if (all == 0) {
    return 0;
  }

  return Math.round((selected / all) * 10000) / 100;
}
