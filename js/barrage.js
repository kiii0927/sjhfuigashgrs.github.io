const barrageColors=[["#386adecc","#fffa"],["#9248f0cc","#fffa"],["#2da55dcc","#fffa"],["#ffc505cc","#fffc"],["#d44e30cc","#fffa"]],maxBarrageWidth=150,maxBarrageHeight=100,maxBarrage=10,barrageTime=1500,twikooUrl="https://twikoo.top/",accessToken="9901a847ec7ab9994996c424e5dbecb0",pageUrl="/barrage/",barrageTimer=[];let barrageList=[],barrageIndex=0;const barrageDom=document.getElementById("barrage-container");var data=JSON.stringify({event:"COMMENT_GET",accessToken:accessToken,url:pageUrl}),xhr=new XMLHttpRequest;function linkFilter(e){return e.filter((e=>!e.master))}function popBarrage(e){let a=document.createElement("div"),r=barrageDom.clientWidth,t=barrageDom.clientHeight;a.className="barrage",a.style.top=Math.floor(Math.random()*(t-100))+"px",a.style.left=Math.floor(Math.random()*(r-150))+"px";let n=Math.floor(Math.random()*barrageColors.length);a.style.background=barrageColors[n][0],a.style.color=barrageColors[n][1],a.innerHTML=`\n\t\t<div class="barrageHead">\n\t\t\t<img class="barrageAvatar" src="https://cravatar.cn/avatar/${e.mailMd5}"/>\n\t\t\t<div class="barrageNick">${e.nick}</div>\n\t\t</div>\n\t\t<div class="barrageContent">${e.comment}</div>\n\t`,barrageTimer.push(a),barrageDom.append(a),a.clientWidth+parseInt(a.style.left)>r&&(a.style.left=r-a.clientWidth+"px"),a.clientHeight+parseInt(a.style.top)>t&&(a.style.top=t-a.clientHeight+"px")}function removeBarrage(e){e.className="barrage out",setTimeout((()=>{barrageDom.removeChild(e)}),1e3)}xhr.withCredentials=!0,xhr.addEventListener("readystatechange",(function(){4===this.readyState&&(barrageList=linkFilter(JSON.parse(this.responseText).data),barrageDom.innerHTML="")})),xhr.open("POST",twikooUrl),xhr.setRequestHeader("Content-Type","application/json"),xhr.send(data),setInterval((()=>{barrageList.length&&(popBarrage(barrageList[barrageIndex]),barrageIndex+=1,barrageIndex%=barrageList.length),barrageTimer.length>(barrageList.length>10?10:barrageList.length)&&removeBarrage(barrageTimer.shift())}),1500);