import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
// For api testing -- will be removed
import { TestDiplayComponent } from "./components/test-diplay/test-diplay.component";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ButtonComponent } from "./components/button/button.component";
import { ProductShowcaseComponent } from "./components/product-showcase/product-showcase.component";
import { SearchComponent } from "./components/search/search.component";
import { ShopByCategoryComponent } from "./components/shop-by-category/shop-by-category.component";
import { HeroImageComponent } from "./components/hero-image/hero-image.component";
import { FeaturedProductsComponent } from "./components/featured-products/featured-products.component";
import { DailyDealsComponent } from "./components/daily-deals/daily-deals.component";
import { HottestDealsComponent } from "./components/hottest-deals/hottest-deals.component";
import { BestBuyService } from "./services/best-buy.service";
import { LogoComponent } from "./components/logo/logo.component";
import { SearchIconComponent } from "./components/search-icon/search-icon.component";
import { ShoppingCartIconComponent } from "./components/shopping-cart-icon/shopping-cart-icon.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { AngleRightIconComponent } from "./components/icons/angle-right-icon/angle-right-icon.component";
import { AngleLeftIconComponent } from "./components/icons/angle-left-icon/angle-left-icon.component";
import { FilledStarIconComponent } from "./components/icons/filled-star-icon/filled-star-icon.component";
import { EmptyStarIconComponent } from "./components/icons/empty-star-icon/empty-star-icon.component";
import { HalfStarIconComponent } from "./components/icons/half-star-icon/half-star-icon.component";
import { CartPlusIconComponent } from "./components/icons/cart-plus-icon/cart-plus-icon.component";

@NgModule({
  declarations: [
    AppComponent,
    TestDiplayComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ProductShowcaseComponent,
    SearchComponent,
    ShopByCategoryComponent,
    HeroImageComponent,
    FeaturedProductsComponent,
    DailyDealsComponent,
    HottestDealsComponent,
    LogoComponent,
    SearchIconComponent,
    ShoppingCartIconComponent,
    ShoppingCartComponent,
    AngleLeftIconComponent,
    AngleRightIconComponent,
    FilledStarIconComponent,
    EmptyStarIconComponent,
    HalfStarIconComponent,
    CartPlusIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [BestBuyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
