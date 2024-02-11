import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb';

export default function Blog() {
    const style = {
      bg: "https://riyalitysoftwares.com/assets/img/banner/8.jpg",
      title:"Blogs"
    };
  return (
    <main>
        <Breadcrumb bg={style.bg} title={style.title} />
    </main>
  )
}
