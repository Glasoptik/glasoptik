export function getPrice({ minVariantPrice, maxVariantPrice }) {
  if (minVariantPrice.amount === maxVariantPrice.amount) {
    return `${minVariantPrice.amount} ${minVariantPrice.currencyCode}`;
  } else {
    return `${minVariantPrice.amount} - ${maxVariantPrice.amount} ${minVariantPrice.currencyCode}`;
  }
}
