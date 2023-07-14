import React, { useState } from 'react';

const ValidacaoPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Lógica para buscar pessoas no banco de dados
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-black">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Digite o nome da pessoa"
            value={searchQuery}
            onChange={handleInputChange}
            className="bg-white rounded-md px-4 py-2 w-full mb-5"
          />
          <button
            className="bg-gold text-black rounded-lg px-4 py-2 w-full mt-2"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>
        <button className="mt-4 text-black" onClick={() => window.history.back()}>
          Voltar ao Menu
        </button>
      </div>
    </div>
  );
};

export default ValidacaoPage;
