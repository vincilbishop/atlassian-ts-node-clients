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
import { Avatar } from '../model/avatar';
import { ProjectAvatars } from '../model/projectAvatars';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';
import { OAuth } from '../model/models';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ProjectAvatarsApiApiKeys {
}

export class ProjectAvatarsApi {
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

    public setApiKey(key: ProjectAvatarsApiApiKeys, value: string) {
        (this.authentications as any)[ProjectAvatarsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2.accessToken = token;
    }

    /**
     * Loads an avatar for a project.  Specify the avatar\'s local file location in the body of the request. Also, include the following headers:   *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).  *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.  For example:   `curl --request POST `  `--user email@example.com:<api_token> `  `--header \'X-Atlassian-Token: no-check\' `  `--header \'Content-Type: image/< image_type>\' `  `--data-binary \"<@/path/to/file/with/your/avatar>\" `  `--url \'https://your-domain.atlassian.net/rest/api/2/project/{projectIdOrKey}/avatar2\'`  The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square\'s sides is set to the smaller of the height or width of the image.  The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.  After creating the avatar use [Set project avatar](#api-rest-api-2-project-projectIdOrKey-avatar-put) to set it as the project\'s displayed avatar.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * @summary Load project avatar
     * @param projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param body 
     * @param x The X coordinate of the top-left corner of the crop region.
     * @param y The Y coordinate of the top-left corner of the crop region.
     * @param size The length of each side of the crop region.
     */
    public async comAtlassianJiraRestV2IssueProjectResourceCreateProjectAvatarPost (projectIdOrKey: string, body: object, x?: number, y?: number, size?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Avatar;  }> {
        const localVarPath = this.basePath + '/rest/api/2/project/{projectIdOrKey}/avatar2'
            .replace('{' + 'projectIdOrKey' + '}', encodeURIComponent(String(projectIdOrKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'projectIdOrKey' is not null or undefined
        if (projectIdOrKey === null || projectIdOrKey === undefined) {
            throw new Error('Required parameter projectIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueProjectResourceCreateProjectAvatarPost.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling comAtlassianJiraRestV2IssueProjectResourceCreateProjectAvatarPost.');
        }

        if (x !== undefined) {
            localVarQueryParameters['x'] = ObjectSerializer.serialize(x, "number");
        }

        if (y !== undefined) {
            localVarQueryParameters['y'] = ObjectSerializer.serialize(y, "number");
        }

        if (size !== undefined) {
            localVarQueryParameters['size'] = ObjectSerializer.serialize(size, "number");
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
            body: ObjectSerializer.serialize(body, "object")
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
            return new Promise<{ response: http.ClientResponse; body: Avatar;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Avatar");
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
     * Deletes a custom avatar from a project. Note that system avatars cannot be deleted.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * @summary Delete project avatar
     * @param projectIdOrKey The project ID or (case-sensitive) key.
     * @param id The ID of the avatar.
     */
    public async comAtlassianJiraRestV2IssueProjectResourceDeleteProjectAvatarDelete (projectIdOrKey: string, id: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/rest/api/2/project/{projectIdOrKey}/avatar/{id}'
            .replace('{' + 'projectIdOrKey' + '}', encodeURIComponent(String(projectIdOrKey)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'projectIdOrKey' is not null or undefined
        if (projectIdOrKey === null || projectIdOrKey === undefined) {
            throw new Error('Required parameter projectIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueProjectResourceDeleteProjectAvatarDelete.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling comAtlassianJiraRestV2IssueProjectResourceDeleteProjectAvatarDelete.');
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
     * Returns all project avatars, grouped by system and custom avatars.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * @summary Get all project avatars
     * @param projectIdOrKey The ID or (case-sensitive) key of the project.
     */
    public async comAtlassianJiraRestV2IssueProjectResourceGetAllProjectAvatarsGet (projectIdOrKey: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: ProjectAvatars;  }> {
        const localVarPath = this.basePath + '/rest/api/2/project/{projectIdOrKey}/avatars'
            .replace('{' + 'projectIdOrKey' + '}', encodeURIComponent(String(projectIdOrKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'projectIdOrKey' is not null or undefined
        if (projectIdOrKey === null || projectIdOrKey === undefined) {
            throw new Error('Required parameter projectIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueProjectResourceGetAllProjectAvatarsGet.');
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
            return new Promise<{ response: http.ClientResponse; body: ProjectAvatars;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ProjectAvatars");
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
     * Sets the avatar displayed for a project.  Use [Load project avatar](#api-rest-api-2-project-projectIdOrKey-avatar2-post) to store avatars against the project, before using this operation to set the displayed avatar.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * @summary Set project avatar
     * @param projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param avatar 
     */
    public async comAtlassianJiraRestV2IssueProjectResourceUpdateProjectAvatarPut (projectIdOrKey: string, avatar: Avatar, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: object;  }> {
        const localVarPath = this.basePath + '/rest/api/2/project/{projectIdOrKey}/avatar'
            .replace('{' + 'projectIdOrKey' + '}', encodeURIComponent(String(projectIdOrKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'projectIdOrKey' is not null or undefined
        if (projectIdOrKey === null || projectIdOrKey === undefined) {
            throw new Error('Required parameter projectIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueProjectResourceUpdateProjectAvatarPut.');
        }

        // verify required parameter 'avatar' is not null or undefined
        if (avatar === null || avatar === undefined) {
            throw new Error('Required parameter avatar was null or undefined when calling comAtlassianJiraRestV2IssueProjectResourceUpdateProjectAvatarPut.');
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
            body: ObjectSerializer.serialize(avatar, "Avatar")
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
