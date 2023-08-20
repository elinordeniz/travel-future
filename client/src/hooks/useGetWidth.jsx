import {useEffect, useState} from 'react'

const useGetWidth = () => {
    const [width, setWidth]= useState(null)
    useEffect(()=>{
        window.addEventListener('resize', ()=>
       { setWidth(window.innerWidth)}
        )

        return  window.removeEventListener('resize', ()=>
        { setHeight(window.innerWidth)}
         )
    }, [width])
  return width

}

export default useGetWidth