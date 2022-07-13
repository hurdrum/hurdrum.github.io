if (screen.width > 770) {
document.querySelectorAll('.tariff-card').forEach(item => {
    item.addEventListener('mouseover', () => {
        let prevCard = item.previousSibling.previousSibling;
        let nextCard = item.nextSibling.nextSibling;
        if (prevCard && nextCard) {
            item.style.marginLeft = '-35px';
            item.style.marginRight = '-15px';
        }
        if (nextCard && !prevCard) {
            item.style.marginRight = '-10px';
        }
        if (!nextCard && prevCard) {
            item.style.marginLeft = '-30px';
        }
    })
    item.addEventListener('mouseout', () => {
        item.style = '';
    })
});
}