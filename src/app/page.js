'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

import axios from 'axios';

export default function Home() {
  const [dataProvinsi, setDataProvinsi] = useState([])

  const testingFun = async () => {
    const response = await axios.get('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')

    setDataProvinsi(response?.data)
  }

  useEffect(() => {
    testingFun()
  }, [])

  return (
    <div>
      {
        dataProvinsi?.map((item, index) => (
          <div style={{ fontSize: '14px', color: '#4287f5' }}>{item?.name}</div>
        ))
      }
    </div>
  );
}
