export default function isEqual(Arr1, Arr2) {
  const result = Arr1.map((v, i) => v === Arr2[i]);
  return result.every(x => x);
}
