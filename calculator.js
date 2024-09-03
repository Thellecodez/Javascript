function display(a){
  return document.getElementById('main').value+=a
}

function solve(){
    let a = document.getElementById('main').value
    let b = eval(a)
    return document.getElementById('main').value=b
}

function del(){
 return document.getElementById('main').value = ' '
}

function backspace(){
    let a = document.getElementById('main').value
    return document.getElementById('main').value= a.slice(0,-1)
}