import { Component } from '@angular/core';
import {Category} from "../../models";

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.css']
})
export class CategoriesNavComponent {
  categories : Category[] = [
    {
      name : "ТЕЛЕФОНЫ И ГАДЖЕТЫ",
      subCategories :  [
        {
          name : "APPLE"
        },
        {
          name : "SAMSUNG"
        },
        {
          name : "NOKIA"
        },
        {
          name : "XIAOMI"
        },
        {
          name : "HUAWEI"
        },
        {
          name : "LG"
        }
      ]
    },
    {
      name : "БЫТОВАЯ ТЕХНИКА",
      subCategories :  [
        {
          name : "КОНДИЦИОНЕРЫ"
        },
        {
          name : "СУШИЛКА ДЛЯ БЕЛЬЯ"
        },
        {
          name : "СУШИЛЬНЫЕ ШКАФЫ"
        },
        {
          name : "МОРОЗИЛЬНЫЕ КАМЕРЫ"
        },
        {
          name : "ВИННЫЕ ШКАФЫ"
        },
        {
          name : "КУХОННЫЕ ПЛИТЫ"
        },
        {
          name : "ХОЛОДИЬНИКИ"
        }
      ]
    },
    {
      name : "ТВ, АУДИО, ВИДЕО",
      subCategories :  [
        {
          name : "НАУШНИКИ"
        },
        {
          name : "АУДИОТЕХНИКА"
        },
        {
          name : "ВИДЕОТЕХНИКА"
        },
        {
          name : "ТЕЛЕВИЗОРЫ"
        },
        {
          name : "ГАРНИТУРЫ"
        }
      ]
    },
    {
      name : "КОМПЬЮТЕРЫ",
      subCategories :  [
        {
          name : "НАСТОЛЬНЫЕ ПК"
        },
        {
          name : "НОУТБУКИ"
        },
        {
          name : "АКСЕССУАРЫ"
        },
        {
          name : "КОМПЛЕКТУЮЩИЕ"
        }
      ]
    },
    {
      name : "МЕБЕЛЬ",
      subCategories :  [
        {
          name : "СПАЛЬНЯ"
        },
        {
          name : "КУХНЯ"
        },
        {
          name : "ГОСТИНАЯ"
        },
        {
          name : "ПРИХОЖАЯ"
        },
        {
          name : "ДЕТСКАЯ КОМНАТА"
        },
        {
          name : "ОФИС И КАБИНЕТ"
        },
        {
          name : "ВАННАЯ КОМНАТА"
        }
      ]
    },
    {
      name : "ПРОДУКТЫ ПИТАНИЯ",
      subCategories :  [
        {
          name : "МОЛОЧНЫЕ ПРОДУКТЫ"
        },
        {
          name : "СЛАДОСТИ И ВЫПЕЧКА"
        },
        {
          name : "ОВОЩИ И ФРУКТЫ"
        },
        {
          name : "КРУПЫ, ХЛОПЬЯ"
        },
        {
          name : "МАСЛА, СОУСЫ"
        },
        {
          name : "КОНСЕРВАЦИЯ"
        },
        {
          name : "КОЛБАСЫ, СОСИСКИ"
        }
      ]
    },
    {
      name : "ДЕТСКИЕ ТОВАРЫ",
      subCategories :  [
        {
          name : "ДЛЯ МАЛЫШКА И МАМЫ"
        },
        {
          name : "ИГРУШКИ"
        },
        {
          name : "ДЕТСКОЕ ПИТАНИЕ"
        },
        {
          name : "ИГРОВАЯ ПЛОЩАДКА"
        }
      ]
    }
  ]
  // static categories: Category[];

}
