import { Eureka } from "eureka-js-client";

const client = new Eureka({
    instance: {
        //instanceId:'http://localhost:3000/',
        app: 'login',
        hostName: 'localhost',
        ipAddr:'127.0.0.1',
        port: {
            '$':3000,
            '@enabled':'true'
        },
        vipAddress: 'login',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/'
    }
});
//client.stop()
try {
    client.start(err => {
        console.log("this is null",err);       
    })
} catch (error) {
    console.log("eureka fail");
}