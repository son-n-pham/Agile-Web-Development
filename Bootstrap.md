# Grid Layout System

```html
<!--Auto-gridding with Bootstrap-->
<div class="row">
    <div class="col" style ="background-color:red; border: 1px solid">
        col
    </div>
        <div class="col" style ="background-color:red; border: 1px solid">
        col
    </div>
</div>

<!--Specify width of each container-->
<div class="row">
    <div class="col-6" style ="background-color:red; border: 1px solid">
        col6
    </div>
    <div class="col-3" style ="background-color:green; border: 1px solid">
        col3
    </div>
    <div class="col-2" style ="background-color:yellow; border: 1px solid">
        col2
    </div>
        <div class="col-1" style ="background-color:blue; border: 1px solid">
        col2
    </div>
</div>

<!--This is to have responsive gridding. In bootstrap, 1 row is equal to col12.-->
<!--In the below, each item size is col-3 if screen size is equal or bigger than large (laptop and desktop sizes).-->
<!--Then each item size is col-4 if screen size is equal or bigger than medium (tablet size).-->
<!--Then each item size is col-6 if screen size is equal or bigger than small (mobile size).-->
<!--Finally each item size is col-12 if screen size is smaller than small size (mobile size).-->
<div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6" style ="background-color:yellow; border: 1px solid">
        col-lg-3 col-md-4 col-sm-6
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6" style ="background-color:yellow; border: 1px solid">
        col-lg-3 col-md-4 col-sm-6
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6" style ="background-color:yellow; border: 1px solid">
        col-lg-3 col-md-4 col-sm-6
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6" style ="background-color:yellow; border: 1px solid">
        col-lg-3 col-md-4 col-sm-6
    </div>
</div>
```
