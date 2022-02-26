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

# Container 

```html
<!--Container is already responsive-->
<div class="container" style="background-color: blue; border: 1px solid; color: white">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>


<!--Fluid container is similar to the normal container in term of responsiveness, but takes 100% width of the parent-->
<div class="container-fluid" style="background-color: green; border: 1px solid; color: white">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
```
