import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"

const app = express()

const server = createServer(app)

const io = new Server(server)

server.listen(3333, ()=> console.log("Server is running on port 3333"))