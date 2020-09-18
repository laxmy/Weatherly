const KelvinToCelsuisConstant = 273.15;
const DaysOfWeek=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];

export function convertKelvinToCelsius(value)
{
  return (value - KelvinToCelsuisConstant).toFixed(2);
}

export function convertKelvinToFahrenheit(value)
{
// TODO: implement support for diff units
}
export function getNextFiveDaysFrom(date){
  let nextFiveDays =[];
  for(let i=1; i<=5; i++){
    var newDate = new Date();
    newDate.setDate(date.getDate() + i);
    nextFiveDays.push(DaysOfWeek[newDate.getDay()]);
  }
  return nextFiveDays;
}