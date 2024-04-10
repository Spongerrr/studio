import s from './styles.module.scss'

interface ContainerProps {
	children: React.ReactNode
	size: 'default' | 'stretch' | 'full'
}

export const Container: React.FC<ContainerProps> = ({ children, size }) => {

	switch (size) {

		case 'default':
			return <div className={s.default}>{children}</div>

		case 'stretch':
			return <div className={s.stretch}>{children}</div>

		case 'full':
			return <div className={s.full}>{children}</div>

		default:
			break
	}
}