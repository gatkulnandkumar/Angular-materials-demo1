import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './demo/demo.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './button/button.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { IconsComponent } from './icons/icons.component';
import {MatBadgeModule} from '@angular/material/badge';
import { NotificationComponent } from './notification/notification.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenusComponent } from './menus/menus.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { ListsComponent } from './lists/lists.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { GridListComponent } from './grid-list/grid-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExpansionComponent } from './expansion/expansion.component';
import { CardsComponent } from './cards/cards.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsComponent } from './tabs/tabs.component'
import {MatStepperModule} from '@angular/material/stepper';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import {MatSelectModule} from '@angular/material/select';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table' 
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { CalculatorComponent } from './calculator/calculator.component';




@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TypographyComponent,
    ButtonComponent,
    ToggleButtonComponent,
    IconsComponent,
    NotificationComponent,
    ProgressSpinnerComponent,
    NavbarComponent,
    SidenavComponent,
    MenusComponent,
    ListsComponent,
    GridListComponent,
    ExpansionComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    AutoCompleteComponent,
    CheckboxComponent,
    DialogComponent,
    DialogExampleComponent,
    TableComponent,
    ReactiveFormComponent,
    AsyncAwaitComponent,
    CalculatorComponent
    
  ],
  
  entryComponents :[DialogExampleComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MaterialModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ScrollingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
