function suiteFibo(n){
    var tab=[1,1];
    var temp = 0
    for (let i = 1; i < n ; i ++){
        temp = tab[i] + tab[i-1];
        tab.push(temp)
        console.log(temp/tab[i])
    }
return tab[n];
}
// var nombre = suiteFibo(100);

