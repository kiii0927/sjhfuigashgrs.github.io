var timer,post_comment=document.getElementById("post-comment");if(null!=post_comment){const e={lightColors:[["var(--lyx-white-acrylic2)","var(--lyx-black)"]],darkColors:[["var(--liusiqi-maskbgdeep)","var(--lyx-white)"]],maxBarrage:1,barrageTime:5e3,twikooUrl:"https://twikoo.top",accessToken:"9901a847ec7ab9994996c424e5dbecb0",pageUrl:window.location.pathname,barrageTimer:[],barrageList:[],barrageIndex:0,noAvatarType:"retro",dom:document.querySelector(".comment-barrage"),displayBarrage:!0,avatarCDN:"cravatar.cn"};function isInViewPortOfOne(e){const a=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return e.offsetTop-document.documentElement.scrollTop<=a}function initCommentBarrage(){var a=JSON.stringify({event:"COMMENT_GET","commentBarrageConfig.accessToken":e.accessToken,url:e.pageUrl}),t=new XMLHttpRequest;t.withCredentials=!0,t.addEventListener("readystatechange",(function(){4===this.readyState&&(e.barrageList=commentLinkFilter(JSON.parse(this.responseText).data||[]),null!=e.dom&&(e.dom.innerHTML=""))})),t.open("POST",e.twikooUrl),t.setRequestHeader("Content-Type","application/json"),t.send(a),setInterval((()=>{e.barrageList.length&&(popCommentBarrage(e.barrageList[e.barrageIndex]),e.barrageIndex+=1,e.barrageIndex%=e.barrageList.length),e.barrageTimer.length>(e.barrageList.length>e.maxBarrage?e.maxBarrage:e.barrageList.length)&&removeCommentBarrage(e.barrageTimer.shift())}),e.barrageTime)}function commentLinkFilter(e){e.sort(((e,a)=>e.created-a.created));let a=[];return e.forEach((e=>{a.push(...getCommentReplies(e))})),a}function getCommentReplies(e){if(e.replies){let a=[e];return e.replies.forEach((e=>{a.push(...getCommentReplies(e))})),a}return[]}function popCommentBarrage(a){let t=document.createElement("div");e.dom.clientWidth,e.dom.clientHeight;t.className="comment-barrage-item";let r=Math.floor(Math.random()*e.lightColors.length);document.getElementById("barragesColor").innerHTML=`[data-theme='light'] .comment-barrage-item { background-color:${e.lightColors[r][0]};color:${e.lightColors[r][1]}}[data-theme='dark'] .comment-barrage-item{ background-color:${e.darkColors[r][0]};color:${e.darkColors[r][1]}}`,t.innerHTML=`\n\t\t<div class="barrageHead">\n\t\t\t<img class="barrageAvatar" src="https://${e.avatarCDN}/avatar/${a.mailMd5}?d=${e.noAvatarType}"/>\n\t\t\t<div class="barrageNick">${a.nick}</div>\n\t\t\t<a href="javascript:switchCommentBarrage()" style="font-size:20px">×</a>\n\t\t</div>\n\t\t<div class="barrageContent">${a.comment}</div>\n\t`,e.barrageTimer.push(t),e.dom.append(t)}function removeCommentBarrage(a){a.className="comment-barrage-item out",1!=e.maxBarrage?setTimeout((()=>{e.dom.removeChild(a)}),1e3):e.dom.removeChild(a)}document.onscroll=function(){e.displayBarrage&&(isInViewPortOfOne(post_comment)?document.getElementsByClassName("comment-barrage")[0].setAttribute("style","display:none;"):document.getElementsByClassName("comment-barrage")[0].setAttribute("style",""))},switchCommentBarrage=function(){if(localStorage.setItem("isBarrageToggle",Number(!Number(localStorage.getItem("isBarrageToggle")))),!isInViewPortOfOne(post_comment)){e.displayBarrage=!e.displayBarrage;let a=document.querySelector(".comment-barrage");a&&$(a).fadeToggle()}"1"==localStorage.getItem("isBarrageToggle")?btf.snackbarShow("✨ 已关闭评论弹幕"):btf.snackbarShow("✨ 已开启评论弹幕")},$(".comment-barrage").hover((function(){null!=timer&&clearInterval(timer)}),(function(){timer=setInterval((()=>{e.barrageList.length&&(popCommentBarrage(e.barrageList[e.barrageIndex]),e.barrageIndex+=1,e.barrageIndex%=e.barrageList.length),e.barrageTimer.length>(e.barrageList.length>e.maxBarrage?e.maxBarrage:e.barrageList.length)&&removeCommentBarrage(e.barrageTimer.shift())}),e.barrageTime)})),null==localStorage.getItem("isBarrageToggle")?localStorage.setItem("isBarrageToggle","0"):"1"==localStorage.getItem("isBarrageToggle")&&(localStorage.setItem("isBarrageToggle","0"),switchCommentBarrage()),initCommentBarrage()}