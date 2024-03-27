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
          console.log('Session refreshed successfully');
        } catch (error) {
          console.log('Error refreshing session:', error);
          throw error; // Or handle the error as needed
        }
      }
    

    async createAccount({email, password, name}) {
      console.log("CREATE ACCOUNT : ", ID.unique())
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
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
            return session;
            //return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        if (this.sessionId) {
          this.client.setSessionID(this.sessionId);
        }
      
        try {
          return await this.account.get();
        } catch (error) {
          if (error.code === 401) {
            throw new Error('Session expired or invalid. Please log in again.');
          } else {
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

export default authService