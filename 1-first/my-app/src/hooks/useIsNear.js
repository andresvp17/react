import {useEffect, useState, useRef} from "react";

export default function useIsNear({ externalRef, once = true } = {}){
    const [isNear, setShow] = useState(false)
    const ref = useRef()
    
    useEffect(() =>{
        const element = externalRef ? externalRef.current : ref.current
        const onChange = (entries, observer) =>{
            const firstElement = entries[0]
            if(firstElement.isIntersecting){
                console.log(firstElement);
                setShow(true)
                once && observer.disconnect()
            } else {
                !once && setShow(false)
            }
        }
        
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '200px'
        })
        
        if(element) observer.observe(element)
        return () => observer && observer.disconnect()
    })
    return {isNear, ref}
}