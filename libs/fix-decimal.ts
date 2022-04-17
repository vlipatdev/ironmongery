export const fixDecimal = (number: number): string => {
	return number.toLocaleString('en', { useGrouping: false, minimumFractionDigits: 2 })
}
