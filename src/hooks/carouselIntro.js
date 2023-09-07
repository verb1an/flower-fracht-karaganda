import {ref, reactive} from 'vue';

export function useCarouselIntro (slides) {
    const list = reactive([]);
    const listShowControlls = reactive([]);
    const active = ref(0);
    

    function init() {
        slides.forEach((el, i)=> {
            list.push({
                img: el,
                pos: i
            });
        }); 

        setShowControlls();
    }

    function switchSlide (key) {
        active.value = key;
        setShowControlls();

        // for(let i = 0; i < list[key].pos; i++) {
        //     setPosToItem();
        // }

        let timeoutControl = 0;
        const steps = list[key].pos;

        let timeout = () => {
            console.log(steps)
            if(timeoutControl < steps) {
                setPosToItem();
                setTimeout(timeout, 240);
                timeoutControl+=1;
            }
        }

        setTimeout(timeout, 240);
        
    }

    function setShowControlls () {
        listShowControlls.value = [];
        for(let i = 0; i < list.length; i++) listShowControlls.value.push(false);

        for(let i = 1; i <= 3; i++) {
            if(active.value + i > list.length - 1) {
                listShowControlls.value[active.value + i - list.length] = true;
            }else{
                listShowControlls.value[active.value + i] = true;
            }
        }
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
        listShowControlls,

        switchSlide
    }
}