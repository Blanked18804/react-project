import { useEffect } from 'react';

function UseIntersectionObserver(selector, action){

    useEffect(() => {
        const elements = document.querySelectorAll(`.${selector}`);
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle(action, entry.isIntersecting);
                if(entry.isIntersecting){
                    observer.unobserve(entry.target)
                }
            })
        }, {
            threshold: 0.3,
        })
        elements.forEach(element => {
            observer.observe(element)
        })
    }, [selector, action])

}

export default UseIntersectionObserver;