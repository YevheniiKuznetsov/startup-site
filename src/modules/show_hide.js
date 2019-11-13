var showHide = function(el1, el2){
    var showHideElementInside;
    var showHideElementOutside;
    var targetElement;
    $(document).mouseover(function(event){
        var target = event.target;
        targetElement = target.className.split(' ').filter(function(number) {
            return number == el1;
        });
        showHideElementInside = target.getElementsByClassName(el2);
        showHideElementOutside = document.getElementsByClassName(el2);
        if(targetElement == el1){
            hideInside();
            showHideElementInside[0].style.display="block";
        } else {
            hideOutside();
        }
    });
    var hideInside = function(){
        for(var i = 0; i<showHideElementOutside.length; i++){
            showHideElementOutside[i].style.display='none';
        }
    }
    var hideOutside = function(){
        for(var i = 0; i<showHideElementInside.length; i++){
            showHideElementInside[i].style.display='none';
        }
    }
}
export default showHide;
