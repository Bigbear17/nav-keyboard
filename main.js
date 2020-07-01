var keys = [
    ['1','2','3','4','5','6','7','8','9','0'],
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m'],
]

var hash = {
    q: 'qq.com',
    w: 'weibo.com',
}

var hashInlocalStorage = JSON.parse(localStorage.getItem('data') || 'null')

if (hashInlocalStorage) {
    hash = hashInlocalStorage
}

//1.使用while循环创建了3个DIV 每个div中有对应的kbd img button
//2.对不能或许到的或者没有获取到icon自己给一个icon
//让icon在输入新网页后进行自动获取icon
for (let index = 0; index < keys.length; index++) {
    let newDiv = document.createElement("div")
    masker.appendChild(newDiv)   
    let row = keys[index]
    newDiv.className = 'line'
    for (let index = 0; index < row.length; index++) {
        let newKbd = document.createElement("kbd")
        newKbd.textContent = row[index]
        newKbd.className = row[index] 
        let newButton = document.createElement("button")
        newButton.textContent = 'E'
        newButton.id = row[index]//123qwezxc等
        let newImg = document.createElement("img")
        if (hash[row[index]]) {
            newImg.src = 'http://www.'+ hash[row[index]] + '/favicon.ico'
        } else {
            newImg.src = 'https://i.loli.net/2020/07/01/wXlJYzoHAEnIZDu.png'
        }
        newImg.onerror = function (xxx) {
            xxx.src = 'https://i.loli.net/2020/07/01/wXlJYzoHAEnIZDu.png'
        }
        newButton.onclick = function (keys){
            let box = keys.target.id 
            let newWebsite = prompt('输入网址')
            let upButtom = keys.target.nextSibling
            hash[box] = newWebsite
            upButtom.src = 'http://www.' + newWebsite +'/favicon.ico'
            upButtom.onerror = function (xxx){
                xxx.src = 'https://i.loli.net/2020/07/01/wXlJYzoHAEnIZDu.png'
            }
            localStorage.setItem('data',JSON.stringify(hash))
        }
        newDiv.appendChild(newKbd)
        newKbd.appendChild(newButton)
        newKbd.appendChild(newImg)
        
    }
}

document.onkeypress = function (monitorKey) {
    let letter = monitorKey.key
    let website = hash[letter]
    window.open('http://'+website, '_blank')
}
