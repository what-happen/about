//实现全选功能
function checkAll(ipt){
    var boxes=document.getElementsByClassName('check');
    for(var i=0;i<boxes.length;i++){
        ipt.checked?boxes[i].checked=true:boxes[i].checked=false;
        };
        isCheck()
};
//同一个店的商品，点击店名旁边的复选框相当于全选这个店所有的商品
function checkOnly(ipt){
    checkStore();
    var boxes=ipt.parentNode.parentNode.getElementsByTagName('input');
    for(var i=0;i<boxes.length;i++){
        ipt.checked?boxes[i].checked=true:boxes[i].checked=false;
        };
        isCheck();
};
//如果所有店的复选框都勾上则全选框也勾上
function checkStore(){
    var stores=document.getElementsByClassName('store');
    var arr=Array.from(stores);
    var checkAll=document.getElementsByClassName('checkAll');
    checkAll[1].checked=checkAll[0].checked = arr.every(function(v) {
        return v.checked;
    });
};
function isCheck(){
    var storeGoods=document.getElementsByClassName('storeGoods');
    var prices=document.getElementsByClassName('prices')[0];//总价
    var qulitys=document.getElementsByClassName('qulitys')[0];//总数
    prices.innerHTML='0.00';
    qulitys.innerHTML='0';
    for(var i=0;i<storeGoods.length;i++){
            var reg=/¥/g;
            var allPrices=(prices.innerHTML).replace(reg,'');
            var price=(storeGoods[i].parentNode.parentNode.children[4].innerHTML).replace(reg,'');
        if(storeGoods[i].checked){
            storeGoods[i].parentNode.parentNode.style.backgroundColor='#fff4e8';
            var monry=parseInt(qulitys.innerHTML);
            qulitys.innerHTML=parseInt(storeGoods[i].parentNode.parentNode.getElementsByTagName('span')[1].innerHTML)+monry;
            prices.innerHTML="&yen;"+(parseInt(price)*parseInt(storeGoods[i].parentNode.parentNode.getElementsByTagName('span')[1].innerHTML)+parseInt(allPrices));
            checkStoreGoods();
        }else{
            //未选中则商品的背景为白色
            storeGoods[i].parentNode.parentNode.style.backgroundColor='white';
        }
    }
}
//如果店里的商品都勾选了 ,那么店名旁的勾选也选上
function singleCLick(){
    var storeGoods=document.getElementsByClassName('storeGoods');
    for(var i=0;i<storeGoods.length;i++){
        storeGoods[i].onclick=isCheck;
    };
}
singleCLick();
function checkStoreGoods(){
    var stores=document.getElementsByClassName('store');
    var storeGoods=document.getElementsByClassName('storeGoods');
    var arr=Array.from(storeGoods);
    for(var i=0;i<stores.length;i++){
        stores[i].checked=arr.every(function(v) {
            return v.checked;
        })
    }
    checkStore();
};
//点击商品一栏的删除按钮，实现弹窗功能和点击弹框里的确认后删除标签
function dele(tag){
        var html=`<div id="chuang">
        <div class="info">是否删除商品</div>
        <div class="button"><span class="comfire">确定</span><span class="cancel">取消</span></div>
        </div>`;
        var ele=document.createElement('div');
        ele.innerHTML=html;
        document.body.appendChild(ele);
        var confire=document.getElementsByClassName('comfire')[0];
        var cancel=document.getElementsByClassName('cancel')[0];
        confire.onclick=function(){
        ele.remove();
        tag.parentNode.remove();
        };
        cancel.onclick=function(){
            ele.remove();
        }
}
//实现删除选中的商品
var ele1=document.getElementById('deleteSeleted');
ele1.onclick=function(){
    var flag=false;
    var storeGoods=storeGoods=document.querySelectorAll('.storeGoods'); //返回静态集合
    var arr=Array.from(storeGoods);
    flag=arr.some(function(v){
        return v.checked
    })
    if(!flag){
        alert("请选择要删除的商品")
    }else if(flag){
        var html=`<div id="chuang">
        <div class="info">是否删除选中的商品</div>
        <div class="button"><span class="comfire">确定</span><span class="cancel">取消</span></div>
        </div>`;
        var ele=document.createElement('div');
        ele.innerHTML=html;
        document.body.appendChild(ele);
        var confire=document.getElementsByClassName('comfire')[0];
        var cancel=document.getElementsByClassName('cancel')[0];
        confire.onclick=function(){
        ele.remove();
        for(var i=0;i<storeGoods.length;i++){
            if(storeGoods[i].checked){
                storeGoods[i].parentNode.parentNode.remove();
                isCheck();
            }
        }
        };
        cancel.onclick=function(){
            ele.remove();
        }
    }
}
//实现+的功能
function add(){
    var qulity=document.getElementsByClassName('qulity');
    for(var i=0;i<qulity.length;i++){
        qulity[i].children[2].onclick=(function(i){
                return function(){
                    var qulitys=qulity[i].children[1].innerHTML;
                    qulity[i].children[1].innerHTML=parseInt(qulitys)+1;
                    isCheck();
                    sum(i);
                }
        })(i)
    }
}
add();
//实现-的功能
function less(){
    var qulity=document.getElementsByClassName('qulity');
    for(var i=0;i<qulity.length;i++){
        qulity[i].children[0].onclick=(function(i){
                return function(){
                    var qulitys=qulity[i].children[1].innerHTML;
                    if(parseInt(qulitys)==1){
                        alert("不能再少了");
                    }else{
                        qulity[i].children[1].innerHTML=qulitys-1;
                        isCheck();
                        sum(i);
                    }
                }
        })(i)
    }
}
less();
//实现小计的功能
function sum(i){
        var price=document.getElementsByClassName('price')[i];
        var ele=document.getElementsByClassName('contents')[i];
        var reg=/¥/g;
        var newPrice=(ele.children[4].innerHTML).replace(reg,'');
        price.innerHTML="&yen;"+parseInt(newPrice)*parseInt(ele.getElementsByTagName('span')[1].innerHTML)
}
//实现点击加入购物车
var btn=document.getElementsByClassName('btn');
for(var i=0,len=btn.length;i<len;i++){
    btn[i].onclick=function(){
        var topShop=document.getElementsByClassName('title2-content')[0];
        var ele=document.createElement('div');
        ele.className='contents';
        var html=`<div class="boxes"><input type="checkbox" class="check storeGoods"></div>
        <div class="all"><img src="https://img10.360buyimg.com/cms/s80x80_jfs/t1/141287/15/10230/232339/5f7d72f3Eb698b6be/3f859a82c1d97e60.jpg" alt="衣服"></div>
        <div>
            <dl>
                <dt class="descriper">奉孝中老年女装摇粒绒卫衣妈妈装春装外套老年人衣服春秋奶奶装 601款枣红</dt>
                <dd class="descriper"><img src="img/dot.png" alt="">选服务</dd>     
            </dl>
        </div>
        <div>
            <dl>
                <dt class="des">601款枣红</dt>
                <dd class="des">2XL（建议115-130斤）</dd>
            </dl>
        </div>
        <div>¥89.00</div>
        <div class="qulity">
            <span>-</span>
            <span>1</span>
            <span>+</span>
        </div>
        <div class="price">¥89.00</div>
        <div class="deal" onclick="dele(this)">
            <dl>
                <dt><a href="#">删除</a></dt>
                <dd><a href="#">移到我的关注</a></dd>
            </dl>
        </div>`
        ele.innerHTML=html;
        topShop.appendChild(ele);
        add();
        less();
        singleCLick();
}
}
//自动轮播
var goodslistDiv=document.getElementsByClassName('goodslistDiv')[0];
var newLeft=0;
function autoMoveLeft(){
    newLeft+=999;
    if(newLeft==2997){
        setTimeout(function(){
            newLeft=0;
            goodslistDiv.scrollLeft=0;
        }, 1000);
        goodslistDiv.scrollLeft=newLeft;
    }
    goodslistDiv.scrollLeft=newLeft;
  
}
var timer=setInterval(autoMoveLeft,3000);
goodslistDiv.onmouseenter=function(){
    clearInterval(timer);
}
goodslistDiv.onmouseleave=function(){
    timer=setInterval(autoMoveLeft,3000);
}
//手动轮播
var forLeft=document.getElementsByClassName('images-left')[0];
forLeft.onclick=function(){
    if(newLeft==0){
        newLeft=2997
        goodslistDiv.scrollLeft=newLeft;
        setTimeout(function(){
            newLeft=1998;
            goodslistDiv.scrollLeft=newLeft;
        }, 100);
    }else{
        newLeft-=999;
        goodslistDiv.scrollLeft=newLeft;
    }
}
var forRight=document.getElementsByClassName('images-right')[0];
forRight.onclick=function(){
    console.log(newLeft);
    if(newLeft==2997){
        newLeft=0
        goodslistDiv.scrollLeft=newLeft;
        setTimeout(function(){
                        newLeft=999;
                        goodslistDiv.scrollLeft=newLeft;
                    }, 100);
    }else{
        newLeft+=999;
        goodslistDiv.scrollLeft=newLeft;
    }
}