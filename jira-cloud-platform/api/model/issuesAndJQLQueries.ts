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
* List of issues and JQL queries.
*/
export class IssuesAndJQLQueries {
    /**
    * A list of JQL queries.
    */
    'jqls': Array<string>;
    /**
    * A list of issue IDs.
    */
    'issueIds': Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "jqls",
            "baseName": "jqls",
            "type": "Array<string>"
        },
        {
            "name": "issueIds",
            "baseName": "issueIds",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return IssuesAndJQLQueries.attributeTypeMap;
    }
}

