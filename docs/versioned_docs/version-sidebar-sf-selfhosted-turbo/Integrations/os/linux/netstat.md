# Monitor NetStat

## Overview
Netstat Metric plugin is an agent-based plugin that collects below data for each process running on the machine. 
- Tcp Connections
- Udp Connections
- TcpEstablish Connections
- TcpListening Connections
- TcpOpening Connections
- TcpClosing Connections
- TcpWaiting Connections
- Traffic in MB
- Bytes Acked
- Bytes Received
- Tcp Udp futher info table

## Prerequisite - Install netstat command
- If this package is not present, use the following commands to install it.
  - To install net-tools package in CentOS/RHEL:
      > sudo yum install net-tools
  - To install net-tools package in Ubuntu OS:
      > sudo apt-get install net-tools 

## Agent Configuration

Refer to [sfAgent](https://www.odwebp.svc.ms/docs/Quick_Start/getting_started#sfagent) section for steps to install and automatically generate plugin configurations. User can also manually add the configuration shown below to `config.yaml` under `/opt/sfagent/` directory. Add the list of required foreign ports in the field “ports”. The list of ports must be comma separated values.

**NOTE:** If no ports are mentioned in the `config.yaml`, sfagent will filter ports based on default ports that are `80,8080,8000 and 443`.

```
key: <profile_key> 
tags: 
  Name: <name> 
  appName: <app_name> 
  projectName: <project_name> 
metrics: 
  plugins: 
    - name: netstat 
      enabled: true 
      interval: 60
      config:
        ports: <list_of_ports>  #80,8080,8000,443
  
```

## Viewing data and dashboards

- Data collected by plugin can be viewed in SnappyFlow’s browse data section under metrics 
    - `plugin=netstat`
    - `documentType=netstatDetails`.
- Dashboard of Netstat data can be rendered using `Template= Netstat`

## Test Matrix



Centos: 7.x

RHEL: 7.x

Ubuntu: 14.x, 16.x



## See Also
- [Linux monitoring](/docs/sidebar-sf-selfhosted-turbo/integrations/os/linux/linux_os)
- [LSOF](/docs/sidebar-sf-selfhosted-turbo/integrations/os/linux/lsof)
- [PSUtil](/docs/sidebar-sf-selfhosted-turbo/integrations/os/linux/psutil)
- [Custom plugins using StatsD](/docs/sidebar-sf-selfhosted-turbo/integrations/statsd/custom_monitoring)
- [Prometheus Integration](/docs/sidebar-sf-selfhosted-turbo/Integrations/kubernetes/prometheus_exporter) 