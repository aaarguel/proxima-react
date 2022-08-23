class ProximaAPI{
    
    constructor(){        
        this.url = process.env.REACT_APP_API_URL
        this.ip_url = "https://api.ipify.org?format=json";

    }

    getIp(){
        return {
            url: this.ip_url ,
            options: {
                method: 'GET',
                mode: 'cors'
            }
        }
    }
    async postDataUser(data){
        try {
            const response = await fetch(this.url, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(data)
            });
      
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }
      
                  
            
            
        } catch (err) {
            console.log(err)
          }
    }
}

export default ProximaAPI;