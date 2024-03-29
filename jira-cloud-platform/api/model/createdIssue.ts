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

import { NestedResponse } from './nestedResponse';

/**
* Details about a created issue or subtask.
*/
export class CreatedIssue {
    /**
    * The ID of the created issue or subtask.
    */
    'id'?: string;
    /**
    * The key of the created issue or subtask.
    */
    'key'?: string;
    /**
    * The URL of the created issue or subtask.
    */
    'self'?: string;
    /**
    * The response code and messages related to any requested transition.
    */
    'transition'?: NestedResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "transition",
            "baseName": "transition",
            "type": "NestedResponse"
        }    ];

    static getAttributeTypeMap() {
        return CreatedIssue.attributeTypeMap;
    }
}

