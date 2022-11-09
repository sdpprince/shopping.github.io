function animate(obj,target,step,callback){
			//缓动效果公式,Math.ceil()---取整，避免误差
			step=(target-obj.offsetLeft)/10;//步长=(目标位置-盒子当前的位置)/10
			step>0?Math.ceil(step):Math.floor(step)//考虑到步长值是否为负数，即往回取值
			obj.timer=setInterval(function(){
				if(obj.offsetLeft>=target){
					clearInterval(obj.timer);
					if(callback){
						callback();
					}
				}
				obj.style.left=obj.offsetLeft+step+'px';			
			},30);
		}