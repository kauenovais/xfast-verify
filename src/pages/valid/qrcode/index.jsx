import React from 'react';

const ValidacaoPage = () => {
  const handleScanQRCode = () => {
    // Lógica para lidar com a leitura do QR Code
  };

  return (
    <div className="min-h-screen bg-gradient-black">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="relative">
          <div className="h-80 w-80 bg-white mx-auto rounded-md"></div>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-gold text-black rounded-lg text-center"
          onClick={handleScanQRCode}
        >
          Ler QR Code
        </button>
        <button className="mt-4 text-black" onClick={() => window.history.back()}>
          Voltar ao Menu
        </button>
      </div>
    </div>
  );
};

export default ValidacaoPage;
