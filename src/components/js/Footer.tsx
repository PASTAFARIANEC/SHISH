import React from "react";
import '../css/footer.css'

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer__column">
                <div className="column__title">О ШИШ</div>
                <div className="column__title">О магазине</div>
                <div className="column__title">Пункты выдачи заказов ШИШ</div>
                <div className="column__title">Контакты</div>
                <div className="column__title">Наша история</div>
                <div className="column__title">Карьера</div>
                <div className="column__title">Бренды A-Z</div>
            </div>
            <div className="footer__column">
                <div className="column__title">ОНЛАЙН ПОКУПКИ</div>
                <div className="column__title">Мобильное приложение</div>
                <div className="column__title">Оплата</div>
                <div className="column__title">Доставка</div>
                <div className="column__title">Обмен и возврат</div>
                <div className="column__title">Условия продажи</div>
                <div className="column__title">Исследования</div>
                <div className="column__title">Акция СБП</div>
            </div>
            <div className="footer__column">
                <div className="column__title">УСЛУГИ</div>
                <div className="column__title">Шопинг-сервисы</div>
                <div className="column__title">Подарочная карта</div>
                <div className="column__title">Подарочная упаковка</div>
                <div className="column__title">Кафе и рестораны</div>
                <div className="column__title">Такси для клиентов</div>
                <div className="column__title">Карта лояльности</div>
            </div>
            <div className="footer__column">
                <div className="column__title">НОВОСТИ</div>
                <div className="column__title">Новости и события</div>
            </div>
        </footer>
    )
}