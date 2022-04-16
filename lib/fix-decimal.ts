export const fixDecimal = (number: number) => {
	return number.toLocaleString('en', { useGrouping: false, minimumFractionDigits: 2 })
}
