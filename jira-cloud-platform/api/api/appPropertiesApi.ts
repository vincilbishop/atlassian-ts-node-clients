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
import { EntityProperty } from '../model/entityProperty';
import { OperationMessage } from '../model/operationMessage';
import { PropertyKeys } from '../model/propertyKeys';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AppPropertiesApiApiKeys {
}

export class AppPropertiesApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
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

    public setApiKey(key: AppPropertiesApiApiKeys, value: string) {
        (this.authentications as any)[AppPropertiesApiApiKeys[key]].apiKey = value;
    }

    /**
     * Deletes an app\'s property.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * @summary Delete app property
     * @param addonKey The key of the app, as defined in its descriptor.
     * @param propertyKey The key of the property.
     */
    public async addonPropertiesResourceDeleteAddonPropertyDelete (addonKey: string, propertyKey: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}'
            .replace('{' + 'addonKey' + '}', encodeURIComponent(String(addonKey)))
            .replace('{' + 'propertyKey' + '}', encodeURIComponent(String(propertyKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'addonKey' is not null or undefined
        if (addonKey === null || addonKey === undefined) {
            throw new Error('Required parameter addonKey was null or undefined when calling addonPropertiesResourceDeleteAddonPropertyDelete.');
        }

        // verify required parameter 'propertyKey' is not null or undefined
        if (propertyKey === null || propertyKey === undefined) {
            throw new Error('Required parameter propertyKey was null or undefined when calling addonPropertiesResourceDeleteAddonPropertyDelete.');
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
     * Gets all the properties of an app.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * @summary Get app properties
     * @param addonKey The key of the app, as defined in its descriptor.
     */
    public async addonPropertiesResourceGetAddonPropertiesGet (addonKey: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: PropertyKeys;  }> {
        const localVarPath = this.basePath + '/rest/atlassian-connect/1/addons/{addonKey}/properties'
            .replace('{' + 'addonKey' + '}', encodeURIComponent(String(addonKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'addonKey' is not null or undefined
        if (addonKey === null || addonKey === undefined) {
            throw new Error('Required parameter addonKey was null or undefined when calling addonPropertiesResourceGetAddonPropertiesGet.');
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
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: PropertyKeys;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PropertyKeys");
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
     * Returns the key and value of an app\'s property.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * @summary Get app property
     * @param addonKey The key of the app, as defined in its descriptor.
     * @param propertyKey The key of the property.
     */
    public async addonPropertiesResourceGetAddonPropertyGet (addonKey: string, propertyKey: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: EntityProperty;  }> {
        const localVarPath = this.basePath + '/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}'
            .replace('{' + 'addonKey' + '}', encodeURIComponent(String(addonKey)))
            .replace('{' + 'propertyKey' + '}', encodeURIComponent(String(propertyKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'addonKey' is not null or undefined
        if (addonKey === null || addonKey === undefined) {
            throw new Error('Required parameter addonKey was null or undefined when calling addonPropertiesResourceGetAddonPropertyGet.');
        }

        // verify required parameter 'propertyKey' is not null or undefined
        if (propertyKey === null || propertyKey === undefined) {
            throw new Error('Required parameter propertyKey was null or undefined when calling addonPropertiesResourceGetAddonPropertyGet.');
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
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: EntityProperty;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EntityProperty");
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
     * Sets the value of an app\'s property. Use this resource to store custom data for your app.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * @summary Set app property
     * @param addonKey The key of the app, as defined in its descriptor.
     * @param propertyKey The key of the property.
     * @param body 
     */
    public async addonPropertiesResourcePutAddonPropertyPut (addonKey: string, propertyKey: string, body: object, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: OperationMessage;  }> {
        const localVarPath = this.basePath + '/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}'
            .replace('{' + 'addonKey' + '}', encodeURIComponent(String(addonKey)))
            .replace('{' + 'propertyKey' + '}', encodeURIComponent(String(propertyKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'addonKey' is not null or undefined
        if (addonKey === null || addonKey === undefined) {
            throw new Error('Required parameter addonKey was null or undefined when calling addonPropertiesResourcePutAddonPropertyPut.');
        }

        // verify required parameter 'propertyKey' is not null or undefined
        if (propertyKey === null || propertyKey === undefined) {
            throw new Error('Required parameter propertyKey was null or undefined when calling addonPropertiesResourcePutAddonPropertyPut.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addonPropertiesResourcePutAddonPropertyPut.');
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
            body: ObjectSerializer.serialize(body, "object")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: OperationMessage;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "OperationMessage");
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