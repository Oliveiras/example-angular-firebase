import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService} from '@angular/fire/analytics';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getPerformance, providePerformance} from '@angular/fire/performance';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import {TitleStrategy} from "@angular/router";
import {MyTitleStrategy} from "./core/providers/my-title-strategy";
import {FirebaseUIModule} from "firebaseui-angular";
import {CoreModule} from "./core/core.module";
import {firebaseUiAuthConfig} from "./core/config/firebase-ui-config";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAnalytics(() => getAnalytics()),
    providePerformance(() => getPerformance()),
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    { provide: TitleStrategy, useClass: MyTitleStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
