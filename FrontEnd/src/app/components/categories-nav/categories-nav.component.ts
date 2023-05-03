import {Component, OnInit} from '@angular/core';
import {Category, MyJwtPayload, SubCategory} from "../../models";
import {LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import {CategoryService} from "../../services/category/category.service";

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.css']
})
export class CategoriesNavComponent implements OnInit{
  // categories : Category[] = [
  //   {
  //     name : "ТЕЛЕФОНЫ И ГАДЖЕТЫ",
  //     subCategories :  [
  //       {
  //         name : "APPLE"
  //       },
  //       {
  //         name : "SAMSUNG"
  //       },
  //       {
  //         name : "NOKIA"
  //       },
  //       {
  //         name : "XIAOMI"
  //       },
  //       {
  //         name : "HUAWEI"
  //       },
  //       {
  //         name : "LG"
  //       }
  //     ]
  //   },
  //   {
  //     name : "БЫТОВАЯ ТЕХНИКА",
  //     subCategories :  [
  //       {
  //         name : "КОНДИЦИОНЕРЫ"
  //       },
  //       {
  //         name : "СУШИЛКА ДЛЯ БЕЛЬЯ"
  //       },
  //       {
  //         name : "СУШИЛЬНЫЕ ШКАФЫ"
  //       },
  //       {
  //         name : "МОРОЗИЛЬНЫЕ КАМЕРЫ"
  //       },
  //       {
  //         name : "ВИННЫЕ ШКАФЫ"
  //       },
  //       {
  //         name : "КУХОННЫЕ ПЛИТЫ"
  //       },
  //       {
  //         name : "ХОЛОДИЬНИКИ"
  //       }
  //     ]
  //   },
  //   {
  //     name : "ТВ, АУДИО, ВИДЕО",
  //     subCategories :  [
  //       {
  //         name : "НАУШНИКИ"
  //       },
  //       {
  //         name : "АУДИОТЕХНИКА"
  //       },
  //       {
  //         name : "ВИДЕОТЕХНИКА"
  //       },
  //       {
  //         name : "ТЕЛЕВИЗОРЫ"
  //       },
  //       {
  //         name : "ГАРНИТУРЫ"
  //       }
  //     ]
  //   },
  //   {
  //     name : "КОМПЬЮТЕРЫ",
  //     subCategories :  [
  //       {
  //         name : "НАСТОЛЬНЫЕ ПК"
  //       },
  //       {
  //         name : "НОУТБУКИ"
  //       },
  //       {
  //         name : "АКСЕССУАРЫ"
  //       },
  //       {
  //         name : "КОМПЛЕКТУЮЩИЕ"
  //       }
  //     ]
  //   },
  //   {
  //     name : "МЕБЕЛЬ",
  //     subCategories :  [
  //       {
  //         name : "СПАЛЬНЯ"
  //       },
  //       {
  //         name : "КУХНЯ"
  //       },
  //       {
  //         name : "ГОСТИНАЯ"
  //       },
  //       {
  //         name : "ПРИХОЖАЯ"
  //       },
  //       {
  //         name : "ДЕТСКАЯ КОМНАТА"
  //       },
  //       {
  //         name : "ОФИС И КАБИНЕТ"
  //       },
  //       {
  //         name : "ВАННАЯ КОМНАТА"
  //       }
  //     ]
  //   },
  //   {
  //     name : "ПРОДУКТЫ ПИТАНИЯ",
  //     subCategories :  [
  //       {
  //         name : "МОЛОЧНЫЕ ПРОДУКТЫ"
  //       },
  //       {
  //         name : "СЛАДОСТИ И ВЫПЕЧКА"
  //       },
  //       {
  //         name : "ОВОЩИ И ФРУКТЫ"
  //       },
  //       {
  //         name : "КРУПЫ, ХЛОПЬЯ"
  //       },
  //       {
  //         name : "МАСЛА, СОУСЫ"
  //       },
  //       {
  //         name : "КОНСЕРВАЦИЯ"
  //       },
  //       {
  //         name : "КОЛБАСЫ, СОСИСКИ"
  //       }
  //     ]
  //   },
  //   {
  //     name : "ДЕТСКИЕ ТОВАРЫ",
  //     subCategories :  [
  //       {
  //         name : "ДЛЯ МАЛЫШКА И МАМЫ"
  //       },
  //       {
  //         name : "ИГРУШКИ"
  //       },
  //       {
  //         name : "ДЕТСКОЕ ПИТАНИЕ"
  //       },
  //       {
  //         name : "ИГРОВАЯ ПЛОЩАДКА"
  //       }
  //     ]
  //   }
  // ]
  categories : Category[] | undefined ;
  // subCategories : SubCategory[] ;
  // static categories: Category[];
  constructor(private categoryService: CategoryService){
  }
  getCategories(){
    this.categoryService.getCategories().subscribe((data: any[]) => {
      data.forEach(cat => {
        // @ts-ignore
        const category = new Category(cat.id, cat.name, []);
        this.categoryService.getSubcategoriesOfCategory(cat.id).subscribe((subCatData: any[]) => {
          // @ts-ignore
          category.subCategories = subCatData.map(subCat => new SubCategory(subCat.id, subCat.name));
          // @ts-ignore
          this.categories.push(category);
        });
      });
    });
  }
  getSubcategoriesOfCategory(){

  }
  ngOnInit() {
    this.getCategories()
    console.log(this.getCategories())
  }

}
