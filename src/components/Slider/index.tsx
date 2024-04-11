'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Project } from '@/ui'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'
import data from '@/helpers/data.json'

import s from './styles.module.scss'

import 'swiper/scss/effect-coverflow'
import 'swiper/scss/autoplay'
import 'swiper/scss/pagination'
import 'swiper/scss'


export const Slider = () => {

  return (
    <div className={s.wrapper}>
      <h2>Лучшие проекты</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        autoplay={{
          delay: 2000
        }}
        pagination={{
          enabled: true,
          horizontalClass: s.pagination,
          bulletClass: `${s.bullet} swiper-pagination-bullet`
        }}
        slidesPerView={'auto'}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className={s.swiper}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 3.5,
          slideShadows: false
        }}
      >
        {data.map((project) => (
          <SwiperSlide key={project.id} className={s.slider}>
            <div className={s.container}>
              <Project project={project} type='slider' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}