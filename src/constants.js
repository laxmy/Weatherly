export const WeatherUrlPrefix = 'https://api.openweathermap.org/data/2.5/forecast'

export const ApiKey = 'df9364ba64956cc49b082ee2fdca8833'

export const CurrentWeatherDetails =[
    {
        name: 'SunRise And SunSet',
        fieldNames: ['sunrise','sunset'],
        iconName:['wi-sunrise','wi-sunset']
    },
    {
        name: 'Pressure',
        fieldNames: ['pressure'],
        iconName:['wi-barometer']
    },
    {
        name: 'Humidity',
        fieldNames: ['humidity'],
        iconName:['wi-humidity']
    },
    {
        name: 'Visibility',
        fieldNames: ['visibility']
    },
    {
        name: 'Wind',
        fieldNames:['speed', 'deg'],
        iconName:['wi-strong-wind']
    },
    {
        name: 'Clouds',
        fieldNamea:['clouds'],
        iconName:['wi-cloud']
    }
   
]


