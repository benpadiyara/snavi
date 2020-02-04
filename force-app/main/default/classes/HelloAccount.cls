public class HelloAccount {
    public void addAccount(String name)
    {
        Account a1=new Account();
        a1.Name=name;
        try{
            System.debug('Before');
            insert a1;
            System.debug('After');
        }
        catch(DmlException e){
            System.debug('Error' +e.getMessage());
        }
        
    
    }

}