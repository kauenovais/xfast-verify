import Link from 'next/link';
import React from 'react';

const ValidacaoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-black">
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-1 gap-4">

          <Link href="/valid/qrcode">
            <button className="bg-gold text-black rounded-lg p-4 w-64 text-center">
              QR Code

            </button>
          </Link>


          <Link href="/valid/facial">
            <button className="bg-gold text-black rounded-lg p-4 w-64 text-center">
              Reconhecimento Facial
            </button>
          </Link>
          <Link href="/valid/list">
            <button className="bg-gold text-black rounded-lg p-4 w-64 text-center">
              Lista
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ValidacaoPage;
