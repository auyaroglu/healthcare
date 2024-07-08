import * as sdk from "node-appwrite";

export const {
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;


const client = new sdk.Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("668bb517001bff2f1a7c")
    .setKey("e714c33fb7bc0fb650ba5539f9bc8dc91ce3904592c079c0625d087a9ed1b0b719726a1f188cbf285693ece888c7e41735f44abd29ddcd5239321a79fa517e484e61994c9c7a51e5c970b50f0acba183c0c1bad73d19dccc6108084887494a717aabebf1f13f618fe44632d2d75b17f1ed946ef06a1e082188774714727e1255");


export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);