import { reactive, ref } from 'vue';

export function useTabs(tabs) {
    const list = reactive([]);
    const active = ref(0);

    function init() {
        tabs.forEach((el) => {
            list.push(el)
        })
    }

    init();

    return {
        list,
        active
    }
}