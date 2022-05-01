proto-loader-gen-types \
        --grpcLib=@grpc/grpc-js \
        --includeComments=true \
        --outDir=./src/build/generated/ \
        ./src/proto/*.proto