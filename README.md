imgRollover
===========

### html
```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="js/imgRollover.min.js"></script>
```


### JavaScript

```
//Default
$(function(){
    new ImgRollover.default('.on', '_o');//('selector','suffix')
});

//Rollover with Fade
$(function(){
    new ImgRollover.Fade('.on', '_o', 200);//('selector','suffix',fadetime)
});
```
