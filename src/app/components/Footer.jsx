import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white bottom-0 w-full left-0">
      <div className="md:flex md:w-full justify-between container p-10">
        {/* Bagian 1 */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">About Us</h2>
          <ul>
            <li>Gerai Kobar</li>
            <li>KOEMPOEL BARENG</li>
          </ul>
        </div>

        {/* Bagian 2 */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">New Menu</h2>
          <ul>
            <li>Kopi Kobar Lezatos</li>
            <li>Kripik durian</li>
          </ul>
        </div>

        {/* Bagian 3 */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Call Us</h2>
          <p>0852-6277-0124</p>
        </div>

        {/* Bagian 4 */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Opening Hours</h2>
          <p>Senin - Jumat: 08:00 - 21:00</p>
          <p>Sabtu - Minggu: 11:00 - 23:00</p>
        </div>
      </div>
      <div className="text-center text-xs bg-black">@2023 Gerai Kobar. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
