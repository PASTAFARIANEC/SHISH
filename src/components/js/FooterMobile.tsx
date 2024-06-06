import React, { useState } from "react";

type FooterElementType = {title: string, subtitle: string[]}


const FooterElement: React.FC<FooterElementType> = ({title, subtitle}) => {

    const [dropdown, setDropdown] = useState<boolean>(false)

    return (
        <div className="footer__element">
            <div style={{display:'flex', alignItems:'center'}} onClick={(): void => setDropdown(!dropdown)}>
                <div className="footer__dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                        className={dropdown ? 'dropdown_active' : ''}
                    >
                        <path d="M6 19L15.0401 9.9599L6.07857 1" stroke="currentColor" stroke-linecap="round"></path>
                    </svg>
                </div>
                <div className="footer__title">{title}</div>
            </div>
            <div className="footer__menu" style={dropdown ? {display: 'block'} : {display:'none'}}>
                {subtitle.map(item => (
                    <div className="menu__subtitle">{item}</div>
                ))}
            </div>
        </div>
    )
}


export const FooterMobile: React.FC = () => {
    return (
        <footer>
            <FooterElement title="О ШИШ" subtitle={[
                'О магазине', 'Пункты выдачи заказов ШИШ', 'Контакты',
                'Наша история', 'Карьера', 'Бренды A-Z'
            ]} />
            <FooterElement title="ОНЛАЙН ПОКУПКИ" subtitle={[
                'Мобильное приложение', 'Оплата', 'Доставка', 'Обмен и возврат',
                'Условия продажи', 'Исследования', 'Акция СБП'
            ]} />
            <FooterElement title="УСЛУГИ" subtitle={[
                'Шопинг-сервисы', 'Подарочная карта', 'Подарочная упаковка', 'Кафе и рестораны',
                'Такси для клиентов', 'Карта лояльности'
            ]} />
        </footer>
    )
}