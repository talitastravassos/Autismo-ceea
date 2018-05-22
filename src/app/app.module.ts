import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { JogoPage } from '../pages/jogo/jogo';
import { RespostaPage } from '../pages/resposta/resposta';
import { ResultadoPage } from './../pages/resultado/resultado';
import { PontuacaoPage } from '../pages/pontuacao/pontuacao';
import { CartaoComponent } from '../components/cartao/cartao.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { FIREBASE_CONFIG } from './app.firebase.config';
import { UserdataProvider } from '../providers/userdata/userdata';
import { RodadaProvider } from '../providers/rodada/rodada';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CartaoComponent,
    HomePage,
    LoginPage,
    RegisterPage,
    RespostaPage,
    ResultadoPage,
    JogoPage,
    PontuacaoPage
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
    AboutPage,
    HomePage,
    LoginPage,
    RegisterPage,
    RespostaPage,
    ResultadoPage,
    JogoPage,
    PontuacaoPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserdataProvider,
    RodadaProvider
  ]
})
export class AppModule {
  
}
