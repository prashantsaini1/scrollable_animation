
var SA = require('ti.scrollable.animation');

var colors = ['#5093E4', '#10D448', '#9706E6', '#DE0B93', '#F49D0B'];
var window_view, scrollableView, picker;

var animations = [
	['DEFAULT', SA.DEFAULT],
	['ACCORDION_HORIZONTAL', SA.ACCORDION_HORIZONTAL],
	['ACCORDION_VERTICAL', SA.ACCORDION_VERTICAL],
	['BACKGROUND_TO_FOREGROUND', SA.BACKGROUND_TO_FOREGROUND],
	['FOREGROUND_TO_BACKGROUND', SA.FOREGROUND_TO_BACKGROUND],
	['BASE', SA.BASE],
	['CUBE_IN', SA.CUBE_IN],
	['CUBE_OUT', SA.CUBE_OUT],
	['DEPTH_PAGE', SA.DEPTH_PAGE],
	['DRAW_FROM_BACK', SA.DRAW_FROM_BACK],
	['FLIP_HORIZONTAL', SA.FLIP_HORIZONTAL],
	['FLIP_VERTICAL', SA.FLIP_VERTICAL],
	['ROTATE_DOWN', SA.ROTATE_DOWN],
	['ROTATE_UP', SA.ROTATE_UP],
	['STACK', SA.STACK],
	['TABLET', SA.TABLET],
	['ZOOM_IN', SA.ZOOM_IN],
	['ZOOM_OUT_SLIDE', SA.ZOOM_OUT_SLIDE],
	['ZOOM_OUT', SA.ZOOM_OUT]
];


(function () {
	window_view = Ti.UI.createWindow({
		backgroundColor : 'white'
	});
	
	scrollableView = Ti.UI.createScrollableView({
		top : 0,
		bottom : 70,
		width : Ti.UI.FILL
	});

	picker = Ti.UI.createPicker({
		bottom : 20,
	    left : 40,
	    right : 40
	});

	_.each(animations, function (item, i) {
		picker.add( Ti.UI.createPickerRow( {'title': item[0]} ));
	});

	_.each(_.range(5), function (i) {
		createView(i+1, colors[i]);
	});

	SA.setAnimation(scrollableView, animations[0][1]);

	picker.addEventListener('change', setAnimation);

	window_view.add(scrollableView);
	window_view.add(picker);
	window_view.open();
})();


function createView(title, color) {
	var view = Ti.UI.createView({
		'backgroundColor' : color
	});

	var label = Ti.UI.createLabel({
		color : 'white',
		font : { fontSize:48 },
		shadowColor: 'black',
		shadowOffset: {x:5, y:5},
		shadowRadius: 3,
		text: 'Page ' + title
	});

	view.add(label);

	scrollableView.addView(view);
}

function setAnimation(e){
	var index = e.rowIndex;

	if (index >= 0 && index < animations.length) {
	    SA.setAnimation(scrollableView, animations[index][1]);
	}
}
