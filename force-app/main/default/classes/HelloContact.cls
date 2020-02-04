public class HelloContact {

	public void createMyContact(){
		
		try{

			Contact con=new Contact(
			FirstName='Chandra P',
			LastName='Prasad R',
			Phone='9538583801'
		);
		
		insert con;
	
			
		}
		catch(DmlException e){
			System.debug('exception e'+e.getMessage());
		}
			
	}
	
	public void createMyContactWithDetails(String a,String b,String c){
		
		
		try{
			System.debug('Name : '+a);
			Contact con=new Contact(
			FirstName=a,
			LastName=b,
			Phone=c
		);
		
		insert con;
		System.debug('Created');
			
		}
		catch(DmlException e){
			System.debug('exception e'+e.getMessage());
		}


}
}