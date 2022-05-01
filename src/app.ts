import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {GrpcObject, sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import {HelloRequest__Output} from './build/generated/HelloRequest';
import {HelloReply} from './build/generated/HelloReply';
import {ProtoGrpcType as GreeterGrpcType} from './build/generated/greeter';
import {GreeterHandlers} from './build/generated/greeter/Greeter';

const greeterServiceHandler: GreeterHandlers = {
    SayHello: function (call: ServerUnaryCall<HelloRequest__Output, HelloReply>, callback: sendUnaryData<HelloReply>): void {
        try {
            callback(null,
                <HelloReply>{
                    message: 'Hello ' + call.request.name
                }
            );

        } catch (e) {
            callback(e, null);
        }
    }
};

(
    async function main() {
        const packageDefinition = await protoLoader.load(
            [
                './src/proto/greeter.proto'
            ]
        );

        const proto: GrpcObject = grpc.loadPackageDefinition(packageDefinition);

        const server = new grpc.Server();

        const hostName: string = '0.0.0.0';
        const port: number = 1337;

        server.addService((proto as unknown as GreeterGrpcType).greeter.Greeter.service, greeterServiceHandler);

        server.bindAsync(`${hostName}:${port}`, grpc.ServerCredentials.createInsecure(),
            async () => {
                await server.start();
                console.log(`Server running-> ${hostName}:${port}`);
            }
        );
    }
)();