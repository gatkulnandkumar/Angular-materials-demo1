import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { ButtonComponent } from './button/button.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CardsComponent } from './cards/cards.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ViewcustomerComponent } from './customer/viewcustomer/viewcustomer.component';
import { DemoComponent } from './demo/demo.component';
import { DialogComponent } from './dialog/dialog.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconsComponent } from './icons/icons.component';
import { InputComponent } from './input/input.component';
import { ListsComponent } from './lists/lists.component';
import { MenusComponent } from './menus/menus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationComponent } from './notification/notification.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { TypographyComponent } from './typography/typography.component';
import { ViewUserComponent } from './user/view-user/view-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
 
  { path: 'button', component: ButtonComponent},
  { path: 'typography', component: TypographyComponent},
  { path: 'toggleButton', component: ToggleButtonComponent},
  { path: 'icons', component: IconsComponent},
  { path: 'notifications', component: NotificationComponent},
  { path: 'progressSpinner', component: ProgressSpinnerComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'sidenavbar', component: SidenavComponent},
  { path: 'menus', component: MenusComponent},
  { path: 'lists', component: ListsComponent},
  { path: 'gridList', component: GridListComponent},
  { path: 'expansion', component: ExpansionComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'tabs', component: TabsComponent},
  { path: 'stepper', component: StepperComponent},
  { path: 'input', component: InputComponent},
  { path: 'autoComplete', component: AutoCompleteComponent},
  { path: 'checkbox', component: CheckboxComponent},
  { path: 'dialog', component: DialogComponent},
  { path: 'table', component: TableComponent},
  { path: 'reactive', component: ReactiveFormComponent},
  { path: 'asyncAwait', component: AsyncAwaitComponent},
  { path: 'calculator', component: CalculatorComponent},

  { 
    path: 'user',
    loadChildren:() => import ('./user/user.module').then(x => x.UserModule) 
  },
  { 
    path: 'customer', 
    loadChildren:() => import ('./customer/customer.module').then(x => x.CustomerModule) 
  },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
