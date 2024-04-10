import { Container, Svg } from '@/helpers'
import locales from '@public/locales/ru.json'

import s from './styles.module.scss'

export const Skills = () => {
  return (
    <div className={s.skills}>
      <Container size='default'>
        <h2>{locales.skills.title}</h2>
        <div  className={s.content}>
          {locales.skills.items.map((item) => (
            <div key={item.id}>
              <div className={s.title}>
                <Svg type='menu' />
                <strong>{item.title}</strong>
              </div>
              <div className={s.items}>
                {item.skills.map((skill) => (
                  <div key={skill}>
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}