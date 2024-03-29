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
* Details about the default workflow.
*/
export class DefaultWorkflow {
    /**
    * The name of the workflow to set as the default workflow.
    */
    'workflow': string;
    /**
    * Indicates whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to `false`.
    */
    'updateDraftIfNeeded'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "workflow",
            "baseName": "workflow",
            "type": "string"
        },
        {
            "name": "updateDraftIfNeeded",
            "baseName": "updateDraftIfNeeded",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return DefaultWorkflow.attributeTypeMap;
    }
}

