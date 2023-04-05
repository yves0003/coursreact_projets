export default function filterfunc(filter) {
  return function (code) {
    return (
      code.currency_code.toLowerCase().includes(filter.toLowerCase()) ||
      code.currency_long.toLowerCase().includes(filter.toLowerCase())
    )
  }
}
