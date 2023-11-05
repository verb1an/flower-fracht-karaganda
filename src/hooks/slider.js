import { ref, reactive } from "vue";

export class useSlider {
    constructor(sliderItem, params) {
        this.container = sliderItem;
        this.style = ref("");

        this.config = reactive({
            _current: 1,
            _type: "line-fade",
            _viewItems: 1, // c: Quantity of items or percent visible content: 120 per - 1.2 items
            _gap: 0,
            _transition: 1000,
            _slides: 0,
            _controlls: true,
            _pagination: false,
            _paginationClass: "v_button-pag",
            _controllsClassNext: "v_button-move-next",
            _controllsClassPrev: "v_button-move-prev",
        });

        for (const [key, value] of Object.entries(params)) {
            this.config[`_${key}`] = value;
        }
    }

    init() {
        this.setSlides = this.getContainer.querySelectorAll(".slider__item").length;
        this.#slide(this.getCurrent);
    }

    reconfig(params) {
        for (const [key, value] of Object.entries(params)) {
            this.config[`_${key}`] = value;
        }

        this.init();
    }

    click(event) {
        if (event.target.closest(`.${this.getControllsClassNext}`)) {
            if (this.getCurrent == this.getSlides) return;
            this.#slide(this.getCurrent + 1);
        } else if (event.target.closest(`.${this.getControllsClassPrev}`)) {
            if (this.getCurrent <= 1) return;
            this.#slide(this.getCurrent - 1);
        } else if (event.target.closest(`.${this.getPaginationClass}`)) {
            this.#slide(event.target.closest(`.${this.getPaginationClass}`).getAttribute("data-pag"));
        }
    }

    #slide(value) {
        this.setCurrent = value;
        this.setStyle = this.#generateNewStyle();

        this.getContainer.querySelectorAll(".slider__item").forEach((el) => el.classList.remove("active"));
        this.getContainer.querySelectorAll(".slider__item")[this.getCurrent - 1].classList.add("active");
    }

    #generateNewStyle() {
        // c: Can be called only after full mounted
        let addStyles = "";
        let slideItemWidth = this.getContainer.getBoundingClientRect().width / this.getViewItems - this.getGap / 2;
        let types = {
            "line-fade": `transform: translateX(${-(this.getCurrent - 1) * (slideItemWidth + this.getGap)}px);`,
        };

        /* 
            c: Here we formatted css styles and save in constructor. In slideItem we added their from slider class (slider.getStyle)
            c: Main we have 3 types of styles 
            c: First allways style. This type is added without some condintions (transition, width)
            c: Second is slider type style, main cond is config.type (transform, opacity)
            c: Last type is custom style condition (if we have gap, we added margin and the same)
        */

        addStyles += `transition: ${this.getTransition}ms;`;
        addStyles += `width: ${slideItemWidth}px; min-width: ${slideItemWidth}px;`;

        addStyles += types[this.getType] ?? "";

        if (this.getGap > 0) {
            addStyles += `margin-right: ${this.getGap}px`;
        }

        return addStyles;
    }

    get getContainer() {
        return this.container.value;
    }

    set setContainer(value) {
        this.container.value = value;
    }

    get getStyle() {
        return this.style.value;
    }

    set setStyle(value) {
        this.style.value = value;
    }

    get getCurrent() {
        return this.config._current;
    }

    set setCurrent(value) {
        this.config._current = value;
    }

    get getType() {
        return this.config._type;
    }

    set setType(value) {
        this.config._type = value;
    }

    get getViewItems() {
        return this.config._viewItems;
    }

    set setViewItems(value) {
        this.config._viewItems = value;
    }

    get getGap() {
        return this.config._gap;
    }

    set setGap(value) {
        this.config._gap = value;
    }

    get getTransition() {
        return this.config._transition;
    }

    set setTransition(value) {
        this.config._transition = value;
    }

    get getSlides() {
        return this.config._slides;
    }

    set setSlides(value) {
        this.config._slides = value;
    }

    get getControlls() {
        return this.config._controlls;
    }

    set setControlls(value) {
        this.config._controlls = value;
    }

    get getPagination() {
        return this.config._pagination;
    }

    set setPagination(value) {
        this.config._pagination = value;
    }

    get getPaginationClass() {
        return this.config._paginationClass;
    }

    set setPaginationClass(value) {
        this.config._paginationClass = value;
    }

    get getControllsClassNext() {
        return this.config._controllsClassNext;
    }

    set setControllsClassNext(value) {
        this.config._controllsClassNext = value;
    }

    get getControllsClassPrev() {
        return this.config._controllsClassPrev;
    }

    set setControllsClassPrev(value) {
        this.config._controllsClassPrev = value;
    }
}
