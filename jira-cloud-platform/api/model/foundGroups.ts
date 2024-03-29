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

import { FoundGroup } from './foundGroup';

/**
* The list of groups found in a search, including header text (Showing X of Y matching groups) and total of matched groups.
*/
export class FoundGroups {
    /**
    * Header text indicating the number of groups in the response and the total number of groups found in the search.
    */
    'header'?: string;
    /**
    * The total number of groups found in the search.
    */
    'total'?: number;
    'groups'?: Array<FoundGroup>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "header",
            "baseName": "header",
            "type": "string"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<FoundGroup>"
        }    ];

    static getAttributeTypeMap() {
        return FoundGroups.attributeTypeMap;
    }
}

