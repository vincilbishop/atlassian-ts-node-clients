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
import { IdBean } from '../model/idBean';
import { PermissionScheme } from '../model/permissionScheme';
import { ProjectIssueSecurityLevels } from '../model/projectIssueSecurityLevels';
import { SecurityScheme } from '../model/securityScheme';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';
import { OAuth } from '../model/models';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ProjectPermissionSchemesApiApiKeys {
}

export class ProjectPermissionSchemesApi {
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

    public setApiKey(key: ProjectPermissionSchemesApiApiKeys, value: string) {
        (this.authentications as any)[ProjectPermissionSchemesApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2.accessToken = token;
    }

    /**
     * Returns the [issue security scheme](https://confluence.atlassian.com/x/J4lKLg) associated with the project.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or the *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * @summary Get project issue security scheme
     * @param projectKeyOrId The project ID or project key (case sensitive).
     */
    public async comAtlassianJiraRestV2IssueProjectIssueSecurityLevelSchemeResourceGetIssueSecuritySchemeGet (projectKeyOrId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: SecurityScheme;  }> {
        const localVarPath = this.basePath + '/rest/api/2/project/{projectKeyOrId}/issuesecuritylevelscheme'
            .replace('{' + 'projectKeyOrId' + '}', encodeURIComponent(String(projectKeyOrId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'projectKeyOrId' is not null or undefined
        if (projectKeyOrId === null || projectKeyOrId === undefined) {
            throw new Error('Required parameter projectKeyOrId was null or undefined when calling comAtlassianJiraRestV2IssueProjectIssueSecurityLevelSchemeResourceGetIssueSecuritySchemeGet.');
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
            return new Promise<{ response: http.ClientResponse; body: SecurityScheme;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "SecurityScheme");
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
     * Assigns a permission scheme with a project. See [Managing project permissions](https://confluence.atlassian.com/x/yodKLg) for more information about permission schemes.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)
     * @summary Assign permission scheme
     * @param projectKeyOrId The project ID or project key (case sensitive).
     * @param idBean 
     * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission.
     */
    public async comAtlassianJiraRestV2PermissionProjectPermissionSchemeResourceAssignPermissionSchemePut (projectKeyOrId: string, idBean: IdBean, expand?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: PermissionScheme;  }> {
        const localVarPath = this.basePath + '/rest/api/2/project/{projectKeyOrId}/permissionscheme'
            .replace('{' + 'projectKeyOrId' + '}', encodeURIComponent(String(projectKeyOrId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'projectKeyOrId' is not null or undefined
        if (projectKeyOrId === null || projectKeyOrId === undefined) {
            throw new Error('Required parameter projectKeyOrId was null or undefined when calling comAtlassianJiraRestV2PermissionProjectPermissionSchemeResourceAssignPermissionSchemePut.');
        }

        // verify required parameter 'idBean' is not null or undefined
        if (idBean === null || idBean === undefined) {
            throw new Error('Required parameter idBean was null or undefined when calling comAtlassianJiraRestV2PermissionProjectPermissionSchemeResourceAssignPermissionSchemePut.');
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
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
            body: ObjectSerializer.serialize(idBean, "IdBean")
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
            return new Promise<{ response: http.ClientResponse; body: PermissionScheme;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PermissionScheme");
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
     * Gets the [permission scheme](https://confluence.atlassian.com/x/yodKLg) associated with the project.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * @summary Get assigned permission scheme
     * @param projectKeyOrId The project ID or project key (case sensitive).
     * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission.
     */
    public async comAtlassianJiraRestV2PermissionProjectPermissionSchemeResourceGetAssignedPermissionSchemeGet (projectKeyOrId: string, expand?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: PermissionScheme;  }> {
        const localVarPath = this.basePath + '/rest/api/2/project/{projectKeyOrId}/permissionscheme'
            .replace('{' + 'projectKeyOrId' + '}', encodeURIComponent(String(projectKeyOrId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'projectKeyOrId' is not null or undefined
        if (projectKeyOrId === null || projectKeyOrId === undefined) {
            throw new Error('Required parameter projectKeyOrId was null or undefined when calling comAtlassianJiraRestV2PermissionProjectPermissionSchemeResourceGetAssignedPermissionSchemeGet.');
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
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
            return new Promise<{ response: http.ClientResponse; body: PermissionScheme;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PermissionScheme");
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
     * Returns all [issue security](https://confluence.atlassian.com/x/J4lKLg) levels for the project that the user has access to.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project, however, issue security levels are only returned for authenticated user with *Set Issue Security* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project.
     * @summary Get project issue security levels
     * @param projectKeyOrId The project ID or project key (case sensitive).
     */
    public async comAtlassianJiraRestV2SecuritylevelProjectSecurityLevelResourceGetSecurityLevelsForProjectGet (projectKeyOrId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: ProjectIssueSecurityLevels;  }> {
        const localVarPath = this.basePath + '/rest/api/2/project/{projectKeyOrId}/securitylevel'
            .replace('{' + 'projectKeyOrId' + '}', encodeURIComponent(String(projectKeyOrId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'projectKeyOrId' is not null or undefined
        if (projectKeyOrId === null || projectKeyOrId === undefined) {
            throw new Error('Required parameter projectKeyOrId was null or undefined when calling comAtlassianJiraRestV2SecuritylevelProjectSecurityLevelResourceGetSecurityLevelsForProjectGet.');
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
            return new Promise<{ response: http.ClientResponse; body: ProjectIssueSecurityLevels;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ProjectIssueSecurityLevels");
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
