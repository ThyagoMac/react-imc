import { LevelType } from "@/helpers/imc";
import upImg from '@/assets/img/up.png';
import downImg from '@/assets/img/down.png';
import Image from "next/image";

type Props = {
  item: LevelType
}

export const ImcResultCard = ({ item }: Props) => {
  const icons = {
    up: upImg,
    down: downImg
  }
  return(
    <div className={`rounded-lg flex flex-col gap-2 align-middle items-center justify-center p-5 ${item.color}`}>
      <div className="h-16 w-16 rounded-full bg-opacity-10 bg-black flex justify-center items-center">
        <Image
          src={icons[item.icon]}
          alt={item.title}
          width={30} height={30}
        />
      </div>
      <div className="font-bold text-xl">{item.title}</div>
      {item.yourImc &&
        <div className="">{item.yourImc.toFixed(2)} kg/m²</div>
      }
      <div className="text-xs">
        IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
      </div>
    </div>
  )
}