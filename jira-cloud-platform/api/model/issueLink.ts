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

import { IssueLinkType } from './issueLinkType';
import { LinkedIssue } from './linkedIssue';

/**
* Details of a link between issues.
*/
export class IssueLink {
    /**
    * The ID of the issue link.
    */
    'id'?: string;
    /**
    * The URL of the issue link.
    */
    'self'?: string;
    /**
    * The type of link between the issues.
    */
    'type'?: IssueLinkType;
    /**
    * The issue the link joins to.
    */
    'inwardIssue'?: LinkedIssue;
    /**
    * The issue the link originates from.
    */
    'outwardIssue'?: LinkedIssue;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IssueLinkType"
        },
        {
            "name": "inwardIssue",
            "baseName": "inwardIssue",
            "type": "LinkedIssue"
        },
        {
            "name": "outwardIssue",
            "baseName": "outwardIssue",
            "type": "LinkedIssue"
        }    ];

    static getAttributeTypeMap() {
        return IssueLink.attributeTypeMap;
    }
}

