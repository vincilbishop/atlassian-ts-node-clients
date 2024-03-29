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
* JQL queries that contained users that could not be found
*/
export class JQLQueryWithUnknownUsers {
    /**
    * The original query, for reference
    */
    'originalQuery'?: string;
    /**
    * The converted query, with accountIDs instead of user identifiers, or \'unknown\' for users that could not be found
    */
    'convertedQuery'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "originalQuery",
            "baseName": "originalQuery",
            "type": "string"
        },
        {
            "name": "convertedQuery",
            "baseName": "convertedQuery",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return JQLQueryWithUnknownUsers.attributeTypeMap;
    }
}

