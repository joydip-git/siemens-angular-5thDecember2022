function clicked() {
    //console.log('hello world')
    window.alert('hello world')
    var spanObj = document.createElement('span')
    spanObj.innerText = 'hello world'

    var divObj = document.createElement('div')
    divObj.style.textAlign = 'center'
    divObj.appendChild(spanObj)

    var brObj = document.createElement('br')
    //document.body.appendChild(divObj)
    document.body.append(brObj, divObj)

    /**
     * <body>
     * .......
     * <br>
     * <div>
     *  <span>hello world</span>
     * </div>
     * </body>
     */
}