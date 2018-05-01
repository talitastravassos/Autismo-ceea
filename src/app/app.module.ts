import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { RespostaPage } from '../pages/resposta/resposta';
import { ResultadoPage } from './../pages/resultado/resultado';
import { CartaoComponent } from '../components/cartao/cartao.component';
import { ResultadoComponent } from '../components/resultado/resultado.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { FIREBASE_CONFIG } from './app.firebase.config';
import { UserdataProvider } from '../providers/userdata/userdata';


@NgModule({
  declarations: [
    MyApp,
    CartaoComponent,
    ResultadoComponent,
    HomePage,
    LoginPage,
    RegisterPage,
    RespostaPage,
    ResultadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    RespostaPage,
    ResultadoPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserdataProvider
  ]
})
export class AppModule {}
