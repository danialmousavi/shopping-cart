import { SET_POST } from "./actionType"
export const getProducts=()=>{
    const products=[
        {
            id:1,
            name:'samsung S24 ',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            image:
            'https://dkstatics-public.digikala.com/digikala-products/b1481d737a04db2959ad94f3c88b305d3c2ef5e1_1705735755.jpg?x-oss-process=image/resize,h_1600/quality,q_80',
            price:300
        },
        {
            id:2,
            name:'Iphone 16  ',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            image:
            'https://dkstatics-public.digikala.com/digikala-products/5af568b4909435c6a215ad5e728e902db234b673_1732005482.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
            price:500
        },
        {
            id:3,
            name:'iPhone 13 Pro Max ',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            image:
            'https://dkstatics-public.digikala.com/digikala-products/bf3b67471337c7f0fc485c8e193e7fa7e0faba2d_1727606657.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
            price:450
        },
        {
            id:4,
            name:'Galaxy S23 Ultra ',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            image:
            'https://dkstatics-public.digikala.com/digikala-products/038690c946c7252df680e5adaff1d1bc2971918e_1725968705.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
            price:500
        },
        {
            id:5,
            name:'iPhone 16 Pro Max',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            image:
            'https://dkstatics-public.digikala.com/digikala-products/95a795aaf355d496f6235c771dd9a87fe099e1cf_1732005671.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
            price:600
        },
        {
            id:6,
            name:'Galaxy Z Fold5',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            image:
            'https://dkstatics-public.digikala.com/digikala-products/fdef53ae2f57c61b09a391247369adcfea48d63e_1727519819.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
            price:600
        }

    ]
return{
    type:SET_POST,
    payload:products
}
}