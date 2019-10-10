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

import { StatusDetails } from './statusDetails';

/**
* Status details for an issue type.
*/
export class IssueTypeWithStatus {
    /**
    * The URL of the issue type\'s status details.
    */
    'self': string;
    /**
    * The ID of the issue type.
    */
    'id': string;
    /**
    * The name of the issue type.
    */
    'name': string;
    /**
    * Indicates whether this issue type represents subtasks.
    */
    'subtask': boolean;
    /**
    * List of status details for the issue type.
    */
    'statuses': Array<StatusDetails>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "subtask",
            "baseName": "subtask",
            "type": "boolean"
        },
        {
            "name": "statuses",
            "baseName": "statuses",
            "type": "Array<StatusDetails>"
        }    ];

    static getAttributeTypeMap() {
        return IssueTypeWithStatus.attributeTypeMap;
    }
}

