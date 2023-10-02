import {ref, reactive} from 'vue';

export function useCarouselIntro (slides) {
    const list = reactive([]);
    const active = ref(0);
    

    function init() {
        slides.forEach((el, i)=> {
            list.push({
                img: el.img,
                country: el.country,
                pos: i
            });
        });
    }

    function switchSlide (key) {
        active.value = key;

        let timeoutControl = 0;
        const steps = list[key].pos;

        let timeout = () => {
            if(timeoutControl < steps) {
                setPosToItem();
                setTimeout(timeout, 240);
                timeoutControl+=1;
            }
        }

        setTimeout(timeout, 240);
        
    }

    function setPosToItem () {
        let newPos = [];
        for(let i = 1; i < list.length; i++) {
            newPos[i] = list[i-1].pos;
        }
        newPos[0] = list.at(-1).pos;
        newPos.forEach((el, i) => list[i].pos = el);
    }

    init();

    return {
        active,
        list,

        switchSlide
    }
}