const headerDOM = document.getElementsByTagName('header')[0];

const selectAnchorMenuDOM = document.getElementById('anchor-to-select');
const resultAnchorMenuDOM = document.getElementById('anchor-to-result');
const mbtiAnchorMenuDOM = document.getElementById('anchor-to-mbti');

const selectSectionDOM = document.getElementById('participate-section');
const resultSectionDOM = document.getElementById('result-section');
const mbtiSectionDOM = document.getElementById('mbti-section');

export const setTabMenu = () => {

    selectAnchorMenuDOM.onclick = () => {
        // const scrollTargetY = selectSectionDOM.offsetTop;
        // window.scroll({
        //     top: scrollTargetY,
        //     left: 0,
        //     behavior: 'smooth',
        // });
        selectSectionDOM.scrollIntoView({ behavior: 'smooth' });
    };
};