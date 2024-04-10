import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  type: 'default' | 'brand'
}

export const Logo: React.FC<LogoProps> = ({ type }) => {
  return (
    <Link href='/'>
      <Image
        src={type === 'default' ? 'logo.svg' : 'logo-brand.svg'}
        width='180'
        height='50'
        alt='logo'
      />
    </Link>
  )
}