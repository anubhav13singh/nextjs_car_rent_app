import React, { useEffect, useState } from 'react'

function CarsFiltersOption({carsList,setBrand,orderCarList}:any) {

  const [brandList,setBrandList]=useState<any>();
  const BrandSet=new Set()

//   const filterCarList=()=>{
//     carsList.forEach((element:any) => {
//       BrandSet.add(element.carBrand);
//     });
//     console.log(BrandSet)
//     setBrandList(Array.from(BrandSet));
//   }


//   useEffect(()=>{
//     if(carsList)
//     {
//       filterCarList();
//     }
//   },[carsList])

 

  return (
    <div className='mt-10 flex items-center justify-between'>
        <div>
            <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
            <h2>Explore our cars you might likes</h2>
        </div>
        <div className='flex gap-5'>
            <select className="select select-bordered 
            w-full max-w-xs">
            <option disabled selected>Price</option>
            <option value={-1}>Min to Max</option>
            <option value={1}>Max to Min</option>
            </select>

            <select className="select 
            select-bordered w-full md:block max-w-xs hidden">
            <option disabled selected>Manufactural</option>
            {brandList&&brandList.map((brand:string,index:number)=>(
              <option key={index}>{brand}</option>
            ))}
           
            </select>
        </div>
    </div>
  )
}

export default CarsFiltersOption