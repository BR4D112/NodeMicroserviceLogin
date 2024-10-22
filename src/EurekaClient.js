import { Eureka } from "eureka-js-client";

const client = new Eureka({
    instance: {
        app: 'login',
        hostName: 'localhost',
        ipAddr:'127.0.0.1',
        port: {
            '$':process.env.PORT,
            '@enabled':'true'
        },
        vipAddress: 'login',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        host: process.env.EUREKA_HOST,
        port: 8761,
        servicePath: '/eureka/apps/'
    }
});
//client.stop()
try {
    client.start(err => {
        console.log("server client added");       
    })
} catch (error) {
    console.log("eureka fail");
}
export function closeClient(){
    client.stop(err=>{
        console.log("closed");
    });
}
export function turnOnClient(){
    client.start(err=>{
        console.log("serverAdded");
        
    }
    )
}