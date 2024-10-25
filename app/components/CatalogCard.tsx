import React from 'react';


interface Props {
  value: number,
  price: number;
  name: string;
  image: string,
  id: string,
  onAddRemove: (value: number) => void
}


const CatalogCard = React.memo(({price, name, image, id, onAddRemove, value}: Props) => {
  const handleRemove = () => {
    onAddRemove(value - 1)
  }

  const handleAdd = () => {
    onAddRemove(value + 1)
  }

  return (
    <div className="bg-[#F1F1F1] flex flex-col rounded-[20px] md:p-[25px] p-[15px]">
      <div className={"h-[190px] w-full flex items-center justify-center mb-[10px]"}>
        <img src={image} className={"object-contain max-w-full max-h-full"} alt=""/>
      </div>
      <div className={"text-[#22AD7D] text-[30px] font-bold"}>{price}₽</div>
      <div className={"text-black text-[20px] mt-[8px] grow"}>{name}</div>
      <div className={"bg-[#22AD7D] flex items-center justify-center gap-[15px] mt-[8px] h-[37px] rounded-[7px]"}>
        <button onClick={handleRemove}>
          <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 1.5C0 2.32843 0.671573 3 1.5 3H12.5C13.3284 3 14 2.32843 14 1.5C14 0.671573 13.3284 0 12.5 0H1.5C0.671573 0 0 0.671573 0 1.5Z"
              fill="white"/>
          </svg>
        </button>
        <div className={"text-[24px] font-bold"}>{value}</div>
        <button onClick={handleAdd}>
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 7.5C0 8.32843 0.671573 9 1.5 9H12.5C13.3284 9 14 8.32843 14 7.5C14 6.67157 13.3284 6 12.5 6H1.5C0.671573 6 0 6.67157 0 7.5Z"
              fill="white"/>
            <path
              d="M7 14.5C7.82843 14.5 8.5 13.8284 8.5 13L8.5 2C8.5 1.17157 7.82843 0.5 7 0.5C6.17157 0.5 5.5 1.17157 5.5 2L5.5 13C5.5 13.8284 6.17157 14.5 7 14.5Z"
              fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  );
})

export default CatalogCard;