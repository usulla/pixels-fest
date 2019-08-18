function elemInViewport(elem,full) {
    console.log(elem, 'elem')
    var box = elem.getBoundingClientRect();
    var top = box.top;
    var left = box.left;
    var bottom = box.bottom;
    var right  = box.right;
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var maxWidth = 0;
    var maxHeight = 0;
    if(full) { maxWidth = right - left; maxHeight = bottom - top};
    var hh = Math.min(height,bottom)- Math.max(0,top) >= maxHeight && Math.min(width,right)- Math.max(0,left)>= maxWidth;
    console.log(hh)
    return Math.min(height,bottom)- Math.max(0,top) >= maxHeight && Math.min(width,right)- Math.max(0,left)>= maxWidth
}
if(document.querySelector('.footer')){
    console.log('!!!!!!!!!!^&^&EHHH')
elemInViewport(document.querySelector('.footer'));
}