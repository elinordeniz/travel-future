import {useEffect, useState} from 'react'

const useGetHeight = () => {
    const [height, setHeight]= useState(null)
    useEffect(()=>{
        window.addEventListener('resize', ()=>
       { setHeight(window.innerHeight)}
        )

        return  window.removeEventListener('resize', ()=>
        { setHeight(window.innerHeight)}
         )
    }, [height])
  return height<780 ? 780 : height
}

export default useGetHeight