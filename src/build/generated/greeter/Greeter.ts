// Original file: src/proto/greeter.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloReply as _greeter_HelloReply, HelloReply__Output as _greeter_HelloReply__Output } from '../greeter/HelloReply';
import type { HelloRequest as _greeter_HelloRequest, HelloRequest__Output as _greeter_HelloRequest__Output } from '../greeter/HelloRequest';

export interface GreeterClient extends grpc.Client {
  /**
   * Sends a greeting
   */
  SayHello(argument: _greeter_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_greeter_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _greeter_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_greeter_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _greeter_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_greeter_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _greeter_HelloRequest, callback: grpc.requestCallback<_greeter_HelloReply__Output>): grpc.ClientUnaryCall;
  /**
   * Sends a greeting
   */
  sayHello(argument: _greeter_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_greeter_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _greeter_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_greeter_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _greeter_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_greeter_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _greeter_HelloRequest, callback: grpc.requestCallback<_greeter_HelloReply__Output>): grpc.ClientUnaryCall;
  
}

export interface GreeterHandlers extends grpc.UntypedServiceImplementation {
  /**
   * Sends a greeting
   */
  SayHello: grpc.handleUnaryCall<_greeter_HelloRequest__Output, _greeter_HelloReply>;
  
}

export interface GreeterDefinition extends grpc.ServiceDefinition {
  SayHello: MethodDefinition<_greeter_HelloRequest, _greeter_HelloReply, _greeter_HelloRequest__Output, _greeter_HelloReply__Output>
}
