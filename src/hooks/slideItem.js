import { ref } from "vue";

export function useSlideItem(slideItem) {
    const item = ref(slideItem);

    console.log(slideItem)

    return {
        item
    }
}
