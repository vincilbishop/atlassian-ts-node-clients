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

import { GroupName } from './groupName';

export class SimpleListWrapperGroupName {
    'size'?: number;
    'items'?: Array<GroupName>;
    'pagingCallback'?: object;
    'callback'?: object;
    'maxResults'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<GroupName>"
        },
        {
            "name": "pagingCallback",
            "baseName": "pagingCallback",
            "type": "object"
        },
        {
            "name": "callback",
            "baseName": "callback",
            "type": "object"
        },
        {
            "name": "maxResults",
            "baseName": "max-results",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SimpleListWrapperGroupName.attributeTypeMap;
    }
}

