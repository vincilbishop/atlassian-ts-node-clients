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
* Details of a user, group, field, or project role that holds a permission. See [Holder object](#holder-object) in *Get all permission schemes* for more information.
*/
export class PermissionHolder {
    /**
    * The type of permission holder.
    */
    'type': string;
    /**
    * The identifier of permission holder.
    */
    'parameter'?: string;
    /**
    * Expand options that include additional permission holder details in the response.
    */
    'expand'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "parameter",
            "baseName": "parameter",
            "type": "string"
        },
        {
            "name": "expand",
            "baseName": "expand",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PermissionHolder.attributeTypeMap;
    }
}

