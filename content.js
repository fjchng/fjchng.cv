var summary = 'Technology consultant at a multinational professional services and business consulting corporation, specialising in cloud and analytics. Quick and open to adopt new technologies; analytical and logical approach to problem-solving; clear communicator and presenter; good time management and able to prioritise heavy workloads.';
var firstName = 'Jiacheng';
var lastName = 'Fu';
var country = 'Singapore';
var email = 'jiacheng.fupoh@gmail.com';
var fb = 'https://www.facebook.com/fjchng';
var linkedin = 'https://www.linkedin.com/in/fujiacheng/';
var github = 'https://github.com/fjchng';
var experience = {
	designation: 'Consultant',
	company: 'Capgemini',
	startDate: new Date(2017, 2),
	roles: [ 
	{
		title: 'Business Intelligence Analyst',
		responsibilities: [
		'Client domain: Multinational Beverage Corporation',
		'Develop Microsoft SQL Server Analysis Services (OLAP Cube) for regional deployment',
		'Execute and document unit test cases to validate cube development and reports',
		'Execute and document unit test cases to validate cube development and reports',
		'Analyse and troubleshoot user queries and defects during UAT and Go-Live'
		]
	}, {
		title: 'Business Intelligence Analyst',
		responsibilities: [
		'Client domain: Transnational Consumer Goods',
		'Documented functional and technical requirements by analysing existing systems, processes and technical documents',
		'Developed PowerBI reports by using custom measures and visualizations'
		]
	}, {
		title: 'Data Analyst',
		responsibilities: [
		'Client domain: Transnational Consumer Goods',
		'Analysed and planned research objectives and data sources from business requirements',
		'Researched and developed natural language libraries for domain of research',
		'Developed Python scripts to crawl and extract public data',
		'Integrated and analysed multi-dimensional data (search, social and business) to provide business insights and recommendations'
		]
	}, {
		title: 'SAP Organization Change Management Analyst',
		responsibilities: ['Client domain: Offshore Production Systems',
		'Planned and executed user training and communication activities',
		'Analysed and published team weekly status reports',
		'Led the end-to-end implementation of SAP Workforce Performance Builder to facilitate the creation and dissemination of on-demand user trainings'
		]
	}, {
		title: 'SAP Business Analyst (Procurement)',
		responsibilities: ['Client domain: Offshore Production Systems',
		'Analysed and documented functional and technical requirements through user interviews',
		'Designed and tested RICEFW objects',
		'Planned and developed test scripts for user acceptance testing'
		]
	}, {
		title: 'SAP Test Analyst',
		responsibilities: ['Client domain: Offshore Production Systems',
		'Developed and disseminated test reports to provide status updates for key project stakeholders',
		'Developed and managed test scenarios and scripts by using HP Application Lifecycle Management (ALM)'
		]
	}
	]
}

var education = {
	university: 'Singapore Management University',
	startDate: new Date(2013, 8),
	course: 'Bachelor of Science (Information Systems)',
	description: [
	'GPA 3.49 / 4.00 (Cum Laude)',
	'Architectural Analysis',
	'Business Consulting',
	'Business Intelligence',
	'Business Strategy',
	'Computational Thinking',
	'Computer as Analysis Tool',
	'Data Structure',
	'Enterprise Business Solutions (SAP)',
	'Enterprise Integration',
	'Enterprise Web Solutions',
	'Object Oriented Development',
	'Software Engineering',
	'Spanish Language'
	]
}

var interest = ['Swim', 'Cycle', 'Run', 'Videography', 'Photography'];

var awards = ['UBS Technology Case Challenge 2015 - 2nd Runner Up'];

module.exports.content = {summary,firstName,lastName,country,email,fb,linkedin,github,experience,education,interest,awards};
