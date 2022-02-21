function dis(val){
    document.getElementById('edu').value+=val
}
function clr(){
    document.getElementById('edu').value=""
}
function solve(){
    let x=document.getElementById('edu').value
    let y=eval(x)
    document.getElementById('edu').value=y
}
