public class mainController{
    @AuraEnabled
    public static List<contact> getContacts(){
        return [select id,firstname,lastname,Phone from Contact limit 5];
    }
}