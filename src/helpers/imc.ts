export type LevelType = {
    title: string,
    color: string,
    icon: 'up' | 'down',
    imc: number[],
    yourImc?: number; 
}

export const levels: LevelType[] = [
  {
    title: 'Magreza',
    color: 'bg-gray-600',
    icon: 'down',
    imc: [0, 18.5],
  },
  {
    title: 'Normal',
    color: 'bg-green-600',
    icon: 'up',
    imc: [18.6, 24.9],
  },
  {
    title: 'Sobrepeso',
    color: 'bg-yellow-600',
    icon: 'down',
    imc: [25, 30],
  },
  {
    title: 'Obesidade',
    color: 'bg-red-800',
    icon: 'down',
    imc: [30, 99],
  },
];
export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);
  let finalResult = null;

  levels.forEach(level => {
    if(imc >= level.imc[0] && imc < level.imc[1]) {
      finalResult = {...level};
      finalResult.yourImc = imc;
    }
  });

  return finalResult;
}