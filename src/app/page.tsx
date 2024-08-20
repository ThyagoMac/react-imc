
"use client"

import { Header } from "@/components/header";
import { MyInput } from "@/components/my-input";
import { useState } from "react";

export default function Home() {
  const [heightInput, setHeightInput] = useState<number>(0);
  const [weightInput, setWeightInput] = useState<number>(0);

  const handleCalculateBtn = () => {
    if(heightInput && weightInput) {

      return
    }

    alert("Preencha todos os campos")
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Header />
      
      <div className="flex justify-between content-between flex-col md:flex-row gap-20 items-centerr my-7 mx-3">
        <div className="w-full flex-1">
          <h1 className="text-4xl mb-2">Calcule o seu IMC</h1>
          <p className="mb-10 text-sm opacity-70">
            O Índice de Massa Corporal (IMC) é uma fórmula que calcula o peso ideal de uma pessoa.
          </p>

          <div className="flex flex-col gap-4">
            <MyInput
              type="number"
              placeholder="Digite sua Altura. Ex: 1.5 (em metros)"
              value={heightInput > 0 ? heightInput : ''}
              onChange={e =>  setHeightInput(+e.target.value)}
            />
            <MyInput
              type="number"
              placeholder="Digite seu Peso. Ex: 75.3 (em kg)"
              value={weightInput > 0 ? weightInput : ''}
              onChange={e =>  setWeightInput(+e.target.value)}
            />

            <button
              className="bg-blue-500 rounded-sm px-3 py-2 hover:bg-blue-600 transition-all"
              onClick={handleCalculateBtn}
            >
              Calcular
            </button>
          </div>
        </div>
        <div className="w-full flex-1">r</div>
      </div>

    </div>
  );
}
