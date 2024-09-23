import Image from 'next/image'

import bgtop from "./images/bg-top.svg"

const Page = () => {
  return (
    <div className='h-screen justify-center items-center bg-white'>
        <Image src={bgtop} alt='img' />
    </div>
  )
}

export default Page