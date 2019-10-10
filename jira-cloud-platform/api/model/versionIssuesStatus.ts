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
* Counts of the number of issues in various statuses.
*/
export class VersionIssuesStatus extends null<String, object> {
    /**
    * Count of issues with a status other than *to do*, *in progress*, and *done*.
    */
    'unmapped'?: number;
    /**
    * Count of issues with status *to do*.
    */
    'toDo'?: number;
    /**
    * Count of issues with status *in progress*.
    */
    'inProgress'?: number;
    /**
    * Count of issues with status *done*.
    */
    'done'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "unmapped",
            "baseName": "unmapped",
            "type": "number"
        },
        {
            "name": "toDo",
            "baseName": "toDo",
            "type": "number"
        },
        {
            "name": "inProgress",
            "baseName": "inProgress",
            "type": "number"
        },
        {
            "name": "done",
            "baseName": "done",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VersionIssuesStatus.attributeTypeMap);
    }
}

