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
* Details of a field that can be used in advanced searches.
*/
export class FieldReferenceData {
    /**
    * The field identifier.
    */
    'value'?: string;
    /**
    * The display name of the field.
    */
    'displayName'?: string;
    /**
    * Indicates whether the field can be used in a query\'s `ORDER BY` clause.
    */
    'orderable'?: FieldReferenceData.OrderableEnum;
    /**
    * Indicates whether the content of this field can be searched.
    */
    'searchable'?: FieldReferenceData.SearchableEnum;
    /**
    * Indicates whether the field provide auto-complete suggestions.
    */
    'auto'?: FieldReferenceData.AutoEnum;
    /**
    * If the item is a custom field, the ID of the custom field.
    */
    'cfid'?: string;
    /**
    * The valid search operators for the field.
    */
    'operators'?: Array<string>;
    /**
    * The data types of items in the field.
    */
    'types'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "orderable",
            "baseName": "orderable",
            "type": "FieldReferenceData.OrderableEnum"
        },
        {
            "name": "searchable",
            "baseName": "searchable",
            "type": "FieldReferenceData.SearchableEnum"
        },
        {
            "name": "auto",
            "baseName": "auto",
            "type": "FieldReferenceData.AutoEnum"
        },
        {
            "name": "cfid",
            "baseName": "cfid",
            "type": "string"
        },
        {
            "name": "operators",
            "baseName": "operators",
            "type": "Array<string>"
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return FieldReferenceData.attributeTypeMap;
    }
}

export namespace FieldReferenceData {
    export enum OrderableEnum {
        True = <any> 'true',
        False = <any> 'false'
    }
    export enum SearchableEnum {
        True = <any> 'true',
        False = <any> 'false'
    }
    export enum AutoEnum {
        True = <any> 'true',
        False = <any> 'false'
    }
}
