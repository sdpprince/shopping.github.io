// window.addEventListener('load',function(){
		let bigBox = document.querySelector('.focus')
		let ul = document.querySelector('.focus_ul')
		let ol = document.querySelector('.circle')
		let lis = ul.querySelectorAll('li')
		let pre = document.querySelector('#span-left')
		let next = document.querySelector('#span-right')
		var index = 0
		var timeClock = null;
		var getStyles = parseInt(getStyle(bigBox,'width'))
			var num = 0//图片位置个数
			for(let i=0;i<lis.length;i++){
				let li = document.createElement('li')
				li.innerText = i + 1
				ol.appendChild(li)
			}
			
			let olLis = ol.children
			olLis[0].className = 'current';
			
			for(let i=0;i<lis.length;i++){
				olLis[i].addEventListener('click',function(){
					var index2 = parseInt(olLis[i].innerText) - 1
					index = index2
					changeIndex(index)
					setAnimation(ul,-getStyles*index)
				})
			}
			
			pre.addEventListener('click',function(){
				// index--
				if(index==0){
					index = lis.length - 1;
					ul.style.left = -getStyles*index + 'px'
				}else{
					index--;
				}
				changeIndex(index)
				setAnimation(ul,-getStyles*index)
			})
			next.addEventListener('click',function(){
				
				if(index<lis.length - 1){
					index++
				}else{
					index = 0;
					ul.style.left ='45px'
				}
				changeIndex(index)
				setAnimation(ul,-getStyles*index)
			})
		
		
			function changeIndex(index){
				for(let k=0;k<olLis.length;k++){
					olLis[k].className=''
				}
					olLis[index].className='current'
			}
		
			
			bigBox.addEventListener('mouseenter',function(){
					clearInterval(timeClock)
					pre.style.display = 'block'
					next.style.display = 'block'
			})
			bigBox.addEventListener('mouseleave',function(){
					timeClock = setInterval(clock,2000)
					pre.style.display = 'none'
					next.style.display = 'none'
			})
			
			
		
			
			
			function setAnimation(obj,end){
				// console.log(index);
				clearInterval(obj.timer)
				  obj.timer = setInterval(function(){
					step = (end - obj.offsetLeft)/10
					step = step>0?Math.ceil(step):Math.floor(step)
					if(obj.offsetLeft === end){
						clearInterval(obj.timer)
						return;
					}
					obj.style.left = obj.offsetLeft+(-5) + step  +'px'
				},60)
			}
			
			// 定时器
			function clock(){
				if(index<lis.length - 1){
					index++
				}else{
					index = 0;
					ul.style.left ='45px'
				}
				changeIndex(index)
				setAnimation(ul,-getStyles*index)
			}
	// })
	
	
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr]
		}else{
			return getComputedStyle(obj,null)[attr]
		}
	}
