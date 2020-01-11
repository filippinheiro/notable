const dateExtractor = {

    month : [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER"
    ],

    getMonthAndYear(dateString) {
        const date = new Date(dateString)
        const monthNumber = date.getMonth()
        const year = date.getFullYear()
        return this.month[monthNumber] + " " + year 
    },

    getShortDate(dateString) {
        const date = new Date(dateString)
        const shortDate = (date.getMonth() + 1) + "/" + date.getDay() + "/" + (date.getFullYear() - 2000)
        return shortDate
    }
}

export default dateExtractor