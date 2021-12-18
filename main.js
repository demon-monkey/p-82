canvas=document.getElementById("mycan");
ctx=canvas.getContext("2d");
var mouse_event="";
var last_x,last_y;
color="";
width="3";

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(event){

mouse_event="mouse_down";
color=document.getElementById("colorcode").value;
width=document.getElementById("wid").value;


}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
mouse_event="mouse_leave";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
mouse_event="mouse_up";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mouse_event=="mouse_down"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(current_x,current_y,50,0,2*Math.PI);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}

function clear_canvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}