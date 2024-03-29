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

import { WorkflowScheme } from './workflowScheme';

/**
* A workflow scheme along with a list of projects that use it.
*/
export class WorkflowSchemeAssociations {
    /**
    * The list of projects that use the workflow scheme.
    */
    'projectIds': Array<string>;
    /**
    * The workflow scheme.
    */
    'workflowScheme'?: WorkflowScheme;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "projectIds",
            "baseName": "projectIds",
            "type": "Array<string>"
        },
        {
            "name": "workflowScheme",
            "baseName": "workflowScheme",
            "type": "WorkflowScheme"
        }    ];

    static getAttributeTypeMap() {
        return WorkflowSchemeAssociations.attributeTypeMap;
    }
}

