imgRollover
===========

### html
```javascript
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="js/imgRollover.min.js"></script>
```


### JavaScript

```javascript
//Default
$(function(){
    new ImgRollover.default();//('selector','suffix')
});

//Rollover with Fade
$(function(){
    new ImgRollover.Fade();//('selector','suffix',fadetime)
});
```

### default arguments
```javascript
selector: '.imgOver'
suffix: '_o'
fadetime: 200
```
