# Monitor Redis DB on Instances

## Overview

Redis on instances is monitored using [sfAgent](/docs/sidebar-sf-selfhosted-turbo/Quick_Start/getting_started#sfagent) configured with Redisdb plugin  

### Metrics plugin

Collects metric data organized in following `documentType` under metrics index:  

- keyspaceStat  
- redisDetails 
- redisStat
- redisPersistence

### Logger plugin

collects general logs and slow logs. General logs are sent to log index whereas slow queries are sent to metrics index under `documentType:redisSlowLogs`  

## Pre-requisites  

### Enable Slow Logs   

In `redis.cnf` file, uncomment and configure the variables shown below: 

```shell
slowlog-log-slower-than= 1  
slowlog-max-len=100 
```

Or, login to redis with root user and execute below commands  

```
config set slowlog-log-slower-than= 1;  
config set slowlog-max-len=100;  
```

## Configuration 

Refer to [sfAgent](/docs/Quick_Start/getting_started#sfagent) section for steps to install and automatically generate plugin configurations. User can also manually add the configuration shown below to `config.yaml` under `/opt/sfagent/directory`  

```yaml
metrics:  
  plugins:  
    - name: redisdb
      enabled: true
      interval: 60  
      config:  
        documentsTypes:  
          - keyspaceStat  
          - redisDetails  
          - redisPersistence
          - redisStat
          - slowLogs          
        password: pass  
        port: 6379  
        user: admin  
logging:  
  plugins:  
    - name: redis-general  
      enabled: true  
      config:  
         log_path: /var/log/redis/redis-server.log  
```

## Viewing data and dashboards   

- Data generated by plugin can be viewed in `browse data` page inside the respective application under `plugin=redisdb`  and `documentType=serverDetails`  


- Dashboard for this data can be instantiated by Importing dashboard template `RedisDB` to the application dashboard  
