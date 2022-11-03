function getDate(){var e=new Date,a=e.getFullYear(),o=e.getMonth()+1,n=e.getDate(),l=e.getHours(),t=e.getMinutes(),g=e.getSeconds();return o<10&&(o="0"+o),n<10&&(n="0"+n),l<10&&(l="0"+l),t<10&&(t="0"+t),g<10&&(g="0"+g),a+"-"+o+"-"+n+" "+l+":"+t+":"+g}function saveData(e,a){localStorage.setItem(e,JSON.stringify({time:Date.now(),data:a}))}function loadData(e,a){let o=JSON.parse(localStorage.getItem(e));if(o){let e=Date.now()-o.time;if(e<60*a*1e3&&e>-1)return o.data}return 0}console.log("\n  %cHello,欢迎你来到我的博客。\n  如果你喜欢上了本站某个样式的话，尽管借鉴即可。\n  让我们一起学习进步，如果有什么不解可以给我留言。\n  但是请不要恶意攻击本站哦~在此先行谢过了，请你吃糖🍭🍭🍭","line-height:22px;color:#00a5f2");try{let e=loadData("blogbg",1440);e?changeBg(e,1):localStorage.removeItem("blogbg")}catch(e){localStorage.removeItem("blogbg")}function changeBg(e,a){let o=document.getElementById("web_bg");"#"==e.charAt(0)?(o.style.backgroundColor=e,o.style.backgroundImage="none"):o.style.backgroundImage=e,a||(btf.snackbarShow("壁纸切换成功，将于一天后到期~"),saveData("blogbg",e))}var winbox="";function createWinbox(){let e=document.createElement("div");document.body.appendChild(e),winbox=WinBox({id:"changeBgBox",index:999,title:"切换背景",x:"center",y:"center",minwidth:"300px",height:"60%",background:"var(--referto-literature-background-color)",onmaximize:()=>{e.innerHTML="<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>"},onrestore:()=>{e.innerHTML=""}}),winResize(),window.addEventListener("resize",winResize),winbox.body.innerHTML='\n    <style>\n        #changeBgBox .note {\n            font-size: 14px;\n            margin: 0 0 10px;\n            padding: 9px 0 9px 2.3rem;\n        }\n        #changeBgBox .note:not(.no-icon)::before,\n        #changeBgBox .note>.note-icon {\n            left: 0.5em;\n        }\n        #changeBgBox button {\n            padding:12px 0 !important;\n        }\n        #changeBgBox a.imgbox {\n            text-decoration: none !important;\n        }\n        #changeBgBox .toggle>.toggle-content {\n            margin: 0;\n        }\n    </style>\n    <div id="article-container" style="padding:10px;">\n    \n    <div class="note info simple">\n    <p>点击对应样式即可切换背景。<br>相册图片也可以当作壁纸哦～<a href="/gallery/wallpaper/" data-pjax-state="">前往相册</a></p>\n    </div>\n\n    <div class="note pink icon-padding simple">\n    <i class="note-icon fas fa-image"></i>\n    <p>有效期为一天，到期切回默认壁纸。</p>\n    </div>\n\n    <p><button onclick="localStorage.removeItem(\'blogbg\');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>\n    \n    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>\n    <details class="toggle">\n    <summary class="toggle-button">查看手机壁纸</summary>\n    <div class="toggle-content">\n        <div class="bgbox">\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2020/12/2020121409235638.jpeg)" class="imgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2020/12/2020121409235638.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021111016580917.jpeg)" class="imgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/11/2021111016580917.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://xinzhuobu.com/wp-content/uploads/2022/06/20220617004th.jpg)" class="imgbox" onclick="changeBg(\'url(https://xinzhuobu.com/wp-content/uploads/2022/06/20220617004th.jpg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021110119420045.jpeg)" class="imgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/11/2021110119420045.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021111016525829.jpeg)" class="imgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/11/2021111016525829.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/image/20200407/20200407210607_94155.jpg)" class="imgbox" onclick="changeBg(\'url(https://www.toopic.cn/public/uploads/image/20200407/20200407210607_94155.jpg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/04/2021040311203011.jpeg)" class="imgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/04/2021040311203011.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(http://img.wwery.com/Sugar/mjYVBNkj.jpg)" class="imgbox" onclick="changeBg(\'url(http://img.wwery.com/Sugar/mjYVBNkj.jpg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.wwery.com/Sugar/t306AFbf.png)" class="imgbox" onclick="changeBg(\'url(https://img.wwery.com/Sugar/t306AFbf.png)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.wwery.com/Sugar/HGawPyFe.png)" class="imgbox" onclick="changeBg(\'url(https://img.wwery.com/Sugar/HGawPyFe.png)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.wwery.com/Sugar/6ih6G7Kq.png)" class="imgbox" onclick="changeBg(\'url(https://img.wwery.com/Sugar/6ih6G7Kq.png)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.wwery.com/Sugar/oSEupdjk.png)" class="imgbox" onclick="changeBg(\'url(https://img.wwery.com/Sugar/oSEupdjk.png)\')"></a>\n        </div>\n    </div>\n    </details>\n    \n    \n    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）" data-pjax-state=""></a>图片（手机）</h2>\n    <details class="toggle">\n    <summary class="toggle-button">查看手机壁纸</summary>\n    <div class="toggle-content">\n        <div class="bgbox">\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021053107390019.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/05/2021053107390019.jpeg\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/08/2021082418471438.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/08/2021082418471438.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021053111333664.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/05/2021053111333664.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021052509214162.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/05/2021052509214162.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/10/2021101113150626.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/10/2021101113150626.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/12/2021121119294157.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/12/2021121119294157.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2022/05/2022050211365433.jpg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2022/05/2022050211365433.jpg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/01/2021011114540487.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/01/2021011114540487.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/10/2021101112481925.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/10/2021101112481925.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2020/12/2020120109592351.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2020/12/2020120109592351.jpeg)\')"></a>\n        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/08/2021081519313621.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/08/2021081519313621.jpeg)\')"></a>\n        </div>\n    </div>\n    </details>\n\n    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>\n    <details class="toggle"><summary class="toggle-button" style="">查看渐变背景</summary>\n        <div class="toggle-content">\n            <div class="bgbox">\n            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg(\'linear-gradient(to right, #eecda3, #ef629f)\')"></a>\n            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(255, 110, 127), rgb(191, 233, 255))" onclick="changeBg(\'linear-gradient(to right, #eecda3, #ef629f)\')"></a>\n            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #ff4b1f, #1fddff)" onclick="changeBg(\'linear-gradient(to right, #ff4b1f, #1fddff)\')"></a>\n            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))" onclick="changeBg(\'linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))\')"></a>\n            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #16bffd, #cb3066)" onclick="changeBg(\'linear-gradient(to right, #16bffd, #cb3066)\')"></a>\n            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))" onclick="changeBg(\'linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))\')"></a>\n            </div>\n        </div>\n    </details>\n\n    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>\n    <details class="toggle"><summary class="toggle-button" style="">查看纯色背景</summary>\n        <div class="toggle-content">\n            <div class="bgbox">\n            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F4E2D8" onclick="changeBg(\'#F4E2D8\')"></a>\n            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg(\'#7D9D9C\')"></a>\n            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F2D7D9" onclick="changeBg(\'#F2D7D9\')"></a>\n            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #76BA99" onclick="changeBg(\'#76BA99\')"></a>\n            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #9FC088" onclick="changeBg(\'#9FC088\')"></a>\n            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #CEAB93" onclick="changeBg(\'#CEAB93\')"></a>\n            </div>\n        </div>\n    </details>\n'}function winResize(){var e=document.documentElement.clientWidth;e<=768?winbox.resize(.95*e+"px","90%").move("center","center"):winbox.resize(.6*e+"px","70%").move("center","center")}function toggleWinbox(){document.querySelector("#changeBgBox")?winbox.toggleClass("hide"):createWinbox()}