var keys = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m',','],
]

var hash = {
    q: 'qq.com',
    w: 'weibo.com',
}

var hashInlocalStorage = JSON.parse(localStorage.getItem('data') || 'null')

if (hashInlocalStorage) {
    hash = hashInlocalStorage
}
index = 0
while (index<keys.length) {
    let newDiv = document.createElement("div")
    masker.appendChild(newDiv)   
    let row = keys[index]
    index1 = 0
    while (index1<row.length) {
        let newKbd = document.createElement("kbd")
        newKbd.textContent = row[index1]
        let newButton = document.createElement("button")
        newButton.textContent = 'E'
        newButton.id = row[index1]
        newButton.onclick = function (keys){
            let box = keys.target.id 
            let newWebsite = prompt('输入网址')
            hash[box] = newWebsite
            localStorage.setItem('data',JSON.stringify(hash))
            console.log(hash)
        }
        newDiv.appendChild(newKbd)
        newKbd.appendChild(newButton)
        index1 = index1 +1
    }  
    index = index+1
}

document.onkeypress = function (monitorKey) {
    let letter = monitorKey.key
    let website = hash[letter]
    window.open('http://'+website, '_blank')
}


