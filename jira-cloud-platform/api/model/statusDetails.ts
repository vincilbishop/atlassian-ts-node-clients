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

import { StatusCategory } from './statusCategory';

/**
* A status.
*/
export class StatusDetails extends null<String, object> {
    /**
    * The URL of the status.
    */
    'self'?: string;
    /**
    * The description of the status.
    */
    'description'?: string;
    /**
    * The URL of the icon used to represent the status.
    */
    'iconUrl'?: string;
    /**
    * The name of the status.
    */
    'name'?: string;
    /**
    * The ID of the status.
    */
    'id'?: string;
    /**
    * The category assigned to the status.
    */
    'statusCategory'?: StatusCategory;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "iconUrl",
            "baseName": "iconUrl",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "statusCategory",
            "baseName": "statusCategory",
            "type": "StatusCategory"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StatusDetails.attributeTypeMap);
    }
}

