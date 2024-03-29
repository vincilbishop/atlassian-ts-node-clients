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


/**
* Details of the instance\'s attachment settings.
*/
export class AttachmentSettings {
    /**
    * Whether the ability to add attachments is enabled.
    */
    'enabled'?: boolean;
    /**
    * The maximum size of attachments permitted, in bytes.
    */
    'uploadLimit'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "uploadLimit",
            "baseName": "uploadLimit",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AttachmentSettings.attributeTypeMap;
    }
}

