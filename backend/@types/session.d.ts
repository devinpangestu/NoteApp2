import mongoose from "mongoose";

declare module "express-session"{
    interface SessionData{
        userId: mongoose.Types.ObjectId;
    }
}
// ke tsconfig "typeRoots": [ 
//       "node_modules/@types",
//       "@types"
//     ]
// "ts-node": {
//     "files": true,
//   }