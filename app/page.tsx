"use client"

import CarsList from "@/components/Home/CarsList";
import CarsFilterOptions from "@/components/Home/CarsFiltersOptions";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";



export default function Home() {

  const [carsList,setCarsList]=useState<any>([])


  const getCarList_=async()=>{
    const result:any=await getCarsList();
    setCarsList(result?.carLists)
    // console.log(result?.carLists);
  }

  useEffect(()=>{
    getCarList_();
  },[])


  // const filterCarList=(brand:string)=>{
  //   const filterList=carsOrgList.filter((item:any)=>
  //   item.carBrand==brand);
  //   setCarsList(filterList);
  // }

  // const orderCarList=(order:any)=>{
  //   const sortedData = [...carsOrgList].sort((a, b) =>
  //   order==-1? a.price - b.price:b.price - a.price);
  //   setCarsList(sortedData);
  // }

  // useEffect(()=>{
  //   if(showToastMsg)
  //   {
  //     setTimeout(function(){
  //       setShowToastMsg(false)
  //     },4000);
  //   }
  // },[showToastMsg])
  

  return (
    <div className="p-5 sm:px-10 md:px-20">
        <Hero/>
        <SearchInput/>
        <CarsFilterOptions/>
        <CarsList carsList = {carsList}/>
        {carsList.map((car:any) => {car.name})}
    </div>
  )
}