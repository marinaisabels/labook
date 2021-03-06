import express from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import { userRouter } from "./router/UserRouter"
import { friendshipRouter } from "./router/FriendshipRouter";
import { postRouter } from "./router/PostRouter";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/friendship/", friendshipRouter)
app.use("/post", postRouter)
app.use("/", userRouter)

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
