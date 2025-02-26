function convertDateToString(date: Date): string {
  const fullISOString = date.toISOString()
  return fullISOString.slice(0, 7)
}

function convertStringToDate(str: string): Date {
  return new Date(str)
}

export { convertDateToString, convertStringToDate }
