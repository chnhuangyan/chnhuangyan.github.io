   $('.HeaderW ul li').click(function(){
        console.log('执行了')
        $('this').addClass('red').siblings().removeClass('red');
    })


