/*
*  兼容dom 和 ie 事件
*  attachEvent and addEventListener
*
*/

var EventUtil={
  addHandler: function(ele,type,handler){
    if(ele.addEventListener){
      ele.addEventListener(type,handler,false);
    }else if(ele.attachEvent){
      ele.attachEvent('on'+type, handler);
    }else{
      ele['on'+type]= handler;
    }
  },
  removeHandler: function(ele,type,handler){
    if(ele.removeEventListener){

      ele.removeEventListener(type,handler,false);
    }else if(ele.detachEvent){
      ele.detachEvent(type,handler);
    }else{
      ele['on'+type]= null;
    }
  },
  getEvent:function(event){
    return event ? event: window.event;
  },
  target: function(event){
    return event.target || event.srcElement;
  },
  preventDefault: function(event){
    if(event.preventDefault){
      return event.preventDefault();
    }else{
      event.returnValue= false;
    }     
  },
  stopPropagation: function(event){
    if(event.stopPropagation){
      return event.stopPropagation();
    }else{
      event.cancelBubble= true;
    }
  },
  getType: function(event){
    return event.type;
  },
  getRelatedTarget: function(event){
    if(event.relatedTarget){
      return event.relatedTarget;
    }else if(event.toElement){
      return event.toElement;
    }else if(event.fromElement){
      return event.fromElement
    }else{
      return null;
    }
  },
  getPhase: function(event){
    if(event.eventPhase == 1){
      console.log('捕获阶段');
    }else if(event.eventPhase == 2){
      console.log('目标阶段');
    }else if(event.eventPhase == 3){
      console.log('冒泡阶段');
    }
  }
}
