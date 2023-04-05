export default function filterfunc(filter: string) {
  return function (code: CryptoType) {
    return (
      code.currency_code.toLowerCase().includes(filter.toLowerCase()) ||
      code.currency_long.toLowerCase().includes(filter.toLowerCase())
    );
  };
}
