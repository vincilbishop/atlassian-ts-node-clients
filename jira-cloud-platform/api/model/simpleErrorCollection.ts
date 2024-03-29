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


export class SimpleErrorCollection {
    /**
    * The list of errors by parameter returned by the operation. For example,\"projectKey\": \"Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters.\"
    */
    'errors'?: { [key: string]: string; };
    /**
    * The list of error messages produced by this operation. For example, \"input parameter \'key\' must be provided\"
    */
    'errorMessages'?: Array<string>;
    'httpStatusCode'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "errorMessages",
            "baseName": "errorMessages",
            "type": "Array<string>"
        },
        {
            "name": "httpStatusCode",
            "baseName": "httpStatusCode",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SimpleErrorCollection.attributeTypeMap;
    }
}

