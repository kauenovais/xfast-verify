import React from 'react';

const ValidacaoPage = () => {
  const handleFacialRecognition = () => {
    // Lógica para lidar com o reconhecimento facial
  };

  return (
    <div className="min-h-screen bg-gradient-black">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="relative">
          <div className="h-80 w-80 bg-white mx-auto rounded-md"></div>
          <button
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gold text-black rounded-lg text-center"
            onClick={handleFacialRecognition}
          >
            Reconhecimento Facial
          </button>
        </div>
        <button className="mt-4 text-white" onClick={() => window.history.back()}>
          Voltar ao Menu
        </button>
      </div>
    </div>
  );
};

export default ValidacaoPage;
