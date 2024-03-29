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

import { Application } from './application';
import { RemoteObject } from './remoteObject';

/**
* Details of a remote issue link.
*/
export class RemoteIssueLinkRequest extends null<String, object> {
    /**
    * An identifier for the remote item in the remote system. For example, the global ID for a remote item in Confluence would consist of the app ID and page ID, like this: `appId=456&pageId=123`.  Setting this field enables the remote issue link details to be updated or deleted using remote system and item details as the record identifier, rather than using the record\'s Jira ID.  The maximum length is 255 characters.
    */
    'globalId'?: string;
    /**
    * Details of the remote application the linked item is in. For example, trello.
    */
    'application'?: Application;
    /**
    * Description of the relationship between the issue and the linked item. If not set, the relationship description \"links to\" is used in Jira.
    */
    'relationship'?: string;
    /**
    * Details of the item linked to.
    */
    'object'?: RemoteObject;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "globalId",
            "baseName": "globalId",
            "type": "string"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "Application"
        },
        {
            "name": "relationship",
            "baseName": "relationship",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "RemoteObject"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RemoteIssueLinkRequest.attributeTypeMap);
    }
}

