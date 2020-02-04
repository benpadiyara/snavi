({
    init: function (cmp) {
        cmp.set('v.steps', [
            { label: '①宛先選択', value: 'step-1' },
            { label: '②ビデオ選択', value: 'step-2' },
            { label: '③メッセージ入力', value: 'step-3' },
            { label: '④プレビュー', value: 'step-4' },
            { label: '⑤送信', value: 'step-5' }
        ]);
        cmp.set('v.selectedStep',{ label: '①宛先選択', value: 'step-1' });
    },
    change:function(component,event,helper){
        
           var i=component.get("v.state");
          if(i<=0)
          {
              i=0;
              //cmp.set('v.selectedStep',{ label: '①宛先選択', value: 'step-1' });
          }
          else if(i>5)
          {
              i=5;
          }
   
      	  if( i >= 0 && i <= 5 )
          {
           	 if(event.getSource().get("v.label")=="Next")
       		 { 
 			   i++;
              component.set('v.selectedStep',component.get('v.steps')[i]);
             // i++;
              component.set('v.state',i);
              
             }
             else if(event.getSource().get("v.label")=="Previous")
       		 { 
 			  i--;
              component.set('v.state',i);
              component.set('v.selectedStep',component.get('v.steps')[i]);
              //i--;
             }
        	  
                
              
          }
         else
          {
              
              component.set('v.selectedStep',component.get('v.steps')[0]);
              component.set('v.state',1);
          }
        //alert(component.get('v.steps')[4]);
        
        
     
        
}
});