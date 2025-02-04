function calculate(){

    let currentDay = parseInt(cd.value.slice(8,10),10);
    let currentMonth = parseInt(cd.value.slice(5,7),10);
    let currentYear = parseInt(cd.value.slice(0,4),10);
    console.log(currentYear,currentMonth,currentDay);

    let birthDay = parseInt(bd.value.slice(8,10),10);
    let birthMonth = parseInt(bd.value.slice(5,7),10);
    let birthYear = parseInt(bd.value.slice(0,4),10);
    console.log(birthYear,birthMonth,birthDay);

    if (currentDay>=birthDay){
        day = currentDay-birthDay;
    }
    else{
         day =currentDay + new Date(currentYear,currentMonth).getDate()-birthDay ;
         currentMonth --;
    }

    if(currentMonth>=birthMonth){
      month = currentMonth-birthMonth

    }
    else{
        month = currentMonth + 12 - birthMonth;
        currentYear --;
    }
    year = currentYear-birthYear;

    if(year<0){
        AgeText.innerHTML="Kya majak kar raha hai"
    }
    else{
        AgeText.innerHTML= year + " years ," + month +" months, " + day+" days ";
    }


}