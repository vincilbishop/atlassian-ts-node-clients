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

import { User } from './user';

/**
* A paginated list of users sharing the filter. This includes users that are members of the groups or can browse the projects that the filter is shared with.
*/
export class UserList {
    /**
    * The number of items on the page.
    */
    'size'?: number;
    /**
    * The list of items.
    */
    'items'?: Array<User>;
    /**
    * The maximum number of results that could be on the page.
    */
    'maxResults'?: number;
    /**
    * The index of the first item returned on the page.
    */
    'startIndex'?: number;
    /**
    * The index of the last item returned on the page.
    */
    'endIndex'?: number;

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
            "type": "Array<User>"
        },
        {
            "name": "maxResults",
            "baseName": "max-results",
            "type": "number"
        },
        {
            "name": "startIndex",
            "baseName": "start-index",
            "type": "number"
        },
        {
            "name": "endIndex",
            "baseName": "end-index",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return UserList.attributeTypeMap;
    }
}

