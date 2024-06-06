import i1 from '../media/img1.png'
import i2 from '../media/img2.png'
import i3 from '../media/img3.png'
import i4 from '../media/img4.png'
import i5 from '../media/img5.png'
import i6 from '../media/img6.png'
import i7 from '../media/img7.png'
import i8 from '../media/img8.png'
import s1 from '../media/sl1.jpg'
import s2 from '../media/sl2.jpg'
import s3 from '../media/sl3.jpg'
import w1 from '../media/w1.jpg'
import w2 from '../media/w2.jpg'


type CategoriesType = {
    name: string,
    image?: string
}

export const headerCategories: CategoriesType[] = [
    {name: 'НОВИНКИ'},
    {name: 'БРЕНДЫ'},
    {name: 'ОДЕЖДА'},
    {name: 'ОБУВЬ'},
    {name: 'СУМКИ'},
    {name: 'АКСЕССУАРЫ'},
    {name: 'ПОДАРОЧНЫЕ КАРТЫ'},
    {name: 'ЧАСЫ'}
]


export const newArrivals: CategoriesType[] = [
    {name: 'КУРТКИ', image: i1},
    {name: 'ФУТБОЛКИ', image: i2},
    {name: 'КЕДЫ', image: i3},
    {name: 'ДЖИНСЫ', image: i4},
    {name: 'ХУДИ', image: i5},
    {name: 'ЛОФЕРЫ', image: i6},
    {name: 'ЛОФЕРЫ', image: i7},
    {name: 'БРЮКИ', image: i8},
]


export const whatWear: string[] = [
    s1, s2, s3
]

export const bestBags: string[] = [
    w1, w2
]