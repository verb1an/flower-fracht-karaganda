import { ref } from "vue";

export function useSlider(params) {
    const config = ref({
        // ? Quantity of items or percent visible content: 120 per - 1.2 items
        current: 1,

        viewItems: { type: ["number", "string"], default: 1 },
        gap: { type: 'number', default: 0 },
        transition: {type: 'number', default: 1000},

        pagination: { type: "boolean", default: false },
        controlls: { type: "boolean", default: true },
    });

    for (const [key, value] of Object.entries(params)) {
        if (config.value[key]) {
            if (typeof config.value[key] !== "object") {
                config.value[key] = value;
            } else {
                if (!isParamRequired(config.value[key], value)) {
                    console.error(`Failed type of props! Type of parameter is: '${config.value[key].type}'`);
                    break;
                }
                config.value[key].default = value;
            }
        }
    }

    function slide(el) {
        config.value.current = el;
    }

    function slideNext() {
        slide(config.value.current + 1);
    }

    function slidePrev() {
        if(config.value.current <= 1) {
            config.value.current = 1;
            return;
        }
        slide(config.value.current - 1);
    }

    function isParamRequired(param, value) {
        if (typeof param.type !== "object") {
            return typeof value == param.type;
        } else {
            return param.type.indexOf(typeof value) >= 0 ? true : false;
        }
    }

    return {
        config,
        slide,
        slideNext,
        slidePrev
    };
}
