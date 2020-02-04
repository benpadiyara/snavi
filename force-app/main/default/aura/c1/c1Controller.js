({
    executeMyMethod : function (component, event, helper) {
        var params = event.getParam('arguments');
        alert('Param 1: '+ params.param1);
        alert('Param 2: '+ params.param2);
    },
    
    onClicking : function (component, event , helper){
		var myEvent = $A.get("e.c:c1Event");
    	myEvent.setParams({"param": component.get('v.test')});
        myEvent.fire();
	}
})