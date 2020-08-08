### 源码
```less
// Color defination.
@cmn-color_baidu-red: #E10602;
@cmn-color_baidu-blue: #2932E1;

@cmn-color_zuoye-pink: #FD7B46;
@cmn-color_zuoye-blue: #45B7FF;
@cmn-color_zuoye-lightblue: #84CFFF;
@cmn-color_zuoye-orange: #FB7F2D;
@cmn-color_zuoye-yellow: #FFB923;
@cmn-color_zuoye-soil: #CAA066;
@cmn-color_zuoye-green: #3AA96E;

@cmn-color_link: #2D64B3;
@cmn-color_font: #333;
@cmn-color_font-darkgray: #666;
@cmn-color_font-lightgray: #999;

@cmn-color_zuoye-yike: #61CA74;

// Width defination.
@cmn-width_m-small-page: 6rem;
@cmn-width_m-large-page: 6.6rem;
@cmn-width_small-page: 980px;
@cmn-width_large-page: 1180px;

// Component's z-index defination.
@cmn-z-index_nav: 1000;
@cmn-z-index_overlay: 2000;

// Yike standard color.
@cmn-color_yike-green: #5DCC6F;
@cmn-color_yike-orange: #FB7F2D;
@cmn-color_yike-gray-font: #D2D2D2;
@cmn-color_yike-background: #F2F2F2;
@cmn-color_yike-light-background: #F8F8F8;
@cmn-color_yike-gray-border: #E5E5E5;
// parent theme color
@cmn-color_parent-yellow:#FED045;
// 家长端的直播课tab中主体颜色直播课端保持一致

.yike-ios-system-primary .yike-money-symbol-chameleon {
  display: none!important;
}
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table
}

.clearfix:after {
  clear: both
}

.clearfix {
  *zoom: 1
}
.background-color-primary(@homework-color: @cmn-color_zuoye-blue, 
@airclass-color: @cmn-color_yike-green) {
  background-color: @homework-color;
  .airclass-primary & {
    background-color: @airclass-color;
  }
  .parent-primary & {
    background-color: @airclass-color;
  }
}
// 三端都区分, 区别于上面的只区分两端
.background-color-primary-full(@homework-color: @cmn-color_zuoye-blue, @airclass-color: @cmn-color_yike-green, @parent-color: @cmn-color_parent-yellow) {
  background-color: @homework-color;
  .airclass-primary & {
    background-color: @airclass-color;
  }
  .parent-primary & {
    background-color: @parent-color;
  }
}
.font-color-primary(@homework-color: @cmn-color_zuoye-blue, @airclass-color: @cmn-color_yike-green) {
  color: @homework-color;
  .airclass-primary & {
    color: @airclass-color;
  }
  .parent-primary & {
    color: @airclass-color;
  }
}
// 三端都区分, 
.font-color-primary-full(@homework-color: @cmn-color_zuoye-blue, @airclass-color: @cmn-color_yike-green, @parent-color: @cmn-color_parent-yellow) {
  color: @homework-color;
  .airclass-primary & {
    color: @airclass-color;
  }
  .parent-primary & {
    color: @parent-color;
  }
}
.background-color-linear-primary(@homework-gradient:~"to right, #45CDFF, #1BA5FD", @airclass-gradient:~"to right, #50d465, #28bf68") {
  background : linear-gradient(@homework-gradient);
  .airclass-primary & {
    background : linear-gradient(@airclass-gradient);
  }
  .parent-primary & {
    background : linear-gradient(@airclass-gradient);
  }
}
.background-url-primary(@homework-url, @airclass-url) {
  background-image: @homework-url;
  .airclass-primary & {
    background-image: @airclass-url;
  }
  .parent-primary & {
    background-image: @airclass-url;
  }
}

.border-primary(@direction:border-bottom, @homework-border:1px solid @cmn-color_zuoye-blue, @airclass-border:1px solid @cmn-color_yike-green) {
  @{direction}: @homework-border;
  .airclass-primary & {
    @{direction}: @airclass-border;
  }
  .parent-primary & {
    @{direction}: @airclass-border;
  }
}

.background-color-rgba-primary(@rgba) {
  background-color: rgba(69,183,255,@rgba);
  .airclass-primary & {
    background-color: rgba(76,199,96,@rgba);
  }
  .parent-primary & {
    background-color: rgba(76,199,96,@rgba);
  }
}
.box-shadow-primary(@homework-box-shadow, @airclass-box-shadow) {
  box-shadow: @homework-box-shadow;
  .airclass-primary & {
    box-shadow: @airclass-box-shadow;
  }
  .parent-primary & {
    box-shadow: @airclass-box-shadow;
  }
}
.rem-to-px(@className:font-size,@remSize) {
  @{className}: unit(@remSize/2,px);
  .isIpad-primary & {
    @{className}: unit(@remSize/100,rem);
  }
}
// 重写h2样式
.zyb-dialog {
  .zyb-dialog__confirm {
    .background-color-linear-primary;
  }
}
.zyb-button--primary.zyb-button--gradient{
  .background-color-linear-primary;
}
```


