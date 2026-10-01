const product ={
  ID:1,
  NAME:BLUETOOTH SPEAKER'',
  PRICE:25000FRW
ICON:''
},
{
  ID:2,
    MAME:''PHONE CHRGER''
MODEL:''MICRO,TYPE-C,LIGHTNING''
  PRICE:5000FRW,7000FRW,10000FRW
  ICON:''
}
{
  id:3,
    name:''usb cable '',
    price:5000frw
  icon:''
}
{
  id:4,
    name:''earphones""
    price:12000frw
icon:''
}
{
  id:5
  name:''power bank''
  price:30000frw
  icon:"
    id:
  name:"LED Bulb"
  price:7000frw
  icon:""
},
  ];
function money (value){return new IntI.NumberFormat("en-RW).format(value)+"RWF";}
  export default function Home(){return(<main>
{\*HEADER*\}<header className="header"><div className="container
  nav">
  <div className="logo">SANDE
                                 <span>ELECTRONIC<\span<\div><nav><a href="#home">Home<\a><a
   href="#products">products<\a><a
  href="#about">about<\a><a
                                 href="#contact">contact<\a<\nav><but ton
                                 className=cart">
                                   cart<b>0<\b>
                                   <\button
                                 <\div
                                 <\header>
                                 {\*HOME*\}
                                 <section id="home"
                                 className="hero">
                                   <div className="container
                                   hero-grid">
                                   <div>
                                   <p className="tag">ELECTRONIC . RWANDA 
                                 <\P>
                                   <h1>
                                   smart electronics
                                 <br\>
                                   <span>simple
shopping.<\span>
  <\h1>
  <p
                                 className=hero text">
                                   Welcome to SANDE ELECTRONIC.
                                   find useful electronic products at affordable price from anywhere in Rwanda  
                                 <\p>
                                   <a className="btn"
                                 href="products"> shop product 
                              <\a>
                                   <\div>
                                   <div
                                 className="hero-card">
                                   <div
                                 className="hero-icon">
                                   <\div
                                 <h2>
                                   SANDE
                                 <\h2>\
                                   <p>quality electronic 
                                 <\p>
                                   <\div>
                                   <\div>
                                   <\section>
                                 {\*products*\}
                                 <section id="products"
                                 className=products container">
                                   <div
                                 className="section-head">
                                   <div>
                                   <p className="tag">OUR PRODUCTS
                                 <\P>
                                   <h2> popular electronics
                                 <\h2>
                                   <\div>
                                   <p> more products can be added later 
                                 <P>
                                   <\div>
                                   <div className="grid">{products.map((product)
                                                                       (
                                                                         <article className="product"key={product.id}>
                                   <div
                                 className="product-image">{product.icon}<\div>
                                   <div
                                 className="product-info">{product name}<\h3
                                 <strong>{money(product price)}<strong>
                                   <button
                                 className="add">add to cart<\button>
                                   <\div>
                                   <\article>
                                   ))}
                       <div>
                         <\section>
                       {\*about*\}
                       <section id="about"
                       className="about">
                         <div className="container about-grid">
                         <div>
                         <p className="tag">ABOUT SANDE 
                      <\P>
                         <h2> Electronics made 
   easy
                       <h2>
     <div>
     <p> SANDE ELECTRONIC is an online shop for selling electronics in Rwanda products, order,payment and an admin dashboard will be added step by step
                       <\p>
     <\div>
     <\section>
   {\*CONTACT*\}
           <section id="contact"
   className=contact container">
   <p className="tag">CONTACT
   <\P>
   <h2>need an electronic product 
   <\h2>
   <p>Contact SANDE ELECTRONIC
   for prices.
   availability and orders.
   <\p>
   <a
   className=btn dark"
   href="tell:+250790912969">
   call 0790912969
   <\a>
   <\section>
   {\* FOOTER *\}
   <footer>
   <div className="container footer-inner">
   <b> SANDE ELECTRONIC 
   <\b>
   <span>
   2026 SANDE ELECTRONIC 
   All right reserved 
   <\span>
   <\div>
   <\footer>
   <\main>
   );
     }{}{
