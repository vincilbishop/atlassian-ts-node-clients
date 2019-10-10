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

import { JsonTypeBean } from './jsonTypeBean';

/**
* The metadata describing an issue field.
*/
export class FieldMetadata {
    /**
    * Indicates whether the field is required.
    */
    'required': boolean;
    /**
    * The data type of the field.
    */
    'schema'?: JsonTypeBean;
    /**
    * The name of the field.
    */
    'name': string;
    /**
    * The key of the field.
    */
    'key': string;
    /**
    * The URL that can be used to automatically complete the field.
    */
    'autoCompleteUrl'?: string;
    /**
    * Indicates whether the field has a default value.
    */
    'hasDefaultValue'?: boolean;
    /**
    * The list of operations that can be performed on the field.
    */
    'operations': Array<string>;
    /**
    * The list of values allowed in the field.
    */
    'allowedValues'?: Array<object>;
    /**
    * The default value of the field.
    */
    'defaultValue'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean"
        },
        {
            "name": "schema",
            "baseName": "schema",
            "type": "JsonTypeBean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "autoCompleteUrl",
            "baseName": "autoCompleteUrl",
            "type": "string"
        },
        {
            "name": "hasDefaultValue",
            "baseName": "hasDefaultValue",
            "type": "boolean"
        },
        {
            "name": "operations",
            "baseName": "operations",
            "type": "Array<string>"
        },
        {
            "name": "allowedValues",
            "baseName": "allowedValues",
            "type": "Array<object>"
        },
        {
            "name": "defaultValue",
            "baseName": "defaultValue",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return FieldMetadata.attributeTypeMap;
    }
}
