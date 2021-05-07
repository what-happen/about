var game={
    data:[],
    RN:4,
    CN:4,
    //游戏启动的函数 
    //1.初始化一个二维数组，数组的元素为0，代表没被占用
    start:function(){
        for(var r=0;r<this.RN;r++){
            this.data[r]=[];
            for(var c=0;c<this.CN;c++){
                this.data[r][c]=0;
            }
        }
        this.randomNum();
        this.randomNum();
        console.log(this.data.join("\n"));
        this.showNum();
    },
    showNum:function(){
        //定义一个新的一维数组，保存16个数字
        var newData=[];
        var ele=document.getElementsByClassName('cell');
        for(var r=0;r<this.RN;r++){
            for(var c=0;c<this.CN;c++){
                newData.push(this.data[r][c]);
            }
        }
        for(var i=0;i<ele.length;i++){
            ele[i].innerHTML=newData[i]==0?'':newData[i];
        }
    },
    randomNum:function(){
            var r=parseInt(Math.random()*this.RN);
            var c=parseInt(Math.random()*this.CN);
            if(this.data[r][c]==0){
                this.data[r][c]=Math.random()>0.5?2:4;
                console.log(111);
                return true;
            } 
            
    },
    isFull:function(){
        for(var r=0;r<this.data.length;r++){
            for(var c=0;c<this.data[r].length;c++){
                if(this.data[r][c]==0){
                    return false
                }
            }
        }
        return true
    }  
}
window.onload=function(){
    game.start();
}
window.onkeydown=function(event){
    switch(event.keyCode){
        case 37:
            
    }
}

 
