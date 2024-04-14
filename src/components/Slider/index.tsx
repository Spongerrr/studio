'use client'

import projects from '@/data/projects.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Project } from '@/ui'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'

import s from './styles.module.scss'

import 'swiper/scss/effect-coverflow'
import 'swiper/scss/autoplay'
import 'swiper/scss/pagination'
import 'swiper/scss'

const titleAnimation = {
  hidden: {
    x: 500,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

export const Slider = () => {

  return (
    <motion.div
      id='best'
      className={s.wrapper}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2 }}
    >
      <motion.h2 variants={titleAnimation}>Лучшие проекты</motion.h2>
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
        {projects.map((project) => (
          project.best && (
            <SwiperSlide key={project.id} className={s.slider}>
              <div className={s.container}>
                <Project project={project} type='slider' />
              </div>
            </SwiperSlide>
          )
        ))}
      </Swiper>
    </motion.div>
  )
}