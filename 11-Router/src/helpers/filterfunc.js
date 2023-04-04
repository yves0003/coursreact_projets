export default function filterfunc(filter) {
  return function (image) {
    return (
      image.currency_code.toLowerCase().includes(filter.toLowerCase()) ||
      image.currency_long.toLowerCase().includes(filter.toLowerCase())
    )
  }
}
