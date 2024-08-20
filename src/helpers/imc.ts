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
    color: '',
    icon: 'down',
    imc: [0, 18.5],
  },
  {
    title: 'Normal',
    color: '',
    icon: 'up',
    imc: [18.6, 24.9],
  },
  {
    title: 'Sobrepeso',
    color: '',
    icon: 'down',
    imc: [25, 30],
  },
  {
    title: 'Obesidade',
    color: '',
    icon: 'down',
    imc: [30, 99],
  },
];
export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  levels.forEach(level => {
    if(imc >= level.imc[0] && imc < level.imc[1]) {
      level.yourImc = imc;
      return level;
    }
  });
  return null;
}