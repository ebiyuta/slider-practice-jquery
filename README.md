## Build Setup
```
# install parcel
npm i -D parcel

# serve with hot reload at localhost:1234
npx parcel src/index.html --open
```

## スライダーモジュールについて
- 使い方

```
<div class="your-class">
  <div>your content</div>
  <div>your content</div>
  <div>your content</div>
</div>
```

```
$('.your-class').slider()
```

基本的な使い方は上記のようになります。

- オプション
オプションとして下記を用意しています。

arrows
Type:boolean
Default:true
矢印UIの表示・非表示を設定できます。

dots
Type:boolean
Default:true
ドットUIの表示・非表示を設定できます。

autoplay
Type:boolean
Default:true
自動再生の有効・無効を設定できます。

interval
Type:number
Default:3000
自動再生の間隔を設定できます。

以下のように引数にオブジェクトとして設定してください。
```
$('.your-class').slider({
  arrows: false,
  dots: false,
  autoplay: false,
  interval: 5000
});
```