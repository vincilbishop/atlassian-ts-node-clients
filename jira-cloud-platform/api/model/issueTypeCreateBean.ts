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


export class IssueTypeCreateBean {
    /**
    * The unique name for the issue type. The maximum length is 60 characters. Required.
    */
    'name': string;
    /**
    * The description of the issue type.
    */
    'description'?: string;
    /**
    * Whether the issue type is `subtype` or `standard`. Defaults to `standard`.
    */
    'type'?: IssueTypeCreateBean.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IssueTypeCreateBean.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return IssueTypeCreateBean.attributeTypeMap;
    }
}

export namespace IssueTypeCreateBean {
    export enum TypeEnum {
        Subtask = <any> 'subtask',
        Standard = <any> 'standard'
    }
}
