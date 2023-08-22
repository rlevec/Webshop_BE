export const handleFormValues = () => {
    let dateObj = new Date()

    let year = dateObj.getFullYear()



    let registrationDobMax = year - 18
    let registrationDobMin = year - 100

    let expireYearMin = year
    let expireYearMax = year + 4

    let creditCardExpireYearOptions = []

    for(let i = expireYearMin; i <= expireYearMax; i++) creditCardExpireYearOptions.push(i)

    let monthOptions = []

    let monthMin = 1
    let monthMax= 12

    for(let i = monthMin; i <= monthMax; i++) monthOptions.push(i)

    return {registrationDobMin, registrationDobMax, expireYearMin, expireYearMax, monthOptions, monthMin, monthMax, creditCardExpireYearOptions}
}
