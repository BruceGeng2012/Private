// 获取所有具有指定类名的div元素
const divs = document.querySelectorAll('.example');

// 删除第8到47个div元素
for (let i = 7; i < 47; i++) {
    if (divs[i]) {
        divs[i].parentNode.removeChild(divs[i]);
    }
}
