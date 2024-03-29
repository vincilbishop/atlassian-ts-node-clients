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
* Details of names changed in the record event.
*/
export class ChangedValueBean {
    /**
    * The name of the field changed.
    */
    'fieldName'?: string;
    /**
    * The value of the field before the change.
    */
    'changedFrom'?: string;
    /**
    * The value of the field after the change.
    */
    'changedTo'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fieldName",
            "baseName": "fieldName",
            "type": "string"
        },
        {
            "name": "changedFrom",
            "baseName": "changedFrom",
            "type": "string"
        },
        {
            "name": "changedTo",
            "baseName": "changedTo",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ChangedValueBean.attributeTypeMap;
    }
}

