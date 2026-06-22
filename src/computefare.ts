
// Type exports for consumers
// Add specific types as needed
/**
 * computeFare
 * @param distanceKm
 * @param baseFare
 * @param perKmRate
 */
export function computeFare(distanceKm: number, baseFare: number = 13, perKmRate: number = 1.80): number {
  if (distanceKm <= 0) throw new Error("Distance must be positive");
  const additionalKm = Math.max(0, distanceKm - 4);
  return Math.round((baseFare + additionalKm * perKmRate) * 100) / 100;
}
