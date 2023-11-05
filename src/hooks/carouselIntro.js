import { ref } from "vue";

export class useCarouselIntro {
    constructor(current, sliderLength) {
        this.posList = ref([]);
        this.current = current;
        this.sliderLength = sliderLength;

        for (let i = 0; i < this.sliderLength; i++) {
            this.posList.value.push(i);
        } 

        this.switchSlide(this.current)
    }

    switchSlide(value) {
        let timeoutControl = 0;
        const steps = this.getPosList[value];

        let timeout = () => {
            if (timeoutControl < steps) {
                this.setPosToItem();
                setTimeout(timeout, 240);
                timeoutControl += 1;
            }
        };

        setTimeout(timeout, 240);
    }

    setPosToItem() {
        let newPos = [];
        for (let i = 1; i < this.getPosList.length; i++) {
            newPos[i] = this.getPosList[i - 1];
        }
        newPos[0] = this.getPosList.at(-1);
        newPos.forEach((el, i) => (this.getPosList[i] = el));
    }

    set setPosList(value) {
        this.posList.value = value;
    }

    get getPosList() {
        return this.posList.value;
    }
}

// export function useCarouselIntro (slides) {
//     const list = reactive([]);
//     const active = ref(0);

//     function init() {
//         slides.forEach((el, i)=> {
//             list.push({
//                 img: el.img,
//                 country: el.country,
//                 pos: i
//             });
//         });
//     }

//     function switchSlide (key) {
//         active.value = key;

//         let timeoutControl = 0;
//         const steps = list[key].pos;

//         let timeout = () => {
//             if(timeoutControl < steps) {
//                 setPosToItem();
//                 setTimeout(timeout, 240);
//                 timeoutControl+=1;
//             }
//         }

//         setTimeout(timeout, 240);

//     }

//     function setPosToItem () {
//         let newPos = [];
//         for(let i = 1; i < list.length; i++) {
//             newPos[i] = list[i-1].pos;
//         }
//         newPos[0] = list.at(-1).pos;
//         newPos.forEach((el, i) => list[i].pos = el);
//     }

//     init();

//     return {
//         active,
//         list,

//         switchSlide
//     }
// }
