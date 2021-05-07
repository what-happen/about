$(function(){
            //获取2d上下文
            //$('#tutorial')得到的是一个jquery对象，而jQuery对象是没有getContext方法的，需要把jQuery对象转换成Dom对象，官方文档推荐的方法如上述代码，其实jQuery对象就是类数组，用数组下标可以取得Dom对象
            var ctx=$('#tutorial')[0].getContext('2d');
            var winner=false,len=400,col=16,am,chessesArr,firstBlack=true,arrBlack=[],arrWhite=[],black=false,white=false;
            $('.banner input').on("input",function(){
                len=parseInt($('.banner input').eq(0).val());
                col=parseInt($('.banner input').eq(1).val());
                $('#tutorial')[0].height=$('#tutorial')[0].width=len;
                if(len>=400&&col>=16){
                    drawLine(len,col);
                    init();
                    winner=false;
                    black=false;
                    white=false;
                }
            })
            //0代表没有棋子，1代表黑子 2代表白子,初始化二维数组
            init();
            function init(){
                chessesArr=new Array(col);
                for(var i=0;i<chessesArr.length;i++){
                    chessesArr[i]=new Array(col).fill(0);
                }
            }
           
            //点击重新开始
            $('.btn1').on("click",function(){
                winner=false;
                black=false;
                white=false;
                ctx.clearRect(0,0,len,len);
                drawLine(len,col);
                init();  
            })
            //点击悔棋
            drawLine(len,col);
            //画棋盘的方法
            function drawLine(len,col){
                ctx.clearRect(0,0,len,len);
                am=parseInt(len)/parseInt(col+1);
                for(var n=1;n<col+1;n++){
                //画横线
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.strokeStyle="black";
                ctx.moveTo(am,am*n);
                ctx.lineTo(len-am,am*n);
                ctx.closePath();
                ctx.stroke();
                //画竖线
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.strokeStyle="black";
                ctx.moveTo(am*n,am);
                ctx.lineTo(am*n,len-am);
                ctx.closePath();
                ctx.stroke();
                }
            }
            //判断落子的坐标是否已经有棋子
            function isRepeat(x,y){
                if(chessesArr[y-1][x-1]!=0){
                    return true;
                }
            }
            //画黑棋子和白棋子
            function draw(x,y){
                if(firstBlack){
                    ctx.beginPath();
                    ctx.fillStyle = "black";
                    ctx.strokeStyle="black";
                    ctx.arc(am*x,am*y,am/3,0,2*Math.PI);
                    ctx.fill();
                    ctx.stroke();
                    chessesArr[y-1][x-1]=1;
                    arrBlack.push([y-1,x-1]);
                    isWinner(x-1,y-1);
                    firstBlack=false;
                }else{
                    ctx.beginPath();
                    ctx.fillStyle = "white";
                    ctx.strokeStyle="white";
                    ctx.arc(am*x,am*y,am/3,0,2*Math.PI);
                    ctx.fill();
                    ctx.stroke();
                    chessesArr[y-1][x-1]=2;
                    arrWhite.push([y-1,x-1]);
                    isWinner(x-1,y-1);
                    firstBlack=true;
                }
            }
            //点击画布时获取坐标，并调用方法判断是否重复和画棋子
            $('#tutorial').click(function(ev){
                if(winner){return};
                ev=ev||ev.event;
                for(var x=1;x<col+1;x++){
                    if((x*am-10<ev.offsetX&&ev.offsetX<x*am+10)){
                        for(var y=1;y<col+1;y++ ){
                            if((am*y-10<ev.offsetY&&ev.offsetY<am*y+10)){
                                if(!isRepeat(x,y)){
                                    draw(x,y);  
                                }else{
                                    alert("不可以下在已被落子的地方");
                                }  
                            }
                        }   
                    }

                    
                }
                
            });
            //判断棋子胜利的方法
            //1.横向判断
            function winnerRow(x,y){
                var n=0;
                //棋子左边有几个相同颜色的棋子
               for(var i=x;i>=0;i--){
                    if(firstBlack+chessesArr[y][i]==2){
                        n++;
                    }else{
                        break;
                    }
               }
               //棋子右边有几个相同颜色的棋子
               for(var i=x+1;i<col;i++){
                    if(firstBlack+chessesArr[y][i]==2){
                        n++;
                    }else{
                        break;
                    }
                }
                return n>=5
            }
            //2.纵向判断
            function winnerCol(x,y){
                var n=0;
                //棋子上边有几个相同颜色的棋子
                for(var i=y;i>=0;i--){
                    if(firstBlack+chessesArr[i][x]==2){
                        n++
                    }else{
                        break;
                    }
                }
                //棋子下边有几个相同颜色的棋子
                for(var i=y+1;i<col;i++){
                    if(firstBlack+chessesArr[i][x]==2){
                        n++
                    }else{
                        break;
                    }
                }
                return n>=5
            }
            //3.正斜向判断
            function winner1(x,y){
                var n=0;
                //棋子正斜上有几个相同颜色的棋子
                for(var i=x+1,j=y+1;i<col&&j<col;i++,j++){
                    if(firstBlack+chessesArr[j][i]==2){
                        n++
                    }else{
                        break;
                    }
                }
                //棋子正斜下有几个相同颜色的棋子
                for(var i=x,j=y;i>=0&&j>=0;i--,j--){
                    if(firstBlack+chessesArr[j][i]==2){
                        n++
                    }else{
                        break;
                    }
                }
                return n>=5
            }
            //4.反斜向判断
            function winner2(x,y){
                
                var n=0;
                //棋子反斜上有几个相同颜色的棋子
                for(var i=x+1,j=y-1;i<col&&j>=0;i++,j--){
                    if(firstBlack+chessesArr[j][i]==2){
                        n++
                    }else{
                        break;
                    }
                }
                //棋子反斜下有几个相同颜色的棋子
                for(var i=x,j=y;i>=0&&j<col;i--,j++){
                    if(firstBlack+chessesArr[j][i]==2){
                        n++
                    }else{
                        break;
                    }
                }
                return n>=5
            }
            //落子时判断是否达到胜利条件
            function isWinner(x,y){
                if(winnerRow(x,y)||winnerCol(x,y)||winner1(x,y)||winner2(x,y)){
                    winner=true;
                    firstBlack?alert("黑棋赢了"):alert("白棋赢了");
                }
            }
            //点击悔棋
            $('.btn2').on('click',function(){
                var blackLen=arrBlack.length-1,whiteLen=arrWhite.length-1;
                console.log(white,black)
                if(firstBlack){
                    if(!white){
                        chessesArr[arrWhite[whiteLen][0]][arrWhite[whiteLen][1]]=0;
                        firstBlack=!firstBlack;
                        white=true;
                    }else{
                        alert('白棋只能悔棋一次');
                        return
                    }
                }else{
                    if(!black){
                        chessesArr[arrBlack[blackLen][0]][arrBlack[blackLen][1]]=0;
                        firstBlack=!firstBlack;
                        black=true;
                    }else{
                       
                        alert('黑棋只能悔棋一次');
                        return
                    }
                }
                console.log(11)
                winner=false;
                ctx.clearRect(0,0,len,len);
                //画棋盘
                drawLine(len,col);
                //画棋子
                console.log(chessesArr);
                for(var i=0;i<col;i++){
                    for(var j=0;j<col;j++){
                        
                            if(chessesArr[i][j]==1){
                                ctx.beginPath();
                                ctx.fillStyle = "black";
                                ctx.strokeStyle="black";
                                ctx.arc(am*(j+1),am*(i+1),am/3,0,2*Math.PI);
                                ctx.fill();
                                ctx.stroke();
                            }else if(chessesArr[i][j]==2){
                                ctx.beginPath();
                                ctx.fillStyle = "white";
                                ctx.strokeStyle="white";
                                ctx.arc(am*(j+1),am*(i+1),am/3,0,2*Math.PI);
                                ctx.fill();
                                ctx.stroke();
                            }       
                        }
                    }
                
                }
            )
        })