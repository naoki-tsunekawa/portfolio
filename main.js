class MobileMenu{
    constructor(){
        this.DOM = {};
        this.DOM.btn = document.querySelector(".mobile-menu__btn");
        this.DOM.cover = document.querySelector(".mobile-menu__cover");
        this.DOM.container = document.querySelector("#global-container");
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType(){
        // PCかスマフォで開いているかを判別する。
        // ontouchstartの有無でイベントを登録
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle(){
        this.DOM.container.classList.toggle('menu-open');
    }

    _addEvent(){
        // PCスマホ両方対応できるようにイベントを変数として格納
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    }
}

new MobileMenu();