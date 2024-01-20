import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule, LineSeriesService , CategoryService} from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [
    provideClientHydration(),
    LineSeriesService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
