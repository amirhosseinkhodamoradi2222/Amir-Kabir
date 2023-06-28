import React from 'react'
import Navbars from './components/Nanbar/Navbars'
import Footer from './components/Footer/Footer'
import './Notfound.css'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div>
      <Navbars/>
      <section className="page_404 mr-3">
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-12 col-sm-offset-1 w-full text-center">
		<div className="four_zero_four_bg">
			<h1 className="text-center font-bold">404</h1>
		
		
		</div>
		
		<div classNameName="contant_box_404">
		<h3 classNameName="h2 font-light">
		صفحه مورد نظر شما در دسترس نیست!
		</h3>
		
		<Link to={'/'} className='font-light text-oreng text-2xl no-underline'>صفحه اصلی</Link>
		
		<a href="" classNameName="link_404"></a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
      <Footer/>
    </div>
  )
}
