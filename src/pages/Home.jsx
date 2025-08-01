import React from 'react'
import Button from '../components/Button'
import CardList from '../components/CardList'

const Home = () => {
  return (
    <div>
      <section
        className='h-screen bg-cover bg-center flex items-center justify-between text-white'
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='container mx-auto p-4'>
          <h2 className='text-5xl font-bold mb-4 text-black'>หน้าหลัก</h2>
        </div>
      </section>
    </div>
  )
}

export default Home
