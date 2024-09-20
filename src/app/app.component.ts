import {
  TuiButton,
  TuiDialogService,
  TuiIcon,
  TuiIconPipe,
  TuiRoot,
  TuiSurface,
  TuiTitle
} from "@taiga-ui/core";
import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TuiCarouselComponent, TuiPagination} from "@taiga-ui/kit";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {TuiItem} from "@taiga-ui/cdk";
import {TuiAppBarBack, TuiAppBarComponent, TuiCardLarge} from "@taiga-ui/layout";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRoot, TuiCarouselComponent, TuiPagination, NgForOf, TuiItem, TuiButton, NgOptimizedImage, TuiCardLarge, TuiSurface, TuiIconPipe, TuiIcon, TuiAppBarComponent, TuiAppBarBack, TuiTitle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly dialogs = inject(TuiDialogService);

  protected readonly items: MenuItem[] = [
    {
      name: 'Маргарита',
      composition: 'Текила, сок лайма, апельсиновый ликер',
      url: 'https://probarman.ru/img/glossary/coctails/Structured_Data/Frozen-Margarita-720x720-recipe.jpg',
    }, {
      name: 'Дайкири',
      composition: 'Ром, сок лайма, сахарный сироп',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Негрони',
      composition: 'Джин, Кампари, сладкий вермут',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Олд фешен',
      composition: 'Бурбон, Ангостура, сахар',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Апероль спритц',
      composition: 'Просекко, Апероль, содовая',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Манхэттен',
      composition: 'Ржаной виски, сладкий вермут, Ангостура',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Джин тоник',
      composition: 'Состав держится в секрете',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Мартинес',
      composition: 'Джин, сухой вермут, сладкий вермут, Мараскино, апельсиновая Ангостура',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Том коллинз',
      composition: 'Джин, сок лимона, содовая, сахар',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Пегу клаб',
      composition: 'Джин, Куантро, сок лайма, Ангостура',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Авиация',
      composition: 'Джин, сок лимона, Мараскино, Крем де Виолетт',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Мартини',
      composition: 'Джин, сухой вермут, апельсиновая Ангостура',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Бульвардье',
      composition: 'Бурбон, Кампари, сладкий вермут',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Виски сауэр',
      composition: 'Бурбон, сок лимона, сахар',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Мохито',
      composition: 'Ром, сок лайма, сахар, мята, содовая',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Папа Добле',
      composition: 'Ром, сок лайма, сок грейпфрута, Мараскино',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Френч 75',
      composition: 'Джин, сок лимона, сахар, игристое вино',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Малибу кола',
      composition: 'Рецепт держится в секрете',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    }, {
      name: 'Порнстар мартини',
      composition: 'Водка, ликер Пассоа, сок маракуя, сок лайма',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
    },
  ];

  protected showDialog(): void {
    const item = this.items[Math.floor(Math.random() * this.items.length)]
    this.dialogs
    .open(
      `
      ${item.composition}
`,
      {label: item.name, size: 's'},
    )
    .subscribe();
  }
}

type MenuItem = {
  name: string
  composition: string
  url: string
}
