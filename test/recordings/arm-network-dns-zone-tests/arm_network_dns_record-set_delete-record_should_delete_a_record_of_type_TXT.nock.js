// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set559/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set559\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-7a8a-663f86f8d101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.azure-dns.com.\",\"ns2-04.azure-dns.net.\",\"ns3-04.azure-dns.org.\",\"ns4-04.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '507',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-7a8a-663f86f8d101',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1b5a2d63-7283-4464-b9e6-fc03f4d295eb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'ef944a05-c322-4a9a-8aef-c753fd4cb8b6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T125353Z:ef944a05-c322-4a9a-8aef-c753fd4cb8b6',
  date: 'Wed, 17 Aug 2016 12:53:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set559/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set559\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-7a8a-663f86f8d101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.azure-dns.com.\",\"ns2-04.azure-dns.net.\",\"ns3-04.azure-dns.org.\",\"ns4-04.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '507',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-7a8a-663f86f8d101',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1b5a2d63-7283-4464-b9e6-fc03f4d295eb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'ef944a05-c322-4a9a-8aef-c753fd4cb8b6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T125353Z:ef944a05-c322-4a9a-8aef-c753fd4cb8b6',
  date: 'Wed, 17 Aug 2016 12:53:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set559/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set559\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"97c4ca98-5278-4867-b8b3-b03aa22b8513\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[{\"value\":[\"longtexthere\"]}]}}", { 'cache-control': 'private',
  'content-length': '424',
  'content-type': 'application/json; charset=utf-8',
  etag: '97c4ca98-5278-4867-b8b3-b03aa22b8513',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '47c6f105-1c25-4e17-9994-f813fc824c9e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'a0b7b990-dbab-4d77-9bf2-ad20580f2519',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T125354Z:a0b7b990-dbab-4d77-9bf2-ad20580f2519',
  date: 'Wed, 17 Aug 2016 12:53:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set559/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set559\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"97c4ca98-5278-4867-b8b3-b03aa22b8513\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[{\"value\":[\"longtexthere\"]}]}}", { 'cache-control': 'private',
  'content-length': '424',
  'content-type': 'application/json; charset=utf-8',
  etag: '97c4ca98-5278-4867-b8b3-b03aa22b8513',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '47c6f105-1c25-4e17-9994-f813fc824c9e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'a0b7b990-dbab-4d77-9bf2-ad20580f2519',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T125354Z:a0b7b990-dbab-4d77-9bf2-ad20580f2519',
  date: 'Wed, 17 Aug 2016 12:53:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set559/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set559\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"f6f01fe5-0d1e-4259-847e-26da4fecd7b4\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '398',
  'content-type': 'application/json; charset=utf-8',
  etag: 'f6f01fe5-0d1e-4259-847e-26da4fecd7b4',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '07c342e4-380d-4312-8d03-add3883570c1',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'c4056815-23b7-4224-8e0d-3ce5aa3d0806',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T125355Z:c4056815-23b7-4224-8e0d-3ce5aa3d0806',
  date: 'Wed, 17 Aug 2016 12:53:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set559/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set559\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"f6f01fe5-0d1e-4259-847e-26da4fecd7b4\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '398',
  'content-type': 'application/json; charset=utf-8',
  etag: 'f6f01fe5-0d1e-4259-847e-26da4fecd7b4',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '07c342e4-380d-4312-8d03-add3883570c1',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'c4056815-23b7-4224-8e0d-3ce5aa3d0806',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T125355Z:c4056815-23b7-4224-8e0d-3ce5aa3d0806',
  date: 'Wed, 17 Aug 2016 12:53:55 GMT',
  connection: 'close' });
 return result; }]];