/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { RemoteIssueLink } from '../model/remoteIssueLink';
import { RemoteIssueLinkIdentifies } from '../model/remoteIssueLinkIdentifies';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';
import { OAuth } from '../model/models';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum IssueRemoteLinksApiApiKeys {
}

export class IssueRemoteLinksApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'OAuth2': new OAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: IssueRemoteLinksApiApiKeys, value: string) {
        (this.authentications as any)[IssueRemoteLinksApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2.accessToken = token;
    }

    /**
     * Creates or updates a remote issue link for an issue.  If a `globalId` is provided and a remote issue link with that global ID is found it is updated. Any fields without values in the request are set to null. Otherwise, the remote issue link is created.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @summary Create or update remote issue link
     * @param issueIdOrKey The ID or key of the issue.
     * @param requestBody 
     */
    public async comAtlassianJiraRestV2IssueIssueResourceCreateOrUpdateRemoteIssueLinkPost (issueIdOrKey: string, requestBody: { [key: string]: object; }, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: RemoteIssueLinkIdentifies;  }> {
        const localVarPath = this.basePath + '/rest/api/2/issue/{issueIdOrKey}/remotelink'
            .replace('{' + 'issueIdOrKey' + '}', encodeURIComponent(String(issueIdOrKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'issueIdOrKey' is not null or undefined
        if (issueIdOrKey === null || issueIdOrKey === undefined) {
            throw new Error('Required parameter issueIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueIssueResourceCreateOrUpdateRemoteIssueLinkPost.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling comAtlassianJiraRestV2IssueIssueResourceCreateOrUpdateRemoteIssueLinkPost.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: object; }")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: RemoteIssueLinkIdentifies;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "RemoteIssueLinkIdentifies");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * Deletes the remote issue link from the issue using the link\'s global ID.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is implemented, issue-level security permission to view the issue.
     * @summary Delete remote issue link by global id
     * @param issueIdOrKey The ID or key of the issue.
     * @param globalId The global ID of a remote issue link.
     */
    public async comAtlassianJiraRestV2IssueIssueResourceDeleteRemoteIssueLinkByGlobalIdDelete (issueIdOrKey: string, globalId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/rest/api/2/issue/{issueIdOrKey}/remotelink'
            .replace('{' + 'issueIdOrKey' + '}', encodeURIComponent(String(issueIdOrKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'issueIdOrKey' is not null or undefined
        if (issueIdOrKey === null || issueIdOrKey === undefined) {
            throw new Error('Required parameter issueIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueIssueResourceDeleteRemoteIssueLinkByGlobalIdDelete.');
        }

        // verify required parameter 'globalId' is not null or undefined
        if (globalId === null || globalId === undefined) {
            throw new Error('Required parameter globalId was null or undefined when calling comAtlassianJiraRestV2IssueIssueResourceDeleteRemoteIssueLinkByGlobalIdDelete.');
        }

        if (globalId !== undefined) {
            localVarQueryParameters['globalId'] = ObjectSerializer.serialize(globalId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * Deletes a remote issue link from an issue.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects*, *Edit issues*, and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @summary Delete remote issue link by id
     * @param issueIdOrKey The ID or key of the issue.
     * @param linkId The ID of a remote issue link.
     */
    public async comAtlassianJiraRestV2IssueIssueResourceDeleteRemoteIssueLinkByIdDelete (issueIdOrKey: string, linkId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/rest/api/2/issue/{issueIdOrKey}/remotelink/{linkId}'
            .replace('{' + 'issueIdOrKey' + '}', encodeURIComponent(String(issueIdOrKey)))
            .replace('{' + 'linkId' + '}', encodeURIComponent(String(linkId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'issueIdOrKey' is not null or undefined
        if (issueIdOrKey === null || issueIdOrKey === undefined) {
            throw new Error('Required parameter issueIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueIssueResourceDeleteRemoteIssueLinkByIdDelete.');
        }

        // verify required parameter 'linkId' is not null or undefined
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling comAtlassianJiraRestV2IssueIssueResourceDeleteRemoteIssueLinkByIdDelete.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns a remote issue link for an issue.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @summary Get remote issue link by id
     * @param issueIdOrKey The ID or key of the issue.
     * @param linkId The ID of the remote issue link.
     */
    public async comAtlassianJiraRestV2IssueIssueResourceGetRemoteIssueLinkByIdGet (issueIdOrKey: string, linkId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: RemoteIssueLink;  }> {
        const localVarPath = this.basePath + '/rest/api/2/issue/{issueIdOrKey}/remotelink/{linkId}'
            .replace('{' + 'issueIdOrKey' + '}', encodeURIComponent(String(issueIdOrKey)))
            .replace('{' + 'linkId' + '}', encodeURIComponent(String(linkId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'issueIdOrKey' is not null or undefined
        if (issueIdOrKey === null || issueIdOrKey === undefined) {
            throw new Error('Required parameter issueIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueIssueResourceGetRemoteIssueLinkByIdGet.');
        }

        // verify required parameter 'linkId' is not null or undefined
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling comAtlassianJiraRestV2IssueIssueResourceGetRemoteIssueLinkByIdGet.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: RemoteIssueLink;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "RemoteIssueLink");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @summary Get remote issue links
     * @param issueIdOrKey The ID or key of the issue.
     * @param globalId The global ID of the remote issue link.
     */
    public async comAtlassianJiraRestV2IssueIssueResourceGetRemoteIssueLinksGet (issueIdOrKey: string, globalId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: RemoteIssueLink;  }> {
        const localVarPath = this.basePath + '/rest/api/2/issue/{issueIdOrKey}/remotelink'
            .replace('{' + 'issueIdOrKey' + '}', encodeURIComponent(String(issueIdOrKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'issueIdOrKey' is not null or undefined
        if (issueIdOrKey === null || issueIdOrKey === undefined) {
            throw new Error('Required parameter issueIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueIssueResourceGetRemoteIssueLinksGet.');
        }

        if (globalId !== undefined) {
            localVarQueryParameters['globalId'] = ObjectSerializer.serialize(globalId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: RemoteIssueLink;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "RemoteIssueLink");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * Updates a remote issue link for an issue.  Note: Fields without values in the request are set to null.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @summary Update remote issue link
     * @param issueIdOrKey The ID or key of the issue.
     * @param linkId The ID of the remote issue link.
     * @param requestBody 
     */
    public async comAtlassianJiraRestV2IssueIssueResourceUpdateRemoteIssueLinkPut (issueIdOrKey: string, linkId: string, requestBody: { [key: string]: object; }, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: object;  }> {
        const localVarPath = this.basePath + '/rest/api/2/issue/{issueIdOrKey}/remotelink/{linkId}'
            .replace('{' + 'issueIdOrKey' + '}', encodeURIComponent(String(issueIdOrKey)))
            .replace('{' + 'linkId' + '}', encodeURIComponent(String(linkId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'issueIdOrKey' is not null or undefined
        if (issueIdOrKey === null || issueIdOrKey === undefined) {
            throw new Error('Required parameter issueIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueIssueResourceUpdateRemoteIssueLinkPut.');
        }

        // verify required parameter 'linkId' is not null or undefined
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling comAtlassianJiraRestV2IssueIssueResourceUpdateRemoteIssueLinkPut.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling comAtlassianJiraRestV2IssueIssueResourceUpdateRemoteIssueLinkPut.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: object; }")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: object;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "object");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
}
