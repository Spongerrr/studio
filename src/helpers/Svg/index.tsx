interface SvgProps {
  type: string
}

export const Svg: React.FC<SvgProps> = ({ type }) => {
  switch (type) {
    case 'menu':
      return (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8Z" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8C3 7.44772 2.55228 7 2 7C1.44772 7 1 7.44772 1 8Z" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 2C7 2.55228 7.44772 3 8 3C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2Z" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case 'email':
      return (
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L8.10764 6.61227L8.10967 6.61396C8.78785 7.11128 9.12714 7.3601 9.49876 7.45621C9.82723 7.54117 10.1725 7.54117 10.501 7.45621C10.8729 7.36001 11.2132 7.11047 11.8926 6.61227C11.8926 6.61227 15.8101 3.60594 18 2M1 11.8002V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.4796 1 17.9074 1.21799C18.2837 1.40973 18.5905 1.71547 18.7822 2.0918C19 2.5192 19 3.07899 19 4.19691V11.8036C19 12.9215 19 13.4805 18.7822 13.9079C18.5905 14.2842 18.2837 14.5905 17.9074 14.7822C17.48 15 16.921 15 15.8031 15H4.19691C3.07899 15 2.5192 15 2.0918 14.7822C1.71547 14.5905 1.40973 14.2842 1.21799 13.9079C1 13.4801 1 12.9203 1 11.8002Z" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case 'phone':
      return (
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.00246 2.25722C7.69873 1.4979 6.96332 1 6.14551 1H3.39474C2.3483 1 1.5 1.8481 1.5 2.89453C1.5 11.7892 8.71078 19 17.6055 19C18.6519 19 19.5 18.1516 19.5 17.1052L19.5005 14.354C19.5005 13.5361 19.0027 12.8009 18.2434 12.4971L15.6069 11.4429C14.9249 11.1701 14.1483 11.2929 13.5839 11.7632L12.9035 12.3307C12.1089 12.9929 10.9396 12.9402 10.2082 12.2088L8.29222 10.2911C7.56079 9.55962 7.50673 8.39134 8.16895 7.59668L8.73633 6.9163C9.20661 6.35195 9.33049 5.57516 9.05766 4.89309L8.00246 2.25722Z" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case 'chat':
      return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.00977 19.8018C9.33126 20.5639 10.8645 21 12.4996 21C17.4702 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 13.6351 3.93604 15.1684 4.69819 16.4899L4.70114 16.495C4.77448 16.6221 4.81146 16.6863 4.82821 16.7469C4.84401 16.804 4.84842 16.8554 4.84437 16.9146C4.84003 16.9781 4.8186 17.044 4.77468 17.1758L4.00586 19.4823L4.00489 19.4853C3.84268 19.9719 3.76157 20.2152 3.81938 20.3774C3.86979 20.5187 3.98169 20.6303 4.12305 20.6807C4.28482 20.7384 4.52705 20.6577 5.01155 20.4962L5.01758 20.4939L7.32405 19.7251C7.45537 19.6813 7.52214 19.6591 7.58559 19.6548C7.64475 19.6507 7.69578 19.6561 7.75293 19.6719C7.81368 19.6887 7.87783 19.7257 8.00563 19.7994L8.00977 19.8018Z" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case 'arrow-up':
      return (
        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 5L5.5 1L9.5 5" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case 'arrow-down':
      return (
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1.85254L5 5.85254L1 1.85254" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case 'upload':
      return (
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 16V10M8 10L5 12M8 10L11 12M9 1.00087C8.90451 1 8.79728 1 8.67471 1H4.2002C3.08009 1 2.51962 1 2.0918 1.21799C1.71547 1.40973 1.40973 1.71547 1.21799 2.0918C1 2.51962 1 3.08009 1 4.2002V15.8002C1 16.9203 1 17.4801 1.21799 17.9079C1.40973 18.2842 1.71547 18.5905 2.0918 18.7822C2.51921 19 3.079 19 4.19694 19L11.8031 19C12.921 19 13.48 19 13.9074 18.7822C14.2837 18.5905 14.5905 18.2842 14.7822 17.9079C15 17.4805 15 16.9215 15 15.8036V7.32568C15 7.20296 15 7.09561 14.9991 7M9 1.00087C9.28564 1.00347 9.46634 1.01385 9.63884 1.05526C9.84291 1.10425 10.0379 1.18526 10.2168 1.29492C10.4186 1.41857 10.5918 1.59182 10.9375 1.9375L14.063 5.06298C14.4089 5.40889 14.5809 5.58136 14.7046 5.78319C14.8142 5.96214 14.8953 6.15726 14.9443 6.36133C14.9857 6.53376 14.9963 6.71451 14.9991 7M9 1.00087V3.8C9 4.9201 9 5.47977 9.21799 5.90759C9.40973 6.28392 9.71547 6.59048 10.0918 6.78223C10.5192 7 11.079 7 12.1969 7H14.9991M14.9991 7H15.0002" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case 'burger':
      return (
        <svg width="35" height="26" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.0498 2.45184H31.9838" stroke="black" strokeWidth="4.13343" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.0166 13H31.9506" stroke="black" strokeWidth="4.13343" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.0498 23.119H31.9838" stroke="black" strokeWidth="4.13343" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case 'arrow-corner-up':
      return (
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.25 11L11.25 1M11.25 1H3.25M11.25 1V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case 'close':
      return (
        <svg width="20" height="16" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z" fill="#000">
          </path>
        </svg>
      )

    default:
      return
  }
}