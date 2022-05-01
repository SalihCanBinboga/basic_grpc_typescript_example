import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GreeterClient as _greeter_GreeterClient, GreeterDefinition as _greeter_GreeterDefinition } from './greeter/Greeter';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  greeter: {
    Greeter: SubtypeConstructor<typeof grpc.Client, _greeter_GreeterClient> & { service: _greeter_GreeterDefinition }
    HelloReply: MessageTypeDefinition
    HelloRequest: MessageTypeDefinition
  }
}

