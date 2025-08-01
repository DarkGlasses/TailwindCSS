import React from 'react'

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4">
      <section className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-2xl space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">ติดต่อเรา</h1>
          <h2 className="text-2xl font-semibold text-gray-700">NVC Center</h2>
        </div>

        <div className="space-y-4 text-lg text-gray-800">
          <div>
            <span className="font-semibold">โทรศัพท์:</span>{' '}
            <a href="tel:0615929399" className="text-blue-600 hover:underline">
              061-592-9399
            </a>
          </div>
          <div>
            <span className="font-semibold">อีเมล:</span>{' '}
            <a href="mailto:supachok119732@gmail.com" className="text-blue-600 hover:underline">
              supachok119732@gmail.com
            </a>
          </div>
          <div>
            <span className="font-semibold">ที่อยู่:</span>{' '}
            วิทยาลัยอาชีวศึกษานครปฐม, ต.สนามจันทร์ อ.เมือง จ.นครปฐม 73000
          </div>
        </div>

      </section>
    </div>
  )
}

export default Contact
