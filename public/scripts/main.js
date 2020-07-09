var text = new PointText(80, 80);
text.content = 'Tap any Letter to Play!!';
text.style = {
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 15,
    fillColor: 'cornflowerblue'
};

var border = new Path({
	segments: [[20, 50], [20, 100], [370, 100], [370, 50], [20, 50]]
});

border.strokeColor = 'cornflowerblue';

var circles = [];

function onKeyDown(event) {
    if(keyData[event.key]){
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 500);
        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
        circles.push(newCircle)  
    }   
}

function onFrame(event){
    for(var i = 0; i < circles.length;  i++){
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);
    }
}