import { createRef, RefObject, useEffect, useState } from 'react'

const useIntersectionObserver = (): [RefObject<HTMLDivElement>, boolean] => {

    const ref = createRef<HTMLDivElement>()
    const [intersecting, setIntersecting] = useState(false)

    const callbackFunction: IntersectionObserverCallback = (entries) => {
        const [entry] = entries
        setIntersecting(entry.isIntersecting)
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, {
            threshold: 0.25
        })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref])

    return [ref, intersecting]
}

export default useIntersectionObserver