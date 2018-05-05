/*
Created by liuyuanfang;
*/

//求数组最大值
Array.prototype.max = function(){
    return Math.max.apply(null,this);
    //使用方法：[1,2,3].max();
};

//求数组最小值
Array.prototype.min = function(){
    return Math.min.apply(null,this);
};
//数组去重
Array.prototype.norepeat = function(){
    var data;
    if(typeof (Set)){//判断浏览器是否支持Set();
        data = new Set(this);
    }else{
        var temArray = [];
        this.forEach(function (item) {
            if(temArray.indexOf(item) < 0){
                temArray.push(item);
            }
        });
        data = temArray;
    }
    return data;
};

