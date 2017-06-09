//init canvas instance
var canvas = new fabric.Canvas('canvas', {});
//set backgroun image
var BackgroundImage = {
	setEvent: function(){
		$('.thumbnail').click(function(){
			BackgroundImage.handleEvent(this)
		})
	}, 
	handleEvent: function(imgElement) {
		var src = $(imgElement).attr('src')//get src of image
	    fabric.Image.fromURL(src, function(oImg) {
	       canvas.setBackgroundImage(oImg, canvas.renderAll.bind(canvas))//set background with canvas
	       canvas.setWidth(oImg.width);
	       canvas.setHeight(oImg.height);
	    });
	}
}

//text
var Text = {
	setEvent: function(){
		$('#ctrlAddText').click(function(){
			Text.handleEvent();
		})
	},
	handleEvent: function(){
		var content = $('#ctrlText').val();
		var param = {
			fill: 'black', // color
			fontSize: 35,
		};
		var textObj = new fabric.Text(content, param);
		canvas.add(textObj)
        $('#ctrlText').val() = ''
	}
}
//download > 
var Download = {
	setEvent: function(){
		$('#ctrlSave').click(function(){
			Download.handleEvent(this);
		})
	},
	handleEvent: function(anchorElement){
		var dataURL = document.getElementById('canvas').toDataURL('image/png');
		anchorElement.href = dataURL;
		anchorElement.download = "RandomName.png"
	}

	
}


//init
BackgroundImage.setEvent();
Text.setEvent();
Download.setEvent();