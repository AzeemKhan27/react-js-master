import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

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


    async createPost({title, slug, content, featuredImage, status, userId = null}){
        console.log("USER ID : ",userId,"STATUS : ", status,"TITLE : ", title,)
        try {
            const uniqueId = ID.unique(); // Generate a unique ID
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                uniqueId, //slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId, //userId : userId || null , // Use null if userId is not provided
                    slug, // Store the 'slug' as a field in the document
                },
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error.message);
        }
    }
                // [
                //     Permission.read(Role.user(userId)),  //6602d4d32cfd9374e694
                //     Permission.update(Role.user(userId)),
                //     Permission.delete(Role.user(userId))
                // ]

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
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
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
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
          return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
          );
        } catch (error) {
          if (error.code === 401) {
            // User is not authorized, attempt to refresh the session
            try {
              await authService.refreshSession();
              // If session refresh is successful, retry the operation
              return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
              );
            } catch (refreshError) {
              console.log('Error refreshing session:', refreshError);
              // Handle the case where session refresh fails (e.g., prompt for login)
            }
          } else {
            console.log("Appwrite serive :: getPosts :: error", error);
          }
          return false;
        }
      }

    // file upload service

    async uploadFile(file){
        console.log("Uploading file : ",conf.appwriteBucketId,
        " : UNIQUE ID : " ,ID.unique() )
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),  //Date.now(), 
                file
            )
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
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default service