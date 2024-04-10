'use client'

import locales from '@public/locales/ru.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Project } from '@/ui'
import { Container } from '@/helpers'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'

import s from './styles.module.scss'

import 'swiper/scss/effect-coverflow'
import 'swiper/scss/autoplay'
import 'swiper/scss/pagination'
import 'swiper/scss'

export const Slider = () => {
  return (
    <div className={s.wrapper}>
      <h2>{locales.projects.title}</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
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
        {locales.projects.items.map((project) => (
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