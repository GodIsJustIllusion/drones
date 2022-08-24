$(document).ready(function(){
    $('.main-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        adaptiveHeight: true,
        // responsive: [{
        //     breakpoint: 2500,
        //     settings: 'unslick',
        // },
        // {
        //     breakpoint: 490,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 1,
        //     }
        // }]
    })

    $('.product__mainBlock-sliderSmall').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
        variableWidth: true,
        adaptiveHeight: true,
        centerMode: true,
        asNavFor: ".product__mainBlock-sliderBig",
    })

    $('.product__mainBlock-sliderBig').slick({
        arrows: false,
        fade: true,
        draggable: false,    
        asNavFor: ".product__mainBlock-sliderSmall",
    })

    $('.productsBlock-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        variableWidth: true,
        adaptiveHeight: true,
    })
});


let catTitle = document.querySelectorAll('.cat__title');

if (catTitle.length > 0) {
    for (let li of catTitle) {
        if (li.children.length > 1) {
            let span = document.createElement('span'); /* создание span */
            span.classList.add('show'); /* добавление класса для span */
            li.prepend(span); /* вставить span внутри li */
            span.append(span.nextSibling) /* присоединить к span следующий узел */
        }
    }
    
    category_list.onclick = function(event) {
        if (event.target.tagName != 'SPAN') return;
    
        let childrenList = event.target.parentNode.querySelector('ul');
        if (!childrenList) return;
        childrenList.hidden = !childrenList.hidden;
    
        if (childrenList.hidden) {
            event.target.classList.add('hide');
            event.target.classList.remove('show');
        }
    
        else {
            event.target.classList.add('show');
            event.target.classList.remove('hide');
        }
    }
}


let modal = document.getElementById("basket");
let btn = document.getElementById("button__basket");
let closeBtn = document.getElementsByClassName("basket__content-close")[0];
let contShop = document.getElementsByClassName("basket__content-contShop")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

closeBtn.onclick = function () {
    modal.style.display = "none";
}

contShop.onclick = function () {
    modal.style.display = "none";
}

let accord = document.querySelectorAll('.characteristics__item');

for (el of accord) {
    el.addEventListener('click', (e) => {
        let title = e.target.closest('.characteristics__item-title');
        if (!title) {
            return;
        }
    
        title.parentElement.classList.toggle('show');
    })
}

let aerophotoData = document.querySelector(".aerophotoData__tabs");

class DroneTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.aerophotoData__types-btn');
      this._elPanes = this._elTabs.querySelectorAll('.aerophotoData__types-content-block');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.aerophotoData__types-btn-active');
      const elPaneShow = this._elTabs.querySelector('.aerophotoData__types-content-block-show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('aerophotoData__types-btn-active') : null;
      elPaneShow ? elPaneShow.classList.remove('aerophotoData__types-content-block-show') : null;
      elLinkTarget.classList.add('aerophotoData__types-btn-active');
      elPaneTarget.classList.add('aerophotoData__types-content-block-show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.aerophotoData__types-btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
}

if (aerophotoData) {
    new DroneTabs('.aerophotoData__tabs');
};