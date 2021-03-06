// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/config/web?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/config/web\",\"name\":\"webappclitests7065\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"numberOfWorkers\":1,\"defaultDocuments\":[\"Default.htm\",\"Default.html\",\"Default.asp\",\"index.htm\",\"index.html\",\"iisstart.htm\",\"default.aspx\",\"index.php\",\"hostingstart.html\"],\"netFrameworkVersion\":\"v4.0\",\"phpVersion\":\"5.6\",\"pythonVersion\":\"\",\"nodeVersion\":\"\",\"requestTracingEnabled\":false,\"remoteDebuggingEnabled\":false,\"remoteDebuggingVersion\":null,\"httpLoggingEnabled\":false,\"logsDirectorySizeLimit\":35,\"detailedErrorLoggingEnabled\":false,\"publishingUsername\":\"$webappclitests7065\",\"publishingPassword\":null,\"appSettings\":null,\"metadata\":null,\"connectionStrings\":null,\"machineKey\":null,\"handlerMappings\":null,\"documentRoot\":null,\"scmType\":\"None\",\"use32BitWorkerProcess\":true,\"webSocketsEnabled\":false,\"alwaysOn\":false,\"javaVersion\":null,\"javaContainer\":null,\"javaContainerVersion\":null,\"appCommandLine\":\"\",\"managedPipelineMode\":0,\"virtualApplications\":[{\"virtualPath\":\"/\",\"physicalPath\":\"site\\\\wwwroot\",\"preloadEnabled\":false,\"virtualDirectories\":null}],\"winAuthAdminState\":0,\"winAuthTenantState\":0,\"customAppPoolIdentityAdminState\":false,\"customAppPoolIdentityTenantState\":false,\"runtimeADUser\":null,\"runtimeADUserPassword\":null,\"loadBalancing\":1,\"routingRules\":[],\"experiments\":{\"rampUpRules\":[]},\"limits\":null,\"autoHealEnabled\":false,\"autoHealRules\":null,\"tracingOptions\":null,\"vnetName\":\"\",\"siteAuthEnabled\":false,\"siteAuthSettings\":{\"enabled\":null,\"httpApiPrefixPath\":null,\"unauthenticatedClientAction\":null,\"tokenStoreEnabled\":null,\"allowedExternalRedirectUrls\":null,\"defaultProvider\":null,\"clientId\":null,\"clientSecret\":null,\"issuer\":null,\"allowedAudiences\":null,\"additionalLoginParams\":null,\"isAadAutoProvisioned\":false,\"googleClientId\":null,\"googleClientSecret\":null,\"googleOAuthScopes\":null,\"facebookAppId\":null,\"facebookAppSecret\":null,\"facebookOAuthScopes\":null,\"twitterConsumerKey\":null,\"twitterConsumerSecret\":null,\"microsoftAccountClientId\":null,\"microsoftAccountClientSecret\":null,\"microsoftAccountOAuthScopes\":null},\"cors\":null,\"push\":null,\"apiDefinition\":null,\"autoSwapSlotName\":null,\"localMySqlEnabled\":false,\"ipSecurityRestrictions\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2315',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '535f1275-ea9c-49bf-9976-c916110d8b9b',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14952',
  'x-ms-correlation-request-id': '291e1788-1d7f-472f-b250-cb07e377108c',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185530Z:291e1788-1d7f-472f-b250-cb07e377108c',
  date: 'Tue, 25 Oct 2016 18:55:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/config/web?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/config/web\",\"name\":\"webappclitests7065\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"numberOfWorkers\":1,\"defaultDocuments\":[\"Default.htm\",\"Default.html\",\"Default.asp\",\"index.htm\",\"index.html\",\"iisstart.htm\",\"default.aspx\",\"index.php\",\"hostingstart.html\"],\"netFrameworkVersion\":\"v4.0\",\"phpVersion\":\"5.6\",\"pythonVersion\":\"\",\"nodeVersion\":\"\",\"requestTracingEnabled\":false,\"remoteDebuggingEnabled\":false,\"remoteDebuggingVersion\":null,\"httpLoggingEnabled\":false,\"logsDirectorySizeLimit\":35,\"detailedErrorLoggingEnabled\":false,\"publishingUsername\":\"$webappclitests7065\",\"publishingPassword\":null,\"appSettings\":null,\"metadata\":null,\"connectionStrings\":null,\"machineKey\":null,\"handlerMappings\":null,\"documentRoot\":null,\"scmType\":\"None\",\"use32BitWorkerProcess\":true,\"webSocketsEnabled\":false,\"alwaysOn\":false,\"javaVersion\":null,\"javaContainer\":null,\"javaContainerVersion\":null,\"appCommandLine\":\"\",\"managedPipelineMode\":0,\"virtualApplications\":[{\"virtualPath\":\"/\",\"physicalPath\":\"site\\\\wwwroot\",\"preloadEnabled\":false,\"virtualDirectories\":null}],\"winAuthAdminState\":0,\"winAuthTenantState\":0,\"customAppPoolIdentityAdminState\":false,\"customAppPoolIdentityTenantState\":false,\"runtimeADUser\":null,\"runtimeADUserPassword\":null,\"loadBalancing\":1,\"routingRules\":[],\"experiments\":{\"rampUpRules\":[]},\"limits\":null,\"autoHealEnabled\":false,\"autoHealRules\":null,\"tracingOptions\":null,\"vnetName\":\"\",\"siteAuthEnabled\":false,\"siteAuthSettings\":{\"enabled\":null,\"httpApiPrefixPath\":null,\"unauthenticatedClientAction\":null,\"tokenStoreEnabled\":null,\"allowedExternalRedirectUrls\":null,\"defaultProvider\":null,\"clientId\":null,\"clientSecret\":null,\"issuer\":null,\"allowedAudiences\":null,\"additionalLoginParams\":null,\"isAadAutoProvisioned\":false,\"googleClientId\":null,\"googleClientSecret\":null,\"googleOAuthScopes\":null,\"facebookAppId\":null,\"facebookAppSecret\":null,\"facebookOAuthScopes\":null,\"twitterConsumerKey\":null,\"twitterConsumerSecret\":null,\"microsoftAccountClientId\":null,\"microsoftAccountClientSecret\":null,\"microsoftAccountOAuthScopes\":null},\"cors\":null,\"push\":null,\"apiDefinition\":null,\"autoSwapSlotName\":null,\"localMySqlEnabled\":false,\"ipSecurityRestrictions\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2315',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '535f1275-ea9c-49bf-9976-c916110d8b9b',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14952',
  'x-ms-correlation-request-id': '291e1788-1d7f-472f-b250-cb07e377108c',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185530Z:291e1788-1d7f-472f-b250-cb07e377108c',
  date: 'Tue, 25 Oct 2016 18:55:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/config/publishingcredentials/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/publishingcredentials/$webappclitests7065\",\"name\":\"webappclitests7065\",\"type\":\"Microsoft.Web/sites/publishingcredentials\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":null,\"publishingUserName\":\"$webappclitests7065\",\"publishingPassword\":\"nEgJbpBzBd2TGfTATh4fFwXSv7DnAJE7ldaDhsrzbJJTn21mbdsPe90i7nv9\",\"publishingPasswordHash\":null,\"publishingPasswordHashSalt\":null,\"metadata\":null,\"isDeleted\":false,\"scmUri\":\"https://$webappclitests7065:nEgJbpBzBd2TGfTATh4fFwXSv7DnAJE7ldaDhsrzbJJTn21mbdsPe90i7nv9@webappclitests7065.scm.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '22a7da14-6b49-4ca3-b17d-ad7cdd243b5f',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11991',
  'x-ms-correlation-request-id': 'c354994a-cc43-47ba-800f-ee26111acac2',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185531Z:c354994a-cc43-47ba-800f-ee26111acac2',
  date: 'Tue, 25 Oct 2016 18:55:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/config/publishingcredentials/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/publishingcredentials/$webappclitests7065\",\"name\":\"webappclitests7065\",\"type\":\"Microsoft.Web/sites/publishingcredentials\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":null,\"publishingUserName\":\"$webappclitests7065\",\"publishingPassword\":\"nEgJbpBzBd2TGfTATh4fFwXSv7DnAJE7ldaDhsrzbJJTn21mbdsPe90i7nv9\",\"publishingPasswordHash\":null,\"publishingPasswordHashSalt\":null,\"metadata\":null,\"isDeleted\":false,\"scmUri\":\"https://$webappclitests7065:nEgJbpBzBd2TGfTATh4fFwXSv7DnAJE7ldaDhsrzbJJTn21mbdsPe90i7nv9@webappclitests7065.scm.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '22a7da14-6b49-4ca3-b17d-ad7cdd243b5f',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11991',
  'x-ms-correlation-request-id': 'c354994a-cc43-47ba-800f-ee26111acac2',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185531Z:c354994a-cc43-47ba-800f-ee26111acac2',
  date: 'Tue, 25 Oct 2016 18:55:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0ec70375-5ece-4dd2-b9ae-0e8f32593bf5',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11992',
  'x-ms-correlation-request-id': '6e38dfc2-f048-4733-99a7-f76e0e7d9f1f',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185531Z:6e38dfc2-f048-4733-99a7-f76e0e7d9f1f',
  date: 'Tue, 25 Oct 2016 18:55:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0ec70375-5ece-4dd2-b9ae-0e8f32593bf5',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11992',
  'x-ms-correlation-request-id': '6e38dfc2-f048-4733-99a7-f76e0e7d9f1f',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185531Z:6e38dfc2-f048-4733-99a7-f76e0e7d9f1f',
  date: 'Tue, 25 Oct 2016 18:55:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065\",\"name\":\"webappclitests7065\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests7065\",\"state\":\"Running\",\"hostNames\":[\"webappclitests7065.azurewebsites.net\"],\"webSpace\":\"testrg17762-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-069.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg17762-WestUSwebspace/sites/webappclitests7065\",\"repositorySiteName\":\"webappclitests7065\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests7065.azurewebsites.net\",\"webappclitests7065.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests7065.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests7065.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests7216\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-10-25T18:55:14.16\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests7065\",\"trafficManagerHostNames\":null,\"sku\":\"Standard\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"13.93.224.99,13.93.229.16,13.93.230.177,13.93.226.129\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-069\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg17762\",\"defaultHostName\":\"webappclitests7065.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2518',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D22EF151CDBF00"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3a23c027-0254-4d0f-bb7c-3dea9028d26f',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '2c0d26e8-bc14-4a11-b7fc-f02b1e9e3b1c',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185532Z:2c0d26e8-bc14-4a11-b7fc-f02b1e9e3b1c',
  date: 'Tue, 25 Oct 2016 18:55:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065\",\"name\":\"webappclitests7065\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests7065\",\"state\":\"Running\",\"hostNames\":[\"webappclitests7065.azurewebsites.net\"],\"webSpace\":\"testrg17762-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-069.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg17762-WestUSwebspace/sites/webappclitests7065\",\"repositorySiteName\":\"webappclitests7065\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests7065.azurewebsites.net\",\"webappclitests7065.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests7065.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests7065.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests7216\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-10-25T18:55:14.16\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests7065\",\"trafficManagerHostNames\":null,\"sku\":\"Standard\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"13.93.224.99,13.93.229.16,13.93.230.177,13.93.226.129\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-069\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg17762\",\"defaultHostName\":\"webappclitests7065.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2518',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D22EF151CDBF00"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3a23c027-0254-4d0f-bb7c-3dea9028d26f',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '2c0d26e8-bc14-4a11-b7fc-f02b1e9e3b1c',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185532Z:2c0d26e8-bc14-4a11-b7fc-f02b1e9e3b1c',
  date: 'Tue, 25 Oct 2016 18:55:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests7216?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests7216\",\"name\":\"arm-cli-webapp-tests7216\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"arm-cli-webapp-tests7216\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg17762-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":10,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":1,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg17762\",\"reserved\":false,\"mdmId\":\"waws-prod-bay-069_708\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"size\":\"S1\",\"family\":\"S\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1040',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b090193d-0b22-440f-9fa1-07d703768f2b',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': 'a2090a4f-f5cc-4db3-99a2-2e9328337c59',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185532Z:a2090a4f-f5cc-4db3-99a2-2e9328337c59',
  date: 'Tue, 25 Oct 2016 18:55:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests7216?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests7216\",\"name\":\"arm-cli-webapp-tests7216\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"arm-cli-webapp-tests7216\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg17762-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":10,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":1,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg17762\",\"reserved\":false,\"mdmId\":\"waws-prod-bay-069_708\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"size\":\"S1\",\"family\":\"S\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1040',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b090193d-0b22-440f-9fa1-07d703768f2b',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': 'a2090a4f-f5cc-4db3-99a2-2e9328337c59',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185532Z:a2090a4f-f5cc-4db3-99a2-2e9328337c59',
  date: 'Tue, 25 Oct 2016 18:55:32 GMT',
  connection: 'close' });
 return result; }]];