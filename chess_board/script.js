
var button = document.getElementsByTagName('button');
for (var i=0;i<button.length ;i++) {
    (function (index) {
        button[index].onclick=function () {
            console.log(document.getElementsByTagName('button')[parseInt(index)].getAttribute('id'));
            console.log([index]);
        };
        
    })(i)
}
