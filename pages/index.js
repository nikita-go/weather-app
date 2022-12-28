import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import nightSky from '../assets/nightSky.jpg'
import Weather from '../components/Forecast'

export default function Home() {
  const [location, setLocation] = useState('');
  const [weatherData,setWeatherData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
  
  const getWeatherData = async (e) => {
    e.preventDefault();
    const response = await axios.get(url);
    setWeatherData(response.data);
    console.log(response.data);
    setLocation('')
  }

  return (
    <div>
      <Head>
        <title>Weather</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/30 z-10'></div>
      <Image src={nightSky} fill className='object-cover' />
      <div className='font-sans'>
        <div className='absolute flex justify-end items-center w-full pt-6 text-white z-20'>
          <form onSubmit={getWeatherData} className='flex justify-between items-center w-full p-3 mr-[2%] bg-transparent max-w-[300px] border-2 border-gray-300 text-white rounded-2xl font-medium'>
            <input type='text' 
            placeholder='Enter location' 
            onChange={(e) => setLocation(e.target.value)}
            className='bg-transparent border-none focus:outline-none text-lg placeholder:text-gray-400' />
            <button onClick={getWeatherData}><BsSearch size={20} /></button>
          </form>
        </div>
        {weatherData.main && <Weather data={weatherData} />}
        <p className='absolute bottom-0 right-0 mr-2 mb-2 text-lg text-white z-30'>All temperatures are in Celsius</p>
      </div>
    </div>
  )
}
