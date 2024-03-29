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

import { HealthCheckResult } from './healthCheckResult';

/**
* Details about the Jira instance.
*/
export class ServerInformation {
    /**
    * The base URL of the Jira instance.
    */
    'baseUrl'?: string;
    /**
    * The version of Jira.
    */
    'version'?: string;
    /**
    * The major, minor, and revision version numbers of the Jira version.
    */
    'versionNumbers'?: Array<number>;
    /**
    * The type of server deployment. This is always returned as *Cloud*.
    */
    'deploymentType'?: string;
    /**
    * The build number of the Jira version.
    */
    'buildNumber'?: number;
    /**
    * The timestamp when the Jira version was built.
    */
    'buildDate'?: Date;
    /**
    * The time in Jira when this request was responded to.
    */
    'serverTime'?: Date;
    /**
    * The unique identifier of the Jira version.
    */
    'scmInfo'?: string;
    /**
    * The name of the Jira instance.
    */
    'serverTitle'?: string;
    /**
    * Jira instance health check results. Deprecated and no longer returned.
    */
    'healthChecks'?: Array<HealthCheckResult>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "baseUrl",
            "baseName": "baseUrl",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "versionNumbers",
            "baseName": "versionNumbers",
            "type": "Array<number>"
        },
        {
            "name": "deploymentType",
            "baseName": "deploymentType",
            "type": "string"
        },
        {
            "name": "buildNumber",
            "baseName": "buildNumber",
            "type": "number"
        },
        {
            "name": "buildDate",
            "baseName": "buildDate",
            "type": "Date"
        },
        {
            "name": "serverTime",
            "baseName": "serverTime",
            "type": "Date"
        },
        {
            "name": "scmInfo",
            "baseName": "scmInfo",
            "type": "string"
        },
        {
            "name": "serverTitle",
            "baseName": "serverTitle",
            "type": "string"
        },
        {
            "name": "healthChecks",
            "baseName": "healthChecks",
            "type": "Array<HealthCheckResult>"
        }    ];

    static getAttributeTypeMap() {
        return ServerInformation.attributeTypeMap;
    }
}

