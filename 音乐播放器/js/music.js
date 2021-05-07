$(function(){
    var volume=$('audio')[0].volume,process=false;
    $('#playAndPause').on('click',function(){
        //播放暂停按钮的控制
        changeIconfont();
    })
    function changeIconfont(){
        if($('audio')[0].paused){
            $("audio")[0].play();
            isPlay=true;
        }else{
            $('audio')[0].pause();
            isPlay=false;
        }   
    }
    function minAndHour(time){
        var min=Math.floor(time/60);
        var miao=Math.floor((time/60 - min)*60)
        if(miao<10){
            $('#currentTime').text(min+':0'+miao);   
        }else{
            $('#currentTime').text(min+':'+miao);
        }
            $('#playProgress').val(min*60+miao);
        
        
    }
    $('audio')[0].ontimeupdate=function(){
        var time=$('audio')[0].currentTime;
        minAndHour(time);
        colorWord();
    }
    $('#volProgress').on("change",function(){
        $('audio')[0].volume=$(this).val();
        volume=$(this).val();
    })
    $('audio')[0].oncanplaythrough=function(){
        updateDuration();
        addWords();
    }
    
    function updateDuration(){
        var time=$('audio')[0].duration
        var min=Math.floor(time/60);
        var miao=Math.floor((time/60 - min)*60)
        $('#playProgress')[0].max=min*60+miao;
        if(miao<10){
            $('#totalTime').text(min+':0'+miao);
        }else{
            $('#totalTime').text(min+':'+miao);
        }
        
    }
            
    //声音控制按钮
    $('#volButton').on('click',function(){
        if($("[title='静音']")[0]){
            $(this).prop('title','正常音量').find('.iconfont').removeClass('icon-jingyin').addClass('icon-volume');
            $('audio')[0].volume=volume;
            $('#volProgress').val(`${volume}`)
        }else if($("[title='正常音量']")[0]){
            $(this).prop('title','静音').find('.iconfont').removeClass('icon-volume').addClass('icon-jingyin');;
            $('audio')[0].volume=0;
            $('#volProgress').val("0")
        }
    })
    //音频进度拖动事件
    var isPlay;
    $('#playProgress').on({
            input:function(){
                console.log(isPlay)
                    if(!($('audio')[0].paused)){
                        $('audio')[0].pause();
                        $('#playAndPause').find('.iconfont').removeClass('icon-bofang1').addClass('icon-bofang');
                        isPlay=true;
                        console.log(isPlay);
                    }
                    $('audio')[0].currentTime=$(this).val();
                    var time=$('audio')[0].currentTime;
                    minAndHour(time);
                    colorWord();
                    },
            change:function(){
                console.log(isPlay)
                    if(isPlay){
                        console.log(11)
                        $("audio")[0].play();
                        $('#playAndPause').find('.iconfont').removeClass('icon-bofang').addClass('icon-bofang1')
                    }
                    
                    $('audio')[0].currentTime=$(this).val();
                    var time=$('audio')[0].currentTime;
                    minAndHour(time);
                    colorWord();
            }
        }
    );
    var j=0,songs=[];
    var currentSong=$('.south').text();
    for(var i=0;i<musicData.length;i++){
        songs.push(musicData[i].song);
        $('.table').append(`<li><span class="turnLeft">${musicData[i].song}</span><span class="turnRight">${musicData[i].singer}</span></li>`);
        if(musicData[i].song==currentSong){
            j=i;
        }
    };
  //播放处理的事情
    function play(k){
        j=k;
        var flag=false;
        for(var i=0;i<$('.history li').length;i++){
           if($('.history .turnLeft').eq(i).text().indexOf($('.table .turnLeft').eq(k).text())==0){
                flag=true;
           }
        }
        !flag&&$('.history').append($('.table li').eq(j).clone());
        $('audio')[0].src='../data/'+musicData[k].url;
        $('.south').text(musicData[k].song);
        $('.right-meta span').eq(0).text(musicData[k].album);
        $('.right-meta span').eq(1).text(musicData[k].singer);
        $('.right-meta span').eq(2).text(musicData[k].source);
        $('.center img').prop("src",users[k].pic)
        $('audio')[0].play();
        updateDuration();
        addWords();
    }
    //上一首
    $('#provMusic').on('click',function(){
        $('.words').scrollTop(0);
        var k;
        currentSong=$('.south').text()
        for(var i=0;i<musicData.length;i++){
            if(musicData[i].song==currentSong){
                i==0?k=musicData.length-1:k=i-1;
                play(k);
            }
        }
    })
 
    //下一首
    $('#nextMusic').on('click',function(){
        $('.words').scrollTop(0);
        var k;
        var currentSong=$('.south').text();
        for(var i=0;i<musicData.length;i++){
            if(musicData[i].song==currentSong){
                i==musicData.length-1?k=0:k=i+1;
                play(k);
            }
        }
    })
    //正在播放时旋转光盘
    $('audio')[0].onplaying=function(){
        $('.center').css({
        "animation": "rotate 3s linear infinite"});
        $('#playAndPause').find('.iconfont').removeClass('icon-bofang').addClass('icon-bofang1').prop('title','播放')
        
    }
    //歌曲暂停时停止旋转光盘
    $('audio')[0].onpause=function(){
        $('.center').css({"transform-origin":"",
        "animation": ""});
        $('#playAndPause').find('.iconfont').removeClass('icon-bofang1').addClass('icon-bofang').prop('title','暂停')
    }
    function addWords(){
        $('.words ul').empty();
        for(var i=0;i<lrcs[j].lyric.length;i++){
            $('.words ul').append(`<li>${lrcs[j].lyric[i].lineLyric}</li>`);
        }
    }
    //播放时滚动显示正在唱的歌词
    $('audio')[0].onplay=function(){
        addWords();
    }
    //正在唱的歌词变色
    function colorWord(){
        for(var n=0;n<lrcs[j].lyric.length;n++){
            if(lrcs[j].lyric[n].time==$('#playProgress').val()){
                if(n>=6){
                        $('.words ul li').eq(n).css('color','red').siblings().css('color','black'); 
                        $('.words').scrollTop((n-4)*25);
                        $('.playing').text($('.words ul li').eq(n).text());
                }else{
                    $('.words ul li').eq(n).css('color','red').siblings().css('color','black');
                    $('.playing').text($('.words ul li').eq(n).text());
                }
                
            }
        }
    }
    //登录
    $('.login').on('click',function(){
        $('#userLogin,.shade').css('display','block');
    })
    //提交用户信息
    var flag=false,pass='';
    $(document).on('click','.checkIn',function(){
        var userName=false;
        var user=$('.input input').eq(0).val();
        var psw=$('.input input').eq(1).val();
        if($('.remember input')[0].checked){
            $('.input input').eq(0).val('');
            $('.input input').eq(1).val(psw);
        }else{
            $('.input input').eq(0).val('');
            $('.input input').eq(1).val('');
        }
        // $.ajax({
        //     url:"../js/userInfo.txt",
        //     type:"get",
        //     success:function(data){
        //         var result=JSON.parse(data);
        //         if(result.name==user&&psw==result.password){
        //             $('#userLogin').remove();
        //             $('.shade').remove();
        //             flag=true
        //         }else {
        //             (result.name!=user)&&$('.input input').eq(0).css('border','1px solid red');
        //             (result.password!=psw)&&$('.input input').eq(1).css('border','1px solid red')   
        //         }
        //     },
        //     error:function(){

        //     }
        // })
        for(var i=0;i<users.length;i++){
            (users[i].name==user)&&(userName=true);
            if(userName){
                if(psw==users[i].pwd){
                    $('#userLogin,.shade').css('display','none');
                    $('.login').text(`你好,${user}`);
                    flag=true
                }else{
                    $('.input input').eq(0).css('border','') 
                    $('.input input').eq(1).css('border','1px solid red') 
                }
            }else if(i==users.length-1&&!userName){
                $('.input input').eq(0).css('border','1px solid red');
                $('.input input').eq(1).css('border','') 
            }
        }
    })
    $(document).on('click','.shade',function(){
        $('#userLogin,.shade').css('display','none');
        $('.input input').eq(0).val('');
        if(!$('.remember input')[0].checked){
            $('.input input').eq(1).val('');
        }
        
    })
    $('.area').on("click",function(){
        if(!flag){
            alert("请先登录")
        }
        
    })
    //发表评论
    $('.btn span').on('click',function(){
        var contents=$('textarea').val();
        var date=new Date();
        console.log(date.getMonth()+1)
        var newDate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
        $(`<div class="contents">
        <div><img src="http://p1.music.126.net/2diP5uOrailFol-qgmprUQ==/109951163243492839.jpg" alt=""></div>
        <div class="discuss-content">
            <div class="name">小明:<span>${contents}</span></div>
            <div class="timeAndButton"><div>${newDate}</div><div><span>点赞|</span><span>分享|</span><span>回复</span></div></div>
        </div>
    </div>`).insertAfter('#funny');
    $('textarea').val('');
        getTips()
    })
    //播放模式
    $('#playMode').on('click',function(){

    });
    getTips();
    //获取评论数量
    function getTips(){
        $('.tips').text($('.contents').length);
    };
    //点击词图标桌面显示歌词
    $('.icon-geciweidianji').on('click',function(){
        if($('.playing').css('display')=='none'){
            $('.playing').css('display','block')
        }else{
            $('.playing').css('display','none')
        }
        
    });
    //点击播放列表
    $('.icon-wj-bflb').on('click',function(){
        if($('.playTable').css('display')=='none'){
            $('.playTable').css('display','block')
        }else{
            $('.playTable').css('display','none')
        }
       
    });
    //点击历史记录
    $('.headTitle span').eq(1).on('click',function(){
        $('.headTitle span').eq(0).css('color','white');
        $('.headTitle span').eq(1).css('color','#999');
        $('.history').css('display','block');
        $('.table').css('display','none')
    })
    //点击播放列表

    $('.headTitle span').eq(0).on('click',function(){
        $('.headTitle span').eq(1).css('color','white');
        $('.headTitle span').eq(0).css('color','#999');
        $('.history').css('display','none');
        $('.table').css('display','block')
    })
    //切换播放模式 
    $('#playMode').find('.iconfont').on('click',function(){
        var arr=['icon-hanhan-01-01','icon-23_shunxubofang','icon-suijibofang01'],k=0,item=['单曲循环','顺序播放','随机播放'];
        for(var i=0;i<arr.length;i++){
            if($(this).hasClass(arr[i])){
                (i+1)==arr.length?k=0:k=i+1
                $(this).removeClass(arr[i]).addClass(arr[k]);
                $('#playMode').prop('title',item[k])
                break;
            }
        }
    })
    //单曲循环
    $('audio')[0].onended=function(){
        if($('#playMode').prop('title')=='单曲循环'){
            changeIconfont();
            
        }else if($('#playMode').prop('title')=='顺序播放'){
            j++;
            j==songs.length&&(j=0)
            play(j);
        }else{
            play(parseInt(Math.random()*songs.length));
        }
    }
    //换肤
    $('[type=color]').on('input',function(){
        var hexString = $(this).val();
        $('.head,.control').css('background',hexString);
    })
    //记住密码
    
})