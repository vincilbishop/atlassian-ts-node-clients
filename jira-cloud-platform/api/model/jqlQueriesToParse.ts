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
* A list of JQL queries to parse.
*/
export class JqlQueriesToParse {
    /**
    * A list of queries to parse.
    */
    'queries': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "queries",
            "baseName": "queries",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return JqlQueriesToParse.attributeTypeMap;
    }
}
