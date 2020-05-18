const INITITAL_STATE = {
    sections: [{
        title: 'Hats',
        ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
        col: 4,
        linkUrl: 'shop/hats',
        id: 1
    },
    {
        title: 'Jackets',
        ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
        col: 4,
        linkUrl: 'shop/jackets',
        id: 2
    },
    {
        title: 'Sneakers',
        ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
        col: 4,
        linkUrl: 'shop/sneakers',
        id: 3
    },
    {
        title: 'Women',
        ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
        col: 6,
        linkUrl: 'shop/womens',
        id: 4
    },
    {
        title: 'Men',
        ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
        col: 6,
        linkUrl: 'shop/mens',
        id: 5
    }]
};

const directoryReducer = (state = INITITAL_STATE, action) =>
{
    switch(action.type){
        default:
        return state;
    }
};

export default directoryReducer;
