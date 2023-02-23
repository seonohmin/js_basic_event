import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js";

const snackCardList = document.getElementsByClassName('snack-card-list')[0];
const cardInfoList = [
    {
        id: 1,
        imgSrc: '/js_basic_event/public/assets/초코꼬북칩.jpeg',
        name: '초코꼬북칩',
        description: '맛있는 초코꼬북칩'
    },
    {
        id: 2,
        imgSrc: '/js_basic_event/public/assets/나쵸.jpeg',
        name: '나쵸',
        description: '맛있는 나쵸'
    },
    {
        id: 3,
        imgSrc: '/js_basic_event/public/assets/허니버터칩.jpeg',
        name: '허니버터칩',
        description: '맛있는 허니버터칩'
    },
    {
        id: 4,
        imgSrc: '/js_basic_event/public/assets/홈런볼.jpeg',
        name: '홈볼볼',
        description: '맛있는 홈볼볼'
    },
]

const getSelectCardDOM = ({
    id,
    imgSrc,
    name,
    description,    
}) => {
    const snackCardDOM = makeDOMwithProperties('button',{
        id : `select-${id}`,
        className : 'snack-card',
    });
    const imageDOM = makeDOMwithProperties('img',{
        src : imgSrc,
        alt : name,
    });
    const descriptionContainerDOM = makeDOMwithProperties('div',{
        className: 'snack-description',
    });
    const nameDOM = makeDOMwithProperties('div',{
        innerHTML : name,
    });
    const descriptionDOM = makeDOMwithProperties('div',{
        innerHTML : description,
    });

    appendChildrenList(descriptionContainerDOM, [nameDOM, descriptionDOM]);
    appendChildrenList(snackCardDOM, [imageDOM, descriptionContainerDOM]);

    return snackCardDOM;

};

export const setSelectCards = () => {
    cardInfoList.forEach((cardInfo) => {
        const selectCardDOM = getSelectCardDOM(cardInfo);
        snackCardList.appendChild(selectCardDOM);
    });
};