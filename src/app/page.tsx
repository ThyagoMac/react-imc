
"use client"

import { Header } from "@/components/header";
import { ImcResultCard } from "@/components/imc-result-card";
import { MyInput } from "@/components/my-input";
import { levels, calculateImc, LevelType } from "@/helpers/imc";
import { useState } from "react";
import leftArrowImg from "@/assets/img/leftarrow.png"
import Image from "next/image";

export default function Home() {
  const [heightInput, setHeightInput] = useState<number>(0);
  const [weightInput, setWeightInput] = useState<number>(0);
  const [resultImc, setResultImc] = useState<LevelType | null>(null);

  const handleCalculateBtn = () => {
    if(heightInput && weightInput) {
      setResultImc(calculateImc(heightInput, weightInput));
      return;
    }

    alert("Preencha todos os campos");
  }

  const handleBackBtn = () => {
    setHeightInput(0);
    setWeightInput(0);
    setResultImc(null)
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Header />
      
      <div className="flex justify-between content-between flex-col md:flex-row gap-20 items-centerr my-7 mx-3 pb-9">
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
              disabled={resultImc ? true : false}
            />
            <MyInput
              type="number"
              placeholder="Digite seu Peso. Ex: 75.3 (em kg)"
              value={weightInput > 0 ? weightInput : ''}
              onChange={e =>  setWeightInput(+e.target.value)}
              disabled={resultImc ? true : false}
            />

            <button
              className="rounded-sm px-3 py-2 bg-blue-500 hover:bg-blue-600 transition-all disabled:bg-blue-400 disabled:cursor-not-allowed"
              onClick={handleCalculateBtn}
              disabled={resultImc ? true : false}
            >
              Calcular
            </button>
          </div>
        </div>
        <div className="w-full flex flex-1">
          {!resultImc &&
            <div className="grid grid-cols-1 sm:grid-cols-2 flex-1 gap-5">
              {levels.map((level, key) => (
                <ImcResultCard key={key} item={level} />
              ))}
            </div>
          }
          {resultImc &&
            <div className="flex flex-col gap-4 flex-1">
              <ImcResultCard item={resultImc} />
              <button
                className="flex items-center justify-center rounded-sm px-3 py-2 bg-blue-500 hover:bg-blue-600 transition-all"
                onClick={handleBackBtn}
              >
                <Image className="mr-1" src={leftArrowImg} alt={resultImc.title} width={15} height={15}/>
                Reiniciar
              </button>
            </div>
          }
        </div>
      </div>

    </div>
  );
}
