({
  myAction: function(component,event,helper){
    component.set("v.Columns",
                  [{label:"First Name",fieldName:"FirstName", type:"text"},
                   {label:"Last Name",fieldName:"LastName",type:"text"},
                    {label:"Phone", fieldName:"Phone", type:"phone"}
                              ]);
    var action=component.get("c.getContacts");
    action.setCallback(this,function(data){
       // alert(data.getReturnValue()[0].FirstName);
    component.set("v.Contacts",data.getReturnValue());
  });
    $A.enqueueAction(action);
      
  }
    ,
  handleMyc1Event : function(component, event, helper) {
        var value = event.getParam("param");
        alert("Received application event with param = "+ value);
    },
    
    closeModal:function(component,event,helper){    
        var cmpTarget = component.find('Modalbox');
        var cmpBack = component.find('Modalbackdrop');
        $A.util.removeClass(cmpBack,'slds-backdrop--open');
        $A.util.removeClass(cmpTarget, 'slds-fade-in-open'); 
    },
    openmodal: function(component,event,helper) {
        var cmpTarget = component.find('Modalbox');
        var cmpBack = component.find('Modalbackdrop');
        $A.util.addClass(cmpTarget, 'slds-fade-in-open');
        $A.util.addClass(cmpBack, 'slds-backdrop--open'); 
    }
})