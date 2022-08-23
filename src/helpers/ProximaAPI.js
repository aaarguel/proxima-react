class ProximaAPI{
    
    constructor(){        
        this.url = "https://webhook.site/83db32f0-c31e-4a86-a7c0-a97d4909701c"
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
    postDataUser(data){
        return {
            url: this.url ,
            options: {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(data)
            }
        }
    }

}

export default ProximaAPI;