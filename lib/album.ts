
export function initialSort(data: []): [] {
  return data.sort(function (a, b) {
    const aCountry = a.country
    const aRank = a.rank
    const bRank = b.rank
    const bCountry = b.country

    if (aCountry == bCountry) {
      return aRank < bRank ? -1 : aRank > bRank ? 1 : 0
    } else {
      return aCountry < bCountry ? -1 : 1
    }
  })
}

export function columnSort(data: [], sortedProp: string): [] {
  return data.sort((a, b) => {
    if (a[sortedProp] < b[sortedProp]) {
      return -1
    }
    if (a[sortedProp] > b[sortedProp]) {
      return 1
    }
    return 0
  })
}

export function formatCurrency(number: number): any {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return formatter.format(number)
}
