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

import { Fields } from './fields';

/**
* The ID or key of a linked issue.
*/
export class LinkedIssue {
    /**
    * The ID of an issue. Required if `key` isn\'t provided.
    */
    'id'?: string;
    /**
    * The key of an issue. Required if `id` isn\'t provided.
    */
    'key'?: string;
    /**
    * The URL of the issue.
    */
    'self'?: string;
    /**
    * The fields associated with the issue.
    */
    'fields'?: Fields;

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
            "name": "fields",
            "baseName": "fields",
            "type": "Fields"
        }    ];

    static getAttributeTypeMap() {
        return LinkedIssue.attributeTypeMap;
    }
}
