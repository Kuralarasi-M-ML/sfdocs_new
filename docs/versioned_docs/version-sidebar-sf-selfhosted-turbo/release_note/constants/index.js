import React, { useState } from "react";
import $ from 'jquery';

const AGENTS = [
	
	{
		'src': '/img/postgres-logo.svg',
		'label': 'Postgres',
		'overText': 'Postgres Infrastructure platform is built for enterprises',
		'category': ['Database'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/database/postgres'
	},
	{
		'src': '/img/integration/integration_list/aurora-db.svg',
		'label': 'Aurora',
		'overText': 'Monitor Aurora DB',
		'category': ['Database'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/database/aurora'
	},
	{
		'src': '/img/integration/integration_list/documentdb.svg',
		'label': 'DocumentDB',
		'overText': 'Monitor DocumentDB',
		'category': ['Database'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/database/docdb'
	},
	{
		'src': '/img/azure_DB.svg',
		'label': 'AzureDB',
		'overText': 'Azuredb Metric plugin collects metrics related to relational database services like Azure SQL, Azure database for MySQL and Azure database for PostgreSQL using insights data from Azure Monitor',
		'category': ['Database'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/database/azureDB'
	},
	{
		'src': '/img/redis.svg',
		'label': 'Redis',
		'overText': 'Redis Infrastructure platform is built for enterprises',
		'category': ['Database'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/database/redis'
	},
	{
		'src': '/img/mysql.svg',
		'label': 'MySQL',
		'overText': 'MYSQL Infrastructure platform is built for enterprises',
		'category': ['Database'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/database/mysql'
	}, 
	{
		'src': '/img/mssql.svg',
		'label': 'MSSQL',
		'overText': 'Monitoring MS SQL databases',
		'category': ['Database'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/database/mssql'
	}, 
	{
		'src': '/img/clickhouse.svg',
		'label': 'Clickhouse',
		'overText': 'Clickhouse running in Kubernetes can be monitored in SnappyFlow using Prometheus exporter',
		'category': ['Database'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/database/clickhouse'
	}, 
	{
		'src': '/img/aws_rds.svg',
		'label': 'AWS RDS',
		'overText': 'Amazon Relational Database Service (Amazon RDS) is a managed SQL database service provided by Amazon Web Services (AWS)',
		'category': ['Database'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/database/aws_rds'
	},
	{
		'src': '/img/oracle_ash.svg',
		'label': 'Oracle ASH',
		'overText': 'OracleASH plugin fetch and parse the oracle ASH report from AWS-RDS.',
		'category': ['Database'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/database/oracle_ash'

	},
	{
		'src': '/img/mongodb.svg',
		'label': 'MongoDB',
		'overText': 'MongoDB Infrastructure platform is built for enterprises',
		'category': ['Database'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/database/mongodB'

	},
	{
		'src': '/img/integration/integration_list/python.svg',
		'label': 'Python',
		'overText': 'Tracing for Python application',
		'category': ['Tracing'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/tracing/python'
	},
	{
		'src': '/img/integration/integration_list/c-sharp-net.svg',
		'label': 'C#',
		'overText': 'Tracing for C# application',
		'category': ['Tracing'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/tracing/csharp'
	},
	{
		'src': '/img/java.svg',
		'label': 'Java',
		'overText': 'Java Infrastructure platform is built for enterprises',
		'category': ['Tracing'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/tracing/java'
	}, 
	{
		'src': '/img/integration/integration_list/node-js.svg',
		'label': 'Nodejs',
		'overText': 'Monitor Nodejs',
		'category': ['Tracing'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/tracing/nodejs'
	},
	{
		'src': '/img/golang.svg',
		'label': 'Go',
		'overText': 'Oracle Cloud Infrastructure platform is built for enterprises',
		'category': ['Tracing'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/tracing/go'
	},
	{
		'src': '/img/integration/integration_list/php.svg',
		'label': 'PHP',
		'overText': 'Tracing for PHP application',
		'category': ['Tracing'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/tracing/php'
	},
	{
		'src': '/img/integration/integration_list/ruby.svg',
		'label': 'Ruby',
		'overText': 'Tracing for ruby application',
		'category': ['Tracing'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/tracing/ruby'
	},
	{
		'src': '/img/log_management/logs.svg',
		'label': 'Log Management',
		'overText': 'SnappyFlow log management',
		'category': ['Log Management'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/log/log_management'
	},
	{
		'src': '/img/integration/integration_list/angular.svg',
		'label': 'Angular',
		'overText': 'for Real user monitoring',
		'category': ['RUM'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/real_user_monitoring/angular'
	},
    {
		'src': '/img/integration/integration_list/react.svg',
		'label': 'React',
		'overText': 'for Real user monitoring',
		'category': ['RUM'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/real_user_monitoring/react'
	},
	{
		'src': '/img/integration/integration_list/nextjs.svg',
		'label': 'Nextjs',
		'overText': 'for Real user monitoring',
		'category': ['RUM'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/real_user_monitoring/nextjs'
	},
	{
		'src':'/img/integration/integration_list/email.svg',
		'label':'Email',
		'overText': 'Email Notification Channel',
		'category': ['Alerts & Notifications'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/alerts_&_notification/email'
	},
	{
		'src':'/img/integration/integration_list/opsgenie.svg',
		'label':'Opsgenie',
		'overText': 'Opsgenie Notification Channel',
		'category': ['Alerts & Notifications'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/alerts_&_notification/opsgenie'
	},
	{
		'src':'/img/integration/integration_list/teams.svg',
		'label':'Teams',
		'overText': 'Teams Notification Channel',
		'category': ['Alerts & Notifications'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/alerts_&_notification/teams'
	},
	{
		'src':'/img/integration/integration_list/zenduty.svg',
		'label':'Zenduty',
		'overText': 'Teams Notification Channel',
		'category': ['Alerts & Notifications'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/alerts_&_notification/zenduty'
	},
	{
		'src':'/img/integration/integration_list/webhook.svg',
		'label':'Webhook',
		'overText': 'Teams Notification Channel',
		'category': ['Alerts & Notifications'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/alerts_&_notification/webhook'
	},
	{
		'src': '/img/stack.svg',
		'label': 'Slack',
		'overText': 'Slack Infrastructure platform is built for enterprises',
		'category': ['Alerts & Notifications'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/alerts_&_notification/slack'
	}, 
	{
		'src': '/img/pagerduty.svg',
		'label': 'Pagerduty',
		'overText': 'Pagerduty Infrastructure platform is built for enterprises',
		'category': ['Alerts & Notifications'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/alerts_&_notification/pagerduty'
	},
	{
		'src': '/img/aws_lambda.svg',
		'label': 'AWS Lambda',
		'category': ['Cloud Services'],
		//'overText': '',
		
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/cloud_services/aws_lambda'
	},
	{
		'src': '/img/azure_blob.svg',
		'label': 'Azure Blob',
		'overText': 'Azure blob storage is to store large amount of unstructured data on data storage platform',
		'category': ['Cloud Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/cloud_services/azure_blob'
	},
	{
		'src':'/img/aws-elastic-cache.svg',
		'label':'ElastiCache', 
		'overText': 'ElastiCache is the distributed in memory cache environments in the AWS cloud.',
		'category': ['Cloud Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/cloud_services/elasticache'
	}, 
	{
		'src': '/img/integration/integration_list/cloudwatch.svg',
		'label': 'CloudWatch',
		'overText': 'to collect cloud watch logs',
		'category': ['Cloud Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/cloud_services/cloudwatch'
	},
	{
		'src':'/img/public-cloud-elbs.svg',
		'label':'Elastic Load Balancer',
		'overText': 'Public cloud elbs Infrastructure platform is built for enterprises',
		'category': ['Cloud Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/cloud_services/elastic_load_balancer'
	}, 
	{
		'src': '/img/mysql-logo.svg',
		'label': 'Linux',
		'overText': 'MySQL Infrastructure platform is built for enterprises',
		'category': ['Operating System'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/operating_system/linux'
	},
	{
		'src': '/img/windows-vms.svg',
		'label': 'Windows',
		'overText': 'Windows VMs Infrastructure platform is built for enterprises',
		'category': ['Operating System'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/operating_system/windows'
	}, 
	{
		'src': '/img/integration/integration_list/docker.svg',
		'label': 'Docker',
		'overText': 'Platform',
		'category': ['Platform'],
		'link':'/docs/sidebar-sf-selfhosted-turbo/release_note/platform/docker'
	},
	{
		'src': '/img/kubernetes-clusters.svg',
		'label': 'Kubernetes',
		'overText': 'Kubernetes clusters Infrastructure platform is built for enterprises',
		'category': ['Platform'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/platform/kubernetes'
	},
	{
		'src': '/img/integration/integration_list/aws.svg',
		'label': 'aws',
		'overText': 'Monitor AWS infra',
		'category': ['Infrastructure'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/infrastucture/aws'
	},
	{
		'src': '/img/integration/integration_list/azure.svg',
		'label': 'azure',
		'overText': 'Mazureonitor azure infra',
		'category': ['Infrastructure'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/infrastucture/azure'
	},
	{
		'src': '/img/integration/integration_list/v-center.svg',
		'label': 'V-center',
		'overText': 'Monitor V center infra',
		'category': ['Infrastructure'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/infrastucture/vcenter'
	},
	{
		'src': '/img/golang.svg',
		'label': 'Go',
		'overText': 'Oracle Cloud Infrastructure platform is built for enterprises',
		'category': ['Profiling'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/profiler/go'
	},
	{
		'src': '/img/java.svg',
		'label': 'Java Profiler',
		'overText': 'Java Profiler',
		'category': ['Profiling'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/profiler/java'
	},
	{
		'src': '/img/apache-activemq-icon.svg',
		'label': 'ActiveMQ',
		'overText': 'Cassandra Infrastructure platform is built for enterprises',
		'category': ['Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/services/activemq'
	},
	{
		'src': '/img/apache.svg',
		'label': 'Apache',
		'overText': 'Postgres Infrastructure platform is built for enterprises',
		'category': ['Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/services/apache'
	}, 
	{
		'src': '/img/haproxy.svg',
		'label': 'HAProxy',
		'overText': 'Microsoft Infrastructure platform is built for enterprises',
		'category': ['Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/services/haproxy'
	},
	{
		'src': '/img/kafka-icon.svg',
		'label': 'Kafka',
		'overText': 'Kafka Infrastructure platform is built for enterprises',
		'category': ['App Tier'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/integrations/kafka/overview'
	},
	{
		'src': '/img/blaze_meter.svg',
		'label': 'Blaze Meter',
		'overText': 'Plugin collects Test Reports from the BlazeMeter Account',
		'category': ['App Tier'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/integrations/plugin/blazemeter'
	}, 
	{
		'src': '/img/apache-zookeeper-icon.svg',
		'label': 'Zookeper',
		'overText': 'Ldap Infrastructure platform is built for enterprises',
		'category': ['Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/services/zookeeper'
	},
	{
		'src': '/img/nginx.svg',
		'label': 'Nginx',
		'overText': 'Nginx Infrastructure platform is built for enterprises',
		'category': ['Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/services/nginx'
	}, 
	{
		'src':'/img/tomcat.svg',
		'label':'Tomcat',
		'overText': 'Opsgenie Infrastructure platform is built for enterprises',
		'category': ['Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/services/tomcat'
	},
	{
		'src': '/img/rabbitmq.svg',
		'label': 'RabbitMQ',
		'overText': 'Monitoring RabbitMQ Message Broker running on Instances',
		'category': ['Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/services/rabbitmq'
	},
	{
		'src': '/img/tripwire.png',
		'label': 'TripWire',
		'overText': 'Tripwire Metric Plugin Parses reports Generates By Tripwire',
		'category': ['Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/services/trip_wire'
	},  
	{
		'src': '/img/custom-metrics-using-statsd.svg',
		'label': 'StatsD',
		'overText': 'Custom Metrics Infrastructure platform is built for enterprises',
		'category': ['Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/services/statsd'
	},  
	{
		'src':'/img/iis-server.svg',
		'label':'IIS Server',
		'overText': 'IIS Server Infrastructure platform is built for enterprises',
		'category': [''],
		'link': '/docs/sidebar-sf-selfhosted-turbo/IntCloud Servicesegrations/iis/iis_windows'
	}, 
	{
		'src': '/img/golang.svg',
		'label': 'Go',
		'overText': 'Tracing for Go application',
		'category': ['Services'],
		'link': 'docs/Tracing/go'
	},
	{
		'src': '/img/integration/integration_list/php.svg',
		'label': 'PHP',
		'overText': 'Tracing for PHP application',
		'category': ['Services'],
		//'link': '/docs/sidebar-sf-selfhosted-turbo/Tracing/php/overview'
	},
	{
		'src': '/img/integration/integration_list/node-js.svg',
		'label': 'Nodejs',
		'overText': 'Monitor Nodejs',
		'category': ['Services'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/Integrations/nodejs_prometheus'
	},
	{
		'src': '/img/integration/integration_list/hashicorp.svg',
		'label': 'HCP Consul',
		'overText': 'Monitor DocumentDB',
		'category': [''],
		'link': '/docs/sidebar-sf-selfhosted-turbo/Integrations/hcp_consul'
	},
	{
		'src': '/img/integration/integration_list/dashboard.svg',
		'label': 'Dashboard',
		'overText': 'Dashboard',
		'category': ['Dashboard'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/dashboard'
	},
	{
		'src': '/img/integration/integration_list/siem.svg',
		'label': 'SIEM',
		'overText': 'SnappyFlow siem feature',
		'category': ['SIEM'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/siem'
	},
	{
		'src': '/img/integration/integration_list/synthetic.svg',
		'label': 'SM',
		'overText': 'SnappyFlow Synthetic Monitoring feature',
		'category': ['Synthetic Monitoring'],
		'link': '/docs/sidebar-sf-selfhosted-turbo/release_note/synthetic_monitoring'
	},
	
	
	
	
];

const buttonLists = [
	{
		'label': 'All'
	},
	{
		'label': 'Operating System'
	},
	{
	
		'label': 'Infrastructure'
	},
	{
		'label': 'Platform'
	},
	{
		'label': 'Services'
	},
	{
		'label': 'Cloud Services'
	},
	{
		'label': 'Database'
	},
	{
		'label': 'Log Management'
	},
	{
		'label': 'Profiling'
	},
	{
		'label': 'Alerts & Notifications'
	},
	{
		'label': 'Tracing'
	},
	{
		'label': 'RUM'
	},
	{
		'label': 'Dashboard'
	},
	{
		'label': 'SIEM'
	},
	{
		'label': 'Synthetic Monitoring'
	},
	
	
	
	
	
	
	
	
];

const IntegrationsList = () => {
	const [searchKey, setSearchKey] = useState('');
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [categoryAgents, setCategoryAgents] = useState([]);
	const [filteredAgents, setFilteredAgents] = useState([]);

	const handleSearchKeyChange = (ev) => {
		const keyword = ev.target.value;
		if (keyword.length !== 0) {
			const searchList = categoryAgents.length === 0 ? AGENTS : categoryAgents;
			const searchAgents = searchList.filter((agent) => agent.label.toLowerCase().includes(keyword.toLowerCase()))
		 	setFilteredAgents(searchAgents);
		} else {
			setFilteredAgents(categoryAgents);
		}
		setSearchKey(keyword);
	}

	const handleSelectCategory = (evt, categorySelected) => { 
		setSelectedCategories((prevList) => {

			if (categorySelected !== 'All') {
				$('.All').removeClass('btnSelected')
				const categoryPresent = prevList.some((category) => category === categorySelected);
				let newList = [];
				if (categoryPresent) {
					evt.target.classList.remove('btnSelected')
					newList = prevList.filter((category) => category !== categorySelected)
				} else {
					if (prevList.includes('All')) {
						prevList = []
					}
					evt.target.classList.add('btnSelected')
					newList = [...prevList, categorySelected];
				}
				const agentsList = newList.length === 0 ? AGENTS : AGENTS.filter((agent) => agent.category.some((categoryLabel) => newList.includes(categoryLabel)))
				setCategoryAgents(agentsList)
				if (searchKey.length !== 0) {
					const searchedAgents = agentsList.filter((agent) => agent.label.toLowerCase().includes(searchKey.toLowerCase()))
					
					setFilteredAgents(searchedAgents)
				} else { 
					setFilteredAgents(agentsList)
				}
				return newList;
			} else {
				$('.btnSelected').removeClass('btnSelected')
				evt.target.classList.add('btnSelected')
				let newList = [];
				if (prevList.includes(categorySelected)) {
					newList = [];
				} else {
					newList = [categorySelected];
				}
				setCategoryAgents(AGENTS);
				if (searchKey.length !== 0) {
					const searchedAgents = AGENTS.filter((agent) => agent.label.toLowerCase().includes(searchKey.toLowerCase()))
					setFilteredAgents(searchedAgents)
				} else {
					setFilteredAgents(AGENTS)
				}
				return newList;
			}
		})
	}

	const displayAgentsList = () => {
		
		const finalList = (searchKey.length === 0 && (selectedCategories.length === 0 || selectedCategories.includes('All'))) ? AGENTS : filteredAgents;
 
		return finalList.length !== 0 ? finalList.map((items) => (
			
			<a key={Math.random()} className="lnkIntegration" href={items.link || '#'}>
				<li className="box_size">
					<label><img src={items.src} className="integrationImg" /></label>
					<div>{items.label}</div> 
				</li>
			</a>
		)) : (
			<h4 className="noIntegrations">No integrations found for selected filters</h4>
		)
	};

	return (
		<div>
			In order to stay up-to-date with the latest features, improvements, and bug fixes, refer to SnappyFlow release notes.
			<p className="searchContrainer ">
				<img src="/img/search.png" alt="Search" />
				<input type="text" className="form-control" value={searchKey} onChange={handleSearchKeyChange} name="" placeholder="Search" />
			</p>
			<dl className="buttonList marTop20">
				{buttonLists.map((val) => (
					<dd key={val.label}>
						<input type="button" value={val.label} onClick={(evt) => handleSelectCategory(evt, val.label)} className={`btn-primarys ${val.label} && ${val.label =='All'?'btnSelected':''}`} name="" />
					</dd>
				))}
			</dl>
			<ul className="integration">
				{displayAgentsList()}
			</ul>
		</div>
	);
};

export default IntegrationsList;
