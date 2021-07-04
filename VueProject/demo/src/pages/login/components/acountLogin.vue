<template>
<div>
    <div class="container">
        <div class="input">
            <label class="control-label">账号</label>
            <input type="number" class="tell" placeholder="手机号/邮箱/用户名">
        </div>
        <div class="form-control">
            <label class="control-label">密码</label>
            <input type="number" class="tell" placeholder="请输入密码">
        </div>
    </div>
     <section class="ms-login" style="display: block;">
            <div  class="yo-btn-normal" action-type="login">登录</div>
            <div class="search">找回密码</div>
            <div class="protocal">
                登录即同意去哪儿 <a href="https://touch.qunar.com/h5/about?action=rules" class="link">用户服务协议</a> 和 
                <a href="https://m.qunar.com/zhuanti/20170210_privacy.html?source=touch" class="link">隐私政策</a>
             </div>
    </section>
</div>
</template>
<script>
export default {
  name: 'acountLogin'
}
</script>
<style lang="scss" scoped>
.container{
    margin-top:.1rem;
    border-top: .02rem solid #ccc;
    border-bottom: .02rem solid #ccc;
    background: #fff;
    font-size: .16rem;
}
.tell{
    border:none;
    height:.9rem;
    flex:1;
    font-size:.36rem;
    color:#757575
}
.control-label{
    display: block;
    width:1.5rem;
    font-size: .36rem;
    color:#19A9BA
}
.input{
    margin-left: .2rem;
    display: flex;
    align-items: center;
    border-bottom: .02rem solid #ccc;
}
.form-control{
    margin-left: .2rem;
    display: flex;
    align-items: center;
}
.protocal {
    margin-top: .12rem;
    text-align: center;
    font-size: .12rem;
    color: #9e9e9e;
}
.link {
    color: #9e9e9e;
    text-decoration: underline;
}
.yo-btn-normal{
    color: #fff;
    text-align: center;
    line-height: 1rem;
    height:1rem;
    display: block;
    background: #85d1db;
    border-radius: .03rem;
    margin:.1rem
}
.search{
    color:#00AFC7;
    text-align: right;
    margin:.1rem
}
</style>
