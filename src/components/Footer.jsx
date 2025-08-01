import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'หน้าหลัก', link: '/' },
    { name: 'หลักสูตรที่เปิดสอน', link: '/Course' },
    { name: 'ติดต่อ', link: '/Contact' }
  ]

  return (
    <footer className="bg-blue-600 text-white text-center py-4 mt-auto">
      <div className="container mx-auto">
        <div className="mb-2 space-x-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-gray-200 hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-300">Sitthichok Kiddee IT No.15</p>
      </div>
    </footer>
  )
}

export default Footer
