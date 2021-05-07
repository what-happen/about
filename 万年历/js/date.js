    $(function(){
        var twoMonth,days,year,count,lastDays,month,nowYear,date,nowMonth;
        var len=$(".days td").length;
        var cursorDate=new Date();
        $('th span').eq(0).text(cursorDate.getFullYear());
        $('th span').eq(1).text(cursorDate.getMonth()+1);
        year=parseInt($('th span').eq(0).text());
        month=parseInt($('th span').eq(1).text());
        date=cursorDate.getDate();
        nowYear=cursorDate.getFullYear();
        nowMonth=cursorDate.getMonth();
        
        //在页面渲染日期，颜色
        function insertDay(){
            $(".days td").empty();
            ((year%4==0&&year%100!=0)||(year%400==0))?(twoMonth=29):(twoMonth=28);
            var newDate=new Date(year,month-1);
            var j=0;
            j=newDate.getDay();
            //获取某月有多少天
            days=new Date(year,month,0).getDate();
            lastDays=new Date((month-1)==0?year-1:month>12?year+1:year,(month-1)==0?12:month>12?1:month-1,0).getDate();
            if(j!=0){
                for(var m=j-1;m>=0;m--){
                    $(".days td").eq(m).text(lastDays).css({"color":"#BFBFBF"}); 
                    lastDays-=1;   
            }
            }
            
            for(var i=1;i<=days;i++){
                $(".days td").eq(j).text(i).css({"color":"#262626"});
                if(i==date&&nowYear==year&&nowMonth+1==month){
                    
                    $(".days td").eq(j).text(i).css({"color":"red"});
                }
                j+=1;
            }
            count=1;
            for(var k=j;k<=len;k++){
                $(".days td").eq(k).text(count).css({"color":"#BFBFBF"});
                count+=1;
            }
            
        }
        insertDay();
        //点击往左的箭头使年份减一，并重新渲染改年度的月份的所有日期
        $('.iconfontleft').click(function(){
            year-=1;
            $('th span').eq(0).text(`${year}`);
            insertDay();
        })
        //点击往右的箭头使年份加一，并重新渲染改年度的月份的所有日期
        $('.iconfontright').click(function(){
            year+=1;
            $('th span').eq(0).text(`${year}`);
            insertDay();
        })
        //点击往左的箭头使月份减一，并重新渲染改年度的月份的所有日期
        $('.iconfontzuo').click(function(){
            (month-1)==0?(year-=1)&&(month=12):month-=1;
            $('th span').eq(0).text(`${year}`);
            $('th span').eq(1).text(`${month}`);
            insertDay();
        })
        //点击往右的箭头使月份加一，并重新渲染改年度的月份的所有日期
        $('.iconfontyou').click(function(){
            (month+1)==13?(year+=1)&&(month=1):month+=1;
            $('th span').eq(0).text(`${year}`);
            $('th span').eq(1).text(`${month}`);
            insertDay();
        }) 
    })