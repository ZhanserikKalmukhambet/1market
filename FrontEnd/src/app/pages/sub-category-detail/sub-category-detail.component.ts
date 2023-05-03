import {Component, ElementRef, OnInit} from '@angular/core';
import {CategoryBack,SubCategoryBack} from "../../models";
import {CategoryService} from "../../services/category/category.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sub-category-detail',
  templateUrl: './sub-category-detail.component.html',
  styleUrls: ['./sub-category-detail.component.css']
})
export class SubCategoryDetailComponent implements OnInit {
  // categories: Category[] = [
  //   {
  //     name: "ВСЕ КАТЕГОРИИ",
  //     subCategories: [
  //       {
  //         name: "ТЕЛЕФОНЫ И ГАДЖЕТЫ"
  //       },
  //       {
  //         name: "БЫТОВАЯ ТЕХНИКА"
  //       },
  //       {
  //         name: "ТВ, АУДИО, ВИДЕО"
  //       },
  //       {
  //         name: "КОМПЬЮТЕРЫ"
  //       },
  //       {
  //         name: "МЕБЕЛЬ"
  //       },
  //       {
  //         name: "ПРОДУКТЫ ПИТАНИЯ"
  //       },
  //       {
  //         name: "ДЕТСКИЕ ТОВАРЫ"
  //       }
  //     ]
  //   },
  //   {
  //     name: "ТЕЛЕФОНЫ И ГАДЖЕТЫ",
  //     subCategories: [
  //       {
  //         name: "APPLE"
  //       },
  //       {
  //         name: "SAMSUNG"
  //       },
  //       {
  //         name: "NOKIA"
  //       },
  //       {
  //         name: "XIAOMI"
  //       },
  //       {
  //         name: "HUAWEI"
  //       },
  //       {
  //         name: "LG"
  //       }
  //     ]
  //   },
  //   {
  //     name: "БЫТОВАЯ ТЕХНИКА",
  //     subCategories: [
  //       {
  //         name: "КОНДИЦИОНЕРЫ"
  //       },
  //       {
  //         name: "СУШИЛКА ДЛЯ БЕЛЬЯ"
  //       },
  //       {
  //         name: "СУШИЛЬНЫЕ ШКАФЫ"
  //       },
  //       {
  //         name: "МОРОЗИЛЬНЫЕ КАМЕРЫ"
  //       },
  //       {
  //         name: "ВИННЫЕ ШКАФЫ"
  //       },
  //       {
  //         name: "КУХОННЫЕ ПЛИТЫ"
  //       },
  //       {
  //         name: "ХОЛОДИЬНИКИ"
  //       }
  //     ]
  //   },
  //   {
  //     name: "ТВ, АУДИО, ВИДЕО",
  //     subCategories: [
  //       {
  //         name: "НАУШНИКИ"
  //       },
  //       {
  //         name: "АУДИОТЕХНИКА"
  //       },
  //       {
  //         name: "ВИДЕОТЕХНИКА"
  //       },
  //       {
  //         name: "ТЕЛЕВИЗОРЫ"
  //       },
  //       {
  //         name: "ГАРНИТУРЫ"
  //       }
  //     ]
  //   },
  //   {
  //     name: "КОМПЬЮТЕРЫ",
  //     subCategories: [
  //       {
  //         name: "НАСТОЛЬНЫЕ ПК"
  //       },
  //       {
  //         name: "НОУТБУКИ"
  //       },
  //       {
  //         name: "АКСЕССУАРЫ"
  //       },
  //       {
  //         name: "КОМПЛЕКТУЮЩИЕ"
  //       }
  //     ]
  //   },
  //   {
  //     name: "МЕБЕЛЬ",
  //     subCategories: [
  //       {
  //         name: "СПАЛЬНЯ"
  //       },
  //       {
  //         name: "КУХНЯ"
  //       },
  //       {
  //         name: "ГОСТИНАЯ"
  //       },
  //       {
  //         name: "ПРИХОЖАЯ"
  //       },
  //       {
  //         name: "ДЕТСКАЯ КОМНАТА"
  //       },
  //       {
  //         name: "ОФИС И КАБИНЕТ"
  //       },
  //       {
  //         name: "ВАННАЯ КОМНАТА"
  //       }
  //     ]
  //   },
  //   {
  //     name: "ПРОДУКТЫ ПИТАНИЯ",
  //     subCategories: [
  //       {
  //         name: "МОЛОЧНЫЕ ПРОДУКТЫ"
  //       },
  //       {
  //         name: "СЛАДОСТИ И ВЫПЕЧКА"
  //       },
  //       {
  //         name: "ОВОЩИ И ФРУКТЫ"
  //       },
  //       {
  //         name: "КРУПЫ, ХЛОПЬЯ"
  //       },
  //       {
  //         name: "МАСЛА, СОУСЫ"
  //       },
  //       {
  //         name: "КОНСЕРВАЦИЯ"
  //       },
  //       {
  //         name: "КОЛБАСЫ, СОСИСКИ"
  //       }
  //     ]
  //   },
  //   {
  //     name: "ДЕТСКИЕ ТОВАРЫ",
  //     subCategories: [
  //       {
  //         name: "ДЛЯ МАЛЫШКА И МАМЫ"
  //       },
  //       {
  //         name: "ИГРУШКИ"
  //       },
  //       {
  //         name: "ДЕТСКОЕ ПИТАНИЕ"
  //       },
  //       {
  //         name: "ИГРОВАЯ ПЛОЩАДКА"
  //       }
  //     ]
  //   }
  // ]

  r1 = 1;
  r2 = 2;
  r3 = 3;
  r4 = 4;
  r5 = 5;

  currentSubCategory: SubCategoryBack ;

  categories : CategoryBack[]  ;

  currentCategory: CategoryBack ;
  constructor(private categoryService : CategoryService, private route: ActivatedRoute) {
    this.currentSubCategory = {} as SubCategoryBack
    this.categories = [];
    this.currentCategory = {} as CategoryBack
  }
  getCategories(){
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));
      const s_id = Number(params.get('subCategory_id'))

      this.categoryService.getCategory(id).subscribe((category) =>{
        this.currentCategory = category;
      })
      this.categoryService.getSubCategory(id, s_id).subscribe((subCategory) =>{
        this.currentSubCategory = subCategory;
      })
    })
    this.getCategories()

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
