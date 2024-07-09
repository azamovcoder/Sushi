import './foods.scss'

import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import { FC, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

import { GrLinkNext } from "react-icons/gr";
import axios from "axios";

interface productSchema {
    id: number,
    price: number,
    title: string,
    stock: number,
    images: string[],
}

const API_URL: string = 'https://dummyjson.com'

const Foods: FC = () => {
    const [products, setProducts] = useState<productSchema[] | null>(null)
    useEffect(() => {
        axios
            .get(`${API_URL}/products`, { params: { limit: 12 } })
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='food container' >
            <h3 className="food__title">Popular Foods / 人気 </h3>
            <div className="food__swiper">
                <Swiper
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[FreeMode, Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {products?.map((product: productSchema): JSX.Element => (
                        <SwiperSlide key={product.id} className="food__card">
                            <div className="food__img">
                                <img src={product.images[0]} alt="" />
                            </div>
                            <h3 className='food__product__title'>{product.title}</h3>
                            <div className="food__infos">
                                <p className='food__price'>{product.stock}</p>
                                <p className='food__price'>${product.price}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button className="food__btn"><span>Explore Foods</span> <GrLinkNext /></button>
        </div >
    )
}

export default Foods