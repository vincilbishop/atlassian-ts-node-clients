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
* A change item.
*/
export class ChangeDetails {
    /**
    * The name of the field changed.
    */
    'field'?: string;
    /**
    * The type of the field changed.
    */
    'fieldtype'?: string;
    /**
    * The ID of the field changed.
    */
    'fieldId'?: string;
    /**
    * The details of the original value.
    */
    'from'?: string;
    /**
    * The details of the original value as a string.
    */
    'fromString'?: string;
    /**
    * The details of the new value.
    */
    'to'?: string;
    /**
    * The details of the new value as a string.
    */
    'toString'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "string"
        },
        {
            "name": "fieldtype",
            "baseName": "fieldtype",
            "type": "string"
        },
        {
            "name": "fieldId",
            "baseName": "fieldId",
            "type": "string"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "string"
        },
        {
            "name": "fromString",
            "baseName": "fromString",
            "type": "string"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        },
        {
            "name": "toString",
            "baseName": "toString",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ChangeDetails.attributeTypeMap;
    }
}

