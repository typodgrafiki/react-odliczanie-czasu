const currentDate = new Date();

const timeToday = {
    currentDate: currentDate,
    currentYear: currentDate.getYear() + 1900
}

const today = () => {
        
    let monthName;
    switch (timeToday.currentDate.getMonth()+1) {
        case 1:
            monthName = ' styczeń ';
            break;
        case 2:
            monthName = ' luty ';
            break;
        case 3:
            monthName = ' marzec ';
            break;
        case 4:
            monthName = ' kwiecień ';
            break;
        case 5:
            monthName = ' maj ';
            break;
        case 6:
            monthName = ' czerwiec ';
            break;
        case 7:
            monthName = ' lipien ';
            break;
        case 8:
            monthName = ' sierpień ';
            break;
        case 9:
            monthName = ' wrzesień ';
            break;
        case 10:
            monthName = ' październik ';
            break;
        case 11:
            monthName = ' listopad ';
            break;
        default:
            monthName = ' grudzień ';
            break;
    }
    const longDateToday = (timeToday.currentDate.getDate()) + monthName + timeToday.currentYear;
    return longDateToday;
}

export default today()