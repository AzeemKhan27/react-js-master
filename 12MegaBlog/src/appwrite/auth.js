import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;
    sessionId = null;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)  
        
    }


    async refreshSession() {
        try {
           await this.account.refreshSession();
         // await this.account.createAnonymousSession(); // Create an anonymous session
          console.log('Session refreshed successfully');
        } catch (error) {
          console.log('Error refreshing session:', error);
          throw error; // Or handle the error as needed
        }
      }
    

    async createAccount({email, password, name}) {
   
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                const session = await this.login({email, password}); // Await the login method
                return session;
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const session = await this.account.createEmailSession(email, password);
            this.sessionId = session.$id;
            console.log("SESSION ID : ", this.sessionId)
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        if (!this.sessionId) {
          // this.client.setSessionID(this.sessionId);
          alert("No valid session ID found, please login")
          return; // or return a default value or null
        }
        
         // Set session ID in the headers
         const headers = {
          'X-Appwrite-Session': this.sessionId,
      };
      
        try {
          return await this.account.get(headers);
        } catch (error) {
          if (error.code === 401) {
            // alert('Session expired or invalid. Please log in again.');
            throw new Error(alert('Session expired or invalid. Please log in again.'));
          } else {
            alert(`An error occurred: ${error.message}`);
            throw error;
          }
        }
      }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;