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
* Details about the server Jira is running on.
*/
export class WorkflowTransitionProperty extends null<String, object> {
    /**
    * The key of the transition property. Also known as the name of the transition property.
    */
    'key'?: string;
    /**
    * The value of the transition property.
    */
    'value': string;
    /**
    * The ID of the transition property.
    */
    'id'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WorkflowTransitionProperty.attributeTypeMap);
    }
}

