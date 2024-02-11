import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

export default function Gallary() {

    const style = {
      bg: "https://riyalitysoftwares.com/assets/img/banner/12.jpg",
      title: "Gallary",
    };
  return (
   <main>
    <Breadcrumb bg={style.bg} title={style.title} />
   </main>
  )
}
