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
        //生成随机数
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
            //实现变色
            ele[i].className='cell';
            newData[i]==2&&(ele[i].className+=' n2');
            newData[i]==4&&(ele[i].className+=' n4');
            newData[i]==8&&(ele[i].className+=' n8');
            newData[i]==16&&(ele[i].className+=' n16');
            newData[i]==32&&(ele[i].className+=' n32');
            newData[i]==64&&(ele[i].className+=' n64');
            newData[i]==128&&(ele[i].className+=' n128');
            newData[i]==256&&(ele[i].className+=' n256');
            newData[i]==512&&(ele[i].className+=' n512');
        }
    },
    randomNum:function(){
            var r=parseInt(Math.random()*this.RN);
            var c=parseInt(Math.random()*this.CN);
            if(this.data[r][c]==0){
                this.data[r][c]=Math.random()>0.5?2:4;
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
    ,
    sortLeft:function(){
        for(var r=0;r<this.RN;r++){
            for(var c=0;c<this.CN;c++){
                for(var j=0;j<this.CN-c;j++){
                    //如果自己等于0且自己小于右边的数，则自己和右边的数字交换数字
                    if(this.data[r][j]==0&&this.data[r][j]<this.data[r][j+1]){
                        this.data[r][j]=this.data[r][j+1];
                        this.data[r][j+1]=0;
                    }
                }
                
            }
        }
    },
    sortRight:function(){
        for(var r=0;r<this.RN;r++){
            for(var c=0;c<this.CN;c++){
                for(var j=0;j<this.CN-c;j++){
                    //如果右边的数等于0且自己大于右边的数，则自己和右边交换数字
                    if(this.data[r][j+1]==0&&this.data[r][j]>this.data[r][j+1]){
                        this.data[r][j+1]=this.data[r][j];
                        this.data[r][j]=0;
                    }
                }
                
            }
        }
    }
    ,
    //二维数组如果外面一维数组已经找不到值了，再从这个数组里找值，就会报错
    sortUp:function(){ 
        for(var c=0;c<this.CN;c++){
            for(var r=0;r<this.RN;r++){
                for(var j=0;j<this.RN-r-1;j++){
                    //如果自己为0且下面一个数不为0，交换位置
                    if(this.data[j][c]==0&&this.data[j+1][c]!=0){
                        this.data[j][c]=this.data[j+1][c];
                        this.data[j+1][c]=0;
                    }
                }
                
            }
        }
        },
    sortDown:function(){
        for(var c=0;c<this.CN;c++){
            for(var r=0;r<this.RN;r++){
                for(var j=0;j<this.RN-r-1;j++){
                    //如果下面一个数为0且自己不为0
                    if(this.data[j+1][c]==0&&this.data[j][c]!=0){
                        this.data[j+1][c]=this.data[j][c];
                        this.data[j][c]=0;
                    }
                }
                
            }
        }
    },
    beforeString:'',
    afterString:''
}
window.onload=function(){
    game.start();
}
var flag;
 
window.onkeydown=function(event){
    console.log(event.keyCode);
    switch(event.keyCode){
        case 37://按下了向左的按键
                    flag=false;
                    game.beforeString=game.data.toString();
                    game.sortLeft();
                    for(var r=0;r<game.RN;r++){
                        for(var c=1;c<game.CN;c++){
                                //如果当前的数不为0且等于前一个数
                                if(game.data[r][c]!=0&&game.data[r][c]==game.data[r][c-1]){
                                    game.data[r][c-1]=game.data[r][c]*2;
                                    game.data[r][c]=0;
                                }
                        }
                        
                    }
                    game.sortLeft();
                    game.afterString=game.data.toString();
                    while(!flag&&game.beforeString!=game.afterString){
                        flag=game.randomNum();
                    } 
                    game.showNum();
                    break;
            
        case 38://按下了向上的按键
                flag=false;
                game.beforeString=game.data.toString();
                game.sortUp();
                for(var c=0;c<game.RN;c++){
                    for(var r=1;r<game.CN;r++){
                        //如果当前的数不为0且等于上一个数
                        if(game.data[r][c]!=0&&game.data[r][c]==game.data[r-1][c]){
                            game.data[r-1][c]=game.data[r][c]*2;
                            game.data[r][c]=0;
                        }
                    }
                }
                game.sortUp();
                game.afterString=game.data.toString();
                    while(!flag&&game.beforeString!=game.afterString){
                        flag=game.randomNum();
                }    
                game.showNum();
                break;
        case 39://按下了向右的按键
                flag=false;
                game.beforeString=game.data.toString();
                    game.sortRight();
                    for(var r=0;r<game.RN;r++){
                        for(var c=game.CN-2;c>=0;c--){
                            //如果当前的数不为0且等于后一个数
                            if(game.data[r][c]!=0&&game.data[r][c]==game.data[r][c+1]){
                                game.data[r][c+1]=game.data[r][c]*2;
                                game.data[r][c]=0;
                            }
                        }
                    }
                    game.sortRight();
                    game.afterString=game.data.toString();
                    while(!flag&&game.beforeString!=game.afterString){
                        flag=game.randomNum();
                    }    
                        game.showNum();
                        break;
        case 40://按下了向下的按键
                    flag=false;
                    game.beforeString=game.data.toString();
                    game.sortDown();
                    for(var c=0;c<game.RN;c++){
                        for(var r=game.RN-2;r>=0;r--){
                            //如果当前的数不为0且等于下方一个数
                            if(game.data[r][c]!=0&&game.data[r][c]==game.data[r+1][c]){
                                game.data[r+1][c]=game.data[r][c]*2;
                                game.data[r][c]=0;
                            }
                        }
                    }
                    game.sortDown();
                    game.afterString=game.data.toString();
                    while(!flag&&game.beforeString!=game.afterString){
                        flag=game.randomNum();
                    }  
                        game.showNum();
                        break;
    } 
}

