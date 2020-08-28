// 绑定container
var con = document.querySelector(".form-container");
// 设置两个门
var isIn = true; // 进来的门，默认打开
var isOut = false; // 出去的门，默认关闭

var span; //给未出生的元素取个名字


//监听鼠标进去的事件+进去的方法
con.addEventListener('mouseenter', (e) => {
    if (isIn) {
        //获取鼠标进入时的坐标
        //生成元素的位置=进入时窗口的距离-父盒子与窗口的距离
        let inx = e.clientX - e.target.offsetLeft;
        let iny = e.clientY - e.target.offsetTop;

        //创建一个span元素，并且给他一个出生坐标
        let el = document.createElement('span');
        el.style.left = inx + 'px';
        el.style.top = iny + 'px';
        con.appendChild(el); //添加到con上

        $('.form-container span').removeClass('out'); //移除出去的动画
        $('.form-container span').addClass('in'); //添加进去的动画

        span = document.querySelector('.form-container span');
        isIn = false; //关闭进来的门
        isOut = true; //打开出去的门
    }
})

//监听鼠标出去的事件+出去的方法
con.addEventListener('mouseleave', (e) => {
    if (isOut) {
        //获取鼠标出去时的坐标
        //生成元素的位置=进入时窗口的距离-父盒子与窗口的距离
        let inx = e.clientX - e.target.offsetLeft;
        let iny = e.clientY - e.target.offsetTop;

        $('.form-container span').removeClass('in'); // 移除进去的动画
        $('.form-container span').addClass('out'); // 添加出去的动画

        $('.out').css('left', inx + 'px'); // 添加出去的坐标
        $('.out').css('top', iny + 'px');

        isOut = false; // 关闭出去的大门
        setTimeout(() => {
            con.removeChild(span); // 删除元素
            isIn = true; // 打开进来的大门
        }, 500)
    }
})