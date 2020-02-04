({
    onCallChildMethod : function(component, event, helper) {
        var attribute1 = component.get('v.parentAttribute1');
        var attribute2 = component.get('v.parentAttribute2');
        var childComponent = component.find('child');
        childComponent.myMethod(attribute1, attribute2);
    },
    
    handleMyc1Event : function(component, event, helper) {
        var value = event.getParam("param");
        //alert("Received application event with param to parent = "+ value);
        component.set('v.test2',value);
    }

})