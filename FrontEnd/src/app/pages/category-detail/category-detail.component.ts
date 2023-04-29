import {Component, ElementRef, OnInit} from '@angular/core';
import {Category, Product} from "../../models";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../services/category/category.service";
import {CategoriesNavComponent} from "../../components/categories-nav/categories-nav.component";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
// name = models.CharField(max_length=255, verbose_name='Name', unique=True)
// main_image = models.ImageField(upload_to='images/%Y/%m/%d', null=True, blank=True, verbose_name='Main Image')
// is_active = models.BooleanField(default=True, verbose_name='Is Active?')
// price = models.FloatField(verbose_name='Price')
// description = models.TextField(null=True, verbose_name='Description')
// count = models.IntegerField(default=0, verbose_name='Quantity')
// rating = models.FloatField(null=True, validators=[validate_rating])
// category
export class CategoryDetailComponent implements OnInit{

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

  r1 = 1;
  r2 = 2;
  r3 = 3;
  r4 = 4;
  r5 = 5;
  currentCategory: Category = this.categories[3]
  categoryName : string = "";
  // products: Product[] = [];
  // category : Category;


    // constructor(private categoryService: CategoryService, private route : ActivatedRoute) {
    //   // this.category = {} as Category
    //
    // }
  isSeller: boolean | undefined;
  isCustomer: boolean | undefined;
  constructor() {

  }


  ngOnInit() {
    if(localStorage.getItem('isSeller') == 'true') this.isSeller = true;
    if(localStorage.getItem('isCustomer') == 'true') this.isCustomer = true;
  }

}
