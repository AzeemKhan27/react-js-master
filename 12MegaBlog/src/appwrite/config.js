import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";
import { nanoid } from 'nanoid';

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }


    // async createPost({ title, content, featuredImage, status, userId = nanoid() }) {
    //     try {
    //       const documentId = nanoid(); // Generate a unique document ID using nanoid
    //       return await this.databases.createDocument(
    //         conf.appwriteDatabaseId,
    //         conf.appwriteCollectionId,
    //         documentId,
    //         {
    //           title,
    //           content,
    //           featuredImage,
    //           status,
    //           userId,
    //         },
    //       );
    //     } catch (error) {
    //       console.log("Appwrite service :: createPost :: error", error.message);
    //       throw error;
    //     }
    //   }

    async createPost({ title, content, featuredImage, status, userId = nanoid() }) {
        try {
          let documentId = nanoid(); // Generate an initial unique document ID using nanoid
      
          // Check if a document with the generated ID already exists
          let existingDocument = await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            documentId
          );
      
          // If a document with the generated ID exists, generate a new unique ID
          while (existingDocument) {
            documentId = nanoid();
            existingDocument = await this.databases.getDocument(
              conf.appwriteDatabaseId,
              conf.appwriteCollectionId,
              documentId
            );
          }
      
          // Create the new document with the unique ID
          return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            documentId,
            {
              title,
              content,
              featuredImage,
              status,
              userId,
            }
          );
        } catch (error) {
          console.log("Appwrite service :: createPost :: error", error.message);
          throw error;
        }
      }
    

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error.message);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
            return true;
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error.message);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error.message);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
          return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
          );
        }  catch (error) {
            console.log("Appwrite service :: getPosts :: error", error.message);
            return false;
        }
      }

    // file upload service

    async uploadFile(file){
   
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),  //Date.now(), 
                file
            );
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error.message);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }
}


const service = new Service()
export default service;