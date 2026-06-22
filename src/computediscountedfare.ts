
// Type exports for consumers
// Add specific types as needed
export function computeDiscountedFare(fare: number, discountType: "student" | "senior" | "pwd" = "student"): number {
  const discount = discountType === "student" ? 0.20 : 0.20;
  return Math.round(fare * (1 - discount) * 100) / 100;
}
