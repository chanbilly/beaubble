import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import 'swiper/css'

export default function Product() {
  return (
    <div id="product">
       <Swiper
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        mousewheel={true}
      >
        <SwiperSlide>
          <img src="/img/product-1.jpg" alt="Wine Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/product-2.jpg" alt="Wine Image 2"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/product-3.jpg" alt="Wine Image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/product-1.jpg" alt="Wine Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/product-2.jpg" alt="Wine Image 2"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/product-3.jpg" alt="Wine Image 3" />
        </SwiperSlide>
      </Swiper>
      <motion.div 
        animate={{opacity: [0, 1], y: [20, 0]}} 
        transition={{ duration: 0.8, ease: [0.45,0.05,0.55,0.95]}} 
        className="product_content w-1/2">
        <h1>EF Psittaciformes</h1>
        <p>Experience the timeless elegance of our antique parrot painting, a masterpiece that exudes classical charm. Pair this visual delight with a glass of our finest red wine, rich and luxurious, reflecting the sophistication of a bygone era. Together, they create a perfect ambiance of refined taste and vintage allure.</p>
        <div className="price">$792</div>
      </motion.div>
    </div>
  )
}