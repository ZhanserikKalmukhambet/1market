import {Component, ElementRef, OnInit} from '@angular/core';
import {Category, SubCategory} from "../../models";

@Component({
  selector: 'app-sub-category-detail',
  templateUrl: './sub-category-detail.component.html',
  styleUrls: ['./sub-category-detail.component.css']
})
export class SubCategoryDetailComponent implements OnInit {
  categories: Category[] = [
    {
      name: "ВСЕ КАТЕГОРИИ",
      subCategories: [
        {
          name: "ТЕЛЕФОНЫ И ГАДЖЕТЫ"
        },
        {
          name: "БЫТОВАЯ ТЕХНИКА"
        },
        {
          name: "ТВ, АУДИО, ВИДЕО"
        },
        {
          name: "КОМПЬЮТЕРЫ"
        },
        {
          name: "МЕБЕЛЬ"
        },
        {
          name: "ПРОДУКТЫ ПИТАНИЯ"
        },
        {
          name: "ДЕТСКИЕ ТОВАРЫ"
        }
      ]
    },
    {
      name: "ТЕЛЕФОНЫ И ГАДЖЕТЫ",
      subCategories: [
        {
          name: "APPLE"
        },
        {
          name: "SAMSUNG"
        },
        {
          name: "NOKIA"
        },
        {
          name: "XIAOMI"
        },
        {
          name: "HUAWEI"
        },
        {
          name: "LG"
        }
      ]
    },
    {
      name: "БЫТОВАЯ ТЕХНИКА",
      subCategories: [
        {
          name: "КОНДИЦИОНЕРЫ"
        },
        {
          name: "СУШИЛКА ДЛЯ БЕЛЬЯ"
        },
        {
          name: "СУШИЛЬНЫЕ ШКАФЫ"
        },
        {
          name: "МОРОЗИЛЬНЫЕ КАМЕРЫ"
        },
        {
          name: "ВИННЫЕ ШКАФЫ"
        },
        {
          name: "КУХОННЫЕ ПЛИТЫ"
        },
        {
          name: "ХОЛОДИЬНИКИ"
        }
      ]
    },
    {
      name: "ТВ, АУДИО, ВИДЕО",
      subCategories: [
        {
          name: "НАУШНИКИ"
        },
        {
          name: "АУДИОТЕХНИКА"
        },
        {
          name: "ВИДЕОТЕХНИКА"
        },
        {
          name: "ТЕЛЕВИЗОРЫ"
        },
        {
          name: "ГАРНИТУРЫ"
        }
      ]
    },
    {
      name: "КОМПЬЮТЕРЫ",
      subCategories: [
        {
          name: "НАСТОЛЬНЫЕ ПК"
        },
        {
          name: "НОУТБУКИ"
        },
        {
          name: "АКСЕССУАРЫ"
        },
        {
          name: "КОМПЛЕКТУЮЩИЕ"
        }
      ]
    },
    {
      name: "МЕБЕЛЬ",
      subCategories: [
        {
          name: "СПАЛЬНЯ"
        },
        {
          name: "КУХНЯ"
        },
        {
          name: "ГОСТИНАЯ"
        },
        {
          name: "ПРИХОЖАЯ"
        },
        {
          name: "ДЕТСКАЯ КОМНАТА"
        },
        {
          name: "ОФИС И КАБИНЕТ"
        },
        {
          name: "ВАННАЯ КОМНАТА"
        }
      ]
    },
    {
      name: "ПРОДУКТЫ ПИТАНИЯ",
      subCategories: [
        {
          name: "МОЛОЧНЫЕ ПРОДУКТЫ"
        },
        {
          name: "СЛАДОСТИ И ВЫПЕЧКА"
        },
        {
          name: "ОВОЩИ И ФРУКТЫ"
        },
        {
          name: "КРУПЫ, ХЛОПЬЯ"
        },
        {
          name: "МАСЛА, СОУСЫ"
        },
        {
          name: "КОНСЕРВАЦИЯ"
        },
        {
          name: "КОЛБАСЫ, СОСИСКИ"
        }
      ]
    },
    {
      name: "ДЕТСКИЕ ТОВАРЫ",
      subCategories: [
        {
          name: "ДЛЯ МАЛЫШКА И МАМЫ"
        },
        {
          name: "ИГРУШКИ"
        },
        {
          name: "ДЕТСКОЕ ПИТАНИЕ"
        },
        {
          name: "ИГРОВАЯ ПЛОЩАДКА"
        }
      ]
    }
  ]

  r1 = 1;
  r2 = 2;
  r3 = 3;
  r4 = 4;
  r5 = 5;
  currentCategory: Category = this.categories[3]
  currentSubCategory: SubCategory = this.currentCategory.subCategories[0];

  // products: Product[] = [];
  // category : Category;


  // constructor(private categoryService: CategoryService, private route : ActivatedRoute) {
  //   // this.category = {} as Category
  //
  // }
  constructor(private elRef: ElementRef) {

  }

  //
  ngOnInit() {
    const myDiv = document.querySelectorAll('.currentCategory');
    console.log(myDiv)
    // @ts-ignore
    for (let div of myDiv) {
      // console.log(div)
      if (div.innerText === this.currentCategory) {
        div.style.color = 'black';
        div.style.fontWeight = 'bold';
      }
    }
  }
}
