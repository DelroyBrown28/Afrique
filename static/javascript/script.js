const buyButton = document.querySelector('.buy_tickets_btn');
const showBuyTickets = document.querySelector('left_block_mid_section');
const reverseButton = document.querySelector('.buy_tickets_title');

const tl = new TimelineLite({
    paused: true
});

tl.to('.fade_out', 0.3, {
        autoAlpha: '0',
        stagger: 0.2,
    })
    .to('.tatianaM_image', 0.3, {
        autoAlpha: '0',
    }, '-=0.5')
    .to('.buy_tickets_section', 0.3, {
        height: '100%'
    })
    .to('.left_block_mid_section', 0.3, {
        width: '0',
        autoAlpha: '0'
    })
    .fromTo('.buy_tickets_descrip_section', 0.3, {
        opacity: 0,
        width: 0,
    }, {
        opacity: 1,
        width: '65%',
    })
    .fromTo('.ticket_card', 0.3, {
        autoAlpha: '0'
    }, {
        autoAlpha: '1',
        stagger: 0.1,
    })
 

buyButton.addEventListener('click', () => {
    tl.play();
})

reverseButton.addEventListener('click', () => {
    tl.reverse();
})
