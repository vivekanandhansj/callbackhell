window.onload = function(){
    let x = document.createElement('div')
    x.setAttribute('id','div')
    x.setAttribute('onload','fun()' )
    document.body.appendChild(x)
        let i=10
        let a=(f)=>{
            setTimeout(() => {
            if(i>=1)
                {
            x.classList.add('container','col-sm-12','text-center','bg','font','mt-5')
            x.innerText=i
                }
            if(i==0){
                x.classList.add('container','col-sm-12','text-center','bg','fontnew')
                x.innerText="**Happy Independence Day**"
                return
                    }
                    i--
                    f(a)
                }, 1000)
                }
            let b=(f)=>{
                f(b)
                }
            a(b)
        }