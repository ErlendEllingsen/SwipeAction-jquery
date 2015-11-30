# SwipeAction-jquery
A simple code that allows you to implement SwipeActions (like delete, favorite, etc) using only jQuery and html. 

### Information / Disclaimer / Warning
This is not finished at all, and is simply just a code dump from something I did at work, and is therefore not (yet) optimized as a plugin, and you therefore have to do some effort yourself to customize it to your needs. I have made it available as a jQuery-plugin, but you have to implement actions etc. yourself.

### Basic setup
You can use this basic setup to implement the functionality to your own app/site.. 

#### HTML
```
<div class="reportRow">
  <div class="reportSwipe" data-index="9">
  	Lorem ipsum dolor sit amet..
  </div>
  <div class="deleteBtn">
  	Delete
  </div> 
</div>
```

#### CSS
```
div.reportRow {
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	height: 80px; 
	vertical-align: top;
	border-radius: 0px;
	padding: 0px;
	margin: 0px;
}

div.reportRow div.reportSwipe {
	width: 100%;
	display: inline-block;
	left: 0px;
	width: 100%;
	padding: 10px; 
	margin: 0px;
	height: 80px; 
	position: relative;
	overflow: auto;
	vertical-align: top;
}

div.reportRow div.deleteBtn {
	display: inline-block;
	width: 300px;
	padding: 10px;
	position: relative;
	overflow: hidden;
	white-space: nowrap;
	height: 80px; 
	min-height: 80px;
	max-height: 80px;
	vertical-align: top;
	text-align: center;
	color: #FFF;
	background-color: #BB0000; 
	font-size: 22px;
}
```

#### Javascript
```
$('.reportSwipe').swipeAction({
	name: 'offlineReports'
});
```

