import GuestLayout from '@/Layouts/GuestLayout';
import { usePage } from '@inertiajs/react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

  
  export default function Example(props) {
    const { posts,sliders } = usePage().props.data

    return (
        <GuestLayout>
      <div className="bg-gray-100">


          <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
              {sliders.map((slider) => (
                <SwiperSlide>
                    <img className="object-fill w-full h-96"
                        src={slider.image}
                        alt={slider.title}
                    />
                </SwiperSlide>
              ))}
                
                {/* <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide> */}
            </Swiper>



        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {posts.map((post) => (
                <div key={post.title} className="group relative mb-4">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{post.category}</p>

                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    <a href={route('PostDetail',post.id)}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{post.description.substring(0, 100)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        </GuestLayout>
    )
  }
  